import ThemeToggle from "./ThemeToggle";

function Header({ productNumber = 0 }) {
  return (
    <header className="container max-w-screen-xl mx-auto p-6 flex items-center justify-between relative z-20 mb-8 flex-wrap gap-3">
      <h1 className="text-neutral-900 dark:text-neutral-100 text-2xl font-semibold">
        Inventory App
      </h1>
      <div className="flex items-center gap-4">
        <span className="theme-switcher flex items-center bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-700 rounded-full gap-1">
          <span className="flex items-center justify-center px-4 h-8 rounded-full  dark:hover:bg-neutral-800">
            {productNumber} Products
          </span>
        </span>
        <ThemeToggle />
      </div>
    </header>
  );
}

export default Header;
