"use client";

import { motion } from "framer-motion";

const features = [
  {
    title: "AI Interview Practice",

    description:
      "Practice adaptive recruiter-style interviews with real-world technical questions, follow-ups, evaluations, and mentor guidance.",
  },

  {
    title: "Personalized Career Roadmaps",

    description:
      "Generate structured AI learning paths tailored to your target role, skill level, and modern engineering stack.",
  },

  {
    title: "Weak Topic Detection",

    description:
      "HireGenix tracks recurring mistakes, weak concepts, and confidence gaps to improve your interview preparation intelligently.",
  },

  {
    title: "Curated Learning Resources",

    description:
      "Access modern free study materials, documentation, GitHub projects, YouTube playlists, and AI engineering resources in one place.",
  },
];

export default function AIExperienceSection() {
  return (
    <section
      className="
    relative

    py-32

    px-6
    md:px-10

    overflow-hidden
  "
    >
      {/* ========================= */}
      {/* BACKGROUND GLOW */}
      {/* ========================= */}

      <div
        className="
      absolute

      top-0
      left-1/2

      -translate-x-1/2

      w-[500px]
      h-[500px]

      rounded-full

      bg-cyan-400/10

      blur-[160px]
    "
      />

      <div
        className="
      relative

      z-10

      max-w-7xl

      mx-auto
    "
      >
        {/* ========================= */}
        {/* HEADING */}
        {/* ========================= */}

        <motion.div
          initial={{
            opacity: 0,
            y: 30,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.7,
          }}
          viewport={{
            once: true,
          }}
          className="
        text-center

        mb-20
      "
        >
          <p
            className="
          text-cyan-300

          uppercase

          tracking-[0.35em]

          text-sm

          mb-6
        "
          >
            Career Intelligence Ecosystem
          </p>

          <h2
            className="
          text-4xl
          md:text-6xl

          font-semibold

          text-white

          tracking-tight

          leading-tight
        "
          >
            Learn Smarter.
            <br />
            Practice Better.
            <br />
            Grow Faster.
          </h2>

          <p
            className="
          mt-8

          max-w-3xl

          mx-auto

          text-slate-400

          leading-8

          text-base
          md:text-lg
        "
          >
            HireGenix AI combines interview preparation, structured learning
            roadmaps, recruiter-style evaluations, and curated modern study
            resources into one intelligent platform for developers.
          </p>
        </motion.div>

        {/* ========================= */}
        {/* FEATURE CARDS */}
        {/* ========================= */}

        <div
          className="
        grid
        grid-cols-1
        md:grid-cols-2

        gap-8
      "
        >
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{
                opacity: 0,
                y: 40,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.6,
                delay: index * 0.1,
              }}
              viewport={{
                once: true,
              }}
              className="
                glass-card

                rounded-[32px]

                p-8
                md:p-10

                border
                border-white/10

                hover:border-cyan-400/30

                transition-all
                duration-500

                hover:-translate-y-1
              "
            >
              {/* AI DOT */}

              <div
                className="
                  w-3
                  h-3

                  rounded-full

                  bg-cyan-400

                  mb-8

                  animate-pulse
                "
              />

              <h3
                className="
                  text-2xl

                  font-semibold

                  text-white

                  mb-5
                "
              >
                {feature.title}
              </h3>

              <p
                className="
                  text-slate-400

                  leading-8

                  text-base
                "
              >
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* ========================= */}
        {/* WORKFLOW TIMELINE */}
        {/* ========================= */}

        <motion.div
          initial={{
            opacity: 0,
            y: 50,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.8,
          }}
          viewport={{
            once: true,
          }}
          className="
        mt-28

        glass-card

        rounded-[40px]

        p-8
        md:p-14
      "
        >
          <div
            className="
          flex
          flex-col
          lg:flex-row

          gap-10

          justify-between
        "
          >
            {[
              {
                title: "Choose Role",

                description:
                  "Select your target career path such as AI Engineer, Full Stack Developer, Frontend Engineer, or Backend Developer.",
              },

              {
                title: "Generate Roadmap",

                description:
                  "Receive a personalized learning roadmap designed around your current level, goals, and modern industry requirements.",
              },

              {
                title: "Choose Tech Stack",

                description:
                  "Focus your preparation on technologies like React, Next.js, FastAPI, LangChain, System Design, and GenAI workflows.",
              },

              {
                title: "Practice Interviews",

                description:
                  "Train with adaptive AI recruiter simulations, mentor-style feedback, and recruiter-grade technical evaluations.",
              },
            ].map((step) => (
              <div
                key={step.title}
                className="
  flex-1
"
              >
                <div
                  className="
    w-12
    h-12

    rounded-full

    bg-cyan-400/20

    border
    border-cyan-400/40

    flex
    items-center
    justify-center

    text-cyan-300

    mb-6
  "
                >
                  •
                </div>

                <h4
                  className="
    text-white

    text-xl

    font-medium

    mb-4
  "
                >
                  {step.title}
                </h4>

                <p
                  className="
    text-slate-400

    leading-7

    text-sm
  "
                >
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
