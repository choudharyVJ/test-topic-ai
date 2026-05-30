'use client';

import {

  motion,

} from 'framer-motion';


export default function RoadmapHero() {

  return (

    <section
      className="
        relative

        pt-40
        pb-20

        px-6
        md:px-10

        overflow-hidden
      "
    >

      {/* Glow */}

      <div
        className="
          absolute

          top-0
          left-1/2

          -translate-x-1/2

          w-[600px]
          h-[600px]

          rounded-full

          bg-cyan-400/10

          blur-[180px]
        "
      />

      <motion.div

        initial={{
          opacity: 0,
          y: 30,
        }}

        animate={{
          opacity: 1,
          y: 0,
        }}

        transition={{
          duration: 0.8,
        }}

        className="
          relative

          z-10

          max-w-5xl

          mx-auto

          text-center
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

          AI Career Roadmaps

        </p>

        <h1
          className="
            text-5xl
            md:text-7xl

            font-semibold

            text-white

            tracking-tight

            leading-[1]
          "
        >

          Personalized
          <br />

          AI Learning
          <br />

          Journeys

        </h1>

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

          Generate intelligent career roadmaps
          tailored to your target engineering role,
          technical strengths,
          and growth opportunities.

        </p>

      </motion.div>

    </section>
  );
}