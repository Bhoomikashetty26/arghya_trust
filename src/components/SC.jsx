import React from "react";
import { motion } from "framer-motion";
import devi from "../assets/images/devi.jpg";

const SCMY2026 = () => {
  return (
   <section id="SHATACHANDI MAHA YAGA" className="mt-16 mb-16">  
      {/* Main Container */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="bg-[#DBDBDB]/90 py-12 px-6 md:px-12 rounded-3xl shadow-2xl border border-white/30 max-w-7xl mx-auto"
      >
        {/* Heading */}
        <h4 className="text-3xl md:text-4xl font-serif font-bold text-[#1a365d] mb-10 drop-shadow-md text-center">
          Shatachandi Maha Yagna – 2026
        </h4>

        {/* Image + Text Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          {/* Left - Image */}
          <div className="flex justify-center">
            <img
              src={devi}
              alt="Devi"
              className="rounded-3xl shadow-xl w-[85%] h-auto object-cover border border-white/50 hover:scale-105 transition-transform duration-700"
            />
          </div>

          {/* Right - Description */}
          <div>
            <div
              className="text-[#1a365d] text-base leading-relaxed text-justify space-y-4"
              style={{ fontFamily: "Times New Roman, serif" }}
            >
              <p>
                Arghya Trust is blessed to organize the Shatachandi Maha Yajna
                in January 2026 at the sacred Polali Shri Rajarajeshwari Kshetra,
                a divine seat established by King Suratha as mentioned in the
                Durga Saptashati. According to the scripture, Suratha Maharaja,
                after receiving Mantra Deeksha from Sumeru Rishi, installed a
                nine-foot clay idol of Maa Rajarajeshwari and performed Chandi
                Parayana and Chandi Homa at this very site. Through his deep
                devotion and sacred rituals, he regained his lost kingdom and
                attained divine blessings and prosperity.
              </p>

              <p>
                Following this ancient tradition, the Shatachandi Maha Yajna will
                be conducted with collective chanting of the Durga Saptashati
                (700 verses) from the Markandeya Purana — a hundred times, by
                learned Vedic scholars. This powerful anushthana invokes the
                divine Mother's energy to purify the environment, remove
                obstacles, and bestow strength, peace, and success upon all
                participant devotees.
              </p>

              <p>
                In parallel, Arghya Trust is also organizing a Koti Durga Japa
                Yajna — a collective chanting of "one crore Durga mantras" by
                millions of devotees across regions. This unified spiritual
                effort will radiate powerful vibrations of positivity and grace,
                uplifting individuals and the world.
              </p>

              <p>
                It is a sacred opportunity for all devotees to participate, offer
                prayers, and receive the boundless blessings of Maa Durga.
              </p>
            </div>

            {/* Read More Button */}
            <div className="pt-6 flex justify-center md:justify-start">
              <button className="bg-[#1a365d] text-white font-semibold px-6 py-3 rounded-full shadow-lg hover:bg-[#2d5a4d] transition duration-300">
                Read More
              </button>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default SCMY2026;