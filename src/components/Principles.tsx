import React from 'react';
import { Button } from './Button';

export const Principles: React.FC = () => {
  return (
    <section className="w-full px-[34px] max-md:px-5">
      <h2 className="text-[rgba(37,37,37,1)] text-[40px] font-semibold text-center mt-[82px] max-md:mt-10">
        Our{" "}
        <span className="font-bold text-[#197B55]">Principles</span>
      </h2>
      
      <div className="w-full max-w-[1372px] mx-auto mt-[57px] max-md:mt-10">
        <div className="flex gap-5 max-md:flex-col">
          {/* Left Column - Access Card */}
          <div className="w-[30%] max-md:w-full">
            <div className="shadow-[0_6px_18px_0_rgba(0,0,0,0.25)] bg-[#E9F1E1] px-[17px] py-[21px] rounded-[10px]">
              <div className="justify-center items-center inline-flex gap-2.5 text-lg text-white font-semibold bg-[#698E45] px-2.5 py-1.5 rounded-md">
                <span>Access</span>
              </div>
              <p className="text-black text-base font-normal mt-2.5">
                Build access and opportunity for every learner and worker
              </p>
              <img
                src="https://api.builder.io/api/v1/image/assets/73777318be5b46ba9d2da78deef1571f/abfb22608c96eff732600ac18d31c229860c6081?placeholderIfAbsent=true"
                alt="Access principle illustration"
                className="aspect-[1.34] object-cover w-full mt-5 rounded-[10px]"
              />
            </div>
          </div>

          {/* Middle Column - Large Image */}
          <div className="w-[40%] max-md:w-full max-md:mt-5">
            <img
              src="https://api.builder.io/api/v1/image/assets/73777318be5b46ba9d2da78deef1571f/bda363f4f7883e74b101bc68f0f73674705a43db?placeholderIfAbsent=true"
              alt="Principles main illustration"
              className="aspect-[1.71] object-cover w-full h-full shadow-[0_6px_18px_0_rgba(0,0,0,0.25)] rounded-[10px]"
            />
          </div>

          {/* Right Column - Side Image */}
          <div className="w-[30%] max-md:w-full max-md:mt-5">
            <img
              src="https://api.builder.io/api/v1/image/assets/73777318be5b46ba9d2da78deef1571f/f346f18b540edfe20ca51729b0973ca68ad11479?placeholderIfAbsent=true"
              alt="Principles side illustration"
              className="aspect-[1.45] object-cover w-full h-full shadow-[0_6px_18px_0_rgba(0,0,0,0.25)] rounded-[10px]"
            />
          </div>
        </div>
      </div>
      
      <div className="flex justify-center mt-[34px] mb-[34px]">
        <Button>
          <span>Explore our Offerings</span>
          <img
            src="https://api.builder.io/api/v1/image/assets/73777318be5b46ba9d2da78deef1571f/617fa780eac41fd34f791096f662072864bfa978?placeholderIfAbsent=true"
            alt="Arrow icon"
            className="aspect-[1] object-contain w-6 self-stretch shrink-0 my-auto"
          />
        </Button>
      </div>
    </section>
  );
};
