"use client";
import {
  createContext,
  useContext,
  useEffect,
  useState,
  ReactNode,
} from "react";
import { supabase } from "@/lib/supabase"; // Import your supabase instance

interface AuthContextType {
  user: any; // Use the correct type for your user object if available
  loading: boolean;
}

const AuthContext = createContext<AuthContextType>({
  user: null,
  loading: true,
});

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [authState, setAuthState] = useState<AuthContextType>({
    user: null,
    loading: true,
  });

  useEffect(() => {
    // Fetch current user
    const fetchUser = async () => {
      const {
        data: { user },
      } = await supabase.auth.getUser();
      setAuthState({ user, loading: false });
    };

    // Call fetchUser on mount
    fetchUser();

    // Listen for changes in authentication state (login, logout, session change)
    const { data: authListener } = supabase.auth.onAuthStateChange(
      (event, session) => {
        setAuthState({ user: session?.user ?? null, loading: false });
      },
    );

    // Cleanup listener on component unmount
    return () => {
      authListener?.subscription?.unsubscribe();
    };
  }, []);

  return (
    <AuthContext.Provider value={authState}>{children}</AuthContext.Provider>
  );
};

export const useAuthContext = () => useContext(AuthContext);
