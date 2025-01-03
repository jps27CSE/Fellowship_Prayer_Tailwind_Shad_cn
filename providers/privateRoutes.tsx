"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation"; // Use next/router for client-side navigation
import useAuth from "@/hooks/useAuth"; // Assuming this is your custom hook for authentication

const PrivateRoute = ({ children }: { children: React.ReactNode }) => {
  const { user, loading } = useAuth(); // Get user and loading state from context
  const router = useRouter(); // Use Next.js router

  useEffect(() => {
    if (!loading && !user) {
      // Only redirect if loading is false and user is not authenticated
      router.push("/login");
    }
  }, [user, loading, router]);

  if (loading) {
    return <div>Loading...</div>; // Optionally display a loading spinner or something else
  }

  return <>{children}</>;
};

export default PrivateRoute;
