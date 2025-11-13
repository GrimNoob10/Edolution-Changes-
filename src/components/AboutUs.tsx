import React from 'react';

export const AboutUs: React.FC = () => {
  return (
    <section className="bg-[rgba(248,252,255,1)] flex w-full flex-col items-stretch px-8 py-14 md:px-[34px] md:py-[55px] relative overflow-hidden"
    >
      <div className="relative flex justify-center">
        <h2 className="text-[rgba(37,37,37,1)] text-3xl md:text-[40px] font-semibold text-center flex items-center justify-center">
          About
          <span className="font-bold text-[#197B55] relative inline-block ml-2">
            Us
            {/* SVG above S in Us */}
            <svg
              className="absolute right-[-25px] -top-7 md:-top-5 w-[32px] md:w-[40px] h-auto"
              viewBox="0 0 43 30"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
              style={{ pointerEvents: "none" }}
            >
              <path
                d="M39.1289 17.6466L29.0715 25.1546L26.0559 12.0816L15.3022 20.1119L12.2866 7.03326L1.67326 15.1196"
                stroke="#19223F"
                strokeWidth="5.5"
                strokeMiterlimit="10"
              />
              <path
                d="M40.6738 15.3948L30.6164 22.9028L27.6009 9.82981L16.8471 17.86L13.8315 4.78705L3.21818 12.8678"
                stroke="#698E45"
                strokeWidth="5.5"
                strokeMiterlimit="10"
              />
            </svg>
          </span>
        </h2>
      </div>
      
      {/* Two-column content with equal height */}
      <div className="w-full mt-10 md:mt-[53px]">
        <div className="flex flex-col md:flex-row gap-10 items-stretch">
          {/* Left Article */}
          {/* Impact Mission Article */}
          <article className="w-full md:w-[57%] flex flex-col">
            <div className="w-full bg-[#FEF0D7]  md:pl-[26px] md:py-px rounded-[10px] h-full flex flex-col">
              <div
                className="flex flex-col md:flex-row gap-8 md:gap-5 h-full"
              style={{
            backgroundImage: "url('/Frmaeelement01.svg')",
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            backgroundPosition: 'calc(100% - 200px) 150px' // 200px from right, 220px from top
          }}

              >
                {/* Text Block */}
                <div className="w-full md:w-[45%]">
                  <div className="flex flex-col mt-6 md:mt-10">
                    <div className="bg-white flex items-center gap-3 text-lg md:text-xl text-center px-4 py-2.5 rounded-[10px] relative w-[fit-content]">
                      {/* SVG/Icon on the left */}
                      <img
                        src="/HeroSectionelement03.svg"
                        alt="Icon"
                        className="w-[20px] h-[20px] md:w-[30px] md:h-[30px] object-contain"
                      />
                      <span>Impact Mission</span>
                    </div>
                    <h3 className="text-[#FAB029] text-xl md:text-[26px] font-semibold mt-6 md:mt-8 whitespace-nowrap">
            Driving Social Progress
          </h3>

                    <p className="text-base md:text-lg mt-5 md:mt-[19px]">
                      Edolution is an impact-led organization advancing social progress by delivering large-scale education, skilling, and livelihood programs across India
                    </p>
                  </div>
                </div>
                {/* Image Block */}
                <div className="w-full md:w-[55%]  flex justify-center items-center">
                  <img
                    src="/AboutUsImage01.png"
                    alt="Impact Mission illustration"
                    className="object-contain w-full rounded-md mt-8 md:mt-0"
                  />
                </div>
              </div>
            </div>
          </article>
          {/* Right Article */}
          <article className="w-full md:w-[43%] md:ml-5 flex flex-col">
            <div className="flex flex-col bg-[#E9F1E1] md:pl-[26px] md:pt-[26px] mx-auto rounded-[10px] h-full flex-1">
              <div className="bg-white w-1/2 flex items-center gap-3 text-lg md:text-xl font-normal text-center px-4 py-2.5 rounded-[10px] relative">
                {/* SVG/Icon on the left */}
                <img
                  src="/HeroSectionelement04.svg"
                  alt="Icon"
                  className="w-[20px] h-[20px] md:w-[30px] md:h-[30px] object-contain"
                />
                <span>Action Approach</span>
              </div>
              <h3 className="text-[#197B55] text-xl md:text-[26px] w-full font-semibold mt-6 md:mt-8">
                Turning Goals Into Impact
              </h3>
              <div className="mt-6 md:mt-0 h-full">
                <div className="flex flex-col md:flex-row gap-6 md:gap-5 h-full" style={{
  backgroundImage: "url('/Frmaeelement01.svg')",
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover',
  backgroundPosition: 'center right 120px' // Moves the background 120px away from the right edge
}}
>
                  {/* Text Block */}
                  <div className="w-full md:w-1/2 flex flex-col justify-between" >
                    <p className="text-black text-base md:text-lg font-normal mt-6 pb-4 md:mt-[18px]">
                      We operate at the intersection of policy design, field execution, and measurable outcomes — helping governments, funders, and communities turn bold goals into real-world impact
                    </p>
                  </div>
                  {/* Image Block */}
                  <div className="w-full md:w-1/2 md:ml-5 flex justify-center items-center"
                  >
                    <img
                      src="/AboutUsImage02.png"
                      alt="Action Approach illustration"
                      className="object-contain w-full rounded-[14px] mt-4 md:mt-0"
                    />
                  </div>
                </div>
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
};
 