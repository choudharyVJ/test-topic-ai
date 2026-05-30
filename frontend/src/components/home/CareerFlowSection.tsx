'use client';

import {

  motion,

} from 'framer-motion';


const aiProcesses = [

  'Analyzing target engineering role...',

  'Evaluating interview readiness...',

  'Generating recruiter perspective...',

  'Detecting technical weak areas...',

  'Building personalized roadmap...',

];


const insights = [

  {
    title:
      'Frontend Engineering',

    score:
      '92% Match',
  },

  {
    title:
      'System Design',

    score:
      'Needs Improvement',
  },

  {
    title:
      'AI Engineering Readiness',

    score:
      'Strong Potential',
  },

  {
    title:
      'Cloud & DevOps',

    score:
      'Moderate',
  },

];


export default function CareerFlowSection() {

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

          top-1/2
          left-1/2

          -translate-x-1/2
          -translate-y-1/2

          w-[600px]
          h-[600px]

          rounded-full

          bg-cyan-400/10

          blur-[180px]
        "
      />

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

        {/* LEFT SIDE */}

        <motion.div

          initial={{
            opacity: 0,
            y: 40,
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
            glass-card

            rounded-[40px]

            p-8
            md:p-10
          "
        >

          {/* Header */}

          <div
            className="
              flex
              items-center

              justify-between

              mb-10
            "
          >

            <div>

              <p
                className="
                  text-cyan-300

                  text-sm

                  tracking-[0.3em]

                  uppercase

                  mb-3
                "
              >

                AI Processing

              </p>

              <h3
                className="
                  text-3xl

                  font-semibold

                  text-white
                "
              >

                Career Intelligence Engine

              </h3>

            </div>

            <div
              className="
                w-4
                h-4

                rounded-full

                bg-cyan-400

                animate-pulse
              "
            />

          </div>

          {/* AI Flow */}

          <div
            className="
              flex
              flex-col

              gap-6
            "
          >

            {
              aiProcesses.map(

                (
                  item,
                  index
                ) => (

                  <motion.div

                    key={item}

                    initial={{
                      opacity: 0,
                      x: -20,
                    }}

                    whileInView={{
                      opacity: 1,
                      x: 0,
                    }}

                    transition={{
                      duration: 0.5,
                      delay:
                        index * 0.1,
                    }}

                    viewport={{
                      once: true,
                    }}

                    className="
                      flex
                      items-center

                      gap-5

                      rounded-2xl

                      bg-white/5

                      border
                      border-white/10

                      px-5
                      py-5
                    "
                  >

                    <div
                      className="
                        w-3
                        h-3

                        rounded-full

                        bg-cyan-400

                        animate-pulse
                      "
                    />

                    <p
                      className="
                        text-slate-300

                        text-sm
                        md:text-base
                      "
                    >

                      {item}

                    </p>

                  </motion.div>
                )
              )
            }

          </div>

        </motion.div>

        {/* RIGHT SIDE */}

        <motion.div

          initial={{
            opacity: 0,
            y: 40,
          }}

          whileInView={{
            opacity: 1,
            y: 0,
          }}

          transition={{
            duration: 0.8,
            delay: 0.2,
          }}

          viewport={{
            once: true,
          }}

          className="
            grid
            grid-cols-1
            sm:grid-cols-2

            gap-6
          "
        >

          {
            insights.map((item) => (

              <div
                key={item.title}

                className="
                  glass-card

                  rounded-[32px]

                  p-8

                  border
                  border-white/10

                  hover:border-cyan-400/30

                  transition-all
                  duration-500

                  min-h-[220px]

                  flex
                  flex-col
                  justify-between
                "
              >

                <div
                  className="
                    w-14
                    h-14

                    rounded-2xl

                    bg-cyan-400/10

                    border
                    border-cyan-400/20

                    flex
                    items-center
                    justify-center

                    text-cyan-300

                    text-xl
                  "
                >

                  ✦

                </div>

                <div>

                  <h4
                    className="
                      text-white

                      text-2xl

                      font-medium

                      mb-4
                    "
                  >

                    {item.title}

                  </h4>

                  <p
                    className="
                      text-cyan-300

                      text-lg

                      font-medium
                    "
                  >

                    {item.score}

                  </p>

                </div>

              </div>
            ))
          }

        </motion.div>

      </div>

    </section>
  );
}