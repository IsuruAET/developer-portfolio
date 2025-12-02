import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { containerVariants, itemVariants } from "../../utils/helper";
import { JOURNEY_STEPS, PASSIONS } from "../../utils/data";
import signature from "../../assets/images/signature.svg";

const AboutSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const timelineRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });
  const timelineInView = useInView(timelineRef, {
    once: true,
    margin: "-50px",
  });

  // Use global scroll rather than element-targeted scroll to avoid
  // framer-motion's "non-static container" warning in dev.
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [100, -100]);

  const timelineVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.3 },
    },
  };

  const stepVariants = {
    hidden: { x: -5, opacity: 0 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6, ease: "easeOut" as const },
    },
  };

  return (
    <section
      id="about"
      ref={sectionRef}
      className="py-24 px-6 bg-gray-50 dark:bg-gray-950 text-gray-900 dark:text-gray-100 relative overflow-hidden"
    >
      {/* Background Elements */}
      <motion.div style={{ y }} className="absolute inset-0 overflow-hidden">
        <div className="absolute top-40 right-1/3 w-80 h-80 rounded-full blur-3xl opacity-5 bg-blue-400 dark:bg-blue-500" />
        <div className="absolute bottom-20 left-1/3 w-96 h-96 rounded-full blur-3xl opacity-5 bg-purple-400 dark:bg-purple-500" />
      </motion.div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Header */}
        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={containerVariants}
          className="text-center mb-20"
        >
          <motion.div
            variants={itemVariants}
            className="text-sm uppercase tracking-widest text-gray-600 dark:text-gray-500 mb-4"
          >
            Get to Know Me
          </motion.div>

          <motion.h2
            variants={itemVariants}
            className="text-3xl md:text-5xl font-light mb-6"
          >
            About
            <span className="text-blue-500 font-medium"> Me</span>
          </motion.h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Personal Story */}
          <motion.div
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={containerVariants}
            className="space-y-8"
          >
            <motion.div
              variants={itemVariants}
              className="p-8 rounded-2xl border bg-gray-50/80 dark:bg-gray-800/50 border-gray-200 dark:border-gray-700 backdrop-blur-sm"
            >
              <h3 className="text-2xl font-medium mb-6">My Mission</h3>
              <p className="text-lg leading-relaxed mb-6 text-gray-700 dark:text-gray-300">
                I believe technology should be a bridge that connects people and
                solve real-world problems. My passion lies in crafting digital
                experiences that are not just functional, but delightful and
                accessible to everyone.
              </p>
              <p className="text-lg leading-relaxed text-gray-600 dark:text-gray-400">
                When I'm not coding, you'll find me exploring new frameworks,
                contributing to open source, or mentoring aspiring developers. I
                love the constant evolution of web technologies and the endless
                possibilities they bring to create meaningful digital
                experiences.
              </p>
            </motion.div>

            {/* What I Love Building */}
            <motion.div variants={itemVariants} className="space-y-4">
              <h3 className="text-xl font-medium mb-6">What I Love Building</h3>
              <div className="grid gap-4">
                {PASSIONS.map((passion, passionIndex) => (
                  <motion.div
                    key={passionIndex}
                    variants={itemVariants}
                    whileHover={{ x: 4 }}
                    className="flex items-center space-x-4 p-4 rounded-xl bg-gray-50/50 dark:bg-gray-800/30 hover:bg-gray-100/50 dark:hover:bg-gray-800/50 transition-all duration-300"
                  >
                    <div className="p-3 rounded-lg bg-white dark:bg-gray-700">
                      <passion.icon
                        size={24}
                        className="text-blue-500 dark:text-blue-400"
                      />
                    </div>
                    <div>
                      <h4 className="font-medium mb-1">{passion.title}</h4>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        {passion.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Digital Signature */}
            <motion.div variants={itemVariants} className="text-center py-8">
              <div className="text-sm text-gray-600 dark:text-gray-500 mb-4">
                Created with passion by
              </div>

              <div className="flex justify-center">
                <img src={signature} alt="Digital Signature" className="w-28" />
              </div>
              <div className="text-lg font-medium text-blue-500 dark:text-blue-400 mt-2">
                Isuru Godakanda
              </div>
            </motion.div>
          </motion.div>

          {/* Developer Journey Timeline */}
          <motion.div
            ref={timelineRef}
            initial="hidden"
            animate={timelineInView ? "visible" : "hidden"}
            variants={timelineVariants}
            className="relative"
          >
            <h3 className="text-2xl font-medium mb-8 text-center lg:text-left">
              My Developer Journey
            </h3>

            {/* Timeline */}
            <div className="absolute left-8 top-16 bottom-0 w-px bg-gray-300 dark:bg-gray-700" />

            <div className="space-y-8">
              {JOURNEY_STEPS.map((step, stepIndex) => (
                <motion.div
                  key={stepIndex}
                  variants={stepVariants}
                  whileHover={{ x: 4 }}
                  className="relative flex items-start space-x-6 group"
                >
                  {/* Timeline Dot */}
                  <div
                    className={`relative z-10 shrink-0 w-16 h-16 rounded-full ${step.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}
                  >
                    <step.icon size={24} className="text-white" />
                  </div>

                  {/* Content */}
                  <div className="grow p-6 rounded-xl border transition-all duration-300 bg-white/80 dark:bg-gray-800/50 border-gray-200 dark:border-gray-700 group-hover:border-gray-300 dark:group-hover:border-gray-600 group-hover:bg-white dark:group-hover:bg-gray-800/70 backdrop-blur-sm">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="text-xl font-medium">{step.title}</h4>
                      <span className="text-sm px-3 py-1 rounded-full bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300">
                        {step.year}
                      </span>
                    </div>
                    <div className="text-sm font-medium text-blue-600 dark:text-blue-400 mb-3">
                      {step.company}
                    </div>
                    <p className="text-sm leading-relaxed text-gray-600 dark:text-gray-400">
                      {step.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Call to Action */}
        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={containerVariants}
          className="text-center mt-20"
        >
          <motion.div
            variants={itemVariants}
            className="flex flex-col items-center space-y-6"
          >
            <p className="text-lg text-gray-600 dark:text-gray-400">
              Ready to bring your ideas to life?
            </p>

            <motion.button
              whileHover={{ y: -2, scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              className="bg-blue-500 text-white px-8 py-3 rounded-full text-sm uppercase tracking-wider font-medium hover:bg-blue-600 transition-all duration-300 cursor-pointer"
            >
              Let's Work Together
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
