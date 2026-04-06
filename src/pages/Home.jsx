import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import ProjectsSlider from "../components/ProjectsSlider";
import UIUXSlider from "../components/UIUXSlider";
import Skills from "../components/Skills";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

function Home() {
  return (
    <div className="text-white bg-black">
      <Navbar />
      <Hero />
      <About />
      <ProjectsSlider />
      <UIUXSlider />
      <Skills />
      <Contact />
      <Footer />
    </div>
  );
}

export default Home;