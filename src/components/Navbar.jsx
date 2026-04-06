import { useEffect, useState } from "react";

function Navbar() {
  const [activeSection, setActiveSection] = useState("home");
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        threshold: 0.35,
      }
    );

    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  const navLinks = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "projects", label: "Projects" },
    { id: "uiux", label: "UI/UX" },
    { id: "skills", label: "Skills" },
    { id: "contact", label: "Contact" },
  ];

  return (
    <header className="fixed top-0 z-50 w-full bg-black/70 backdrop-blur-md">
      <nav className="flex items-center justify-between max-w-6xl px-4 py-4 mx-auto md:px-6 md:py-5">
        <a
          href="#home"
          className="text-2xl font-extrabold tracking-wide text-white md:text-3xl"
        >
          <span className="text-green-400">W</span>athsala.
        </a>

        {/* Desktop menu */}
        <ul className="items-center hidden gap-8 text-sm font-medium text-white md:flex">
          {navLinks.map((link) => (
            <li key={link.id}>
              <a
                href={`#${link.id}`}
                className={`relative transition ${
                  activeSection === link.id
                    ? "text-green-400"
                    : "text-white hover:text-green-400"
                }`}
              >
                {link.label}
                {activeSection === link.id && (
                  <span className="absolute -bottom-2 left-0 h-[2px] w-full bg-green-400"></span>
                )}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile menu button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="text-white md:hidden"
        >
          {menuOpen ? "✕" : "☰"}
        </button>
      </nav>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="px-4 py-4 bg-black border-t border-white/10 md:hidden">
          <ul className="flex flex-col gap-4 text-sm font-medium text-white">
            {navLinks.map((link) => (
              <li key={link.id}>
                <a
                  href={`#${link.id}`}
                  onClick={() => setMenuOpen(false)}
                  className={`block transition ${
                    activeSection === link.id
                      ? "text-green-400"
                      : "text-white hover:text-green-400"
                  }`}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}

export default Navbar;