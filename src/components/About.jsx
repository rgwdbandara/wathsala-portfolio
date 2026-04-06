import { useState } from "react";

function About() {
  const [activeTab, setActiveTab] = useState("skills");

  return (
    <section id="about" className="px-6 py-24 text-white bg-black">
      <div className="grid items-center max-w-6xl gap-12 mx-auto md:grid-cols-2">
        {/* LEFT IMAGE */}
        <div className="flex justify-center md:justify-start">
          <div className="overflow-hidden rounded-3xl bg-[#111111] shadow-2xl">
            <img
              src="/images/wath-photo.jpeg"
              alt="About Wathsala"
              className="h-[420px] w-[320px] object-cover md:h-[480px] md:w-[360px]"
            />
          </div>
        </div>

        {/* RIGHT CONTENT */}
        <div>
          <h2 className="mb-6 text-4xl font-extrabold md:text-5xl">
            About <span className="text-green-400">Me</span>
          </h2>

          <p className="max-w-2xl mb-8 leading-8 text-gray-300">
            I am a Computer Science undergraduate at NSBM Green University,
            passionate about full stack development, modern web technologies,
            and real-world software engineering. I enjoy building responsive
            applications, designing clean user interfaces, and continuously
            improving my skills in backend development, DevOps, and problem
            solving.
          </p>

          {/* TAB STYLE TITLES */}
          <div className="flex gap-8 mb-8 text-lg font-medium">
            <button
              onClick={() => setActiveTab("skills")}
              className={`pb-2 ${
                activeTab === "skills"
                  ? "border-b-2 border-green-400 text-green-400"
                  : "text-white/80 hover:text-green-400"
              }`}
            >
              Skills
            </button>

            <button
              onClick={() => setActiveTab("experience")}
              className={`pb-2 ${
                activeTab === "experience"
                  ? "border-b-2 border-green-400 text-green-400"
                  : "text-white/80 hover:text-green-400"
              }`}
            >
              Experience
            </button>

            <button
              onClick={() => setActiveTab("education")}
              className={`pb-2 ${
                activeTab === "education"
                  ? "border-b-2 border-green-400 text-green-400"
                  : "text-white/80 hover:text-green-400"
              }`}
            >
              Education
            </button>
          </div>

          {/* CONTENT */}
          <div className="space-y-5 text-gray-300">
            {/* SKILLS */}
            {activeTab === "skills" && (
              <>
                <div>
                  <p className="text-sm font-semibold text-green-400">Frontend</p>
                  <p>React.js, Next.js, HTML5, CSS3, Tailwind CSS</p>
                </div>

                <div>
                  <p className="text-sm font-semibold text-green-400">Backend</p>
                  <p>Node.js, Express.js, Flask, REST APIs</p>
                </div>

                <div>
                  <p className="text-sm font-semibold text-green-400">Databases</p>
                  <p>MongoDB, Firebase</p>
                </div>

                <div>
                  <p className="text-sm font-semibold text-green-400">Tools</p>
                  <p>Git, GitHub, CI/CD, Docker, Vercel, Render</p>
                </div>
              </>
            )}

            {/* EXPERIENCE */}
            {activeTab === "experience" && (
              <>
                <div>
                  <p className="text-sm font-semibold text-green-400">
                    Mar 2024 - May 2024
                  </p>
                  <p>
                    Finance Department Member - IEEE Duothan 4.0 <br />
                    <span className="text-sm text-gray-400">
                      IEEE Student Branch - NSBM Green University
                    </span>
                  </p>
                </div>

                <div>
                  <p className="text-sm font-semibold text-green-400">
                    Nov 2024 - Jan 2025
                  </p>
                  <p>
                    Finance Team Member - DataDive 2025 (Power BI Workshop & Competition) <br />
                    <span className="text-sm text-gray-400">
                      Association of Computer and Data Science - NSBM
                    </span>
                  </p>
                </div>
              </>
            )}

            {/* EDUCATION */}
            {activeTab === "education" && (
              <>
                <div>
                  <p className="text-sm font-semibold text-green-400">
                    NSBM Green University
                  </p>
                  <p>BSc. (Hons) in Computer Science</p>
                  <p className="text-sm text-gray-400">3rd Year Undergraduate</p>
                </div>

                <div>
                  <p className="text-sm font-semibold text-green-400">
                    Nugawela Central College, Kandy
                  </p>
                  <p>Advanced Level (A/L)</p>
                </div>

                <div>
                  <p className="text-sm font-semibold text-green-400">Focus Areas</p>
                  <p>
                    Full Stack Development, UI/UX Design, Modern Web Technologies
                  </p>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;