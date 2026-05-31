"use client";

import { useEffect, useState } from "react";

import InterviewFeedback from "./InterviewFeedback";

import { useAuth } from "@clerk/nextjs";

interface Props {
  question: string;

  setQuestion: (question: string) => void;

  role: string;

  difficulty: string;

  stack: string;

  memory: any;

  setMemory: any;
}

export default function InterviewChat({
  question,

  setQuestion,

  role,

  difficulty,

  stack,

  memory,

  setMemory,
}: Props) {
  const [answer, setAnswer] = useState("");

  const [feedback, setFeedback] = useState<any>(null);

  const [loadingNext, setLoadingNext] = useState(false);

  const [loadingEvaluation, setLoadingEvaluation] = useState(false);

  const [showAnswer, setShowAnswer] = useState(false);

  const [generatedAnswer, setGeneratedAnswer] = useState("");

  const [currentQuestion, setCurrentQuestion] = useState(question);

  const [countdown, setCountdown] = useState(60);

  const [loadingMessage, setLoadingMessage] = useState("");

  const { getToken } = useAuth();

  // =========================
  // SUBMIT ANSWER
  // =========================

  const handleSubmitAnswer = async () => {
    try {
      setLoadingEvaluation(true);

      setCountdown(60);

      setLoadingMessage("Recruiter reviewing your answer 😄");

      // =========================
      // GET CLERK TOKEN
      // =========================

      const token = await getToken();

      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/evaluate-answer`,

        {
          method: "POST",

          headers: {
            "Content-Type": "application/json",

            Authorization: `Bearer ${token}`,
          },

          body: JSON.stringify({
            question: currentQuestion,

            answer,

            role,
          }),
        },
      );

      const data = await response.json();

      setFeedback(data);

      // =========================
      // MEMORY ENTRY
      // =========================

      const memoryEntry = {
        question: currentQuestion,

        answer,

        score: data.score || 0,

        strengths: data.strengths || [],

        weaknesses: data.weaknesses || [],

        improvements: data.improvements || [],

        final_verdict: data.final_verdict || "",
      };

      // =========================
      // UPDATE MEMORY
      // =========================

      const updatedMemory = {
        history: [...(memory?.history || []), memoryEntry],

        asked_questions: [
          ...new Set([...(memory?.asked_questions || []), currentQuestion]),
        ],

        weak_topics: [
          ...new Set([
            ...(memory?.weak_topics || []),

            ...(data.weaknesses || []),
          ]),
        ],

        strong_topics: [
          ...new Set([
            ...(memory?.strong_topics || []),

            ...(data.strengths || []),
          ]),
        ],

        scores: [...(memory?.scores || []), data.score || 0],
      };

      // =========================
      // SAVE MEMORY
      // =========================

      setMemory(updatedMemory);

      localStorage.setItem(
        "HireGenix-memory",

        JSON.stringify(updatedMemory),
      );

      console.log("Updated Memory:", updatedMemory);

      setLoadingEvaluation(false);
    } catch (error) {
      console.error(error);

      setLoadingEvaluation(false);
    }
  };

  // =========================
  // NEXT QUESTION
  // =========================

  const handleNextQuestion = async () => {
    try {
      // =========================
      // RESET OLD UI
      // =========================

      setFeedback(null);

      setGeneratedAnswer("");

      setShowAnswer(false);

      setAnswer("");

      setLoadingNext(true);

      setCountdown(60);

      setLoadingMessage("Free AI server waking up 😄");

      // =========================
      // GET CLERK TOKEN
      // =========================

      const token = await getToken();

      // =========================
      // FETCH NEXT QUESTION
      // =========================

      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/generate-interview-question`,

        {
          method: "POST",

          headers: {
            "Content-Type": "application/json",

            Authorization: `Bearer ${token}`,
          },

          body: JSON.stringify({
            role,

            difficulty,

            stack: stack.split(",").map((item) => item.trim()),

            previous_question: currentQuestion,

            previous_answer: answer,

            memory,
          }),
        },
      );

      const data = await response.json();

      // =========================
      // UPDATE QUESTION
      // =========================

      setQuestion(data.question);

      // =========================
      // SAVE QUESTION MEMORY
      // =========================

      setMemory((prev: any) => ({
        ...prev,

        asked_questions: [
          ...new Set([...(prev?.asked_questions || []), data.question]),
        ],
      }));

      // =========================
      // STOP LOADING
      // =========================

      setLoadingNext(false);
    } catch (error) {
      console.error(error);

      setLoadingNext(false);
    }
  };

  return (
    <div
      className="
        glass-card

        rounded-[40px]

        p-8
        md:p-10

        mt-10

        max-w-5xl

        mx-auto
      "
    >
      {/* Recruiter Label */}

      <p
        className="
          text-cyan-300

          uppercase

          tracking-[0.3em]

          text-sm

          mb-8
        "
      >
        AI Recruiter
      </p>

      {/* Question */}

      <div
        className="
          rounded-3xl

          bg-white/5

          border
          border-white/10

          p-8
        "
      >
        <p
          className="
            text-white

            text-lg

            leading-9
          "
        >
          {question}
        </p>
      </div>

      {/* User Answer */}

      <textarea
        value={answer}
        onChange={(e) => setAnswer(e.target.value)}
        placeholder="
          Type your answer here...
        "
        className="
          mt-8

          w-full

          min-h-[180px]

          rounded-3xl

          bg-white/5

          border
          border-white/10

          p-6

          text-white

          placeholder:text-slate-500

          outline-none

          resize-none
        "
      />

      {/* Submit Answer */}

      <button
        onClick={handleSubmitAnswer}
        className="
          mt-8

          bg-cyan-400

          hover:bg-cyan-300

          transition-all
          duration-300

          text-slate-900

          font-semibold

          px-8
          py-4

          rounded-2xl

          cyan-glow
        "
      >
        {loadingEvaluation ? "Evaluating..." : "Submit Answer"}
      </button>

      {/* Feedback */}

      {feedback && <InterviewFeedback feedback={feedback} />}

      {/* AI Mentor Answer Toggle */}

      {feedback && (
        <div className="mt-8">
          <button
            onClick={async () => {
              // =========================
              // GENERATE ANSWER ONLY ONCE
              // =========================

              if (!showAnswer && !generatedAnswer) {
                try {
                  // =========================
                  // GET CLERK TOKEN
                  // =========================

                  const token = await getToken();

                  const response = await fetch(
                    `${process.env.NEXT_PUBLIC_API_URL}/generate-mentor-answer`,

                    {
                      method: "POST",

                      headers: {
                        "Content-Type": "application/json",

                        Authorization: `Bearer ${token}`,
                      },

                      body: JSON.stringify({
                        question,

                        role,
                      }),
                    },
                  );

                  const data = await response.json();

                  setGeneratedAnswer(data.answer || "");
                } catch (error) {
                  console.error(error);
                }
              }

              // =========================
              // TOGGLE ANSWER CARD
              // =========================

              setShowAnswer(!showAnswer);
            }}
            className="
    text-cyan-300

    text-sm

    hover:text-cyan-200

    transition-all
  "
          >
            {showAnswer ? "Hide Answer" : "See How Recruiter Would Answer 👀"}
          </button>
        </div>
      )}

      {/* AI Mentor Answer Card */}

      {showAnswer && generatedAnswer && (
        <div
          className="
      mt-4

      bg-cyan-400/5

      border
      border-cyan-400/20

      rounded-3xl

      p-6

      animate-in
      slide-in-from-top-4
      duration-300
    "
        >
          <p
            className="
        text-cyan-200

        text-sm

        uppercase

        tracking-widest

        mb-4
      "
          >
            AI Mentor Answer
          </p>

          <div
            className="
        text-white/90

        leading-8

        whitespace-pre-line
      "
          >
            {generatedAnswer}
          </div>
        </div>
      )}

      {/* Next Question */}

      {feedback && (
        <button
          onClick={handleNextQuestion}
          className="
            mt-8

            bg-white/10

            hover:bg-white/20

            transition-all
            duration-300

            border
            border-white/10

            text-white

            font-semibold

            px-8
            py-4

            rounded-2xl
          "
        >
          {loadingNext ? "Generating..." : "Next Question"}
        </button>
      )}
    </div>
  );
}
