"use client";
import React, { createContext, useContext, useEffect, useState } from "react";

const deriveNameFromEmail = (email: string) => email.split("@")[0];

// Basic cookie helpers (no external dependency)
const cookie = {
  set: (name: string, value: string, days = 7) => {
    const expires = new Date(Date.now() + days * 864e5).toUTCString();
    document.cookie = `${name}=${encodeURIComponent(value)}; expires=${expires}; path=/`;
  },
  get: (name: string) => {
    return document.cookie
      .split('; ')
      .find((row) => row.startsWith(name + '='))
      ?.split('=')[1];
  },
  remove: (name: string) => {
    document.cookie = `${name}=; Max-Age=0; path=/`;
  },
};
import { useRouter } from "next/navigation";

interface User {
  name: string;
  email: string;
}

interface AuthContextProps {
  user: User | null;
  login: (email: string, password: string, redirectTo?: string) => Promise<void>;
  signup: (email: string, password: string, redirectTo?: string) => Promise<void>;
  logout: () => void;
  loading: boolean;
}

const AuthContext = createContext<AuthContextProps | undefined>(undefined);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  // Load user from cookie or localStorage on mount
  useEffect(() => {
    const cookieUser = cookie.get("nagrik_user");
    if (cookieUser) {
      setUser(JSON.parse(decodeURIComponent(cookieUser)));
      setLoading(false);
      return;
    }
    const storedUser = localStorage.getItem("nagrik_user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
    setLoading(false);
  }, []);

  // Persist user to both cookie and localStorage
  useEffect(() => {
    if (user) {
      cookie.set("nagrik_user", JSON.stringify(user));
      localStorage.setItem("nagrik_user", JSON.stringify(user));
    } else {
      cookie.remove("nagrik_user");
      localStorage.removeItem("nagrik_user");
    }
  }, [user]);

  const login: AuthContextProps["login"] = async (email, password, redirectTo) => {
    const res = await fetch("/api/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });
    if (!res.ok) {
      throw new Error("Invalid credentials");
    }
    const data: { name: string; email: string } = await res.json();
    setUser({ name: data.name, email: data.email });
    if (redirectTo) router.push(redirectTo);
    else router.push("/");
  };

  const signup: AuthContextProps["signup"] = async (email, password, redirectTo) => {
    const name = deriveNameFromEmail(email);
    setUser({ name, email });
    cookie.set("nagrik_user", JSON.stringify({ name, email }));
    localStorage.setItem("nagrik_user", JSON.stringify({ name, email }));
    if (redirectTo) router.push(redirectTo);
    else router.push("/");
  };

  const logout = () => {
    setUser(null);
    cookie.remove("nagrik_user");
    localStorage.removeItem("nagrik_user");
    router.push("/");
  };

  return (
    <AuthContext.Provider value={{ user, login, signup, logout, loading }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error("useAuth must be used within AuthProvider");
  return ctx;
};
