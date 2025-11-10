import React from 'react';
import { Button } from './Button';

export const Header: React.FC = () => {
  return (
    <header className="bg-white w-full pt-[34px] pb-14 px-[34px] max-md:px-5">
      <nav className="flex w-full max-w-[1149px] items-stretch gap-[34px] text-base text-[rgba(37,37,37,1)] font-normal text-center flex-wrap max-md:max-w-full mx-auto">
        <img
          src="https://api.builder.io/api/v1/image/assets/73777318be5b46ba9d2da78deef1571f/bf04eb0b9c430ee5f525d31b5f1eea4f83e18d68?placeholderIfAbsent=true"
          alt="Edolution Logo"
          className="aspect-[4.03] object-contain w-[230px] shrink-0 max-w-full"
        />
        <div className="justify-center items-center flex min-h-14 gap-[40px_44px] flex-wrap grow shrink basis-auto bg-[#E9F1E1] px-[34px] py-2.5 rounded-[100px] max-md:max-w-full max-md:px-5">
          <div className="justify-center items-center self-stretch flex gap-2.5 text-white font-semibold whitespace-nowrap bg-[#197B55] my-auto px-6 py-1.5 rounded-[50px] max-md:px-5">
            <div className="self-stretch my-auto">Home</div>
          </div>
          <button className="self-stretch my-auto hover:text-[#197B55] transition-colors">
            Our Offerings
          </button>
          <button className="self-stretch my-auto hover:text-[#197B55] transition-colors">
            Clients & Partners
          </button>
          <button className="self-stretch my-auto hover:text-[#197B55] transition-colors">
            Projects
          </button>
          <button className="self-stretch flex items-center gap-2 whitespace-nowrap my-auto hover:text-[#197B55] transition-colors">
            <span className="self-stretch my-auto">Products</span>
            <img
              src="https://api.builder.io/api/v1/image/assets/73777318be5b46ba9d2da78deef1571f/2de6672b3db3c3b09c928963ed5baa4a4dce1e94?placeholderIfAbsent=true"
              alt="Dropdown arrow"
              className="aspect-[1] object-contain w-5 self-stretch shrink-0 my-auto"
            />
          </button>
          <button className="self-stretch my-auto hover:text-[#197B55] transition-colors">
            Contact Us
          </button>
        </div>
      </nav>
    </header>
  );
};
