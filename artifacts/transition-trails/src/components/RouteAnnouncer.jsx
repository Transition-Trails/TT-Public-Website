import { useEffect, useState } from "react";
import { useLocation } from "wouter";

export default function RouteAnnouncer() {
  const [location] = useLocation();
  const [announcement, setAnnouncement] = useState("");

  useEffect(() => {
    const title = document.title || "New page";
    setAnnouncement(`Navigated to ${title}`);
  }, [location]);

  return (
    <div
      aria-live="polite"
      aria-atomic="true"
      className="sr-only"
    >
      {announcement}
    </div>
  );
}
