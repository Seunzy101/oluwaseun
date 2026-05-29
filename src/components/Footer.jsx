// src/components/Footer.jsx

import {
  FaFacebookF,
  FaLinkedinIn,
  FaTwitter,
  FaGithub,
  FaInstagram,
  FaArrowUp,
} from "react-icons/fa";

const quickLinks = [
  "Home",
  "About",
  "Projects",
  "Skills",
  "Experience",
  "Contact",
];

const services = [
  "UI/UX Design",
  "Full Stack Development",
  "Product Design",
  "Mobile Design",
];

export default function Footer() {

  return (
    <footer className="border-t border-slate-800 bg-[#0b1120] mt-20">

      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 lg:px-20 py-14">

        {/* TOP SECTION */}

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* LOGO + TEXT */}

          <div>

            <div className="flex items-center gap-2 font-bold text-2xl text-white mb-4">

              <span className="text-cyan-400">
                ⬡
              </span>

              Oluwaseun.

            </div>

            <p className="text-slate-400 text-sm leading-7">
              Full Stack Web Developer passionate about building
              modern, responsive and user-friendly digital experiences.
            </p>

          </div>

          {/* QUICK LINKS */}

          <div>

            <h4 className="font-semibold text-white mb-5 text-lg">
              Quick Links
            </h4>

            <ul className="flex flex-col gap-3">

              {quickLinks.map((item) => (

                <li key={item}>

                  <a
                    href={`#${item.toLowerCase()}`}
                    className="text-slate-400 text-sm hover:text-cyan-400 transition duration-300"
                  >

                    {item}

                  </a>

                </li>

              ))}

            </ul>

          </div>

          {/* SERVICES */}

          <div>

            <h4 className="font-semibold text-white mb-5 text-lg">
              Services
            </h4>

            <ul className="flex flex-col gap-3">

              {services.map((item) => (

                <li
                  key={item}
                  className="text-slate-400 text-sm"
                >

                  {item}

                </li>

              ))}

            </ul>

          </div>

          {/* SOCIALS */}

          <div>

            <h4 className="font-semibold text-white mb-5 text-lg">
              Follow Me
            </h4>

            <div className="flex gap-4 flex-wrap mb-6">

              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-11 h-11 rounded-xl bg-slate-800 border border-slate-700 flex items-center justify-center text-slate-400 hover:text-cyan-400 hover:border-cyan-400 hover:-translate-y-1 transition duration-300"
              >

                <FaFacebookF />

              </a>

              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-11 h-11 rounded-xl bg-slate-800 border border-slate-700 flex items-center justify-center text-slate-400 hover:text-cyan-400 hover:border-cyan-400 hover:-translate-y-1 transition duration-300"
              >

                <FaLinkedinIn />

              </a>

              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-11 h-11 rounded-xl bg-slate-800 border border-slate-700 flex items-center justify-center text-slate-400 hover:text-cyan-400 hover:border-cyan-400 hover:-translate-y-1 transition duration-300"
              >

                <FaTwitter />

              </a>

              <a
                href="https://github.com/Seunzy101"
                target="_blank"
                rel="noopener noreferrer"
                className="w-11 h-11 rounded-xl bg-slate-800 border border-slate-700 flex items-center justify-center text-slate-400 hover:text-cyan-400 hover:border-cyan-400 hover:-translate-y-1 transition duration-300"
              >

                <FaGithub />

              </a>

              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-11 h-11 rounded-xl bg-slate-800 border border-slate-700 flex items-center justify-center text-slate-400 hover:text-cyan-400 hover:border-cyan-400 hover:-translate-y-1 transition duration-300"
              >

                <FaInstagram />

              </a>

            </div>

            <p className="text-slate-400 text-sm leading-7">
              Let’s build something amazing together.
            </p>

          </div>

        </div>

        {/* DIVIDER */}

        <div className="border-t border-slate-800 my-10"/>

        {/* BOTTOM */}

        <div className="flex flex-col md:flex-row items-center justify-between gap-5">

          <p className="text-slate-500 text-sm text-center">
            © {new Date().getFullYear()} Oluwaseun Ashiru. All rights reserved.
          </p>

          {/* BACK TO TOP */}

          <a
            href="#home"
            className="w-11 h-11 rounded-full bg-cyan-500 hover:bg-cyan-600 text-white flex items-center justify-center hover:-translate-y-1 transition duration-300"
          >

            <FaArrowUp size={14}/>

          </a>

        </div>

      </div>

    </footer>
  );
}