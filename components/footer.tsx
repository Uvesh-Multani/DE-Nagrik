import Link from 'next/link'
import { Facebook, Twitter, Instagram, Linkedin } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-[#f8f2f2] border-t">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="font-bold mb-4 text-gray-800">About Nagrik</h3>
            <p className="text-sm text-gray-600">Empowering Indian citizens with information and engagement for a better tomorrow.</p>
          </div>
          <div>
            <h3 className="font-bold mb-4 text-gray-800">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link href="/rights-and-laws" className="text-sm text-gray-600 hover:text-primary">Rights & Laws</Link></li>
              <li><Link href="/relief-schemes" className="text-sm text-gray-600 hover:text-primary">Relief Schemes</Link></li>
              <li><Link href="/feedback" className="text-sm text-gray-600 hover:text-primary">Feedback</Link></li>
              <li><Link href="https://nagrik-ai.vercel.app" target='_blank' className="text-sm text-gray-600 hover:text-primary">Chat</Link></li>

              <li><Link href="/faq" className="text-sm text-gray-600 hover:text-primary">FAQ</Link></li>
              <li><Link href="/about" className="text-sm text-gray-600 hover:text-primary">About Us</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-4 text-gray-800">Contact Us</h3>
            <p className="text-sm text-gray-600">Email: cypronium2004@gmail.com</p>
            <p className="text-sm text-gray-600">Phone: +91 9499566888</p>
            <p className="text-sm text-gray-600">Address: Nagrik Bhavan, Surat</p>
          </div>
          <div>
            <h3 className="font-bold mb-4 text-gray-800">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-600 hover:text-primary">
                <span className="sr-only">Facebook</span>
                <Facebook className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-600 hover:text-primary">
                <span className="sr-only">Twitter</span>
                <Twitter className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-600 hover:text-primary">
                <span className="sr-only">Instagram</span>
                <Instagram className="h-6 w-6" />
              </a>
              <a href="https://www.linkedin.com/company/nagrik-ai/" className="text-gray-600 hover:text-primary">
                <span className="sr-only">LinkedIn</span>
                <Linkedin className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>
        <div className="mt-8 border-t pt-8 text-center">
          <p className="text-sm text-gray-600">&copy; 2023 <Link href="/" className='hover:text-primary'>Nagrik.</Link> All rights reserved.</p>
          <div className="mt-2 space-x-4">
            <Link href="/privacy-policy" className="text-sm text-gray-600 hover:text-primary">Privacy Policy</Link>
            <Link href="/terms" className="text-sm text-gray-600 hover:text-primary">Terms & Conditions</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

