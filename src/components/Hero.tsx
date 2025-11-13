import React from 'react';
import { Button } from './Button';
import { Link } from 'react-router-dom';

export const Hero: React.FC = () => {
  return (
    <section className="flex w-full flex-col items-center text-center mt-12 px-4 max-md:mt-10">
      <h1 className="text-[rgba(37,37,37,1)] text-3xl md:text-[44px] font-semibold max-w-full text-center">
  Driving Social Progress with Pathways to
  {/* Second row: flex, center content */}
  <span className="block mt-6 w-full flex justify-center items-end gap-2 md:gap-4">
    <span className="font-bold text-[#197B55]">Learning</span>
    <span className="font-bold text-[rgba(37,37,37,1)]">&amp;</span>
    {/* Livelihood with SVG absolutely positioned over "d" */}
    <span className="relative inline-block">
      <span className="font-bold text-[#197B55]">Livelihood</span>
      {/* SVG placed at top right, over the 'd' */}
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
  </span>
</h1>

      {/* Tag Line Row */}
      <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-[rgba(109,109,109,1)] font-medium mt-8 max-md:gap-3">
        <div className="flex items-center gap-2">
          <img
            src="https://api.builder.io/api/v1/image/assets/73777318be5b46ba9d2da78deef1571f/b51e75920ac86fddc8b0f5f58488eaf764020ec4?placeholderIfAbsent=true"
            alt="Quality Learning icon"
            className="aspect-[1] object-contain w-6"
          />
          <span>Quality Learning</span>
        </div>
        <div className="flex items-center gap-2">
          <img
            src="https://api.builder.io/api/v1/image/assets/73777318be5b46ba9d2da78deef1571f/15ea1532aeacb6690a6c57d44e93a1fd29b587b0?placeholderIfAbsent=true"
            alt="Skill Development icon"
            className="aspect-[1] object-contain w-6"
          />
          <span>Skill Development</span>
        </div>
        <div className="flex items-center gap-2">
          <img
            src="https://api.builder.io/api/v1/image/assets/73777318be5b46ba9d2da78deef1571f/ae4cef8ff0ab492f598a6c93a20d2cb5ac2d3966?placeholderIfAbsent=true"
            alt="Sustainable Livelihoods icon"
            className="aspect-[1] object-contain w-6"
          />
          <span>Sustainable Livelihoods</span>
        </div>
      </div>

     <Link
  to="/offerings"
  className="mt-8 mb-2 max-md:mt-6 rounded-full inline-flex items-center justify-between gap-4 px-8 py-2 bg-[#197B55] text-white font-semibold text-lg hover:bg-[#F4B350] hover:text-[#2C2C2C] transition-all duration-300 group"
>
  <span>Explore Our Offerings</span>
  <div className="flex items-center justify-center w-8 h-8 bg-white rounded-full transition-all duration-300 group-hover:bg-[#2C2C2C] group-hover:translate-x-1">
    <svg 
      className="w-5 h-4 text-[#197B55] group-hover:text-[#F4B350] transition-colors duration-300" 
      fill="none" 
      stroke="currentColor" 
      viewBox="0 0 24 24"
    >
      <path 
        strokeLinecap="round" 
        strokeLinejoin="round" 
        strokeWidth={2} 
        d="M9 5l7 7-7 7" 
      />
    </svg>
  </div>
</Link>

      

      {/* Main Visual Section */}
      <div className="w-full max-w-[1147px] mt-10">
        <div className="flex flex-col md:flex-row gap-5">
          
          {/* Left Profile Column */}
          <div className="flex flex-row md:flex-col gap-5 md:w-[21%] w-full items-center justify-center md:justify-start">
            <img
              src="https://api.builder.io/api/v1/image/assets/73777318be5b46ba9d2da78deef1571f/8fec50f2bba293bf6302cefdf8f6f8155e138fbf?placeholderIfAbsent=true"
              alt="Team member"
              className="w-20 h-20 md:ml-[90px] shadow-md rounded-full"
            />
            <img
              src="https://api.builder.io/api/v1/image/assets/73777318be5b46ba9d2da78deef1571f/6c8e0e0efa1713e9f268f8b9b7ed6c3f5680ed2d?placeholderIfAbsent=true"
              alt="Team member"
              className="w-20 h-20 md:mr-[120px] md:mt-[90px] shadow-md rounded-full"
            />
            <div className="flex items-center md:ml-[120px] justify-center bg-[#E9F1E1] w-20 h-20 rounded-full mt-0 md:mt-20">
              <img
                src="https://api.builder.io/api/v1/image/assets/73777318be5b46ba9d2da78deef1571f/bf35c2c3f8cc133822fa5192c42633b17e0c6d55?placeholderIfAbsent=true"
                alt="Team member"
                className="w-full h-full object-contain rounded-full"
              />
            </div>
          </div>

          {/* Center Main image */}
          <div className="relative flex-1 md:w-[58%] w-full flex items-center justify-center min-h-[300px] md:min-h-[583px] px-5 md:px-20 py-20 md:py-[255px]">
            <img
              src="https://api.builder.io/api/v1/image/assets/73777318be5b46ba9d2da78deef1571f/1ef4c3b7e8f4ab4e4b133fa0bffb53f71bd41f05?placeholderIfAbsent=true"
              alt="Main hero background"
              className="absolute inset-0 w-full h-full object-cover rounded-xl"
            />
           
          </div>

          {/* Right Profile Column */}
          <div className="flex flex-row  md:flex-col gap-5 md:w-[21%] w-full items-center justify-center md:justify-start">
            <img
              src="https://api.builder.io/api/v1/image/assets/73777318be5b46ba9d2da78deef1571f/6cbf3606db603dbc9e5783b3d24922f8d6c9f629?placeholderIfAbsent=true"
              alt="Team member"
              className="w-20 h-20 shadow-md rounded-full"
            />
            <img
              src="https://api.builder.io/api/v1/image/assets/73777318be5b46ba9d2da78deef1571f/98b18371cfa1f05733a269e07e47da9dbd20f611?placeholderIfAbsent=true"
              alt="Team member"
              className="w-20 h-20 md:mt-[120px] md:ml-[120px] shadow-md rounded-full"
            />
            <img
              src="https://api.builder.io/api/v1/image/assets/73777318be5b46ba9d2da78deef1571f/a6289a563517a3ed9610ffc1966491c196f35279?placeholderIfAbsent=true"
              alt="Team member"
              className="w-20 h-20 md:mt-[140px] md:mr-[120px] shadow-md rounded-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
