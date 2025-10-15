import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

// Replace these imports with your actual image paths
import qrCode from "../assets/images/qr.jpg";
import join1 from "../assets/images/join1.jpg";
import join2 from "../assets/images/join2.jpg";
import join3 from "../assets/images/join3.jpeg";

const FooterBox = ({ children, className = "" }) => {
  return (
    <div className={`bg-white rounded-xl p-6 shadow-lg border border-gray-200 hover:bg-red-50 hover:border-red-500 transition-colors duration-300 ${className} group`}>
      {children}
    </div>
  );
};

const FooterSection = () => {
  const [isFormVisible, setIsFormVisible] = useState(false);
  const [isInterestsOpen, setIsInterestsOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    age: "",
    gender: "",
    education: "",
    location: "",
    language: "",
    whatsapp: "",
    email: "",
    interests: [],
    duration: "",
    agreement: false,
  });

  const [newsletterEmail, setNewsletterEmail] = useState("");

  const journeyCards = [
    {
      img: join1,
      title: "Volunteer",
      desc: "Volunteer with our programs",
    },
    {
      img: join2,
      title: "Support",
      desc: "Support education and sustainability projects",
    },
    {
      img: join3,
      title: "Collaborate",
      desc: "Collaborate for spiritual and cultural initiatives",
    },
  ];

  const contactInfo = {
    visit: "Arghya Trust, Mangaluru",
    phone: "+91 744 844 1972",
    mail: "contact@arghyatrust.org",
    website: "www.arghyatrust.org",
  };

  const languageOptions = [
    { value: "english", label: "English" },
    { value: "kannada", label: "Kannada" }
  ];

  const interestOptions = [
    { value: "self-excellence", label: "Self Excellence", desc: "Educational & Personal Development" },
    { value: "sustainability", label: "Sustainability", desc: "Environment & Green Initiatives" },
    { value: "spirituality", label: "Spirituality", desc: "Temples, Rituals & Dharma" },
  ];

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleInterestChange = (e) => {
    const { value, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      interests: checked
        ? [...prev.interests, value]
        : prev.interests.filter((i) => i !== value),
    }));
  };

  const toggleInterestsSection = () => {
    setIsInterestsOpen(!isInterestsOpen);
  };

  const getSelectedInterestsText = () => {
    if (formData.interests.length === 0) {
      return "Select your areas of interest";
    }
    return formData.interests.map(interest => {
      const option = interestOptions.find(opt => opt.value === interest);
      return option ? option.label : interest;
    }).join(", ");
  };

  const encodeMailTo = (to, subject, body) => {
    const s = encodeURIComponent(subject || "");
    const b = encodeURIComponent(body || "");
    return `mailto:${to}?subject=${s}&body=${b}`;
  };

  const buildVolunteerEmailBody = (data) => {
    const selectedInterests = interestOptions
      .filter(opt => data.interests.includes(opt.value))
      .map(opt => opt.label)
      .join(", ");

    return [
      `Name: ${data.name}`,
      `Age: ${data.age}`,
      `Gender: ${data.gender}`,
      `Education: ${data.education}`,
      `Location: ${data.location}`,
      `Language: ${data.language}`,
      `WhatsApp: ${data.whatsapp}`,
      `Email: ${data.email}`,
      `Interests: ${selectedInterests}`,
      `Duration: ${data.duration}`,
      `Agreement: ${data.agreement ? "Yes" : "No"}`,
    ].join("\n");
  };

  const handleSubmit = () => {
    if (!formData.name || !formData.age || !formData.gender || !formData.education || 
        !formData.location || !formData.language || !formData.whatsapp || !formData.email || !formData.agreement) {
      alert("Please fill all required fields and accept the agreement.");
      return;
    }

    const subject = "Volunteer Application";
    const body = buildVolunteerEmailBody(formData);
    const mailto = encodeMailTo("sriranjan@arghyatrust.org", subject, body);

    window.location.href = mailto;

    alert("Opening your email client with the application details. Thank you!");
    setIsFormVisible(false);
    setFormData({
      name: "",
      age: "",
      gender: "",
      education: "",
      location: "",
      language: "",
      whatsapp: "",
      email: "",
      interests: [],
      duration: "",
      agreement: false,
    });
    setIsInterestsOpen(false);
  };

  const handleNewsletterSend = () => {
    if (!newsletterEmail) {
      alert("Please enter an email to write to us.");
      return;
    }
    const subject = "Newsletter / Message from website";
    const body = `Message from: ${newsletterEmail}\n\nPlease write your message here...`;
    const mailto = encodeMailTo("sriranjan@arghyatrust.org", subject, body);
    window.location.href = mailto;
    setNewsletterEmail("");
    alert("Opening your email client. Thank you for reaching out!");
  };

  return (
    <footer className="relative bg-[#DBDBDB] text-black pt-16">
      <div className="max-w-7xl mx-auto px-6 pb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-8 relative z-20"
        >
          {/* JOIN US */}
          <FooterBox className="h-full flex flex-col">
            <div id="join" className="flex flex-col items-center text-center h-full">
              <h3 className="text-2xl font-bold tracking-wide mb-4 text-gray-900 text-center w-full group-hover:text-red-500 transition-colors">
                JOIN US
              </h3>

              <p className="text-sm text-gray-700 leading-relaxed mb-6 flex-grow">
                Join hands with us to transform Self, serve the World, and offer to the Divine.
              </p>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => setIsFormVisible(true)}
                className="w-full px-8 py-3 bg-black text-white rounded-lg font-semibold shadow-lg hover:shadow-xl transition-shadow mb-8 hover:bg-gray-800"
              >
                Apply Now
              </motion.button>

              {/* 3 round images with captions */}
              <div className="grid grid-cols-3 gap-4 w-full mt-auto">
                {journeyCards.map((c, idx) => (
                  <div key={idx} className="text-center">
                    <div className="w-20 h-20 mx-auto rounded-full overflow-hidden border-2 border-gray-200 shadow-md mb-3">
                      <img
                        src={c.img}
                        alt={c.title}
                        className="object-cover w-full h-full"
                      />
                    </div>
                    <div className="text-sm font-semibold text-gray-800">{c.title}</div>
                    <div className="text-xs text-gray-600 leading-tight mt-1">{c.desc}</div>
                  </div>
                ))}
              </div>
            </div>
          </FooterBox>

          {/* DONATE NOW */}
          <FooterBox className="h-full flex flex-col">
            <div className="flex flex-col items-center text-center h-full">
              <h3 className="text-2xl font-bold tracking-wide mb-4 text-gray-900 text-center w-full group-hover:text-red-500 transition-colors">
                DONATE NOW
              </h3>

              <p className="text-sm text-gray-700 leading-relaxed mb-6 flex-grow">
                Scan the QR to donate or use the bank details below.
              </p>

              <div className="flex justify-center mb-6">
                <div className="w-32 h-32 bg-gray-50 rounded-xl p-3 flex items-center justify-center shadow-md border border-gray-200">
                  <img src={qrCode} alt="QR code" className="w-full h-full object-contain rounded" />
                </div>
              </div>

              <div className="space-y-3 text-sm bg-gray-50 p-4 rounded-lg w-full">
                <h4 className="font-bold text-base mb-3 text-gray-900 text-center">BANK DETAILS</h4>
                <div className="space-y-2 text-left">
                  <div><span className="font-semibold text-gray-800">Bank:</span> HDFC Bank</div>
                  <div><span className="font-semibold text-gray-800">Branch:</span> Hampanakatta Mangalore</div>
                  <div><span className="font-semibold text-gray-800">Ac. No.:</span> 50100359972602</div>
                  <div><span className="font-semibold text-gray-800">IFSC:</span> HDFC0001571</div>
                </div>
              </div>
            </div>
          </FooterBox>

          {/* CONTACT US */}
          <FooterBox className="h-full flex flex-col">
            <div id="contactus" className="flex flex-col items-center text-center h-full">
              <h3 className="text-2xl font-bold tracking-wide mb-4 text-gray-900 text-center w-full group-hover:text-red-500 transition-colors">
                CONTACT US
              </h3>

              <p className="text-sm text-gray-700 leading-relaxed mb-4">
                Write to us or use the contact details below.
              </p>

              <div className="flex gap-2 mb-6 w-full">
                <input
                  type="email"
                  value={newsletterEmail}
                  onChange={(e) => setNewsletterEmail(e.target.value)}
                  placeholder="Write to Us..."
                  className="flex-1 px-4 py-3 rounded-lg border border-gray-300 outline-none focus:border-black focus:ring-1 focus:ring-black transition-all text-sm"
                />
                <button
                  onClick={handleNewsletterSend}
                  className="px-6 py-3 bg-black text-white rounded-lg font-semibold hover:bg-gray-800 transition-colors text-sm"
                >
                  Send
                </button>
              </div>

              <div className="space-y-4 w-full">
                <div className="flex items-start gap-3">
                  <div className="text-lg mt-0.5 text-gray-600">📍</div>
                  <div className="text-left">
                    <div className="font-semibold text-sm text-gray-900">Visit Us</div>
                    <div className="text-sm text-gray-700">{contactInfo.visit}</div>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="text-lg mt-0.5 text-gray-600">📞</div>
                  <div className="text-left">
                    <div className="font-semibold text-sm text-gray-900">Call Us</div>
                    <a href={`tel:${contactInfo.phone}`} className="text-sm text-gray-700 hover:text-black transition-colors">
                      {contactInfo.phone}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="text-lg mt-0.5 text-gray-600">✉️</div>
                  <div className="text-left">
                    <div className="font-semibold text-sm text-gray-900">Email</div>
                    <a href={`mailto:${contactInfo.mail}`} className="text-sm text-gray-700 hover:text-black transition-colors break-all">
                      {contactInfo.mail}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </FooterBox>
        </motion.div>
      </div>

      {/* Footer bottom */}
      <div className="bg-gray-900 py-6 relative z-30">
        <div className="max-w-7xl mx-auto px-6 text-center text-sm text-gray-300">
          © Arghya Trust, All Rights Reserved 2025
        </div>
      </div>

      {/* FORM MODAL */}
      <AnimatePresence>
        {isFormVisible && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
            onClick={() => setIsFormVisible(false)}
          >
            <motion.div
              initial={{ y: 40, scale: 0.95 }}
              animate={{ y: 0, scale: 1 }}
              exit={{ y: 40, scale: 0.95 }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="w-full max-w-3xl bg-white rounded-2xl shadow-2xl overflow-hidden max-h-[90vh] flex flex-col"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header */}
              <div className="bg-[#DBDBDB] p-6">
                <div className="flex items-start justify-between">
                  <div>
                    <h2 className="text-2xl font-bold text-black">REGISTRATION FORM</h2>
                  </div>
                  <button
                    onClick={() => setIsFormVisible(false)}
                    className="text-3xl font-light text-gray-700 hover:text-black w-10 h-10 flex items-center justify-center rounded-full hover:bg-white/50 transition-colors"
                    aria-label="Close"
                  >
                    ×
                  </button>
                </div>
              </div>

              {/* Scrollable Form Content */}
              <div className="overflow-y-auto flex-1">
                <div className="p-6 space-y-6">
                  {/* Personal Details */}
                  <div>
                    <h4 className="font-semibold text-lg mb-4 text-black">Personal Details</h4>
                    <div className="space-y-3">
                      <input
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="Full Name *"
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 bg-white outline-none focus:border-black focus:ring-1 focus:ring-black"
                      />
                      <div className="grid grid-cols-2 gap-3">
                        <input
                          type="number"
                          min="16"
                          max="80"
                          name="age"
                          value={formData.age}
                          onChange={handleInputChange}
                          placeholder="Age *"
                          className="px-4 py-3 rounded-lg border border-gray-300 bg-white outline-none focus:border-black focus:ring-1 focus:ring-black"
                        />
                        <select
                          name="gender"
                          value={formData.gender}
                          onChange={handleInputChange}
                          className="px-4 py-3 rounded-lg border border-gray-300 bg-white outline-none focus:border-black focus:ring-1 focus:ring-black"
                        >
                          <option value="">Select Gender *</option>
                          <option value="male">Male</option>
                          <option value="female">Female</option>
                          <option value="other">Other</option>
                        </select>
                      </div>
                      <input
                        name="education"
                        value={formData.education}
                        onChange={handleInputChange}
                        placeholder="Educational Qualification *"
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 bg-white outline-none focus:border-black focus:ring-1 focus:ring-black"
                      />
                    </div>
                  </div>

                  {/* Contact Info */}
                  <div>
                    <h4 className="font-semibold text-lg mb-4 text-black">Contact Information</h4>
                    <div className="space-y-3">
                      <input
                        name="location"
                        value={formData.location}
                        onChange={handleInputChange}
                        placeholder="City, State *"
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 bg-white outline-none focus:border-black focus:ring-1 focus:ring-black"
                      />
                      <div className="grid grid-cols-2 gap-3">
                        <select
                          name="language"
                          value={formData.language}
                          onChange={handleInputChange}
                          className="px-4 py-3 rounded-lg border border-gray-300 bg-white outline-none focus:border-black focus:ring-1 focus:ring-black"
                        >
                          <option value="">Select Language *</option>
                          {languageOptions.map((lang) => (
                            <option key={lang.value} value={lang.value}>
                              {lang.label}
                            </option>
                          ))}
                        </select>
                        <input
                          name="whatsapp"
                          value={formData.whatsapp}
                          onChange={handleInputChange}
                          placeholder="WhatsApp Number *"
                          className="px-4 py-3 rounded-lg border border-gray-300 bg-white outline-none focus:border-black focus:ring-1 focus:ring-black"
                        />
                      </div>
                      <input
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="Email Address *"
                        type="email"
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 bg-white outline-none focus:border-black focus:ring-1 focus:ring-black"
                      />
                    </div>
                  </div>

                  {/* Interests - Collapsible Section */}
                  <div>
                    <div 
                      className="flex items-center justify-between p-4 border border-gray-300 rounded-lg cursor-pointer hover:border-black transition-colors mb-4"
                      onClick={toggleInterestsSection}
                    >
                      <div>
                        <h4 className="font-semibold text-lg text-black">Areas of Interest</h4>
                        <p className="text-sm text-gray-600 mt-1">{getSelectedInterestsText()}</p>
                      </div>
                      <motion.div
                        animate={{ rotate: isInterestsOpen ? 180 : 0 }}
                        transition={{ duration: 0.3 }}
                        className="text-2xl text-gray-500"
                      >
                        ⌄
                      </motion.div>
                    </div>

                    <AnimatePresence>
                      {isInterestsOpen && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.3 }}
                          className="overflow-hidden"
                        >
                          <div className="space-y-3 border border-gray-200 rounded-lg p-4 bg-gray-50">
                            {interestOptions.map((opt) => (
                              <label key={opt.value} className="flex items-start gap-3 p-3 border border-gray-300 rounded-lg cursor-pointer hover:border-black transition-colors bg-white">
                                <input
                                  type="checkbox"
                                  value={opt.value}
                                  checked={formData.interests.includes(opt.value)}
                                  onChange={handleInterestChange}
                                  className="w-5 h-5 mt-0.5"
                                />
                                <div>
                                  <div className="font-medium text-black">{opt.label}</div>
                                  <div className="text-sm text-gray-600">{opt.desc}</div>
                                </div>
                              </label>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>

                  {/* Duration */}
                  <div>
                    <h4 className="font-semibold text-lg mb-4 text-black">Commitment Duration</h4>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                      {["1 week", "1 month", "3 months", "Career", "1 year", "Fulltime"].map((d) => (
                        <label 
                          key={d} 
                          className={`p-3 text-center border rounded-lg cursor-pointer transition-all ${
                            formData.duration === d 
                              ? "border-black bg-black text-white font-semibold" 
                              : "border-gray-300 hover:border-black"
                          }`}
                        >
                          <input
                            type="radio"
                            name="duration"
                            value={d}
                            checked={formData.duration === d}
                            onChange={handleInputChange}
                            className="hidden"
                          />
                          {d}
                        </label>
                      ))}
                    </div>
                  </div>

                  {/* Agreement */}
                  <label className="flex items-start gap-4 p-4 border border-gray-300 rounded-lg cursor-pointer hover:border-black transition-colors">
                    <input
                      type="checkbox"
                      name="agreement"
                      checked={formData.agreement}
                      onChange={handleInputChange}
                      className="w-5 h-5 mt-1"
                    />
                    <div className="text-sm text-gray-800 leading-relaxed">
                      I solemnly pledge to join this sacred movement with dedication and sincerity. I commit to contributing my time, energy, and skills for the transformation of Self, service to the World, and offerings to the Divine.
                    </div>
                  </label>

                  <button
                    onClick={handleSubmit}
                    disabled={!formData.agreement}
                    className="w-full py-4 rounded-lg bg-black text-white font-bold text-lg disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-800 transition-colors"
                  >
                    Begin Your Journey with Arghya
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </footer>
  );
};

export default FooterSection;