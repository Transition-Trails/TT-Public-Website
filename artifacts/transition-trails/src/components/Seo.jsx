import { useEffect } from "react";

const SITE_URL = "https://transitiontrails.org";
const SITE_NAME = "Transition Trails";
const TWITTER_SITE = "@TransitionTrails";
const DEFAULT_IMAGE = "/logos/TT_Badge_1024px_transparent.png";

function upsertMeta(attr, attrVal, content) {
  let el = document.querySelector(`meta[${attr}="${attrVal}"]`);
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute(attr, attrVal);
    document.head.appendChild(el);
  }
  el.setAttribute("content", content);
}

function upsertLink(rel, href) {
  let el = document.querySelector(`link[rel="${rel}"]`);
  if (!el) {
    el = document.createElement("link");
    el.setAttribute("rel", rel);
    document.head.appendChild(el);
  }
  el.setAttribute("href", href);
}

export default function Seo({
  title,
  description,
  path = "",
  image = DEFAULT_IMAGE,
}) {
  const fullTitle = title
    ? `${title} | ${SITE_NAME}`
    : `${SITE_NAME} — Real Experience. Real Impact.`;
  const canonicalUrl = `${SITE_URL}${path}`;
  const fullImage = image.startsWith("http") ? image : `${SITE_URL}${image}`;

  useEffect(() => {
    const prevTitle = document.title;
    document.title = fullTitle;

    if (description) upsertMeta("name", "description", description);
    upsertLink("canonical", canonicalUrl);

    upsertMeta("property", "og:title", fullTitle);
    if (description) upsertMeta("property", "og:description", description);
    upsertMeta("property", "og:url", canonicalUrl);
    upsertMeta("property", "og:type", "website");
    upsertMeta("property", "og:site_name", SITE_NAME);
    upsertMeta("property", "og:image", fullImage);

    upsertMeta("name", "twitter:card", "summary_large_image");
    upsertMeta("name", "twitter:site", TWITTER_SITE);
    upsertMeta("name", "twitter:title", fullTitle);
    if (description) upsertMeta("name", "twitter:description", description);
    upsertMeta("name", "twitter:image", fullImage);

    return () => {
      document.title = prevTitle;
    };
  }, [fullTitle, description, canonicalUrl, fullImage]);

  return null;
}
