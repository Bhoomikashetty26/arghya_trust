import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import logo3s from '../assets/images/logo3s.jpg';
import meaning from '../assets/images/meaning.jpg';
import Logokan from '../assets/images/Logokan.jpg'
import founderImg from "../assets/images/founder.jpg";
import work1 from "../assets/images/F1.jpg";
import work2 from "../assets/images/F2.jpg";
import work3 from "../assets/images/F3.jpg";
import work4 from "../assets/images/F4.jpg";
import work5 from "../assets/images/F5.jpg";
import work6 from "../assets/images/F6.jpg";
import T1 from "../assets/images/T1.jpg";
import T2 from "../assets/images/T2.jpg";
import T3 from "../assets/images/T3.jpg";
import T4 from "../assets/images/T4.jpg";


<motion.div

  initial={{ opacity: 0, x: -50 }}
  whileInView={{ opacity: 1, x: 0 }}
  viewport={{ once: true }}
  className="relative w-64 h-68 lg:w-76 lg:h-872 rounded-2xl overflow-hidden shadow-xl border-4 border-white/30 flex-shrink-0"
>
  <img
    src={founderImg}
    alt="Sri Ranjan Bellarpady"
    className="object-cover w-full h-full"
  />
  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
</motion.div>


const About = () => {
  const [lang, setLang] = useState("en");
  const [counts, setCounts] = useState({
    districts: 0,
    activities: 0,
    volunteers: 0,
    beneficiaries: 0,
  });
  const [visible, setVisible] = useState(false);
  const impactRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setVisible(entry.isIntersecting),
      { threshold: 0.3 }
    );
    if (impactRef.current) observer.observe(impactRef.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!visible) return;
    const duration = 2000;
    const steps = 60;
    const targets = { districts: 3, activities: 3, volunteers: 57, beneficiaries: 5000 };
    
    Object.keys(targets).forEach((key) => {
      let current = 0;
      const increment = targets[key] / steps;
      const timer = setInterval(() => {
        current += increment;
        if (current >= targets[key]) {
          current = targets[key];
          clearInterval(timer);
        }
        setCounts((prev) => ({ ...prev, [key]: Math.floor(current) }));
      }, duration / steps);
    });
  }, [visible]);

  return (
   <section id="about-us" className="py-20 text-center">
   
      {/* Spiritual Overlay - Lighter for better background visibility */}
      <div className="absolute inset-0 bg-black/5"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ delay: 0.2, type: "spring" }}
            className="text-6xl mb-4"
          >
          </motion.div>
        </motion.div>
        {/* Header */}
        {/* --- About Arghya Trust --- */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-6xl font-serif font-bold text-[#1a365d] mb-6">ABOUT US</h2>
<p className="text-black text-xl md:text-2xl max-w-5xl mx-auto leading-relaxed">
  Arghya Trust is an initiative inspired by the philosophy of <span className="font-semibold text-black">3S – Self-Excellence (Jeeva), Sustainability (Jagattu), and Spirituality (Eeshwara)</span>. 
  We envision a society where individuals grow holistically, live responsibly, and remain rooted in higher values – offering their lives as an <span className="italic text-black font-bold">Arghya</span> (sacred offering) to humanity and the Divine.
</p>


        </motion.div>
       {/* Vision & Mission Cards */}
<div className="grid md:grid-cols-2 gap-8 mb-20 justify-items-center">
  {/* Vision Card */}
  <motion.div
    initial={{ opacity: 0, x: -50 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true }}
    whileHover={{ y: -8 }}
    className="group relative transition-all duration-500 hover:shadow-[0_0_25px_#dc2626aa] rounded-3xl"
  >
    <div className="relative bg-white rounded-3xl shadow-2xl overflow-hidden font-[Times_New_Roman] transition-all duration-500 w-full max-w-md aspect-square p-8">
      <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-[#51B94A] to-transparent rounded-bl-full"></div>

      <div className="relative z-10 flex flex-col justify-center h-full">
        <h3 className="text-3xl font-serif font-bold text-[#1a365d] mb-4 text-center">
          Vision
        </h3>
        <p className="text-black leading-relaxed text-justify">
          To create a harmonious society where every individual grows in{" "}
          <span className="font-semibold text-black">Self-Excellence</span>, lives in{" "}
          <span className="font-semibold text-black">Sustainability</span>, and is rooted in{" "}
          <span className="font-semibold text-black">Spirituality</span> — offering life as an{" "}
          <span className="font-bold italic text-black">Arghya</span> to humanity and the Divine.
        </p>
      </div>
    </div>
  </motion.div>

  {/* Mission Card */}
  <motion.div
    initial={{ opacity: 0, x: 50 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true }}
    whileHover={{ y: -8 }}
    className="group relative transition-all duration-500 hover:shadow-[0_0_25px_#dc2626aa] rounded-3xl"
  >
    <div className="relative bg-white rounded-3xl shadow-2xl overflow-hidden font-[Times_New_Roman] transition-all duration-500 w-full max-w-md aspect-square p-8">
      <div className="absolute top-0 left-0 w-32 h-32 bg-gradient-to-bl from-[#51B94A] to-transparent rounded-br-full"></div>

      <div className="relative z-10 flex flex-col justify-center h-full">
        <h3 className="text-3xl font-serif font-bold text-[#1a365d] mb-4 text-center">
          Mission
        </h3>
        <div className="space-y-3 text-black text-justify">
          {[
            "Nurture Self-Excellence through education & empowerment.",
            "Promote Sustainability by protecting the environment and building responsible communities.",
            "Cultivate Spirituality by awakening inner strength and higher ideals.",
            "Inspire Youth for nation-building through the 3S approach.",
            "Design Action-Oriented Programs integrating outward, external, and inward growth – Jeeva, Jagattu, Eeshwara.",
          ].map((item, i) => (
            <div key={i} className="flex items-start gap-3">
              <div className="w-2 h-2 bg-[#57BDA0] rounded-full mt-2 flex-shrink-0"></div>
              <p className="leading-relaxed">{item}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  </motion.div>
</div>



     
      {/* --- ARGHYA Stands For --- */}
<motion.div
  initial={{ opacity: 0, y: 30 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  className="mb-20 text-center"
>
  <h3 className="text-4xl font-serif font-bold text-[#1a365d] mb-8">
    ARGHYA STANDS FOR
  </h3>

  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
    {[
      {
        letter: "A",
        title: "Awareness",
        desc: "Awareness on Self-Personality Development",
      },
      {
        letter: "R",
        title: "Responsibility",
        desc: "Responsibility towards Environmental Sustainability",
      },
      {
        letter: "G",
        title: "Growth",
        desc: "Growth of inner well-being through Spirituality",
      },
      {
        letter: "H",
        title: "Harmony",
        desc: "Harmony among Self-Excellence, Sustainability & Spirituality; Outward, External & Inward; Jeeva, Jagathu & Eshwara – within oneself",
      },
      {
        letter: "Y",
        title: "Youth",
        desc: "Youth Sensitization Programs towards 3S",
      },
      {
        letter: "A",
        title: "Action",
        desc: "Action-Oriented Programs to achieve 3S across all walks of life",
      },
    ].map((item, index) => (
      <motion.div
        key={index}
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        whileHover={{ scale: 1.08, y: -5 }}
        transition={{ delay: index * 0.1 }}
        className="relative overflow-hidden bg-white text-black p-8 rounded-3xl shadow-2xl border border-[#fee2e2] text-left hover:shadow-red-400/50 duration-300"
      >
        <div className="relative z-10 flex flex-col">
          {/* Letter + Word */}
          <div className="flex items-end gap-4 mb-3">
            <h2 className="text-7xl font-extrabold font-serif opacity-25">
              {item.letter}
            </h2>
            <h4 className="text-3xl font-bold tracking-wide drop-shadow-md text-[#1a365d]">
              {item.title}
            </h4>
          </div>

          {/* Description */}
          <p className="text-sm leading-relaxed ml-[4.5rem] text-[#1a202c]">
            {item.desc}
          </p>
        </div>

        {/* Subtle Glow Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-transparent via-transparent to-white/10 opacity-30"></div>
      </motion.div>
    ))}
  </div>
</motion.div>

{/* Trust Logo Section */}
<motion.div
  initial={{ opacity: 0, y: 30 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  className="mb-16"
>
  {/* Centered Heading */}
  <h3 className="text-4xl md:text-5xl font-serif font-bold text-[#1a365d] mb-8 drop-shadow-lg text-center">
    TRUST LOGO
  </h3>

  {/* Red Container - Lighter shade with better spacing */}
  <div className="bg-gradient-to-br from-[#DBDBDB] to-[#DBDBDB] rounded-2xl p-10 lg:p-12 shadow-2xl border border-white/20 space-y-8">
    
    {/* Description First */}
    <div>
      <p className="text-black text-base md:text-lg leading-relaxed font-serif">
        The logo of <span className="font-semibold">Arghya Trust</span> beautifully integrates the three core values — <span className="italic">Self-Excellence</span>, <span className="italic">Sustainability</span>, and <span className="italic">Spirituality</span>. The graceful form inspired by the Kannada letter “ಅ” represents <span className="font-semibold">Self-Excellence (Akshara)</span> — the awakening of human potential and the pursuit of one’s highest possibilities through Education. The <span className="font-semibold">Green Leaf</span> stands for <span className="italic">Sustainability (Abhivrudhi)</span> — our deep commitment to living in harmony with nature, conserving resources, and nurturing life. The <span className="font-semibold">Red Dot (Bindhu)</span> symbolizes <span className="italic">Spirituality (Adhyātma)</span> — symbol of inner consciousness that connects every being to the Divine or Maha Devi.
        <br /><br />
        Together, these elements reflect the essence of <span className="font-semibold">Arghya</span> — an offering of one’s best self to the world and to the Divine. The logo conveys the Trust’s vision to transform individuals and communities through education, ecological balance, and spiritual harmony — building a world rooted in excellence, service, and peace.
      </p>
    </div>

    {/* 3 Images in Single Line */}
    <div className="flex justify-center gap-8 flex-wrap">
      <img
        src={logo3s}
        alt="Arghya Trust Logo"
        className="w-96 md:w-[28rem] h-auto rounded-2xl shadow-lg border-4 border-white/20"
      />
      <img
        src={Logokan}
        alt="Arghya Trust Kannada Logo"
        className="w-96 md:w-[28rem] h-auto rounded-2xl shadow-lg border-4 border-white/20"
      />
      <img
        src={meaning}
        alt="3S Philosophy"
        className="w-96 md:w-[28rem] h-auto rounded-2xl shadow-lg border-4 border-white/20"
      />
    </div>

  </div>
</motion.div>
{/* Founder Section */}
<motion.section
 id="founder"
  initial={{ opacity: 0, y: 50 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  className="mb-16"
>
  {/* Name */}
  <h3 className="text-4xl md:text-5xl font-serif font-bold text-[#1a365d] mb-2 drop-shadow-lg text-center">
    SRI RANJAN BELLARPADY
  </h3>
  {/* Subheading */}
  <h4 className="text-xl md:text-2xl text-center text-[#2d5a4d] mb-8 font-semibold">
    FOUNDER & MANAGING TRUSTEE
  </h4>

  {/* Container */}
  <div className="bg-gradient-to-br from-[#DBDBDB] to-[#DBDBDB] rounded-3xl p-6 lg:p-8 shadow-2xl border border-white/20">
    <div className="flex flex-col lg:flex-row gap-6 lg:gap-6 items-stretch">
        
      {/* Left: Founder Image - Made taller to match content */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        className="relative w-full lg:w-80 rounded-2xl overflow-hidden shadow-xl border-4 border-white/30 flex-shrink-0 self-stretch"
      >
        <img
          src={founderImg}
          alt="Sri Ranjan Bellarpady"
          className="object-cover w-full h-full min-h-[500px]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
      </motion.div>

      {/* Middle: Content - Made to fill available space */}
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        className="flex-1 bg-white rounded-2xl p-6 shadow-xl font-serif text-black overflow-hidden flex flex-col min-h-[500px]"
      >
        <div className="flex justify-end mb-4">
          <button
            onClick={() => setLang("en")}
            className={`px-3 py-1 rounded-l-lg text-xs ${
              lang === "en" ? "bg-[#ef4444] text-white font-semibold" : "bg-white/20 text-black"
            }`}
          >
            English
          </button>
          <button
            onClick={() => setLang("kn")}
            className={`px-3 py-1 rounded-r-lg text-xs ${
              lang === "kn" ? "bg-[#ef4444] text-white font-semibold" : "bg-white/20 text-black"
            }`}
          >
            ಕನ್ನಡ
          </button>
        </div>

        <div className="flex-1 overflow-y-auto">
          {lang === "en" ? (
            <div className="space-y-3 text-sm md:text-base leading-relaxed">
              <p>
                <span className="font-bold">Sri Ranjan Bellarpady</span> is a transformative leader committed to nation-building through the principles of Self-excellence, Sustainability, and Spirituality (3S). As Chief Coordinator of the Ramakrishna Mission's Swacch Mangaluru Abhiyan, he has mobilized 10,000+ volunteers, contributing 20 lakh man-hours to environmental awareness. Through Swacch Manas and Swacch Soch programs, he has trained 50,000+ children and youth in sustainable living.
              </p>
              <p>
                He is the Founder of Mangala Resource Management Pvt. Ltd., which operates India's first rural MRF and manages 4 facilities processing 10,000 tons of waste annually, creating 160 green jobs across 250 villages. His startup also pioneers Zero Waste Campus and Temple Projects.
              </p>
              <p>
                He is the Founder of Arghya Trust, an organization dedicated to advancing education, tribal empowerment, and spiritual well-being through value-based and sustainable initiatives. A Gold Medalist in Philosophy, he also serves as a nominated member of the Swami Vivekananda Study Centre at Mangalore University. His life and work embody Swami Vivekananda's vision of a self-reliant, spiritually awakened, and sustainable Bharat, blending service, wisdom, and action for national regeneration.
              </p>
            </div>
          ) : (
            <div className="space-y-3 text-sm md:text-base leading-relaxed">
              <p>
                <span className="font-bold">ಶ್ರೀ ರಂಜನ್ ಬೆಳ್ಳರ್ಪಾಡಿ</span> ಅವರು ರಾಷ್ಟ್ರನಿರ್ಮಾಣ ಕಾರ್ಯದಲ್ಲಿ ಸಮರ್ಪಿತ ವ್ಯಕ್ತಿಯಾಗಿ ಸೇವೆ ಸಲ್ಲಿಸುತ್ತಿದ್ದಾರೆ. ಶ್ರೀಯುತರು ಅಕ್ಷರ (ಸೆಲ್ಫ್-ಎಕ್ಸಲೆನ್ಸ್), ಅಭಿವೃದ್ಧಿ(ಸಸ್ಟೇನಬಿಲಿಟಿ) ಮತ್ತು ಅಧ್ಯಾತ್ಮ(ಸ್ಪಿರಿಚುಯಾಲಿಟಿ) ವೆಂಬ (3S) ಪರಿಕಲ್ಪನೆ ಅಡಿಯಲ್ಲಿ ಯೋಚನೆ ಯೋಜನೆಗಳನ್ನು ಮುನ್ನಡೆಸುತ್ತಿದ್ದಾರೆ. ರಾಮಕೃಷ್ಣ ಮಿಷನ್ ಸ್ವಚ್ಛ ಮಂಗಳೂರು ಅಭಿಯಾನದ ಪ್ರಧಾನ ಸಂಯೋಜಕರಾಗಿ ಇವರು 10,000 ಕ್ಕೂ ಹೆಚ್ಚು ಸ್ವಯಂಸೇವಕರನ್ನು ಒಟ್ಟುಗೂಡಿಸಿ, 20 ಲಕ್ಷ ಮಾನವ ಘಂಟೆಗಳ ಸೇವೆಯನ್ನು ಪರಿಸರ ಜಾಗೃತಿ ಮತ್ತು ಸ್ವಚ್ಛತೆಗೆ ಸಮರ್ಪಿಸಿದ್ದಾರೆ. ಸ್ವಚ್ಛ ಮನಸ್ ಮತ್ತು ಸ್ವಚ್ಛ ಸೋಚ್ ಕಾರ್ಯಕ್ರಮದ ಮುಖೇನ ಸುಮಾರು 50,000ಕ್ಕೂ ಹೆಚ್ಚು ಶಾಲಾ ಮಕ್ಕಳನ್ನು ಮತ್ತು ಯುವಕರನ್ನು ಸುಸ್ಥಿರ ಬದುಕು ಮತ್ತು ತ್ಯಾಜ್ಯ ನಿರ್ವಹಣೆ ಕುರಿತಾಗಿ ತರಬೇತಿಗೊಳಿಸಿದ್ದಾರೆ.
              </p>
              <p>
                ಅವರು ಮಂಗಳ ರಿಸೋರ್ಸ್ ಮ್ಯಾನೆಜೆಂಟ್ ಪ್ರೈವೇಟ್ ಲಿಮಿಟೆಡ್ ಸಂಸ್ಥೆಯ ಸ್ಥಾಪಕ ನಿರ್ದೇಶಕರಾಗಿದ್ದಾರೆ. ಈ ಸಮಾಜೋದ್ಯಮ ಸಂಸ್ಥೆಯು ಭಾರತದ ಪ್ರಪ್ರಥಮ ಗ್ರಾಮೀಣ ಸಮಗ್ರ ಘನ ತ್ಯಾಜ್ಯ ನಿರ್ವಹಣಾ ಘಟಕ (MRF - Materials Recovery Facility) ನಿರ್ವಹಿಸುತ್ತಿದ್ದು, ಕರಾವಳಿಯಲ್ಲಿ ನಾಲ್ಕು ಘಟಕಗಳ ಮೂಲಕ ವಾರ್ಷಿಕ 10 ಲಕ್ಷ ಕೆಜಿ ಘನತ್ಯಾಜ್ಯವನ್ನು ನಿರ್ವಹಿಸುತ್ತಿದೆ. 160 ಉದ್ಯೋಗ, 250 ಹಳ್ಳಿಗಳು, 10 ಲಕ್ಷಕ್ಕೂ ಹೆಚ್ಚಿನ ಜನರಿಗೆ ಈ ಸಂಸ್ಥೆ ಸೇವೆ ನೀಡುತ್ತಿದೆ. ಅವರ ಸ್ಟಾರ್ಟಪ್ ಝೀರೋ ವೆಸ್ಟ್ ಕ್ಯಾಂಪಸ್ ಮತ್ತು ದೇವಸ್ಥಾನ ಯೋಜನೆಗಳಲ್ಲಿಯೂ ಸಹ ಮುಂಚೂಣಿಯಲ್ಲಿದೆ.
              </p>
              <p>
                ಶ್ರೀ ರಂಜನ್ ಅವರು ಮೌಲ್ಯಾಧಾರಿತ ಮತ್ತು ಸಮಗ್ರ ಶಿಕ್ಷಣ, ಆದಿವಾಸಿ ಸಬಲೀಕರಣ ಮತ್ತು ಆಧ್ಯಾತ್ಮಿಕ ಸೇವೆಯನ್ನು ಮುಂದುವರಿಸುವುದಕ್ಕೆ ಸಮರ್ಪಿತವಾದ "ಅರ್ಘ್ಯ ಟ್ರಸ್ಟ್‌" ಅನ್ನು ಸ್ಥಾಪಿಸಿದ್ದಾರೆ. ತತ್ತ್ವಶಾಸ್ತ್ರದಲ್ಲಿ ಸ್ವರ್ಣಪದಕ ವಿಜೇತರಾಗಿರುವ ಶ್ರೀಯುತರು ಮಂಗಳೂರು ವಿಶ್ವವಿದ್ಯಾಲಯದ ಸ್ವಾಮಿ ವಿವೇಕಾನಂದ ಅಧ್ಯಯನ ಕೇಂದ್ರದ ನಾಮನಿರ್ದೇಶಿತ ಸದಸ್ಯರಾಗಿದ್ದಾರೆ. ಅವರ ಕಾರ್ಯವು ಸ್ವಾಮಿ ವಿವೇಕಾನಂದರ ದೃಷ್ಟಿಕೋನದಂತೆ ಆತ್ಮನಿರ್ಭರ, ಆತ್ಮಜಾಗೃತ ಮತ್ತು ಸ್ಥಿರ ಭಾರತದ ನಿರ್ಮಾಣವನ್ನು ಪ್ರತಿಬಿಂಬಿಸುತ್ತದೆ.
              </p>
            </div>
          )}
        </div>
      </motion.div>

      {/* Right: 6 Work Images - Made taller to match content */}
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        className="grid grid-cols-2 gap-3 w-full lg:w-64 flex-shrink-0 self-stretch"
      >
        {[work1, work2, work3, work4, work5, work6].map((src, i) => (
          <a key={i} href={src} download className="block h-full">
            <div className="overflow-hidden rounded-xl shadow-lg border border-white/20 group relative w-full h-full min-h-[150px]">
              <img
                src={src}
                alt={`Work ${i + 1}`}
                className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-all duration-300"></div>
            </div>
          </a>
        ))}
      </motion.div>

    </div>
  </div>
</motion.section>

{/* Trustees Section */}
<motion.section
  initial={{ opacity: 0, y: 50 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  className="mb-16"
>
  <h3 className="text-4xl md:text-5xl font-serif font-bold text-[#1a365d] mb-10 drop-shadow-lg text-center">
    TRUSTEES OF ARGHYA TRUST
  </h3>

  {/* Container */}
  <div className="bg-[#DBDBDB] rounded-3xl p-8 lg:p-10 shadow-2xl border border-white/20">
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 justify-items-center">
      {[
        {
          name: "Sri Ranjan Bellarpady",
          role: "Managing Trustee",
          img: T1,
        },
        {
          name: "Mr. Bellala Gopinath Rao ",
          role: "Trustee",
          img: T2,
        },
        {
          name: "Mr. Dilraj Alva",
          role: "Trustee",
          img: T3,
        },
        {
          name: "Mr. Vinay P M",
          role: "Trustee",
          img: T4,
        },
      ].map((person, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: i * 0.2 }}
          className="bg-white rounded-2xl p-4 w-64 text-center shadow-lg border border-white/20 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300"
        >
          <div className="overflow-hidden rounded-xl mb-4">
            <img
              src={person.img}
              alt={person.name}
              className="object-cover w-full h-60 rounded-xl hover:scale-105 transition-transform duration-500"
            />
          </div>
          <h4 className="text-lg font-semibold text-[#1a365d]">
            {person.name}
          </h4>
          <p className="text-sm text-[#2d5a4d] font-medium">
            {person.role}
          </p>
        </motion.div>
      ))}
    </div>
  </div>
</motion.section>


      {/* Impact Section */}
<motion.div
  ref={impactRef}
  initial={{ opacity: 0, scale: 0.95 }}
  whileInView={{ opacity: 1, scale: 1 }}
  viewport={{ once: true }}
  className="mb-16"
>
  {/* Heading outside container */}
  <h3 className="text-4xl md:text-5xl font-serif font-bold text-[#1a365d] mb-10 drop-shadow-lg text-center">
    IMPACT SO FAR
  </h3>

  {/* Grey Container with Stats */}
  <div className="relative rounded-2xl overflow-hidden shadow-2xl bg-[#DBDBDB] p-10 md:p-14">
    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
      {[
        { count: counts.districts, label: "Districts Reached" },
        { count: counts.activities, label: "Ongoing Activities" },
        { count: counts.volunteers, label: "Volunteers" },
        { count: counts.beneficiaries, label: "Beneficiaries" },
      ].map((item, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: i * 0.2 }}
          viewport={{ once: true }}
          className="font-serif"
        >
          <motion.div
            className="text-5xl md:text-6xl font-extrabold mb-3 drop-shadow-lg"
            style={{ color: "black" }}
          >
            {item.count}+
          </motion.div>
          <p className="text-black text-base md:text-lg font-bold tracking-wide">
            {item.label}
          </p>
        </motion.div>
      ))}
    </div>
  </div>
</motion.div>
      </div>
    </section>
  );
};

export default About;