import Image from "next/image"
import Link from "next/link"
import { MessageSquare, BarChart3, FileText, Newspaper, Laptop, Globe, CheckSquare } from "lucide-react"
import { Button } from "@/components/ui/button"
import { services } from "@/lib/data"

export const metadata = {
  title: "Services - Bryta Seas",
  description: "Explore our comprehensive maritime sustainability and communications services.",
}

export default function ServicesPage() {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case "MessageSquare":
        return <MessageSquare className="h-8 w-8 text-[#0077B6]" />
      case "BarChart3":
        return <BarChart3 className="h-8 w-8 text-[#0077B6]" />
      case "FileText":
        return <FileText className="h-8 w-8 text-[#0077B6]" />
      case "Newspaper":
        return <Newspaper className="h-8 w-8 text-[#0077B6]" />
      case "Laptop":
        return <Laptop className="h-8 w-8 text-[#0077B6]" />
      case "Globe":
        return <Globe className="h-8 w-8 text-[#0077B6]" />
      default:
        return <MessageSquare className="h-8 w-8 text-[#0077B6]" />
    }
  }

  return (
    <>
      {/* Hero Section */}
      <section className="bg-[#0077B6] py-16 md:py-24 text-white">
        <div className="container">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl mb-6">Our Services</h1>
          <p className="max-w-3xl text-xl text-blue-100">
            Comprehensive solutions to help maritime companies navigate sustainability, compliance, and ESG reputation.
          </p>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:gap-16">
            {services.map((service) => (
              <div key={service.id} className="flex flex-col">
                <div className="mb-4 rounded-full bg-[#0077B6]/10 p-3 w-fit">{getIcon(service.icon)}</div>
                <h2 className="text-2xl font-bold mb-3">{service.title}</h2>
                <p className="text-gray-600 mb-4">{service.shortDescription}</p>
                <p className="text-gray-700 mb-6">{service.fullDescription.substring(0, 150)}...</p>
                <div className="mt-auto">
                  <Link href={`/services/${service.slug}`}>
                    <Button className="bg-[#44841A] hover:bg-[#44841A]/90 text-white">Learn More</Button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-gray-50 py-16 md:py-24">
        <div className="container">
          <div className="grid grid-cols-1 gap-12 md:grid-cols-2 items-center">
            <div>
              <h2 className="text-3xl font-bold tracking-tight mb-6">Why Choose Bryta Seas</h2>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <CheckSquare className="h-6 w-6 text-[#0077B6] mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-bold text-lg">Industry Expertise</h3>
                    <p className="text-gray-600">
                      Our team brings decades of experience in maritime sustainability and compliance.
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckSquare className="h-6 w-6 text-[#0077B6] mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-bold text-lg">Tailored Solutions</h3>
                    <p className="text-gray-600">
                      We develop customized strategies that address your specific challenges and goals.
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckSquare className="h-6 w-6 text-[#0077B6] mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-bold text-lg">Proven Results</h3>
                    <p className="text-gray-600">
                      Our clients consistently achieve compliance, improve reputation, and reduce environmental impact.
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckSquare className="h-6 w-6 text-[#0077B6] mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-bold text-lg">Forward-Thinking Approach</h3>
                    <p className="text-gray-600">
                      We help you prepare for future regulations and market expectations, not just current requirements.
                    </p>
                  </div>
                </li>
              </ul>
            </div>
            <div>
              <Image
                src="/assets/why-brytaseas.png"
                alt="Why Bryta Seas"
                width={400}
                height={600}
                className="rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-24">
        <div className="container text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">Ready to get started?</h2>
          <p className="mx-auto max-w-2xl text-lg text-gray-600 mb-8">
            Contact us today to discuss how we can help you navigate the green future of maritime.
          </p>
          <Link href="/contact">
            <Button size="lg" className="bg-[#44841A] hover:bg-[#44841A]/90 text-white">
              Schedule a Consultation
            </Button>
          </Link>
        </div>
      </section>
    </>
  )
}
