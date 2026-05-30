"use client";

import { useState } from "react";

import { motion, AnimatePresence } from "framer-motion";

import { saveMemory } from "@/lib/memory";

import { RoadmapResponse } from "@/types/roadmap";

export default function RoadmapGenerator() {
  const [role, setRole] = useState("");

  const [level, setLevel] = useState("Beginner");

  const [loading, setLoading] = useState(false);

  const [generated, setGenerated] = useState(false);

  const [roadmap, setRoadmap] = useState<RoadmapResponse | null>(null);

 const generateRoadmap = async () => {

  if (!role.trim()) return;

  saveMemory({

    targetRole: role,

    experienceLevel: level,

    strongAreas: [

      "Frontend",

      "AI Systems",
    ],

    weakAreas: [

      "Cloud",

      "System Design",
    ],
  });

  setLoading(true);

  setGenerated(false);

  try {

    const response = await fetch(

      `${process.env.NEXT_PUBLIC_API_URL}/generate-roadmap`,

      {

        method: 'POST',

        headers: {

          'Content-Type':
            'application/json',
        },

        body: JSON.stringify({

          role,

          level,
        }),
      }
    );

    const data =
      await response.json();

    console.log(data);

    setRoadmap(data);

    setLoading(false);

    setGenerated(true);

  } catch (error) {

    console.error(error);

    setLoading(false);
  }
};

  return (
    <section
      className="
        px-6
        md:px-10

        pb-24
      "
    >
      <div
        className="
          max-w-7xl

          mx-auto

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
            Generate Roadmap
          </p>

          {/* Role Input */}

          <div
            className="
              mb-8
            "
          >
            <label
              className="
                text-slate-300

                text-sm

                mb-4

                block
              "
            >
              Target Role
            </label>

            <input
              type="text"
              value={role}
              onChange={(e) => setRole(e.target.value)}
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

          {/* Experience Level */}

          <div
            className="
              mb-10
            "
          >
            <label
              className="
                text-slate-300

                text-sm

                mb-4

                block
              "
            >
              Experience Level
            </label>

            <select
              value={level}
              onChange={(e) => setLevel(e.target.value)}
              className="
                w-full

                rounded-2xl

                bg-white/5

                border
                border-white/10

                px-5
                py-5

                text-white

                outline-none

                focus:border-cyan-400/50
              "
            >
              <option>Beginner</option>

              <option>Intermediate</option>

              <option>Advanced</option>
            </select>
          </div>

          {/* Button */}

          <button
            onClick={generateRoadmap}
            className="
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
            Generate AI Roadmap
          </button>

          {/* Loading */}

          <AnimatePresence>
            {loading && (
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
                }}
                className="
                    mt-8

                    flex
                    flex-col

                    gap-4
                  "
              >
                {[
                  "Analyzing engineering pathway...",

                  "Evaluating market requirements...",

                  "Building learning milestones...",
                ].map((item) => (
                  <div
                    key={item}
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
                  </div>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>

        {/* RIGHT PANEL */}

        <AnimatePresence>
          {generated && (
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
                  flex
                  flex-col

                  gap-6
                "
            >
              {roadmap?.steps?.map((step, index) => (
                <div
                  key={step.phase}
                  className="
                          glass-card

                          rounded-[32px]

                          p-8

                          border
                          border-white/10

                          flex

                          gap-6
                        "
                >
                  {/* Number */}

                  <div
                    className="
                            min-w-[56px]
                            h-[56px]

                            rounded-2xl

                            bg-cyan-400/10

                            border
                            border-cyan-400/20

                            flex
                            items-center
                            justify-center

                            text-cyan-300

                            font-semibold
                          "
                  >
                    0{index + 1}
                  </div>

                  {/* Content */}

                  <div>
                    <h3
                      className="
                              text-white

                              text-2xl

                              font-semibold

                              mb-4
                            "
                    >
                      {step.phase}
                    </h3>

                    <p
                      className="
                              text-slate-400

                              leading-8
                            "
                    >
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
