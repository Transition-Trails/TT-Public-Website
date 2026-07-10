import { useState, useEffect } from "react";

const RSS_URL = "https://transitiontrails.substack.com/feed";
const API_URL = `https://api.rss2json.com/v1/api.json?rss_url=${encodeURIComponent(RSS_URL)}`;

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

export function useSubstackFeed() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchFeed() {
      try {
        const res = await fetch(API_URL);
        if (!res.ok) throw new Error("Failed to fetch feed");
        const data = await res.json();
        if (data.status !== "ok") throw new Error("Feed returned error");

        const mapped = data.items.map(item => {
          // Try to get image from enclosure, thumbnail, or content
          let image = null;

          // Try enclosure first (most reliable)
          if (item.enclosure && item.enclosure.link && item.enclosure.type && item.enclosure.type.startsWith("image/")) {
            image = item.enclosure.link;
          } else if (item.thumbnail && item.thumbnail !== "") {
            // Reject Substack default fallbacks - twitter cards, subscribe cards, logo/badge images
            const isDefaultFallback =
              item.thumbnail.includes("twitter.jpg") ||
              item.thumbnail.includes("subscribe-card") ||
              item.thumbnail.includes("twitter-card") ||
              item.thumbnail.includes("substack.com/twitter") ||
              item.thumbnail.includes("avatars") ||
              item.thumbnail.includes("AppIcon") ||
              item.thumbnail.includes("Badge");

            if (!isDefaultFallback) {
              image = item.thumbnail;
            }
          }

          // If we have a Substack CDN proxied URL, extract the original image URL
          if (image && image.includes("substackcdn.com/image/fetch")) {
            const encodedPart = image.split("https%3A%2F%2F");
            if (encodedPart.length > 1) {
              const decoded = "https://" + decodeURIComponent(encodedPart[encodedPart.length - 1]);
              // Only use if it looks like a real image URL
              if (decoded.match(/\.(jpg|jpeg|png|webp|gif)($|\?)/i)) {
                image = decoded;
              }
            }
          }
          return {
            id: slugify(item.title),
            title: item.title,
            excerpt: item.description
              ? item.description.replace(/<[^>]*>/g, "").slice(0, 200).trim() + "\u2026"
              : "",
            category: inferCategory(item.title, item.content || item.description || ""),
            author: item.author || "Transition Trails",
            date: item.pubDate ? item.pubDate.split(" ")[0] : "",
            readTime: estimateReadTime(item.content || item.description || ""),
            image,
            content: item.content || item.description || "",
            substackUrl: item.link,
          };
        });

        setPosts(mapped);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }

    fetchFeed();
  }, []);

  return { posts, loading, error };
}
