import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

function ProjectsSlider() {
  const projects = [
    {
      number: "01",
      category: "Full Stack",
      title: "AutoVerge",
      tech: "React, Node.js, Express.js, MongoDB, Cloudinary",
      image: "/images/projects/autoverge.png",
      github: "https://github.com/rgwdbandara/AutoVerge-platform",
    },
    {
      number: "02",
      category: "Full Stack",
      title: "Eventra",
      tech: "React, TypeScript, Node.js, MongoDB, Socket.IO",
      image: "/images/projects/eventra.png",
      github: "https://github.com/rgwdbandara/AI-Events-Organizer---Eventra",
      live: "https://ai-events-organizer-eventra.vercel.app/",
    },
    {
      number: "03",
      category: "Full Stack / AI",
      title: "MoodFlix",
      tech: "React, Tailwind CSS, Redux Toolkit, face-api.js, TMDB API",
      image: "/images/projects/moodflix.png",
      github: "https://github.com/rgwdbandara/MoodFlix-App",
      live: "https://mood-flix-app-1k8h.vercel.app/",
    },
    {
      number: "04",
      category: "Frontend / UI-UX",
      title: "Bloomify",
      tech: "HTML5, CSS3, JavaScript, Responsive Design",
      image: "/images/projects/bloomify.png",
      github: "https://github.com/rgwdbandara/Flower-Delivery-Website",
      live: "https://flower-delivery-website.vercel.app/",
    },
    {
      number: "05",
      category: "Frontend",
      title: "Coffee Bliss",
      tech: "HTML5, CSS3, Tailwind CSS, JavaScript, Firebase",
      image: "/images/projects/coffee.png",
      github: "https://github.com/rgwdbandara/Coffee-Shop-Website",
      live: "https://coffee-shop-website-delta.vercel.app",
    },
  ];

  return (
    <section id="projects" className="px-6 py-24 text-white bg-black">
      <div className="mx-auto max-w-7xl">
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-green-400">
          Portfolio
        </p>

        <h2 className="mb-12 text-4xl font-bold md:text-5xl">
          I Build <span className="text-green-400">Projects</span>
        </h2>

        <Swiper
          modules={[Pagination, Autoplay]}
          spaceBetween={24}
          slidesPerView={1}
          pagination={{ clickable: true }}
          autoplay={{ delay: 2500, disableOnInteraction: false }}
          breakpoints={{
            768: {
              slidesPerView: 2,
            },
            1200: {
              slidesPerView: 3,
            },
          }}
        >
          {projects.map((project) => (
            <SwiperSlide key={project.number}>
              <div className="rounded-[32px] border border-white/10 bg-[#0b0b0f] p-6 shadow-[0_0_40px_rgba(34,197,94,0.08)]">
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-5xl font-extrabold text-white/95">
                    {project.number}
                  </h3>
                  <span className="text-lg font-medium text-white/80">
                    {project.category}
                  </span>
                </div>

                <h4 className="mb-3 text-3xl font-bold leading-tight text-white">
                  {project.title}
                </h4>

                <p className="mb-5 text-sm leading-7 text-gray-400">
                  <span className="font-semibold text-white">Technologies used</span>
                  <br />
                  {project.tech}
                </p>

                <div className="mb-5 overflow-hidden rounded-[24px]">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="h-[220px] w-full object-cover transition duration-500 hover:scale-105"
                  />
                </div>

                <div className="flex flex-wrap gap-3">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="px-4 py-2 text-sm font-medium text-white transition border rounded-lg border-white/15 hover:border-green-400 hover:text-green-400"
                  >
                    GitHub
                  </a>

                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noreferrer"
                      className="px-4 py-2 text-sm font-medium text-black transition bg-green-500 rounded-lg hover:bg-green-400"
                    >
                      Live Demo
                    </a>
                  )}
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}

export default ProjectsSlider;