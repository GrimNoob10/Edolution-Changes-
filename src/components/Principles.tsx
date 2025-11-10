import React from 'react';
import { Button } from './Button';

export const Principles: React.FC = () => {
  return (
    <section className="w-full">
      <h2 className="text-[rgba(37,37,37,1)] text-[40px] font-semibold text-center self-center mt-[82px] max-md:mt-10">
        Our{" "}
        <span className="font-bold text-[#197B55]">Principles</span>
      </h2>
      
      <div className="self-center w-full max-w-[1372px] mt-[57px] max-md:max-w-full max-md:mt-10">
        <div className="gap-5 flex max-md:flex-col max-md:items-stretch">
          <div className="w-[61%] max-md:w-full max-md:ml-0">
            <div className="z-10 mr-[-304px] w-full max-md:max-w-full">
              <img
                src="https://api.builder.io/api/v1/image/assets/73777318be5b46ba9d2da78deef1571f/5c4246c494ee97f2002e049367c8dbfc3f8da201?placeholderIfAbsent=true"
                alt="Principles decoration"
                className="aspect-[1.18] object-contain w-[33px] fill-[#FAB029] ml-[306px] max-md:ml-2.5"
              />
              <div className="mt-[17px] max-md:max-w-full">
                <div className="gap-5 flex max-md:flex-col max-md:items-stretch">
                  <article className="w-[30%] max-md:w-full max-md:ml-0">
                    <div className="max-md:mt-[13px]">
                      <div className="shadow-[0_6px_18px_0_rgba(0,0,0,0.25)] flex flex-col overflow-hidden items-stretch justify-center bg-[#E9F1E1] px-[17px] py-[21px] rounded-[10px]">
                        <div className="min-h-[328px]">
                          <div className="w-[249px] max-w-full">
                            <div className="justify-center items-center flex w-[155px] max-w-full gap-2.5 text-lg text-white font-semibold whitespace-nowrap text-center bg-[#698E45] px-2.5 py-1.5 rounded-md">
                              <span className="self-stretch my-auto">Access</span>
                            </div>
                            <p className="text-black text-base font-normal mt-2.5">
                              Build access and opportunity for every learner and worker
                            </p>
                          </div>
                          <img
                            src="https://api.builder.io/api/v1/image/assets/73777318be5b46ba9d2da78deef1571f/abfb22608c96eff732600ac18d31c229860c6081?placeholderIfAbsent=true"
                            alt="Access principle illustration"
                            className="aspect-[1.34] object-contain w-[270px] max-w-full mt-5 rounded-[10px]"
                          />
                        </div>
                      </div>
                    </div>
                  </article>
                  <div className="w-[70%] ml-5 max-md:w-full max-md:ml-0">
                    <img
                      src="https://api.builder.io/api/v1/image/assets/73777318be5b46ba9d2da78deef1571f/bda363f4f7883e74b101bc68f0f73674705a43db?placeholderIfAbsent=true"
                      alt="Principles main illustration"
                      className="aspect-[1.71] object-contain w-full shadow-[0_6px_18px_0_rgba(0,0,0,0.25)] grow max-md:max-w-full max-md:mt-[13px]"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-[39%] ml-5 max-md:w-full max-md:ml-0">
            <img
              src="https://api.builder.io/api/v1/image/assets/73777318be5b46ba9d2da78deef1571f/f346f18b540edfe20ca51729b0973ca68ad11479?placeholderIfAbsent=true"
              alt="Principles side illustration"
              className="aspect-[1.45] object-contain w-full shadow-[0_6px_18px_0_rgba(0,0,0,0.25)] grow mt-[15px] max-md:max-w-full"
            />
          </div>
        </div>
      </div>
      
      <div className="flex justify-center mt-[34px]">
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
