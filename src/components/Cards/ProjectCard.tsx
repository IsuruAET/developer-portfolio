import { motion, type Variants } from "framer-motion";
import type { Project } from "../../types";
import { ExternalLink } from "lucide-react";
import { FiGithub } from "react-icons/fi";

const ProjectCard = ({ project }: { project: Project }) => {
  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" as const },
    },
  };
  return (
    <motion.div
      variants={cardVariants}
      whileHover={{
        y: -8,
        transition: { duration: 0.3, ease: "easeOut" as const },
      }}
      className="group relative"
    >
      <div className="rounded-2xl overflow-hidden border transition-all duration-500 bg-white/80 dark:bg-gray-950/50 border-gray-200 dark:border-gray-800 hover:border-gray-300 dark:hover:border-gray-700 hover:shadow-2xl hover:shadow-blue-500/10 backdrop-blur-sm">
        {/* Project Image */}
        <div className="relative overflow-hidden">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-105"
          />

          {/* Feature Badge */}
          {project.featured && (
            <div className="absolute top-4 left-4">
              <span className="bg-blue-500 text-white text-xs px-3 py-1 rounded-full font-medium">
                Featured
              </span>
            </div>
          )}

          {/* Category Badge */}
          <div className="absolute top-4 right-4">
            <span className="text-xs px-3 py-1 rounded-full font-medium bg-white/80 dark:bg-gray-800/80 text-gray-700 dark:text-gray-300 backdrop-blur-sm">
              {project.category}
            </span>
          </div>

          {/* Hover Overlay with CTA Buttons - Desktop Only */}
          {(project.liveUrl || project.githubUrl) && (
            <motion.div
              initial={{ opacity: 0 }}
              whileHover={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
              className="hidden md:flex absolute inset-0 bg-black/60 backdrop-blur-sm items-center justify-center space-x-4"
            >
              {project.liveUrl && (
                <motion.a
                  href={project.liveUrl}
                  initial={{ y: 20, opacity: 0.5 }}
                  whileHover={{ y: 0, opacity: 1, scale: 1.05 }}
                  transition={{ duration: 0.3, delay: 0.1 }}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-blue-500 text-white hover:bg-blue-600 px-4 py-2 rounded-full flex items-center space-x-2 text-sm font-medium transition-colors"
                >
                  <ExternalLink size={16} />
                  <span>Live Demo</span>
                </motion.a>
              )}

              {project.githubUrl && (
                <motion.a
                  href={project.githubUrl}
                  initial={{ y: 20, opacity: 0.5 }}
                  whileHover={{ y: 0, opacity: 1, scale: 1.05 }}
                  transition={{ duration: 0.3, delay: 0.2 }}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border-2 border-white text-white hover:bg-white hover:text-gray-900 px-4 py-2 rounded-full flex items-center space-x-2 text-sm font-medium transition-all"
                >
                  <FiGithub size={16} />
                  <span>View Code</span>
                </motion.a>
              )}
            </motion.div>
          )}
        </div>

        {/* Project Content */}
        <div className="p-6">
          <h3 className="text-xl font-medium mb-3 group-hover:text-blue-500 transition-colors">
            {project.title}
          </h3>

          <p className="text-sm leading-relaxed mb-4 text-gray-600 dark:text-gray-400">
            {project.description}
          </p>

          {/* Tech Stack Tags */}
          <div className="flex flex-wrap gap-2 mb-4">
            {project.tags.map((tag, tagIndex) => (
              <span
                key={tagIndex}
                className="text-xs px-3 py-1 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Mobile CTA Buttons */}
          {(project.liveUrl || project.githubUrl) && (
            <div className="flex flex-col sm:flex-row gap-3 md:hidden pt-2 border-t border-gray-200 dark:border-gray-800">
              {project.liveUrl && (
                <motion.a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-blue-500 text-white hover:bg-blue-600 px-4 py-2.5 rounded-full flex items-center justify-center space-x-2 text-sm font-medium transition-colors active:scale-95"
                >
                  <ExternalLink size={16} />
                  <span>Live Demo</span>
                </motion.a>
              )}

              {project.githubUrl && (
                <motion.a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border-2 border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 px-4 py-2.5 rounded-full flex items-center justify-center space-x-2 text-sm font-medium transition-all active:scale-95"
                >
                  <FiGithub size={16} />
                  <span>View Code</span>
                </motion.a>
              )}
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
