"use client";

import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { useAuthStore } from "@/store/useAuthStore";

export default function DashboardPage() {
  const { isAuthenticated, logout } = useAuthStore();
  const router = useRouter();

  useEffect(() => {
    if (!isAuthenticated) {
      router.push("/login");
    }
  }, [isAuthenticated, router]);

  return (
    <div className="flex items-center justify-center min-h-screen bg-green-50">
      <div className="text-center bg-white p-6 rounded shadow-md">
        <h1 className="text-2xl font-bold mb-4 text-black">
          Welcome, you are logged in.
        </h1>
        <button
          onClick={() => {
            logout();
            router.push("/login");
          }}
          className="bg-[#5C53BC] text-white px-4 py-2 rounded"
        >
          Logout
        </button>
      </div>
    </div>
  );
}
