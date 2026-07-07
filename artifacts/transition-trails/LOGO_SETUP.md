# Logo Setup — Action Required

The nav, footer, and favicon are using SVG placeholders. Upload these three PNG files to activate the real logos site-wide — no code changes needed after upload.

## Files to upload → `src/assets/`

| File | Used in |
|---|---|
| `TT_Stacked_White_NoTag.png` | Nav (40px) + Footer (48px) |
| `TT_Badge_64px_transparent.png` | Browser favicon |
| `TT_AppIcon_1024px.png` | Apple touch icon (iOS home screen) |

`TT_Stacked_Navy_NoTag.png` and `TT_Badge_1024px_transparent.png` are in `public/logos/` for future use — not wired into any component yet.

## How to upload in Replit

1. Open the file browser (left sidebar)
2. Navigate to `artifacts/transition-trails/src/assets/`
3. Right-click the `assets/` folder → **Upload file**
4. Select the three PNGs above and upload

## After uploading — swap the code in Nav.jsx and Footer.jsx

In **`src/components/Nav.jsx`**, add this import at the top of the file:
```js
import ttLogoWhite from '../assets/TT_Stacked_White_NoTag.png';
```
Then replace the `<svg>` + `<span>` block in the logo Link with:
```jsx
<img src={ttLogoWhite} alt="Transition Trails" style={{ height: "40px", width: "auto" }} />
```

In **`src/components/Footer.jsx`**, same import:
```js
import ttLogoWhite from '../assets/TT_Stacked_White_NoTag.png';
```
Replace the `<svg>` + `<span>` block with:
```jsx
<img src={ttLogoWhite} alt="Transition Trails" style={{ height: "48px", width: "auto" }} />
```

In **`index.html`**, replace the data-URI `<link rel="icon">` with the commented-out PNG links directly above it.

## Why src/assets/ instead of public/logos/

Vite bundles files imported from `src/assets/` — they get content-hashed filenames and are guaranteed to work in all deployment environments. Files in `public/` are served as-is, which caused the broken image (the file existed in code but not on disk).
