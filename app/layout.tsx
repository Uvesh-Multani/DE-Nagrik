import './globals.css'
import { Inter } from 'next/font/google'
import Header from '@/components/header'
import Footer from '@/components/footer'
import { Analytics } from '@vercel/analytics/next';
import { AuthProvider } from '@/components/auth-context';

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Nagrik',
  description: 'Empowering Indian citizens with comprehensive information and engagement',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
          <link rel="icon" href="/logo.png" />
        </head> 
      <body className={`${inter.className} bg-[#ffffff]`}>
        <AuthProvider>
          <div className="flex flex-col min-h-screen">
            <Header />
            <main className="flex-grow container mx-auto px-4 py-8">
              {children}
              <Analytics />
            </main>
            <Footer />
          </div>
        </AuthProvider>
      </body>
    </html>
  )
}

