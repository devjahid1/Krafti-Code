import { useEffect, useState } from "react";
import emailjs from "@emailjs/browser";
import { FiArrowRight, FiX } from "react-icons/fi";

// =====================================================
// EmailJS Configuration
// =====================================================

const EMAILJS_SERVICE_ID =
  import.meta.env.VITE_EMAILJS_SERVICE_ID;

const EMAILJS_TEMPLATE_ID =
  import.meta.env.VITE_EMAILJS_PRICING_TEMPLATE_ID ||
  "template_mtv8gkc";

const EMAILJS_PUBLIC_KEY =
  import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

// =====================================================
// Package Information
// =====================================================

const packageInfo = {
  STARTER: {
    title: "Starter Package",
    price: "$999",
    priceType: "fixed",
    description:
      "Perfect for small businesses and solopreneurs who need a clean, professional web presence.",
  },

  PREMIUM: {
    title: "Premium Package",
    price: "$1999",
    priceType: "fixed",
    description:
      "For growing brands that need a high-converting website with custom design and advanced features.",
  },

  ENTERPRISE: {
    title: "Enterprise Package",
    price: "Custom",
    priceType: "custom",
    description:
      "Tailored solutions for complex platforms, large teams, and high-traffic digital products.",
  },
};

// =====================================================
// Initial Form Data
// =====================================================

const initialFormData = {
  name: "",
  email: "",
  phone: "",
  company: "",
  project_type: "",
  budget: "",
  deadline: "",
  message: "",
};

// =====================================================
// Pricing Modal
// =====================================================

