// src/components/Hero.jsx

import { motion } from "framer-motion";

import {
  FaFacebook,
  FaLinkedin,
  FaTwitter,
  FaGithub,
} from "react-icons/fa";

const stats = [
  { value: "1", label: "Year Experience" },
  { value: "10+", label: "Projects Completed" },
  { value: "14+", label: "Happy Clients" },
  { value: "5★", label: "Client Rating" },
];

export default function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden min-h-screen flex flex-col-reverse lg:flex-row items-center justify-between px-4 sm:px-6 md:px-12 lg:px-20 py-16 sm:py-20 gap-16"
    >

      {/* BACKGROUND GLOW */}

      <div className="absolute top-20 right-0 w-[250px] sm:w-[400px] lg:w-[550px] h-[250px] sm:h-[400px] lg:h-[550px] bg-cyan-500/10 blur-[120px] rounded-full"/>

      {/* LEFT CONTENT */}

      <motion.div
        initial={{ opacity: 0, x: -60 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="flex-1 max-w-xl text-center lg:text-left relative z-10"
      >

        {/* Badge */}

        <motion.span
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="inline-block bg-slate-800 border border-slate-700 text-cyan-400 text-xs px-4 py-2 rounded-full mb-6"
        >

          + Available for Freelance

        </motion.span>

        {/* Heading */}

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="text-white font-bold text-4xl sm:text-5xl lg:text-6xl mb-2"
        >

          Hi, I'm

        </motion.h1>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="text-5xl sm:text-6xl lg:text-7xl font-extrabold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent leading-tight mb-4"
        >

          Oluwaseun

        </motion.h1>

        {/* Subheading */}

        <motion.h2
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="text-slate-300 text-lg sm:text-xl mb-5"
        >

          Full Stack Web Developer & UI/UX Designer

        </motion.h2>

        {/* Description */}

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="text-slate-400 text-sm sm:text-base leading-7 mb-8 max-w-lg mx-auto lg:mx-0"
        >

          I design and build modern, responsive websites and digital
          experiences that help brands stand out and grow.

        </motion.p>

        {/* Buttons */}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4 mb-8"
        >

          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="#contact"
            className="bg-cyan-500 hover:bg-cyan-600 hover:shadow-lg hover:shadow-cyan-500/30 text-white px-6 py-3 rounded-xl font-medium transition duration-300"
          >

            Hire Me →

          </motion.a>

          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="#projects"
            className="border border-slate-700 hover:border-cyan-400 hover:bg-slate-800 text-white px-6 py-3 rounded-xl font-medium transition duration-300"
          >

            View Projects ⊞

          </motion.a>

        </motion.div>

        {/* Social Icons */}

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9 }}
          className="flex justify-center lg:justify-start gap-4"
        >

          {[FaFacebook, FaLinkedin, FaTwitter, FaGithub].map(
            (Icon, i) => (

              <motion.a
                whileHover={{ y: -5 }}
                key={i}
                href="#"
                className="w-11 h-11 bg-slate-800 border border-slate-700 rounded-xl flex items-center justify-center text-slate-400 hover:text-cyan-400 hover:border-cyan-400 hover:bg-slate-700 transition duration-300"
              >

                <Icon size={18} />

              </motion.a>

            )
          )}

        </motion.div>

      </motion.div>

      {/* RIGHT CONTENT */}

      <motion.div
        initial={{ opacity: 0, x: 60 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        className="flex-1 flex flex-col items-center gap-8 relative"
      >

        {/* IMAGE GLOW */}

        <div className="absolute w-72 sm:w-96 h-72 sm:h-96 bg-cyan-500/20 blur-[120px] rounded-full"/>

        {/* Profile Image */}

        <motion.div
          whileHover={{ scale: 1.03 }}
          className="relative z-10 w-72 h-80 sm:w-80 sm:h-96 rounded-3xl overflow-hidden border border-slate-700 bg-slate-800 shadow-2xl"
        >

          <img
            src="/profile.jpeg"
            alt="Oluwaseun"
            className="w-full h-full object-cover hover:scale-110 transition duration-700"
          />

        </motion.div>

        {/* Stats */}

        <div className="grid grid-cols-2 gap-4 w-full max-w-sm relative z-10">

          {stats.map((s, index) => (

            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              whileHover={{ y: -8 }}
              className="bg-slate-800 border border-slate-700 rounded-2xl p-5 text-center hover:border-cyan-400 transition duration-300"
            >

              <span className="block text-2xl font-bold text-cyan-400 mb-1">
                {s.value}
              </span>

              <span className="text-slate-400 text-sm">
                {s.label}
              </span>

            </motion.div>

          ))}

        </div>

      </motion.div>

    </section>
  );
}