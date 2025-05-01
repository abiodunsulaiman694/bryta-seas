import Image from "next/image"
import Link from "next/link"
import { CheckSquare } from "lucide-react"
import { Button } from "@/components/ui/button"

export const metadata = {
  title: "About Us - Bryta Seas",
  description: "Learn about Bryta Seas and our mission to help maritime companies navigate sustainability.",
}

export default function AboutPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-teal-800 py-16 md:py-24 text-white">
        <div className="container">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl mb-6">About Us</h1>
          <p className="max-w-3xl text-xl text-teal-100">
            At BrytaSeas, we believe that the future of shipping must be responsible, human-centered, and sustainable.
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="grid grid-cols-1 gap-12 md:grid-cols-2 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Our Purpose</h2>
              <p className="text-lg text-gray-700 mb-8">
                <ul>
                  <li>Celebrate the champions who are setting new benchmarks for sustainability in the maritime industry.</li>
                  <li>Advocate for industry-wide adoption of best practices that go beyond compliance.</li>
                  <li>Spotlight the real people, communities, and ecosystems impacted by shipping activities.</li>
                  <li>Elevate expert insights that drive innovation and positive change at sea.</li>
                </ul>
              </p>
              <h2 className="text-3xl font-bold mb-6">Why We Exist</h2>
              <p className="text-lg text-gray-700 mb-4">
                🌍 To normalize sustainability in shipping — making responsible practices the standard, not the exception.
              </p>
              <p className="text-lg text-gray-700">
                🌊 To connect stories and solutions — showing that every small step toward responsibility matters.
              </p>
              <p className="text-lg text-gray-700">
                🧩 To bridge industry leadership and community impact — ensuring that shipping’s progress benefits both the economy and the environment.
              </p>
            </div>
            <div>
              <Image
                src="/placeholder.svg?height=500&width=600"
                alt="Bryta Seas mission and vision"
                width={600}
                height={500}
                className="rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="bg-gray-50 py-16 md:py-24">
        <div className="container">
          <h2 className="text-3xl font-bold mb-12 text-center">Our Values</h2>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <div className="mb-4 rounded-full bg-green-100 p-3 w-fit">
                <CheckSquare className="h-6 w-6 text-green-600" />
              </div>
              <h3 className="text-xl font-bold mb-3">Integrity</h3>
              <p className="text-gray-600">
                We stand for authentic, credible storytelling.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <div className="mb-4 rounded-full bg-green-100 p-3 w-fit">
                <CheckSquare className="h-6 w-6 text-green-600" />
              </div>
              <h3 className="text-xl font-bold mb-3">Impact</h3>
              <p className="text-gray-600">
                We champion real actions and real results.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <div className="mb-4 rounded-full bg-green-100 p-3 w-fit">
                <CheckSquare className="h-6 w-6 text-green-600" />
              </div>
              <h3 className="text-xl font-bold mb-3">Innovation</h3>
              <p className="text-gray-600">
                We celebrate new ideas that push the industry forward.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <div className="mb-4 rounded-full bg-green-100 p-3 w-fit">
                <CheckSquare className="h-6 w-6 text-green-600" />
              </div>
              <h3 className="text-xl font-bold mb-3">Inclusion</h3>
              <p className="text-gray-600">
                We lift up all voices—from corporate leaders to coastal communities.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <div className="mb-4 rounded-full bg-green-100 p-3 w-fit">
                <CheckSquare className="h-6 w-6 text-green-600" />
              </div>
              <h3 className="text-xl font-bold mb-3">Stewardship</h3>
              <p className="text-gray-600">
                We believe in protecting the oceans, people, and future generations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="bg-gray-50 py-16 md:py-24">
        <div className="container">
          <div className="grid grid-cols-1 gap-12 md:grid-cols-2 items-center">
            <div>
              <Image
                src="/placeholder.svg?height=500&width=600"
                alt="Bryta Seas story"
                width={600}
                height={500}
                className="rounded-lg"
              />
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-6">Our Story</h2>
              <p className="text-lg text-gray-700 mb-4">
                At BrytaSeas, we believe that the future of shipping must be responsible, human-centered, and sustainable.
              </p>
              <p className="text-lg text-gray-700 mb-4">
                Born from a deep respect for the sea and the communities it touches, BrytaSeas exists to celebrate the companies, innovators, and individuals leading the charge toward a more sustainable maritime industry.
The global shipping sector carries more than 80% of the world’s trade—but it also carries immense responsibility.
              </p>
              <p className="text-lg text-gray-700 mb-4">
              We use the power of media, storytelling, and strategic communications to amplify responsible practices, spotlight real stories from the sea, and advocate for higher standards that protect our people and our planet.
              </p>
              <p className="text-lg text-gray-700">
                At BrytaSeas, we don't just tell stories.
We celebrate sustainability champions, advocate for stronger responsibility standards, spotlight real human experiences, and elevate expert voices shaping the future of shipping — because when shipping thrives responsibly, the world thrives too.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-24">
        <div className="container text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">Join us on our mission</h2>
          <p className="mx-auto max-w-2xl text-lg text-gray-600 mb-8">
            Ready to navigate the green future of maritime with expert guidance? Contact us today to learn how we can
            help your organization.
          </p>
          <Link href="/contact">
            <Button size="lg" className="bg-green-600 hover:bg-green-700 text-white">
              Join us. Let’s tell your story and inspire a movement.
            </Button>
          </Link>
        </div>
      </section>
    </>
  )
}
