export const navItems = [
  ['Home', '#home'],
  ['About', '#about'],
  ['Services', '#services'],
  ['Portfolio', '#portfolio'],
  ['Process', '#process'],
  ['Pricing', '#contact'],
];

import webDesign from "../assets/web-design.png";
import webDev from "../assets/web-dev.png";
import responsive from "../assets/responsive.png";
import seo from "../assets/seo.png";

import pro1 from "../assets/pro1.png";
import pro2 from "../assets/pro2.png";
import pro3 from "../assets/pro3.png";
import pro4 from "../assets/pro4.png";
import pro5 from "../assets/pro5.png";

import av1 from "../assets/slide-2.png";
import av2 from "../assets/slide-1.jpg";
import av3 from "../assets/slide-3.jpg";
import av4 from "../assets/slide-4.jpg";


export const services = [
  {
    icon: webDesign,
    title: "Custom Web Design",
    body: "Beautiful, conversion-focused sites that align your brand and engage your audience.",
  },
  {
    icon: webDev,
    title: "Web Development",
    body: "Fast, secure, and scalable websites built with clean front-end engineering.",
  },
  {
    icon: responsive,
    title: "Responsive Design",
    body: "Seamless experiences across all screens, from desktop to mobile.",
  },
  {
    icon: seo,
    title: "SEO Optimization",
    body: "Technical foundations that help your website rank, load fast, and grow.",
  },
];

export const stats = [
  [50, 'Clients'],
  [100, 'Projects Completed'],
  [5, 'Years of Experience'],
  [99, 'Client Satisfaction'],
];

export const processSteps = [
  [pro1, 'Discover', 'We understand your\nbusiness, goals and\ntarget audience.'],
  [pro2, 'Plan', 'We create a strategy and\nmap the perfect website flow.'],
  [pro3, 'Design & Develop', 'We design and build\nmodern, fast and scalable\nwebsites.'],
  [pro4, 'Test & Launch', 'We test everything to\nensure quality and then\nlaunch.'],
  [pro5, 'Grow', 'We help you grow with\nongoing support.'],
];

export const projects = [
  {
    title: "Gravix",
    type: "Tech Website",
    image: 0,
    url: "https://gravix.com",
  },
  {
    title: "Foodbus Restaurant",
    type: "Restaurant Website",
    image: 1,
    url: "https://foodbus.krafticodeportfolio.xyz/",
  },
  {
    title: "PupHub",
    type: "E-commerce",
    image: 2,
    url: "https://foodbus.krafticodeportfolio.xyz/",
  },
  {
    title: "Flow Pilot",
    type: "SaaS",
    image: 4,
    url: "https://flowpilot.krafticodeportfolio.xyz/",
  },
  {
    title: "Portfolio",
    type: "Landing Page",
    image: 5,
    url: "https://jahid.krafticodeportfolio.xyz/",
  },
];

export const testimonials = [
  {
    avater: av2,
    name: "Michael Anderson",
    username: "@michaelanderson",
    quote:
      "Krafti Code completely transformed our online presence. The website is fast, modern, and has helped us generate more qualified leads than ever before.",
  },
  {
    avater: av1,
    name: "Sarah Johnson",
    username: "@sarahjohnson",
    quote:
      "The team delivered exactly what we envisioned. Their attention to detail, clean development, and responsive design exceeded our expectations.",
  },
  {
    avater: av3,
    name: "David Wilson",
    username: "@davidwilson",
    quote:
      "Working with Krafti Code was smooth from start to finish. Communication was excellent, deadlines were met, and the final website looks absolutely stunning.",
  },
  {
    avater: av4,
    name: "Emily Carter",
    username: "@emilycarter",
    quote:
      "Our new website loads incredibly fast and looks perfect on every device. We've already received positive feedback from our customers.",
  },
];
