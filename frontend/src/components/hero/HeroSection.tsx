"use client";

import Link from "next/link";

import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <section
      className="
    relative

    min-h-screen

    flex
    items-center
    justify-center

    overflow-hidden

    px-6
    md:px-10
  "
    >
      {/* ========================= */}
      {/* GLOW EFFECTS */}
      {/* ========================= */}

      <div
        className="
      absolute

      top-[-120px]
      right-[-120px]

      w-[420px]
      h-[420px]

      rounded-full

      bg-cyan-400/20

      blur-[140px]
    "
      />

      <div
        className="
      absolute

      bottom-[-160px]
      left-[-120px]

      w-[380px]
      h-[380px]

      rounded-full

      bg-sky-400/10

      blur-[140px]
    "
      />

      {/* ========================= */}
      {/* MAIN CONTENT */}
      {/* ========================= */}

      <div
        className="
      relative

      z-10

      max-w-7xl

      mx-auto

      grid
      grid-cols-1
      lg:grid-cols-2

      gap-16

      items-center
    "
      >
        {/* ========================= */}
        {/* LEFT CONTENT */}
        {/* ========================= */}

        <motion.div
          initial={{
            opacity: 0,
            y: 40,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.8,
          }}
        >
          {/* BADGE */}

          <div
            className="
          inline-flex

          items-center

          gap-2

          glass-card

          rounded-full

          px-5
          py-2

          mb-8
        "
          >
            <div
              className="
            w-2
            h-2

            rounded-full

            bg-cyan-400

            animate-pulse
          "
            />

            <p
              className="
            text-sm

            text-slate-300

            tracking-wide
          "
            >
              AI-Powered Career Preparation
            </p>
          </div>

          {/* HEADING */}

          <h1
            className="
          text-5xl
          md:text-7xl
          lg:text-8xl

          font-semibold

          leading-[0.95]

          tracking-tight

          text-white
        "
          >
            Practice
            <br />
            Interviews.
            <br />
            Follow
            <br />
            Smarter
            <br />
            Roadmaps.
          </h1>

          {/* SUBHEADING */}

          <p
            className="
          mt-8

          max-w-2xl

          text-slate-400

          leading-8

          text-base
          md:text-lg
        "
          >
            Prepare for real-world tech interviews with adaptive AI recruiter
            simulations, personalized career roadmaps, mentor-style answers, and
            curated modern learning resources — all inside one intelligent
            platform.
          </p>

          {/* BUTTONS */}

          <div
            className="
          mt-10

          flex
          flex-wrap

          gap-5
        "
          >
            <Link href="/interview">
              <button
                className="
              bg-cyan-400

              hover:bg-cyan-300

              transition-all
              duration-300

              text-slate-900

              font-semibold

              px-8
              py-4

              rounded-full

              cyan-glow
            "
              >
                Start AI Interview
              </button>
            </Link>

            <Link href="/roadmap">
              <button
                className="
              glass-card

              px-8
              py-4

              rounded-full

              text-white

              hover:border-cyan-400/40

              transition-all
              duration-300
            "
              >
                Explore Roadmaps
              </button>
            </Link>
          </div>
        </motion.div>

        {/* ========================= */}
        {/* RIGHT SIDE CARDS */}
        {/* ========================= */}

        <motion.div
          initial={{
            opacity: 0,
            scale: 0.95,
          }}
          animate={{
            opacity: 1,
            scale: 1,
          }}
          transition={{
            duration: 1,
          }}
          className="
relative

hidden
lg:flex

items-center
justify-center

"
        >
          <div
            className="
      grid
      grid-cols-2

  gap-6
"
          >
            {[
              "AI Interview Simulation",
              "Personalized Roadmaps",
              "Recruiter Evaluations",
              "Curated Learning Resource",
            ].map((item, index) => (
              <motion.div
                key={item}
                initial={{
                  opacity: 0,
                  y: 20,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.15,
                }}
                whileHover={{
                  y: -6,
                }}
                className="
        relative

        overflow-hidden

        glass-card

        rounded-3xl

        p-6

        border
        border-white/10

        hover:border-cyan-400/40

        transition-all
        duration-500

        w-[220px]
        h-[180px]

        flex
        flex-col
        justify-between
      "
              >
                {/* GLOW ORB */}

                <div
                  className="
          absolute

          top-[-40px]
          right-[-40px]

          w-[120px]
          h-[120px]

          rounded-full

          bg-cyan-400/10

          blur-[60px]
        "
                />

                {/* AI STATUS */}

                <div
                  className="
          flex
          items-center

          gap-3
        "
                >
                  <div
                    className="
            relative

            flex
            items-center
            justify-center
          "
                  >
                    <div
                      className="
              absolute

              w-5
              h-5

              rounded-full

              bg-cyan-400/30

              animate-ping
            "
                    />

                    <div
                      className="
              relative

              w-3
              h-3

              rounded-full

              bg-cyan-400
            "
                    />
                  </div>

                  <p
                    className="
            text-cyan-300

            text-xs

            tracking-[0.2em]

            uppercase
          "
                  >
                    Active
                  </p>
                </div>

                {/* CARD TITLE */}

                <h3
                  className="
          relative

          text-white

          text-xl

          font-medium

          leading-snug
        "
                >
                  {item}
                </h3>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
