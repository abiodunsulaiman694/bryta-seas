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
              Helping maritime players meet environmental standards, build ESG strategies, and improve their digital
              reputation.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-bold">Quick Links</h3>
            <ul className="mt-2 space-y-2">
              <li>
                <Link href="/privacy-policy" className="text-sm text-gray-600 hover:text-teal-700">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-sm text-gray-600 hover:text-teal-700">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="https://linkedin.com" target="_blank" className="text-sm text-gray-600 hover:text-teal-700">
                  LinkedIn
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
                <a href="tel:+11234567890" className="hover:text-teal-700">
                  +1 (123) 456-7890
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
