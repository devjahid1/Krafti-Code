import { useEffect, useMemo, useState } from "react";
import emailjs from "@emailjs/browser";
import {
  FiArrowUpRight,
  FiCalendar,
  FiClock,
  FiMail,
  FiUser,
  FiX,
} from "react-icons/fi";

// =====================================================
// Available Time Slots
// US Eastern Time (ET)
// =====================================================

const TIME_SLOTS = [
  "10:00 AM",
  "11:00 AM",
  "12:00 PM",
  "1:00 PM",
  "2:00 PM",
  "3:00 PM",
  "4:00 PM",
  "5:00 PM",
];

// =====================================================
// Get Today
// =====================================================

const getToday = () => {
  const today = new Date();

  const year = today.getFullYear();
  const month = String(today.getMonth() + 1).padStart(2, "0");
  const day = String(today.getDate()).padStart(2, "0");

  return `${year}-${month}-${day}`;
};

// =====================================================
// Format Date
// =====================================================

const formatDate = (dateString, timeZone = "America/New_York") => {
  if (!dateString) return "";

  const date = new Date(`${dateString}T12:00:00`);

  return new Intl.DateTimeFormat("en-US", {
    timeZone,
    weekday: "long",
    month: "long",
    day: "numeric",
    year: "numeric",
  }).format(date);
};

// =====================================================
// Convert ET -> Bangladesh Time
// Handles EST / EDT automatically
// =====================================================

const convertETToBangladesh = (dateString, timeString) => {
  if (!dateString || !timeString) return "";

  const [timeValue, modifier] = timeString.split(" ");

  let [hours, minutes] = timeValue.split(":").map(Number);

  if (modifier === "PM" && hours !== 12) {
    hours += 12;
  }

  if (modifier === "AM" && hours === 12) {
    hours = 0;
  }

  /*
    Find the UTC time that corresponds to the selected
    local time in America/New_York.
  */

  const target = `${dateString}T${String(hours).padStart(
    2,
    "0"
  )}:${String(minutes).padStart(2, "0")}:00`;

  const approximateUTC = new Date(`${target}Z`);

  const getOffset = (date) => {
    const parts = new Intl.DateTimeFormat("en-US", {
      timeZone: "America/New_York",
      timeZoneName: "longOffset",
      hour: "2-digit",
    }).formatToParts(date);

    const offsetPart = parts.find(
      (part) => part.type === "timeZoneName"
    );

    if (!offsetPart) return 0;

    const match = offsetPart.value.match(
      /GMT([+-])(\d{2}):?(\d{2})?/
    );

    if (!match) return 0;

    const sign = match[1] === "+" ? 1 : -1;
    const offsetHours = Number(match[2]);
    const offsetMinutes = Number(match[3] || 0);

    return sign * (offsetHours * 60 + offsetMinutes);
  };

  const offsetMinutes = getOffset(approximateUTC);

  const utcDate = new Date(
    approximateUTC.getTime() - offsetMinutes * 60 * 1000
  );

  return new Intl.DateTimeFormat("en-US", {
    timeZone: "Asia/Dhaka",
    weekday: "long",
    month: "long",
    day: "numeric",
    year: "numeric",
    hour: "numeric",
    minute: "2-digit",
    hour12: true,
  }).format(utcDate);
};

// =====================================================
// Schedule Modal
// =====================================================

