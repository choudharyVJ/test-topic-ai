"use client";

import { useState } from "react";

import InterviewChat from "./InterviewChat";

export default function InterviewSetupCard() {
  const [role, setRole] = useState("");

  const [difficulty, setDifficulty] =
    useState("Intermediate");

  const [stack, setStack] =
    useState("");

  const [question, setQuestion] =
    useState("");

  const [
  generatedAnswer,

  setGeneratedAnswer,
] = useState("");  

  const [started, setStarted] =
    useState(false);

  const [loading, setLoading] =
    useState(false);

const [memory, setMemory] =
  useState({

    history: [],

    asked_questions: [],

    weak_topics: [],

    strong_topics: [],

    scores: [],
  });

  return (
    <div>
      {/* Setup Card */}

      {!started && (
        <div
          className="
            glass-card

            rounded-[40px]

            p-8
            md:p-10

            max-w-4xl

            mx-auto
          "
        >
          <p
            className="
              text-cyan-300

              uppercase

              tracking-[0.3em]

              text-sm

              mb-10
            "
          >
            Configure Interview
          </p>

          {/* Role */}

          <div className="mb-8">
            <label
              className="
                block

                text-slate-300

                mb-4
              "
            >
              Target Role
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

                focus:border-cyan-400/40
              "
            />
          </div>

          {/* Difficulty */}

          <div className="mb-8">
            <label
              className="
                block

                text-slate-300

                mb-4
              "
            >
              Difficulty Level
            </label>

            <select
              value={difficulty}

              onChange={(e) =>
                setDifficulty(
                  e.target.value
                )
              }

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
              "
            >
              <option>
                Beginner
              </option>

              <option>
                Intermediate
              </option>

              <option>
                Advanced
              </option>
            </select>
          </div>

          {/* Stack */}

          <div className="mb-10">
            <label
              className="
                block

                text-slate-300

                mb-4
              "
            >
              Tech Stack
            </label>

            <input
              type="text"

              value={stack}

              onChange={(e) =>
                setStack(
                  e.target.value
                )
              }

              placeholder="
                React, FastAPI, LangChain...
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

                focus:border-cyan-400/40
              "
            />
          </div>

          {/* Start Button */}

          <button
            onClick={async () => {
              try {
                setLoading(true);

                const response =
                  await fetch(
                    `${process.env.NEXT_PUBLIC_API_URL}/generate-interview-question`,
                    {
                      method: "POST",

                      headers: {
                        "Content-Type":
                          "application/json",
                      },

                      body:
                        JSON.stringify({
                          role,

                          difficulty,

                          stack,

                          memory,
                        }),
                    }
                  );

                const data =
                  await response.json();

                setQuestion(
                  data.question
                );


                setStarted(true);

                setLoading(false);
              } catch (error) {
                console.error(error);

                setLoading(false);
              }
            }}
            className="
              w-full

              bg-cyan-400

              hover:bg-cyan-300

              transition-all
              duration-300

              text-slate-900

              font-semibold

              py-5

              rounded-2xl

              cyan-glow
            "
          >
            {loading
              ? "Generating..."
              : "Start AI Interview"}
          </button>
        </div>
      )}

      {/* Interview Chat */}

      {started && (
        <InterviewChat
          question={question}
          setQuestion={setQuestion}
          role={role}
          difficulty={difficulty}
          stack={stack}
          memory={memory}
          setMemory={setMemory}
        />
      )}
    </div>
  );
}