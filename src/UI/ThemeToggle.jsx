import { useDarkMode } from "../context/DarkModeContext";
import { HiOutlineMoon, HiOutlineSun } from "react-icons/hi";

function ThemeToggle() {
  const { isDarkMode, toggleDarkMode } = useDarkMode();

  return (
    <fieldset className="theme-switcher flex items-center bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-700 rounded-full gap-1">
      <legend className="sr-only">Select a display theme:</legend>
      <button
        onClick={toggleDarkMode}
        className="flex items-center justify-center w-8 h-8 rounded-full cursor-pointer hover:bg-neutral-100 dark:hover:bg-neutral-800"
      >
        {isDarkMode ? (
          <HiOutlineSun className="w-4 h-4 text-neutral-600 dark:text-neutral-400 hover:text-black dark:hover:text-white" />
        ) : (
          <HiOutlineMoon className="w-4 h-4 text-neutral-600 dark:text-neutral-400 hover:text-black dark:hover:text-white" />
        )}
      </button>
    </fieldset>
  );
}

export default ThemeToggle;
