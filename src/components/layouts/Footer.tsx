import { useInView, useTransform, useScroll, motion } from "framer-motion";
import { useRef } from "react";
import { containerVariants, itemVariants } from "../../utils/helper";
import { ArrowUp, Code2, Heart } from "lucide-react";
import { SOCIAL_LINKS } from "../../utils/data";
import { useTheme } from "../../hooks/useTheme";

// Animated Gradient Line Component
const AnimatedGradientLine = ({ isInView }: { isInView: boolean }) => (
  <div className="absolute top-0 left-0 w-full h-1 overflow-hidden">
    <motion.div
      initial={{ width: "0%", opacity: 0 }}
      animate={isInView ? { width: "100%", opacity: 1 } : {}}
      transition={{ duration: 1.5, ease: "easeInOut" }}
      className="h-1 bg-linear-to-r from-transparent via-blue-600 dark:via-blue-500 to-transparent"
    />
    <motion.div
      animate={{ x: ["-50%", "calc(100vw + 50%)"] }}
      transition={{
        x: {
          repeat: Infinity,
          repeatType: "loop",
          duration: 6,
          ease: "linear",
          delay: 1,
        },
      }}
      className="absolute top-0 h-1 w-32"
    />
  </div>
);

const Footer = () => {
  const { theme } = useTheme();
  const footerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(footerRef, { once: true, margin: "-50px" });

  // Use global scroll rather than element-targeted scroll to avoid
  // framer-motion's "non-static container" warning in dev.
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [100, -100]);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer
      ref={footerRef}
      className="relative bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 overflow-hidden"
    >
      {/* Animated Wave/Gradient Line */}
      <AnimatedGradientLine isInView={isInView} />

      {/* Background Elements */}
      <motion.div
        style={{ y }}
        className="absolute inset-0 overflow-hidden pointer-events-none"
      >
        <div className="absolute bottom-10 left-1/4 w-64 h-64 rounded-full blur-3xl opacity-3 bg-blue-400 dark:bg-blue-500" />
        <div className="absolute top-10 right-1/3 w-48 h-48 rounded-full blur-3xl opacity-3 bg-purple-400 dark:bg-purple-500" />
      </motion.div>

      <div className="relative z-10 px-6 py-16">
        <div className="max-w-6xl mx-auto">
          {/* Main Footer Content */}
          <motion.div
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={containerVariants}
            className="text-center space-y-8"
          >
            {/* Logo Brand */}
            <motion.div variants={itemVariants} className="space-y-4">
              <motion.div
                className="inline-flex items-center space-x-2 text-2xl font-medium"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 400 }}
              >
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{
                    duration: 20,
                    ease: "linear",
                    repeat: Infinity,
                  }}
                  className="text-blue-600 dark:text-blue-400"
                >
                  <Code2 size={28} />
                </motion.div>
                <span>Isuru Godakanda</span>
              </motion.div>
              <motion.p
                variants={itemVariants}
                className="text-sm text-gray-600 dark:text-gray-400 max-w-md mx-auto"
              >
                Crafting digital experience with passion, precision, and a touch
                of magic.
              </motion.p>
            </motion.div>

            {/* Social Links */}
            <motion.div
              variants={itemVariants}
              className="flex justify-center space-x-6"
            >
              {SOCIAL_LINKS.map((link, linkIndex) => (
                <motion.a
                  key={linkIndex}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`p-3 rounded-full transition-all duration-300 bg-gray-100/50 dark:bg-gray-800/50 hover:bg-gray-200/50 dark:hover:bg-gray-700/50 ${link.color} backdrop-blur-sm`}
                  whileHover={{ scale: 1.1, y: -2, rotate: [0, -5, 5, 0] }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{
                    delay: linkIndex * 0.1 + 0.5,
                    type: "spring",
                    stiffness: 300,
                  }}
                >
                  <link.icon size={20} />
                </motion.a>
              ))}
            </motion.div>

            {/* Divider */}
            <motion.div
              variants={itemVariants}
              className="flex items-center justify-center space-x-4"
            >
              <div className="h-1 w-16 bg-gray-300 dark:bg-gray-700" />
              <motion.div
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="text-red-500"
              >
                <Heart size={16} fill="currentColor" />
              </motion.div>
              <div className="h-1 w-16 bg-gray-300 dark:bg-gray-700" />
            </motion.div>

            {/* Copyright */}
            <motion.div variants={itemVariants} className="space-y-2">
              <p className="text-sm text-gray-600 dark:text-gray-500">
                &copy; {new Date().getFullYear()} Isuru Godakanda. All rights
                reserved.
              </p>
              <p className="text-xs text-gray-500 dark:text-gray-600">
                Built with React & Framer Motion • Design with care
              </p>
            </motion.div>

            {/* Back to Top Button */}
            <motion.div variants={itemVariants}>
              <motion.button
                onClick={scrollToTop}
                className="inline-flex items-center space-x-2 px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 bg-gray-100/50 dark:bg-gray-800/50 hover:bg-gray-200/50 dark:hover:bg-gray-700/50 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white backdrop-blur-sm border border-gray-300 dark:border-gray-700 cursor-pointer"
                whileHover={{
                  y: -2,
                  scale: 1.05,
                  boxShadow:
                    theme === "dark"
                      ? "0 10px 25px rgba(59, 130, 246, 0.15)"
                      : "0 10px 25px rgba(59, 130, 246, 0.1)",
                }}
                whileTap={{ scale: 0.95 }}
              >
                <ArrowUp size={16} />
                <span>Back to Top</span>
              </motion.button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
