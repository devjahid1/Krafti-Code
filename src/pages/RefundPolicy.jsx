import { Link } from "react-router-dom";
import { FaChevronRight } from "react-icons/fa";

import Header from "../components/Header";
import Footer from "../components/Footer";

export default function RefundPolicy() {
  return (
    <>

      <main className="min-h-screen bg-[#050505] pt-36 pb-24">

        {/* Hero */}
        <section className="relative overflow-hidden">

          {/* Purple Glow */}
          <div className="absolute left-1/2 top-0 h-[420px] w-[420px] -translate-x-1/2 rounded-full bg-[#722df7]/20 blur-[150px]" />

          <div className="site-container relative z-10">

            {/* Breadcrumb */}
            <div className="flex items-center gap-3 text-sm text-[#8c8c8c]">

              <Link
                to="/"
                className="transition hover:text-white"
              >
                Home
              </Link>

              <FaChevronRight className="text-[11px]" />

              <span className="text-[#b38ff9]">
                Refund Policy
              </span>

            </div>

            {/* Title */}
            <h1 className="mt-8 max-w-4xl text-[42px] font-bold leading-tight text-white md:text-[60px] lg:tracking-[-0.04em]">

              Refund{" "}

              <span className="text-[#722df7]">
                Policy
              </span>

            </h1>

            {/* Description */}
            <p className="mt-8 max-w-3xl text-[18px] leading-8 text-[#9f9f9f]">

              At Krafti Code, we value transparency and client
              satisfaction. This Refund Policy explains the
              conditions under which refunds may or may not be
              issued for our digital services.

            </p>

            {/* Last Updated */}
            <div className="mt-10 inline-flex items-center rounded-full border border-[#722df7]/25 bg-[#722df7]/10 px-5 py-3">

              <span className="text-sm font-medium text-[#d3beff]">
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
                    href="#eligibility"
                    className="block rounded-lg px-3 py-2 text-sm text-[#9f9f9f] transition hover:bg-[#722df7]/10 hover:text-white"
                  >
                    02. Eligibility for Refund
                  </a>

                  <a
                    href="#non-refundable"
                    className="block rounded-lg px-3 py-2 text-sm text-[#9f9f9f] transition hover:bg-[#722df7]/10 hover:text-white"
                  >
                    03. Non-Refundable Services
                  </a>

                  <a
                    href="#cancellation"
                    className="block rounded-lg px-3 py-2 text-sm text-[#9f9f9f] transition hover:bg-[#722df7]/10 hover:text-white"
                  >
                    04. Client Cancellation
                  </a>

                  <a
                    href="#delays"
                    className="block rounded-lg px-3 py-2 text-sm text-[#9f9f9f] transition hover:bg-[#722df7]/10 hover:text-white"
                  >
                    05. Project Delays
                  </a>

                  <a
                    href="#process"
                    className="block rounded-lg px-3 py-2 text-sm text-[#9f9f9f] transition hover:bg-[#722df7]/10 hover:text-white"
                  >
                    06. Refund Process
                  </a>

                  <a
                    href="#payment"
                    className="block rounded-lg px-3 py-2 text-sm text-[#9f9f9f] transition hover:bg-[#722df7]/10 hover:text-white"
                  >
                    07. Payment Method
                  </a>

                  <a
                    href="#exceptions"
                    className="block rounded-lg px-3 py-2 text-sm text-[#9f9f9f] transition hover:bg-[#722df7]/10 hover:text-white"
                  >
                    08. Exceptions
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
                  At Krafti Code, every website and digital
                  solution is custom-built to meet each client's
                  unique requirements. Because our services are
                  tailored specifically for each project, refund
                  eligibility depends on the current stage of the
                  project and the work already completed.
                </p>

              </section>

              {/* Eligibility */}
              <section id="eligibility">

                <span className="text-sm font-semibold uppercase tracking-[0.2em] text-[#722df7]">
                  02
                </span>

                <h2 className="mt-3 text-3xl font-semibold text-white">
                  Eligibility for Refund
                </h2>

                <p className="mt-6 leading-8 text-[#9d9d9d]">
                  Refund requests are reviewed individually.
                  Refunds may be approved only under specific
                  circumstances listed below.
                </p>

                <div className="mt-8 grid gap-6 md:grid-cols-2">

                  {/* Eligible */}
                  <div className="rounded-2xl border border-emerald-500/20 bg-emerald-500/10 p-6">

                    <h3 className="text-xl font-semibold text-emerald-300">
                      Eligible for Refund
                    </h3>

                    <ul className="mt-6 space-y-4 text-[#d8d8d8]">

                      <li>
                        ✓ Duplicate payment was made.
                      </li>

                      <li>
                        ✓ Project has not yet started.
                      </li>

                      <li>
                        ✓ We are unable to provide the agreed
                        service.
                      </li>

                      <li>
                        ✓ Technical limitations prevent project
                        completion before development begins.
                      </li>

                    </ul>

                  </div>

                  {/* Not Guaranteed */}
                  <div className="rounded-2xl border border-yellow-500/20 bg-yellow-500/10 p-6">

                    <h3 className="text-xl font-semibold text-yellow-300">
                      Subject to Review
                    </h3>

                    <ul className="mt-6 space-y-4 text-[#d8d8d8]">

                      <li>
                        • Partial work has been completed.
                      </li>

                      <li>
                        • Client requests cancellation.
                      </li>

                      <li>
                        • Delays caused by third parties.
                      </li>

                      <li>
                        • Exceptional circumstances.
                      </li>

                    </ul>

                  </div>

                </div>

              </section>

                            {/* Non-Refundable Services */}
              <section id="non-refundable">

                <span className="text-sm font-semibold uppercase tracking-[0.2em] text-[#722df7]">
                  03
                </span>

                <h2 className="mt-3 text-3xl font-semibold text-white">
                  Non-Refundable Services
                </h2>

                <p className="mt-6 leading-8 text-[#9d9d9d]">
                  Due to the custom nature of our services, refunds cannot be
                  issued once significant work has started or project assets
                  have been delivered.
                </p>

                <div className="mt-8 rounded-2xl border border-red-500/20 bg-red-500/10 p-8">

                  <h3 className="text-xl font-semibold text-red-300">
                    The following services are non-refundable
                  </h3>

                  <div className="mt-8 grid gap-5 md:grid-cols-2">

                    <div className="rounded-xl bg-white/[0.03] p-5">
                      <p className="text-[#d8d8d8]">
                        ✕ Custom Website Design
                      </p>
                    </div>

                    <div className="rounded-xl bg-white/[0.03] p-5">
                      <p className="text-[#d8d8d8]">
                        ✕ Web Development
                      </p>
                    </div>

                    <div className="rounded-xl bg-white/[0.03] p-5">
                      <p className="text-[#d8d8d8]">
                        ✕ UI / UX Design
                      </p>
                    </div>

                    <div className="rounded-xl bg-white/[0.03] p-5">
                      <p className="text-[#d8d8d8]">
                        ✕ Landing Page Development
                      </p>
                    </div>

                    <div className="rounded-xl bg-white/[0.03] p-5">
                      <p className="text-[#d8d8d8]">
                        ✕ SEO & Optimization
                      </p>
                    </div>

                    <div className="rounded-xl bg-white/[0.03] p-5">
                      <p className="text-[#d8d8d8]">
                        ✕ Consultation Fees
                      </p>
                    </div>

                  </div>

                </div>

              </section>

              {/* Client Cancellation */}
              <section id="cancellation">

                <span className="text-sm font-semibold uppercase tracking-[0.2em] text-[#722df7]">
                  04
                </span>

                <h2 className="mt-3 text-3xl font-semibold text-white">
                  Client Cancellation
                </h2>

                <p className="mt-6 leading-8 text-[#9d9d9d]">
                  Clients may request to cancel a project at any time.
                  However, cancellation does not automatically qualify
                  for a refund.
                </p>

                <div className="mt-8 grid gap-6 lg:grid-cols-2">

                  <div className="rounded-2xl border border-white/10 bg-[#0b0b0b] p-7">

                    <h3 className="text-lg font-semibold text-white">
                      Before Development
                    </h3>

                    <p className="mt-5 leading-8 text-[#bcbcbc]">
                      If development has not started, a full or partial
                      refund may be considered after reviewing the
                      payment and project status.
                    </p>

                  </div>

                  <div className="rounded-2xl border border-white/10 bg-[#0b0b0b] p-7">

                    <h3 className="text-lg font-semibold text-white">
                      After Development
                    </h3>

                    <p className="mt-5 leading-8 text-[#bcbcbc]">
                      Once development begins, payments become
                      non-refundable because resources, time and
                      development work have already been invested.
                    </p>

                  </div>

                </div>

              </section>

              {/* Project Delays */}
              <section id="delays">

                <span className="text-sm font-semibold uppercase tracking-[0.2em] text-[#722df7]">
                  05
                </span>

                <h2 className="mt-3 text-3xl font-semibold text-white">
                  Project Delays
                </h2>

                <p className="mt-6 leading-8 text-[#9d9d9d]">
                  Project delays caused by external circumstances do not
                  qualify for refunds. We always work closely with our
                  clients to minimize delays and keep projects on track.
                </p>

                <div className="mt-8 rounded-2xl border border-white/10 bg-[#0b0b0b] p-8">

                  <h3 className="text-xl font-semibold text-white">
                    Common Delay Reasons
                  </h3>

                  <ul className="mt-6 space-y-4 text-[#cfcfcf]">

                    <li>
                      • Delayed client feedback or approvals.
                    </li>

                    <li>
                      • Missing content or branding assets.
                    </li>

                    <li>
                      • Third-party service interruptions.
                    </li>

                    <li>
                      • Hosting or domain related issues.
                    </li>

                    <li>
                      • Unexpected technical limitations.
                    </li>

                  </ul>

                </div>

              </section>

                            {/* Refund Process */}
              <section id="process">

                <span className="text-sm font-semibold uppercase tracking-[0.2em] text-[#722df7]">
                  06
                </span>

                <h2 className="mt-3 text-3xl font-semibold text-white">
                  Refund Process
                </h2>

                <p className="mt-6 leading-8 text-[#9d9d9d]">
                  If you believe you qualify for a refund, please follow the
                  steps below. Every request is reviewed fairly and individually
                  by our support team.
                </p>

                <div className="mt-10 space-y-6">

                  {[
                    {
                      step: "01",
                      title: "Submit a Request",
                      body: "Contact our support team with your order details and explain why you are requesting a refund.",
                    },
                    {
                      step: "02",
                      title: "Review Process",
                      body: "Our team carefully reviews your request along with the current project status.",
                    },
                    {
                      step: "03",
                      title: "Decision",
                      body: "We will notify you whether your refund request has been approved or declined.",
                    },
                    {
                      step: "04",
                      title: "Refund Issued",
                      body: "If approved, the refund will be processed using the original payment method whenever possible.",
                    },
                  ].map((item) => (
                    <div
                      key={item.step}
                      className="flex gap-6 rounded-2xl border border-white/10 bg-[#0b0b0b] p-6"
                    >
                      <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-[#722df7]/15 text-lg font-bold text-[#b38ff9]">
                        {item.step}
                      </div>

                      <div>
                        <h3 className="text-xl font-semibold text-white">
                          {item.title}
                        </h3>

                        <p className="mt-3 leading-8 text-[#bdbdbd]">
                          {item.body}
                        </p>
                      </div>
                    </div>
                  ))}

                </div>

              </section>

              {/* Payment Method */}
              <section id="payment">

                <span className="text-sm font-semibold uppercase tracking-[0.2em] text-[#722df7]">
                  07
                </span>

                <h2 className="mt-3 text-3xl font-semibold text-white">
                  Refund Payment Method
                </h2>

                <p className="mt-6 leading-8 text-[#9d9d9d]">
                  Approved refunds will normally be returned using the same
                  payment method used during the original transaction.
                </p>

                <div className="mt-8 rounded-2xl border border-[#722df7]/20 bg-[#722df7]/5 p-8">

                  <ul className="space-y-4 text-[#d5d5d5]">

                    <li>✓ Original payment method will be prioritized.</li>

                    <li>✓ Processing time depends on your payment provider.</li>

                    <li>✓ International transactions may require additional processing time.</li>

                    <li>✓ Bank processing may take 5–14 business days.</li>

                  </ul>

                </div>

              </section>

              {/* Exceptions */}
              <section id="exceptions">

                <span className="text-sm font-semibold uppercase tracking-[0.2em] text-[#722df7]">
                  08
                </span>

                <h2 className="mt-3 text-3xl font-semibold text-white">
                  Exceptions
                </h2>

                <p className="mt-6 leading-8 text-[#9d9d9d]">
                  Certain exceptional situations may require a custom review.
                  Krafti Code reserves the right to make the final decision
                  regarding any refund request.
                </p>

                <div className="mt-8 grid gap-6 md:grid-cols-2">

                  <div className="rounded-2xl border border-yellow-500/20 bg-yellow-500/10 p-6">

                    <h3 className="text-lg font-semibold text-yellow-300">
                      Possible Exceptions
                    </h3>

                    <ul className="mt-5 space-y-3 text-[#d6d6d6]">

                      <li>• Duplicate payment</li>

                      <li>• Billing errors</li>

                      <li>• Technical limitations</li>

                      <li>• Service unavailable before project starts</li>

                    </ul>

                  </div>

                  <div className="rounded-2xl border border-red-500/20 bg-red-500/10 p-6">

                    <h3 className="text-lg font-semibold text-red-300">
                      Not Considered
                    </h3>

                    <ul className="mt-5 space-y-3 text-[#d6d6d6]">

                      <li>• Change of mind</li>

                      <li>• Client delays</li>

                      <li>• Completed custom work</li>

                      <li>• Third-party platform issues</li>

                    </ul>

                  </div>

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
                  If you have any questions regarding this Refund Policy or
                  would like to submit a refund request, please contact our
                  support team using the information below.
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
                      For refund requests and general support.
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
                      Remote-first digital agency serving clients worldwide.
                    </p>

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