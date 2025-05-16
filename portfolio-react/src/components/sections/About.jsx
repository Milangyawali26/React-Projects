import React from "react";
import RevealOnScroll from "../RevealOnScroll";

export const About = () => {
  const frontendSkills = ["HTML", "CSS", "JavaScript", "React", "tailwindcss"];
  const backendSkills = ["Node.js", "Express", "MongoDB"];
  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center py-20"
    >
     <RevealOnScroll>
     <div className="max-w-3xl mx-auto px-4">
        <h2 className="text-center text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-500 bg-clip-text text-transparent">
          About me
        </h2>

        <div className=" rounded-xl p-8 border-white/10 border hover:-translate-y-1 transform-all">
          <p className="text-gray-300 mb-6">
            I am a full-stack developer with a passion for creating beautiful
            and functional websites,amazing products.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
              <h3 className="text-xl font-bold mb-4"> Fronted</h3>
              <div className="flex flex-wrap gap-2">
                {frontendSkills.map((tech, key) => (
                  <span
                    key={key}
                    className="bg-blue-500 text-white-500 py-1 px-3 rounded-full text-sm hover:bg-blue-600
                            hover:shaddow-[0_2px_8px_rgba(0,0,0,0.24)]
                            "
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
            <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
              <h3 className="text-xl font-bold mb-4"> Backend</h3>
              <div className="flex flex-wrap gap-2">
                {backendSkills.map((tech, key) => (
                  <span
                    key={key}
                    className="bg-blue-500 text-white-500 py-1 px-3 rounded-full text-sm hover:bg-blue-600
                            hover:shaddow-[0_2px_8px_rgba(0,0,0,0.24)]
                            "
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
          <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
            <h3 className="text-xl font-bold mb-4"> 🏫 Education</h3>
            <ul className="list-disc list-inside text-gray-300 space-y-2">
              <li>
                <strong>BSc. CSIT</strong>- Tribhuvan University [2021-2025]
              </li>
              <li>
                Relevanet Coursework: DataStructures, Web development, Database
                Management System, Operating System, Computer Networking
              </li>
            </ul>
          </div>
          <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
            <h3 className="text-xl font-bold mb-4"> Work experience</h3>

            <div className="space-y-8 text-grey-300"></div>
            <div className="mb-4">
              <h4>Software Engineer at Softech Pvt. Ltd. [2022-2023]</h4>
              <p>Developed and maintained microservices for tech company.</p>
            </div>
            <div className="mb-4">
              <h4>Software Engineer at samriddhi Pvt. Ltd. [2023-2024]</h4>
              <p>Developed and maintained mobile application for college .</p>
            </div>
            <div className="mb-4">
              <h4>Intern at DEf solutions [2024-2025]</h4>
              <p>assisted in building front-end and components and integration with apis .</p>
            </div>
          </div>
        
          </div>
        </div>
     </RevealOnScroll>
     
    </section>
  );
};
