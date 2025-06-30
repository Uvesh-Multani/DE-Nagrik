"use client";
import { useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";

export default function SignupForm() {
  // Validation helpers
  const validateEmail = (value: string) => {
    // Simple RFC5322-inspired pattern used by many platforms (e.g. React Hook Form docs)
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(value);
  };

  // Validation helpers
  // Validate 10-digit local phone number (country code handled separately)
  const validatePhone = (value: string) => {
    const digitsRegex = /^\d{10}$/; // exactly 10 numeric digits
    return digitsRegex.test(value);
  };

  const validatePassword = (value: string) => {
    /*
      Requirements:
      - Minimum 8 characters
      - At least 1 uppercase letter
      - At least 1 digit
      - At least 1 special character
    */
    const passRegex = /^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+=\-{}\[\]:;"'<>.,?/]).{8,}$/;
    return passRegex.test(value);
  };

  const router = useRouter();
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const params = useSearchParams();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [countryCode, setCountryCode] = useState("+91");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  // UI/interaction states
  const [phoneTouched, setPhoneTouched] = useState(false);
  const [passwordTouched, setPasswordTouched] = useState(false);
  const [confirmTouched, setConfirmTouched] = useState(false);
  const [emailTouched, setEmailTouched] = useState(false);
  const [passwordFocused, setPasswordFocused] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  // Derived validation state
  const emailValid = validateEmail(email);
  const phoneValid = validatePhone(phone);
  const passwordValid = validatePassword(password);
  const confirmValid = confirmPassword === password && confirmPassword !== "";
  const isFormValid =
    name.trim() !== "" &&
    emailValid &&
    phoneValid &&
    passwordValid &&
    confirmValid;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Prevent submission if somehow triggered while invalid
    if (!isFormValid) {
      setError("Please correct the highlighted fields.");
      return;
    }

    setLoading(true);
    setError("");
    try {
      const res = await fetch("/api/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, phone: `${countryCode}${phone}`, password }),
      });
      if (!res.ok) {
        const data = await res.json();
        setError(data.message || "Signup failed");
      } else {
        router.push("/login");
      }
    } catch {
      setError("Signup failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-md mx-auto mt-16 bg-white p-8 rounded shadow">
      <h2 className="text-2xl font-bold mb-6">Sign Up</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={e => setName(e.target.value)}
          className="w-full px-3 py-2 border rounded"
          required
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={e => setEmail(e.target.value)}
          onBlur={() => setEmailTouched(true)}
          className={`w-full px-3 py-2 border rounded ${emailTouched && !emailValid ? 'border-red-500' : ''}`}
          required
        />
        {emailTouched && !emailValid && <div className="text-red-500">Please enter a valid email address.</div>}
        <div className="flex">
          <input
            type="text"
            value={countryCode}
            onChange={e => setCountryCode(e.target.value)}
            className="w-20 px-3 py-2 border rounded-l"
          />
          <input
            type="tel"
            placeholder="Phone Number"
            value={phone}
            onChange={e => setPhone(e.target.value)}
            onBlur={() => setPhoneTouched(true)}
            className={`flex-1 px-3 py-2 border-t border-b border-r rounded-r ${phoneTouched && !phoneValid ? 'border-red-500' : ''}`}
            required
          />
        </div>
        {phoneTouched && !phoneValid && <div className="text-red-500">Invalid phone number. It should contain exactly 10 digits.</div>}
        <div>
          <div className="relative">
            <input
              type={showPassword ? 'text' : 'password'}
              placeholder="Password"
              value={password}
              onChange={e => setPassword(e.target.value)}
              onBlur={() => { setPasswordTouched(true); setPasswordFocused(false); }}
              onFocus={() => setPasswordFocused(true)}
              className={`w-full px-3 py-2 border rounded ${passwordTouched && !passwordValid ? 'border-red-500' : ''}`}
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
          {(!passwordValid && (passwordFocused || passwordTouched)) && (
            <div className="text-red-500">
              Password must be at least 8 characters, contain at least one uppercase letter, one digit, and one special character.
            </div>
          )}
        </div>
        <input
          type={showPassword ? 'text' : 'password'}
          placeholder="Confirm Password"
          value={confirmPassword}
          onChange={e => setConfirmPassword(e.target.value)}
          onBlur={() => setConfirmTouched(true)}
          className={`w-full px-3 py-2 border rounded ${confirmTouched && !confirmValid ? 'border-red-500' : ''}`}
          required
        />
        {confirmTouched && !confirmValid && <div className="text-red-500">Passwords do not match.</div>}
        {error && <div className="text-red-500">{error}</div>}
        <button
          type="submit"
          className="w-full bg-orange-500 text-white py-2 rounded hover:bg-orange-600"
          disabled={loading || !isFormValid}
        >
          {loading ? "Signing up..." : "Sign Up"}
        </button>
      </form>
      <div className="mt-4 text-center">
        Already have an account?{' '}
        <a href="/login" className="text-orange-500 hover:underline">Login</a>
      </div>
    </div>
  );
}
