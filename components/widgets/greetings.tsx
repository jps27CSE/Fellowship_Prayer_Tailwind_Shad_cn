"use client";
import { useAuthContext } from "@/providers/authProvider";

const GreetingCard = () => {
  const { user, loading } = useAuthContext();

  // Placeholder Bible verse
  const bibleVerse = {
    verse: "For I know the plans I have for you, declares the Lord.",
    reference: "Jeremiah 29:11",
  };

  return (
    <div className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-md text-center">
      {/* Greeting Message */}
      <h1 className="text-2xl font-bold text-gray-800 dark:text-gray-100 mb-2">
        {loading ? "Loading..." : `Welcome, ${user?.name || "Guest"}!`}
      </h1>

      {/* Encouragement or Subtitle */}
      <p className="text-gray-600 dark:text-gray-300 mb-4">
        We&#39;re glad to have you here. May your day be filled with blessings.
      </p>

      {/* Bible Verse */}
      <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-md shadow-sm">
        <p className="text-gray-700 dark:text-gray-300 italic">
          &#34;{bibleVerse.verse}&#34;
        </p>
        <p className="text-gray-500 dark:text-gray-400 text-sm text-center mt-2">
          — {bibleVerse.reference}
        </p>
      </div>
    </div>
  );
};

export default GreetingCard;
