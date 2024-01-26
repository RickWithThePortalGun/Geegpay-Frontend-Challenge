"use client";
import React from "react";
import { ThemeProvider } from "next-themes";
import { useEffect } from "react";
import { useState } from "react";

const Provider = ({ children }) => {
  const [mounted, setMounted] = useState(false); // Corrected destructuring for useState

  useEffect(() => {
    setMounted(true);
  
    const darkTheme =
      localStorage.theme === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches);
  
    if (darkTheme) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
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
