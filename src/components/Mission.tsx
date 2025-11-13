import React from 'react';

// Zig-zag SVG positioned for heading
const MissionSVG = () => (
  <svg className="w-[44px] h-[28px]" viewBox="0 0 43 30" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <path d="M39.1289 17.6466L29.0715 25.1546L26.0559 12.0816L15.3022 20.1119L12.2866 7.03326L1.67326 15.1196" stroke="#19223F" strokeWidth="5.5" strokeMiterlimit="10"/>
    <path d="M40.6738 15.3948L30.6164 22.9028L27.6009 9.82981L16.8471 17.86L13.8315 4.78705L3.21818 12.8678" stroke="#698E45" strokeWidth="5.5" strokeMiterlimit="10"/>
  </svg>
);

const corners = [
  {
    title: "Expanding Opportunities",
    description: "Enhancing access to education, skilling, and livelihood pathways for all",
    className: "md:absolute md:left-[-10px] md:top-[17%] flex flex-col items-start md:w-[340px] z-10 w-full static mt-6", // Update for mobile
    align: "items-start text-left",
  },
  {
    title: "Partnering for Impact",
    description: "Collaborating with government bodies, funders, and communities to drive collective progress",
    className: "md:absolute md:right-[-10px] md:top-[17%] flex flex-col items-end md:w-[340px] z-10 w-full static mt-6", // Update for mobile
    align: "items-end text-right",
  },
  {
    title: "Advancing Inclusion & Resilience",
    description: "Fostering equitable growth, social inclusion, and long-term community resilience",
    className: "md:absolute md:left-[-10px] md:bottom-[15%] flex flex-col items-start md:w-[340px] z-10 w-full static mt-6", // Update for mobile
    align: "items-start text-left",
  },
  {
    title: "Turning Goals into Action",
    description: "Translating national and global agendas — including NEP, SDGs, and ESG commitments — into real, measurable outcomes for people and communities",
    className: "md:absolute md:right-[-10px] md:bottom-[15%] flex flex-col items-end md:w-[340px] z-10 w-full static mt-6", // Update for mobile
    align: "items-end text-right",
  },
];

export const Mission = () => (
  <section
    className="relative bg-white w-full py-[54px] px-[34px] max-md:px-5 max-md:py-10 overflow-hidden min-h-[700px] max-md:min-h-0"
    style={{
      backgroundImage: "url('/Frmaeelement01.svg')",
      backgroundSize: '50%',
      backgroundPosition: '',
      backgroundRepeat: 'no-repeat'
    }}
  >
    <div className="relative w-full max-w-6xl mx-auto min-h-[700px] max-md:min-h-0">
      {/* Mission Heading */}
      <div className="flex flex-col items-center">
        <div className="flex items-center justify-center relative mb-[53px] max-md:mb-6">
          <span className="text-[rgba(37,37,37,1)] text-[40px] max-md:text-2xl font-semibold text-center">
            Our{" "}
            <span className="font-bold text-[#197B55] relative inline-block pr-[48px] max-md:pr-10">
              Mission
              <span className="absolute -right-5 -top-7 mr-[45px] mt-[23px] rotate-[1deg] max-md:static max-md:mr-0 max-md:mt-0">
                <MissionSVG />
              </span>
            </span>
          </span>
        </div>
      </div>

      {/* Four Corner Content: stack on mobile */}
      <div className="flex flex-col gap-4 md:gap-0 md:block">
        {corners.map((corner, i) => (
          <div key={i} className={corner.className}>
            <div className={`bg-[#E8F5E4] rounded-[6px] px-3 py-2 font-bold text-[#197B55] text-[22px] max-md:text-lg mb-1 leading-[1.2] shadow-sm inline-block`}>
              {corner.title}
            </div>
            <div className="w-[90%] h-[1px] bg-[#698E45] mt-1"></div>
            <p className={`text-[rgba(37,37,37,1)] text-lg max-md:text-base font-normal leading-[1.3] mt-2 ${corner.align}`}>
              {corner.description}
            </p>
          </div>
        ))}
      </div>

      {/* Center Mission Image: absolute for desktop, inline for mobile */}
       <div className="absolute left-1/2 top-[50%] -translate-x-1/2 -translate-y-1/2 flex justify-center items-center">
        <img
          src="/mission.png" // replace with real path
          alt="Mission"
          className="w-full h-full mb-[100px] aspect-square object-contain"
        />
      </div>
    </div>
  </section>
);
