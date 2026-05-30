// src/components/Contact.jsx

import { useState } from "react";
import emailjs from "@emailjs/browser";
import {
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
} from "react-icons/fa";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);
    setStatus("");

    try {
      const response = await emailjs.send(
        "service_9kmnu6p",
        "template_pbzp77i",
        {
          name: form.name,
          email: form.email,
          message: form.message,
        },
        "aTDpfSl-Zt64AmOdc"
      );

      console.log("EMAIL SENT:", response);

      setStatus("✅ Message sent successfully!");

      setForm({
        name: "",
        email: "",
        message: "",
      });

    } catch (error) {

      console.log("FULL ERROR:", error);
      console.log("STATUS:", error?.status);
      console.log("TEXT:", error?.text);

      setStatus(
        error?.text ||
        error?.message ||
        "❌ Failed to send message."
      );
    }

    setLoading(false);
  };

  return (
    <section
      id="contact"
      data-aos="fade-left"
      className="px-6 md:px-12 py-20"
    >
      <div className="max-w-6xl mx-auto">

        <p className="text-cyan-400 text-sm font-semibold tracking-widest mb-2">
          GET IN TOUCH
        </p>

        <h2 className="text-3xl md:text-4xl font-bold text-white mb-10">
          Let's Work Together
        </h2>

        <div className="grid md:grid-cols-2 gap-12">

          {/* LEFT */}

          <div>

            <p className="text-slate-400 mb-8 leading-7">
              Have a project in mind or need a developer
              for your next big idea? Feel free to contact me.
            </p>

            <div className="space-y-6">

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-slate-800 border border-slate-700 rounded-xl flex items-center justify-center text-cyan-400">
                  <FaEnvelope />
                </div>

                <div>
                  <p className="text-slate-500 text-sm">
                    Email
                  </p>
                  <p className="text-white">
                    ashiruseun17@gmail.com
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-slate-800 border border-slate-700 rounded-xl flex items-center justify-center text-cyan-400">
                  <FaPhone />
                </div>

                <div>
                  <p className="text-slate-500 text-sm">
                    Phone
                  </p>
                  <p className="text-white">
                    +234 906 084 6432
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-slate-800 border border-slate-700 rounded-xl flex items-center justify-center text-cyan-400">
                  <FaMapMarkerAlt />
                </div>

                <div>
                  <p className="text-slate-500 text-sm">
                    Location
                  </p>
                  <p className="text-white">
                    Lagos, Nigeria
                  </p>
                </div>
              </div>

            </div>

          </div>

          {/* RIGHT */}

          <form
            onSubmit={handleSubmit}
            className="space-y-4"
          >

            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Your Name"
              required
              className="w-full bg-slate-800 border border-slate-700 rounded-xl px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400"
            />

            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="Your Email"
              required
              className="w-full bg-slate-800 border border-slate-700 rounded-xl px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400"
            />

            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              rows="6"
              placeholder="Your Message"
              required
              className="w-full bg-slate-800 border border-slate-700 rounded-xl px-4 py-3 text-white placeholder-slate-500 resize-none focus:outline-none focus:border-cyan-400"
            />

            <button
              type="submit"
              disabled={loading}
              className="bg-cyan-500 hover:bg-cyan-600 disabled:opacity-60 text-white px-8 py-3 rounded-xl font-medium transition"
            >
              {loading ? "Sending..." : "Send Message"}
            </button>

            {status && (
              <p className="text-sm mt-2 text-cyan-400">
                {status}
              </p>
            )}

          </form>

        </div>

      </div>
    </section>
  );
}