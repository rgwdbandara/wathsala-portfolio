function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen bg-[#06110B] px-6 pt-16 text-white overflow-hidden"
    >
      <div className="grid items-center max-w-6xl gap-10 mx-auto md:min-h-screen md:grid-cols-2">
        
        {/* LEFT */}
        <div>
          <p className="mb-4 text-2xl text-green-300 md:text-3xl">
            Full Stack Developer | UI/UX Enthusiast
          </p>

          <h1 className="mb-6 text-5xl font-extrabold leading-tight md:text-7xl">
            Hi, I'm <span className="text-green-400">Wathsala</span>
            <br />
            Bandara
          </h1>

          <p className="max-w-xl mb-8 text-base leading-8 text-gray-300 md:text-lg">
           Computer Science undergraduate passionate about full stack development,
           responsive frontend engineering, and UI/UX design. I enjoy building
           modern web applications with React, Node.js, and MongoDB while creating
           clean, user-friendly digital experiences.
          </p>

          <div className="flex flex-wrap gap-4">
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

        {/* RIGHT IMAGE */}
        <div className="relative flex justify-center md:justify-end">
          
          {/* Green Glow */}
          <div className="absolute h-[420px] w-[420px] rounded-full bg-green-400/20 blur-3xl"></div>

          {/* Circle Container */}
          <div className="relative z-10 h-[350px] w-[350px] md:h-[420px] md:w-[420px] rounded-full border border-green-400/30 overflow-hidden shadow-[0_0_80px_rgba(34,197,94,0.4)]">

            <img
              src="/images/wathsala-photo.png"
              alt="Wathsala"
              className="object-cover w-full h-full"
            />

          </div>
        </div>

      </div>
    </section>
  );
}

export default Hero;