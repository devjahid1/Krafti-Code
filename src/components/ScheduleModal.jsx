import { useEffect } from "react";
import { getCalApi } from "@calcom/embed-react";
import {
  FiArrowUpRight,
  FiCalendar,
  FiClock,
  FiX,
} from "react-icons/fi";

const CAL_LINK = "krafti-code-hr2uio/30min";

export default function ScheduleModal({ isOpen, onClose }) {
  // =====================================================
  // Initialize Cal.com
  // =====================================================

  useEffect(() => {
    let mounted = true;

    const initializeCal = async () => {
      try {
        const cal = await getCalApi();

        if (!mounted) return;

        cal("ui", {
          theme: "dark",

          styles: {
            branding: {
              brandColor: "#722df7",
            },
          },

          hideEventTypeDetails: false,
          layout: "month_view",
        });
      } catch (error) {
        console.error("Cal.com initialization failed:", error);
      }
    };

    initializeCal();

    return () => {
      mounted = false;
    };
  }, []);

  // =====================================================
  // Prevent Background Scroll
  // =====================================================

  useEffect(() => {
    if (!isOpen) return;

    const originalOverflow = document.body.style.overflow;

    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = originalOverflow;
    };
  }, [isOpen]);

  // =====================================================
  // Close
  // =====================================================

  if (!isOpen) return null;

  // =====================================================
  // Open Cal.com
  // =====================================================

  const handleSchedule = async () => {
    try {
      const cal = await getCalApi();

      cal("modal", {
        calLink: CAL_LINK,

        config: {
          layout: "month_view",
        },
      });
    } catch (error) {
      console.error("Unable to open Cal.com:", error);

      // Fallback
      window.open(
        "https://cal.com/krafti-code-hr2uio/30min",
        "_blank",
        "noopener,noreferrer"
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
        backdrop-blur-md
      "
      onMouseDown={(e) => {
        if (e.target === e.currentTarget) {
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
          max-w-[520px]
          overflow-hidden
          rounded-2xl
          border
          border-white/10
          bg-[#08050d]
          shadow-[0_0_80px_rgba(114,45,247,0.20)]
        "
      >
        {/* =================================================
            Close Button
        ================================================= */}

        <button
          type="button"
          onClick={onClose}
          aria-label="Close"
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
            text-white/60
            transition
            hover:border-[#722df7]/40
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
            border-white/10
            px-6
            pb-5
            pt-6
          "
        >
          {/* Small Label */}

          <div
            className="
              mb-3
              flex
              items-center
              gap-2
              text-[11px]
              font-semibold
              uppercase
              tracking-[0.22em]
              text-[#b68cff]
            "
          >
            <span
              className="
                h-1.5
                w-1.5
                rounded-full
                bg-[#722df7]
                shadow-[0_0_10px_#722df7]
              "
            />

            Schedule a Call
          </div>

          {/* Title */}

          <h2
            className="
              pr-10
              text-2xl
              font-semibold
              tracking-tight
              text-white
              sm:text-[28px]
            "
          >
            Let's talk about your project
          </h2>

          {/* Description */}

          <p
            className="
              mt-2
              max-w-[430px]
              text-sm
              leading-6
              text-white/50
            "
          >
            Choose a date and time that works best for you.
            We'll connect for a 30-minute discovery call.
          </p>
        </div>

        {/* =================================================
            Meeting Info
        ================================================= */}

        <div className="px-6 pt-5">
          <div
            className="
              grid
              grid-cols-2
              gap-3
            "
          >
            {/* Duration */}

            <div
              className="
                flex
                items-center
                gap-3
                rounded-xl
                border
                border-white/10
                bg-white/[0.025]
                px-4
                py-3
              "
            >
              <div
                className="
                  flex
                  h-9
                  w-9
                  shrink-0
                  items-center
                  justify-center
                  rounded-lg
                  bg-[#722df7]/10
                  text-[#b68cff]
                "
              >
                <FiClock size={17} />
              </div>

              <div>
                <p className="text-[10px] uppercase tracking-wider text-white/35">
                  Duration
                </p>

                <p className="mt-0.5 text-sm font-medium text-white">
                  30 minutes
                </p>
              </div>
            </div>

            {/* Timezone */}

            <div
              className="
                flex
                items-center
                gap-3
                rounded-xl
                border
                border-white/10
                bg-white/[0.025]
                px-4
                py-3
              "
            >
              <div
                className="
                  flex
                  h-9
                  w-9
                  shrink-0
                  items-center
                  justify-center
                  rounded-lg
                  bg-[#722df7]/10
                  text-[#b68cff]
                "
              >
                <FiCalendar size={17} />
              </div>

              <div>
                <p className="text-[10px] uppercase tracking-wider text-white/35">
                  Timezone
                </p>

                <p className="mt-0.5 text-sm font-medium text-white">
                  US Eastern Time
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* =================================================
            Schedule Button
        ================================================= */}

        <div className="px-6 pb-6 pt-5">
          <button
            type="button"
            onClick={handleSchedule}
            className="
              group
              flex
              w-full
              items-center
              justify-center
              gap-2
              rounded-xl
              bg-[#722df7]
              px-5
              py-3.5
              text-sm
              font-semibold
              text-white
              shadow-[0_0_30px_rgba(114,45,247,0.25)]
              transition-all
              duration-300
              hover:bg-[#813df8]
              hover:shadow-[0_0_40px_rgba(114,45,247,0.4)]
              active:scale-[0.99]
            "
          >
            Select Date & Time

            <FiArrowUpRight
              size={17}
              className="
                transition-transform
                duration-300
                group-hover:-translate-y-0.5
                group-hover:translate-x-0.5
              "
            />
          </button>

          {/* Info */}

          <p
            className="
              mt-3
              text-center
              text-[11px]
              leading-5
              text-white/30
            "
          >
            You'll choose your preferred date and available
            time slot in the booking calendar.
          </p>
        </div>
      </div>
    </div>
  );
}