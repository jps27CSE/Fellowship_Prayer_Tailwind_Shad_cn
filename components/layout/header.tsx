"use client";
import { Moon, Sun, Bell } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import Image from "next/image";
import logoImage from "../../public/logo.png";
import { useTheme } from "../theme-provider";

const Header = () => {
  const [setIsDark] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const { theme, setTheme } = useTheme();
  const isDarkMode = theme === "dark";

  const handleThemeToggle = () => {
    // Toggle the theme
    setTheme(isDarkMode ? "light" : "dark");
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-white shadow-md dark:bg-gray-950 py-4">
      <div className="pr-2 mx-auto flex justify-between items-center px-4">
        {/* App Logo on Left */}
        <Link href="/public" className="flex items-center space-x-2">
          <Image src={logoImage} alt="logo" width={30} height={30} />
          <span className="text-xl font-bold text-gray-900 dark:text-white">
            Fellowship Prayer
          </span>
        </Link>

        {/* Right-side Icons */}
        <div className="flex items-center space-x-4">
          {/* Theme Switcher */}
          <div className="cursor-pointer" onClick={handleThemeToggle}>
            {isDarkMode ? (
              <Sun className="h-6 w-6 text-yellow-500 rotate-0 transition-all" />
            ) : (
              <Moon className="h-6 w-6 text-blue-500 rotate-0 transition-all" />
            )}
          </div>

          {/* Notification Bell */}
          <div className="relative">
            <Bell className="h-6 w-6 text-gray-700 dark:text-gray-300 cursor-pointer" />
            <span className="absolute top-0 right-0 bg-red-500 text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">
              3
            </span>
          </div>

          {/* Profile Picture with Dropdown */}
          <div className="relative">
            <img
              src="/default-profile.png"
              alt="Profile"
              className="h-8 w-8 rounded-full cursor-pointer"
              onClick={() => setIsDropdownOpen((prev) => !prev)}
            />
            {isDropdownOpen && (
              <div className="absolute right-0 mt-2 w-48 bg-white dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded shadow-lg z-10">
                <Link
                  href="/profile"
                  className="block px-4 py-2 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-600"
                >
                  Profile
                </Link>
                <button
                  onClick={() => alert("Logged out")}
                  className="block w-full text-left px-4 py-2 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-600"
                >
                  Logout
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
