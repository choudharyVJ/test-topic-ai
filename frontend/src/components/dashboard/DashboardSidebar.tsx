'use client';

export default function DashboardSidebar() {

  return (

    <aside
      className="
        hidden
        lg:flex

        flex-col

        justify-between

        w-[280px]

        min-h-screen

        glass-card

        border-r
        border-white/10

        px-6
        py-8
      "
    >

      <div>

        {/* Logo */}

        <div
          className="
            mb-14
          "
        >

          <h1
            className="
              text-3xl

              font-semibold

              text-white

              tracking-tight
            "
          >

            HireGenix AI

          </h1>

          <p
            className="
              mt-3

              text-slate-400

              text-sm
            "
          >

            Career Intelligence Platform

          </p>

        </div>

        {/* Navigation */}

        <div
          className="
            flex
            flex-col

            gap-4
          "
        >

          {
            [
              'Dashboard',
              'AI Interviews',
              'Roadmaps',
              'Career Memory',
              'Recruiter Insights',
            ].map((item) => (

              <button
                key={item}

                className="
                  flex
                  items-center

                  gap-4

                  rounded-2xl

                  px-5
                  py-4

                  text-slate-300

                  hover:text-white

                  hover:bg-white/5

                  transition-all
                  duration-300
                "
              >

                <div
                  className="
                    w-2
                    h-2

                    rounded-full

                    bg-cyan-400
                  "
                />

                {item}

              </button>
            ))
          }

        </div>

      </div>

      {/* Bottom Card */}

      <div
        className="
          glass-card

          rounded-3xl

          p-6

          border
          border-cyan-400/20
        "
      >

        <p
          className="
            text-cyan-300

            text-sm

            tracking-[0.25em]

            uppercase

            mb-4
          "
        >

          AI Status

        </p>

        <h3
          className="
            text-white

            text-2xl

            font-semibold

            leading-snug
          "
        >

          Recruiter Intelligence Active

        </h3>

        <div
          className="
            mt-6

            flex
            items-center

            gap-3
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
              text-slate-400

              text-sm
            "
          >

            AI systems operational

          </p>

        </div>

      </div>

    </aside>
  );
}