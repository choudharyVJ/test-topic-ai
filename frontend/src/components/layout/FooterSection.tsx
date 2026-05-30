'use client';

import {

  motion,

} from 'framer-motion';


export default function FooterSection() {

  return (

    <footer
      className="
        relative

        pt-10
        pb-16

        px-6
        md:px-10

        overflow-hidden
      "
    >

      {/* Glow */}

      <div
        className="
          absolute

          bottom-0
          left-1/2

          -translate-x-1/2

          w-[700px]
          h-[700px]

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

        {/* CTA CARD */}

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

            rounded-[48px]

            p-10
            md:p-16

            border
            border-white/10

            text-center
          "
        >

          <p
            className="
              text-cyan-300

              uppercase

              tracking-[0.35em]

              text-sm

              mb-8
            "
          >

            Build Your Future With AI

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

            Your Career
            <br />

            Deserves More Than
            <br />

            Generic Advice

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

            HireGenix AI helps engineers
            prepare smarter,
            grow faster,
            and navigate careers with
            recruiter-grade intelligence
            powered by adaptive AI systems.

          </p>

          {/* CTA BUTTONS */}

          <div
            className="
              mt-12

              flex
              flex-wrap

              justify-center

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

              Start Your AI Journey

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

              Explore Platform

            </button>

          </div>

        </motion.div>

        {/* Footer Bottom */}

        <div
          className="
            mt-14

            flex
            flex-col
            md:flex-row

            items-center
            justify-between

            gap-6
          "
        >

          {/* Brand */}

          <div>

            <h3
              className="
                text-2xl

                font-semibold

                text-white

                tracking-tight
              "
            >

              HireGenix AI

            </h3>

            <p
              className="
                mt-3

                text-slate-500

                text-sm
              "
            >

              AI Career Intelligence Platform

            </p>

          </div>

          {/* Footer Links */}

          <div
            className="
              flex
              flex-wrap

              items-center

              gap-8
            "
          >

            {
              [
                'Privacy',
                'Careers',
                'AI Coaching',
                'Interview Prep',
              ].map((item) => (

                <button
                  key={item}

                  className="
                    text-slate-500

                    hover:text-cyan-300

                    transition-colors
                    duration-300

                    text-sm
                  "
                >

                  {item}

                </button>
              ))
            }

          </div>

        </div>

      </div>

    </footer>
  );
}