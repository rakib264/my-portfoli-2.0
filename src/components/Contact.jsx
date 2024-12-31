import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";
import React, { useRef, useState } from "react";
import { FaEnvelope, FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";

import { SectionWrapper } from "../hoc";
import { styles } from "../styles";
import { slideIn } from "../utils/motion";
import { EarthCanvas } from "./canvas";

const ContactInfo = () => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      className="flex flex-wrap justify-center items-center gap-6 mb-8 text-white/80"
    >
      <motion.a
        href="mailto:redwan.rakib264@gmail.com"
        whileHover={{ scale: 1.05, color: "#EA4335" }}
        className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 backdrop-blur-sm 
                  border border-white/10 hover:border-white/20 transition-all duration-300"
      >
        <FaEnvelope className="text-lg" />
        <span className="text-sm">redwan.rakib264@gmail.com</span>
      </motion.a>

      <motion.a
        href="https://wa.me/8801828123264"
        target="_blank"
        rel="noopener noreferrer"
        whileHover={{ scale: 1.05, color: "#25D366" }}
        className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 backdrop-blur-sm 
                  border border-white/10 hover:border-white/20 transition-all duration-300"
      >
        <FaWhatsapp className="text-lg" />
        <span className="text-sm">+8801828123264</span>
      </motion.a>

      <motion.a
        href="https://www.linkedin.com/in/redwan-rakib-874b30174/"
        target="_blank"
        rel="noopener noreferrer"
        whileHover={{ scale: 1.05, color: "#0A66C2" }}
        className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 backdrop-blur-sm 
                  border border-white/10 hover:border-white/20 transition-all duration-300"
      >
        <FaLinkedin className="text-lg" />
        <span className="text-sm">LinkedIn</span>
      </motion.a>

      <motion.a
        href="https://github.com/rakib264"
        target="_blank"
        rel="noopener noreferrer"
        whileHover={{ scale: 1.05, color: "#f5f5f5" }}
        className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 backdrop-blur-sm 
                  border border-white/10 hover:border-white/20 transition-all duration-300"
      >
        <FaGithub className="text-lg" />
        <span className="text-sm">GitHub</span>
      </motion.a>
    </motion.div>
  );
};

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { target } = e;
    const { name, value } = target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
        {
          from_name: form.name,
          to_name: "Redwan Rakib",
          from_email: form.email,
          to_email: "redwan.rakib264@gmail.com",
          message: form.message,
        },
        import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          setLoading(false);
          alert("Thank you. I will get back to you as soon as possible.");

          setForm({
            name: "",
            email: "",
            message: "",
          });
        },
        (error) => {
          setLoading(false);
          console.error(error);

          alert("Ahh, something went wrong. Please try again.");
        }
      );
  };

  return (
    <div className="flex flex-col gap-10">
      <div className="w-full">
        <ContactInfo />
      </div>
      
      <div className={`xl:mt-12 grid grid-cols-1 md:grid-cols-2 gap-10 overflow-hidden`}>
        <motion.div
          variants={slideIn("left", "tween", 0.2, 1)}
          className="flex-[0.75] bg-black-100 p-8 rounded-2xl col-span-1"
        >
          <p className={styles.sectionSubText}>Get in touch</p>
          <h3 className={styles.sectionHeadText}>Contact.</h3>

          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className="mt-12 flex flex-col gap-8"
          >
            <label className="flex flex-col">
              <span className="text-white font-medium mb-4">Your Name</span>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="What's your good name?"
                className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
              />
            </label>
            <label className="flex flex-col">
              <span className="text-white font-medium mb-4">Your email</span>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="What's your web address?"
                className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
              />
            </label>
            <label className="flex flex-col">
              <span className="text-white font-medium mb-4">Your Message</span>
              <textarea
                rows={7}
                name="message"
                value={form.message}
                onChange={handleChange}
                placeholder="What you want to say?"
                className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
              />
            </label>

            <button
              type="submit"
              className="bg-tertiary py-3 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-primary"
            >
              {loading ? "Sending..." : "Send"}
            </button>
          </form>
        </motion.div>

        <motion.div
          variants={slideIn("right", "tween", 0.2, 1)}
          className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px] col-span-1"
        >
          <EarthCanvas />
        </motion.div>
      </div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
