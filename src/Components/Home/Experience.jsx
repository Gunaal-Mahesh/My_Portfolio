import React from "react";
import { ArrowRight } from "lucide-react";


const Experience = () => {
  return (
    <section id="experience" className="bg-[#020817] text-white px-6 py-10"
    style={{
        backgroundColor: "var(--background)",
        color: "var(--text)"
      }}>
      
      {/* Header */}
      <div className="flex items-center justify-between mb-5">
        <div>
          <p className="text-xs text-blue-400 uppercase tracking-wider">
            Experience
          </p>

          <h2 className="text-2xl font-semibold mt-1">
            My Professional Journey
          </h2>
        </div>

        {/* <button className="flex items-center gap-2 text-sm text-blue-400 hover:text-blue-300 transition">
          View Full Experience
          <ArrowRight size={16} />
        </button> */}
      </div>

      {/* Experience Card */}
      <div className="relative bg-[#0b1424] border border-slate-800 rounded-lg p-4 md:p-5">

        {/* Timeline dot */}
        <div className="absolute left-3 top-8 w-3 h-3 rounded-full bg-[#020817] border-2 border-blue-500">
        </div>

        {/* Timeline line */}
        <div className="absolute left-[18px] top-11 bottom-0 w-px bg-slate-700">
        </div>

        <div className="flex flex-col md:flex-row ml-5">

          {/* Left section */}
          <div className="flex items-center gap-4 md:w-[32%] md:pr-6">

            {/* TCS Logo */}
            <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center shrink-0">
              <span className="text-[#e31b23] font-bold text-xl">
            <img src="/tcs.png" alt="TCS" />


              </span>
            </div>

            <div>
              <h3 className="text-sm font-semibold">
                ADM Analyst
              </h3>

              <p className="text-xs text-slate-400 mt-1">
                Tata Consultancy Services
              </p>

              <div className="flex items-center gap-2 mt-2">
                <span className="text-xs text-slate-400">
                  Sep 2024 – Oct 2026
                </span>

                <span className="text-[10px] px-2 py-1 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-400">
                  2 Years
                </span>
              </div>
            </div>
          </div>

          {/* Divider */}
          <div className="hidden md:block w-px bg-slate-800 mx-5">
          </div>

          {/* Right section */}
          <div className="md:w-[68%] pt-5 md:pt-0">
            <ul className="space-y-2 text-xs text-slate-300 leading-relaxed">

              <li className="flex gap-2">
                <span className="text-slate-500">•</span>
                <span>
                  Designed and executed automated test cases using Selenium,
                  Playwright and TestNG.
                </span>
              </li>

              <li className="flex gap-2">
                <span className="text-slate-500">•</span>
                <span>
                  Performed API testing using Postman and validation of RESTful
                  services.
                </span>
              </li>

              <li className="flex gap-2">
                <span className="text-slate-500">•</span>
                <span>
                  Worked in Agile teams, participated in sprint planning,
                  daily stand-ups and retrospectives.
                </span>
              </li>

              <li className="flex gap-2">
                <span className="text-slate-500">•</span>
                <span>
                  Logged and tracked defects in JIRA and collaborated with
                  developers for issue resolution.
                </span>
              </li>

              <li className="flex gap-2">
                <span className="text-slate-500">•</span>
                <span>
                  Maintained CI/CD pipelines for automated regression test
                  suites.
                </span>
              </li>

            </ul>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Experience;