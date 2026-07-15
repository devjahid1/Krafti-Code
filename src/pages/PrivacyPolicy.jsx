import { Link } from "react-router-dom";
import { FaChevronRight } from "react-icons/fa";

import Header from "../components/Header";
import Footer from "../components/Footer";

export default function PrivacyPolicy() {
  return (
    <>

      <main className="min-h-screen bg-[#050505] pb-24 pt-36">

        {/* Hero */}
        <section className="relative overflow-hidden">

          {/* Purple Glow */}
          <div className="absolute left-1/2 top-0 h-[420px] w-[420px] -translate-x-1/2 rounded-full bg-[#722df7]/20 blur-[150px]" />

          <div className="site-container relative z-10">

            {/* Breadcrumb */}
            <div className="flex items-center gap-3 text-sm text-[#8d8d8d]">

              <Link
                to="/"
                className="transition hover:text-white"
              >
                Home
              </Link>

              <FaChevronRight className="text-[11px]" />

              <span className="text-[#b38ff9]">
                Privacy Policy
              </span>

            </div>

            {/* Title */}
            <h1 className="mt-8 max-w-4xl text-[42px] font-bold leading-tight text-white md:text-[60px] lg:tracking-[-0.04em]">

              Privacy{" "}

              <span className="text-[#722df7]">
                Policy
              </span>

            </h1>

            {/* Description */}
            <p className="mt-8 max-w-3xl text-[18px] leading-8 text-[#9f9f9f]">

              At Krafti Code, your privacy is important to us.
              This Privacy Policy explains what information we
              collect, how we use it and how we protect your
              personal data when you use our website or
              services.

            </p>

            {/* Last Updated */}
            <div className="mt-10 inline-flex items-center rounded-full border border-[#722df7]/25 bg-[#722df7]/10 px-5 py-3">

              <span className="text-sm font-medium text-[#ceb8ff]">
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
                    href="#information"
                    className="block rounded-lg px-3 py-2 text-sm text-[#9f9f9f] transition hover:bg-[#722df7]/10 hover:text-white"
                  >
                    02. Information We Collect
                  </a>

                  <a
                    href="#usage"
                    className="block rounded-lg px-3 py-2 text-sm text-[#9f9f9f] transition hover:bg-[#722df7]/10 hover:text-white"
                  >
                    03. How We Use Information
                  </a>

                  <a
                    href="#cookies"
                    className="block rounded-lg px-3 py-2 text-sm text-[#9f9f9f] transition hover:bg-[#722df7]/10 hover:text-white"
                  >
                    04. Cookies & Tracking
                  </a>

                  <a
                    href="#security"
                    className="block rounded-lg px-3 py-2 text-sm text-[#9f9f9f] transition hover:bg-[#722df7]/10 hover:text-white"
                  >
                    05. Data Security
                  </a>

                  <a
                    href="#third-party"
                    className="block rounded-lg px-3 py-2 text-sm text-[#9f9f9f] transition hover:bg-[#722df7]/10 hover:text-white"
                  >
                    06. Third-Party Services
                  </a>

                  <a
                    href="#rights"
                    className="block rounded-lg px-3 py-2 text-sm text-[#9f9f9f] transition hover:bg-[#722df7]/10 hover:text-white"
                  >
                    07. Your Rights
                  </a>

                  <a
                    href="#changes"
                    className="block rounded-lg px-3 py-2 text-sm text-[#9f9f9f] transition hover:bg-[#722df7]/10 hover:text-white"
                  >
                    08. Policy Updates
                  </a>

                  <a
                    href="#contact"
                    className="block rounded-lg px-3 py-2 text-sm text-[#9f9f9f] transition hover:bg-[#722df7]/10 hover:text-white"
                  >
                    09. Contact
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
                  Krafti Code respects your privacy and is committed to
                  protecting your personal information. This Privacy Policy
                  explains what information we collect, why we collect it,
                  how we use it and the choices you have regarding your
                  personal data.
                </p>

              </section>

              {/* Information We Collect */}
              <section id="information">

                <span className="text-sm font-semibold uppercase tracking-[0.2em] text-[#722df7]">
                  02
                </span>

                <h2 className="mt-3 text-3xl font-semibold text-white">
                  Information We Collect
                </h2>

                <p className="mt-6 leading-8 text-[#9d9d9d]">
                  We only collect information that helps us provide better
                  services and communicate effectively with our clients.
                </p>

                <div className="mt-10 grid gap-6 md:grid-cols-2">

                  {/* Personal Information */}
                  <div className="rounded-2xl border border-white/10 bg-[#0b0b0b] p-7 transition hover:border-[#722df7]/40">

                    <h3 className="text-xl font-semibold text-white">
                      Personal Information
                    </h3>

                    <ul className="mt-6 space-y-3 text-[#bdbdbd]">

                      <li>• Full Name</li>

                      <li>• Email Address</li>

                      <li>• Phone Number</li>

                      <li>• Company Name</li>

                    </ul>

                  </div>

                  {/* Project Information */}
                  <div className="rounded-2xl border border-white/10 bg-[#0b0b0b] p-7 transition hover:border-[#722df7]/40">

                    <h3 className="text-xl font-semibold text-white">
                      Project Information
                    </h3>

                    <ul className="mt-6 space-y-3 text-[#bdbdbd]">

                      <li>• Website Requirements</li>

                      <li>• Business Information</li>

                      <li>• Project Files</li>

                      <li>• Messages & Feedback</li>

                    </ul>

                  </div>

                </div>

                <div className="mt-8 rounded-2xl border border-[#722df7]/20 bg-[#722df7]/5 p-8">

                  <h3 className="text-xl font-semibold text-white">
                    Information We Do Not Collect
                  </h3>

                  <ul className="mt-6 space-y-3 text-[#d5d5d5]">

                    <li>✓ We do not sell your personal information.</li>

                    <li>✓ We do not collect unnecessary sensitive data.</li>

                    <li>✓ We never share your information without permission unless required by law.</li>

                  </ul>

                </div>

              </section>

                            {/* How We Use Information */}
              <section id="usage">

                <span className="text-sm font-semibold uppercase tracking-[0.2em] text-[#722df7]">
                  03
                </span>

                <h2 className="mt-3 text-3xl font-semibold text-white">
                  How We Use Your Information
                </h2>

                <p className="mt-6 leading-8 text-[#9d9d9d]">
                  The information we collect is used only to provide,
                  improve and support our services. We never use your
                  information for purposes unrelated to your project
                  without your consent.
                </p>

                <div className="mt-10 grid gap-6 sm:grid-cols-2 xl:grid-cols-4">

                  <div className="rounded-2xl border border-white/10 bg-[#0b0b0b] p-7 transition hover:border-[#722df7]/40">

                    <div className="text-4xl">💼</div>

                    <h3 className="mt-5 text-xl font-semibold text-white">
                      Project Delivery
                    </h3>

                    <p className="mt-4 leading-7 text-[#9d9d9d]">
                      Deliver websites and digital services according to
                      your project requirements.
                    </p>

                  </div>

                  <div className="rounded-2xl border border-white/10 bg-[#0b0b0b] p-7 transition hover:border-[#722df7]/40">

                    <div className="text-4xl">📧</div>

                    <h3 className="mt-5 text-xl font-semibold text-white">
                      Communication
                    </h3>

                    <p className="mt-4 leading-7 text-[#9d9d9d]">
                      Respond to inquiries, provide updates and offer
                      customer support.
                    </p>

                  </div>

                  <div className="rounded-2xl border border-white/10 bg-[#0b0b0b] p-7 transition hover:border-[#722df7]/40">

                    <div className="text-4xl">📈</div>

                    <h3 className="mt-5 text-xl font-semibold text-white">
                      Improvements
                    </h3>

                    <p className="mt-4 leading-7 text-[#9d9d9d]">
                      Improve website performance, usability and overall
                      customer experience.
                    </p>

                  </div>

                  <div className="rounded-2xl border border-white/10 bg-[#0b0b0b] p-7 transition hover:border-[#722df7]/40">

                    <div className="text-4xl">🔒</div>

                    <h3 className="mt-5 text-xl font-semibold text-white">
                      Security
                    </h3>

                    <p className="mt-4 leading-7 text-[#9d9d9d]">
                      Protect our website, users and services from fraud
                      and unauthorized access.
                    </p>

                  </div>

                </div>

              </section>

              {/* Cookies & Tracking */}

              <section id="cookies">

                <span className="text-sm font-semibold uppercase tracking-[0.2em] text-[#722df7]">
                  04
                </span>

                <h2 className="mt-3 text-3xl font-semibold text-white">
                  Cookies & Tracking Technologies
                </h2>

                <p className="mt-6 leading-8 text-[#9d9d9d]">
                  We use cookies and similar technologies to improve your
                  browsing experience, remember your preferences and
                  analyze website traffic.
                </p>

                <div className="mt-8 rounded-2xl border border-[#722df7]/20 bg-[#722df7]/5 p-8">

                  <h3 className="text-xl font-semibold text-white">
                    Cookies help us:
                  </h3>

                  <ul className="mt-6 space-y-4 text-[#d5d5d5]">

                    <li>✓ Improve website performance.</li>

                    <li>✓ Remember user preferences.</li>

                    <li>✓ Measure visitor statistics.</li>

                    <li>✓ Enhance security.</li>

                    <li>✓ Deliver a better browsing experience.</li>

                  </ul>

                </div>

              </section>

              {/* Data Security */}

              <section id="security">

                <span className="text-sm font-semibold uppercase tracking-[0.2em] text-[#722df7]">
                  05
                </span>

                <h2 className="mt-3 text-3xl font-semibold text-white">
                  Data Security
                </h2>

                <p className="mt-6 leading-8 text-[#9d9d9d]">
                  We implement reasonable administrative, technical and
                  organizational measures to protect your personal
                  information from unauthorized access, disclosure or
                  misuse.
                </p>

                <div className="mt-10 grid gap-6 md:grid-cols-2">

                  <div className="rounded-2xl border border-white/10 bg-[#0b0b0b] p-7">

                    <h3 className="text-xl font-semibold text-white">
                      Security Measures
                    </h3>

                    <ul className="mt-6 space-y-3 text-[#bdbdbd]">

                      <li>✓ Secure hosting environment</li>

                      <li>✓ SSL encryption</li>

                      <li>✓ Regular backups</li>

                      <li>✓ Restricted access</li>

                    </ul>

                  </div>

                  <div className="rounded-2xl border border-white/10 bg-[#0b0b0b] p-7">

                    <h3 className="text-xl font-semibold text-white">
                      Our Commitment
                    </h3>

                    <p className="mt-6 leading-8 text-[#bdbdbd]">
                      While no online system can guarantee absolute
                      security, we continuously follow industry best
                      practices to safeguard your information.
                    </p>

                  </div>

                </div>

              </section>

                            {/* Third-Party Services */}
              <section id="third-party">

                <span className="text-sm font-semibold uppercase tracking-[0.2em] text-[#722df7]">
                  06
                </span>

                <h2 className="mt-3 text-3xl font-semibold text-white">
                  Third-Party Services
                </h2>

                <p className="mt-6 leading-8 text-[#9d9d9d]">
                  We may use trusted third-party services to improve our
                  website, process payments, analyze traffic and deliver
                  our digital services. These providers have their own
                  privacy policies governing how they handle your data.
                </p>

                <div className="mt-10 grid gap-6 md:grid-cols-2">

                  <div className="rounded-2xl border border-white/10 bg-[#0b0b0b] p-6 transition hover:border-[#722df7]/40">

                    <h3 className="text-xl font-semibold text-white">
                      Analytics
                    </h3>

                    <ul className="mt-5 space-y-3 text-[#bdbdbd]">
                      <li>• Google Analytics</li>
                      <li>• Search Console</li>
                    </ul>

                  </div>

                  <div className="rounded-2xl border border-white/10 bg-[#0b0b0b] p-6 transition hover:border-[#722df7]/40">

                    <h3 className="text-xl font-semibold text-white">
                      Hosting & Security
                    </h3>

                    <ul className="mt-5 space-y-3 text-[#bdbdbd]">
                      <li>• Cloudflare</li>
                      <li>• Vercel</li>
                      <li>• Netlify</li>
                    </ul>

                  </div>

                  <div className="rounded-2xl border border-white/10 bg-[#0b0b0b] p-6 transition hover:border-[#722df7]/40">

                    <h3 className="text-xl font-semibold text-white">
                      Payment Services
                    </h3>

                    <ul className="mt-5 space-y-3 text-[#bdbdbd]">
                      <li>• Stripe</li>
                      <li>• PayPal</li>
                    </ul>

                  </div>

                  <div className="rounded-2xl border border-white/10 bg-[#0b0b0b] p-6 transition hover:border-[#722df7]/40">

                    <h3 className="text-xl font-semibold text-white">
                      Communication
                    </h3>

                    <ul className="mt-5 space-y-3 text-[#bdbdbd]">
                      <li>• Gmail</li>
                      <li>• WhatsApp</li>
                      <li>• Calendly</li>
                    </ul>

                  </div>

                </div>

              </section>

              {/* Your Rights */}

              <section id="rights">

                <span className="text-sm font-semibold uppercase tracking-[0.2em] text-[#722df7]">
                  07
                </span>

                <h2 className="mt-3 text-3xl font-semibold text-white">
                  Your Rights
                </h2>

                <p className="mt-6 leading-8 text-[#9d9d9d]">
                  Depending on your location and applicable privacy laws,
                  you may have the following rights regarding your
                  personal information.
                </p>

                <div className="mt-10 grid gap-6 sm:grid-cols-2">

                  <div className="rounded-2xl border border-emerald-500/20 bg-emerald-500/10 p-7">

                    <h3 className="text-xl font-semibold text-emerald-300">
                      You Can
                    </h3>

                    <ul className="mt-6 space-y-3 text-[#d6d6d6]">

                      <li>✓ Request access to your data</li>

                      <li>✓ Correct inaccurate information</li>

                      <li>✓ Request deletion of your data</li>

                      <li>✓ Withdraw consent</li>

                      <li>✓ Request a copy of your information</li>

                    </ul>

                  </div>

                  <div className="rounded-2xl border border-[#722df7]/20 bg-[#722df7]/5 p-7">

                    <h3 className="text-xl font-semibold text-white">
                      Our Commitment
                    </h3>

                    <p className="mt-6 leading-8 text-[#d5d5d5]">
                      We are committed to responding to legitimate privacy
                      requests as quickly as possible and in accordance
                      with applicable data protection laws.
                    </p>

                  </div>

                </div>

              </section>

                            {/* Policy Updates */}
              <section id="changes">

                <span className="text-sm font-semibold uppercase tracking-[0.2em] text-[#722df7]">
                  08
                </span>

                <h2 className="mt-3 text-3xl font-semibold text-white">
                  Changes to This Privacy Policy
                </h2>

                <p className="mt-6 leading-8 text-[#9d9d9d]">
                  We may update this Privacy Policy from time to time to
                  reflect changes in our services, legal requirements or
                  business operations. Any updates will be published on
                  this page together with the revised "Last Updated"
                  date.
                </p>

                <div className="mt-8 rounded-2xl border border-[#722df7]/20 bg-[#722df7]/5 p-8">

                  <h3 className="text-xl font-semibold text-white">
                    We recommend that you:
                  </h3>

                  <ul className="mt-6 space-y-4 text-[#d5d5d5]">

                    <li>✓ Review this Privacy Policy regularly.</li>

                    <li>✓ Stay informed about how your information is protected.</li>

                    <li>✓ Contact us if you have any questions.</li>

                  </ul>

                </div>

              </section>

              {/* Contact */}
              <section id="contact">

                <span className="text-sm font-semibold uppercase tracking-[0.2em] text-[#722df7]">
                  09
                </span>

                <h2 className="mt-3 text-3xl font-semibold text-white">
                  Contact Information
                </h2>

                <p className="mt-6 leading-8 text-[#9d9d9d]">
                  If you have any questions about this Privacy Policy or
                  how we collect, use or protect your personal
                  information, please contact us.
                </p>

                <div className="mt-10 grid gap-6 md:grid-cols-3">

                  {/* Email */}
                  <div className="rounded-2xl border border-white/10 bg-[#0b0b0b] p-7 transition hover:border-[#722df7]/40">

                    <p className="text-sm uppercase tracking-[0.18em] text-[#722df7]">
                      Email
                    </p>

                    <h3 className="mt-4 break-all text-lg font-semibold text-white">
                      hello@krafticode.com
                    </h3>

                    <p className="mt-3 text-sm leading-7 text-[#9d9d9d]">
                      For privacy requests and general support.
                    </p>

                  </div>

                  {/* Phone */}
                  <div className="rounded-2xl border border-white/10 bg-[#0b0b0b] p-7 transition hover:border-[#722df7]/40">

                    <p className="text-sm uppercase tracking-[0.18em] text-[#722df7]">
                      Phone
                    </p>

                    <h3 className="mt-4 text-lg font-semibold text-white">
                      +880 1732-937226
                    </h3>

                    <p className="mt-3 text-sm leading-7 text-[#9d9d9d]">
                      Monday – Saturday
                      <br />
                      9:00 AM – 6:00 PM
                    </p>

                  </div>

                  {/* Office */}
                  <div className="rounded-2xl border border-white/10 bg-[#0b0b0b] p-7 transition hover:border-[#722df7]/40">

                    <p className="text-sm uppercase tracking-[0.18em] text-[#722df7]">
                      Office
                    </p>

                    <h3 className="mt-4 text-lg font-semibold text-white">
                      Sylhet, Bangladesh
                    </h3>

                    <p className="mt-3 text-sm leading-7 text-[#9d9d9d]">
                      Serving clients worldwide with modern web design
                      and development solutions.
                    </p>

                  </div>

                </div>

              </section>

              {/* CTA */}


                          </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}