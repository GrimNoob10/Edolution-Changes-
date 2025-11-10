import React from 'react';

export const AboutUs: React.FC = () => {
  return (
    <section className="bg-[rgba(248,252,255,1)] flex w-full flex-col items-stretch px-8 py-14 md:px-[34px] md:py-[55px]">
      <h2 className="text-[rgba(37,37,37,1)] text-3xl md:text-[40px] font-semibold text-center">
        About <span className="font-bold text-[#197B55]">Us</span>
      </h2>
      
      <div className="w-full mt-10 md:mt-[53px]">
        <div className="flex flex-col md:flex-row gap-10">
          
          {/* Left Article */}
          <article className="w-full md:w-[57%]">
            <div className="w-full bg-[#FEF0D7] p-6 md:pl-[26px] md:py-px rounded-[10px]">
              <div className="flex flex-col md:flex-row gap-8 md:gap-5">
                
                {/* Text Block */}
                <div className="w-full md:w-[45%]">
                  <div className="flex flex-col mt-6 md:mt-10">
                    <div className="bg-white flex items-center gap-3 text-lg md:text-xl text-center px-4 py-2.5 rounded-[10px]">
                      <span>Impact Mission</span>
                    </div>
                    <h3 className="text-[#FAB029] text-xl md:text-[26px] font-semibold mt-6 md:mt-8">
                      Driving Social Progress
                    </h3>
                    <p className="text-base md:text-lg mt-5 md:mt-[19px]">
                      Edolution is an impact-led organization advancing social progress by delivering large-scale education, skilling, and livelihood programs across India
                    </p>
                  </div>
                </div>

                {/* Image Block */}
                <div className="w-full md:w-[55%] md:ml-5 flex justify-center items-center">
                  <img
                    src="https://api.builder.io/api/v1/image/assets/73777318be5b46ba9d2da78deef1571f/56a907d7a44221e89aa7d9dc3cc89e9956c4776d?placeholderIfAbsent=true"
                    alt="Impact Mission illustration"
                    className="object-contain w-full rounded-md mt-8 md:mt-0"
                  />
                </div>
              </div>
            </div>
          </article>
          
          {/* Right Article */}
          <article className="w-full md:w-[43%] md:ml-5">
            <div className="flex flex-col bg-[#E9F1E1] p-6 md:pl-[26px] md:pt-[26px] mx-auto rounded-[10px]">
              <div className="bg-white flex items-center gap-3 text-lg md:text-xl font-normal text-center px-4 py-2.5 rounded-[10px]">
                <span>Action Approach</span>
              </div>
              <h3 className="text-[#197B55] text-xl md:text-[26px] font-semibold mt-6 md:mt-8">
                Turning Goals Into Impact
              </h3>
              <div className="mt-6 md:mt-0">
                <div className="flex flex-col md:flex-row gap-6 md:gap-5">
                  {/* Text Block */}
                  <div className="w-full md:w-1/2">
                    <p className="text-black text-base md:text-lg font-normal mt-6 md:mt-[18px]">
                      We operate at the intersection of policy design, field execution, and measurable outcomes — helping governments, funders, and communities turn bold goals into real-world impact
                    </p>
                  </div>
                  {/* Image Block */}
                  <div className="w-full md:w-1/2 md:ml-5 flex justify-center items-center">
                    <img
                      src="https://api.builder.io/api/v1/image/assets/73777318be5b46ba9d2da78deef1571f/78efd5165606474092bb130b98d41ad43c5d2853?placeholderIfAbsent=true"
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
