import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";

// Accessibility testing in development only — never ships to production
if (import.meta.env.DEV) {
  import("@axe-core/react").then(({ default: axe }) => {
    axe(React, ReactDOM, 1000);
  });
}

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
