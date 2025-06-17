import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Courses from "@/components/Courses";
import Benefits from "@/components/Benefits";
import JoinUs from "@/components/JoinUs";
import OurTeam from "@/components/OurTeam";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div >
      <Navbar />
      <Hero />
      <About />
      <Courses />
      <Benefits />
      <JoinUs />
      <OurTeam />
      <Footer />
     
    </div>
  );
}
