import { assets } from '../lib/assets.js';
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";

const columns = [
  [
    "Quick Links",
    [
      { name: "Home", href: "#home" },
      { name: "About", href: "#about" },
      { name: "Services", href: "#services" },
      { name: "Portfolio", href: "#portfolio" },
      { name: "Process", href: "#process" },
      { name: "Testimonials", href: "#testimonials" },
      { name: "Contact", href: "#contact" },
    ],
  ],

  [
    "Services",
    [
      { name: "Website Design", href: "#services" },
      { name: "Web Development", href: "#services" },
      { name: "UI/UX Design", href: "#services" },
      { name: "Landing Pages", href: "#services" },
      { name: "Website Maintenance", href: "#services" },
    ],
  ],

  [
    "Legal",
    [
      { name: "Privacy Policy", href: "/privacy-policy" },
      { name: "Terms & Conditions", href: "/terms-and-conditions" },
      { name: "Cookie Policy", href: "/cookie-policy" },
      { name: "Refund Policy", href: "/refund-policy" },
    ],
  ],
];

export default function Footer() {
  return (
    <footer className="bg-black pb-10 pt-16 lg:pt-[4.875rem]">
      <div className="site-container grid gap-12 lg:grid-cols-[minmax(16rem,19.6875rem)_1fr] lg:gap-[11.5%]">
        <div>
          <img src={assets.logo} alt="Krafti Code" className="w-24 sm:w-[7.5rem]" width="120" height="113" />
          <p className="mt-7 text-base leading-8 text-[#b1adad] sm:text-[17px]">
            Turning your ideas into powerful digital experiences with modern design, clean development, and lasting impact.
          </p>
<div
  className="mt-7 flex flex-wrap gap-7 text-xl text-white"
  aria-label="Social links"
>
  <a
    href="https://facebook.com/thekrafticode"
    target="_blank"
    rel="noopener noreferrer"
    className="transition hover:text-[#722df7]"
    aria-label="Facebook"
  >
    <FaFacebookF />
  </a>

  <a
    href="https://instagram.com/krafticode"
    target="_blank"
    rel="noopener noreferrer"
    className="transition hover:text-[#722df7]"
    aria-label="Instagram"
  >
    <FaInstagram />
  </a>

  <a
    href="https://linkedin.com/company/krafticode"
    target="_blank"
    rel="noopener noreferrer"
    className="transition hover:text-[#722df7]"
    aria-label="LinkedIn"
  >
    <FaLinkedinIn />
  </a>
</div>
        </div>
        <div className="grid gap-10 sm:grid-cols-2 xl:grid-cols-4">
          {columns.map(([title, links]) => (
            <div key={title}>
              <h2 className="mb-7 text-[16px] font-semibold leading-6 text-[#9ea6ad]">{title}</h2>
              <ul className="space-y-4">
{links.map((link) => (
  <li key={link.name}>
    <a
      href={link.href}
      className="text-[16px] leading-6 text-white transition hover:text-[#b38ff9]"
    >
      {link.name}
    </a>
  </li>
))}
              </ul>
            </div>
          ))}
          <address className="not-italic">
            <h2 className="mb-7 text-[16px] font-semibold leading-6 text-[#9ea6ad]">Get in Touch</h2>
            <ul className="space-y-4 text-[16px] leading-6 text-white">
              <li>
                <a href="mailto:hello@krafticode.com">hello@krafticode.com</a>
              </li>
              <li>Sylhet-3100, Bangladesh</li>
              <li>
                <a href="tel:+8801732937226">+880 1732-937226</a>
              </li>
            </ul>
          </address>
        </div>
      </div>

      <div className="mt-16 border-t border-[#1a1a1a] pt-8">
  <div className="flex flex-col items-center justify-center text-center text-sm text-[#7f7f7f] md:flex-row">
    
    <p>
      © {new Date().getFullYear()}{" "}
      <span className="text-white font-medium">
        Krafti Code
      </span>
      . Transforming ideas into digital excellence.
    </p>


  </div>
</div>
    </footer>
  );
}
