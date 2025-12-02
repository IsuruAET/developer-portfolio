import { motion, useScroll, useTransform } from "framer-motion";
import type { Variants } from "framer-motion";
import profileImage from "../../assets/images/profile-img.jpg";
import { FiGithub, FiLinkedin, FiMail } from "react-icons/fi";
import { ArrowDown } from "lucide-react";
import { containerVariants, itemVariants } from "../../utils/helper";

const HeroSection = () => {
  const { scrollY } = useScroll();
  const heroY = useTransform(scrollY, [0, 500], [0, -100]);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const textVariants: Variants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut" as const },
    },
  };

  const imageVariants: Variants = {
    hidden: { x: 50, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: { duration: 1, ease: "easeOut" as const, delay: 0.5 },
    },
  };

  return (
    <div className="min-h-screen transition-all duration-500 bg-gray-50 dark:bg-gray-950 text-gray-900 dark:text-gray-100">
      {/* Hero Section */}
      <motion.section
        id="home"
        style={{ y: heroY }}
        className="min-h-screen flex items-center justify-center relative px-6 pt-10"
      >
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            animate={{ scale: [1, 1.1, 1], rotate: [0, 180, 360] }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="absolute top-20 right-20 w-64 h-64 rounded-full blur-3xl opacity-10 bg-blue-400 dark:bg-blue-500"
          />
          <motion.div
            animate={{ scale: [1.1, 1, 1.1], rotate: [360, 180, 0] }}
            transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
            className="absolute bottom-20 left-20 w-48 h-48 rounded-full blur-3xl opacity-10 bg-purple-400 dark:bg-purple-500"
          />
        </div>

        <div className="max-w-7xl mx-auto w-full z-10 mt-20">
          {/* Mobile Layout - Centered */}
          <div className="block lg:hidden">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="text-center"
            >
              {/* Profile Image - Mobile */}
              <motion.div variants={imageVariants} className="mb-8">
                <div className="w-32 h-32 mx-auto relative">
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    className="w-full h-32 rounded-2xl overflow-hidden border-4 border-gray-300 dark:border-gray-800 shadow-2xl"
                  >
                    <img
                      src={profileImage}
                      alt="Profile"
                      className="w-full h-full object-cover"
                    />
                  </motion.div>

                  {/* Decorative Ring */}
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{
                      duration: 20,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                    className="absolute -inset-2 rounded-2xl border border-blue-500/20"
                  />
                </div>
              </motion.div>

              {/* Content - Mobile */}
              <motion.div
                variants={textVariants}
                className="text-sm uppercase tracking-widest text-gray-600 dark:text-gray-500 mb-4"
              >
                Full Stack Developer
              </motion.div>

              <motion.h1
                variants={itemVariants}
                className="text-3xl md:text-5xl font-light mb-6 leading-tight"
              >
                <span className="text-gray-900 dark:text-gray-100">
                  Building Digital
                </span>
                <span className="text-blue-500 font-medium ml-2">
                  experiences
                </span>
                <br />
                <span className="text-gray-900 dark:text-gray-100">
                  that matter
                </span>
              </motion.h1>

              <motion.p
                variants={itemVariants}
                className="text-base md:text-lg text-gray-600 dark:text-gray-400 mb-8 max-w-xl mx-auto font-light leading-relaxed"
              >
                I craft beautiful, functional web applications with modern
                technologies and thoughtful user experiences.
              </motion.p>

              {/* CTA Buttons - Mobile */}
              <motion.div
                variants={itemVariants}
                className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8"
              >
                <motion.button
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => scrollToSection("projects")}
                  className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-3 rounded-full text-sm uppercase tracking-wider font-medium transition-all duration-300"
                >
                  View Projects
                </motion.button>
                <motion.button
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => scrollToSection("contact")}
                  className="border border-gray-300 dark:border-gray-700 hover:border-gray-400 dark:hover:border-gray-600 text-gray-700 dark:text-gray-300 px-8 py-3 rounded-full text-sm uppercase tracking-wider font-medium transition-all duration-300"
                >
                  Get in Touch
                </motion.button>
              </motion.div>

              {/* Social Links - Mobile */}
              <motion.div
                variants={itemVariants}
                className="flex justify-center space-x-6 mb-8"
              >
                {[
                  {
                    icon: FiGithub,
                    href: "https://github.com/IsuruGodakanda",
                    label: "GitHub",
                  },
                  {
                    icon: FiLinkedin,
                    href: "https://au.linkedin.com/in/isuru-godakanda",
                    label: "LinkedIn",
                  },
                  {
                    icon: FiMail,
                    href: "mailto:isurugoaus93@gmail.com",
                    label: "Email",
                  },
                ].map((link, index) => {
                  const IconComponent = link.icon;
                  return (
                    <motion.a
                      key={index}
                      href={link.href}
                      whileHover={{ y: -3, scale: 1.1 }}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 rounded-full transition-colors text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 hover:bg-gray-200 dark:hover:bg-gray-800 cursor-pointer"
                    >
                      <IconComponent size={20} />
                    </motion.a>
                  );
                })}
              </motion.div>

              {/* Tech Stack - Mobile */}
              <motion.div
                variants={itemVariants}
                className="flex justify-center items-center space-x-4 text-xs uppercase tracking-widest"
              >
                <span className="text-gray-500 dark:text-gray-600">React</span>
                <span className="text-gray-400 dark:text-gray-700">•</span>
                <span className="text-gray-500 dark:text-gray-600">
                  Node.js
                </span>
                <span className="text-gray-400 dark:text-gray-700">•</span>
                <span className="text-gray-500 dark:text-gray-600">
                  TypeScript
                </span>
                <span className="text-gray-400 dark:text-gray-700">•</span>
                <span className="text-gray-500 dark:text-gray-600">
                  MongoDB
                </span>
              </motion.div>
            </motion.div>
          </div>

          {/* Desktop Layout - Split */}
          <div className="hidden lg:grid lg:grid-cols-2 lg:gap-16 lg:items-center">
            {/* Left Column - Content */}{" "}
            <motion.div
              initial="hidden"
              animate="visible"
              variants={containerVariants}
              className="text-left"
            >
              <motion.div
                variants={textVariants}
                className="text-sm uppercase tracking-widest text-gray-600 dark:text-gray-500 mb-6"
              >
                Full Stack Developer
              </motion.div>
              <motion.h1
                variants={itemVariants}
                className="text-5xl xl:text-7xl font-light mb-8 leading-tight"
              >
                <span className="text-gray-900 dark:text-gray-100">
                  Building Digital
                </span>
                <br />
                <span className="text-blue-500 font-medium">experiences</span>
                <br />
                <span className="text-gray-900 dark:text-gray-100">
                  that matter
                </span>
              </motion.h1>
              <motion.p
                variants={itemVariants}
                className="text-xl text-gray-600 dark:text-gray-400 mb-12 font-light leading-relaxed max-w-lg"
              >
                I craft beautiful, functional web applications with modern
                technologies and thoughtful user experiences.
              </motion.p>
              {/* CTA Buttons - Desktop */}
              <motion.div variants={itemVariants} className="flex gap-6 mb-8">
                <motion.button
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => scrollToSection("projects")}
                  className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-4 rounded-full text-sm uppercase tracking-wider font-medium transition-all duration-300 cursor-pointer"
                >
                  View Projects
                </motion.button>
                <motion.button
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => scrollToSection("contact")}
                  className="border border-gray-300 dark:border-gray-700 hover:border-gray-400 dark:hover:border-gray-600 text-gray-700 dark:text-gray-300 px-8 py-4 rounded-full text-sm uppercase tracking-wider font-medium transition-all duration-300 cursor-pointer"
                >
                  Get in Touch
                </motion.button>
              </motion.div>
              {/* Social Links - Desktop */}
              <motion.div
                variants={itemVariants}
                className="flex space-x-6 mb-12"
              >
                {[
                  {
                    icon: FiGithub,
                    href: "https://github.com/IsuruGodakanda",
                    label: "GitHub",
                  },
                  {
                    icon: FiLinkedin,
                    href: "https://au.linkedin.com/in/isuru-godakanda",
                    label: "LinkedIn",
                  },
                  {
                    icon: FiMail,
                    href: "mailto:isurugoaus93@gmail.com",
                    label: "Email",
                  },
                ].map((link, index) => {
                  const IconComponent = link.icon;
                  return (
                    <motion.a
                      key={index}
                      href={link.href}
                      whileHover={{ y: -3, scale: 1.1 }}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 rounded-full transition-colors text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 hover:bg-gray-200 dark:hover:bg-gray-800"
                    >
                      <IconComponent size={20} />
                    </motion.a>
                  );
                })}
              </motion.div>
            </motion.div>
            {/* Right Column - Profile Image */}
            <motion.div
              initial="hidden"
              animate="visible"
              variants={imageVariants}
              className="flex justify-center lg:justify-end"
            >
              <div className="relative">
                {/* Tech Stack - Desktop */}
                <motion.div
                  variants={itemVariants}
                  className="flex items-center space-x-8 text-xs uppercase tracking-widest absolute -top-16 -left-28"
                >
                  <span className="text-gray-500 dark:text-gray-600">
                    React
                  </span>
                  <span className="text-gray-400 dark:text-gray-700">•</span>

                  <span className="text-gray-500 dark:text-gray-600">
                    Node.js
                  </span>
                  <span className="text-gray-400 dark:text-gray-700">•</span>

                  <span className="text-gray-500 dark:text-gray-600">
                    TypeScript
                  </span>
                  <span className="text-gray-400 dark:text-gray-700">•</span>

                  <span className="text-gray-500 dark:text-gray-600">
                    MongoDB
                  </span>
                </motion.div>

                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="w-80 h-96 rounded-3xl overflow-hidden border-4 border-gray-300 dark:border-gray-800 shadow-2xl"
                >
                  <img
                    src={profileImage}
                    alt="Profile"
                    className="w-full h-full object-cover"
                  />
                </motion.div>

                {/* Decorative Ring */}
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{
                    duration: 20,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                  className="absolute -inset-4 rounded-3xl border border-blue-500/20"
                />
                <motion.div
                  animate={{ rotate: -360 }}
                  transition={{
                    duration: 30,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                  className="absolute -inset-8 rounded-3xl border border-purple-500/10"
                />
              </div>
            </motion.div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <ArrowDown size={20} className="text-gray-400 dark:text-gray-600" />
        </motion.div>
      </motion.section>
    </div>
  );
};

export default HeroSection;
