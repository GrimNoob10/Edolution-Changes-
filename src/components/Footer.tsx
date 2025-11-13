import React from "react";

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#197B55] w-full relative">
      {/* Back to Top Button - Positioned absolutely */}
      <div className="absolute right-6 md:right-6 lg:right-6 top-32 flex flex-col items-center gap-2">
        <button 
          onClick={scrollToTop}
          className="bg-white rounded-full w-14 h-14 flex items-center justify-center hover:bg-gray-50 transition-colors shadow-md"
          aria-label="Back to top"
        >
          <svg 
            className="w-6 h-6 text-[#2B8A67]" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
            strokeWidth={2}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 19V5m0 0l-7 7m7-7l7 7" />
          </svg>
        </button>
        <span className="text-white text-[13px] font-normal whitespace-nowrap">Back to Top</span>
      </div>

      <div className="px-6 md:px-12 lg:px-16 pt-12 pb-6">
        {/* Main Grid - 3 Columns */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-6 max-w-[1400px] mx-auto pb-10">
          
          {/* Column 1: About Edolution - Takes 3 columns */}
          <div className="md:col-span-4">
            <h3 className="text-white text-[22px] font-semibold mb-4 leading-tight">
              About Edolution
            </h3>
            <p className="text-white text-[15px] leading-[1.6] pr-2">
              Edolution India is committed to advancing education, skilling, and livelihoods aligned with India's 2047 vision
            </p>
          </div>

          {/* Column 2: Quick Links - Takes 3 columns */}
          <div className="md:col-span-2 md:ml-12 md:col-start-5">
            <h3 className="text-white text-[22px] font-semibold mb-5 leading-tight">
              Quick Links
            </h3>
            <ul className="text-white text-[15px] space-y-[14px]">
              <li><a href="#" className="hover:underline transition-all">Home</a></li>
              <li><a href="/offerings" className="hover:underline transition-all">Our Offerings</a></li>
              <li><a href=".clients" className="hover:underline transition-all">Clients & Partners</a></li>
              <li><a href="projects" className="hover:underline transition-all">Projects</a></li>
              <li className="relative group">
  <button className="flex items-center gap-2 hover:underline transition-all">
    Products
    <svg className="w-3 h-3 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
      <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
    </svg>
  </button>
  
  {/* Dropdown Menu */}
  <div className="absolute left-0 top-full mt-2 w-48 bg-white rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
    <ul className="py-2">
      <li>
        <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100 transition-colors">
          AI Powered
        </a>
      </li>
      <li>
        <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100 transition-colors">
          Skills Certification
        </a>
      </li>
      <li>
        <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100 transition-colors">
          Career Maps
        </a>
      </li>
    </ul>
  </div>
</li>
              <li><a href="/contact" className="hover:underline transition-all">Contact Us</a></li>
            </ul>
          </div>

           <div className="md:col-span-5 md:col-start-8">
            <h3 className="text-white text-[22px] font-semibold mb-6 leading-tight">
              Contact
            </h3>
            <div className="space-y-6">
              {/* Email */}
              <div className="flex items-center gap-3.5">
                <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center flex-shrink-0">
                  <svg width="20" height="20" fill="none" stroke="#2B8A67" strokeWidth="1.8" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                  </svg>
                </div>
                <a href="mailto:info@edolutionindia.com" className="text-white text-[16px] font-normal hover:underline transition-all">
                  info@edolutionindia.com
                </a>
              </div>
              
              {/* Address */}
              <div className="flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center flex-shrink-0 mt-0.5">
                  <svg width="20" height="20" fill="none" stroke="#2B8A67" strokeWidth="1.8" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
                  </svg>
                </div>
                <address className="not-italic text-white text-[16px] font-normal leading-[1.65] max-w-[420px] pt-0.5">
                  714A, B WING, 7th Floor, Kanakia Wall Street, Chakala, Andheri-Kurla Road, Andheri East, Mumbai - 400093
                </address>
              </div>
            </div>
          </div>
        
        </div>

        {/* Horizontal Line */}
        <div className="border-t border-white/100 w-full max-w-[1500px] mx-auto mb-7"></div>

        {/* Bottom Section: Logo + Copyright */}
        <div className="flex flex-col md:flex-row justify-between items-center max-w-[1400px] mx-auto gap-4">
          {/* Logo */}
          <div className="flex items-center">
            <img
          src="https://api.builder.io/api/v1/image/assets/73777318be5b46ba9d2da78deef1571f/0ab0d320eeeea411dc6a92a852c3adadfddf3dd2?placeholderIfAbsent=true"  // put your logo in public folder, or set image path as needed
          alt="Edolution logo"
          className="h-12 w-auto mb-2 md:mb-0"
        />
          </div>
          
          {/* Copyright */}
          <div className="text-white text-[13px] font-normal">
            © 2025 EDOLUTION PRIVATE LIMITED
          </div>
        </div>
      </div>
    </footer>
  );
};