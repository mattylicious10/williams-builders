import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Area from "../components/Area";
import Services from "../components/Services";
import FeaturedProjects from "../components/FeaturedProjects";
import AboutSection from "../components/AboutSection";
import QuoteForm from "../components/QuoteForm";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <main className="bg-[#F8F5EE] text-[#2B2B2B]">
      <Navbar />
      <Hero />
      <Area />
      <Services />
      <FeaturedProjects />
      <AboutSection />
      <QuoteForm />
      <Footer />
    </main>
  );
}