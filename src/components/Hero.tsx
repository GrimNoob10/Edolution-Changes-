import React from 'react';
import { Button } from './Button';

export const Hero: React.FC = () => {
  return (
    <section className="flex w-full flex-col items-center text-center mt-[60px] max-md:max-w-full max-md:mt-10">
      <h1 className="text-[rgba(37,37,37,1)] text-[44px] font-semibold max-md:max-w-full">
        Driving Social Progress with Pathways to{" "}
        <span className="font-bold text-[#197B55]">Learning</span>{" "}
        &{" "}
        <span className="font-bold text-[#197B55]">Livelihood</span>
      </h1>
      
      <div className="flex items-center gap-[40px_46px] text-sm text-[rgba(109,109,109,1)] font-medium flex-wrap mt-3.5 max-md:max-w-full">
        <div className="self-stretch flex items-center gap-3 justify-center my-auto">
          <img
            src="https://api.builder.io/api/v1/image/assets/73777318be5b46ba9d2da78deef1571f/b51e75920ac86fddc8b0f5f58488eaf764020ec4?placeholderIfAbsent=true"
            alt="Quality Learning icon"
            className="aspect-[1] object-contain w-[26px] self-stretch shrink-0 my-auto"
          />
          <span className="self-stretch my-auto">Quality Learning</span>
        </div>
        <div className="self-stretch flex items-center gap-3 justify-center my-auto">
          <img
            src="https://api.builder.io/api/v1/image/assets/73777318be5b46ba9d2da78deef1571f/15ea1532aeacb6690a6c57d44e93a1fd29b587b0?placeholderIfAbsent=true"
            alt="Skill Development icon"
            className="aspect-[1] object-contain w-[26px] self-stretch shrink-0 my-auto"
          />
          <span className="self-stretch my-auto">Skill Development</span>
        </div>
        <div className="self-stretch flex items-center gap-3 justify-center my-auto">
          <img
            src="https://api.builder.io/api/v1/image/assets/73777318be5b46ba9d2da78deef1571f/ae4cef8ff0ab492f598a6c93a20d2cb5ac2d3966?placeholderIfAbsent=true"
            alt="Sustainable Livelihoods icon"
            className="aspect-[1] object-contain w-[26px] self-stretch shrink-0 my-auto"
          />
          <span className="self-stretch my-auto">Sustainable Livelihoods</span>
        </div>
      </div>

      <Button className="mt-[34px]">
        <span>Explore our Offerings</span>
        <img
          src="https://api.builder.io/api/v1/image/assets/73777318be5b46ba9d2da78deef1571f/0435b3032607cb3d4e9ca2c6b93c6877fc5f2b28?placeholderIfAbsent=true"
          alt="Arrow icon"
          className="aspect-[1] object-contain w-6 self-stretch shrink-0 my-auto"
        />
      </Button>

      <div className="self-center w-full max-w-[1147px] mt-[41px] max-md:max-w-full max-md:mt-10">
        <div className="gap-5 flex max-md:flex-col max-md:items-stretch">
          <div className="w-[21%] max-md:w-full max-md:ml-0">
            <div className="flex flex-col mt-[18px] max-md:mt-10">
              <img
                src="https://api.builder.io/api/v1/image/assets/73777318be5b46ba9d2da78deef1571f/8fec50f2bba293bf6302cefdf8f6f8155e138fbf?placeholderIfAbsent=true"
                alt="Team member"
                className="aspect-[1] object-contain w-[85px] shadow-[0px_6px_18px_rgba(0,0,0,0.06)] mr-[26px] rounded-[50%] max-md:mr-2.5"
              />
              <img
                src="https://api.builder.io/api/v1/image/assets/73777318be5b46ba9d2da78deef1571f/6c8e0e0efa1713e9f268f8b9b7ed6c3f5680ed2d?placeholderIfAbsent=true"
                alt="Team member"
                className="aspect-[1] object-contain w-[84px] mt-[93px] max-md:mt-10"
              />
              <div className="bg-[#E9F1E1] flex w-[85px] flex-col items-center h-[85px] fill-[#E9F1E1] mt-[81px] rounded-[50%] max-md:mt-10">
                <img
                  src="https://api.builder.io/api/v1/image/assets/73777318be5b46ba9d2da78deef1571f/bf35c2c3f8cc133822fa5192c42633b17e0c6d55?placeholderIfAbsent=true"
                  alt="Team member"
                  className="aspect-[1] object-contain w-full shadow-[0px_6px_18px_rgba(0,0,0,0.06)] rounded-[50%]"
                />
              </div>
            </div>
          </div>
          <div className="w-[79%] ml-5 max-md:w-full max-md:ml-0">
            <div className="grow max-md:max-w-full max-md:mt-10">
              <div className="gap-5 flex max-md:flex-col max-md:items-stretch">
                <div className="w-9/12 max-md:w-full max-md:ml-0">
                  <div className="flex flex-col relative min-h-[583px] grow items-center justify-center px-20 py-[255px] rounded-[0px_0px_0px_0px] max-md:max-w-full max-md:mt-[22px] max-md:px-5 max-md:py-[100px]">
                    <img
                      src="https://api.builder.io/api/v1/image/assets/73777318be5b46ba9d2da78deef1571f/1ef4c3b7e8f4ab4e4b133fa0bffb53f71bd41f05?placeholderIfAbsent=true"
                      alt="Main hero background"
                      className="absolute h-full w-full object-cover inset-0"
                    />
                    <div className="relative bg-white flex w-[73px] shrink-0 h-[73px] rounded-[50%]" />
                  </div>
                </div>
                <div className="w-3/12 ml-5 max-md:w-full max-md:ml-0">
                  <div className="mt-[18px] max-md:mt-10">
                    <div className="flex flex-col pl-[42px] max-md:pl-5">
                      <img
                        src="https://api.builder.io/api/v1/image/assets/73777318be5b46ba9d2da78deef1571f/6cbf3606db603dbc9e5783b3d24922f8d6c9f629?placeholderIfAbsent=true"
                        alt="Team member"
                        className="aspect-[1] object-contain w-[85px] shadow-[0px_6px_18px_rgba(0,0,0,0.06)] self-center rounded-[50%]"
                      />
                      <img
                        src="https://api.builder.io/api/v1/image/assets/73777318be5b46ba9d2da78deef1571f/98b18371cfa1f05733a269e07e47da9dbd20f611?placeholderIfAbsent=true"
                        alt="Team member"
                        className="aspect-[1] object-contain w-[85px] shadow-[0px_6px_18px_rgba(0,0,0,0.06)] mt-[134px] rounded-[50%] max-md:mt-10"
                      />
                    </div>
                    <img
                      src="https://api.builder.io/api/v1/image/assets/73777318be5b46ba9d2da78deef1571f/a6289a563517a3ed9610ffc1966491c196f35279?placeholderIfAbsent=true"
                      alt="Team member"
                      className="aspect-[1] object-contain w-[85px] shadow-[0px_6px_18px_rgba(0,0,0,0.06)] mt-[135px] rounded-[50%] max-md:mt-10"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
