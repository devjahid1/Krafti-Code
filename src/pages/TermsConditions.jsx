import { Link } from "react-router-dom";
import { FaChevronRight } from "react-icons/fa";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function TermsConditions() {
  return (
    <>
      <main className="min-h-screen bg-[#050505] pt-36 pb-24">

        {/* Hero */}
        <section className="relative overflow-hidden">
          {/* Purple Glow */}
          <div className="absolute left-1/2 top-0 h-[420px] w-[420px] -translate-x-1/2 rounded-full bg-[#722df7]/20 blur-[140px]" />

          <div className="site-container relative z-10">

            {/* Breadcrumb */}

            <div className="flex items-center gap-3 text-sm text-[#8b8b8b]">

              <Link
                to="/"
                className="transition hover:text-white"
              >
                Home
              </Link>

              <FaChevronRight className="text-[11px]" />

              <span className="text-[#b38ff9]">
                Terms & Conditions
              </span>

            </div>

            {/* Title */}

            <h1 className="mt-8 max-w-4xl text-[42px] font-bold leading-tight text-white md:text-[60px] lg:tracking-[-0.04em]">

              Terms &{" "}

              <span className="text-[#722df7]">
                Conditions
              </span>

            </h1>

            {/* Subtitle */}

            <p className="mt-8 max-w-3xl text-[18px] leading-8 text-[#9d9d9d]">

              These Terms & Conditions govern your use of the
              Krafti Code website and our professional web
              design and development services. By accessing
              our website or working with us, you agree to
              comply with these terms.

            </p>

            {/* Last Updated */}

            <div className="mt-10 inline-flex items-center rounded-full border border-[#722df7]/30 bg-[#722df7]/10 px-5 py-3">

              <span className="text-sm font-medium text-[#cdb5ff]">

                Last Updated • July 2026

              </span>

            </div>

          </div>
        </section>

        {/* Content */}
        <section className="site-container mt-24">
          <div className="grid gap-14 lg:grid-cols-[280px_1fr]">

                        {/* Sidebar */}
            <aside className="lg:sticky lg:top-32 lg:h-fit">
              <div className="rounded-2xl border border-white/10 bg-[#0b0b0b] p-6">

                <h3 className="mb-6 text-lg font-semibold text-white">
                  Table of Contents
                </h3>

                <nav className="space-y-2">

                  <a
                    href="#introduction"
                    className="block rounded-lg px-3 py-2 text-sm text-[#9f9f9f] transition hover:bg-[#722df7]/10 hover:text-white"
                  >
                    01. Introduction
                  </a>

                  <a
                    href="#services"
                    className="block rounded-lg px-3 py-2 text-sm text-[#9f9f9f] transition hover:bg-[#722df7]/10 hover:text-white"
                  >
                    02. Services
                  </a>

                  <a
                    href="#projects"
                    className="block rounded-lg px-3 py-2 text-sm text-[#9f9f9f] transition hover:bg-[#722df7]/10 hover:text-white"
                  >
                    03. Project Scope
                  </a>

                  <a
                    href="#payments"
                    className="block rounded-lg px-3 py-2 text-sm text-[#9f9f9f] transition hover:bg-[#722df7]/10 hover:text-white"
                  >
                    04. Payments
                  </a>

                  <a
                    href="#delivery"
                    className="block rounded-lg px-3 py-2 text-sm text-[#9f9f9f] transition hover:bg-[#722df7]/10 hover:text-white"
                  >
                    05. Delivery
                  </a>

                  <a
                    href="#revisions"
                    className="block rounded-lg px-3 py-2 text-sm text-[#9f9f9f] transition hover:bg-[#722df7]/10 hover:text-white"
                  >
                    06. Revisions
                  </a>

                  <a
                    href="#ownership"
                    className="block rounded-lg px-3 py-2 text-sm text-[#9f9f9f] transition hover:bg-[#722df7]/10 hover:text-white"
                  >
                    07. Ownership
                  </a>

                  <a
                    href="#liability"
                    className="block rounded-lg px-3 py-2 text-sm text-[#9f9f9f] transition hover:bg-[#722df7]/10 hover:text-white"
                  >
                    08. Liability
                  </a>

                  <a
                    href="#privacy"
                    className="block rounded-lg px-3 py-2 text-sm text-[#9f9f9f] transition hover:bg-[#722df7]/10 hover:text-white"
                  >
                    09. Privacy
                  </a>

                  <a
                    href="#changes"
                    className="block rounded-lg px-3 py-2 text-sm text-[#9f9f9f] transition hover:bg-[#722df7]/10 hover:text-white"
                  >
                    10. Changes
                  </a>

                </nav>
              </div>
            </aside>

            {/* Main Content */}
            <div className="space-y-20">

              {/* Introduction */}
              <section id="introduction">
                <span className="text-sm font-semibold uppercase tracking-[0.2em] text-[#722df7]">
                  01
                </span>

                <h2 className="mt-3 text-3xl font-semibold text-white">
                  Introduction
                </h2>

                <p className="mt-6 leading-8 text-[#9d9d9d]">
                  Welcome to Krafti Code. These Terms &
                  Conditions govern your access to and use of
                  our website, products and professional
                  services. By accessing our website or working
                  with us, you agree to comply with these
                  terms. If you do not agree, please discontinue
                  using our website and services.
                </p>
              </section>

              {/* Services */}
              <section id="services">
                <span className="text-sm font-semibold uppercase tracking-[0.2em] text-[#722df7]">
                  02
                </span>

                <h2 className="mt-3 text-3xl font-semibold text-white">
                  Services
                </h2>

                <p className="mt-6 leading-8 text-[#9d9d9d]">
                  Krafti Code provides professional digital
                  solutions including website design, web
                  development, UI/UX design, responsive
                  development, website maintenance, performance
                  optimization and related creative services.
                </p>

                <ul className="mt-8 space-y-4 text-[#cfcfcf]">

                  <li>• Custom Website Design</li>

                  <li>• Web Development</li>

                  <li>• UI / UX Design</li>

                  <li>• Landing Pages</li>

                  <li>• Website Optimization</li>

                  <li>• Maintenance & Support</li>

                </ul>

              </section>

                            {/* Project Scope */}
              <section id="projects">
                <span className="text-sm font-semibold uppercase tracking-[0.2em] text-[#722df7]">
                  03
                </span>

                <h2 className="mt-3 text-3xl font-semibold text-white">
                  Project Scope
                </h2>

                <p className="mt-6 leading-8 text-[#9d9d9d]">
                  Every project begins only after both Krafti Code and the
                  client have agreed on the project scope, timeline,
                  deliverables and pricing. Any additional requests outside
                  the agreed scope may require additional time and cost.
                </p>

                <div className="mt-8 grid gap-5 md:grid-cols-2">
                  <div className="rounded-2xl border border-white/10 bg-[#0b0b0b] p-6">
                    <h3 className="text-lg font-semibold text-white">
                      Included
                    </h3>

                    <ul className="mt-5 space-y-3 text-[#b8b8b8]">
                      <li>✓ Agreed Pages</li>
                      <li>✓ Approved Features</li>
                      <li>✓ Responsive Design</li>
                      <li>✓ Basic Testing</li>
                    </ul>
                  </div>

                  <div className="rounded-2xl border border-white/10 bg-[#0b0b0b] p-6">
                    <h3 className="text-lg font-semibold text-white">
                      Additional Requests
                    </h3>

                    <ul className="mt-5 space-y-3 text-[#b8b8b8]">
                      <li>• Extra Pages</li>
                      <li>• New Features</li>
                      <li>• Third-Party Integrations</li>
                      <li>• Major Design Changes</li>
                    </ul>
                  </div>
                </div>
              </section>

              {/* Payments */}
              <section id="payments">
                <span className="text-sm font-semibold uppercase tracking-[0.2em] text-[#722df7]">
                  04
                </span>

                <h2 className="mt-3 text-3xl font-semibold text-white">
                  Payments
                </h2>

                <p className="mt-6 leading-8 text-[#9d9d9d]">
                  Payment terms will be clearly discussed before the project
                  begins. Depending on the project, an advance payment may be
                  required before development starts.
                </p>

                <div className="mt-8 rounded-2xl border border-[#722df7]/20 bg-[#722df7]/5 p-8">

                  <h3 className="text-xl font-semibold text-white">
                    Payment Policy
                  </h3>

                  <ul className="mt-6 space-y-4 leading-7 text-[#cfcfcf]">
                    <li>• Initial deposit may be required.</li>

                    <li>• Remaining payment before final delivery.</li>

                    <li>• Delayed payments may delay project completion.</li>

                    <li>• All invoices should be paid within the agreed period.</li>
                  </ul>

                </div>
              </section>

              {/* Delivery */}
              <section id="delivery">
                <span className="text-sm font-semibold uppercase tracking-[0.2em] text-[#722df7]">
                  05
                </span>

                <h2 className="mt-3 text-3xl font-semibold text-white">
                  Project Delivery
                </h2>

                <p className="mt-6 leading-8 text-[#9d9d9d]">
                  Estimated delivery dates are provided before development
                  begins. Actual delivery may vary depending on client
                  feedback, content availability and project revisions.
                </p>

                <div className="mt-8 rounded-2xl border border-white/10 bg-[#0b0b0b] p-8">

                  <ul className="space-y-4 leading-7 text-[#cfcfcf]">
                    <li>✓ Timely communication speeds up delivery.</li>

                    <li>✓ Delayed client feedback may extend deadlines.</li>

                    <li>✓ Emergency requests are handled separately.</li>

                    <li>✓ Final files are delivered after full payment.</li>
                  </ul>

                </div>
              </section>

              {/* Revisions */}
              <section id="revisions">
                <span className="text-sm font-semibold uppercase tracking-[0.2em] text-[#722df7]">
                  06
                </span>

                <h2 className="mt-3 text-3xl font-semibold text-white">
                  Revisions
                </h2>

                <p className="mt-6 leading-8 text-[#9d9d9d]">
                  Revision requests are welcome during the agreed revision
                  period. The number of free revisions depends on the selected
                  package or proposal.
                </p>

                <div className="mt-8 grid gap-5 md:grid-cols-3">

                  <div className="rounded-2xl border border-white/10 bg-[#0b0b0b] p-6">
                    <h4 className="font-semibold text-white">
                      Design
                    </h4>

                    <p className="mt-4 text-sm leading-7 text-[#b8b8b8]">
                      Minor layout, typography and color adjustments.
                    </p>
                  </div>

                  <div className="rounded-2xl border border-white/10 bg-[#0b0b0b] p-6">
                    <h4 className="font-semibold text-white">
                      Development
                    </h4>

                    <p className="mt-4 text-sm leading-7 text-[#b8b8b8]">
                      Small functional improvements and bug fixes.
                    </p>
                  </div>

                  <div className="rounded-2xl border border-white/10 bg-[#0b0b0b] p-6">
                    <h4 className="font-semibold text-white">
                      Additional
                    </h4>

                    <p className="mt-4 text-sm leading-7 text-[#b8b8b8]">
                      Major changes outside the agreed scope may require an
                      additional quote.
                    </p>
                  </div>

                </div>
              </section>

                            {/* Ownership */}
              <section id="ownership">
                <span className="text-sm font-semibold uppercase tracking-[0.2em] text-[#722df7]">
                  07
                </span>

                <h2 className="mt-3 text-3xl font-semibold text-white">
                  Ownership & Intellectual Property
                </h2>

                <p className="mt-6 leading-8 text-[#9d9d9d]">
                  Upon receiving full payment, ownership of the completed
                  website, including approved custom designs and source code,
                  will be transferred to the client unless otherwise stated in
                  writing.
                </p>

                <div className="mt-8 grid gap-6 lg:grid-cols-2">

                  <div className="rounded-2xl border border-[#722df7]/20 bg-[#722df7]/5 p-6">
                    <h3 className="text-lg font-semibold text-white">
                      Client Owns
                    </h3>

                    <ul className="mt-5 space-y-3 text-[#cfcfcf]">
                      <li>✓ Final Website</li>
                      <li>✓ Custom UI Design</li>
                      <li>✓ Approved Assets</li>
                      <li>✓ Source Code</li>
                    </ul>
                  </div>

                  <div className="rounded-2xl border border-white/10 bg-[#0b0b0b] p-6">
                    <h3 className="text-lg font-semibold text-white">
                      Krafti Code Rights
                    </h3>

                    <ul className="mt-5 space-y-3 text-[#cfcfcf]">
                      <li>• Showcase projects in our portfolio.</li>
                      <li>• Display work on social media.</li>
                      <li>• Reference completed work for marketing.</li>
                    </ul>
                  </div>

                </div>
              </section>

              {/* Liability */}
              <section id="liability">
                <span className="text-sm font-semibold uppercase tracking-[0.2em] text-[#722df7]">
                  08
                </span>

                <h2 className="mt-3 text-3xl font-semibold text-white">
                  Limitation of Liability
                </h2>

                <p className="mt-6 leading-8 text-[#9d9d9d]">
                  Krafti Code strives to deliver reliable digital products.
                  However, we cannot guarantee uninterrupted service or be held
                  responsible for circumstances beyond our control.
                </p>

                <div className="mt-8 rounded-2xl border border-white/10 bg-[#0b0b0b] p-8">

                  <h3 className="text-xl font-semibold text-white">
                    We are not liable for:
                  </h3>

                  <div className="mt-6 grid gap-5 md:grid-cols-2">

                    <div className="rounded-xl bg-white/[0.03] p-5">
                      <p className="text-[#d0d0d0]">
                        • Hosting provider outages
                      </p>
                    </div>

                    <div className="rounded-xl bg-white/[0.03] p-5">
                      <p className="text-[#d0d0d0]">
                        • Domain registration issues
                      </p>
                    </div>

                    <div className="rounded-xl bg-white/[0.03] p-5">
                      <p className="text-[#d0d0d0]">
                        • Third-party API failures
                      </p>
                    </div>

                    <div className="rounded-xl bg-white/[0.03] p-5">
                      <p className="text-[#d0d0d0]">
                        • Client modifications after delivery
                      </p>
                    </div>

                  </div>

                </div>
              </section>

              {/* Privacy */}
              <section id="privacy">
                <span className="text-sm font-semibold uppercase tracking-[0.2em] text-[#722df7]">
                  09
                </span>

                <h2 className="mt-3 text-3xl font-semibold text-white">
                  Privacy & Confidentiality
                </h2>

                <p className="mt-6 leading-8 text-[#9d9d9d]">
                  We respect your privacy. Any information shared during the
                  project, including login credentials, business information,
                  project files and confidential materials, will remain private
                  and will never be sold or shared without your consent.
                </p>

                <div className="mt-8 rounded-2xl border border-[#722df7]/20 bg-[#722df7]/5 p-8">

                  <h3 className="text-lg font-semibold text-white">
                    We Protect:
                  </h3>

                  <ul className="mt-6 space-y-3 text-[#d5d5d5]">
                    <li>✓ Business Information</li>
                    <li>✓ Project Files</li>
                    <li>✓ Login Credentials</li>
                    <li>✓ Personal Data</li>
                    <li>✓ Communication Records</li>
                  </ul>

                </div>
              </section>

              {/* Third Party Services */}
              <section id="third-party">
                <span className="text-sm font-semibold uppercase tracking-[0.2em] text-[#722df7]">
                  10
                </span>

                <h2 className="mt-3 text-3xl font-semibold text-white">
                  Third-Party Services
                </h2>

                <p className="mt-6 leading-8 text-[#9d9d9d]">
                  Our projects may integrate third-party services and tools.
                  These services operate under their own policies and terms.
                </p>

                <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">

                  {[
                    "Cloudflare",
                    "Vercel",
                    "Netlify",
                    "Firebase",
                    "Google Fonts",
                    "Stripe",
                  ].map((service) => (
                    <div
                      key={service}
                      className="rounded-xl border border-white/10 bg-[#0b0b0b] p-6 transition hover:border-[#722df7]/40"
                    >
                      <p className="font-medium text-white">
                        {service}
                      </p>
                    </div>
                  ))}

                </div>
              </section>

                            {/* Changes to Terms */}
              <section id="changes">
                <span className="text-sm font-semibold uppercase tracking-[0.2em] text-[#722df7]">
                  11
                </span>

                <h2 className="mt-3 text-3xl font-semibold text-white">
                  Changes to These Terms
                </h2>

                <p className="mt-6 leading-8 text-[#9d9d9d]">
                  Krafti Code reserves the right to update or modify these
                  Terms & Conditions at any time. Updated versions will be
                  published on this page along with the revised effective date.
                  Continued use of our services after any updates means you
                  accept the revised terms.
                </p>

                <div className="mt-8 rounded-2xl border border-[#722df7]/20 bg-[#722df7]/5 p-8">
                  <p className="leading-8 text-[#d9d9d9]">
                    We recommend reviewing this page periodically to stay
                    informed about any changes that may affect your rights or
                    responsibilities.
                  </p>
                </div>
              </section>

              {/* Governing Law */}
              <section id="law">
                <span className="text-sm font-semibold uppercase tracking-[0.2em] text-[#722df7]">
                  12
                </span>

                <h2 className="mt-3 text-3xl font-semibold text-white">
                  Governing Law
                </h2>

                <p className="mt-6 leading-8 text-[#9d9d9d]">
                  These Terms & Conditions shall be governed and interpreted
                  according to the applicable laws of the jurisdiction in which
                  Krafti Code operates. Any disputes arising from our services
                  will be handled through the appropriate legal channels.
                </p>
              </section>

              {/* Contact */}
              <section id="contact">
                <span className="text-sm font-semibold uppercase tracking-[0.2em] text-[#722df7]">
                  13
                </span>

                <h2 className="mt-3 text-3xl font-semibold text-white">
                  Contact Information
                </h2>

                <p className="mt-6 leading-8 text-[#9d9d9d]">
                  If you have any questions regarding these Terms &
                  Conditions, feel free to contact our team.
                </p>

                <div className="mt-8 grid gap-6 md:grid-cols-3">

                  <div className="rounded-2xl border border-white/10 bg-[#0b0b0b] p-6">
                    <p className="text-sm uppercase tracking-[0.18em] text-[#722df7]">
                      Email
                    </p>

                    <h3 className="mt-3 text-lg font-semibold text-white break-all">
                      hello@krafticode.com
                    </h3>
                  </div>

                  <div className="rounded-2xl border border-white/10 bg-[#0b0b0b] p-6">
                    <p className="text-sm uppercase tracking-[0.18em] text-[#722df7]">
                      Website
                    </p>

                    <h3 className="mt-3 text-lg font-semibold text-white">
                      www.krafticode.com
                    </h3>
                  </div>

                  <div className="rounded-2xl border border-white/10 bg-[#0b0b0b] p-6">
                    <p className="text-sm uppercase tracking-[0.18em] text-[#722df7]">
                      Response Time
                    </p>

                    <h3 className="mt-3 text-lg font-semibold text-white">
                      Within 24 Hours
                    </h3>
                  </div>

                </div>
              </section>


                          </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}