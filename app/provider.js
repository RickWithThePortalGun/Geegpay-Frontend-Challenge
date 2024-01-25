"use client";
import React from "react";
import { ThemeProvider } from "next-themes";
import { useEffect } from "react";
import { useState } from "react";

const Provider = ({ children }) => {
  const [mounted, setMounted] = useState(false); // Corrected destructuring for useState

  useEffect(() => {
    setMounted(true);
  }, []);
  if (!mounted) {
    return <>{children}</>;
  }
  return (
    <ThemeProvider enableSystem attribute="class">
      {children}
    </ThemeProvider>
  );
};

export default Provider;
