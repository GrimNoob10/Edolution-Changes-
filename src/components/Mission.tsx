import React from 'react';

export const Mission: React.FC = () => {
  return (
    <section className="bg-white z-10 w-full mt-[15px] pb-[21px] max-md:max-w-full">
      <div className="flex flex-col relative z-10 min-h-[812px] mt-[-15px] w-full overflow-hidden px-[34px] py-[54px] max-md:max-w-full max-md:px-5">
        <img
          src="https://api.builder.io/api/v1/image/assets/73777318be5b46ba9d2da78deef1571f/2dd6db4b87f8d6e845d9fd6d567767e8f80ac732?placeholderIfAbsent=true"
          alt="Mission background"
          className="absolute h-full w-full object-cover inset-0"
        />
        
        <h2 className="relative text-[rgba(37,37,37,1)] text-[40px] font-semibold text-center self-center">
          Our{" "}
          <span className="font-bold text-[#197B55]">Mission</span>
        </h2>

        <div className="relative shadow-[0_6px_18px_0_rgba(0,0,0,0.10)] bg-[#FEF0D7] self-center z-10 flex w-[170px] flex-col h-[170px] mt-[53px] pt-[26px] px-[26px] rounded-[10px] max-md:mt-10 max-md:pl-5">
          <div className="bg-[#698E45] z-10 flex flex-col items-center justify-center w-full h-40 -mb-4 px-5 rounded-[10px] max-md:-mr-4 max-md:mb-2.5">
            <img
              src="https://api.builder.io/api/v1/image/assets/73777318be5b46ba9d2da78deef1571f/6722fbf8e2af8cc6eb9f0a958a688f4a99dfa503?placeholderIfAbsent=true"
              alt="Mission icon 1"
              className="aspect-[1] object-contain w-full"
            />
          </div>
        </div>

        <div className="relative shadow-[0_6px_18px_0_rgba(0,0,0,0.10)] bg-[#FEF0D7] self-center z-10 flex mt-[-170px] w-[170px] flex-col h-[170px] ml-[108px] pt-[26px] rounded-[10px] max-md:pr-5">
          <div className="bg-[#698E45] z-10 flex flex-col items-center justify-center w-full h-40 -mb-4 px-5 rounded-[10px] max-md:mb-2.5">
            <img
              src="https://api.builder.io/api/v1/image/assets/73777318be5b46ba9d2da78deef1571f/87ffced2cf8f20046e5ac6aebcce28afeb33078e?placeholderIfAbsent=true"
              alt="Mission icon 2"
              className="aspect-[1] object-contain w-[120px]"
            />
          </div>
        </div>

        <div className="relative mt-[-155px] w-[316px] max-w-full">
          <h3 className="text-[#197B55] text-center text-2xl font-bold max-md:ml-2">
            Expanding Opportunities
          </h3>
          <p className="text-[rgba(37,37,37,1)] text-lg font-normal mt-[25px] max-md:mr-2.5">
            Enhancing access to education, skilling, and livelihood pathways for all
          </p>
        </div>

        <div className="relative z-10 flex mt-[-142px] w-[894px] max-w-full flex-col mr-5 max-md:mr-2.5">
          <div className="w-[274px] max-w-full">
            <h3 className="text-[#197B55] text-center text-2xl font-bold max-md:ml-2">
              Partnering for Impact
            </h3>
            <p className="text-[rgba(37,37,37,1)] text-lg font-normal mt-[25px] max-md:mr-[5px]">
              Collaborating with government bodies, funders, and communities to drive collective progress
            </p>
          </div>
          
          <div className="shadow-[0_6px_18px_0_rgba(0,0,0,0.10)] bg-[#FEF0D7] flex w-[170px] flex-col h-[170px] mt-[65px] pb-[26px] px-[26px] rounded-[10px] max-md:mt-10 max-md:pl-5">
            <div className="bg-[#698E45] z-10 flex flex-col items-center justify-center w-full h-40 -mt-4 px-5 rounded-[10px] max-md:-mr-4">
              <img
                src="https://api.builder.io/api/v1/image/assets/73777318be5b46ba9d2da78deef1571f/d46b57b26c91e9e64b74e5028caf27b298192d39?placeholderIfAbsent=true"
                alt="Mission icon 3"
                className="aspect-[1] object-contain w-full"
              />
            </div>
          </div>
          
          <div className="shadow-[0_6px_18px_0_rgba(0,0,0,0.10)] bg-[#FEF0D7] self-center z-10 flex mt-[-170px] w-[170px] flex-col h-[170px] pb-[26px] rounded-[10px] max-md:pr-5">
            <div className="bg-[#698E45] z-10 flex flex-col items-center justify-center w-full h-40 -mt-4 px-5 rounded-[10px]">
              <img
                src="https://api.builder.io/api/v1/image/assets/73777318be5b46ba9d2da78deef1571f/83896b3e9cdcb41c01494f9703762f3610146e67?placeholderIfAbsent=true"
                alt="Mission icon 4"
                className="aspect-[1] object-contain w-[120px]"
              />
            </div>
          </div>
        </div>

        <div className="relative z-10 w-[303px] max-w-full -mt-6">
          <h3 className="text-[#197B55] text-2xl font-bold mr-[21px] max-md:mr-2.5">
            Advancing Inclusion & Resilience
          </h3>
          <p className="text-[rgba(37,37,37,1)] text-lg font-normal mt-6">
            Fostering equitable growth, social inclusion, and long-term community resilience
          </p>
        </div>

        <div className="relative w-[319px] max-w-full -mt-44">
          <h3 className="text-[#197B55] text-center text-2xl font-bold max-md:ml-2">
            Turning Goals into Action
          </h3>
          <p className="text-[rgba(37,37,37,1)] text-lg font-normal mt-[25px] max-md:mr-2.5">
            Translating national and global agendas — including NEP, SDGs, and ESG commitments — into real, measurable outcomes for people and communities
          </p>
        </div>
      </div>
    </section>
  );
};
