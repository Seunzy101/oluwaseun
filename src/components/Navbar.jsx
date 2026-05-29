// src/components/Navbar.jsx

import { useState } from "react";

import {
  FaBars,
  FaTimes,
  FaDownload,
} from "react-icons/fa";

import { motion, AnimatePresence } from "framer-motion";

import cv from "../assets/cv.pdf";

const links = [
  "Home",
  "About",
  "Skills",
  "Projects",
  "Experience",
  "Contact",
];

export default function Navbar() {

  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-[#0f172a]/80 backdrop-blur-lg border-b border-slate-800">

      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 sm:px-6 md:px-12 lg:px-20 py-4">

        {/* Logo */}

        <a
          href="#home"
          className="flex items-center gap-2 font-bold text-xl text-white"
        >

          <span className="text-cyan-400 text-2xl">
            A.
          </span>

          Oluwaseun.

        </a>

        {/* Desktop Links */}

        <ul className="hidden md:flex items-center gap-8">

          {links.map((l) => (

            <li key={l}>

              <a
                href={`#${l.toLowerCase()}`}
                className="text-slate-400 hover:text-cyan-400 transition duration-300 text-sm relative after:absolute after:w-0 after:h-[2px] after:bg-cyan-400 after:left-0 after:-bottom-1 hover:after:w-full after:transition-all"
              >

                {l}

              </a>

            </li>

          ))}

        </ul>

        {/* CV Button */}

        <motion.a
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          href={cv}
          download
          className="hidden md:flex items-center gap-2 bg-slate-800 border border-slate-700 text-white px-4 py-2 rounded-xl text-sm hover:border-cyan-400 hover:bg-slate-700 transition duration-300"
        >

          Download CV

          <FaDownload className="text-cyan-400"/>

        </motion.a>

        {/* Mobile Menu Button */}

        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-white text-2xl"
        >

          {open ? <FaTimes /> : <FaBars />}

        </button>

      </div>

      {/* MOBILE MENU */}

      <AnimatePresence>

        {open && (

          <motion.div
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-[#0f172a] border-t border-slate-800"
          >

            <div className="px-6 py-6 flex flex-col gap-5">

              {links.map((l) => (

                <a
                  key={l}
                  href={`#${l.toLowerCase()}`}
                  onClick={() => setOpen(false)}
                  className="text-slate-300 hover:text-cyan-400 transition duration-300 text-sm"
                >

                  {l}

                </a>

              ))}

              {/* Mobile CV Button */}

              <a
                href={cv}
                download
                className="flex items-center justify-center gap-2 bg-cyan-500 hover:bg-cyan-600 text-white px-4 py-3 rounded-xl text-sm transition duration-300"
              >

                Download CV

                <FaDownload />

              </a>

            </div>

          </motion.div>

        )}

      </AnimatePresence>

    </nav>
  );
}