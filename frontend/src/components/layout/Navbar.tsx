"use client";

import Link from "next/link";

import {
useUser,
SignInButton,
SignUpButton,
UserButton,
} from "@clerk/nextjs";

export default function Navbar() {

const { isSignedIn } = useUser();

const navItems = [

{
  name: "Roadmaps",
  href: "/roadmap",
},

{
  name: "Interview",
  href: "/interview",
},

];

return (

<header
  className="
    w-full

    fixed
    top-0
    left-0

    z-50

    px-3
    md:px-8
  "
>

  <nav
    className="
      mt-4
      md:mt-6

      max-w-6xl

      mx-auto

      rounded-2xl
      md:rounded-full

      px-4
      md:px-8

      py-3
      md:py-4

      backdrop-blur-xl

      bg-white/5

      border
      border-cyan-400/10

      shadow-[0_0_40px_rgba(34,211,238,0.08)]
    "
  >

    {/* ========================= */}
    {/* MOBILE NAVBAR */}
    {/* ========================= */}

    <div
      className="
        flex
        md:hidden

        items-center
        justify-between
      "
    >

      {/* LOGO */}

      <Link href="/">

        <h1
          className="
            text-base

            font-semibold

            tracking-tight

            text-white

            whitespace-nowrap

            hover:text-cyan-300

            transition-all
            duration-300
          "
        >
          HireGenix AI
        </h1>

      </Link>

      {/* MOBILE RIGHT */}

      <div
        className="
          flex
          items-center

          gap-2
        "
      >

        {/* SHOW NAV ITEMS ONLY IF SIGNED IN */}

        {isSignedIn && (

          <div
            className="
              flex
              items-center

              gap-3
            "
          >

            {navItems.map((item) => (

              <Link
                key={item.name}
                href={item.href}
                className="
                  text-slate-300

                  hover:text-cyan-300

                  transition-all
                  duration-300

                  text-xs

                  whitespace-nowrap
                "
              >
                {item.name}
              </Link>
            ))}

          </div>
        )}

        {/* AUTH */}

        {isSignedIn ? (

          <UserButton />

        ) : (

          <div
            className="
              flex
              items-center

              gap-2
            "
          >

            <SignInButton>

              <button
                className="
                  text-xs

                  text-white

                  px-3
                  py-2

                  rounded-full

                  border
                  border-cyan-400/10

                  bg-white/5
                "
              >
                Sign In
              </button>

            </SignInButton>

            <SignUpButton>

              <button
                className="
                  bg-cyan-400

                  text-slate-900

                  text-xs

                  font-semibold

                  px-3
                  py-2

                  rounded-full

                  shadow-[0_0_20px_rgba(34,211,238,0.25)]
                "
              >
                Get Started
              </button>

            </SignUpButton>

          </div>
        )}

      </div>

    </div>

    {/* ========================= */}
    {/* DESKTOP NAVBAR */}
    {/* ========================= */}

    <div
      className="
        hidden
        md:grid

        grid-cols-3

        items-center
      "
    >

      {/* LEFT */}
      
      <div>

        <Link href="/">

          <h1
            className="
              text-2xl

              font-semibold

              tracking-tight

              text-white

              whitespace-nowrap

              hover:text-cyan-300

              transition-all
              duration-300
            "
          >
            HireGenix AI
          </h1>

        </Link>

      </div>

      {/* CENTER NAV */}

      <div
        className="
          flex
          items-center
          justify-center

          gap-10
        "
      >

        {isSignedIn && navItems.map((item) => (

          <Link
            key={item.name}
            href={item.href}
            className="
              text-slate-300

              hover:text-cyan-300

              transition-all
              duration-300

              text-sm

              relative

              after:absolute
              after:left-0
              after:-bottom-1

              after:h-[1px]
              after:w-0

              after:bg-cyan-300

              after:transition-all
              after:duration-300

              hover:after:w-full
            "
          >
            {item.name}
          </Link>
        ))}

      </div>

      {/* RIGHT AUTH */}

      <div
        className="
          flex
          items-center
          justify-end

          gap-4
        "
      >

        {!isSignedIn ? (

          <>

            <SignInButton>

              <button
                className="
                  backdrop-blur-xl

                  bg-white/5

                  border
                  border-cyan-400/10

                  px-5
                  py-2.5

                  rounded-full

                  text-white

                  hover:border-cyan-400/40

                  hover:bg-cyan-400/10

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

                  shadow-[0_0_30px_rgba(34,211,238,0.35)]
                "
              >
                Get Started
              </button>

            </SignUpButton>

          </>

        ) : (

          <UserButton />
        )}

      </div>

    </div>

  </nav>

</header>

);
}
