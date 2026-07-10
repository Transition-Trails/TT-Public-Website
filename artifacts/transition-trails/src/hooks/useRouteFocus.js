import { useEffect, useRef } from "react";
import { useLocation } from "wouter";

export function useRouteFocus() {
  const [location] = useLocation();
  const mainRef = useRef(null);

  useEffect(() => {
    if (mainRef.current) {
      mainRef.current.focus();
    }
  }, [location]);

  return mainRef;
}
