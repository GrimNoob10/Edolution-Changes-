import React from "react";

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#197B55] w-full pt-10 pb-0 px-8 md:px-16">
      {/* Top Area - 3 columns */}
      <div className="flex flex-col md:flex-row w-full max-w-7xl mx-auto gap-10 md:gap-0 pb-10">
        
        {/* About */}
        <div className="md:w-1/3 w-full mb-6 md:mb-0">
          <h3 className="text-white text-xl md:text-2xl font-semibold mb-2">About Edolution</h3>
          <p className="text-white text-base md:text-lg leading-relaxed">
            Edolution India is committed to advancing education, skilling, and livelihoods aligned with India's 2047 vision
          </p>
        </div>

        {/* Quick Links */}
        <div className="md:w-1/3 w-full mb-6 md:mb-0">
          <h3 className="text-white text-xl md:text-2xl font-semibold mb-2">Quick Links</h3>
          <ul className="text-white text-base md:text-lg space-y-2 mt-4">
            <li><a href="#" className="hover:underline">Home</a></li>
            <li><a href="#" className="hover:underline">Our Offerings</a></li>
            <li><a href="#" className="hover:underline">Clients & Partners</a></li>
            <li><a href="#" className="hover:underline">Projects</a></li>
            <li className="flex items-center">
              <a href="#" className="hover:underline">Products</a>
              {/* <span className="ml-2">&#x25BC;</span> Dropdown arrow */}
            </li>
            <li><a href="#" className="hover:underline">Contact Us</a></li>
          </ul>
        </div>

        {/* Contact */}
        <div className="md:w-1/3 w-full space-y-4">
          <h3 className="text-white text-xl md:text-2xl font-semibold mb-2">Contact</h3>
          <div className="flex items-center gap-3 text-white">
            {/* Email Icon */}
            <span className="inline-flex items-center justify-center w-9 h-9 rounded-full bg-white/10 text-white text-lg">
              <svg width="24" height="24" fill="none" viewBox="0 0 24 24"><path fill="currentColor" d="M2.01 6.74A2 2 0 0 1 4 5h16c.83 0 1.54.5 1.87 1.24L12 13.01 2.01 6.74Zm20 1.44-7.95 5.3a2 2 0 0 1-2.12 0L2 8.18V17a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8.18Z"></path></svg>
            </span>
            <a href="mailto:info@edolutionindia.com" className="ml-2 hover:underline">info@edolutionindia.com</a>
          </div>
          <div className="flex items-start gap-3 text-white">
            {/* Location Icon */}
            <span className="inline-flex items-center justify-center w-9 h-9 rounded-full bg-white/10 text-white text-lg">
              <svg width="24" height="24" fill="none" viewBox="0 0 24 24"><path fill="currentColor" d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7Zm0 9.75A2.75 2.75 0 1 1 12 6.25a2.75 2.75 0 0 1 0 5.5Z"></path></svg>
            </span>
            <address className="not-italic text-white">
              714A, B WING, 7th Floor, Kanakia Wall Street, Chakala, Andheri-Kurla Road, Andheri East, Mumbai - 400093
            </address>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-white opacity-50 mx-auto w-full"></div>

      {/* Bottom Area (Logo + Copyright) */}
      <div className="flex flex-col md:flex-row justify-between items-center py-6 max-w-7xl mx-auto gap-4">
        <img
          src="https://api.builder.io/api/v1/image/assets/73777318be5b46ba9d2da78deef1571f/0ab0d320eeeea411dc6a92a852c3adadfddf3dd2?placeholderIfAbsent=true"  // put your logo in public folder, or set image path as needed
          alt="Edolution logo"
          className="h-12 w-auto mb-2 md:mb-0"
        />
        <span className="text-white text-center text-base">© 2025 EDOLUTION PRIVATE LIMITED</span>
      </div>
    </footer>
  );
};
