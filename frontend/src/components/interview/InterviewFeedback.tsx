interface Props {

  feedback: any;
}


export default function InterviewFeedback({

  feedback,

}: Props) {

  return (

    <div
      className="
        glass-card

        rounded-[40px]

        p-8
        md:p-10

        mt-10
      "
    >

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

              uppercase

              tracking-[0.3em]

              text-sm

              mb-3
            "
          >

            AI Evaluation

          </p>

          <h2
            className="
              text-4xl

              font-semibold

              text-white
            "
          >

            {feedback.score}/100

          </h2>

        </div>

        <div
          className="
            px-6
            py-3

            rounded-2xl

            bg-cyan-400

            text-slate-900

            font-semibold
          "
        >

          Recruiter Reviewed

        </div>

      </div>

      {/* Strengths */}

      <div className="mb-10">

        <h3
          className="
            text-white

            text-2xl

            mb-5
          "
        >

          Strengths

        </h3>

        <ul className="space-y-4">

          {
            (feedback.strengths || []).map(
              (
                item: string
              ) => (

                <li
                  key={item}

                  className="
                    text-emerald-300

                    leading-8
                  "
                >

                  + {item}

                </li>
              )
            )
          }

        </ul>

      </div>

      {/* Weaknesses */}

      <div className="mb-10">

        <h3
          className="
            text-white

            text-2xl

            mb-5
          "
        >

          Weaknesses

        </h3>

        <ul className="space-y-4">

          {
            (feedback.weaknesses || []).map(
              (
                item: string
              ) => (

                <li
                  key={item}

                  className="
                    text-red-300

                    leading-8
                  "
                >

                  - {item}

                </li>
              )
            )
          }

        </ul>

      </div>

      {/* Improvements */}

      <div className="mb-10">

        <h3
          className="
            text-white

            text-2xl

            mb-5
          "
        >

          Improvements

        </h3>

        <ul className="space-y-4">

          {
            (feedback.improvements || []).map(
              (
                item: string
              ) => (

                <li
                  key={item}

                  className="
                    text-cyan-300

                    leading-8
                  "
                >

                  • {item}

                </li>
              )
            )
          }

        </ul>

      </div>

      {/* Verdict */}

      <div
        className="
          rounded-3xl

          bg-white/5

          border
          border-white/10

          p-6
        "
      >

        <p
          className="
            text-slate-300

            leading-8
          "
        >

          {feedback.final_verdict}

        </p>

      </div>

    </div>
  );
}