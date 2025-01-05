import { supabase } from "@/lib/supabase";

export const saveToLocalStorage = (key: string, value: string) => {
  try {
    localStorage.setItem(key, JSON.stringify(value));
  } catch (error) {
    console.error(`Error saving ${key} to localStorage:`, error);
  }
};

export const getFromLocalStorage = <T>(key: string): T | null => {
  if (typeof window !== "undefined") {
    const value = localStorage.getItem(key);

    if (value) {
      try {
        return JSON.parse(value) as T;
      } catch (error) {
        console.error(`Error parsing value for key "${key}":`, error);
        return null;
      }
    }
  }

  return null;
};

export const logoutFromSupabaseandLocal = async () => {
  await supabase.auth.signOut();
  localStorage.removeItem("userId");
};