export default function PricingModal({
  isOpen,
  packageName,
  onClose,
  onSuccess,
}) {
  const [formData, setFormData] =
    useState(initialFormData);

  const [isSending, setIsSending] =
    useState(false);

  const [error, setError] =
    useState("");

  // =====================================================
  // Current Package
  // =====================================================

  const currentPackage =
    packageInfo[packageName] ||
    packageInfo.STARTER;

  // =====================================================
  // Reset Form
  // =====================================================

  useEffect(() => {
    if (isOpen) {
      setFormData(initialFormData);
      setError("");
      setIsSending(false);
    }
  }, [isOpen, packageName]);

  // =====================================================
  // Escape + Body Scroll
  // =====================================================

  useEffect(() => {
    if (!isOpen) return;

    const handleEscape = (event) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    document.addEventListener(
      "keydown",
      handleEscape
    );

    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener(
        "keydown",
        handleEscape
      );

      document.body.style.overflow = "";
    };
  }, [isOpen, onClose]);

  // =====================================================
  // Don't Render
  // =====================================================

  if (!isOpen) return null;

  // =====================================================
  // Input Change
  // =====================================================

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // =====================================================
  // Submit
  // =====================================================

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (isSending) return;

    setIsSending(true);
    setError("");

    // ===================================================
    // Price / Budget
    // ===================================================

    const finalPrice =
      currentPackage.priceType === "custom"
        ? "Custom"
        : currentPackage.price;

    const finalBudget =
      currentPackage.priceType === "custom"
        ? formData.budget
        : currentPackage.price;

    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          // Package
          package: packageName,

          package_name:
            currentPackage.title,

          // Price
          price: finalPrice,

          // Client Budget
          budget: finalBudget,

          // Client Information
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          company: formData.company,

          // Project
          project_type:
            formData.project_type,

          deadline:
            formData.deadline,

          message:
            formData.message,
        },
        {
          publicKey: EMAILJS_PUBLIC_KEY,
        }
      );

      // ===================================================
      // Success
      // ===================================================

      setFormData(initialFormData);
      setIsSending(false);

      // Close Pricing Modal
      onClose();

      // Open Thank You Modal
      if (onSuccess) {
        setTimeout(() => {
          onSuccess();
        }, 150);
      }
    } catch (err) {
      console.error(
        "Pricing EmailJS Error:",
        err
      );

      setIsSending(false);

      setError(
        "Something went wrong. Please try again."
      );
    }
  };

  // =====================================================
  // Render
  // =====================================================

  return (
    <div
      className="
        fixed
        inset-0
        z-[9999]
        flex
        items-center
        justify-center
        bg-black/80
        px-4
        py-4
        backdrop-blur-md
      "
      onMouseDown={(event) => {
        if (
          event.target === event.currentTarget
        ) {
          onClose();
        }
      }}
    >
      {/* =================================================
          Modal
      ================================================= */}

      <div
        className="
          relative
          w-full
          max-w-[680px]
          max-h-[94vh]
          overflow-y-auto
          rounded-[22px]
          border
          border-white/10
          bg-[#090909]
          shadow-[0_30px_100px_rgba(0,0,0,.7)]
        "
      >
        {/* =================================================
            Close
        ================================================= */}

        <button
          type="button"
          onClick={onClose}
          className="
            absolute
            right-4
            top-4
            z-20
            flex
            h-9
            w-9
            items-center
            justify-center
            rounded-full
            border
            border-white/10
            bg-white/[0.04]
            text-[#aaa]
            transition
            hover:border-[#722df7]/50
            hover:bg-[#722df7]/10
            hover:text-white
          "
        >
          <FiX size={18} />
        </button>

        {/* =================================================
            Header
        ================================================= */}

        <div
          className="
            border-b
            border-white/[0.08]
            px-6
            py-5
            sm:px-7
          "
        >
          {/* Package + Price */}

          <div
            className="
              flex
              items-start
              justify-between
              gap-5
              pr-10
            "
          >
            <div>
              <span
                className="
                  inline-flex
                  rounded-full
                  bg-[#722df7]/10
                  px-3
                  py-1.5
                  text-[10px]
                  font-medium
                  uppercase
                  tracking-[0.18em]
                  text-[#b38ff9]
                "
              >
                {packageName} Package
              </span>

              <h2
                className="
                  mt-3
                  text-2xl
                  font-bold
                  tracking-tight
                  text-white
                  sm:text-[27px]
                "
              >
                {currentPackage.title}
              </h2>
            </div>

            {/* Price */}

            <div className="text-right">
              <p
                className="
                  text-[10px]
                  uppercase
                  tracking-[0.15em]
                  text-[#666]
                "
              >
                Project Price
              </p>

              <p
                className="
                  mt-1
                  whitespace-nowrap
                  text-xl
                  font-bold
                  text-[#b18aff]
                "
              >
                {currentPackage.price}
              </p>
            </div>
          </div>

          {/* Description */}

          <p
            className="
              mt-3
              max-w-[570px]
              text-[13px]
              leading-5
              text-[#999]
            "
          >
            {currentPackage.description}
          </p>
        </div>

        {/* =================================================
            Form
        ================================================= */}

        <form
          onSubmit={handleSubmit}
          className="
            px-6
            py-5
            sm:px-7
          "
        >
          <div
            className="
              grid
              gap-3.5
              sm:grid-cols-2
            "
          >
            {/* =================================================
                Name
            ================================================= */}

            <div>
              <label
                className="
                  mb-1.5
                  block
                  text-[12px]
                  text-[#c5c5c5]
                "
              >
                Your Name *
              </label>

              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="John Doe"
                className="
                  w-full
                  rounded-lg
                  border
                  border-white/10
                  bg-white/[0.03]
                  px-3.5
                  py-2.5
                  text-[13px]
                  text-white
                  outline-none
                  placeholder:text-[#555]
                  focus:border-[#722df7]
                "
              />
            </div>

            {/* =================================================
                Email
            ================================================= */}

            <div>
              <label
                className="
                  mb-1.5
                  block
                  text-[12px]
                  text-[#c5c5c5]
                "
              >
                Email Address *
              </label>

              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="john@example.com"
                className="
                  w-full
                  rounded-lg
                  border
                  border-white/10
                  bg-white/[0.03]
                  px-3.5
                  py-2.5
                  text-[13px]
                  text-white
                  outline-none
                  placeholder:text-[#555]
                  focus:border-[#722df7]
                "
              />
            </div>

            {/* =================================================
                Phone
            ================================================= */}

            <div>
              <label
                className="
                  mb-1.5
                  block
                  text-[12px]
                  text-[#c5c5c5]
                "
              >
                Phone Number *
              </label>

              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
                placeholder="+880 1XXXXXXXXX"
                className="
                  w-full
                  rounded-lg
                  border
                  border-white/10
                  bg-white/[0.03]
                  px-3.5
                  py-2.5
                  text-[13px]
                  text-white
                  outline-none
                  placeholder:text-[#555]
                  focus:border-[#722df7]
                "
              />
            </div>

            {/* =================================================
                Company
            ================================================= */}

            <div>
              <label
                className="
                  mb-1.5
                  block
                  text-[12px]
                  text-[#c5c5c5]
                "
              >
                Company
              </label>

              <input
                type="text"
                name="company"
                value={formData.company}
                onChange={handleChange}
                placeholder="Company name"
                className="
                  w-full
                  rounded-lg
                  border
                  border-white/10
                  bg-white/[0.03]
                  px-3.5
                  py-2.5
                  text-[13px]
                  text-white
                  outline-none
                  placeholder:text-[#555]
                  focus:border-[#722df7]
                "
              />
            </div>

            {/* =================================================
                Project Type
            ================================================= */}

            <div>
              <label
                className="
                  mb-1.5
                  block
                  text-[12px]
                  text-[#c5c5c5]
                "
              >
                Project Type *
              </label>

              <select
                name="project_type"
                value={formData.project_type}
                onChange={handleChange}
                required
                className="
                  w-full
                  rounded-lg
                  border
                  border-white/10
                  bg-[#111]
                  px-3.5
                  py-2.5
                  text-[13px]
                  text-white
                  outline-none
                  focus:border-[#722df7]
                "
              >
                <option value="">
                  Select project type
                </option>

                <option value="Business Website">
                  Business Website
                </option>

                <option value="E-commerce Website">
                  E-commerce Website
                </option>

                <option value="Web Application">
                  Web Application
                </option>

                <option value="Landing Page">
                  Landing Page
                </option>

                <option value="Portfolio Website">
                  Portfolio Website
                </option>

                <option value="Other">
                  Other
                </option>
              </select>
            </div>

            {/* =================================================
                Budget - Enterprise Only
            ================================================= */}

            {currentPackage.priceType ===
              "custom" && (
              <div>
                <label
                  className="
                    mb-1.5
                    block
                    text-[12px]
                    text-[#c5c5c5]
                  "
                >
                  Your Budget *
                </label>

                <input
                  type="text"
                  name="budget"
                  value={formData.budget}
                  onChange={handleChange}
                  required
                  placeholder="e.g. $2,000 - $5,000"
                  className="
                    w-full
                    rounded-lg
                    border
                    border-white/10
                    bg-white/[0.03]
                    px-3.5
                    py-2.5
                    text-[13px]
                    text-white
                    outline-none
                    placeholder:text-[#555]
                    focus:border-[#722df7]
                  "
                />
              </div>
            )}

            {/* =================================================
                Deadline
            ================================================= */}

            <div
              className={
                currentPackage.priceType ===
                "custom"
                  ? ""
                  : ""
              }
            >
              <label
                className="
                  mb-1.5
                  block
                  text-[12px]
                  text-[#c5c5c5]
                "
              >
                Expected Deadline
              </label>

              <input
                type="text"
                name="deadline"
                value={formData.deadline}
                onChange={handleChange}
                placeholder="e.g. 2-4 weeks"
                className="
                  w-full
                  rounded-lg
                  border
                  border-white/10
                  bg-white/[0.03]
                  px-3.5
                  py-2.5
                  text-[13px]
                  text-white
                  outline-none
                  placeholder:text-[#555]
                  focus:border-[#722df7]
                "
              />
            </div>

            {/* =================================================
                Message
            ================================================= */}

            <div className="sm:col-span-2">
              <label
                className="
                  mb-1.5
                  block
                  text-[12px]
                  text-[#c5c5c5]
                "
              >
                Project Requirements *
              </label>

              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={3}
                placeholder="Tell us about your project..."
                className="
                  w-full
                  resize-none
                  rounded-lg
                  border
                  border-white/10
                  bg-white/[0.03]
                  px-3.5
                  py-2.5
                  text-[13px]
                  leading-5
                  text-white
                  outline-none
                  placeholder:text-[#555]
                  focus:border-[#722df7]
                "
              />
            </div>
          </div>

          {/* =================================================
              Error
          ================================================= */}

          {error && (
            <div
              className="
                mt-3
                rounded-lg
                border
                border-red-500/20
                bg-red-500/10
                px-4
                py-2.5
                text-[12px]
                text-red-400
              "
            >
              {error}
            </div>
          )}

          {/* =================================================
              Submit Button
          ================================================= */}

          <button
            type="submit"
            disabled={isSending}
            className="
              group
              mt-5
              flex
              w-full
              items-center
              justify-center
              gap-3
              rounded-lg
              bg-[#722df7]
              px-6
              py-3
              text-[13px]
              font-semibold
              text-white
              transition
              duration-300
              hover:bg-[#823cff]
              disabled:cursor-not-allowed
              disabled:opacity-60
            "
          >
            {isSending
              ? "Sending Request..."
              : `Request ${packageName} Package`}

            {!isSending && (
              <FiArrowRight
                className="
                  text-lg
                  transition-transform
                  duration-300
                  group-hover:translate-x-1
                "
              />
            )}
          </button>

          {/* =================================================
              Small Note
          ================================================= */}

          <p
            className="
              mt-3
              text-center
              text-[11px]
              text-[#555]
            "
          >
            We'll review your request and get
            back to you shortly.
          </p>
        </form>
      </div>
    </div>
  );
}