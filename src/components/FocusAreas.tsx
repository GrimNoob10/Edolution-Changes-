import React from 'react';

export const FocusAreas: React.FC = () => {
  return (
    <section className="bg-[rgba(248,252,255,1)] flex w-full flex-col items-stretch -mt-5 pt-14 pb-10 px-4 md:px-[62px]">
      <h2 className="text-[rgba(37,37,37,1)] text-3xl md:text-[40px] font-semibold text-center">
        <span className="font-bold text-[#197B55]">Focus</span> Areas
      </h2>
      
      <div className="flex flex-col md:flex-row w-full max-w-[1252px] mx-auto gap-5 md:gap-[40px_100px] flex-wrap mt-7 md:ml-8 md:mr-[31px]">
        {/* Education */}
        <div className="flex-1 flex justify-center items-center gap-3.5 bg-[#E9F1E1] mt-1.5 px-4 py-2.5 rounded-[10px]">
          <div className="flex items-center justify-center min-h-9 w-9 h-9 bg-[#698E45] p-1.5 rounded-[18px]">
            <img
              src="https://api.builder.io/api/v1/image/assets/73777318be5b46ba9d2da78deef1571f/536619f8130ddd52bd8fb1b7c3e7cb679f48b13c?placeholderIfAbsent=true"
              alt="Education icon"
              className="aspect-square object-contain w-6"
            />
          </div>
          <span className="text-[#698E45] text-center text-lg md:text-[22px] font-semibold">
            Education: Builds the foundation
          </span>
        </div>
        {/* Skilling */}
        <div className="flex-1 flex justify-center items-center gap-3.5 bg-[#E9F1E1] px-4 py-2.5 rounded-[10px] mt-4 md:mt-0">
          <div className="flex items-center justify-center min-h-9 w-9 h-9 bg-[#698E45] p-1.5 rounded-[18px]">
            <img
              src="https://api.builder.io/api/v1/image/assets/73777318be5b46ba9d2da78deef1571f/88e67868cedbbc3f06bc5c51440c6ea50925460d?placeholderIfAbsent=true"
              alt="Skilling icon"
              className="aspect-square object-contain w-6"
            />
          </div>
          <span className="text-[#698E45] text-center text-lg md:text-[22px] font-semibold">
            Skilling: Creates the Future
          </span>
        </div>
      </div>
      
      <img
        src="https://api.builder.io/api/v1/image/assets/73777318be5b46ba9d2da78deef1571f/45732455903300f08085f88a77e5abacc5aa5af2?placeholderIfAbsent=true"
        alt="Focus areas illustration"
        className="aspect-[3.3] object-contain w-full max-w-[1253px] mt-7 md:mt-[30px] mx-auto md:mx-[31px]" // mx-auto centers image on mobile
      />
      
      <p className="text-[rgba(37,37,37,1)] text-base md:text-xl font-normal text-center mt-10 md:mt-[75px] mx-auto max-w-[650px] px-2">
        We believe the future lies in synergy — where learning and skilling become one continuous path, empowering individuals from classrooms to careers.
        <br />
        We offer a suite of products and services across both these areas, enabling institutions and governments to design, implement, and measure programs that create real impact.
      </p>
    </section>
  );
};
