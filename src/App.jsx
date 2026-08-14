import { Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Marquee from "./components/Marquee";
import Statement from "./components/Statement";
import Stats from "./components/Stats";
import Process from "./components/Process";
import ProjectsGrid from "./components/ProjectsGrid";
import Testimonials from "./components/Testimonials";
import Newsletter from "./components/Newsletter";
import Footer from "./components/Footer";
import Project from "./components/Project";
import About from "./components/About";
import Blog from "./components/Blog";
import Contact from "./components/Contact";
import ProjectDetail from "./pages/ProjectDetail";
import Checkout from "./pages/Checkout";
import Orders from "./pages/Orders";
import NotFound from "./pages/NotFound";

function Home() {
  useEffect(() => {
    ScrollTrigger.refresh();
    window.addEventListener("load", () => ScrollTrigger.refresh());
  }, []);
  return (
    <>
      <Hero />
      <section className="bg-[#F0EDE6] text-[#111111] py-12">
        <Marquee text="Future Generation." />
      </section>
      <Statement />
      <Stats />
      <Process />
      <ProjectsGrid />
      <Testimonials />
      <Newsletter />
    </>
  );
}

function App() {
  useEffect(() => {
    ScrollTrigger.refresh();
  }, []);

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Project />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/projects/:id" element={<ProjectDetail />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/orders" element={<Orders />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