export default function ScheduleModal({
  isOpen,
  onClose,
  onSuccess,
}) {
  // =====================================================
  // Form
  // =====================================================

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    date: "",
    time: "",
  });

  // =====================================================
  // UI
  // =====================================================

  const [isSending, setIsSending] = useState(false);
  const [error, setError] = useState("");

  // =====================================================
  // Reset
  // =====================================================

  useEffect(() => {
    if (!isOpen) {
      setFormData({
        name: "",
        email: "",
        date: "",
        time: "",
      });

      setError("");
      setIsSending(false);
    }
  }, [isOpen]);

  // =====================================================
  // Minimum Date
  // =====================================================

  const minDate = useMemo(() => getToday(), []);

  // =====================================================
  // Selected Date
  // =====================================================

  const selectedDate = useMemo(() => {
    return formatDate(formData.date);
  }, [formData.date]);

  // =====================================================
  // Bangladesh Time
  // =====================================================

  const bangladeshTime = useMemo(() => {
    return convertETToBangladesh(
      formData.date,
      formData.time
    );
  }, [formData.date, formData.time]);

  // =====================================================
  // Change
  // =====================================================

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    setError("");
  };

  // =====================================================
  // Submit
  // =====================================================

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.name.trim()) {
      setError("Please enter your name.");
      return;
    }

    if (!formData.email.trim()) {
      setError("Please enter your email.");
      return;
    }

    if (!formData.date) {
      setError("Please select a date.");
      return;
    }

    if (!formData.time) {
      setError("Please select a time.");
      return;
    }

    setIsSending(true);
    setError("");

    try {
      // =================================================
      // EmailJS Template Data
      // =================================================

      const templateParams = {
        name: formData.name,
        email: formData.email,

        // Selected date
        date: selectedDate,

        // Selected US time
        time: formData.time,

        // Timezone
        timezone: "US Eastern Time (ET)",

        // Bangladesh converted time
        bangladesh_time: bangladeshTime,

        // Existing template compatibility
        package: "Discovery Call",
        phone: "N/A",
        company: "N/A",
        project_type: "Discovery Call",
        budget: "N/A",
        deadline: "N/A",

        // Message
        message: `Discovery Call Scheduled

Selected US Eastern Time:
${selectedDate} at ${formData.time} ET

Bangladesh Time:
${bangladeshTime}`,
      };

      // =================================================
      // EmailJS
      // =================================================

      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_PRICING_TEMPLATE_ID,
        templateParams,
        {
          publicKey:
            import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
        }
      );

      // =================================================
      // Success
      // =================================================

      setFormData({
        name: "",
        email: "",
        date: "",
        time: "",
      });

      setIsSending(false);

      if (onSuccess) {
        onSuccess();
      } else {
        onClose();
      }
    } catch (err) {
      console.error("EmailJS Error:", err);

      setIsSending(false);

      setError(
        "Something went wrong. Please try again."
      );
    }
  };

  // =====================================================
  // Don't Render
  // =====================================================

  if (!isOpen) return null;

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
          max-w-md
          overflow-hidden
          rounded-2xl
          border
          border-white/10
          bg-[#0d0d0f]
          shadow-2xl
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
            h-8
            w-8
            items-center
            justify-center
            rounded-full
            border
            border-white/10
            bg-white/5
            text-white/60
            transition
            hover:bg-white/10
            hover:text-white
          "
        >
          <FiX size={16} />
        </button>

        {/* =================================================
            Header
        ================================================= */}

        <div className="px-5 pb-3 pt-5">
          <div
            className="
              mb-3
              flex
              h-9
              w-9
              items-center
              justify-center
              rounded-xl
              bg-[#722df7]/10
              text-[#a879ff]
            "
          >
            <FiCalendar size={18} />
          </div>

          <h2 className="text-xl font-semibold text-white">
            Schedule a Discovery Call
          </h2>

          <p className="mt-1 text-xs leading-5 text-white/40">
            Choose a convenient date and time for your call.
          </p>
        </div>

        {/* =================================================
            Form
        ================================================= */}

        <form
          onSubmit={handleSubmit}
          className="px-5 pb-5"
        >
          {/* =================================================
              Name + Email
          ================================================= */}

          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
            {/* Name */}

            <div>
              <label
                htmlFor="schedule-name"
                className="mb-1.5 block text-xs font-medium text-white/60"
              >
                Your Name
              </label>

              <div className="relative">
                <FiUser
                  className="
                    pointer-events-none
                    absolute
                    left-3
                    top-1/2
                    -translate-y-1/2
                    text-white/25
                  "
                  size={15}
                />

                <input
                  id="schedule-name"
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="John Doe"
                  className="
                    h-10
                    w-full
                    rounded-lg
                    border
                    border-white/10
                    bg-white/[0.04]
                    pl-9
                    pr-3
                    text-xs
                    text-white
                    outline-none
                    placeholder:text-white/20
                    focus:border-[#722df7]
                  "
                />
              </div>
            </div>

            {/* Email */}

            <div>
              <label
                htmlFor="schedule-email"
                className="mb-1.5 block text-xs font-medium text-white/60"
              >
                Email
              </label>

              <div className="relative">
                <FiMail
                  className="
                    pointer-events-none
                    absolute
                    left-3
                    top-1/2
                    -translate-y-1/2
                    text-white/25
                  "
                  size={15}
                />

                <input
                  id="schedule-email"
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="john@example.com"
                  className="
                    h-10
                    w-full
                    rounded-lg
                    border
                    border-white/10
                    bg-white/[0.04]
                    pl-9
                    pr-3
                    text-xs
                    text-white
                    outline-none
                    placeholder:text-white/20
                    focus:border-[#722df7]
                  "
                />
              </div>
            </div>
          </div>

          {/* =================================================
              Date
          ================================================= */}

          <div className="mt-3">
            <label
              htmlFor="schedule-date"
              className="mb-1.5 block text-xs font-medium text-white/60"
            >
              Select Date
            </label>

            <div className="relative">
              <FiCalendar
                className="
                  pointer-events-none
                  absolute
                  left-3
                  top-1/2
                  z-10
                  -translate-y-1/2
                  text-white/25
                "
                size={15}
              />

              <input
                id="schedule-date"
                type="date"
                name="date"
                min={minDate}
                value={formData.date}
                onChange={handleChange}
                className="
                  h-10
                  w-full
                  cursor-pointer
                  rounded-lg
                  border
                  border-white/10
                  bg-white/[0.04]
                  pl-9
                  pr-3
                  text-xs
                  text-white
                  outline-none
                  [color-scheme:dark]
                  focus:border-[#722df7]
                "
              />
            </div>
          </div>

          {/* =================================================
              Time Slots
          ================================================= */}

          <div className="mt-3">
            <div className="mb-1.5 flex items-center justify-between">
              <label className="text-xs font-medium text-white/60">
                Select Time
              </label>

              <span className="text-[10px] text-[#a879ff]">
                US Eastern Time (ET)
              </span>
            </div>

            <div className="grid grid-cols-4 gap-1.5">
              {TIME_SLOTS.map((slot) => {
                const selected =
                  formData.time === slot;

                return (
                  <button
                    key={slot}
                    type="button"
                    onClick={() => {
                      setFormData((prev) => ({
                        ...prev,
                        time: slot,
                      }));

                      setError("");
                    }}
                    className={`
                      flex
                      h-9
                      items-center
                      justify-center
                      gap-1
                      rounded-lg
                      border
                      text-[11px]
                      font-medium
                      transition
                      ${
                        selected
                          ? "border-[#722df7] bg-[#722df7] text-white"
                          : "border-white/10 bg-white/[0.03] text-white/50 hover:border-[#722df7]/50 hover:text-white"
                      }
                    `}
                  >
                    <FiClock size={12} />
                    {slot}
                  </button>
                );
              })}
            </div>
          </div>

          {/* =================================================
              Selected Time Information
          ================================================= */}

          {formData.date && formData.time && (
            <div
              className="
                mt-3
                grid
                grid-cols-1
                gap-2
                rounded-xl
                border
                border-[#722df7]/20
                bg-[#722df7]/5
                p-3
                sm:grid-cols-2
              "
            >
              {/* US Time */}

              <div>
                <p className="text-[9px] font-medium uppercase tracking-wider text-white/30">
                  Selected US Time
                </p>

                <p className="mt-1 text-xs font-semibold text-white">
                  {selectedDate}
                </p>

                <p className="mt-0.5 text-xs font-semibold text-[#a879ff]">
                  {formData.time} ET
                </p>
              </div>

              {/* Bangladesh Time */}

              <div className="border-t border-white/5 pt-2 sm:border-l sm:border-t-0 sm:pl-3 sm:pt-0">
                <p className="text-[9px] font-medium uppercase tracking-wider text-white/30">
                  Bangladesh Time
                </p>

                <p className="mt-1 text-xs font-semibold text-white">
                  {bangladeshTime}
                </p>

                <p className="mt-0.5 text-[10px] text-white/30">
                  Asia/Dhaka
                </p>
              </div>
            </div>
          )}

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
                px-3
                py-2
                text-[11px]
                text-red-300
              "
            >
              {error}
            </div>
          )}

          {/* =================================================
              Submit
          ================================================= */}

          <button
            type="submit"
            disabled={isSending}
            className="
              group
              mt-3
              flex
              h-10
              w-full
              items-center
              justify-center
              gap-2
              rounded-lg
              bg-[#722df7]
              text-xs
              font-semibold
              text-white
              transition
              hover:bg-[#6423e8]
              disabled:cursor-not-allowed
              disabled:opacity-60
            "
          >
            {isSending ? (
              <>
                <span
                  className="
                    h-3.5
                    w-3.5
                    animate-spin
                    rounded-full
                    border-2
                    border-white/30
                    border-t-white
                  "
                />

                Sending...
              </>
            ) : (
              <>
                Schedule Call

                <FiArrowUpRight
                  size={15}
                  className="
                    transition-transform
                    group-hover:-translate-y-0.5
                    group-hover:translate-x-0.5
                  "
                />
              </>
            )}
          </button>

          {/* =================================================
              Note
          ================================================= */}

          <p className="mt-2 text-center text-[9px] text-white/25">
            All available slots are shown in US Eastern Time (ET).
          </p>
        </form>
      </div>
    </div>
  );
}