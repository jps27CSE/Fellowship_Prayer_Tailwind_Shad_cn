export const saveToLocalStorage = (key: string, value: any) => {
  try {
    localStorage.setItem(key, JSON.stringify(value));
  } catch (error) {
    console.error(`Error saving ${key} to localStorage:`, error);
  }
};

/**
 * Get a value from localStorage
 * @param key - The key of the value to retrieve
 * @returns The parsed value, or null if not found
 */
export const getFromLocalStorage = (key: string): any => {
  const value = localStorage.getItem(key);
  return value;
};

/**
 * Remove a value from localStorage
 * @param key - The key of the value to remove
 */
export const removeFromLocalStorage = (key: string) => {
  try {
    localStorage.removeItem(key);
  } catch (error) {
    console.error(`Error removing ${key} from localStorage:`, error);
  }
};
