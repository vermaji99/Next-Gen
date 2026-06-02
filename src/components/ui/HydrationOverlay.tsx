"use client";

import React, { useState, useEffect } from "react";

/**
 * A wrapper component that delays rendering its children until the client has mounted.
 * This is the ultimate "nuclear option" to fix hydration mismatches caused by 
 * browser extensions (like Grammarly, Browser Intelligence, etc.) that inject 
 * HTML/attributes before React can hydrate.
 */
export function HydrationOverlay({ children }: { children: React.ReactNode }) {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  // On the server, we render nothing or a simplified version.
  // On the client, we render the full app only after mounting.
  if (!isMounted) {
    return null;
  }

  return <>{children}</>;
}
