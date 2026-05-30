'use client';

import {

  useState,

} from 'react';

import {

  motion,

  AnimatePresence,

} from 'framer-motion';


const aiStates = [

  'Analyzing engineering market alignment...',

  'Evaluating recruiter expectations...',

  'Detecting technical growth opportunities...',

  'Generating personalized AI roadmap...',

];


const resultCards = [

  {
    title:
      'Role Match',

    value:
      'AI Engineer',
  },

  {
    title:
      'Interview Readiness',

    value:
      '82%',
  },

  {
    title:
      'Strongest Area',

    value:
      'Frontend + AI',
  },

  {
    title:
      'Growth Focus',

    value:
      'System Design',
  },

];


export default function InteractiveDemoSection() {

  const [

    role,

    setRole,

  ] = useState('');

  const [

    isRunning,

    setIsRunning,

  ] = useState(false);

  const [

    showResults,

    setShowResults,

  ] = useState(false);


  const runDemo = () => {

    if (!role.trim()) return;

    setIsRunning(true);

    setShowResults(false);

    setTimeout(() => {

      setIsRunning(false);

      setShowResults(true);

    }, 3500);
  };


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

          w-[650px]
          h-[650px]

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

            Interactive AI Experience

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

            Experience
            <br />

            AI Career
            <br />

            Intelligence Live

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

            Simulate recruiter-grade AI analysis,
            personalized interview preparation,
            and intelligent roadmap generation
            in real time.

          </p>

        </motion.div>

        {/* Main Grid */}

        <div
          className="
            grid
            grid-cols-1
            lg:grid-cols-2

            gap-10

            items-start
          "
        >

          {/* LEFT PANEL */}

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

            <p
              className="
                text-cyan-300

                uppercase

                tracking-[0.3em]

                text-sm

                mb-8
              "
            >

              AI Simulation

            </p>

            {/* Input */}

            <div>

              <label
                className="
                  text-slate-300

                  text-sm

                  mb-4

                  block
                "
              >

                Enter Your Target Role

              </label>

              <input

                type="text"

                value={role}

                onChange={(e) =>
                  setRole(
                    e.target.value
                  )
                }

                placeholder="
                  Example:
                  AI Engineer
                "

                className="
                  w-full

                  rounded-2xl

                  bg-white/5

                  border
                  border-white/10

                  px-5
                  py-5

                  text-white

                  placeholder:text-slate-500

                  outline-none

                  focus:border-cyan-400/50

                  transition-all
                  duration-300
                "
              />

            </div>

            {/* Button */}

            <button

              onClick={runDemo}

              className="
                mt-8

                w-full

                bg-cyan-400

                hover:bg-cyan-300

                transition-all
                duration-300

                text-slate-900

                font-semibold

                py-4

                rounded-2xl

                cyan-glow
              "
            >

              Generate AI Career Insights

            </button>

            {/* AI Thinking */}

            <AnimatePresence>

              {
                isRunning && (

                  <motion.div

                    initial={{
                      opacity: 0,
                      y: 20,
                    }}

                    animate={{
                      opacity: 1,
                      y: 0,
                    }}

                    exit={{
                      opacity: 0,
                      y: -20,
                    }}

                    className="
                      mt-10

                      flex
                      flex-col

                      gap-5
                    "
                  >

                    {
                      aiStates.map(

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

                            animate={{
                              opacity: 1,
                              x: 0,
                            }}

                            transition={{
                              delay:
                                index * 0.4,
                            }}

                            className="
                              flex
                              items-center

                              gap-4

                              rounded-2xl

                              bg-white/5

                              border
                              border-white/10

                              px-5
                              py-4
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
                              "
                            >

                              {item}

                            </p>

                          </motion.div>
                        )
                      )
                    }

                  </motion.div>
                )
              }

            </AnimatePresence>

          </motion.div>

          {/* RIGHT PANEL */}

          <AnimatePresence>

            {
              showResults && (

                <motion.div

                  initial={{
                    opacity: 0,
                    y: 40,
                  }}

                  animate={{
                    opacity: 1,
                    y: 0,
                  }}

                  exit={{
                    opacity: 0,
                  }}

                  transition={{
                    duration: 0.7,
                  }}

                  className="
                    grid
                    grid-cols-1
                    sm:grid-cols-2

                    gap-6
                  "
                >

                  {
                    resultCards.map((item) => (

                      <div
                        key={item.title}

                        className="
                          glass-card

                          rounded-[32px]

                          p-8

                          border
                          border-white/10

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

                          <p
                            className="
                              text-slate-400

                              text-sm

                              mb-4
                            "
                          >

                            {item.title}

                          </p>

                          <h3
                            className="
                              text-white

                              text-3xl

                              font-semibold

                              leading-snug
                            "
                          >

                            {item.value}

                          </h3>

                        </div>

                      </div>
                    ))
                  }

                </motion.div>
              )
            }

          </AnimatePresence>

        </div>

      </div>

    </section>
  );
}