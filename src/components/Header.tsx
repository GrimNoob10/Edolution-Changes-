import React, { useState } from "react";
import { Helmet } from "react-helmet";
import { Link, NavLink } from "react-router-dom";

export const Header: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [mobileProductsOpen, setMobileProductsOpen] = useState(false);
  const [desktopProductsOpen, setDesktopProductsOpen] = useState(false);

  const navLinkClasses = ({ isActive }: { isActive: boolean }) =>
    `px-4 py-2 rounded-full font-medium transition-colors duration-200 ${isActive ? "bg-[#197B55] text-white" : "text-[#252525] hover:text-[#197B55]"
    }`;

  return (
    <>
      <Helmet>
        <title>Edolution</title>
        <meta
          name="description"
          content="Driving Social Progress with Pathways to Learning & Livelihood"
        />
        <meta
          name="keywords"
          content="education, social progress, learning, livelihood"
        />
      </Helmet>

      <header className="bg-white w-full py-4 md:py-8 sticky top-0 z-50">
        <div className="flex items-center gap-6 max-w-[1200px] mx-12 px-0">
          {/* Logo */}
          <Link to="/" className="flex items-center shrink-0 ml-0 ">
            <img
              src="https://api.builder.io/api/v1/image/assets/73777318be5b46ba9d2da78deef1571f/bf04eb0b9c430ee5f525d31b5f1eea4f83e18d68?placeholderIfAbsent=true"
              alt="Edolution Logo"
              className="w-[150px] md:w-[220px] h-auto object-contain"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center md:ml-6 bg-[#E9F1E1] rounded-full px-8 py-2 space-x-2 relative">
            <NavLink to="/" end className={navLinkClasses}>
              Home
            </NavLink>

            <NavLink to="/offerings" className={navLinkClasses}>
              Our Offerings
            </NavLink>

            <NavLink to="/clients" className={navLinkClasses}>
              Clients & Partners
            </NavLink>

            <NavLink to="/projects" className={navLinkClasses}>
              Projects
            </NavLink>

            {/* Products dropdown (desktop) with state management */}
            <div
              className="relative"
              onMouseEnter={() => setDesktopProductsOpen(true)}
              onMouseLeave={() => setDesktopProductsOpen(false)}
            >
              <NavLink
                to="/aipowered-learning-platform"
                className={({ isActive }) =>
                  `flex items-center gap-2 ${navLinkClasses({ isActive })}`
                }
              >
                <span>Products</span>
                <svg
                  className={`w-4 h-4 transition-transform duration-200 ${desktopProductsOpen ? "rotate-180" : ""}`}
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </NavLink>

              {/* Dropdown */}
              {/* Dropdown */}
              <div
                className={`absolute left-0 top-full pt-2 transition-all duration-200 ${desktopProductsOpen ? "opacity-100 visible translate-y-0" : "opacity-0 invisible -translate-y-2"
                  }`}
              >
                <div className="bg-white rounded-xl shadow-lg p-2 min-w-[220px]">
                  <NavLink
                    to="/skill-certification"
                    className={({ isActive }) =>
                      `block px-4 py-2.5 text-[15px] rounded-lg transition-colors whitespace-nowrap ${isActive ? "text-[#197B55] bg-[#E9F1E1] font-semibold" : "text-[#252525] hover:bg-[#E9F1E1]"
                      }`
                    }
                  >
                    Skill Certification Platform
                  </NavLink>
                  <div className="border-t border-[#197B55] my-2"></div>
                  <NavLink
                    to="/aipowered-learning-platform"
                    className={({ isActive }) =>
                      `block px-4 py-2.5 text-[15px] rounded-lg transition-colors whitespace-nowrap ${isActive ? "text-[#197B55] bg-[#E9F1E1] font-semibold" : "text-[#252525] hover:bg-[#E9F1E1]"
                      }`
                    }
                  >
                    AI-Powered Learning Platform
                  </NavLink>
                  <div className="border-t border-[#197B55] my-2"></div>
                  <NavLink
                    to="/career-maps"
                    className={({ isActive }) =>
                      `block px-4 py-2.5 text-[15px] rounded-lg transition-colors whitespace-nowrap ${isActive ? "text-[#197B55] bg-[#E9F1E1] font-semibold" : "text-[#252525] hover:bg-[#E9F1E1]"
                      }`
                    }
                  >
                    Career Maps
                  </NavLink>
                </div>
              </div>

            </div>

            <NavLink to="/contact" className={navLinkClasses}>
              Contact Us
            </NavLink>
          </nav>

          {/* Mobile burger */}
          <button
            type="button"
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
            onClick={() => {
              setMenuOpen((s) => !s);
              if (menuOpen) setMobileProductsOpen(false);
            }}
            className="md:hidden inline-flex items-center justify-center p-2 rounded-md border border-gray-200"
          >
            {menuOpen ? (
              <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none" stroke="currentColor">
                <path d="M6 6l12 12M18 6l-12 12" strokeWidth="2" strokeLinecap="round" />
              </svg>
            ) : (
              <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none" stroke="currentColor">
                <path d="M4 7h16M4 12h16M4 17h16" strokeWidth="2" strokeLinecap="round" />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile Nav Panel */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ${menuOpen ? "max-h-[600px] mt-3" : "max-h-0"
            }`}
        >
          <div className="bg-[#E9F1E1] rounded-2xl p-2">
            <div className="flex flex-col gap-2">
              <NavLink
                to="/"
                end
                className={({ isActive }) =>
                  `block w-full text-left rounded-xl px-4 py-3 font-medium ${isActive ? "bg-[#197B55] text-white" : "text-[#252525]"
                  }`
                }
                onClick={() => setMenuOpen(false)}
              >
                Home
              </NavLink>

              <NavLink
                to="/offerings"
                className={({ isActive }) =>
                  `block w-full text-left rounded-xl px-4 py-3 font-medium ${isActive ? "bg-[#197B55] text-white" : "text-[#252525]"
                  }`
                }
                onClick={() => setMenuOpen(false)}
              >
                Our Offerings
              </NavLink>

              <NavLink
                to="/clients"
                className={({ isActive }) =>
                  `block w-full text-left rounded-xl px-4 py-3 font-medium ${isActive ? "bg-[#197B55] text-white" : "text-[#252525]"
                  }`
                }
                onClick={() => setMenuOpen(false)}
              >
                Clients & Partners
              </NavLink>

              <NavLink
                to="/projects"
                className={({ isActive }) =>
                  `block w-full text-left rounded-xl px-4 py-3 font-medium ${isActive ? "bg-[#197B55] text-white" : "text-[#252525]"
                  }`
                }
                onClick={() => setMenuOpen(false)}
              >
                Projects
              </NavLink>

              {/* Mobile Products accordion */}
              <div className="bg-white/60 rounded-xl">
                <button
                  className="w-full flex items-center justify-between px-4 py-3 font-medium hover:bg-white/40 transition-colors rounded-xl"
                  onClick={() => setMobileProductsOpen((s) => !s)}
                  aria-expanded={mobileProductsOpen}
                  aria-controls="mobile-products"
                >
                  <span className="text-[#252525]">Products</span>
                  <svg
                    className={`w-5 h-5 transition-transform duration-300 ${mobileProductsOpen ? "rotate-180" : ""}`}
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </button>

                <div
                  id="mobile-products"
                  className={`transition-all duration-300 overflow-hidden ${mobileProductsOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
                    }`}
                >
                  <div className="py-2 space-y-1">
                    <NavLink
                      to="aipowered-learning-platform"
                      className={({ isActive }) =>
                        `block px-6 py-2.5 rounded-lg transition-colors ${isActive ? "text-[#197B55] bg-[#E9F1E1] font-semibold" : "text-[#252525] hover:bg-white/60"
                        }`
                      }
                      onClick={() => {
                        setMenuOpen(false);
                        setMobileProductsOpen(false);
                      }}
                    >
                      AI Powered
                    </NavLink>
                    <NavLink
                      to="/skill-certification"
                      className={({ isActive }) =>
                        `block px-6 py-2.5 rounded-lg transition-colors ${isActive ? "text-[#197B55] bg-[#E9F1E1] font-semibold" : "text-[#252525] hover:bg-white/60"
                        }`
                      }
                      onClick={() => {
                        setMenuOpen(false);
                        setMobileProductsOpen(false);
                      }}
                    >
                      Skills Certification
                    </NavLink>
                    <NavLink
                      to="/career-maps"
                      className={({ isActive }) =>
                        `block px-6 py-2.5 rounded-lg transition-colors ${isActive ? "text-[#197B55] bg-[#E9F1E1] font-semibold" : "text-[#252525] hover:bg-white/60"
                        }`
                      }
                      onClick={() => {
                        setMenuOpen(false);
                        setMobileProductsOpen(false);
                      }}
                    >
                      Career Maps
                    </NavLink>
                  </div>
                </div>
              </div>

              <NavLink
                to="/contact"
                className={({ isActive }) =>
                  `block w-full text-left rounded-xl px-4 py-3 font-medium ${isActive ? "bg-[#197B55] text-white" : "text-[#252525]"
                  }`
                }
                onClick={() => setMenuOpen(false)}
              >
                Contact Us
              </NavLink>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};
