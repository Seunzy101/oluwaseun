// src/components/Contact.jsx
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";
import { useState } from "react";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  return (
    <section id="contact" className="px-6 md:px-12 py-20">
      <p className="text-primary-light text-sm font-semibold tracking-widest mb-1 font-body">Get In Touch</p>
      <h2 className="font-sans font-bold text-3xl text-white mb-10">Let's Work Together</h2>

      <div className="flex flex-col md:flex-row gap-12">
        {/* Info */}
        <div className="flex-1 flex flex-col gap-6">
          <p className="text-slate-400 font-body">Have a project in mind or want to collaborate? I'd love to hear from you.</p>
          {[
            { icon: FaEnvelope, label: "Email", value: "ashiruseun17@gmail.com" },
            { icon: FaPhone, label: "Phone", value: "+234 906 084 6432" },
            { icon: FaMapMarkerAlt, label: "Location", value: "Lagos, Nigeria" },
          ].map(({ icon: Icon, label, value }) => (
            <div key={label} className="flex items-center gap-4">
              <div className="w-10 h-10 bg-card border border-border rounded-lg flex items-center justify-center text-primary-light">
                <Icon />
              </div>
              <div>
                <p className="text-slate-500 text-xs font-body">{label}</p>
                <p className="text-white text-sm font-body">{value}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Form */}
        <div className="flex-1 flex flex-col gap-4">
          <div className="flex flex-col sm:flex-row gap-4">
            <input
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Your Name"
              className="flex-1 bg-card border border-border rounded-lg px-4 py-3 text-white text-sm font-body placeholder-slate-600 focus:outline-none focus:border-primary"
            />
            <input
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="Your Email"
              className="flex-1 bg-card border border-border rounded-lg px-4 py-3 text-white text-sm font-body placeholder-slate-600 focus:outline-none focus:border-primary"
            />
          </div>
          <textarea
            name="message"
            value={form.message}
            onChange={handleChange}
            placeholder="Your Message"
            rows={5}
            className="bg-card border border-border rounded-lg px-4 py-3 text-white text-sm font-body placeholder-slate-600 focus:outline-none focus:border-primary resize-none"
          />
          <button className="bg-primary hover:bg-primary/90 text-white px-6 py-3 rounded-lg font-body font-medium w-fit transition-all">
            Send Message ✉
          </button>
        </div>
      </div>
    </section>
  );
}