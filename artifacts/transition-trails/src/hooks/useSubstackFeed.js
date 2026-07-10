import { useState, useEffect } from "react";
import DOMPurify from "dompurify";
import { env } from "../config/env";

const ALLOWED_TAGS = ['p', 'br', 'strong', 'em', 'a', 'ul', 'ol', 'li', 'blockquote', 'h2', 'h3'];
const ALLOWED_ATTR = ['href', 'target', 'rel'];

function sanitizeHtml(dirty) {
  if (!dirty || typeof dirty !== 'string') return '';
  return DOMPurify.sanitize(dirty, { ALLOWED_TAGS, ALLOWED_ATTR });
}

function sanitizeText(dirty) {
  if (!dirty || typeof dirty !== 'string') return '';
  return DOMPurify.sanitize(dirty, { ALLOWED_TAGS: [], ALLOWED_ATTR: [] });
}

const RSS_URL = env.substackFeedUrl;
const API_URL = `${env.rss2jsonUrl}?rss_url=${encodeURIComponent(RSS_URL)}`;

// Cache settings — module-level constants
const CACHE_KEY = "tt_feed_cache";
const CACHE_FRESHNESS_MS = 5 * 60 * 1000;  // 5 minutes — serve from cache, no fetch
const CACHE_MAX_AGE_MS = 60 * 60 * 1000;   // 1 hour — show stale while revalidating

function inferCategory(title, content) {
  const text = (title + " " + content).toLowerCase();
  if (text.includes("salesforce") && (text.includes("cert") || text.includes("admin") || text.includes("org") || text.includes("crm"))) return "salesforce";
  if (text.includes("nonprofit") || text.includes("non-profit") || text.includes("npsp") || text.includes("power of us")) return "nonprofit-tech";
  if (text.includes("cohort") || text.includes("guided trail") || text.includes("foundations trail") || text.includes("digital compass") || text.includes("program") || text.includes("waitlist")) return "program-updates";
  return "career-advice";
}

function estimateReadTime(content) {
  const words = content.replace(/<[^>]*>/g, "").split(/\s+/).length;
  const minutes = Math.ceil(words / 200);
  return `${minutes} min read`;
}

function slugify(title) {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-")
    .trim();
}

function mapItems(items) {
  return items.map(item => {
    let image = null;

    // Try enclosure first (most reliable for actual post images)
    if (item.enclosure && item.enclosure.link && item.enclosure.type && item.enclosure.type.startsWith("image/")) {
      image = item.enclosure.link;
    } else if (item.thumbnail && item.thumbnail !== "") {
      const thumb = item.thumbnail;

      // Reject ALL Substack default/fallback images
      const isDefaultFallback =
        thumb.includes("twitter.jpg") ||
        thumb.includes("subscribe-card") ||
        thumb.includes("twitter-card") ||
        thumb.includes("substack.com/twitter") ||
        thumb.includes("avatars") ||
        thumb.includes("AppIcon") ||
        thumb.includes("Badge") ||
        thumb.includes("post_preview") ||
        thumb.includes("/twitter/") ||
        thumb.includes("version=") ||
        thumb.includes("subscribe");

      if (!isDefaultFallback) {
        // Only use if it's a real media image (from substack-post-media or similar)
        const isRealPostImage =
          thumb.includes("substack-post-media") ||
          thumb.includes("amazonaws.com") ||
          thumb.includes("uploadthing") ||
          (thumb.includes("substackcdn.com") && thumb.includes("public%2Fimages"));

        if (isRealPostImage) {
          image = thumb;
        }
      }
    }

    // If we have a Substack CDN proxied URL pointing to a real S3 image, extract the original
    if (image && image.includes("substackcdn.com/image/fetch") && image.includes("substack-post-media")) {
      const encodedPart = image.split("https%3A%2F%2F");
      if (encodedPart.length > 1) {
        const decoded = "https://" + decodeURIComponent(encodedPart[encodedPart.length - 1]);
        if (decoded.match(/\.(jpg|jpeg|png|webp|gif|avif)($|\?)/i)) {
          image = decoded;
        }
      }
    }

    const rawDescription = item.description
      ? item.description.replace(/<[^>]*>/g, "").slice(0, 200).trim() + "\u2026"
      : "";

    return {
      id: slugify(item.title),
      title: sanitizeText(item.title),
      excerpt: sanitizeText(rawDescription),
      category: inferCategory(item.title, item.content || item.description || ""),
      author: sanitizeText(item.author || "Transition Trails"),
      date: item.pubDate ? item.pubDate.split(" ")[0] : "",
      readTime: estimateReadTime(item.content || item.description || ""),
      image,
      content: sanitizeHtml(item.content || item.description || ""),
      substackUrl: sanitizeText(item.link),
    };
  });
}

export function useSubstackFeed() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchFeed() {
      // ── Stale-while-revalidate cache (sessionStorage) ──────────────────────
      let hasCachedContent = false;

      try {
        const cached = sessionStorage.getItem(CACHE_KEY);
        if (cached) {
          const { posts: cachedPosts, timestamp } = JSON.parse(cached);
          const age = Date.now() - timestamp;

          if (age < CACHE_MAX_AGE_MS) {
            // Show cached content immediately
            setPosts(cachedPosts);
            setLoading(false);
            hasCachedContent = true;

            if (age < CACHE_FRESHNESS_MS) {
              // Still fresh — no network request needed
              return;
            }
            // Stale but within max age — continue to revalidate in background
          }
        }
      } catch (_e) {
        // sessionStorage unavailable (private browsing, storage quota) — fall through to fetch
      }

      // ── Network fetch ───────────────────────────────────────────────────────
      try {
        const res = await fetch(API_URL);
        if (!res.ok) throw new Error("Failed to fetch feed");
        const data = await res.json();
        if (data.status !== "ok") throw new Error("Feed returned error");

        const mapped = mapItems(data.items);
        setPosts(mapped);

        // Cache the fresh result
        try {
          sessionStorage.setItem(CACHE_KEY, JSON.stringify({
            posts: mapped,
            timestamp: Date.now(),
          }));
        } catch (_e) {
          // sessionStorage full or unavailable — continue without caching
        }
      } catch (err) {
        // Only surface the error if we have nothing cached to show
        if (!hasCachedContent) {
          setError(err.message);
        }
      } finally {
        setLoading(false);
      }
    }

    fetchFeed();
  }, []);

  return { posts, loading, error };
}
