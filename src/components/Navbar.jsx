function Navbar() {
  return (
    <header className="w-full border-b border-white/10 bg-slate-950/80 backdrop-blur">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <h1 className="text-xl font-bold tracking-wide text-cyan-400">
          Wathsala
        </h1>

        <ul className="hidden gap-8 text-sm font-medium text-gray-300 md:flex">
          <li><a href="#home" className="hover:text-cyan-400">Home</a></li>
          <li><a href="#projects" className="hover:text-cyan-400">Projects</a></li>
          <li><a href="#skills" className="hover:text-cyan-400">Skills</a></li>
          <li><a href="#contact" className="hover:text-cyan-400">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;