import Image from "next/image"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import { insights } from "@/lib/data"
import { notFound } from "next/navigation"

export function generateMetadata({ params }: { params: { slug: string } }) {
  const insight = insights.find((i) => i.slug === params.slug)

  if (!insight) {
    return {
      title: "Insight Not Found - Bryta Seas",
    }
  }

  return {
    title: `${insight.title} - Bryta Seas`,
    description: insight.excerpt,
  }
}

export function generateStaticParams() {
  return insights.map((insight) => ({
    slug: insight.slug,
  }))
}

export default function InsightPage({ params }: { params: { slug: string } }) {
  const insight = insights.find((i) => i.slug === params.slug)

  if (!insight) {
    notFound()
  }

  const relatedInsights = insights.filter((i) => i.id !== insight.id).slice(0, 3)

  return (
    <>
      {/* Hero Section */}
      <section className="bg-white py-16 md:py-24">
        <div className="container">
          <Link href="/insights" className="inline-flex items-center text-teal-700 hover:text-teal-800 mb-6">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Insights
          </Link>
          <div className="mx-auto max-w-3xl">
            <div className="mb-6 flex items-center gap-3">
              <span className="rounded-full bg-green-100 px-3 py-1 text-sm font-medium text-green-800">
                {insight.category}
              </span>
              <span className="text-sm text-gray-500">
                {new Date(insight.date).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </span>
            </div>
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl mb-6">{insight.title}</h1>
            <p className="text-xl text-gray-600 mb-8">{insight.excerpt}</p>
            <div className="flex items-center gap-3 mb-8">
              <div className="h-10 w-10 rounded-full bg-gray-200"></div>
              <div>
                <p className="font-medium">By {insight.author}</p>
                <p className="text-sm text-gray-500">Maritime Sustainability Expert</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Image */}
      <section className="pb-16 md:pb-24">
        <div className="container">
          <div className="mx-auto max-w-4xl">
            <div className="aspect-[21/9] overflow-hidden rounded-lg">
              <Image
                src={insight.image || "/placeholder.svg"}
                alt={insight.title}
                width={900}
                height={400}
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="pb-16 md:pb-24">
        <div className="container">
          <div className="mx-auto max-w-3xl prose prose-lg">
            <div dangerouslySetInnerHTML={{ __html: insight.content }} className="space-y-8"></div>
          </div>
        </div>
      </section>

      {/* Related Insights */}
      <section className="bg-gray-50 py-16 md:py-24">
        <div className="container">
          <h2 className="text-3xl font-bold mb-12 text-center">Related Insights</h2>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {relatedInsights.map((relatedInsight) => (
              <div
                key={relatedInsight.id}
                className="group overflow-hidden rounded-lg border bg-white shadow-sm transition-all hover:shadow-md"
              >
                <div className="aspect-video overflow-hidden">
                  <Image
                    src={relatedInsight.image || "/placeholder.svg"}
                    alt={relatedInsight.title}
                    width={400}
                    height={200}
                    className="h-full w-full object-cover transition-transform group-hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <Link href={`/insights/${relatedInsight.slug}`}>
                    <h3 className="text-xl font-bold hover:text-teal-700 transition-colors">{relatedInsight.title}</h3>
                  </Link>
                  <p className="mt-2 text-gray-600">{relatedInsight.excerpt}</p>
                  <Link
                    href={`/insights/${relatedInsight.slug}`}
                    className="mt-4 inline-block text-sm font-medium text-teal-700 hover:underline"
                  >
                    Read more →
                  </Link>
                </div>
              </div>
            ))}
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
