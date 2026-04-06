import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

function UIUXSlider() {
  const designs = [
    {
      number: "01",
      category: "UI/UX",
      title: "Headphones Design",
      tech: "Figma, Product UI, Modern Landing Page",
      image: "/images/uiux/headphones.png",
      figma:
        "https://www.figma.com/proto/7fDRNIlnaNUSmFN7yV8UMH/Headphones?page-id=0%3A1&node-id=1-135&p=f&viewport=75%2C98%2C0.42&t=w1RxSt10XX3IxILE-1&scaling=min-zoom&content-scaling=fixed&starting-point-node-id=1%3A2",
    },
    {
      number: "02",
      category: "UI/UX",
      title: "Furniture Design System",
      tech: "Figma, Dashboard UI, Interactive Layout Design",
      image: "/images/uiux/furniture.png",
      figma:
        "https://www.figma.com/design/KytWTmkFcYcmJ5ocDjDXjL/Furniture-Design?node-id=0-1&t=brV4n8se8eq3JBZ7-1",
    },
    {
      number: "03",
      category: "UI/UX",
      title: "Car Marketplace Design",
      tech: "Figma, Web App UI, Marketplace Design",
      image: "/images/uiux/car-marketplace.png",
      figma:
        "https://www.figma.com/design/DzT5M5U7KIjFnd2PV8jZ3C/Car-MarketPlace?node-id=0-1&t=7CHBjCO5vgDMCC2u-1",
    },
    {
      number: "04",
      category: "UI/UX",
      title: "Game Page Design",
      tech: "Figma, Gaming Landing Page, Dark Theme UI",
      image: "/images/uiux/game-page.png",
      figma:
        "https://www.figma.com/design/TdjhoLsVdHojUB9fehNwRW/Game-page?node-id=0-1&t=HJlTfX4a6toZrPI6-1",
    },
    {
      number: "05",
      category: "UI/UX",
      title: "Barber Salon Mobile App",
      tech: "Figma, Mobile App UI, Service Booking Design",
      image: "/images/uiux/barber-app.png",
      figma:
        "https://www.figma.com/design/f0RncSuvCR3RS1wKuTS8KX/Untitled?node-id=0-1&t=t6xdhRMs9D3ikO15-1",
    },
    {
      number: "06",
      category: "UI/UX",
      title: "Travel Guide Website",
      tech: "Figma, Simple Landing Page, Travel Website UI",
      image: "/images/uiux/travel-guide.png",
      figma:
        "https://www.figma.com/design/PYHa27NCE2QKj8claUcFDq/Untitled?node-id=0-1&t=uTkRnEzAbc8AXKBu-1",
    },
  ];

  return (
    <section id="uiux" className="px-4 py-20 text-white bg-black md:px-6 md:py-24">
      <div className="mx-auto max-w-7xl">
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-green-400">
          Design Work
        </p>

        <h2 className="mb-4 text-4xl font-bold md:text-5xl">
          UI/UX <span className="text-green-400">Designs</span>
        </h2>

        <p className="max-w-2xl mb-12 text-gray-400">
          A collection of UI/UX concepts and interface designs created in Figma,
          reflecting my interest in clean layouts, user-friendly experiences,
          and modern digital product design.
        </p>

        <Swiper
          modules={[Pagination, Autoplay]}
          spaceBetween={24}
          slidesPerView={1}
          pagination={{ clickable: true }}
          autoplay={{ delay: 2800, disableOnInteraction: false }}
          breakpoints={{
            768: {
              slidesPerView: 2,
            },
            1200: {
              slidesPerView: 3,
            },
          }}
        >
          {designs.map((design) => (
            <SwiperSlide key={design.number}>
              <div className="rounded-[32px] border border-white/10 bg-[#0b0b0f] p-6 shadow-[0_0_40px_rgba(34,197,94,0.08)]">
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-5xl font-extrabold text-white/95">
                    {design.number}
                  </h3>
                  <span className="text-lg font-medium text-white/80">
                    {design.category}
                  </span>
                </div>

                <h4 className="mb-3 text-3xl font-bold leading-tight text-white">
                  {design.title}
                </h4>

                <p className="mb-5 text-sm leading-7 text-gray-400">
                  <span className="font-semibold text-white">
                    Tools / Focus
                  </span>
                  <br />
                  {design.tech}
                </p>

                <div className="mb-5 overflow-hidden rounded-[24px]">
                  <img
                    src={design.image}
                    alt={design.title}
                    className="h-[220px] w-full object-cover transition duration-500 hover:scale-105"
                  />
                </div>

                <div className="flex flex-wrap gap-3">
                  <a
                    href={design.figma}
                    target="_blank"
                    rel="noreferrer"
                    className="px-4 py-2 text-sm font-medium text-black transition bg-green-500 rounded-lg hover:bg-green-400"
                  >
                    View Figma
                  </a>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}

export default UIUXSlider;