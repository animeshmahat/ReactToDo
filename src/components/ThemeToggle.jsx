import { useEffect, useState } from "react";
import { FiSun, FiMoon } from "react-icons/fi";

export default function ThemeToggle() {
  const [isDark, setIsDark] = useState(() => {
    if (typeof localStorage !== "undefined") {
      return (
        localStorage.getItem("theme") === "dark" ||
        (!localStorage.getItem("theme") &&
          window.matchMedia("(prefers-color-scheme: dark)").matches)
      );
    }
    return false;
  });

  useEffect(() => {
    const root = document.documentElement;
    if (isDark) {
      root.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      root.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [isDark]);
  return (
    <button
      onClick={() => setIsDark((prev) => !prev)}
      className="flex flex-row py-2 px-4 rounded-full border-none bg-violet-800 text-white dark:bg-amber-200 dark:text-gray-800 transition-colors duration-500 ease-in-out"
      aria-label="Toggle Dark Mode"
    >
      {isDark ? (
        <>
          <FiSun size={20} /> Light
        </>
      ) : (
        <>
          <FiMoon size={20} /> Dark
        </>
      )}
    </button>
  );
}
