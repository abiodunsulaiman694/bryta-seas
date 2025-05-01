import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function Footer() {
  return (
    <footer className="border-t bg-white py-8">
      <div className="container">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <h3 className="text-lg font-bold">Bryta Seas</h3>
            <p className="mt-2 text-sm text-gray-600">
              Shaping the future of sustainable shipping.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-bold">Quick Links</h3>
            <ul className="mt-2 space-y-2">
              <li>
                <Link href="/services" className="text-sm text-gray-600 hover:text-teal-700">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/insights" className="text-sm text-gray-600 hover:text-teal-700">
                  Insights
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-sm text-gray-600 hover:text-teal-700">
                  About
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-bold">Contact</h3>
            <address className="mt-2 not-italic text-sm text-gray-600">
              <p className="mt-2">
                <a href="mailto:info@brytaseas.com" className="hover:text-teal-700">
                  info@brytaseas.com
                </a>
              </p>
              <p>
                <a href="tel:+18722749553" className="hover:text-teal-700">
                  +1 (872) 274-9553
                </a>
              </p>
            </address>
          </div>
          <div>
            <h3 className="text-lg font-bold">Newsletter</h3>
            <p className="mt-2 text-sm text-gray-600">
              Subscribe to our newsletter for the latest insights on maritime sustainability.
            </p>
            <div className="mt-4 flex gap-2">
              <input type="email" placeholder="Your email" className="w-full rounded-md border px-3 py-2 text-sm" />
              <Button size="sm">Subscribe</Button>
            </div>
          </div>
        </div>
        <div className="mt-8 border-t pt-8 text-center">
          <p className="text-sm text-gray-600">&copy; {new Date().getFullYear()} Bryta Seas. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
