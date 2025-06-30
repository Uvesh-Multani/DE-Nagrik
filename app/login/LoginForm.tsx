"use client";
import { useAuth } from "@/components/auth-context";
import { useSearchParams } from "next/navigation";
import { useState } from "react";

export default function LoginForm() {
  const { login, loading } = useAuth();
  const validateEmail = (value: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
  const params = useSearchParams();
  const [email, setEmail] = useState("");
  const [emailTouched, setEmailTouched] = useState(false);
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const emailValid = validateEmail(email);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await login(email, password, params.get("redirect") || undefined);
    } catch {
      setError("Invalid credentials");
    }
  };

  return (
    <div className="max-w-md mx-auto mt-16 bg-white p-8 rounded shadow">
      <h2 className="text-2xl font-bold mb-6">Login</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          placeholder="Email"
          value={email}
          onChange={e => setEmail(e.target.value)}
          onBlur={() => setEmailTouched(true)}
          className={`w-full px-3 py-2 border rounded ${emailTouched && !emailValid ? 'border-red-500' : ''}`}
          required
        />
        <div className="relative">
          <input
            type={showPassword ? 'text' : 'password'}
            placeholder="Password"
            value={password}
            onChange={e => setPassword(e.target.value)}
            className="w-full px-3 py-2 border rounded"
            required
          />
          <button
            type="button"
            className="absolute right-3 top-1/2 -translate-y-1/2 text-sm text-gray-500"
            onClick={() => setShowPassword(prev => !prev)}
          >
            {showPassword ? 'Hide' : 'Show'}
          </button>
        </div>
        {emailTouched && !emailValid && <div className="text-red-500">Please enter a valid email address.</div>}
        {error && <div className="text-red-500">{error}</div>}
        <button
          type="submit"
          className="w-full bg-orange-500 text-white py-2 rounded hover:bg-orange-600"
          disabled={loading}
        >
          {loading ? "Logging in..." : "Login"}
        </button>
      </form>
      <div className="mt-4 text-center">
        Don&apos;t have an account?{' '}
        <a href="/signup" className="text-orange-500 hover:underline">Sign Up</a>
      </div>
    </div>
  );
}
