"use client";

import { useState, useEffect } from "react";

/**
 * Hook that returns true when the component is mounted
 * Useful for client-only code
 */
export function useMounted() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return mounted;
}
