import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="relative px-2 py-0 mb-[45px]">
      <div className="max-w-[1240px] mx-auto text-center relative">
        {/* Heading */}
        <h1 className="text-[#252525] font-extrabold text-[28px] leading-[1.25] mb-3 mt-12 tracking-tight">
          <span>At Edolution, Every Project Is An Opportunity To Turn Policy Into Measurable Progress.</span>
          <br />
          <span className="block mt-[15px]">
            We <span className="text-[#16965B] font-bold">Design</span> And <span className="text-[#16965B] font-bold">Implement Large-Scale</span> Education, Skilling, And Livelihood <span className="text-[#16965B] font-bold">Programs</span> That
            <br className="hidden md:block" />
            Strengthen Communities, Empower Individuals, And Advance National Priorities
          </span>
        </h1>
        {/* Body text */}
        <p className="text-[#252525] text-[20px] font-normal mt-7 mb-2 max-w-[900px] mx-auto leading-[1.5]">
          Our initiatives bring together technology, governance, and on-ground execution — ensuring that impact is both scalable and sustainable
        </p>
        {/* Zigzag SVG accent */}
        <span className="absolute right-[78px] top-[-16px] md:block hidden">
          <span
            dangerouslySetInnerHTML={{
              __html:
                `<svg width="39" height="27" viewBox="0 0 39 27" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M36.47 9.83L29.78 20.62L26.66 8.02L19.86 16.00L16.83 3.37L3.13 14.26" stroke="#16965B" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"></path></svg>`
            }}
          />
        </span>
      </div>
    </section>
  );
};

export default Hero;
