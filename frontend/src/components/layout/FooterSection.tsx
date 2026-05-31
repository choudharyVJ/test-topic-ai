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

  {/* ========================= */}
  {/* GLOW */}
  {/* ========================= */}

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

    {/* ========================= */}
    {/* CTA CARD */}
    {/* ========================= */}

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

        Deserves Smarter
        <br />

        Preparation

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

        HireGenix AI helps developers prepare for
        real-world interviews with AI recruiter simulations,
        personalized roadmaps, mentor-style feedback,
        and modern learning guidance.

      </p>

    </motion.div>

    {/* ========================= */}
    {/* FOOTER BOTTOM */}
    {/* ========================= */}

    <div
      className="
        mt-14

        flex
        flex-col
        lg:flex-row

        items-center
        justify-between

        gap-8
      "
    >

      {/* BRAND */}

      <div
        className="
          text-center
          lg:text-left
        "
      >

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

      {/* CONTACT LINKS */}

      <div
        className="
          flex
          flex-wrap

          justify-center

          items-center

          gap-6
          md:gap-8
        "
      >

        <a
          href="https://github.com/choudharyVJ"
          target="_blank"
          rel="noopener noreferrer"
          className="
            text-slate-400

            hover:text-cyan-300

            transition-colors
            duration-300

            text-sm
          "
        >
          GitHub
        </a>

        <a
          href="https://www.linkedin.com/in/vijay-choudhary-4a5379246/"
          target="_blank"
          rel="noopener noreferrer"
          className="
            text-slate-400

            hover:text-cyan-300

            transition-colors
            duration-300

            text-sm
          "
        >
          LinkedIn
        </a>

        <a
          href="mailto:choudharyvj21@gmail.com"
          className="
            text-slate-400

            hover:text-cyan-300

            transition-colors
            duration-300

            text-sm
          "
        >
          Gmail
        </a>

        <a
          href="tel:+918824300293"
          className="
            text-slate-400

            hover:text-cyan-300

            transition-colors
            duration-300

            text-sm
          "
        >
          Call
        </a>

      </div>

    </div>

  </div>

</footer>

);
}
