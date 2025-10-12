import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import logo from "../assets/images/logodesign.png"; 
import hero1 from "../assets/images/1H.jpg";
import hero2 from "../assets/images/2H.jpg";
import hero3 from "../assets/images/3H.jpg";
import hero4 from "../assets/images/4H.jpg";

export default function Header() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isAboutDropdownOpen, setIsAboutDropdownOpen] = useState(false);

  const sliderImages = [hero1, hero2, hero3, hero4];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % sliderImages.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [sliderImages.length]);
  
  const navItems = [
  { id: "about", label: "About Us", hasDropdown: true },
  { id: "activities", label: "Activities" },
  { id: "SHATACHANDI MAHA YAGA", label: "Shatachandi Maha Yaga" },
  { id: "join", label: "Join Us" },
  { id: "contactus", label: "Contact Us" },
];

const handleAboutClick = (e, item) => {
  if (item.hasDropdown) {
    e.preventDefault();
    setIsAboutDropdownOpen(!isAboutDropdownOpen);
  } else {
    setIsAboutDropdownOpen(false);
  }
};

const handleDropdownItemClick = (sectionId) => {
  setIsAboutDropdownOpen(false);
  setIsMenuOpen(false);
  
  // Scroll to the specific section
  const element = document.getElementById(sectionId);
  if (element) {
    element.scrollIntoView({ behavior: "smooth" });
  }
};

  return (
    <>
      {/* HEADER */}
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`fixed top-0 w-full z-50 transition-all duration-500 ${
          scrolled
            ? "bg-[#DBDBDB] backdrop-blur-xl shadow-[0_8px_32px_rgba(0,0,0,0.12)]"
            : "bg-gradient-to-b from-[#2a1810]/80 via-[#1a365d]/60 to-transparent backdrop-blur-sm"
        }`}
      >
        <div className="flex justify-between items-center max-w-7xl mx-auto px-6 py-4">
          {/* Logo */}
          <motion.a
            href="#home"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            className="flex items-center gap-3 group relative"
            whileHover={{ scale: 1.05 }}
          >
            <div className="relative w-23 h-20">
              <img
                src={logo}
                alt="Arghya Logo"
                className="w-full h-full object-contain transition-transform duration-800 group-hover:scale-105"
              />
            </div>
          </motion.a>
{/* Desktop Nav */}
<nav className="hidden md:flex gap-1 items-center">
  {navItems.map((item) => (
    <div key={item.id} className="relative">
      {item.hasDropdown ? (
        /* About Us with Dropdown */
        <div className="relative">
          <motion.button
            onClick={(e) => handleAboutClick(e, item)}
            whileHover={{ y: -2 }}
            className={`relative px-5 py-2.5 font-medium text-sm tracking-wider transition-all duration-300 rounded-full group ${
              scrolled
                ? "text-[#1a365d] hover:text-[#dc2626]"
                : "text-white/90 hover:text-[#f5deb3]"
            }`}
          >
            {item.label}
            <motion.span
              className={`absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${
                scrolled
                  ? "bg-gradient-to-r from-[#f5deb3]/20 to-[#d4af37]/20"
                  : "bg-white/10"
              }`}
              layoutId="navHover"
            />
            {/* Dropdown Arrow */}
            <motion.span
              animate={{ rotate: isAboutDropdownOpen ? 180 : 0 }}
              className="ml-2 inline-block transition-transform"
            >
              ▼
            </motion.span>
          </motion.button>

          {/* Dropdown Menu */}
          <AnimatePresence>
            {isAboutDropdownOpen && (
              <motion.div
                initial={{ opacity: 0, y: 10, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 10, scale: 0.95 }}
                transition={{ duration: 0.2 }}
                className="absolute top-full left-0 mt-2 w-64 bg-white/95 backdrop-blur-xl rounded-2xl shadow-2xl border border-white/20 overflow-hidden"
              >
                <div className="p-2">
                  <div className="p-2">
  <button
    onClick={() => handleDropdownItemClick("about-us")}
    className="w-full text-left px-4 py-3 text-[#1a365d] hover:bg-[#f5deb3]/20 rounded-lg transition-colors duration-300 font-medium"
  >
    About Us
  </button>
  <button
    onClick={() => handleDropdownItemClick("founder")}
    className="w-full text-left px-4 py-3 text-[#1a365d] hover:bg-[#f5deb3]/20 rounded-lg transition-colors duration-300 font-medium"
  >
    Sri Ranjan Bellarpady
  </button>
</div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ) : (
        /* Regular Nav Items */
        <motion.a
          href={`#${item.id}`}
          whileHover={{ y: -2 }}
          className={`relative px-5 py-2.5 font-medium text-sm tracking-wider transition-all duration-300 rounded-full group ${
            scrolled
              ? "text-[#1a365d] hover:text-[#dc2626]"
              : "text-white/90 hover:text-[#f5deb3]"
          }`}
        >
          {item.label}
          <motion.span
            className={`absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${
              scrolled
                ? "bg-gradient-to-r from-[#f5deb3]/20 to-[#d4af37]/20"
                : "bg-white/10"
            }`}
            layoutId="navHover"
          />
        </motion.a>
      )}
    </div>
  ))}
</nav>

          {/* Mobile Menu */}
          <button
            className="md:hidden relative w-10 h-10 flex items-center justify-center"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <div className="relative w-6 h-5 flex flex-col justify-between">
              <span
                className={`w-full h-0.5 rounded-full transition-all duration-300 ${
                  scrolled ? "bg-[#1a365d]" : "bg-white"
                } ${isMenuOpen ? "rotate-45 translate-y-2" : ""}`}
              ></span>
              <span
                className={`w-full h-0.5 rounded-full transition-all duration-300 ${
                  scrolled ? "bg-[#1a365d]" : "bg-white"
                } ${isMenuOpen ? "opacity-0" : ""}`}
              ></span>
              <span
                className={`w-full h-0.5 rounded-full transition-all duration-300 ${
                  scrolled ? "bg-[#1a365d]" : "bg-white"
                } ${isMenuOpen ? "-rotate-45 -translate-y-2" : ""}`}
              ></span>
            </div>
          </button>
        </div>

     {/* Mobile Nav */}
<AnimatePresence>
  {isMenuOpen && (
    <motion.nav
      initial={{ opacity: 0, height: 0 }}
      animate={{ opacity: 1, height: "auto" }}
      exit={{ opacity: 0, height: 0 }}
      className="md:hidden bg-white/95 backdrop-blur-xl border-t border-[#f5deb3]/30"
    >
      {navItems.map((item) => (
        <div key={item.id}>
          {item.hasDropdown ? (
            /* Mobile About Us with Dropdown */
            <div>
              <button
                onClick={(e) => handleAboutClick(e, item)}
                className="flex items-center justify-between w-full px-6 py-4 text-[#1a365d] hover:bg-[#f5deb3]/20 transition-colors border-b border-[#f5deb3]/20"
              >
                <span className="font-medium">{item.label}</span>
                <motion.span
                  animate={{ rotate: isAboutDropdownOpen ? 180 : 0 }}
                  className="transition-transform"
                >
                  ▼
                </motion.span>
              </button>
              
              {/* Mobile Dropdown Items */}
              <AnimatePresence>
                {isAboutDropdownOpen && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    className="bg-white/80"
                  >
                    <button
                      onClick={() => handleDropdownItemClick("about-us")}
                      className="w-full text-left px-10 py-3 text-[#1a365d] hover:bg-[#f5deb3]/20 transition-colors border-b border-[#f5deb3]/20"
                    >
                      About Us
                    </button>
                    <button
                      onClick={() => handleDropdownItemClick("founder")}
                      className="w-full text-left px-10 py-3 text-[#1a365d] hover:bg-[#f5deb3]/20 transition-colors border-b border-[#f5deb3]/20"
                    >
                      Sri Ranjan Bellarpady
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ) : (
            /* Regular Mobile Nav Items */
            <motion.a
              href={`#${item.id}`}
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              className="flex items-center gap-3 px-6 py-4 text-[#1a365d] hover:bg-[#f5deb3]/20 transition-colors border-b border-[#f5deb3]/20 last:border-0"
              onClick={() => setIsMenuOpen(false)}
            >
              <span className="font-medium">{item.label}</span>
            </motion.a>
          )}
        </div>
      ))}
    </motion.nav>
  )}
</AnimatePresence>
      </motion.header>

      {/* HERO SECTION */}
      <section className="relative h-screen w-full flex items-center justify-center overflow-hidden pt-24 md:pt-28">
        {/* Background Slider */}
        <div className="absolute inset-0">
          {sliderImages.map((image, index) => (
            <motion.div
              key={index}
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url(${image})` }}
              animate={{
                opacity: currentSlide === index ? 1 : 0,
                scale: currentSlide === index ? 1 : 1.05,
              }}
              transition={{ duration: 2 }}
            >
              <div className="absolute inset-0 bg-gradient-to-b from-[#1a365d]/70 via-[#2d5a4d]/50 to-[#000000]/60"></div>
            </motion.div>
          ))}
        </div>

        {/* Hero Taglines */}
        <AnimatePresence mode="wait">
          {currentSlide === 0 && (
            <motion.div
              key="slide1"
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 1 }}
              className="absolute left-10 md:left-20 top-32 md:top-36 text-white font-semibold text-2xl md:text-4xl max-w-md z-30"
            >
              <p className="leading-snug drop-shadow-lg">
                <span className="block font-bold">OUR SOURCE OF INSPIRATION</span>
                SWAMI VIVEKANADA
              </p>
            </motion.div>
          )}

          {currentSlide === 1 && (
            <motion.div
              key="slide2"
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 100 }}
              transition={{ duration: 1 }}
              className="absolute right-10 md:right-20 top-32 md:top-36 text-white font-semibold text-2xl md:text-4xl max-w-md text-right z-30"
            >
              <p className="leading-snug drop-shadow-lg">
                CLEANLINESS IS NEXT TO GODLINESS
              </p>
            </motion.div>
          )}

          {currentSlide === 2 && (
            <motion.div
              key="slide3"
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 1 }}
              className="absolute left-10 md:left-20 top-48 md:top-56 text-white font-semibold text-2xl md:text-4xl max-w-md z-30"
            >
              <p className="leading-snug drop-shadow-lg">
                <span className="block font-bold">SUSTAINABILITY CIRCLES</span>
                <span className="block">Eco-awareness and</span>
                <span className="block">Waste Management Training</span>
              </p>
            </motion.div>
          )}

          {currentSlide === 3 && (
            <motion.div
              key="slide4"
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 100 }}
              transition={{ duration: 1 }}
              className="absolute right-10 md:right-20 top-36 md:top-44 text-white font-semibold text-2xl md:text-4xl max-w-md text-right z-30"
            >
              <p className="leading-snug drop-shadow-lg">
                <span className="block font-bold">SWACCH MANAS</span>
                <span className="block">After-school program on life skills</span>
                <span className="block">cleanliness & civic awareness</span>
              </p>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Slider Dots */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex gap-3 z-40">
          {sliderImages.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full border-2 border-white/80 bg-transparent cursor-pointer transition-all duration-300 ease-in-out
                ${
                  index === currentSlide
                    ? "bg-white scale-125 border-[#2d5a4d] shadow-[0_0_12px_#2d5a4d]"
                    : "hover:bg-[#f5f5dc] hover:border-[#f5f5dc] hover:scale-110"
                }`}
            />
          ))}
        </div>
      </section>
    </>
  );
}
