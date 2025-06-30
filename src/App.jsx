import ThemeToggle from "./components/ThemeToggle";

export default function App() {
  return (
    <div className="w-full overflow-hidden text-black bg-white dark:text-white dark:bg-black transition-colors duration-500 ease-in-out">
      <h1 className="text-red dark:text-white">Hello World</h1>
      <ThemeToggle />
    </div>
  );
}
