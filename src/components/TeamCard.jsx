import { FaGithub, FaLinkedinIn } from "react-icons/fa";

export default function TeamCard({ member }) {
  return (
    <article
      className="
        group
        overflow-hidden
        rounded-[26px]
        border
        border-white/10
        bg-[#0b0b0b]
        transition-all
        duration-300
        hover:-translate-y-2
        hover:border-[#722df7]/40
        hover:shadow-[0_20px_60px_rgba(114,45,247,.15)]
      "
    >
      {/* Image */}
      <div className="relative overflow-hidden">

        <img
          src={member.image}
          alt={member.name}
          loading="lazy"
          className="
            h-[280px]
            w-full
            object-cover
            transition-transform
            duration-500
            group-hover:scale-110
          "
        />

        {/* Overlay */}
        <div
          className="
            absolute
            inset-0
            bg-gradient-to-t
            from-black
            via-black/20
            to-transparent
            opacity-0
            transition
            duration-300
            group-hover:opacity-100
          "
        />

      </div>

      {/* Content */}

      <div className="p-6">

        {/* Department */}

        <span
          className="
            inline-flex
            rounded-full
            bg-[#722df7]/10
            px-4
            py-2
            text-xs
            font-medium
            uppercase
            tracking-[0.18em]
            text-[#b38ff9]
          "
        >
          {member.department}
        </span>

        {/* Name */}

        <h3 className="mt-5 text-[24px] font-bold text-white">
          {member.name}
        </h3>

        {/* Role */}

        <p className="mt-3 text-[15px] leading-7 text-[#9d9d9d]">
          {member.role}
        </p>

        {/* Social */}

        <div className="mt-8 flex gap-3">

        </div>

      </div>
    </article>
  );
}