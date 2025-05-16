import React from "react";
import ReavelOnScrool from "../RevealOnScroll";
export const Contact = () => {
  return (
    <section
      id="contact"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <ReavelOnScrool>
        <div className="px-4 w-150 space-y-3">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-500 bg-clip-text text-transparent text-center">
            Get in touch
          </h2>
          <form  action=""></form>
          <div className="relative">
            <input
              placeholder="Name..."
              type="text"
              name="name"
              id="name"
              required
              className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white transition focus:outline-none focus:border-blue-500 focus:bg:blue-500/5 "
            />
          </div>
          <div className="relative">
            <input
              placeholder="example@gmail.com"
              type="email"
              name="email"
              id="email"
              required
              className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white transition focus:outline-none focus:border-blue-500 focus:bg:blue-500/5 "
            />
          </div>
          <div className="relative">
            <textarea
              placeholder="Your message..."
              name="message"
              id="message"
              rows={5}
              required
              className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white transition focus:outline-none focus:border-blue-500 focus:bg:blue-500/5 "
            />
          </div>
          <button type="submit" className="bg-blue-500 text-white py-3 px-6 rounded font-medium transition-all duration-200 relative overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.2)] hover:bg-blue-600">
            send message
          </button>
        </div>
      </ReavelOnScrool>
    </section>
  );
};
