import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="w-full bg-[#197B55] mt-2.5 px-[34px] py-[37px] max-md:max-w-full max-md:px-5">
      <div className="flex w-full items-stretch gap-[40px_73px] flex-wrap max-md:max-w-full max-md:mr-1">
        <div className="flex gap-[40px_110px] grow shrink basis-auto max-md:max-w-full">
          <div className="min-w-60 text-white w-[419px]">
            <h3 className="text-white text-[22px] font-semibold leading-none">
              About Edolution
            </h3>
            <p className="text-white text-base font-normal leading-5 mt-4">
              Edolution India is committed to advancing education, skilling, and livelihoods aligned with India's 2047 vision
            </p>
          </div>
          
          <nav className="text-white font-semibold w-[143px]">
            <h3 className="text-white text-[22px] leading-none">Quick Links</h3>
            <div className="flex w-full flex-col items-stretch text-base mt-4">
              <a href="#" className="text-white hover:text-[#E9F1E1] transition-colors">Home</a>
              <a href="#" className="text-white mt-5 hover:text-[#E9F1E1] transition-colors">Our Offerings</a>
              <a href="#" className="text-white mt-5 hover:text-[#E9F1E1] transition-colors">Clients & Partners</a>
              <a href="#" className="text-white mt-5 hover:text-[#E9F1E1] transition-colors">Projects</a>
              <div className="flex gap-2 whitespace-nowrap mt-5">
                <a href="#" className="text-white hover:text-[#E9F1E1] transition-colors">Products</a>
                <img
                  src="https://api.builder.io/api/v1/image/assets/73777318be5b46ba9d2da78deef1571f/ff793328625412a55a8736d6c6cc416ef0cffa38?placeholderIfAbsent=true"
                  alt="Dropdown arrow"
                  className="aspect-[1] object-contain w-5 shrink-0"
                />
              </div>
              <a href="#" className="text-white mt-5 hover:text-[#E9F1E1] transition-colors">Contact Us</a>
            </div>
          </nav>
          
          <div className="min-w-60 font-semibold w-[475px] max-md:max-w-full">
            <h3 className="text-white text-[22px] leading-none max-md:max-w-full">Contact</h3>
            <div className="flex w-[274px] max-w-full flex-col items-stretch text-base text-white mt-4">
              <div className="flex items-center gap-3 whitespace-nowrap">
                <img
                  src="https://api.builder.io/api/v1/image/assets/73777318be5b46ba9d2da78deef1571f/b2a35e4855bcb9cd615fb0b0447e0d0d415a4844?placeholderIfAbsent=true"
                  alt="Email icon"
                  className="aspect-[1] object-contain w-[34px] self-stretch shrink-0 my-auto rounded-[100px]"
                />
                <a href="mailto:info@edolutionindia.com" className="self-stretch my-auto hover:text-[#E9F1E1] transition-colors">
                  info@edolutionindia.com
                </a>
              </div>
              <div className="w-full max-w-[274px] mt-5">
                <div className="flex gap-3">
                  <img
                    src="https://api.builder.io/api/v1/image/assets/73777318be5b46ba9d2da78deef1571f/157cf1b6557b2a2f228c80425b6c4439488f7caa?placeholderIfAbsent=true"
                    alt="Location icon"
                    className="aspect-[1] object-contain w-[34px] shrink-0 rounded-[100px]"
                  />
                  <address className="w-[444px] max-md:max-w-full not-italic">
                    714A, B WING, 7th Floor, Kanakia Wall Street, Chakala, Andheri-Kurla Road, Andheri East, Mumbai - 400093
                  </address>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="flex flex-col items-stretch text-sm text-white font-normal mt-[49px] max-md:mt-10">
          <button 
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="aspect-[1] object-contain w-12 self-center hover:opacity-80 transition-opacity"
            aria-label="Back to top"
          >
            <img
              src="https://api.builder.io/api/v1/image/assets/73777318be5b46ba9d2da78deef1571f/a5c5c00770e10046e1997953453981d5686fe089?placeholderIfAbsent=true"
              alt="Back to top arrow"
              className="w-full h-full"
            />
          </button>
          <span className="text-white opacity-75 mt-[18px]">Back to Top</span>
        </div>
      </div>
      
      <div className="border w-[1368px] shrink-0 max-w-full h-px mt-[47px] border-white border-solid max-md:mr-0.5 max-md:mt-10" />
      
      <div className="flex items-stretch gap-5 text-base text-white font-normal flex-wrap justify-between mt-7 max-md:max-w-full">
        <img
          src="https://api.builder.io/api/v1/image/assets/73777318be5b46ba9d2da78deef1571f/0ab0d320eeeea411dc6a92a852c3adadfddf3dd2?placeholderIfAbsent=true"
          alt="Edolution logo"
          className="aspect-[4.03] object-contain w-[230px] shrink-0 max-w-full"
        />
        <p className="text-white my-auto">© 2025 EDOLUTION PRIVATE LIMITED</p>
      </div>
    </footer>
  );
};
