import Image from "next/image"
import Link from "next/link"
import { MessageSquare, BarChart3, FileText, Newspaper, Laptop, Globe } from "lucide-react"
import { Button } from "@/components/ui/button"
import { services, insights } from "@/lib/data"

export default function Home() {
  // Function to get the appropriate icon based on the icon name
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case "MessageSquare":
        return <MessageSquare className="h-8 w-8 text-green-600" />
      case "BarChart3":
        return <BarChart3 className="h-8 w-8 text-green-600" />
      case "FileText":
        return <FileText className="h-8 w-8 text-green-600" />
      case "Newspaper":
        return <Newspaper className="h-8 w-8 text-green-600" />
      case "Laptop":
        return <Laptop className="h-8 w-8 text-green-600" />
      case "Globe":
        return <Globe className="h-8 w-8 text-green-600" />
      default:
        return <MessageSquare className="h-8 w-8 text-green-600" />
    }
  }

  return (
    <>
      {/* Hero Section */}
      <section className="relative h-[600px] md:h-[700px] overflow-hidden">
        <div className="absolute inset-0 bg-teal-900/70 z-10"></div>
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
          poster="/placeholder.svg?height=700&width=1400"
        >
          <source src="/assets/hero-video.mp4" type="video/mp4" />
        </video>
        <div className="container relative z-20 flex h-full flex-col items-start justify-center text-white">
          <h1 className="max-w-3xl text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
            SHAPING THE FUTURE OF SUSTAINABLE SHIPPING
          </h1>
          <p className="mt-4 max-w-2xl text-xl md:text-2xl">Compliance. Reputation. Sustainability.</p>
          <Button className="mt-8 bg-green-600 hover:bg-green-700 text-white">
            <Link href="/contact">LET&apos;S TALK</Link>
          </Button>
        </div>
      </section>

      {/* About Us Section */}
      <section id="about" className="py-16 md:py-24">
        <div className="container">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-8">ABOUT US</h2>
          <p className="max-w-3xl text-lg text-gray-700">
            At BrytaSeas, we believe that the future of shipping must be responsible, human-centered, and sustainable.{" "}
            <br />
            Born from a deep respect for the sea and the communities it touches, BrytaSeas exists to celebrate the
            companies, innovators, and individuals leading the charge toward a more sustainable maritime industry.
          </p>
          <div className="mt-8">
            <Link href="/about">
              <Button variant="outline">Learn More About Us</Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Our Services Section */}
      <section id="services" className="bg-gray-50 py-16 md:py-24">
        <div className="container">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-12">OUR SERVICES</h2>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {services.slice(0, 6).map((service) => (
              <div key={service.id} className="flex flex-col items-center text-center">
                <div className="mb-4 rounded-full bg-green-100 p-3">{getIcon(service.icon)}</div>
                <h3 className="text-xl font-bold">{service.title}</h3>
                <p className="mt-2 text-gray-600">{service.shortDescription}</p>
                <Link href={`/services/${service.slug}`} className="mt-4 text-teal-700 hover:underline">
                  Learn more
                </Link>
              </div>
            ))}
          </div>
          <div className="mt-12 text-center">
            <Link href="/services">
              <Button>View All Services</Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Insights Section */}
      <section id="insights" className="py-16 md:py-24">
        <div className="container">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-12">INSIGHTS</h2>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {insights.slice(0, 3).map((insight) => (
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
                  <Link href={`/insights/${insight.slug}`}>
                    <h3 className="text-xl font-bold hover:text-teal-700 transition-colors">{insight.title}</h3>
                  </Link>
                  <p className="mt-2 text-gray-600">{insight.excerpt}</p>
                  <Link
                    href={`/insights/${insight.slug}`}
                    className="mt-4 inline-block text-sm font-medium text-teal-700 hover:underline"
                  >
                    Read more →
                  </Link>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-12 text-center">
            <Link href="/insights">
              <Button>View All Insights</Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section id="contact" className="bg-teal-800 py-16 md:py-24 text-white">
        <div className="container text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">Ready to chart your green course?</h2>
          <p className="mx-auto max-w-2xl text-lg text-teal-100 mb-8">
            Let our experts help you navigate the complexities of maritime sustainability.
          </p>
          <Link href="/contact">
            <Button className="bg-green-600 hover:bg-green-700 text-white">Schedule a Consultation</Button>
          </Link>
        </div>
      </section>
    </>
  )
}
