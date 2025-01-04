"use client";
import {
  createContext,
  useContext,
  useEffect,
  useState,
  ReactNode,
} from "react";
import { supabase } from "@/lib/supabase";
import { AuthContextType } from "@/types/auth";

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
    const fetchUser = async () => {
      try {
        // Fetch the authenticated user
        const {
          data: { user: authUser },
        } = await supabase.auth.getUser();

        if (authUser) {
          // Fetch the user data from the `users` table
          const { data: user, error } = await supabase
            .from("users")
            .select("*")
            .eq("auth_uuid", authUser.id)
            .single();

          if (error) {
            console.error("Error fetching user data:", error);
          }

          setAuthState({ user, loading: false });
        } else {
          setAuthState({ user: null, loading: false });
        }
      } catch (error) {
        console.error("Error fetching authenticated user:", error);
        setAuthState({ user: null, loading: false });
      }
    };

    // Fetch user data on component mount
    fetchUser();

    // Listen for auth state changes
    const { data: authListener } = supabase.auth.onAuthStateChange(
      async (event, session) => {
        if (session?.user) {
          // Fetch the user data from the `users` table
          const { data: user, error } = await supabase
            .from("users")
            .select("*")
            .eq("auth_uuid", session.user.id)
            .single();

          if (error) {
            console.error("Error fetching user data:", error);
          }

          setAuthState({ user, loading: false });
        } else {
          setAuthState({ user: null, loading: false });
        }
      },
    );

    // Cleanup listener on unmount
    return () => {
      authListener?.subscription?.unsubscribe();
    };
  }, []);

  return (
    <AuthContext.Provider value={authState}>{children}</AuthContext.Provider>
  );
};

export const useAuthContext = () => useContext(AuthContext);
