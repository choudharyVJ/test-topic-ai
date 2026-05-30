import Navbar from '@/components/layout/Navbar';

import InterviewSetupCard from '@/components/interview/InterviewSetupCard';


export default function InterviewPage() {

  return (

    <main>

      <Navbar />

      <section
        className="
          min-h-screen

          px-6
          md:px-10

          pt-40
          pb-24
        "
      >

        <div
          className="
            max-w-7xl

            mx-auto
          "
        >

          {/* Heading */}

          <div
            className="
              mb-16

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

              AI Recruiter Simulation

            </p>

            <h1
              className="
                text-5xl
                md:text-7xl

                font-semibold

                text-white

                leading-[1]
              "
            >

              Practice
              <br />

              Real AI
              <br />

              Interviews

            </h1>

            <p
              className="
                mt-8

                max-w-3xl

                mx-auto

                text-slate-400

                leading-8
              "
            >

              Experience intelligent recruiter-style
              technical interviews powered by
              adaptive AI evaluation systems.

            </p>

          </div>

          <InterviewSetupCard />

        </div>

      </section>

    </main>
  );
}