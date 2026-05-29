// src/components/Footer.jsx
import { FaFacebook, FaLinkedin, FaTwitter, FaGithub, FaInstagram } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="border-t border-border px-6 md:px-12 py-12">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-8">
        <div>
          <div className="flex items-center gap-2 font-sans font-bold text-xl text-white mb-3">
            <span className="text-primary-light">⬡</span> Oluwaseun.
          </div>
          <p className="text-slate-500 text-xs font-body">© 2024 Oluwaseun Ashiru. All rights reserved.</p>
        </div>

        {[
          { title: "Quick Links", items: ["Home","About","Projects","Skills","Experience","Contact"] },
          { title: "Services", items: ["UI/UX Design","Full Stack Development","Product Design","Mobile Design"] },
        ].map((col) => (
          <div key={col.title}>
            <h4 className="font-sans font-semibold text-white mb-3 text-sm">{col.title}</h4>
            <ul className="flex flex-col gap-2">
              {col.items.map((item) => (
                <li key={item}>
                  <a href="#" className="text-slate-500 text-xs font-body hover:text-primary-light transition-colors">{item}</a>
                </li>
              ))}
            </ul>
          </div>
        ))}

        <div>
          <h4 className="font-sans font-semibold text-white mb-3 text-sm">Follow Me</h4>
          <div className="flex gap-3 flex-wrap">
            {[FaFacebook, FaLinkedin, FaTwitter, FaGithub, FaInstagram].map((Icon, i) => (
              <a key={i} href="#" className="text-slate-500 hover:text-primary-light transition-colors">
                <Icon />
              </a>
            ))}
          </div>
          <p className="text-slate-500 text-xs font-body mt-6">Let's build something amazing together.</p>
        </div>
      </div>
    </footer>
  );
}