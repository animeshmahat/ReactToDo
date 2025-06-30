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
      className="transition-colors duration-500 ease-in-out p-2 rounded-full bg-gray-800 dark:bg-amber-300 text-gray-200 dark:text-gray-800 hover:bg-amber-300 hover:text-gray-800 dark:hover:text-gray-200 dark:hover:bg-gray-600 px-4 py-2"
      aria-label="Toggle Dark Mode"
    >
      {isDark ? <FiSun size={20} /> : <FiMoon size={20} Dark />}
    </button>
  );
}
