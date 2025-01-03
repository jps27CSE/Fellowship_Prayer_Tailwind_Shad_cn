"use client";
import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";
import { User } from "@/types/user";
const useAuth = (): { user: User | null } => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const checkUser = async () => {
      const { data: authData } = await supabase.auth.getUser();

      if (authData.user) {
        const { data: userData, error } = await supabase
          .from("users")
          .select("name")
          .eq("auth_uuid", authData.user.id)
          .single();

        if (error) {
          console.error("Error fetching user data:", error);
        } else {
          setUser({ ...authData.user, name: userData.name });
        }
      } else {
        setUser(null);
      }

      setLoading(false);
    };

    checkUser();

    // Set up a listener for auth state changes
    const { data: authListener } = supabase.auth.onAuthStateChange(
      (_, session) => {
        if (session?.user) {
          supabase
            .from("users")
            .select("name")
            .eq("auth_uuid", session.user.id)
            .single()
            .then(({ data: userData, error }) => {
              if (error) {
                console.error("Error fetching user data:", error);
              } else {
                setUser({ ...session.user, name: userData.name });
              }
            });
        } else {
          setUser(null);
        }
      },
    );

    return () => {
      authListener?.subscription?.unsubscribe(); // Unsubscribe properly
    };
  }, []);

  return { user, loading };
};

export default useAuth;
