import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { useRef, useState } from "react";
import { containerVariants, itemVariants } from "../../utils/helper";
import TextInput from "../Input/TextInput";
import { Send } from "lucide-react";
import SuccessModal from "../SuccessModal";
import { CONTACT_INFO, SOCIAL_LINKS } from "../../utils/data";
import {
  validateName,
  validateEmail,
  validateMessage,
} from "../../utils/validator";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [showSuccess, setShowSuccess] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  // Use global scroll rather than element-targeted scroll to avoid
  // framer-motion's "non-static container" warning in dev.
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [100, -100]);

  const handleChange = (field: string) => (value: string) => {
    // Filter name input to only allow letters, numbers, and spaces
    if (field === "name") {
      value = value.replace(/[^a-zA-Z0-9\s]/g, "");
    }

    setFormData({ ...formData, [field]: value });

    // Validate on change
    let error = "";
    if (field === "name") {
      error = validateName(value);
    } else if (field === "email") {
      error = validateEmail(value);
    } else if (field === "message") {
      error = validateMessage(value);
    }

    setErrors({ ...errors, [field]: error });
  };

  const handleSubmit = async () => {
    // Validate all fields
    const nameError = validateName(formData.name);
    const emailError = validateEmail(formData.email);
    const messageError = validateMessage(formData.message);

    setErrors({
      name: nameError,
      email: emailError,
      message: messageError,
    });

    // Don't submit if there are errors
    if (nameError || emailError || messageError) {
      return;
    }

    setIsSubmitting(true);
    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: import.meta.env.VITE_WEB3FORMS_KEY,
          name: formData.name,
          email: formData.email,
          message: formData.message,
          // Optional extras for nicer emails
          subject: "New contact from portfolio site",
          from_name: formData.name,
        }),
      });

      const data = await response.json();

      if (!response.ok || data.success === false) {
        throw new Error(data.message || "Failed to send email");
      }

      setShowSuccess(true);
      setFormData({ name: "", email: "", message: "" });
      setErrors({ name: "", email: "", message: "" });
    } catch (error) {
      console.error("Error sending email:", error);
      // You could add error state here to show user-friendly error messages
    } finally {
      setIsSubmitting(false);
    }

    // Auto hide success message after 3 seconds
    setTimeout(() => {
      setShowSuccess(false);
    }, 3000);
  };

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="py-24 px-6 bg-gray-50 dark:bg-gray-950 text-gray-900 dark:text-gray-100 relative overflow-hidden"
    >
      {/* Background Elements */}
      <motion.div style={{ y }} className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 right-1/4 w-72 h-72 rounded-full blur-3xl opacity-5 bg-blue-400 dark:bg-blue-500" />
        <div className="absolute bottom-40 left-1/4 w-80 h-80 rounded-full blur-3xl opacity-5 bg-purple-400 dark:bg-purple-500" />
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
            Let's Connect
          </motion.div>

          <motion.h2
            variants={itemVariants}
            className="text-3xl md:text-5xl font-light mb-6"
          >
            Get in
            <span className="text-blue-500 font-medium"> Touch</span>
          </motion.h2>

          <motion.p
            variants={itemVariants}
            className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto"
          >
            Ready to start your next project? Let's discuss how we can bring
            your ideas to life.
          </motion.p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Contact Form */}
          <motion.div
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={containerVariants}
          >
            <motion.div
              variants={itemVariants}
              className="p-8 rounded-2xl border bg-gray-50/80 dark:bg-gray-800/50 border-gray-200 dark:border-gray-700 backdrop-blur-sm"
            >
              <h3 className="text-2xl font-medium mb-8">Send me a message</h3>

              <div className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <TextInput
                    label="Your Full Name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange("name")}
                    error={errors.name}
                  />

                  <TextInput
                    label="Your E-mail Address"
                    name="email"
                    value={formData.email}
                    onChange={handleChange("email")}
                    error={errors.email}
                  />
                </div>

                <TextInput
                  label="Your Message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange("message")}
                  textarea={true}
                  error={errors.message}
                  maxLength={1500}
                />

                <motion.button
                  disabled={isSubmitting}
                  whileHover={{ y: -2, scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  variants={itemVariants}
                  className="w-full bg-blue-500 hover:bg-blue-600 disabled:bg-blue-400 text-white py-4 rounded-xl text-sm uppercase tracking-wider font-medium transition-all duration-300 flex items-center justify-center space-x-2 cursor-pointer"
                  onClick={handleSubmit}
                >
                  {isSubmitting ? (
                    <>
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{
                          duration: 1,
                          repeat: Infinity,
                          ease: "linear",
                        }}
                        className="w-4 h-4 border-2 border-white rounded-full border-t-transparent"
                      />
                      <span>Sending...</span>
                    </>
                  ) : (
                    <>
                      <Send size={18} />
                      <span>Send Message</span>
                    </>
                  )}
                </motion.button>
              </div>
            </motion.div>
          </motion.div>

          {/* Contact Info & Social Links */}
          <motion.div
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={containerVariants}
            className="space-y-8"
          >
            <motion.div variants={itemVariants}>
              <h3 className="text=2xl font-medium mb-6">Contact Information</h3>
              <div className="space-y-4">
                {CONTACT_INFO.map((item, index) => (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    whileHover={{ x: 4 }}
                    className="flex items-center space-x-4 p-4 rounded-xl bg-gray-50/50 dark:bg-gray-800/30 hover:bg-gray-100/50 dark:hover:bg-gray-800/50 transition-all duration-300"
                  >
                    <div className="p-3 rounded-lg bg-white dark:bg-gray-700">
                      <item.icon size={20} className="text-blue-500" />
                    </div>
                    <div>
                      <div className="text-sm text-gray-600 dark:text-gray-500">
                        {item.label}
                      </div>
                      <div className="font-medium">{item.value}</div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Social Links */}
            <motion.div variants={itemVariants}>
              <h3 className="text-xl font-medium mb-6">Follow Me</h3>
              <div className="grid grid-cols-2 gap-4">
                {SOCIAL_LINKS.map((item, index) => (
                  <motion.a
                    key={index}
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className={`flex items-center space-x-3 p-4 rounded-xl border transition-all duration-300 bg-white/80 dark:bg-gray-800/50 border-gray-200 dark:border-gray-700 hover:border-gray-300 dark:hover:border-gray-600 ${item.bgColor} ${item.color}`}
                  >
                    <item.icon size={20} />
                    <span className="font-medium">{item.name}</span>
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* Availability Status */}
            <motion.div
              variants={itemVariants}
              className="p-6 rounded-xl border bg-green-50 dark:bg-green-900/10 border-green-200 dark:border-green-500/20"
            >
              <div className="flex items-center space-x-3 mb-2">
                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                <span className="font-medium text-green-500">
                  Available for work
                </span>
              </div>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                I'm currently available for freelance projects and full-time
                opportunities.
              </p>
            </motion.div>
          </motion.div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={containerVariants}
          className="text-center mt-20"
        >
          <motion.div
            variants={itemVariants}
            className="max-w-2xl mx-auto p-8 rounded-2xl border bg-gray-50/50 dark:bg-gray-800/30 border-gray-200 dark:border-gray-700"
          >
            <h3 className="text-xl font-medium mb-4">Prefer a quick call?</h3>
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              Sometimes a conversation is worth a thousand messages. Feel free
              to schedule a call to discuss your project.
            </p>
            <motion.button
              whileHover={{ y: -2, scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              className="px-6 py-3 rounded-full border font-medium transition-all duration-300 border-gray-300 dark:border-gray-600 hover:border-blue-500 hover:text-blue-600 dark:hover:text-blue-400 cursor-pointer"
              onClick={() => (window.location.href = "tel:+61467690467")}
            >
              Schedule a Call
            </motion.button>
          </motion.div>
        </motion.div>
      </div>

      <SuccessModal
        show={showSuccess}
        onClose={() => setShowSuccess(false)}
        message="Thank you for reaching out! I'll get back to you within 24 hours."
      />
    </section>
  );
};

export default ContactSection;
