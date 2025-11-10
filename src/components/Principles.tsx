import React from "react";

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
    <section className="relative w-full overflow-hidden">
      {/* faint grid backdrop */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[length:88px_88px]"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(0,0,0,0.06) 1px, transparent 1px), linear-gradient(to bottom, rgba(0,0,0,0.06) 1px, transparent 1px)",
        }}
      />

      <h2 className="relative z-10 mt-[82px] text-center text-[40px] font-semibold text-[rgba(37,37,37,1)] max-md:mt-10">
        Our <span className="font-bold text-[#197B55]">Principles</span>
      </h2>

      {/* === Decorative dashed paths + yellow arrows (md+) === */}
      <svg
        className="pointer-events-none absolute inset-x-0 top-[210px] z-0 hidden md:block"
        viewBox="0 0 1440 420"
        preserveAspectRatio="none"
      >
        {/* 1) Top arc between card 1 & 2 */}
        <path
          d="M180 150 C 300 80, 440 80, 560 150"
          stroke="#1E4C82"
          strokeWidth="3"
          strokeDasharray="6 10"
          fill="none"
          opacity="0.7"
        />
        {/* yellow chevron on that arc */}
        <g transform="translate(540,150) rotate(-20)">
          <path d="M0 0 l-18 -10 l0 20 z" fill="#FAB029" />
          <path d="M-22 0 l-18 -10 l0 20 z" fill="#FAB029" />
        </g>

        {/* 2) Bottom arc between card 2 & 3 */}
        <path
          d="M600 300 C 720 380, 820 380, 940 300"
          stroke="#1E4C82"
          strokeWidth="3"
          strokeDasharray="6 10"
          fill="none"
          opacity="0.7"
        />
        {/* yellow chevron at the low point */}
        <g transform="translate(780,334)">
          <path d="M0 0 l-18 -10 l0 20 z" fill="#FAB029" />
          <path d="M-22 0 l-18 -10 l0 20 z" fill="#FAB029" />
        </g>

        {/* 3) Top arc between card 3 & 4 */}
        <path
          d="M980 170 C 1100 100, 1240 100, 1360 170"
          stroke="#1E4C82"
          strokeWidth="3"
          strokeDasharray="6 10"
          fill="none"
          opacity="0.7"
        />
        {/* yellow chevron on that arc */}
        <g transform="translate(1340,170) rotate(-20)">
          <path d="M0 0 l-18 -10 l0 20 z" fill="#FAB029" />
          <path d="M-22 0 l-18 -10 l0 20 z" fill="#FAB029" />
        </g>
      </svg>

      <div className="relative z-10 mx-auto mt-[48px] w-full max-w-[1200px] px-4">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {PRINCIPLES.map((p) => (
            <article
              key={p.title}
              className="relative rounded-[12px] bg-[#E9F1E1] p-[18px] shadow-[0_6px_18px_rgba(0,0,0,0.25)]"
            >
              {/* tiny green pin above each card */}
              <div className="absolute -top-4 left-1/2 z-10 -translate-x-1/2 rounded-full bg-white p-1 shadow">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="#2A8C66" aria-hidden>
                  <path d="M12 12a4 4 0 100-8 4 4 0 000 8zm0 2c-4.418 0-8 2.239-8 5v1h16v-1c0-2.761-3.582-5-8-5z" />
                </svg>
              </div>

              {/* green pill title */}
              <div className="mx-auto mt-2 w-fit rounded-md bg-[#698E45] px-3 py-1.5 text-center text-white">
                <span className="text-[15px] font-semibold">{p.title}</span>
              </div>

              {/* description */}
              <p className="mx-auto mt-2 max-w-[270px] text-[15px] leading-[1.35] text-black">
                {p.desc}
              </p>

              {/* image (unchanged) */}
              <img
                src={p.img}
                alt={p.title}
                className="mt-4 h-[172px] w-full rounded-[10px] object-cover"
              />
            </article>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-[34px] flex justify-center">
          <button className="inline-flex items-center gap-3 rounded-full bg-[#197B55] px-6 py-3 font-medium text-white shadow-[0_6px_18px_rgba(0,0,0,0.25)]">
            <span>Explore Our Offerings</span>
            <span className="grid h-6 w-6 place-items-center rounded-full bg-white">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="#197B55" aria-hidden>
                <path d="M13 5l7 7-7 7v-4H4v-6h9V5z" />
              </svg>
            </span>
          </button>
        </div>
      </div>
    </section>
  );
};
