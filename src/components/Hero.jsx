function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen overflow-hidden bg-[#06110B] px-4 pt-24 text-white md:px-6 md:pt-16"
    >
      <div className="grid items-center max-w-6xl gap-10 mx-auto md:min-h-screen md:grid-cols-2">
        {/* RIGHT IMAGE - mobile first */}
        <div className="flex justify-center order-1 md:order-2 md:justify-end">
          <div className="relative">
            {/* Glow background */}
            <div className="absolute inset-0 rounded-full bg-green-500 opacity-30 blur-[100px] md:blur-[120px]"></div>

            {/* Image container */}
            <div className="relative z-10 overflow-hidden rounded-full border border-white/10 bg-black shadow-[0_0_70px_rgba(34,197,94,0.25)]">
              <img
                src="/images/wathsala-photo.png"
                alt="Wathsala"
                className="h-[240px] w-[240px] rounded-full object-cover object-top sm:h-[280px] sm:w-[280px] md:h-[500px] md:w-[400px]"
              />
            </div>
          </div>
        </div>

        {/* LEFT TEXT */}
        <div className="order-2 text-center md:order-1 md:text-left">
          <p className="mb-4 text-xl text-green-300 sm:text-2xl md:text-3xl">
            Full Stack Developer | UI/UX Enthusiast
          </p>

          <h1 className="mb-6 text-4xl font-extrabold leading-tight sm:text-5xl md:text-7xl">
            Hi, I'm <span className="text-green-400">Wathsala</span>
            <br />
            Bandara
          </h1>

          <p className="max-w-xl mx-auto mb-8 text-sm leading-7 text-gray-300 sm:text-base md:mx-0 md:text-lg md:leading-8">
            Computer Science undergraduate passionate about full stack
            development, responsive frontend engineering, and UI/UX design. I
            enjoy building modern web applications with React, Node.js, and
            MongoDB while creating clean, user-friendly digital experiences.
          </p>

          <div className="flex flex-wrap justify-center gap-4 md:justify-start">
            <a
              href="#projects"
              className="px-6 py-3 font-semibold text-black transition bg-green-500 rounded-md hover:bg-green-400"
            >
              View Projects
            </a>

            <a
              href="https://github.com/rgwdbandara"
              target="_blank"
              rel="noreferrer"
              className="px-6 py-3 font-semibold text-green-300 transition border border-green-400 rounded-md hover:bg-green-500 hover:text-black"
            >
              GitHub
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;