function Skills() {
  const skills = [
    "React.js",
    "Next.js",
    "HTML5",
    "CSS3",
    "Tailwind CSS",
    "Node.js",
    "Express.js",
    "Flask",
    "MongoDB",
    "Firebase",
    "Git",
    "GitHub",
    "CI/CD",
    "Docker",
    "Figma",
    "Responsive Design",
    "REST APIs",
    "JavaScript",
  ];

  return (
    <section id="skills" className="px-4 py-20 text-white bg-black md:px-6 md:py-24">
      <div className="max-w-6xl mx-auto">
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-green-400">
          Expertise
        </p>

        <h2 className="mb-4 text-3xl font-bold md:text-5xl">
          My <span className="text-green-400">Skills</span>
        </h2>

        <p className="max-w-2xl mb-12 text-gray-400">
          A combination of frontend, backend, database, DevOps, and UI/UX skills
          that I use to build modern digital products.
        </p>

        <div className="flex flex-wrap gap-4">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="rounded-full border border-white/10 bg-[#0f0f12] px-5 py-3 text-sm font-medium text-white transition hover:border-green-400 hover:text-green-400"
            >
              {skill}
            </div>
          ))}
        </div>

        <div className="mt-12">
          <a
            href="/images/files/Wathsala_Bandara_FullStack_Intern_CV.pdf"
            download="Wathsala_Bandara_Intern_CV.pdf"
            className="inline-flex px-6 py-3 font-semibold text-black transition bg-green-500 rounded-lg hover:bg-green-400"
          >
            Download CV
          </a>
        </div>
      </div>
    </section>
  );
}

export default Skills;