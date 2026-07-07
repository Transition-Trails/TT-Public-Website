import { useEffect } from "react";

const DOMAIN = "https://www.transitiontrails.org";
const SITE_NAME = "Transition Trails";
const TWITTER_SITE = "@TransitionTrails";

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

export function PageMeta({ title, description, path = "/" }) {
  const canonicalUrl = `${DOMAIN}${path}`;

  useEffect(() => {
    if (title) document.title = title;

    if (description) upsertMeta("name", "description", description);

    upsertLink("canonical", canonicalUrl);

    if (title) upsertMeta("property", "og:title", title);
    if (description) upsertMeta("property", "og:description", description);
    upsertMeta("property", "og:url", canonicalUrl);
    upsertMeta("property", "og:type", "website");
    upsertMeta("property", "og:site_name", SITE_NAME);

    upsertMeta("property", "og:image", `${DOMAIN}/logos/TT_Badge_1024px_transparent.png`);

    upsertMeta("name", "twitter:card", "summary_large_image");
    upsertMeta("name", "twitter:site", TWITTER_SITE);
    if (title) upsertMeta("name", "twitter:title", title);
    if (description) upsertMeta("name", "twitter:description", description);
    upsertMeta("name", "twitter:image", `${DOMAIN}/logos/TT_Badge_1024px_transparent.png`);
  }, [title, description, canonicalUrl]);

  return null;
}
