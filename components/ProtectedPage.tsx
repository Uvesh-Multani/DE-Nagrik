"use client";
import { useAuth } from "@/components/auth-context";
import { usePathname, useRouter } from "next/navigation";
import { useEffect } from "react";

export default function ProtectedPage({ children }: { children: React.ReactNode }) {
  const { user, loading } = useAuth();
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    if (!loading && !user) {
      // Redirect to login with intended destination
      router.replace(`/login?redirect=${encodeURIComponent(pathname)}`);
    }
  }, [user, loading, pathname, router]);

  if (loading || !user) {
    return <div className="text-center py-20 text-lg">Loading...</div>;
  }

  return <>{children}</>;
}
