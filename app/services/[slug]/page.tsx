import Image from "next/image"
import Link from "next/link"
import { MessageSquare, BarChart3, FileText, Newspaper, Laptop, Globe, ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import { services } from "@/lib/data"
import { notFound } from "next/navigation"

export function generateMetadata({ params }: { params: { slug: string } }) {
  const service = services.find((s) => s.slug === params.slug)

  if (!service) {
    return {
      title: "Service Not Found - Bryta Seas",
    }
  }

  return {
    title: `${service.title} - Bryta Seas`,
    description: service.shortDescription,
  }
}

export function generateStaticParams() {
  return services.map((service) => ({
    slug: service.slug,
  }))
}

export default function ServicePage({ params }: { params: { slug: string } }) {
  const service = services.find((s) => s.slug === params.slug)

  if (!service) {
    notFound()
  }

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case "MessageSquare":
        return <MessageSquare className="h-12 w-12 text-green-600" />
      case "BarChart3":
        return <BarChart3 className="h-12 w-12 text-green-600" />
      case "FileText":
        return <FileText className="h-12 w-12 text-green-600" />
      case "Newspaper":
        return <Newspaper className="h-12 w-12 text-green-600" />
      case "Laptop":
        return <Laptop className="h-12 w-12 text-green-600" />
      case "Globe":
        return <Globe className="h-12 w-12 text-green-600" />
      default:
        return <MessageSquare className="h-12 w-12 text-green-600" />
    }
  }

  return (
    <>
      {/* Hero Section */}
      <section className="bg-teal-800 py-16 md:py-24 text-white">
        <div className="container">
          <Link href="/services" className="inline-flex items-center text-teal-100 hover:text-white mb-6">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Services
          </Link>
          <div className="flex flex-col md:flex-row md:items-center gap-6">
            <div className="rounded-full bg-teal-700 p-4">{getIcon(service.icon)}</div>
            <div>
              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">{service.title}</h1>
              <p className="mt-4 max-w-3xl text-xl text-teal-100">{service.shortDescription}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Service Description */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
            <div>
              <h2 className="text-3xl font-bold mb-6">Overview</h2>
              <p className="text-gray-700 text-lg mb-8">{service.fullDescription}</p>

              <h3 className="text-2xl font-bold mb-4">Key Benefits</h3>
              <ul className="space-y-3 mb-8">
                {service.benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <MessageSquare className="h-6 w-6 text-green-600 mt-1 flex-shrink-0" />
                    <span className="text-gray-700">{benefit}</span>
                  </li>
                ))}
              </ul>

              <Link href="/contact">
                <Button size="lg" className="bg-green-600 hover:bg-green-700 text-white">
                  Request a Consultation
                </Button>
              </Link>
            </div>
            <div>
              <Image
                src="/placeholder.svg?height=500&width=600"
                alt={service.title}
                width={600}
                height={500}
                className="rounded-lg mb-8"
              />

              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-2xl font-bold mb-4">Our Approach</h3>
                <ol className="space-y-4">
                  {service.process.map((step, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <div className="flex h-6 w-6 items-center justify-center rounded-full bg-green-600 text-white flex-shrink-0 mt-1">
                        {index + 1}
                      </div>
                      <div>
                        <h4 className="font-bold">{step.title}</h4>
                        <p className="text-gray-600">{step.description}</p>
                      </div>
                    </li>
                  ))}
                </ol>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="bg-gray-50 py-16 md:py-24">
        <div className="container">
          <h2 className="text-3xl font-bold mb-12 text-center">Success Stories</h2>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            {service.caseStudies.map((caseStudy, index) => (
              <div key={index} className="bg-white p-8 rounded-lg shadow-sm">
                <h3 className="text-xl font-bold mb-3">{caseStudy.title}</h3>
                <p className="text-gray-600">{caseStudy.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Related Services */}
      <section className="py-16 md:py-24">
        <div className="container">
          <h2 className="text-3xl font-bold mb-12 text-center">Related Services</h2>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {services
              .filter((s) => s.id !== service.id)
              .slice(0, 3)
              .map((relatedService) => (
                <div key={relatedService.id} className="flex flex-col border rounded-lg overflow-hidden">
                  <div className="p-6">
                    <div className="mb-4 rounded-full bg-green-100 p-3 w-fit">{getIcon(relatedService.icon)}</div>
                    <h3 className="text-xl font-bold mb-2">{relatedService.title}</h3>
                    <p className="text-gray-600 mb-4">{relatedService.shortDescription}</p>
                    <div className="mt-auto">
                      <Link href={`/services/${relatedService.slug}`}>
                        <Button variant="outline">Learn More</Button>
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-teal-800 py-16 md:py-24 text-white">
        <div className="container text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">Ready to chart your green course?</h2>
          <p className="mx-auto max-w-2xl text-lg text-teal-100 mb-8">
            Let our experts help you navigate the complexities of maritime sustainability.
          </p>
          <Link href="/contact">
            <Button size="lg" className="bg-green-600 hover:bg-green-700 text-white">
              Schedule a Consultation
            </Button>
          </Link>
        </div>
      </section>
    </>
  )
}
