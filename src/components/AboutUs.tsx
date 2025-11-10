import React from 'react';

export const AboutUs: React.FC = () => {
  return (
    <section className="bg-[rgba(248,252,255,1)] flex w-full flex-col items-stretch px-[34px] py-[55px] max-md:max-w-full max-md:px-5">
      <h2 className="text-[rgba(37,37,37,1)] text-[40px] font-semibold text-center self-center">
        About{" "}
        <span className="font-bold text-[#197B55]">Us</span>
      </h2>
      
      <div className="w-full mt-[53px] max-md:max-w-full max-md:mt-10">
        <div className="gap-5 flex max-md:flex-col max-md:items-stretch">
          <article className="w-[57%] max-md:w-full max-md:ml-0">
            <div className="grow overflow-hidden w-full bg-[#FEF0D7] pl-[26px] py-px rounded-[10px] max-md:max-w-full max-md:mt-9">
              <div className="gap-5 flex max-md:flex-col max-md:items-stretch">
                <div className="w-[45%] max-md:w-full max-md:ml-0">
                  <div className="flex w-full flex-col items-stretch text-black font-normal mt-6 max-md:mt-10">
                    <div className="bg-white flex items-center gap-3.5 text-xl text-center px-4 py-2.5 rounded-[10px]">
                      <span className="self-stretch my-auto">Impact Mission</span>
                    </div>
                    <h3 className="text-[#FAB029] text-[26px] font-semibold mt-8 max-md:mr-2">
                      Driving Social Progress
                    </h3>
                    <p className="text-lg mt-[19px]">
                      Edolution is an impact-led organization advancing social progress by delivering large-scale education, skilling, and livelihood programs across India
                    </p>
                  </div>
                </div>
                <div className="w-[55%] ml-5 max-md:w-full max-md:ml-0">
                  <img
                    src="https://api.builder.io/api/v1/image/assets/73777318be5b46ba9d2da78deef1571f/56a907d7a44221e89aa7d9dc3cc89e9956c4776d?placeholderIfAbsent=true"
                    alt="Impact Mission illustration"
                    className="aspect-[0.93] object-contain w-full grow max-md:mt-10"
                  />
                </div>
              </div>
            </div>
          </article>
          
          <article className="w-[43%] ml-5 max-md:w-full max-md:ml-0">
            <div className="flex w-full flex-col overflow-hidden bg-[#E9F1E1] mx-auto pl-[26px] pt-[26px] rounded-[10px] max-md:max-w-full max-md:mt-9">
              <div className="bg-white flex items-center gap-3.5 text-xl text-black font-normal text-center px-4 py-2.5 rounded-[10px]">
                <span className="self-stretch my-auto">Action Approach</span>
              </div>
              <h3 className="text-[#197B55] text-[26px] font-semibold mt-8">
                Turning Goals Into Impact
              </h3>
              <div className="self-stretch max-md:max-w-full">
                <div className="gap-5 flex max-md:flex-col max-md:items-stretch">
                  <div className="w-6/12 max-md:w-full max-md:ml-0">
                    <p className="text-black text-lg font-normal mt-[18px] max-md:mt-[30px]">
                      We operate at the intersection of policy design, field execution, and measurable outcomes — helping governments, funders, and communities turn bold goals into real-world impact
                    </p>
                  </div>
                  <div className="w-6/12 ml-5 max-md:w-full max-md:ml-0">
                    <img
                      src="https://api.builder.io/api/v1/image/assets/73777318be5b46ba9d2da78deef1571f/78efd5165606474092bb130b98d41ad43c5d2853?placeholderIfAbsent=true"
                      alt="Action Approach illustration"
                      className="aspect-[1.05] object-contain w-full grow rounded-[14px] max-md:mt-3"
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
