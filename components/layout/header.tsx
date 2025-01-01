import { Moon, Sun } from "lucide-react";
import Link from "next/link";

const Header = () => {
  let isDark = false;
  return (
    <header className="sticky top-0 z-50 w-full bg-white shadow-md dark:bg-gray-800 py-2">
      <div className="container mx-auto flex justify-between items-center px-4">
        {/* App Name on Left */}
        <Link
          href="/public"
          className="text-xl font-bold text-gray-900 dark:text-white"
        >
          Fellowship Prayer
        </Link>

        {/* Theme Switcher Button on Right */}
        <div className="flex items-center cursor-pointer transition-transform duration-500">
          {isDark ? (
            <Sun className="h-6 w-6 text-yellow-500" />
          ) : (
            <Moon className="h-6 w-6 text-blue-500" />
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
