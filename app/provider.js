"use client";
import React from "react";
import { ThemeProvider } from "next-themes";
import { useEffect } from "react";
import { useState } from "react";

const Provider = ({ children }) => {
  const [mounted, setMounted] = useState(false); // Corrected destructuring for useState

  useEffect(() => {
    setMounted(true);

   // Read system's theme preference
const systemDarkTheme = window.matchMedia("(prefers-color-scheme: dark)").matches;

// Check if a theme is already stored in localStorage
const storedTheme = localStorage.getItem("theme");

// Debugging logs
console.log("System Dark Theme:", systemDarkTheme);
console.log("Stored Theme:", storedTheme);

// Use systemDarkTheme if no theme is stored, otherwise use the stored theme
const darkTheme = storedTheme === "dark" || (!storedTheme && systemDarkTheme);

// Debugging log
console.log("Selected Theme:", darkTheme ? "dark" : "light");

if (darkTheme) {
  localStorage.setItem("theme", "dark");
} else {
  localStorage.setItem("theme", "light");
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
