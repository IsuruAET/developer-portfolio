import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { containerVariants, itemVariants } from "../../utils/helper";
import { SKILLS_CATEGORIES, STATS, TECH_STACK } from "../../utils/data";

const SkillsSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  // Use global scroll rather than element-targeted scroll to avoid
  // framer-motion's "non-static container" warning in dev.
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [100, -100]);

  const skillBarVariants = {
    hidden: { width: 0, opacity: 0 },
    visible: (level: number) => ({
      width: `${level}%`,
      opacity: 1,
      transition: { duration: 1.2, ease: "easeOut" as const, delay: 0.3 },
    }),
  };

  return (
    <section
      ref={sectionRef}
      id="skills"
      className="py-24 px-6 bg-gray-50 dark:bg-gray-950 text-gray-900 dark:text-gray-100 relative overflow-hidden"
    >
      {/* Background Elements */}
      <motion.div style={{ y }} className="absolute inset-0 overflow-hidden">
        <div className="absolute top-40 right-1/4 w-72 h-72 rounded-full blur-3xl opacity-5 bg-blue-400 dark:bg-blue-500" />
        <div className="absolute bottom-40 left-1/4 w-72 h-72 rounded-full blur-3xl opacity-5 bg-purple-400 dark:bg-purple-500" />
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
            Technical Experience
          </motion.div>

          <motion.h2
            variants={itemVariants}
            className="text-3xl md:text-5xl font-light mb-6"
          >
            Skills &
            <span className="text-blue-500 font-medium"> Technologies</span>
          </motion.h2>

          <motion.p
            variants={itemVariants}
            className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto font-light"
          >
            A comprehensive toolkit for building modern, scalable web
            applications from concept to deployment.
          </motion.p>
        </motion.div>

        {/* Skills Grid */}
        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={containerVariants}
          className="grid md:grid-cols-2 gap-8 lg:gap-12"
        >
          {SKILLS_CATEGORIES.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              variants={itemVariants}
              className="p-8 rounded-2xl border bg-white/80 dark:bg-gray-900/50 border-gray-200 dark:border-gray-800 backdrop-blur-sm"
            >
              {/* Category Header */}
              <div className="flex items-center mb-6">
                <div className="p-3 rounded-xl bg-gray-100 dark:bg-gray-800 mr-4">
                  <category.icon
                    size={24}
                    className="text-blue-500 dark:text-blue-400"
                  />
                </div>

                <div>
                  <h3 className="text-xl font-medium mb-1">{category.title}</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    {category.description}
                  </p>
                </div>
              </div>

              {/* Skill List */}
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="group">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm font-medium">{skill.name}</span>
                      <span className="text-xs text-gray-600 dark:text-gray-500">
                        {skill.level}%
                      </span>
                    </div>

                    <div className="h-2 rounded-full overflow-hidden bg-gray-200 dark:bg-gray-800">
                      <motion.div
                        variants={skillBarVariants}
                        initial="hidden"
                        animate={isInView ? "visible" : "hidden"}
                        custom={skill.level}
                        className={`h-full ${skill.color} rounded-full relative`}
                      >
                        <div className="absolute inset-0 bg-white/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      </motion.div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Additional Skills */}
        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={containerVariants}
          className="mt-16"
        >
          <motion.div variants={itemVariants} className="text-center mb-8">
            <h3 className="text-xl font-medium mb-4">Also Working With</h3>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="flex flex-wrap justify-center gap-3"
          >
            {TECH_STACK.map((tech, techIndex) => (
              <motion.span
                key={techIndex}
                whileHover={{ y: -2, scale: 1.05 }}
                className="px-4 py-2 text-sm rounded-full border transition-all duration-300 bg-white dark:bg-gray-900 border-gray-300 dark:border-gray-700 hover:border-gray-400 dark:hover:border-gray-600"
              >
                {tech}
              </motion.span>
            ))}
          </motion.div>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={containerVariants}
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8"
        >
          {STATS.map((stat, statIndex) => (
            <motion.div
              key={statIndex}
              variants={itemVariants}
              className="text-center"
            >
              <div className="text-2xl md:text-3xl font-light text-blue-500 mb-2">
                {stat.number}
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-400">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsSection;
