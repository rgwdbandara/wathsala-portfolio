function Hero() {
  return (
    <section
      id="home"
      className="mx-auto flex min-h-[90vh] max-w-6xl items-center px-6 py-16"
    >
      <div className="max-w-3xl">
        <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-cyan-400">
          Full Stack Software Engineer Intern
        </p>

        <h1 className="mb-6 text-4xl font-extrabold leading-tight text-white md:text-6xl">
          Hi, I’m Wathsala Bandara
        </h1>

        <p className="mb-8 max-w-2xl text-base leading-8 text-gray-300 md:text-lg">
          Computer Science undergraduate passionate about building scalable web
          applications using React, Node.js, and MongoDB. I enjoy creating
          practical software solutions, exploring DevOps practices, and working
          on real-world projects.
        </p>

        <div className="flex flex-wrap gap-4">
          <a
            href="https://github.com/rgwdbandara"
            target="_blank"
            rel="noreferrer"
            className="rounded-xl bg-cyan-500 px-6 py-3 font-semibold text-slate-950 transition hover:bg-cyan-400"
          >
            View GitHub
          </a>

          <a
            href="https://www.linkedin.com/in/wbandara"
            target="_blank"
            rel="noreferrer"
            className="rounded-xl border border-white/20 px-6 py-3 font-semibold text-white transition hover:border-cyan-400 hover:text-cyan-400"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </section>
  );
}

export default Hero;