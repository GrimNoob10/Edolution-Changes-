import React from "react";
import { Link } from 'react-router-dom';

type Principle = { title: string; desc: string; img: string };

const PRINCIPLES: Principle[] = [
  {
    title: "Access",
    desc: "Build access and opportunity for every learner and worker",
    img: "/pr2.png",
  },
  {
    title: "Integrity",
    desc: "Deliver at scale with integrity and measurable outcomes",
    img: "/pr1.png",
  },
  {
    title: "Collaboration",
    desc: "Collaborate with organizations that share the same purpose",
    img: "/pr3.png",
  },
  {
    title: "Sustainability",
    desc: "Combine innovation, inclusivity, and impact to build sustainable communities",
    img: "/pr4.png",
  },
];

export const Principles: React.FC = () => {
  return (
    <section className="relative w-full overflow-hidden bg-white py-16">
      {/* Faint grid backdrop */}
      <div
        className="pointer-events-none absolute inset-0 bg-[length:88px_88px]"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(0,0,0,0.06) 1px, transparent 1px), linear-gradient(to bottom, rgba(0,0,0,0.06) 1px, transparent 1px)",
        }}
      />

      <h2 className="relative z-10 text-center text-[40px] font-semibold text-[#252525] max-md:text-3xl">
        Our <span className="font-bold text-[#197B55]">Principles</span>
      </h2>

      {/* Decorative background arrows and paths - exact positioning */}
      <div className="pointer-events-none absolute inset-0 z-0 hidden lg:block">
        {/* Arrow 1: Between cards 1 & 2 - using your SVG */}
        <img 
          src="/arrow1.png" 
          alt=""
          className="absolute left-[22%] top-[124px] md:mt-80px md:h-[80px] md:ml-40px md:w-[160px]"
        />

        <svg
          className="absolute inset-x-0 top-0 h-full w-full"
          viewBox="0 0 1400 600"
          preserveAspectRatio="none"
        >
          {/* Path 4: Top arc from card 3 to card 4 */}
          <path
            d="M 980 180 Q 1060 60 1140 180"
            stroke="#1E4C82"
            strokeWidth="2.5"
            strokeDasharray="6 10"
            fill="none"
            opacity="0.8"
          />
          {/* Arrow 4: On top arc */}
          <g transform="translate(1130,175) rotate(-30)">
            <path d="M0 0 l-13 -8 l0 16 z" fill="#F5B800" />
            <path d="M-17 0 l-13 -8 l0 16 z" fill="#F5B800" />
          </g>

          {/* Path 5: Right side curve near card 4 */}
          <path
            d="M 1040 400 Q 1120 500 1200 400"
            stroke="#1E4C82"
            strokeWidth="2.5"
            strokeDasharray="6 10"
            fill="none"
            opacity="0.6"
          />
        </svg>
      </div>

      <div className="relative z-10 mx-auto mt-12 w-full max-w-[1240px] px-4">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {PRINCIPLES.map((p) => (
            <article
              key={p.title}
              className="group relative rounded-xl bg-[#E9F1E1] p-5 shadow-[0_8px_24px_rgba(0,0,0,0.15)] hover:bg-[#F4B350] transition-all duration-300 cursor-pointer"
            >
              {/* Green pin icon above each card */}
              <div className="absolute -top-5 left-1/2 z-10 -translate-x-1/2 rounded-full p-1.5">
                <img src="/principles1.svg" alt="" width="28" height="28" />
              </div>

              {/* Green pill title - changes color on hover */}
              <div className="mr-12 mt-4 w-[144px] rounded-lg bg-[#698E45] group-hover:bg-white  px-4 py-2 text-center  shadow-sm transition-colors duration-300">
                <span className="text-base group-hover:text-[#F4B350] font-semibold text-white">{p.title}</span>
              </div>

              {/* Description */}
              <p className="mx-auto mt-3 text-center text-[15px] leading-relaxed text-gray-800  transition-colors duration-300">
                {p.desc}
              </p>

              {/* Image with scale effect on hover */}
              <div className="mt-4 overflow-hidden rounded-lg shadow-md">
                <img
                  src={p.img}
                  alt={p.title}
                  className="h-[180px] w-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>
            </article>
          ))}
        </div>

        {/* CTA Button */}
        <div className="mt-12 flex justify-center">
          <Link 
            to="/offerings"
            className="group inline-flex items-center gap-3 rounded-full bg-[#197B55] px-7 py-3.5 font-semibold text-white shadow-[0_8px_24px_rgba(25,123,85,0.35)] hover:bg-[#F4B350] hover:text-[#2C2C2C] hover:shadow-[0_8px_24px_rgba(244,179,80,0.35)] transition-all duration-300">
            <span>Explore Our Offerings</span>
            <span className="grid h-7 w-7 place-items-center rounded-full bg-white group-hover:bg-[#2C2C2C] transition-all duration-300">
              <svg 
                width="20" 
                height="16" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="#197B55" 
                strokeWidth="2.5" 
                strokeLinecap="round" 
                strokeLinejoin="round"
                className="group-hover:stroke-[#F4B350] transition-all duration-300"
              >
                <path d="M9 18l6-6-6-6" />
              </svg>
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
};
