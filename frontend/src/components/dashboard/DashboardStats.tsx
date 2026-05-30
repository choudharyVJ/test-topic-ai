'use client';

import {

  useEffect,

  useState,

} from 'react';

import {

  getMemory,

  UserMemory,

} from '@/lib/memory';


export default function DashboardStats() {

  const [

    memory,

    setMemory,

  ] = useState<UserMemory | null>(
    null
  );


  useEffect(() => {

    const storedMemory =
      getMemory();

    if (storedMemory) {

      setMemory(
        storedMemory
      );
    }

  }, []);


  const stats = [

    {
      title:
        'Target Role',

      value:
        memory?.targetRole ||
        'Not Set',
    },

    {
      title:
        'Experience Level',

      value:
        memory?.experienceLevel ||
        'Unknown',
    },

    {
      title:
        'Strongest Area',

      value:
        memory?.strongAreas?.[0] ||
        'Not Available',
    },

    {
      title:
        'Growth Focus',

      value:
        memory?.weakAreas?.[0] ||
        'Not Available',
    },
  ];


  return (

    <div
      className="
        grid
        grid-cols-1
        md:grid-cols-2
        xl:grid-cols-4

        gap-6
      "
    >

      {
        stats.map((item) => (

          <div
            key={item.title}

            className="
              glass-card

              rounded-[32px]

              p-8

              border
              border-white/10

              min-h-[220px]

              flex
              flex-col
              justify-between

              transition-all
              duration-300

              hover:border-cyan-400/30
            "
          >

            {/* Top Icon */}

            <div
              className="
                w-14
                h-14

                rounded-2xl

                bg-cyan-400/10

                border
                border-cyan-400/20

                flex
                items-center
                justify-center

                text-cyan-300

                text-xl
              "
            >

              ✦

            </div>

            {/* Content */}

            <div>

              <p
                className="
                  text-slate-400

                  text-sm

                  mb-4
                "
              >

                {item.title}

              </p>

              <h2
                className="
                  text-white

                  text-3xl

                  font-semibold

                  leading-snug
                "
              >

                {item.value}

              </h2>

            </div>

          </div>
        ))
      }

    </div>
  );
}