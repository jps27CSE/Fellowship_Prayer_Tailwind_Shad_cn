// Save user ID in localStorage
export const saveUserIdToLocalStorage = (userId: string) => {
  localStorage.setItem(USER_ID_KEY, userId); // Save user ID in localStorage
};

// Get user ID from localStorage
export const getUserIdFromLocalStorage = (): string | null => {
  if (typeof window !== "undefined") {
    return localStorage.getItem(USER_ID_KEY); // Get user ID from localStorage
  }
  return null;
};

// Remove user ID from localStorage
export const removeUserIdFromLocalStorage = () => {
  if (typeof window !== "undefined") {
    localStorage.removeItem(USER_ID_KEY); // Remove user ID from localStorage
  }
};
