import React from 'react';

export const FocusAreas: React.FC = () => {
  return (
    <section className="bg-[rgba(248,252,255,1)] flex w-full flex-col items-stretch -mt-5 pt-[60px] pb-[39px] px-[62px] max-md:max-w-full max-md:px-5">
      <h2 className="text-[rgba(37,37,37,1)] text-[40px] font-semibold text-center self-center">
        <span className="font-bold text-[#197B55]">Focus</span>{" "}
        Areas
      </h2>
      
      <div className="flex w-full max-w-[1252px] gap-[40px_100px] flex-wrap ml-8 mr-[31px] mt-9 max-md:max-w-full max-md:mr-2.5">
        <div className="justify-center items-center flex gap-3.5 flex-1 bg-[#E9F1E1] mt-1.5 px-4 py-2.5 rounded-[10px]">
          <div className="items-center self-stretch flex min-h-9 gap-2.5 w-9 h-9 bg-[#698E45] my-auto p-1.5 rounded-[18px]">
            <img
              src="https://api.builder.io/api/v1/image/assets/73777318be5b46ba9d2da78deef1571f/536619f8130ddd52bd8fb1b7c3e7cb679f48b13c?placeholderIfAbsent=true"
              alt="Education icon"
              className="aspect-[1] object-contain w-6 self-stretch my-auto"
            />
          </div>
          <span className="text-[#698E45] text-center text-[22px] font-semibold self-stretch my-auto">
            Education: Builds the foundation
          </span>
        </div>
        
        <div className="justify-center items-center flex gap-3.5 flex-1 bg-[#E9F1E1] px-4 py-2.5 rounded-[10px]">
          <div className="items-center self-stretch flex min-h-9 gap-2.5 w-9 h-9 bg-[#698E45] my-auto p-1.5 rounded-[18px]">
            <img
              src="https://api.builder.io/api/v1/image/assets/73777318be5b46ba9d2da78deef1571f/88e67868cedbbc3f06bc5c51440c6ea50925460d?placeholderIfAbsent=true"
              alt="Skilling icon"
              className="aspect-[1] object-contain w-6 self-stretch my-auto"
            />
          </div>
          <span className="text-[#698E45] text-center text-[22px] font-semibold self-stretch my-auto">
            Skilling: Creates the Future
          </span>
        </div>
      </div>
      
      <img
        src="https://api.builder.io/api/v1/image/assets/73777318be5b46ba9d2da78deef1571f/45732455903300f08085f88a77e5abacc5aa5af2?placeholderIfAbsent=true"
        alt="Focus areas illustration"
        className="aspect-[3.3] object-contain w-full max-w-[1253px] mt-[30px] mx-[31px] max-md:max-w-full max-md:mr-2.5"
      />
      
      <p className="text-[rgba(37,37,37,1)] text-xl font-normal text-center mt-[75px] max-md:max-w-full max-md:mt-10">
        We believe the future lies in synergy — where learning and skilling become one continuous path, empowering individuals from classrooms to careers.
        <br />
        We offer a suite of products and services across both these areas, enabling institutions and governments to design, implement, and measure programs that create real impact.
      </p>
    </section>
  );
};
