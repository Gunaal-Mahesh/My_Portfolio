import { useState } from "react";
import projects from "../../data/Projects.js";

const categories = ["All", "Web Apps", "AI / LLM", "Full Stack"];

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects =
    activeCategory === "All"
      ? projects
      : projects.filter((project) => project.category === activeCategory);

  return (
    <section
      id="projects"
      className="min-h-screen bg-[#020b18] px-6 py-20 text-white"
      style={{
        backgroundColor: "var(--background)",
        color: "var(--text)"
      }}
    >
      <div className="mx-auto max-w-6xl">

        {/* Heading + Filters */}
        <div className="mb-8 flex flex-col gap-5 md:flex-row md:items-end md:justify-between">

          <div>
            <p className="mb-1 text-xs font-semibold uppercase tracking-widest text-blue-400">
              Things I've Built
            </p>

            <h2 className="text-2xl font-bold  md:text-3xl">
              My Projects
            </h2>
          </div>

          {/* Category buttons */}
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`rounded-full px-4 py-1.5 text-xs font-medium transition ${
                  activeCategory === category
                    ? "bg-blue-600 text-white"
                    : "border border-slate-700 bg-[#071528] text-slate-400 hover:border-blue-500 hover:text-white"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">

          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="group overflow-hidden rounded-lg border border-slate-800 bg-[#061426] transition duration-300 hover:-translate-y-1 hover:border-blue-500/50 hover:shadow-lg hover:shadow-blue-500/10"
            >

              {/* Project Image */}
              {/* <div className="h-40 overflow-hidden bg-slate-900">
                <img
                  src={project.image}
                  alt={project.title}
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                />
              </div> */}

              {/* Project Content */}
              <div className="p-4">

                <h3 className="mb-2 text-sm font-semibold text-white">
                  {project.title}
                </h3>

                <p className="mb-4 text-xs leading-relaxed text-slate-400">
                  {project.description}
                </p>

                <p className="mb-2 text-[10px] font-semibold uppercase tracking-wider text-slate-500">
                  Skills used
                </p>

                <div className="flex flex-wrap gap-1.5">
                  {project.skills.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-full border border-slate-700 bg-[#0a1a2e] px-2.5 py-1 text-[10px] text-slate-300"
                    >
                      {skill}
                    </span>
                  ))}
                </div>

              </div>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
};

export default Projects;