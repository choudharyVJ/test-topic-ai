'use client';

import {

  motion,

} from 'framer-motion';


const features = [

  {
    title:
      'AI Interview Simulation',

    description:
      'Practice realistic technical interviews with adaptive recruiter intelligence.',
  },

  {
    title:
      'Career Memory Engine',

    description:
      'Track progress, weak areas, and evolving skill growth over time.',
  },

  {
    title:
      'Recruiter Intelligence',

    description:
      'Receive recruiter-style evaluations powered by modern hiring standards.',
  },

  {
    title:
      'Personalized Roadmaps',

    description:
      'Generate AI-driven learning paths tailored to your target engineering role.',
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

      {/* Background Glow */}

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

        {/* Heading */}

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

            AI Intelligence Layer

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

            Career Guidance
            <br />

            Powered By
            <br />

            Intelligent Systems

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

            HireGenix AI combines
            recruiter reasoning,
            adaptive memory,
            AI coaching,
            and intelligent interview systems
            to help engineers grow with clarity.

          </p>

        </motion.div>

        {/* Feature Cards */}

        <div
          className="
            grid
            grid-cols-1
            md:grid-cols-2

            gap-8
          "
        >

          {
            features.map(

              (
                feature,
                index
              ) => (

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
                    delay:
                      index * 0.1,
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

                  {/* AI Dot */}

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
              )
            )
          }

        </div>

        {/* Workflow Timeline */}

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

            {
              [
                'Role Analysis',
                'Interview Simulation',
                'Skill Evaluation',
                'AI Coaching',
                'Growth Tracking',
              ].map((step) => (

                <div
                  key={step}

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

                    {step}

                  </h4>

                  <p
                    className="
                      text-slate-400

                      leading-7

                      text-sm
                    "
                  >

                    Intelligent AI systems continuously
                    evaluate and improve your
                    interview readiness journey.

                  </p>

                </div>
              ))
            }

          </div>

        </motion.div>

      </div>

    </section>
  );
}