"use client"

import { useState } from "react"
import Link from "next/link"
import { Anchor, Menu } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/80 backdrop-blur-sm">
      <div className="container flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <Anchor className="h-6 w-6 text-[#0077B6]" />
          <span className="text-xl font-bold uppercase tracking-wider text-[#0077B6]">
            Bryta Seas<span className="text-sm font-medium tracking-wide"></span>
          </span>
        </Link>
        <nav className="hidden md:flex gap-6">
          <Link href="/" className="text-sm font-medium hover:text-[#0077B6]">
            Home
          </Link>
          <Link href="/services" className="text-sm font-medium hover:text-[#0077B6]">
            Services
          </Link>
          <Link href="/insights" className="text-sm font-medium hover:text-[#0077B6]">
            Insights
          </Link>
          <Link href="/about" className="text-sm font-medium hover:text-[#0077B6]">
            About
          </Link>
          <Link href="/contact" className="text-sm font-medium hover:text-[#0077B6]">
            Contact
          </Link>
        </nav>
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild>
            <Button variant="outline" size="sm" className="md:hidden">
              <Menu className="h-5 w-5" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[300px] sm:w-[400px]">
            <div className="flex flex-col gap-6 pt-10">
              <Link href="/" className="text-lg font-medium" onClick={() => setIsOpen(false)}>
                Home
              </Link>
              <Link href="/services" className="text-lg font-medium" onClick={() => setIsOpen(false)}>
                Services
              </Link>
              <Link href="/insights" className="text-lg font-medium" onClick={() => setIsOpen(false)}>
                Insights
              </Link>
              <Link href="/about" className="text-lg font-medium" onClick={() => setIsOpen(false)}>
                About
              </Link>
              <Link href="/contact" className="text-lg font-medium" onClick={() => setIsOpen(false)}>
                Contact
              </Link>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  )
}
