import { FiCheck, FiX } from "react-icons/fi";

export default function ThankYouModal({
  isOpen,
  onClose,
}) {
  if (!isOpen) return null;

  return (
    <div
      className="
        fixed
        inset-0
        z-[10000]
        flex
        items-center
        justify-center
        bg-black/80
        px-4
        backdrop-blur-md
      "
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) {
          onClose();
        }
      }}
    >
      <div
        className="
          relative
          w-full
          max-w-[430px]
          rounded-[22px]
          border
          border-white/10
          bg-[#0b0b0b]
          p-8
          text-center
          shadow-[0_30px_100px_rgba(0,0,0,.7)]
        "
      >
        <button
          type="button"
          onClick={onClose}
          className="
            absolute
            right-4
            top-4
            flex
            h-8
            w-8
            items-center
            justify-center
            rounded-full
            border
            border-white/10
            text-[#777]
            transition
            hover:text-white
          "
        >
          <FiX size={16} />
        </button>

        <div
          className="
            mx-auto
            flex
            h-20
            w-20
            items-center
            justify-center
            rounded-full
            bg-[#722df7]/15
          "
        >
          <div
            className="
              flex
              h-12
              w-12
              items-center
              justify-center
              rounded-full
              bg-[#722df7]
              text-white
            "
          >
            <FiCheck size={25} />
          </div>
        </div>

        <h2
          className="
            mt-6
            text-2xl
            font-bold
            text-white
          "
        >
          Thank You!
        </h2>

        <p
          className="
            mx-auto
            mt-3
            max-w-[340px]
            text-[13px]
            leading-6
            text-[#999]
          "
        >
          Your project request has been received successfully.
          Our team will review your requirements and get back
          to you shortly.
        </p>

        <button
          type="button"
          onClick={onClose}
          className="
            mt-6
            w-full
            rounded-lg
            bg-[#722df7]
            px-5
            py-3
            text-[13px]
            font-semibold
            text-white
            transition
            hover:bg-[#823cff]
          "
        >
          Done
        </button>
      </div>
    </div>
  );
}