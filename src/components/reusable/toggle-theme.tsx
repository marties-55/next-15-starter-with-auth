"use client";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import React from "react";
import { Button } from "../ui/button";

export const ToggleTheme = () => {
  const { setTheme } = useTheme();
  const [theme, setThemeState] = React.useState<string | null>(null);

  React.useEffect(() => {
    const storedTheme = localStorage.getItem("theme") || "light";
    setThemeState(storedTheme);
    setTheme(storedTheme);
  }, [setTheme]);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
    setThemeState(newTheme);
  };
  return (
    <Button
      variant="outline"
      size="icon"
      onClick={toggleTheme}
      className="mx-auto"
    >
      {theme == "dark" ? (
        <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
      ) : (
        <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0 text-zinc-800" />
      )}
    </Button>
  );
};
