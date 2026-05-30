'use client';

import {

  motion,

} from 'framer-motion';


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

      {/* Cyan Glow Orb */}

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

      {/* Secondary Glow */}

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

      {/* Main Content */}

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

        {/* LEFT CONTENT */}

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

          {/* AI Badge */}

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

              AI-Powered Career Intelligence

            </p>

          </div>

          {/* Heading */}

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

            AI Career
            <br />

            Intelligence
            <br />

            For Modern
            <br />

            Engineers

          </h1>

          {/* Subheading */}

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

            Interview preparation,
            personalized AI coaching,
            recruiter-grade evaluations,
            intelligent memory systems,
            and career growth roadmaps —
            all inside one premium AI platform.

          </p>

          {/* Buttons */}

          <div
            className="
              mt-10

              flex
              flex-wrap

              gap-5
            "
          >

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

              Start Career Evaluation

            </button>

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

              Explore AI Coaching

            </button>

          </div>

        </motion.div>

        {/* RIGHT SIDE CARDS */}

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

            {
              [
                'AI Interview Simulation',
                'Skill Gap Detection',
                'Career Memory Engine',
                'Recruiter Intelligence',
              ].map((item) => (

                <div
                  key={item}
                  className="
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
                    items-end
                  "
                >

                  <h3
                    className="
                      text-white

                      text-xl

                      font-medium

                      leading-snug
                    "
                  >

                    {item}

                  </h3>

                </div>
              ))
            }

          </div>

        </motion.div>

      </div>

    </section>
  );
}