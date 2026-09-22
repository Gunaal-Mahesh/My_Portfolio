import React from "react";
import {
  Monitor,
  Server,
  Database,
  Bot,
  ShieldCheck,
  Wrench,
  ArrowRight,
  BotIcon,
} from "lucide-react";


const Skills = () => {
  const skills = [
    {
      title: "Frontend",
      icon: Monitor,
      color: "text-cyan-400",
      dot: "bg-cyan-400",
      skills: [
        "React",
        "JavaScript (ES6+)",
        "HTML5, CSS3",
        "Tailwind CSS",
        "React Router",
      ],
    },
    {
      title: "Backend",
      icon: Server,
      color: "text-green-400",
      dot: "bg-green-400",
      skills: [
        "Java",
        "Spring Boot",
        "REST APIs",
        "JWT",
        "Maven",
      ],
    },
    {
      title: "AI",
      icon: BotIcon,
      color: "text-purple-400",
      dot: "bg-purple-400",
      skills: [
        "LLM",
        "RAG",
        "LangChain",
        "Vector Databases",
      ],
    },
    {
      title: "Testing",
      icon: ShieldCheck,
      color: "text-yellow-400",
      dot: "bg-yellow-400",
      skills: [
        "Selenium",
        "Playwright",
        "JUnit",
        "Cucumber",
        "Postman",
        "TestNG",
      ],
    },
    {
      title: "Tools & Others",
      icon: Wrench,
      color: "text-cyan-300",
      dot: "bg-cyan-300",
      skills: [
        "Git & GitHub",
        "Docker",
        "CI/CD",
        "Jenkins",
        "AWS",
      ],
    },
  ];

  return (
    <section id="skills" className="bg-[#0b0f17] px-6 py-5  text-white"
    style={{
        backgroundColor: "var(--background)",
        color: "var(--text)"
      }}>
      <div className="mx-auto max-w-7xl">

        {/* Header */}
        <div className="mb-5 flex items-end justify-between">
          <div>
            <p className="mb-1 text-[30px] font-bold uppercase tracking-wide text-blue-400">
              My Skills
            </p>

            <h2 className="text-lg font-semibold text-gray-200">
              Technologies I work with
            </h2>
          </div>

          {/* <button className="flex items-center gap-2 text-[10px] text-blue-400 transition hover:text-blue-300">
            View All Skills
            <ArrowRight size={13} />
          </button> */}
        </div>

        {/* Skill Cards */}
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-5">
          {skills.map((category) => {
            const Icon = category.icon;

            return (
              <div
                key={category.title}
                className="rounded-lg border border-slate-800
                           bg-[#111722] px-4 py-4
                           transition duration-300
                           hover:-translate-y-1
                           hover:border-slate-700
                           hover:bg-[#131b28]"
              >
                {/* Card title */}
                <div className="mb-3 flex items-center gap-3">
                  <Icon
                    size={22}
                    strokeWidth={1.7}
                    className={category.color}
                  />

                  <h3
                    className={`text-xl font-bold ${category.color}`}
                  >
                    {category.title}
                  </h3>
                </div>

                {/* Skills */}
                <ul className="space-y-1.5">
                  {category.skills.map((skill) => (
                    <li
                      key={skill}
                      className="flex items-center gap-2
                                 text-[15px] text-gray-400"
                    >
                      <span
                        className={`h-1 w-1 rounded-full ${category.dot}`}
                      />

                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default Skills;
