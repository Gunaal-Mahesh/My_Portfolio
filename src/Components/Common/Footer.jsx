import React from "react";
import {ArrowUp, PhoneCallIcon} from "lucide-react";
import { Mail, X } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="bg-[#0a0a0a] border-t border-gray-800 text-gray-400"
    style={{
        backgroundColor: "var(--background)",
        color: "var(--text)"
      }}>
      
      <div className="max-w-7xl mx-auto px-6 py-14">

        {/* Main Footer */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">

          {/* About */}
          <div>
            <h2 className="text-2xl font-bold text-white mb-4">
              Gunaal M
            </h2>

            <p className="text-sm leading-6">
              Software Developer passionate about building modern,
              scalable and user-friendly web applications.
            </p>

            <p className="text-sm mt-4">
              React • Java • Spring Boot • AI
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">
              Quick Links
            </h3>

            <div className="flex flex-col gap-3 text-sm">
              <a href="#home" className="hover:text-white transition">
                Home
              </a>

              <a href="#about" className="hover:text-white transition">
                About
              </a>

              <a href="#skills" className="hover:text-white transition">
                Skills
              </a>

              <a href="#projects" className="hover:text-white transition">
                Projects
              </a>

              <a href="#contact" className="hover:text-white transition">
                Contact
              </a>
            </div>
          </div>

          {/* Projects */}
          {/* <div>
            <h3 className="text-white font-semibold mb-4">
              Projects
            </h3>

            <div className="flex flex-col gap-3 text-sm">
              <a href="#projects" className="hover:text-white transition">
                Expense Tracker
              </a>

              <a href="#projects" className="hover:text-white transition">
                Currency Converter
              </a>

              <a href="#projects" className="hover:text-white transition">
                AI Chatbot
              </a>

              <a href="#projects" className="hover:text-white transition">
                Library Management System
              </a>
            </div>
          </div> */}

          {/* Connect */}
          <div>
            <h3 className="text-white font-semibold mb-4">
              Let's Connect
            </h3>

            <p className="text-sm leading-6 mb-5">
              Interested in working together or have an opportunity?
              Please reach out to me.
            </p>

            <a
              href="mailto:gunaal.mah@gmail.com"
              className="flex items-center gap-2 mb-2 text-sm hover:text-white transition"
            >
              <Mail size={17} />
              gunaal.mah@gmail.com
            </a>
           <a
  href="tel:+919360376781"
  className="flex items-center gap-2 text-sm text-gray-700 transition hover:text-blue-500 dark:text-gray-300 dark:hover:text-white"
>
  <PhoneCallIcon size={17} />
  +91 9360376781
</a>
            

            <div className="flex gap-4 mt-5">
              <a
                href="https://github.com/Gunaal-Mahesh"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition"
              >
                <FaGithub size={20} />
              </a>

              <a
                href="https://www.linkedin.com/in/gunaal-m-192315305/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition"
              >
                <FaLinkedin size={20} />
              </a>
              
            </div>
          </div>

        </div>

        {/* Bottom */}
        <div className="border-t border-gray-800 mt-12 pt-6 flex flex-col md:flex-row justify-between items-center gap-4">

          <p className="text-sm">
            © {new Date().getFullYear()} Gunaal M. All rights reserved.
          </p>

          <p className="text-sm">
            Built with React & Tailwind CSS
          </p>

          <button
            onClick={scrollToTop}
            className="p-2 border border-gray-700 rounded-full hover:border-gray-400 hover:text-white transition"
            aria-label="Back to top"
          >
            <ArrowUp size={18} />
          </button>

        </div>

      </div>
    </footer>
  );
};

export default Footer;