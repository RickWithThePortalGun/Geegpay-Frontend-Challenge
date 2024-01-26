"use client";
import React from "react";
import { ThemeProvider } from "next-themes";
import { useEffect } from "react";
import { useState } from "react";

const Provider = ({ children }) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);

const systemDarkTheme = window.matchMedia("(prefers-color-scheme: dark)").matches;

const storedTheme = localStorage.getItem("theme");

console.log("System Dark Theme:", systemDarkTheme);
console.log("Stored Theme:", storedTheme);

const darkTheme = storedTheme === "dark" || (!storedTheme && systemDarkTheme);

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
