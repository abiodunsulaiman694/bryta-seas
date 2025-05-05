import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, Phone, MapPin } from "lucide-react"

export const metadata = {
  title: "Contact Us - Bryta Seas",
  description: "Get in touch with our maritime sustainability experts.",
}

export default function ContactPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-[#0077B6] py-16 md:py-24 text-white">
        <div className="container">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl mb-6">Contact Us</h1>
          <p className="max-w-3xl text-xl text-blue-100">
            Get in touch with our team of maritime sustainability experts.
          </p>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
            <div>
              <h2 className="text-3xl font-bold mb-6">Get in Touch</h2>
              <p className="text-lg text-gray-700 mb-8">
                Have questions about our services or want to schedule a consultation? Fill out the form below and one of
                our experts will get back to you shortly.
              </p>
              <form className="space-y-6">
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                  <div>
                    <label htmlFor="first-name" className="block text-sm font-medium text-gray-700 mb-1">
                      First Name
                    </label>
                    <Input id="first-name" name="first-name" required />
                  </div>
                  <div>
                    <label htmlFor="last-name" className="block text-sm font-medium text-gray-700 mb-1">
                      Last Name
                    </label>
                    <Input id="last-name" name="last-name" required />
                  </div>
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email
                  </label>
                  <Input id="email" name="email" type="email" required />
                </div>
                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-1">
                    Company
                  </label>
                  <Input id="company" name="company" />
                </div>
                <div>
                  <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-1">
                    Service of Interest
                  </label>
                  <select
                    id="service"
                    name="service"
                    className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background"
                  >
                    <option value="">Select a service</option>
                    <option value="green-compliance">Green Compliance Audits</option>
                    <option value="esg-reputation">Digital & ESG Reputation Management</option>
                    <option value="sustainable-content">Sustainable Content & Branding</option>
                    <option value="carbon-tracking">Carbon Tracking & Reporting</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    Message
                  </label>
                  <Textarea id="message" name="message" rows={5} required />
                </div>
                <Button type="submit" className="bg-[#44841A] hover:bg-[#44841A]/90 text-white">
                  Send Message
                </Button>
              </form>
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-6">Contact Information</h2>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="rounded-full bg-[#0077B6]/10 p-3">
                    <Mail className="h-6 w-6 text-[#0077B6]" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold">Email</h3>
                    <p className="text-gray-600">rita@brytaseas.com</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="rounded-full bg-[#0077B6]/10 p-3">
                    <Phone className="h-6 w-6 text-[#0077B6]" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold">Phone</h3>
                    <p className="text-gray-600">+1 (872) 274-9553</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-gray-50 py-16 md:py-24">
        <div className="container">
          <h2 className="text-3xl font-bold mb-12 text-center">Frequently Asked Questions</h2>
          <div className="mx-auto max-w-3xl space-y-6">
            <div className="rounded-lg bg-white p-6 shadow-sm">
              <h3 className="text-xl font-bold mb-2">How quickly can you start working with us?</h3>
              <p className="text-gray-600">
                We typically begin the onboarding process within 1-2 weeks of initial contact. For urgent compliance
                matters, we can often expedite this timeline.
              </p>
            </div>
            <div className="rounded-lg bg-white p-6 shadow-sm">
              <h3 className="text-xl font-bold mb-2">Do you work with companies of all sizes?</h3>
              <p className="text-gray-600">
                Yes, we work with maritime companies of all sizes, from small operators with a few vessels to large
                international fleets. We tailor our services to meet your specific needs and scale.
              </p>
            </div>
            <div className="rounded-lg bg-white p-6 shadow-sm">
              <h3 className="text-xl font-bold mb-2">What regions do you serve?</h3>
              <p className="text-gray-600">
                We work with maritime companies globally. Our team has experience with regulations and standards in all
                major maritime regions, including Europe, Asia, North America, and beyond.
              </p>
            </div>
            <div className="rounded-lg bg-white p-6 shadow-sm">
              <h3 className="text-xl font-bold mb-2">How do your consulting services work?</h3>
              <p className="text-gray-600">
                We begin with an initial consultation to understand your needs, followed by a proposal outlining our
                recommended approach, timeline, and investment. Once engaged, we work closely with your team to
                implement solutions that meet your specific goals.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
