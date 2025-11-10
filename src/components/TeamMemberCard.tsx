import React from 'react';

interface TeamMemberCardProps {
  name: string;
  role: string;
  image: string;
  description: string;
}

export const TeamMemberCard: React.FC<TeamMemberCardProps> = ({
  name,
  role,
  image,
  description
}) => {
  return (
    <article className="flex grow flex-col items-stretch w-full bg-[#E9F1E1] px-6 py-[27px] rounded-[10px] max-md:max-w-full max-md:mt-[21px] max-md:px-5">
      <div className="bg-white shadow-[0px_6px_18px_rgba(0,0,0,0.08)] self-center flex w-[161px] flex-col overflow-hidden items-center h-[161px] px-1 rounded-[100px]">
        <img
          src={image}
          alt={`${name} profile`}
          className="aspect-[0.95] object-contain w-full"
        />
      </div>
      
      <div className="w-full text-center mt-5">
        <h3 className="text-[#197B55] text-xl font-bold">{name}</h3>
        <div className="justify-center items-center rounded flex w-full gap-2.5 text-lg text-white font-semibold bg-[#698E45] mt-3 px-2.5 py-1.5">
          <span className="self-stretch my-auto">{role}</span>
        </div>
        <div className="border bg-[#698E45] min-h-0 w-full mt-3 border-[rgba(105,142,69,1)] border-solid" />
      </div>
      
      <p className="text-[rgba(37,37,37,1)] text-sm font-normal text-center mt-3.5 max-md:mx-[3px]">
        {description}
      </p>
    </article>
  );
};
