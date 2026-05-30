'use client';

import {

  UserButton,

} from '@clerk/nextjs';


export default function DashboardHeader() {

  return (

    <div
      className="
        flex
        flex-col
        md:flex-row

        items-start
        md:items-center

        justify-between

        gap-6

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

            mb-4
          "
        >

          Welcome Back

        </p>

        <h1
          className="
            text-4xl
            md:text-5xl

            font-semibold

            text-white

            tracking-tight
          "
        >

          AI Career Dashboard

        </h1>

      </div>

      <div
        className="
          flex
          items-center

          gap-4
        "
      >

        <div
          className="
            glass-card

            px-5
            py-3

            rounded-2xl

            text-slate-300
          "
        >

          AI Coaching Active

        </div>

        <UserButton />

      </div>

    </div>
  );
}