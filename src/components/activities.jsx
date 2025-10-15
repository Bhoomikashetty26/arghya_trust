import { useState } from "react";
import { motion } from "framer-motion";
import O1 from "../assets/images/1O.jpg";
import O2 from "../assets/images/2O.jpeg";
import O3 from "../assets/images/3O.JPG";
import U1 from "../assets/images/1U.jpg";
import U2 from "../assets/images/2U.jpg";
import U3 from "../assets/images/3U.jpg";

const Activities = () => {
  const [activeCard, setActiveCard] = useState(null);

  const ongoingActivities = [
    {
      id: 1,
      title: "Swacch Manas",
      description: `An after-school program blending civic awareness, cleanliness, life skills, soft skills, and career counseling for holistic child development. In Mangaluru in association with Ramakrishna Mission Swacch Mangaluru Abhiyan.`,
      image: O1,
    },
    {
      id: 2,
      title: "Be & Make (Youth Workshop)",
      description: `In association with Mangalore University Swami Vivekananda Study Centre, this program equips youth with personality development, leadership, financial literacy, industry-based training, and nation-building spirit. It also functions as an after-college program.`,
      image: O2,
    },
    {
      id: 3,
      title: "Sustainability Circles",
      description: `Sustainability Circles in schools and colleges inspire and empower youth to adopt eco-sensitive living. Through interactive sessions on waste management, cleanliness, and green practices, students learn to become responsible citizens and environmental stewards, fostering a culture of sustainability and collective action for a cleaner, greener future.`,
      image: O3,
    },
  ];

  const upcomingProjects = [
    {
      id: 4,
      title: "Swachha Biligiri (BR Hills Cleanliness Campaign)",
      description: `This initiative of the Trust in association with VGKK and Karuna Trust promotes holistic cleanliness and sustainability in the Biligiri Rangan Hills. The program integrates regular waste collection, segregation, and processing with community empowerment. Through a dedicated livelihood centre, Soliga tribal communities create sustainable products, combining environmental conservation with economic self-reliance, making Swachha Biligiri a model for eco-living and inclusive rural development.`,
      image: U1,
    },
    {
      id: 5,
      title: "Mandira Uttana Yojana (Temple Rejuvenation Program)",
      description: `It is dedicated to restoring the sanctity of temples and sacred spaces through cleanliness, preservation, and proper disposal of religious materials with reverence. The program also conducts spiritual awareness sessions and value-based classes for children and youth, nurturing devotion and discipline. By supporting temples with modern technology, training, and resources, the initiative promotes both cultural continuity and community participation in spiritual rejuvenation.`,
      image: U2,
    },
    {
      id: 6,
      title: "Residential School (Integrated Education Model)",
      description: `A visionary initiative by Arghya Trust, the Residential School aims to offer holistic education integrating seven domains of excellence — Physical, Psychological, Emotional, Intellectual, and Spiritual, along with Self-Reliance and Contributory Personality. This model prepares children for life with inner strength, clarity, and compassion. Through experiential learning, value-based education, and community engagement, the school seeks to nurture balanced individuals capable of excellence, leadership, and purposeful living in harmony with society and nature.`,
      image: U3,
    },
  ];

  return (
    <section id="activities">
      {/* Main Heading */}
      <h2 className="text-5xl md:text-6xl font-serif font-bold text-[#1a365d] mb-16 text-center">
        ACTIVITIES
      </h2>

      <div className="max-w-7xl mx-auto">
        {/* Ongoing Activities */}
        <div className="mb-24">
          <motion.h2
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0, transition: { delay: 0.2 } }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-serif font-bold text-[#1a365d] mb-10"
          >
            Ongoing Activities
          </motion.h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            {ongoingActivities.map((activity, index) => (
              <motion.div
                key={activity.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                  transition: { delay: index * 0.2 },
                }}
                viewport={{ once: true }}
                className="group relative cursor-pointer"
                onClick={() =>
                  setActiveCard(activeCard === activity.id ? null : activity.id)
                }
              >
                {/* Outer Red Glow Effect */}
                <div
                  className={`absolute -inset-2 rounded-3xl transition-all duration-500 ${
                    activeCard === activity.id
                      ? "bg-red-500/20 shadow-lg shadow-red-500/30 blur-md"
                      : "group-hover:bg-red-500/10 group-hover:shadow-md group-hover:shadow-red-500/20"
                  }`}
                ></div>

                {/* Main Card */}
                <motion.div
                  animate={{
                    scale: activeCard === activity.id ? 1.02 : 1,
                    y: activeCard === activity.id ? -5 : 0,
                  }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  className={`relative bg-white rounded-3xl overflow-hidden shadow-lg border transition-all duration-500 flex flex-col h-full min-h-[500px] ${
                    activeCard === activity.id
                      ? "border-red-500 shadow-2xl shadow-red-500/20"
                      : "border-[#dc2626]/20 hover:border-[#dc2626]/60 hover:shadow-xl hover:shadow-[#dc2626]/20"
                  }`}
                >
                  <div className="relative h-56 overflow-hidden">
                    <div
                      className="absolute inset-0 bg-cover bg-center transform group-hover:scale-110 transition-transform duration-700"
                      style={{ backgroundImage: `url(${activity.image})` }}
                    ></div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>
                  </div>
                  <div className="p-6 flex-1 overflow-auto">
                    <h3
                      className={`text-2xl font-bold mb-2 transition-colors font-serif ${
                        activeCard === activity.id
                          ? "text-red-600"
                          : "text-[#1a365d] group-hover:text-[#dc2626]"
                      }`}
                    >
                      {activity.title}
                    </h3>
                    <p className="text-[#4a5568] text-sm leading-relaxed whitespace-pre-line">
                      {activity.description}
                    </p>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Upcoming Projects */}
        <div>
          <motion.h2
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0, transition: { delay: 0.2 } }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-serif font-bold text-[#1a365d] mb-10"
          >
            Upcoming Projects
          </motion.h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            {upcomingProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                  transition: { delay: index * 0.2 },
                }}
                viewport={{ once: true }}
                className="group relative cursor-pointer"
                onClick={() =>
                  setActiveCard(activeCard === project.id ? null : project.id)
                }
              >
                {/* Outer Red Glow Effect */}
                <div
                  className={`absolute -inset-2 rounded-3xl transition-all duration-500 ${
                    activeCard === project.id
                      ? "bg-red-500/20 shadow-lg shadow-red-500/30 blur-md"
                      : "group-hover:bg-red-500/10 group-hover:shadow-md group-hover:shadow-red-500/20"
                  }`}
                ></div>

                {/* Main Card */}
                <motion.div
                  animate={{
                    scale: activeCard === project.id ? 1.02 : 1,
                    y: activeCard === project.id ? -5 : 0,
                  }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  className={`relative bg-white rounded-3xl overflow-hidden shadow-lg border transition-all duration-500 flex flex-col h-full min-h-[500px] ${
                    activeCard === project.id
                      ? "border-red-500 shadow-2xl shadow-red-500/20"
                      : "border-[#dc2626]/20 hover:border-[#dc2626]/60 hover:shadow-xl hover:shadow-[#dc2626]/20"
                  }`}
                >
                  <div className="relative h-56 overflow-hidden">
                    <div
                      className="absolute inset-0 bg-cover bg-center transform group-hover:scale-110 transition-transform duration-700"
                      style={{ backgroundImage: `url(${project.image})` }}
                    ></div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>
                  </div>
                  <div className="p-6 flex-1 overflow-auto">
                    <h3
                      className={`text-2xl font-bold mb-2 transition-colors font-serif ${
                        activeCard === project.id
                          ? "text-red-600"
                          : "text-[#1a365d] group-hover:text-[#dc2626]"
                      }`}
                    >
                      {project.title}
                    </h3>
                    <p className="text-[#4a5568] text-sm leading-relaxed whitespace-pre-line">
                      {project.description}
                    </p>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Activities;
