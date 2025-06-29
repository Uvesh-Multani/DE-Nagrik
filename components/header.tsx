"use client"

import { useState, useEffect, useRef } from 'react'
import { Montserrat } from "next/font/google";
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Menu, X } from 'lucide-react'
import { cn } from "@/lib/utils";
import Image from "next/image";
import { Button } from "@/components/ui/button"
import { useAuth } from "@/components/auth-context";

const font = Montserrat({
    weight: "600",
    subsets: ["latin"],
  });

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'Rights & Laws', href: '/rights-and-laws' },
  { name: 'Relief Schemes', href: '/relief-schemes' },
  { name: 'History & Culture', href: '/history-culture' },
  { name: 'Constitution', href: '/constitution' },
  { name: 'Feedback', href: '/feedback' },
  { name: 'Chat', href: 'https://nagrik-ai.vercel.app' },
  { name: 'About', href: '/about' },
]

export default function Header() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { user, logout } = useAuth();
  const deriveNameFromEmail = (email: string) => email.split("@")[0];
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement | null>(null);

  // Close dropdown on outside click
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setDropdownOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <header className="bg-white shadow-sm">
      <nav className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
        <Link href="/" className="flex items-center md:px-14">
        <div className="relative h-12 w-12 mr-4">
        <Image fill alt="Logo" src="/logo.png" />
        </div>
        <h1 className={cn("text-xl md:text-3xl font-bold text-black", font.className)}>
          Nagrik
        </h1>
      </Link>
      <div className="hidden md:flex items-center space-x-1">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  pathname === item.href
                    ? 'bg-white text-gray-800'
                    : 'text-gray-800 hover:bg-white/80 hover:text-gray-600'
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>
          <div className="flex items-center space-x-4">
            {/* Auth Buttons or Avatar */}
            {!user ? (
              <>
                <Link href="/login">
                  <Button variant="outline">Login</Button>
                </Link>
                <Link href="/signup">
                  <Button variant="default">Sign Up</Button>
                </Link>
              </>
            ) : (
               <div className="relative" ref={dropdownRef}>
                {/* User Dropdown Trigger */}
                 <button
                   className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-blue-700 flex items-center justify-center text-white font-bold text-lg focus:outline-none shadow-md"
                   aria-haspopup="true"
                   aria-expanded={dropdownOpen}
                   onClick={() => setDropdownOpen((prev) => !prev)}
                 >
                   {(user.name || deriveNameFromEmail(user.email)).charAt(0).toUpperCase()}
                 </button>
                 {/* Dropdown Container */}
                 {dropdownOpen && (
                   <div className="absolute right-0 mt-2 min-w-[240px] bg-white border rounded-lg shadow-xl z-30 flex flex-col p-4 space-y-3 animate-fade-in">
                     <div className="flex items-center space-x-3 pb-2 border-b">
                       <div className="w-12 h-12 rounded-full bg-blue-600 flex items-center justify-center text-white font-bold text-2xl">
                         {(user.name || deriveNameFromEmail(user.email)).charAt(0).toUpperCase()}
                       </div>
                       <div className="flex flex-col">
                         <span className="font-semibold text-gray-900 text-lg">{user.name || deriveNameFromEmail(user.email)}</span>
                         {/* Email can be added here if available in user object */}
                         <span className="text-gray-500 text-sm">{user.email}</span>
                       </div>
                     </div>
                     <button
                       className="w-full mt-2 py-2 px-4 bg-red-50 text-red-600 rounded hover:bg-red-100 text-left font-medium transition"
                       onClick={logout}
                     >
                       Sign Out
                     </button>
                   </div>
                 )}
               </div>
            )}
          
            <Button
              variant="ghost"
              className="md:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <span className="sr-only">Open main menu</span>
              {mobileMenuOpen ? (
                <X className="h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="h-6 w-6" aria-hidden="true" />
              )}
            </Button>
          </div>
        </div>
        {mobileMenuOpen && (
          <div className="md:hidden mt-4">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`block py-2 text-base font-medium transition-colors hover:text-primary ${
                  pathname === item.href ? 'text-primary' : 'text-muted-foreground'
                }`}
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
          </div>
        )}
      </nav>
    </header>
  )
}

