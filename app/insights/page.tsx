import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { insights } from "@/lib/data"

export const metadata = {
  title: "Insights - Bryta Seas",
  description: "Expert insights on maritime sustainability, compliance, and ESG reputation.",
}

export default function InsightsPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-teal-800 py-16 md:py-24 text-white">
        <div className="container">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl mb-6">Insights</h1>
          <p className="max-w-3xl text-xl text-teal-100">
            Expert perspectives on maritime sustainability, compliance, and ESG reputation.
          </p>
        </div>
      </section>

      {/* Insights Grid */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {insights.map((insight) => (
              <div
                key={insight.id}
                className="group overflow-hidden rounded-lg border bg-white shadow-sm transition-all hover:shadow-md"
              >
                <div className="aspect-video overflow-hidden">
                  <Image
                    src={insight.image || "/placeholder.svg"}
                    alt={insight.title}
                    width={400}
                    height={200}
                    className="h-full w-full object-cover transition-transform group-hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <div className="mb-3 flex items-center gap-2">
                    <span className="rounded-full bg-green-100 px-3 py-1 text-xs font-medium text-green-800">
                      {insight.category}
                    </span>
                    <span className="text-xs text-gray-500">
                      {new Date(insight.date).toLocaleDateString("en-US", {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      })}
                    </span>
                  </div>
                  <Link href={`/insights/${insight.slug}`}>
                    <h2 className="text-xl font-bold hover:text-teal-700 transition-colors">{insight.title}</h2>
                  </Link>
                  <p className="mt-2 text-gray-600">{insight.excerpt}</p>
                  <div className="mt-4 flex items-center justify-between">
                    <Link
                      href={`/insights/${insight.slug}`}
                      className="text-sm font-medium text-teal-700 hover:underline"
                    >
                      Read more →
                    </Link>
                    <span className="text-sm text-gray-500">By {insight.author}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="bg-gray-50 py-16 md:py-24">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">Stay Informed</h2>
            <p className="text-lg text-gray-600 mb-8">
              Subscribe to our newsletter for the latest insights on maritime sustainability and compliance.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <input
                type="email"
                placeholder="Your email address"
                className="w-full sm:w-auto flex-1 rounded-md border px-4 py-2"
              />
              <Button className="bg-green-600 hover:bg-green-700 text-white">Subscribe</Button>
            </div>
            <p className="mt-3 text-sm text-gray-500">We respect your privacy. Unsubscribe at any time.</p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-24">
        <div className="container text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">Need expert guidance?</h2>
          <p className="mx-auto max-w-2xl text-lg text-gray-600 mb-8">
            Our team of maritime sustainability experts is ready to help you navigate the complexities of green
            compliance and ESG reputation.
          </p>
          <Link href="/contact">
            <Button size="lg" className="bg-green-600 hover:bg-green-700 text-white">
              Contact Us
            </Button>
          </Link>
        </div>
      </section>
    </>
  )
}
