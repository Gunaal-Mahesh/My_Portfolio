import React from 'react'
import { Link } from 'react-router-dom'
import { useTheme } from "../../ThemeContext";






const Navbar = () => {
    const { darkMode, toggleTheme } = useTheme();
  return (
    <nav className=" h-16 border-b border-gray-800 bg-[#050a10] "
    style={{
        backgroundColor: "var(--background)",
        color: "var(--text)"
      }}>
      <div className="mx-auto flex h-full items-center">

        {/* Logo */}
        <Link to="/" className="flex items-center gap-3">
          <span className="text-2xl font-bold text-blue-500">
            GM
          </span>

          <span className="text-sm font-semibold ">
            GUNAAL MAHESH
          </span>
        </Link>

        {/* Navigation */}
        <div className="ml-auto hidden items-center gap-6 md:flex">
          {/* <Link to="/" className="text-sm text-blue-400">
            Home
          </Link> */}
                  <a
  href="#home"
  className="text-sm  hover:text-grey"
>Home</a>

          {/* <Link to="/about" className="text-sm text-gray-400 hover:text-white">
            About
          </Link> */}

          {/* <Link to="/projects" className="text-sm text-gray-400 hover:text-white"  to="#projects">
          
            Projects
          </Link> */}
          <a
  href="#projects"
  className="text-sm  hover:text-white"
>
  Projects
</a>

          {/* <Link to="/experience" className="text-sm text-gray-400 hover:text-white">
            Experience
          </Link> */}
                  <a
  href="#experience"
  className="text-sm  hover:text-white"
>Experience</a>

                 <a
  href="#skills"
  className="text-sm  hover:text-white"
>Skills</a>

          {/* <Link to="/contact" className="text-sm text-gray-400 hover:text-white">
            Contact
          </Link> */}
        </div>

        {/* Resume */}
        {/* <button className="ml-8 rounded-md bg-blue-600 px-4 py-2 text-sm font-semibold text-white hover:bg-blue-700">
          Resume ↓ */}
          {/* <a
  href="/resume.pdf"
  target="_blank"
  rel="noopener noreferrer"
  className="bg-blue-600 text-white font-semibold px-4 py-2 rounded-lg hover:bg-blue-700 transition"
>
  Resume ↓
</a> */}
        {/* </button> */}

        {/* Theme */}
      <button onClick={toggleTheme} 
      className="px-4">
        {darkMode ? "☀️" : "🌙"}
      </button>

      </div>
    </nav>
  );
  
}

export default Navbar