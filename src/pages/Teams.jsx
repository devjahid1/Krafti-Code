import { useMemo, useState } from "react";
import { Link } from "react-router-dom";

import Header from "../components/Header";
import Footer from "../components/Footer";
import TeamCard from "../components/TeamCard";

import { teamMembers } from "../data/team";

const filters = [
  "All",
  "Frontend",
  "Backend",
  "Full Stack",
  "WordPress",
  "Marketing",
  "UI/UX",
];

export default function Teams() {
  const [activeFilter, setActiveFilter] = useState("All");

  const filteredMembers = useMemo(() => {
    if (activeFilter === "All") return teamMembers;

    return teamMembers.filter(
      (member) => member.department === activeFilter
    );
  }, [activeFilter]);

  return (
    <>

      <main className="bg-[#050505] pt-36 pb-24">

        {/* Hero */}

        <section className="relative overflow-hidden">

          {/* Glow */}

          <div className="absolute left-1/2 top-0 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-[#722df7]/20 blur-[170px]" />

          <div className="site-container relative z-10">

            {/* Breadcrumb */}

            <div className="flex items-center gap-3 text-sm text-[#8f8f8f]">

              <Link
                to="/"
                className="hover:text-white transition"
              >
                Home
              </Link>

              <span>/</span>

              <span className="text-[#b38ff9]">
                Our Team
              </span>

            </div>

            {/* Title */}

            <h1 className="mt-10 max-w-5xl text-[44px] font-bold leading-tight text-white md:text-[68px]">

              Meet The Amazing Team Behind

              <span className="block text-[#722df7]">
                Krafti Code
              </span>

            </h1>

            {/* Description */}

            <p className="mt-8 max-w-3xl text-[18px] leading-8 text-[#9f9f9f]">

              We are designers, developers and digital
              strategists working together to build
              world-class digital experiences.

            </p>

            {/* Stats */}

            <div className="mt-16 grid gap-6 sm:grid-cols-2 xl:grid-cols-4">

              <div className="rounded-3xl border border-white/10 bg-[#0b0b0b] p-8">

                <h2 className="text-5xl font-bold text-[#722df7]">
                  10
                </h2>

                <p className="mt-4 text-[#bdbdbd]">
                  Team Members
                </p>

              </div>

              <div className="rounded-3xl border border-white/10 bg-[#0b0b0b] p-8">

                <h2 className="text-5xl font-bold text-[#722df7]">
                  50+
                </h2>

                <p className="mt-4 text-[#bdbdbd]">
                  Projects
                </p>

              </div>

              <div className="rounded-3xl border border-white/10 bg-[#0b0b0b] p-8">

                <h2 className="text-5xl font-bold text-[#722df7]">
                  6
                </h2>

                <p className="mt-4 text-[#bdbdbd]">
                  Departments
                </p>

              </div>

              <div className="rounded-3xl border border-white/10 bg-[#0b0b0b] p-8">

                <h2 className="text-5xl font-bold text-[#722df7]">
                  100%
                </h2>

                <p className="mt-4 text-[#bdbdbd]">
                  Passion
                </p>

              </div>

            </div>

            {/* Filter */}

            <div className="mt-20 flex flex-wrap gap-4">

              {filters.map((filter) => (

                <button
                  key={filter}
                  onClick={() => setActiveFilter(filter)}
                  className={`rounded-full px-6 py-3 transition-all duration-300

                  ${
                    activeFilter === filter
                      ? "bg-[#722df7] text-white"
                      : "border border-white/10 bg-[#0b0b0b] text-[#9d9d9d] hover:border-[#722df7]"
                  }`}
                >

                  {filter}

                </button>

              ))}

            </div>

                        {/* ================= Team Members ================= */}

            <section className="mt-20">

              <div className="flex items-center justify-between">

                <div>

                  <p className="text-sm uppercase tracking-[0.2em] text-[#b38ff9]">
                    Team Members
                  </p>

                  <h2 className="mt-3 text-4xl font-bold text-white">
                    Our Professionals
                  </h2>

                </div>

                <p className="text-[#8f8f8f]">
                  {filteredMembers.length} Members Found
                </p>

              </div>

              {/* Grid */}

              {filteredMembers.length > 0 ? (

                <div className="mt-12 grid gap-7 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">

                  {filteredMembers.map((member) => (

                    <TeamCard
                      key={member.id}
                      member={member}
                    />

                  ))}

                </div>

              ) : (

                <div className="mt-16 rounded-3xl border border-white/10 bg-[#0b0b0b] py-20 text-center">

                  <h3 className="text-3xl font-semibold text-white">
                    No Team Members Found
                  </h3>

                  <p className="mt-5 text-[#8f8f8f]">
                    There are currently no members in this department.
                  </p>

                </div>

              )}

            </section>

            {/* ================= Company Culture ================= */}

            <section className="mt-28">

              <div className="rounded-[32px] border border-white/10 bg-[#0b0b0b] p-10 lg:p-14">

                <p className="text-sm uppercase tracking-[0.2em] text-[#b38ff9]">
                  Why Krafti Code
                </p>

                <h2 className="mt-5 text-5xl font-bold text-white">

                  We Believe Great Teams
                  <span className="block text-[#722df7]">
                    Build Great Products
                  </span>

                </h2>

                <div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-4">

                  <div className="rounded-2xl border border-white/10 bg-[#111111] p-8">

                    <div className="text-5xl">🚀</div>

                    <h3 className="mt-6 text-2xl font-semibold text-white">
                      Innovation
                    </h3>

                    <p className="mt-4 leading-7 text-[#9d9d9d]">
                      We embrace modern technologies and creative thinking.
                    </p>

                  </div>

                  <div className="rounded-2xl border border-white/10 bg-[#111111] p-8">

                    <div className="text-5xl">🤝</div>

                    <h3 className="mt-6 text-2xl font-semibold text-white">
                      Collaboration
                    </h3>

                    <p className="mt-4 leading-7 text-[#9d9d9d]">
                      Every successful project starts with teamwork.
                    </p>

                  </div>

                  <div className="rounded-2xl border border-white/10 bg-[#111111] p-8">

                    <div className="text-5xl">📚</div>

                    <h3 className="mt-6 text-2xl font-semibold text-white">
                      Learning
                    </h3>

                    <p className="mt-4 leading-7 text-[#9d9d9d]">
                      We continuously improve our knowledge and skills.
                    </p>

                  </div>

                  <div className="rounded-2xl border border-white/10 bg-[#111111] p-8">

                    <div className="text-5xl">💜</div>

                    <h3 className="mt-6 text-2xl font-semibold text-white">
                      Excellence
                    </h3>

                    <p className="mt-4 leading-7 text-[#9d9d9d]">
                      We deliver every project with quality and passion.
                    </p>

                  </div>

                </div>

              </div>

            </section>

          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}