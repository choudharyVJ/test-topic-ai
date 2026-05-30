"use client";

import { useUser, SignInButton, SignUpButton, UserButton } from "@clerk/nextjs";

export default function Navbar() {
  const { isSignedIn } = useUser();

  return (
    <header
      className="
        w-full

        fixed
        top-0
        left-0

        z-50

        px-4
        md:px-8
      "
    >
      <nav
        className="
          glass-card

          mt-6

          max-w-7xl

          mx-auto

          rounded-full

          px-6
          md:px-8

          py-4

          flex
          items-center
          justify-between
        "
      >
        {/* Logo */}

        <div>
          <h1
            className="
              text-xl
              md:text-2xl

              font-semibold

              tracking-tight

              text-white
            "
          >
            HireGenix AI
          </h1>
        </div>

        {/* Nav Links */}

        <div
          className="
            hidden
            md:flex

            items-center

            gap-10
          "
        >
          {["Features", "AI Coaching", "Roadmaps", "Interview Prep"].map(
            (item) => (
              <button
                key={item}
                className="
                  text-slate-300

                  hover:text-cyan-300

                  transition-colors
                  duration-300

                  text-sm
                "
              >
                {item}
              </button>
            ),
          )}
        </div>

        {/* Auth Area */}

        <div
          className="
            flex
            items-center

            gap-4
          "
        >
          {!isSignedIn ? (
            <>
              <SignInButton>
                <button
                  className="
                      glass-card

                      px-5
                      py-2.5

                      rounded-full

                      text-white

                      hover:border-cyan-400/40

                      transition-all
                      duration-300
                    "
                >
                  Sign In
                </button>
              </SignInButton>

              <SignUpButton>
                <button
                  className="
                      bg-cyan-400

                      hover:bg-cyan-300

                      transition-all
                      duration-300

                      text-slate-900

                      font-semibold

                      px-5
                      py-2.5

                      rounded-full

                      cyan-glow
                    "
                >
                  Get Started
                </button>
              </SignUpButton>
            </>
          ) : (
            <div
              className="
                  flex
                  items-center

                  gap-4
                "
            >
              <a
                href="/dashboard"
                className="
    glass-card

    px-5
    py-2.5

    rounded-full

    text-white

    hover:border-cyan-400/40

    transition-all
    duration-300
  "
              >
                Dashboard
              </a>

              <UserButton />
            </div>
          )}
        </div>
      </nav>
    </header>
  );
}
