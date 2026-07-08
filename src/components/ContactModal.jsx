import { useEffect, useRef, useState } from "react";
import { currencies } from "../data/currencies";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import emailjs from "@emailjs/browser";

const fields = [
  ["fullName", "Full Name", "text", "Jane Cooper"],
  ["email", "Email", "email", "jane@company.com"],
];

export default function ContactModal({ isOpen, onClose }) {
  const modalRef = useRef(null);
  const panelRef = useRef(null);
  const closeButtonRef = useRef(null);

  const [loading, setLoading] = useState(false);

  const [status, setStatus] = useState({
    open: false,
    type: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);

    try {
      await emailjs.sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        e.target,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );

      e.target.reset();

      onClose();

      setTimeout(() => {
        setStatus({
          open: true,
          type: "success",
        });
      }, 250);
    } catch (error) {
      console.error(error);

      setStatus({
        open: true,
        type: "error",
      });
    } finally {
      setLoading(false);
    }
  };

  const closeStatusModal = () => {
    setStatus({
      open: false,
      type: "",
    });
  };

    useGSAP(
    () => {
      if (!modalRef.current || !panelRef.current) return;

      if (isOpen) {
        gsap.set(modalRef.current, {
          display: "grid",
        });

        gsap.fromTo(
          modalRef.current,
          {
            autoAlpha: 0,
          },
          {
            autoAlpha: 1,
            duration: 0.25,
            ease: "power2.out",
          }
        );

        gsap.fromTo(
          panelRef.current,
          {
            autoAlpha: 0,
            y: 30,
            scale: 0.96,
          },
          {
            autoAlpha: 1,
            y: 0,
            scale: 1,
            duration: 0.45,
            ease: "power3.out",
          }
        );
      } else {
        gsap.to(panelRef.current, {
          autoAlpha: 0,
          y: 20,
          scale: 0.97,
          duration: 0.2,
          ease: "power2.in",
        });

        gsap.to(modalRef.current, {
          autoAlpha: 0,
          duration: 0.2,
          ease: "power2.in",
          onComplete: () => {
            gsap.set(modalRef.current, {
              display: "none",
            });
          },
        });
      }
    },
    {
      dependencies: [isOpen],
      scope: modalRef,
    }
  );

    useEffect(() => {
    if (!isOpen) return;

    const previousActive = document.activeElement;

    document.body.style.overflow = "hidden";

    closeButtonRef.current?.focus();

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        onClose();
        return;
      }

      if (event.key !== "Tab" || !panelRef.current) return;

      const focusable = panelRef.current.querySelectorAll(
        'a[href], button:not([disabled]), textarea:not([disabled]), input:not([disabled]), select:not([disabled]), [tabindex]:not([tabindex="-1"])'
      );

      if (!focusable.length) return;

      const first = focusable[0];
      const last = focusable[focusable.length - 1];

      if (
        event.shiftKey &&
        document.activeElement === first
      ) {
        event.preventDefault();
        last.focus();
      } else if (
        !event.shiftKey &&
        document.activeElement === last
      ) {
        event.preventDefault();
        first.focus();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener(
        "keydown",
        handleKeyDown
      );

      document.body.style.overflow = "";

      if (previousActive?.focus) {
        previousActive.focus();
      }
    };
  }, [isOpen, onClose]);

  return (
    <>
      {/* Contact Modal */}
      <div
        ref={modalRef}
        className="fixed inset-0 z-[100] hidden place-items-center bg-black/75 px-4 py-6 backdrop-blur-xl"
        role="dialog"
        aria-modal="true"
        aria-labelledby="contact-modal-title"
        onMouseDown={(event) => {
          if (event.target === event.currentTarget) {
            onClose();
          }
        }}
      >
        <div
          ref={panelRef}
          className="w-full max-w-[42rem] rounded-2xl border border-white/10 bg-[#07040d] p-5 shadow-[0_30px_120px_rgba(100,24,253,0.28)] sm:p-8"
        >
          <div className="mb-7 flex items-start justify-between gap-5">
            <div>
              <p className="font-inclusive text-xs uppercase tracking-[0.14em] text-[#b38ff9]">
                Lets Talk
              </p>

              <h2
                id="contact-modal-title"
                className="mt-2 text-2xl font-semibold text-white sm:text-3xl"
              >
                Tell us about your project
              </h2>
            </div>

            <button
              ref={closeButtonRef}
              type="button"
              onClick={onClose}
              className="grid size-10 place-items-center rounded-full border border-white/10 text-2xl text-white transition hover:border-[#722df7] hover:text-[#722df7]"
            >
              ×
            </button>
          </div>

          <form
            className="grid gap-4"
            onSubmit={handleSubmit}
          >
            <div className="grid gap-4 sm:grid-cols-2">
              {fields.map(
                ([id, label, type, placeholder]) => (
                  <label
                    key={id}
                    htmlFor={id}
                    className="grid gap-2 text-sm text-[#d8d8d8]"
                  >
                    <span>{label}</span>

                    <input
                      id={id}
                      name={id}
                      type={type}
                      placeholder={placeholder}
                      required={
                        id === "fullName" ||
                        id === "email"
                      }
                      className="min-h-12 rounded-lg border border-white/10 bg-black/45 px-4 text-white outline-none transition placeholder:text-[#68636f] focus:border-[#722df7]"
                    />
                  </label>
                )
              )}
            </div>

<div className="grid gap-4 sm:grid-cols-2">

  {/* Company */}
  <label
    htmlFor="company"
    className="grid gap-2 text-sm text-[#d8d8d8]"
  >
    <span>Company</span>

    <input
      id="company"
      name="company"
      type="text"
      required
      placeholder="Acme Studio"
      className="min-h-12 rounded-lg border border-white/10 bg-black/45 px-4 text-white outline-none transition placeholder:text-[#68636f] focus:border-[#722df7]"
    />
  </label>

  {/* Service */}
  <label
    htmlFor="service"
    className="grid gap-2 text-sm text-[#d8d8d8]"
  >
    <span>Service Type</span>

    <select
      id="service"
      name="service"
      required
      defaultValue=""
      className="h-12 rounded-lg border border-white/10 bg-black/45 px-4 text-white outline-none transition focus:border-[#722df7]"
    >
      <option value="" disabled>
        Select a Service
      </option>

      <option value="Website Development">
        Website Development
      </option>

      <option value="UI/UX Design">
        UI/UX Design
      </option>

      <option value="E-commerce Website">
        E-commerce Website
      </option>

      <option value="SaaS Development">
        SaaS Development
      </option>

      <option value="SEO Optimization">
        SEO Optimization
      </option>

      <option value="Digital Marketing">
        Digital Marketing
      </option>

      <option value="Graphic Design">
        Graphic Design
      </option>

      <option value="Custom Project">
        Custom Project
      </option>

      <option value="Others">
        Others
      </option>

    </select>
  </label>

</div>

          

<div className="grid gap-4 sm:grid-cols-2">

  <label className="grid gap-2 text-sm text-[#d8d8d8]">
    <span>Currency</span>

<select
  name="currency"
  defaultValue="USD"
  required
  className="
    h-12
    w-full
    rounded-lg
    border
    border-white/10
    bg-black/45
    px-4
    text-white
    outline-none
    transition
    focus:border-[#722df7]
  "
>
  {[...currencies]
  .sort((a, b) => a.country.localeCompare(b.country))
  .map((currency) => (
    <option
    required
      key={currency.country}
      value={currency.code}
    >
      {currency.flag} {currency.country} ({currency.code})
    </option>
))}

</select>
  </label>

  <label className="grid gap-2 text-sm text-[#d8d8d8]">
    <span>Budget</span>

    <input
      type="text"
      name="budget"
      required
      placeholder="5000"
      className="min-h-12 rounded-lg border border-white/10 bg-black/45 px-4 text-white outline-none focus:border-[#722df7]"
    />
  </label>

</div>

<label
  htmlFor="message"
  className="grid gap-2 text-sm text-[#d8d8d8]"
></label>



                      <label
            htmlFor="message"
            className="grid gap-2 text-sm text-[#d8d8d8]"
          >
            <span>Message</span>

            <textarea
              id="message"
              name="message"
              rows={5}
              placeholder="Tell us about your project..."
              required
              className="min-h-32 resize-y rounded-lg border border-white/10 bg-black/45 px-4 py-3 text-white outline-none transition placeholder:text-[#68636f] focus:border-[#722df7]"
            />
          </label>

          <button
            type="submit"
            disabled={loading}
            className="mt-2 inline-flex min-h-12 items-center justify-center rounded-lg bg-[#6418fd] px-7 text-sm font-medium text-white shadow-[0_18px_55px_rgba(100,24,253,.28)] transition hover:-translate-y-0.5 hover:bg-[#7b36ff] disabled:cursor-not-allowed disabled:opacity-60"
          >
            {loading ? (
              <div className="flex items-center gap-3">
                <svg
                  className="h-5 w-5 animate-spin"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <circle
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="white"
                    strokeOpacity=".25"
                    strokeWidth="4"
                  />
                  <path
                    d="M22 12A10 10 0 0012 2"
                    stroke="white"
                    strokeWidth="4"
                    strokeLinecap="round"
                  />
                </svg>

                Sending...
              </div>
            ) : (
              "Send Message"
            )}
          </button>

        </form>

      </div>
    </div>

    {/* Success / Error Modal */}

    {status.open && (

      <div className="fixed inset-0 z-[999] flex items-center justify-center bg-black/80 backdrop-blur-md">

        <div className="relative w-full max-w-md overflow-hidden rounded-3xl border border-white/10 bg-[#0B0814] p-10 text-center shadow-[0_0_120px_rgba(114,45,247,.35)]">

          <div className="absolute -top-32 left-1/2 h-64 w-64 -translate-x-1/2 rounded-full bg-[#722df7]/20 blur-[120px]" />

          {status.type === "success" ? (
            <>
              <div className="relative mx-auto flex h-24 w-24 items-center justify-center rounded-full border border-[#722df7]/40 bg-[#722df7]/20">

                <span className="text-5xl font-bold text-[#722df7]">
                  ✓
                </span>

              </div>

              <h2 className="relative mt-8 text-3xl font-bold text-white">
                Thank You!
              </h2>

              <p className="relative mt-5 leading-8 text-[#c3c3c3]">
                Thanks for contacting
                <span className="font-semibold text-[#722df7]">
                  {" "}Krafti Code
                </span>

                <br />

                We've received your message.

                <br />

                Our team will contact you soon.
              </p>
            </>
          ) : (
            <>
              <div className="relative mx-auto flex h-24 w-24 items-center justify-center rounded-full border border-red-500/30 bg-red-500/15">

                <span className="text-5xl font-bold text-red-400">
                  ✕
                </span>

              </div>

              <h2 className="relative mt-8 text-3xl font-bold text-white">
                Something Went Wrong
              </h2>

              <p className="relative mt-5 leading-8 text-[#c3c3c3]">
                We couldn't send your message.

                <br />

                Please try again later.
              </p>
            </>
          )}

          <button
            onClick={() => {
              closeStatusModal();
            }}
            className="relative mt-10 rounded-xl bg-[#722df7] px-8 py-3 font-semibold text-white transition hover:bg-[#8c58ff]"
          >
            Close
          </button>

        </div>

      </div>

    )}

        </>
  );
}