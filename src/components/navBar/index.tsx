import { useState, useEffect, useRef } from "react";
import bastaLogo from "../../assets/BastaTech/Navbar/NavbarLogo.png";
import downArrowIcon from "../../assets/BastaTech/Navbar/Group 48096672.png"
import { Link } from "react-router-dom";


export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsDropdownOpen(false);
      }
    };

    if (isDropdownOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isDropdownOpen]);


  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };


  const handleDownArrow = (e: React.MouseEvent<HTMLDivElement>) => {
    e.preventDefault(); // prevent link behavior if inside a <Link>
    setIsDropdownOpen(prev => !prev);
  };

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMenuOpen]);

  return (
    <nav
      className="bg-[#18185F] fixed w-full z-50 "
      role="navigation"
      aria-label="Main navigation"
    >
      <div className="@container">
        <div className="2xl:max-w-7xl  mx-auto px-4 sm:px-6 lg:px-10 ">
          <div className="flex justify-between items-center h-[54px]">
            {/* Logo */}
            <div className="flex-shrink-0 ">
              <Link to="/" aria-label="BastaPlay Home">
                <img
                  className="h-8 md:ml-4"
                  src={bastaLogo}
                  title="Home"
                  alt="BastaTech Logo"
                />
              </Link>
            </div>

            {/* Desktop Navigation - Centered */}
            <div
              className="hidden md:flex items-center justify-center flex-1"
              role="navigation"
              aria-label="Main menu"
            >
              <div className="flex space-x-8">
                <Link
                  to="/"
                  className="text-white hover:text-blue-400 px-3 py-2 text-[20px] font-medium"
                  aria-label="Home Page"
                >
                  Home
                </Link>
                <Link
                  to="/about"
                  className="text-white hover:text-blue-400 px-3 py-2 text-[20px] font-medium"
                  aria-label="About page"
                >
                  About Us
                </Link>

                <div className="relative ref={dropdownRef}">
                  <div
                    className="text-white hover:text-blue-400 px-3 py-2 text-[20px] font-medium cursor-pointer flex flex-row items-center"

                  >
                    <span> <Link
                      to="/services"
                      className="text-white hover:text-blue-400 px-3 py-2 text-[20px] font-medium"
                      aria-label="Services Page"
                    >
                      Services
                    </Link></span>
                    <img src={downArrowIcon} alt="Down arrow" className="object-contain w-[16px] h-[16px]" onClick={handleDownArrow} />
                  </div>

                  {isDropdownOpen && (
                    <div className="absolute left-[-20px] top-9 mt-2 w-[211px] bg-white border-[1px] border-black z-50">
                      <ul className="py-2 text-[14px] font-medium  text-[#000000]">
                        <li>
                          <Link
                            to="/services/AINative"
                            className="block px-4 py-2 hover:bg-red-400"
                             onClick={() => setIsDropdownOpen(false)}

                          >
                            AI-Native
                          </Link>
                        </li>
                        <li>
                          <Link
                            to="/services/IndustrialTemplate"
                            className="block px-4 py-2 hover:bg-red-400"
                            onClick={() => setIsDropdownOpen(false)}
                          >
                            Software Development
                          </Link>
                        </li>
                        <li>
                          <Link
                            to="/services/software-testing"
                            className="block px-4 py-2 hover:bg-red-400"
                            onClick={() => setIsDropdownOpen(false)}
                          >
                            Software Testing
                          </Link>
                        </li>
                        <li>
                          <Link
                            to="/services/software-architecture"
                            className="block px-4 py-2 hover:bg-red-400"
                            onClick={() => setIsDropdownOpen(false)}
                          >
                            Solutions Architecture


                          </Link>
                        </li>

                        <li>
                          <Link
                            to="/services/bussinessAnalysis"
                            className="block px-4 py-2 hover:bg-red-400"
                            onClick={() => setIsDropdownOpen(false)}
                          >


                            Business Analysis
                          </Link>
                        </li>


                      </ul>
                    </div>
                  )}
                </div>



                <Link
                  to="/careers"
                  className="text-white hover:text-blue-400 px-3 py-2 text-[20px] font-medium"
                  aria-label="Contact page"
                >
                  Careers
                </Link>
                <Link
                  to="/contact"
                  className="text-white hover:text-blue-400 px-3 py-2 text-[20px] font-medium"
                  aria-label="Contact page"
                >
                  Contact
                </Link>

              </div>
            </div>


            {/* <div className="hidden md:flex items-center space-x-2">
            <CountryDropdown />
            <a
              href="#"
              onClick={(e) => e.preventDefault()}
              className="bg-[#3B82F6] text-white px-4 py-2 rounded-3xl text-sm font-medium hover:bg-blue-700"
              role="button"
              aria-label="Login to your account"
            >
              LOG IN
            </a>
          </div>

          {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={toggleMenu}
                className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-blue-400 focus:outline-none"
                aria-expanded={isMenuOpen}
                aria-controls="mobile-menu"
                aria-label={isMenuOpen ? "Close menu" : "Open menu"}
              >
                <span className="sr-only">
                  {isMenuOpen ? "Close main menu" : "Open main menu"}
                </span>
                {!isMenuOpen ? (
                  <svg
                    className="block h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                ) : (
                  <svg
                    className="block h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        <div
          className={`md:hidden absolute top-16 left-0 right-0 bg-[#0B0B13] z-50 transition-all duration-300 ease-in-out transform ${isMenuOpen
            ? "opacity-100 translate-y-0"
            : "opacity-0 -translate-y-full pointer-events-none"
            }`}
          id="mobile-menu"
          style={{
            boxShadow: isMenuOpen
              ? "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)"
              : "none",
          }}
        >
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link
              to="/"
              className="text-white hover:text-blue-400 block px-3 py-2 text-base font-medium"
              onClick={closeMenu}
            >
              Home
            </Link>
            <Link
              to="/about"
              className="text-white hover:text-blue-400 block px-3 py-2 text-base font-medium"
              onClick={closeMenu}
            >
              About Us
            </Link>
            <div className="flex items-center gap-2 px-3 py-2 text-base font-medium text-white">
              <Link
                to="/services"
                onClick={closeMenu}
                className="hover:text-blue-400"
              >
                Services
              </Link>
              <img
                src={downArrowIcon}
                alt="Dropdown"
                className="object-contain w-[16px] h-[16px] cursor-pointer"
                onClick={(e) => {
                  e.preventDefault(); // Prevent accidental navigation
                  setIsDropdownOpen(prev => !prev);
                }}
              />

              {isDropdownOpen && (
                <div className="absolute left-[5] top-30 mt-2  bg-white border-[1px] border-black z-50">
                  <ul className="py-2 text-[14px] font-medium  text-[#000000]">
                    <li>
                      <Link
                        to="/services/AINative"
                        className="block px-4 py-2 hover:bg-red-400"
                        onClick={() => {
                          setIsDropdownOpen(false);
                          closeMenu();
                        }}

                      >
                        AI-Native
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/services/IndustrialTemplate"
                        className="block px-4 py-2 hover:bg-red-400"
                        onClick={() => {
                          setIsDropdownOpen(false);
                          closeMenu();
                        }}
                      >
                        Software Development
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/services/software-testing"
                        className="block px-4 py-2 hover:bg-red-400"
                        onClick={() => {
                          setIsDropdownOpen(false);
                          closeMenu();
                        }}
                      >
                        Software Testing
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/services/software-architecture"
                        className="block px-4 py-2 hover:bg-red-400"
                         onClick={() => {
                          setIsDropdownOpen(false);
                          closeMenu();
                        }}
                      >
                        Solutions Architecture


                      </Link>
                    </li>

                    <li>
                      <Link
                        to="/services/bussinessAnalysis"
                        className="block px-4 py-2 hover:bg-red-400"
                        onClick={() => {
                          setIsDropdownOpen(false);
                          closeMenu();
                        }}
                      >


                        Business Analysis
                      </Link>
                    </li>


                  </ul>
                </div>
              )}
            </div>

            <Link
              to="/careers"
              className="text-white hover:text-blue-400 block px-3 py-2 text-base font-medium"
              onClick={closeMenu}
            >
              Careers
            </Link>

            <Link
              to="/contact"
              className="text-white hover:text-blue-400 block px-3 py-2 text-base font-medium"
              onClick={closeMenu}
            >
              Contact
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
