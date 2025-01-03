"use client";
import DashboardLayout from "@/components/layout/dashboard-layout";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import GreetingCard from "@/components/widgets/greetings";

export default function DashboardPage() {
  const router = useRouter();
  const token = localStorage.getItem("userId");
  useEffect(() => {
    if (!token) {
      router.push("/login");
    }
  }, []);
  return (
    <DashboardLayout>
      <div>
        <GreetingCard />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Add other widgets here */}
      </div>
    </DashboardLayout>
  );
}
