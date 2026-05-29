// src/components/Projects.jsx

import {
  FaGithub,
  FaExternalLinkAlt,
} from "react-icons/fa";

const projects = [
  {
    title: "Tulip Hospitality App",
    type: "Mobile App Design",
    description:
      "A modern hospitality mobile app UI focused on booking and user experience.",
    image: "/images/project1.png",
    tags: ["Figma", "UI/UX"],
    live: "https://www.figma.com/design/gnHMAIcgloE0osQRYN70Jq/Tulip--Case-Study?node-id=0-1&t=ALxY7lhSDqAbU7PU-1",
    github: "#",
    color: "from-orange-500/20",
  },

  {
    title: "Travel Landing Page",
    type: "Web Design",
    description:
      "Responsive travel landing page with smooth animations and modern layout.",
    image: "/images/project2.png",
    tags: ["Figma", "UI/UX"],
    live: "#",
    github: "#",
    color: "from-green-500/20",
  },

  {
    title: "Travel Agency Website",
    type: "Web Development",
    description:
      "Modern website for a travel agency company with smooth and modern layout.",
    image: "/images/project3.png",
    tags: ["Next.js", "Tailwind CSS"],
    live: "https://mywebsite-smoky-iota.vercel.app/",
    github: "https://github.com/Seunzy101/Mywebsite.git",
    color: "from-blue-500/20",
  },

  {
    title: "Church Management Website",
    type: "Web Development",
    description:
      "Clean website for a church management system.",
    image: "/images/project4.png",
    tags: ["React", "Next.js"],
    live: "https://rccg-pro-4.vercel.app/",
    github: "https://github.com/Seunzy101/RCCG-PRO4.git",
    color: "from-purple-500/20",
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      data-aos="zoom-in"
      className="px-4 sm:px-6 md:px-12 py-20"
    >

      {/* Heading */}

      <div className="text-center mb-14">

        <p className="text-cyan-400 text-sm font-semibold tracking-widest mb-3">
          Featured Projects
        </p>

        <h2 className="font-bold text-3xl sm:text-4xl text-white mb-4">
          Some of My Recent Works
        </h2>

        <p className="text-slate-400 max-w-2xl mx-auto text-sm sm:text-base">
          Here are some projects I’ve worked on recently using modern technologies and design systems.
        </p>

      </div>

      {/* Projects Grid */}

      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6">

        {projects.map((p) => (

          <div
            key={p.title}
            className="bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden hover:-translate-y-2 hover:border-cyan-400 transition duration-300 group"
          >

            {/* IMAGE */}

            <div className="overflow-hidden relative">

              <img
                src={p.image}
                alt={p.title}
                className="w-full h-52 object-cover group-hover:scale-110 transition duration-700"
              />

              {/* Overlay */}

              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition duration-300 flex items-center justify-center gap-4">

                <a
                  href={p.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-11 h-11 rounded-full bg-cyan-500 flex items-center justify-center text-white"
                >

                  <FaExternalLinkAlt size={14} />

                </a>

                <a
                  href={p.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-11 h-11 rounded-full bg-slate-800 border border-white/10 flex items-center justify-center text-white"
                >

                  <FaGithub size={16} />

                </a>

              </div>

            </div>

            {/* CONTENT */}

            <div className="p-5">

              <h3 className="font-semibold text-white text-lg mb-1">
                {p.title}
              </h3>

              <p className="text-cyan-400 text-sm mb-3">
                {p.type}
              </p>

              <p className="text-slate-400 text-sm leading-7 mb-5">
                {p.description}
              </p>

              {/* TAGS */}

              <div className="flex flex-wrap gap-2">

                {p.tags.map((t) => (

                  <span
                    key={t}
                    className="bg-slate-800 border border-slate-700 text-slate-300 text-xs px-3 py-1 rounded-full"
                  >

                    {t}

                  </span>

                ))}

              </div>

            </div>

          </div>

        ))}

      </div>

    </section>
  );
}