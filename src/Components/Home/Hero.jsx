import React, { useState } from "react";
import { Mail, X } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Hero = () => {
  const [showContact, setShowContact] = useState(false);

  return (
    <section id="home" style={{
        backgroundColor: "var(--background)",
        color: "var(--text)"
      }} className="min-h-screen bg-[#0b0f17] text-white flex items-center justify-center px-6">
      
      {/* KEEP THIS EXACTLY */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center max-w-7xl w-full">

        {/* LEFT SIDE */}
        <div className="flex flex-col gap-6">

          <span className="text-indigo-400 text-lg font-medium">
            Hi, I'm
          </span>

          <div className="space-y-2">
            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight">
              Gunaal Mahesh
            </h1>

            <h2 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-500 bg-clip-text text-transparent">
              Software Developer
            </h2>
          </div>

          <p className="text-gray-400 text-base md:text-lg leading-relaxed max-w-xl">
            Transitioning from 2 years of software testing experience to full
            stack development. I build responsive, scalable, and user-friendly
            web applications.
          </p>

          <div className="flex flex-wrap gap-4 pt-2">
            {/* <button className="px-6 py-3 bg-blue-600 hover:bg-blue-500 text-white font-medium rounded-xl transition-all shadow-lg shadow-blue-500/20">
              View My Resume →
            </button> */}
            <a
  href="/Gunaal_M_Software_Developer_CV.pdf"
  target="_blank"
  rel="noopener noreferrer"
  className="px-6 py-3 bg-blue-600 hover:bg-blue-500 text-white font-medium rounded-xl transition-all shadow-lg shadow-blue-500/20"
>
  View My Resume →
</a>

            {/* <button className="px-6 py-3 bg-slate-900 border border-slate-800 hover:border-slate-700 text-gray-300 font-medium rounded-xl transition-all">
              Contact Me
            </button> */}
          </div>

          {/* SOCIAL ICONS */}
          <div className="flex gap-3 pt-4">

            {/* Github */}
            <button
  onClick={() => window.open(
    "https://www.linkedin.com/in/gunaal-m-192315305/",
    "_blank",
    "noopener,noreferrer"
  )}
  aria-label="LinkedIn"
  className="p-3 bg-slate-900/60 border border-slate-800
             hover:border-indigo-500/50 rounded-xl
             text-gray-400 hover:text-white transition"
>
  <FaLinkedin size={24} />
</button>

            {/* LinkedIn */}
             <button
  onClick={() => window.open(
    "https://github.com/Gunaal-Mahesh",
    "_blank",
    "noopener,noreferrer"
  )}
  aria-label="GitHub"
  className="p-3 bg-slate-900/60 border border-slate-800
             hover:border-indigo-500/50 rounded-xl
             text-gray-400 hover:text-white transition"
>
  <FaGithub size={24} />
</button>

            {/* MAIL */}
            <div className="relative">

              <button
                onClick={() => setShowContact(!showContact)}
                className="p-3 bg-slate-900/60 border border-slate-800
                           hover:border-indigo-500/50 rounded-xl
                           text-gray-400 hover:text-white transition"
              >
                <Mail size={24} />
              </button>

              {/* POPUP */}
              {showContact && (
                <div
                  className="absolute bottom-full left-1/2 mb-3
                             -translate-x-1/2 w-72
                             rounded-2xl border border-slate-700
                             bg-[#111827] p-5 shadow-2xl z-50"
                >
                  <button
                    onClick={() => setShowContact(false)}
                    className="absolute right-3 top-3 text-gray-500
                               hover:text-white"
                  >
                    <X size={18} />
                  </button>

                  <h3 className="text-lg font-semibold text-white">
                    Contact Me
                  </h3>

                  <p className="mt-2 text-sm text-gray-400">
                    reach out!
                  </p>

                  <a
                    href="mailto:yourmail@gmail.com"
                    className="mt-4 block text-sm text-blue-400
                               hover:text-blue-300"
                  >
                    gunaal.mah@gmail.com
                  </a>

                  <p className="mt-2 text-sm text-gray-400">
                    +91 93603 76781
                  </p>
                </div>
              )}

            </div>
          </div>
        </div>

        {/* RIGHT SIDE — YOUR IDE */}
        <div className="relative w-full">

          <div className="w-full bg-[#111827] border border-slate-800 rounded-2xl shadow-2xl overflow-hidden">

            <div className="flex items-center gap-2 px-4 py-3 bg-[#1f2937]/50 border-b border-slate-800">
              <div className="w-3 h-3 rounded-full bg-red-500/80" />
              <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
              <div className="w-3 h-3 rounded-full bg-green-500/80" />
            </div>

            <pre className="p-9 text-sm font-mono text-gray-300 overflow-x-auto leading-relaxed">
              <code>
                <span className="text-purple-400">const</span>{" "}
                <span className="text-yellow-400">Developer</span> = () =&gt; {"{"}
                {"\n"}
                {"  "}
                <span className="text-purple-400">const</span> skills = [
                <span className="text-green-400">"React"</span>,{" "}
                <span className="text-green-400">"Java"</span>,{" "}
                <span className="text-green-400">"Spring Boot"</span>];
                {"\n"}
                {"  "}
                <span className="text-purple-400">return</span> ({"\n"}
                {"    "}&lt;<span className="text-red-400">div</span>{" "}
                <span className="text-blue-400">className</span>=
                <span className="text-green-400">"developer"</span>&gt;
                {"\n"}
                {"      "}&lt;<span className="text-red-400">h1</span>&gt;
                Building ideas into reality
                &lt;/<span className="text-red-400">h1</span>&gt;
                {"\n"}
                {"    "}&lt;/<span className="text-red-400">div</span>&gt;
                {"\n"}
                {"  "});{"\n"}
                {"};"}
              </code>
            </pre>
          </div>

          {/* EXPERIENCE BADGE */}
          <div className="absolute -top-4 -right-4 bg-slate-900/90 border border-slate-700/80 backdrop-blur-md p-4 rounded-2xl shadow-xl flex flex-col items-center">
            <span className="text-2xl font-bold text-indigo-400">
              2+
            </span>
            <span className="text-xs text-gray-400">
              Years Experience
            </span>
          </div>

          {/* BOTTOM BADGE */}
          <div className="absolute -bottom-6 -left-6 bg-slate-900/90 border border-slate-700/80 backdrop-blur-md px-5 py-3 rounded-2xl shadow-xl flex items-center gap-3">
            <span className="text-indigo-400 text-lg font-mono">
              &lt;/&gt;
            </span>

            <div className="text-xs">
              <p className="font-semibold text-white">Plan C</p>
              <p className="text-gray-400">for Coding</p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default Hero;
