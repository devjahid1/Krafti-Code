import { Link } from "react-router-dom";
import { FaChevronRight } from "react-icons/fa";

import Header from "../components/Header";
import Footer from "../components/Footer";

export default function CookiePolicy() {
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
              <Link to="/" className="transition hover:text-white">
                Home
              </Link>

              <FaChevronRight className="text-[11px]" />

              <span className="text-[#b38ff9]">Cookie Policy</span>
            </div>

            {/* Heading */}

            <h1 className="mt-8 max-w-4xl text-[42px] font-bold leading-tight text-white md:text-[60px] lg:tracking-[-0.04em]">
              Cookie <span className="text-[#722df7]">Policy</span>
            </h1>

            {/* Description */}

            <p className="mt-8 max-w-3xl text-[18px] leading-8 text-[#9f9f9f]">
              This Cookie Policy explains how Krafti Code uses cookies and
              similar technologies to improve your browsing experience, analyze
              website traffic and deliver better digital services.
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
                    href="#what-are-cookies"
                    className="block rounded-lg px-3 py-2 text-sm text-[#9f9f9f] transition hover:bg-[#722df7]/10 hover:text-white"
                  >
                    02. What Are Cookies?
                  </a>

                  <a
                    href="#types"
                    className="block rounded-lg px-3 py-2 text-sm text-[#9f9f9f] transition hover:bg-[#722df7]/10 hover:text-white"
                  >
                    03. Types of Cookies
                  </a>

                  <a
                    href="#usage"
                    className="block rounded-lg px-3 py-2 text-sm text-[#9f9f9f] transition hover:bg-[#722df7]/10 hover:text-white"
                  >
                    04. How We Use Cookies
                  </a>

                  <a
                    href="#third-party"
                    className="block rounded-lg px-3 py-2 text-sm text-[#9f9f9f] transition hover:bg-[#722df7]/10 hover:text-white"
                  >
                    05. Third-Party Cookies
                  </a>

                  <a
                    href="#manage"
                    className="block rounded-lg px-3 py-2 text-sm text-[#9f9f9f] transition hover:bg-[#722df7]/10 hover:text-white"
                  >
                    06. Manage Cookies
                  </a>

                  <a
                    href="#changes"
                    className="block rounded-lg px-3 py-2 text-sm text-[#9f9f9f] transition hover:bg-[#722df7]/10 hover:text-white"
                  >
                    07. Policy Updates
                  </a>

                  <a
                    href="#contact"
                    className="block rounded-lg px-3 py-2 text-sm text-[#9f9f9f] transition hover:bg-[#722df7]/10 hover:text-white"
                  >
                    08. Contact
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
                  At Krafti Code, we believe in transparency about how we
                  collect and use information. Cookies help us improve your
                  browsing experience, remember your preferences and make our
                  website faster, more secure and easier to use.
                </p>
              </section>

              {/* What Are Cookies */}
              <section id="what-are-cookies">
                <span className="text-sm font-semibold uppercase tracking-[0.2em] text-[#722df7]">
                  02
                </span>

                <h2 className="mt-3 text-3xl font-semibold text-white">
                  What Are Cookies?
                </h2>

                <p className="mt-6 leading-8 text-[#9d9d9d]">
                  Cookies are small text files stored on your device by your web
                  browser. They allow websites to remember information about
                  your visit, making future visits more efficient and
                  personalized.
                </p>

                <div className="mt-8 rounded-2xl border border-[#722df7]/20 bg-[#722df7]/5 p-8">
                  <h3 className="text-xl font-semibold text-white">
                    Cookies can help websites:
                  </h3>

                  <ul className="mt-6 space-y-4 text-[#d5d5d5]">
                    <li>✓ Remember your preferences.</li>

                    <li>✓ Improve website performance.</li>

                    <li>✓ Enhance website security.</li>

                    <li>✓ Analyze visitor behavior.</li>

                    <li>✓ Provide a personalized experience.</li>
                  </ul>
                </div>
              </section>

              {/* Cookie Types Overview */}
              <section id="types">
                <span className="text-sm font-semibold uppercase tracking-[0.2em] text-[#722df7]">
                  03
                </span>

                <h2 className="mt-3 text-3xl font-semibold text-white">
                  Types of Cookies We Use
                </h2>

                <p className="mt-6 leading-8 text-[#9d9d9d]">
                  Different types of cookies serve different purposes. Below are
                  the main categories used on our website.
                </p>

                <div className="mt-10 grid gap-6 md:grid-cols-2">
                  <div className="rounded-2xl border border-white/10 bg-[#0b0b0b] p-6">
                    <h3 className="text-xl font-semibold text-white">
                      Essential Cookies
                    </h3>

                    <p className="mt-4 leading-8 text-[#bdbdbd]">
                      Required for the website to function properly, including
                      navigation, security and accessibility.
                    </p>
                  </div>

                  <div className="rounded-2xl border border-white/10 bg-[#0b0b0b] p-6">
                    <h3 className="text-xl font-semibold text-white">
                      Performance Cookies
                    </h3>

                    <p className="mt-4 leading-8 text-[#bdbdbd]">
                      Help us understand how visitors interact with the website
                      so we can improve speed and usability.
                    </p>
                  </div>
                </div>
              </section>

              {/* Analytics & Marketing Cookies */}
              <section id="usage">
                <span className="text-sm font-semibold uppercase tracking-[0.2em] text-[#722df7]">
                  04
                </span>

                <h2 className="mt-3 text-3xl font-semibold text-white">
                  How We Use Cookies
                </h2>

                <p className="mt-6 leading-8 text-[#9d9d9d]">
                  We use cookies to improve your browsing experience, understand
                  how visitors interact with our website and continuously
                  enhance our digital services.
                </p>

                <div className="mt-10 grid gap-6 md:grid-cols-2">
                  {/* Analytics */}
                  <div className="rounded-2xl border border-white/10 bg-[#0b0b0b] p-6 transition hover:border-[#722df7]/40">
                    <h3 className="text-xl font-semibold text-white">
                      Analytics Cookies
                    </h3>

                    <p className="mt-4 leading-8 text-[#bdbdbd]">
                      These cookies collect anonymous information about website
                      traffic, visitor behavior and page performance so we can
                      improve user experience.
                    </p>
                  </div>

                  {/* Marketing */}
                  <div className="rounded-2xl border border-white/10 bg-[#0b0b0b] p-6 transition hover:border-[#722df7]/40">
                    <h3 className="text-xl font-semibold text-white">
                      Marketing Cookies
                    </h3>

                    <p className="mt-4 leading-8 text-[#bdbdbd]">
                      Marketing cookies help us measure advertising performance
                      and deliver more relevant promotional content across
                      different platforms.
                    </p>
                  </div>
                </div>
              </section>

              {/* Cookie Usage */}

              <section>
                <span className="text-sm font-semibold uppercase tracking-[0.2em] text-[#722df7]">
                  Purpose
                </span>

                <h2 className="mt-3 text-3xl font-semibold text-white">
                  Why We Use Cookies
                </h2>

                <div className="mt-10 grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
                  <div className="rounded-2xl border border-white/10 bg-[#0b0b0b] p-7 transition hover:border-[#722df7]/40">
                    <div className="text-4xl">⚡</div>

                    <h3 className="mt-6 text-xl font-semibold text-white">
                      Performance
                    </h3>

                    <p className="mt-4 leading-7 text-[#9d9d9d]">
                      Improve loading speed and website performance.
                    </p>
                  </div>

                  <div className="rounded-2xl border border-white/10 bg-[#0b0b0b] p-7 transition hover:border-[#722df7]/40">
                    <div className="text-4xl">🔒</div>

                    <h3 className="mt-6 text-xl font-semibold text-white">
                      Security
                    </h3>

                    <p className="mt-4 leading-7 text-[#9d9d9d]">
                      Protect users and prevent fraudulent activity.
                    </p>
                  </div>

                  <div className="rounded-2xl border border-white/10 bg-[#0b0b0b] p-7 transition hover:border-[#722df7]/40">
                    <div className="text-4xl">📊</div>

                    <h3 className="mt-6 text-xl font-semibold text-white">
                      Analytics
                    </h3>

                    <p className="mt-4 leading-7 text-[#9d9d9d]">
                      Understand visitor behavior and optimize content.
                    </p>
                  </div>

                  <div className="rounded-2xl border border-white/10 bg-[#0b0b0b] p-7 transition hover:border-[#722df7]/40">
                    <div className="text-4xl">🎯</div>

                    <h3 className="mt-6 text-xl font-semibold text-white">
                      Personalization
                    </h3>

                    <p className="mt-4 leading-7 text-[#9d9d9d]">
                      Remember preferences for a better browsing experience.
                    </p>
                  </div>
                </div>
              </section>

              {/* Third-Party Cookies */}
              <section id="third-party">
                <span className="text-sm font-semibold uppercase tracking-[0.2em] text-[#722df7]">
                  05
                </span>

                <h2 className="mt-3 text-3xl font-semibold text-white">
                  Third-Party Cookies
                </h2>

                <p className="mt-6 leading-8 text-[#9d9d9d]">
                  Our website may use trusted third-party services that place
                  cookies on your device. These cookies help us improve
                  performance, understand visitor behavior and provide enhanced
                  functionality.
                </p>

                <div className="mt-10 grid gap-6 md:grid-cols-2">
                  <div className="rounded-2xl border border-white/10 bg-[#0b0b0b] p-6 transition hover:border-[#722df7]/40">
                    <h3 className="text-xl font-semibold text-white">
                      Google Analytics
                    </h3>

                    <p className="mt-4 leading-8 text-[#bdbdbd]">
                      Helps us understand how visitors use our website,
                      including page views, traffic sources and user engagement.
                    </p>
                  </div>

                  <div className="rounded-2xl border border-white/10 bg-[#0b0b0b] p-6 transition hover:border-[#722df7]/40">
                    <h3 className="text-xl font-semibold text-white">
                      Cloudflare
                    </h3>

                    <p className="mt-4 leading-8 text-[#bdbdbd]">
                      Improves website security, speed and protection against
                      malicious traffic.
                    </p>
                  </div>

                  <div className="rounded-2xl border border-white/10 bg-[#0b0b0b] p-6 transition hover:border-[#722df7]/40">
                    <h3 className="text-xl font-semibold text-white">
                      YouTube
                    </h3>

                    <p className="mt-4 leading-8 text-[#bdbdbd]">
                      Embedded videos may place cookies to remember playback
                      preferences and collect viewing statistics.
                    </p>
                  </div>

                  <div className="rounded-2xl border border-white/10 bg-[#0b0b0b] p-6 transition hover:border-[#722df7]/40">
                    <h3 className="text-xl font-semibold text-white">
                      Social Platforms
                    </h3>

                    <p className="mt-4 leading-8 text-[#bdbdbd]">
                      Facebook, Instagram and LinkedIn widgets may use cookies
                      according to their own privacy policies.
                    </p>
                  </div>
                </div>
              </section>

              {/* Manage Cookies */}

              <section id="manage">
                <span className="text-sm font-semibold uppercase tracking-[0.2em] text-[#722df7]">
                  06
                </span>

                <h2 className="mt-3 text-3xl font-semibold text-white">
                  Managing Cookies
                </h2>

                <p className="mt-6 leading-8 text-[#9d9d9d]">
                  You can control or delete cookies through your browser
                  settings at any time. Please note that disabling certain
                  cookies may affect website functionality.
                </p>

                <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                  <div className="rounded-2xl border border-white/10 bg-[#0b0b0b] p-6 text-center transition hover:border-[#722df7]/40">
                    <div className="text-5xl">🌐</div>

                    <h3 className="mt-5 text-lg font-semibold text-white">
                      Chrome
                    </h3>

                    <p className="mt-3 text-sm leading-7 text-[#9d9d9d]">
                      Settings → Privacy & Security → Cookies
                    </p>
                  </div>

                  <div className="rounded-2xl border border-white/10 bg-[#0b0b0b] p-6 text-center transition hover:border-[#722df7]/40">
                    <div className="text-5xl">🦊</div>

                    <h3 className="mt-5 text-lg font-semibold text-white">
                      Firefox
                    </h3>

                    <p className="mt-3 text-sm leading-7 text-[#9d9d9d]">
                      Settings → Privacy & Security
                    </p>
                  </div>

                  <div className="rounded-2xl border border-white/10 bg-[#0b0b0b] p-6 text-center transition hover:border-[#722df7]/40">
                    <div className="text-5xl">🧭</div>

                    <h3 className="mt-5 text-lg font-semibold text-white">
                      Safari
                    </h3>

                    <p className="mt-3 text-sm leading-7 text-[#9d9d9d]">
                      Preferences → Privacy
                    </p>
                  </div>

                  <div className="rounded-2xl border border-white/10 bg-[#0b0b0b] p-6 text-center transition hover:border-[#722df7]/40">
                    <div className="text-5xl">🪟</div>

                    <h3 className="mt-5 text-lg font-semibold text-white">
                      Edge
                    </h3>

                    <p className="mt-3 text-sm leading-7 text-[#9d9d9d]">
                      Settings → Cookies & Site Permissions
                    </p>
                  </div>
                </div>

                <div className="mt-10 rounded-2xl border border-[#722df7]/20 bg-[#722df7]/5 p-8">
                  <h3 className="text-xl font-semibold text-white">
                    Important Notice
                  </h3>

                  <p className="mt-5 leading-8 text-[#d5d5d5]">
                    Disabling essential cookies may prevent some parts of the
                    website from functioning correctly, including contact forms,
                    authentication and user preferences.
                  </p>
                </div>
              </section>

              {/* Changes to This Policy */}
              <section id="changes">
                <span className="text-sm font-semibold uppercase tracking-[0.2em] text-[#722df7]">
                  07
                </span>

                <h2 className="mt-3 text-3xl font-semibold text-white">
                  Changes to This Cookie Policy
                </h2>

                <p className="mt-6 leading-8 text-[#9d9d9d]">
                  We may update this Cookie Policy from time to time to reflect
                  changes in technology, legal requirements or our business
                  practices. Any updates will be published on this page along
                  with the revised "Last Updated" date.
                </p>

                <div className="mt-8 rounded-2xl border border-[#722df7]/20 bg-[#722df7]/5 p-8">
                  <h3 className="text-xl font-semibold text-white">
                    We recommend that you:
                  </h3>

                  <ul className="mt-6 space-y-4 text-[#d5d5d5]">
                    <li>✓ Review this page periodically.</li>

                    <li>✓ Stay informed about our cookie practices.</li>

                    <li>✓ Contact us if you have any questions.</li>
                  </ul>
                </div>
              </section>

              {/* Contact Information */}
              <section id="contact">
                <span className="text-sm font-semibold uppercase tracking-[0.2em] text-[#722df7]">
                  08
                </span>

                <h2 className="mt-3 text-3xl font-semibold text-white">
                  Contact Information
                </h2>

                <p className="mt-6 leading-8 text-[#9d9d9d]">
                  If you have any questions regarding our Cookie Policy or how
                  cookies are used on our website, please get in touch with our
                  team.
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
                      General support and privacy inquiries.
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
                      Serving businesses worldwide with modern digital
                      solutions.
                    </p>
                  </div>

                  {/* Website */}
                  <div className="rounded-2xl border border-white/10 bg-[#0b0b0b] p-7 transition hover:border-[#722df7]/40">
                    <p className="text-sm uppercase tracking-[0.18em] text-[#722df7]">
                      Website
                    </p>

                    <h3 className="mt-4 text-lg font-semibold text-white">
                      www.krafticode.com
                    </h3>

                    <p className="mt-3 text-sm leading-7 text-[#9d9d9d]">
                      Visit our website for more information.
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
