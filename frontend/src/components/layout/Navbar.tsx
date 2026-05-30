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
  name: "Dashboard",
  href: "/dashboard",
},

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

    px-4
    md:px-8
  "
>

  <nav
    className="
      mt-6

      max-w-5xl

      mx-auto

      rounded-full

     px-5
     md:px-6

      py-4

      flex
      items-center
      justify-between

      backdrop-blur-xl

      bg-white/5

      border
      border-cyan-400/10

      shadow-[0_0_40px_rgba(34,211,238,0.08)]
    "
  >

    {/* ========================= */}
    {/* LOGO */}
    {/* ========================= */}

    <Link href="/">

      <h1
        className="
          text-xl
          md:text-2xl

          font-semibold

          tracking-tight

          text-white

          cursor-pointer

          hover:text-cyan-300

          transition-all
          duration-300
        "
      >
        HireGenix AI
      </h1>

    </Link>

    {/* ========================= */}
    {/* NAV LINKS */}
    {/* ========================= */}

    <div
      className="
        hidden
        md:flex

        items-center

        gap-6
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

    {/* ========================= */}
    {/* AUTH AREA */}
    {/* ========================= */}

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

        <div
          className="
            flex
            items-center

            gap-4
          "
        >

          <Link
            href="/dashboard"
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
            Dashboard
          </Link>

          <UserButton />

        </div>
      )}
    </div>
  </nav>
</header>

);
}
