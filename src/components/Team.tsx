import React from 'react';
import { TeamMemberCard } from './TeamMemberCard';

export const Team: React.FC = () => {
  const teamMembers = [
    {
      name: "Lika Jain",
      role: "Founder & Director",
      image: "https://api.builder.io/api/v1/image/assets/73777318be5b46ba9d2da78deef1571f/96cc3c5910d96f9e8fb0782863903ad37a11cc1e?placeholderIfAbsent=true",
      description: "Founder of Edolution and a seasoned finance and strategy leader, recognized among India's Top 100 CFOs in 2020 and 2021. With over two decades of cross-industry experience across telecom, media, e-commerce, and education, Lika has been pivotal in shaping Edolution's growth journey. She implements robust financial controls, governance frameworks, and profitability structures that enable sustainable scale. Combining cross-sector expertise with a strong commitment to ESG principles, she drives Edolution's growth with financial discipline, transparency, and measurable social impact."
    },
    {
      name: "Pranali Jhalani",
      role: "Founder & Director",
      image: "https://api.builder.io/api/v1/image/assets/73777318be5b46ba9d2da78deef1571f/014b7bfddd72353a62d4fd43ae941fc48b228968?placeholderIfAbsent=true",
      description: "Pranali ensures Edolution upholds strong financial controls and compliance frameworks, forming the foundation for sustainable and transparent growth. She leads the company's ESG alignment, embedding sustainability and accountability across all operations. Driving Edolution's upcoming impact publications, she showcases measurable outcomes that reinforce its position as an impact-driven enterprise. Her focus on governance, financial discipline, and responsible scaling underscores her commitment to maximizing both social value and investor confidence."
    },
    {
      name: "Ashish Jhalani",
      role: "Chief Operating Officer",
      image: "https://api.builder.io/api/v1/image/assets/73777318be5b46ba9d2da78deef1571f/e0c435b3071e978e6ecccc99652d8451be6e568c?placeholderIfAbsent=true",
      description: "A global executive and investor with deep expertise in government and public-sector strategies, Ashish has led organizations through complex, multi-stakeholder environments—balancing long-cycle public sector sales with agile execution and measurable results. As COO, he leverages his global experience, trusted relationships, and ESG-focused approach to align operations with Edolution's mission of responsible growth. Beyond his leadership role, he provides hands-on guidance in execution, partnerships, and ecosystem development to deliver both financial returns and social impact."
    }
  ];

  return (
    <section className="bg-[rgba(248,252,255,1)] flex w-full flex-col items-center mt-[42px] px-[34px] py-[54px] max-md:max-w-full max-md:mt-10 max-md:px-5">
      <h2 className="text-[rgba(37,37,37,1)] text-[40px] font-semibold text-center">
        The{" "}
        <span className="font-bold text-[#197B55]">Team</span>
      </h2>
      
      <p className="text-black text-xl font-normal text-center mt-[30px] max-md:max-w-full">
        We are a multi-disciplinary team of practitioners, strategists, and changemakers with decades of experience across education, governance, finance, and technology. Together, we combine deep sector expertise with operational excellence — designing and delivering programs that scale with integrity and purpose
      </p>
      
      <div className="self-stretch mt-[50px] max-md:max-w-full max-md:mt-10">
        <div className="gap-5 flex max-md:flex-col max-md:items-stretch">
          {teamMembers.map((member, index) => (
            <div key={member.name} className="w-[33%] max-md:w-full max-md:ml-0">
              <TeamMemberCard {...member} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
