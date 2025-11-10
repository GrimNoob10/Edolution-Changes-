import React from 'react';

export const Mission: React.FC = () => {
  const missionItems = [
    {
      title: "Expanding Opportunities",
      description: "Enhancing access to education, skilling, and livelihood pathways for all",
      icon: "https://api.builder.io/api/v1/image/assets/73777318be5b46ba9d2da78deef1571f/6722fbf8e2af8cc6eb9f0a958a688f4a99dfa503?placeholderIfAbsent=true",
    },
    {
      title: "Partnering for Impact",
      description: "Collaborating with government bodies, funders, and communities to drive collective progress",
      icon: "https://api.builder.io/api/v1/image/assets/73777318be5b46ba9d2da78deef1571f/87ffced2cf8f20046e5ac6aebcce28afeb33078e?placeholderIfAbsent=true",
    },
    {
      title: "Advancing Inclusion & Resilience",
      description: "Fostering equitable growth, social inclusion, and long-term community resilience",
      icon: "https://api.builder.io/api/v1/image/assets/73777318be5b46ba9d2da78deef1571f/d46b57b26c91e9e64b74e5028caf27b298192d39?placeholderIfAbsent=true",
    },
    {
      title: "Turning Goals into Action",
      description: "Translating national and global agendas — including NEP, SDGs, and ESG commitments — into real, measurable outcomes for people and communities",
      icon: "https://api.builder.io/api/v1/image/assets/73777318be5b46ba9d2da78deef1571f/83896b3e9cdcb41c01494f9703762f3610146e67?placeholderIfAbsent=true",
    },
  ];

  return (
    <section className="bg-white w-full py-[54px] px-[34px] max-md:px-5 max-md:py-10">
      <div className="relative w-full max-w-6xl mx-auto">
        <img
          src="https://api.builder.io/api/v1/image/assets/73777318be5b46ba9d2da78deef1571f/2dd6db4b87f8d6e845d9fd6d567767e8f80ac732?placeholderIfAbsent=true"
          alt="Mission background"
          className="absolute top-0 left-1/2 -translate-x-1/2 w-[120%] h-full object-cover opacity-40 pointer-events-none"
        />
        
        <h2 className="relative text-[rgba(37,37,37,1)] text-[40px] font-semibold text-center mb-[53px] max-md:mb-10">
          Our{" "}
          <span className="font-bold text-[#197B55]">Mission</span>
        </h2>

        <div className="relative grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 max-w-5xl mx-auto">
          {missionItems.map((item, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              <div className="shadow-[0_6px_18px_0_rgba(0,0,0,0.10)] bg-[#FEF0D7] w-[170px] h-[170px] p-[26px] rounded-[10px] mb-6">
                <div className="bg-[#698E45] flex items-center justify-center w-full h-full rounded-[10px]">
                  <img
                    src={item.icon}
                    alt={`${item.title} icon`}
                    className="aspect-[1] object-contain w-[100px]"
                  />
                </div>
              </div>
              
              <h3 className="text-[#197B55] text-2xl font-bold mb-4 max-w-[320px]">
                {item.title}
              </h3>
              <p className="text-[rgba(37,37,37,1)] text-lg font-normal max-w-[320px]">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
