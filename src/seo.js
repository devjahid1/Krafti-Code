import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export const SITE_URL = "https://krafticode.com";
const DEFAULT_IMAGE = `${SITE_URL}/assets/hero-bg.webp`;

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Krafti Code",
  url: SITE_URL,
  logo: `${SITE_URL}/assets/logo.webp`,
  description:
    "Krafti Code is a web development and digital technology agency that designs and builds modern websites and web applications.",
  email: "hello@krafticode.com",
  telephone: "+8801732937226",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Sylhet",
    postalCode: "3100",
    addressCountry: "BD",
  },
  sameAs: [
    "https://facebook.com/thekrafticode",
    "https://instagram.com/krafticode",
    "https://linkedin.com/company/krafticode",
  ],
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Krafti Code",
  url: SITE_URL,
  description:
    "Web development, website design, UI/UX design, responsive development, and SEO services from Krafti Code.",
  publisher: {
    "@type": "Organization",
    name: "Krafti Code",
  },
};

export const pageMetadata = {
  "/": {
    title: "Krafti Code | Web Development & Web Design Agency",
    description:
      "Krafti Code is a web development and web design agency creating high-performing websites, web applications, UI/UX, and responsive digital experiences.",
    schema: [organizationSchema, websiteSchema],
  },
  "/website-design": {
    title: "Custom Website Design Services | Krafti Code",
    description:
      "Explore custom website design services from Krafti Code. We create modern, conversion-focused websites that help your brand stand out online.",
  },
  "/web-development": {
    title: "Custom Web Development Services | Krafti Code",
    description:
      "Krafti Code builds fast, scalable websites and web applications tailored to your business, users, and real-world technical requirements.",
  },
  "/ui-ux": {
    title: "UI/UX Design Services | Krafti Code",
    description:
      "Create clearer, more intuitive digital products with Krafti Code's UI/UX design services, from research and user flows to prototypes and design systems.",
  },
  "/responsive": {
    title: "Responsive Web Development | Krafti Code",
    description:
      "Krafti Code delivers responsive web development that gives customers a smooth, consistent experience across mobile, tablet, and desktop devices.",
  },
  "/seo": {
    title: "SEO Optimization Services | Krafti Code",
    description:
      "Improve your website's search visibility with Krafti Code's SEO optimization services, including technical SEO, on-page improvements, and performance work.",
  },
  "/teams": {
    title: "Meet the Krafti Code Team | Digital Specialists",
    description:
      "Meet the designers, developers, and digital specialists behind Krafti Code and the thoughtful digital experiences we create together.",
  },
  "/careers": {
    title: "Careers at Krafti Code | Join Our Team",
    description:
      "Explore current career opportunities at Krafti Code and join a team of designers, developers, and problem solvers building meaningful digital experiences.",
  },
  "/privacy-policy": {
    title: "Privacy Policy | Krafti Code",
    description:
      "Read the Krafti Code privacy policy to understand how we collect, use, protect, and manage personal information.",
  },
  "/cookie-policy": {
    title: "Cookie Policy | Krafti Code",
    description:
      "Read the Krafti Code cookie policy to understand how cookies and similar technologies are used on our website.",
  },
  "/refund-policy": {
    title: "Refund Policy | Krafti Code",
    description:
      "Read the Krafti Code refund policy for information about eligibility, cancellations, payment handling, and refund requests.",
  },
  "/terms-conditions": {
    title: "Terms & Conditions | Krafti Code",
    description:
      "Read Krafti Code's terms and conditions governing access to our website and professional digital services.",
  },
};

function setMeta(attribute, key, content) {
  let element = document.head.querySelector(`meta[${attribute}="${key}"]`);

  if (!element) {
    element = document.createElement("meta");
    element.setAttribute(attribute, key);
    document.head.appendChild(element);
  }

  element.setAttribute("content", content);
}

function setCanonical(url) {
  let element = document.head.querySelector('link[rel="canonical"]');

  if (!element) {
    element = document.createElement("link");
    element.setAttribute("rel", "canonical");
    document.head.appendChild(element);
  }

  element.setAttribute("href", url);
}

export default function PageSeo() {
  const { pathname } = useLocation();
  const metadata = pageMetadata[pathname];
  const isNotFound = !metadata;

  useEffect(() => {
    const url = `${SITE_URL}${pathname === "/" ? "/" : pathname}`;
    const title = isNotFound ? "Page Not Found | Krafti Code" : metadata.title;
    const description = isNotFound
      ? "The page you requested could not be found."
      : metadata.description;

    document.title = title;
    setMeta("name", "description", description);
    setMeta("name", "robots", isNotFound ? "noindex, nofollow, noarchive" : "index, follow");
    setCanonical(url);

    setMeta("property", "og:title", title);
    setMeta("property", "og:description", description);
    setMeta("property", "og:url", url);
    setMeta("property", "og:type", "website");
    setMeta("property", "og:site_name", "Krafti Code");
    setMeta("property", "og:image", DEFAULT_IMAGE);
    setMeta("property", "og:image:alt", "Krafti Code website hero artwork");
    setMeta("name", "twitter:card", "summary_large_image");
    setMeta("name", "twitter:title", title);
    setMeta("name", "twitter:description", description);
    setMeta("name", "twitter:image", DEFAULT_IMAGE);
    setMeta("name", "twitter:image:alt", "Krafti Code website hero artwork");

    const existingSchema = document.getElementById("krafticode-schema");
    if (metadata?.schema) {
      const schema = existingSchema || document.createElement("script");
      schema.id = "krafticode-schema";
      schema.type = "application/ld+json";
      schema.textContent = JSON.stringify(metadata.schema);
      if (!existingSchema) document.head.appendChild(schema);
    } else if (existingSchema) {
      existingSchema.remove();
    }
  }, [isNotFound, metadata, pathname]);

  return null;
}
