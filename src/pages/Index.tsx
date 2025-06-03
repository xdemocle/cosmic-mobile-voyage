
import { Hero } from "@/components/Hero";
import { Features } from "@/components/Features";
import { Services } from "@/components/Services";
import { About } from "@/components/About";
import { Team } from "@/components/Team";
import { Newsletter } from "@/components/Newsletter";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-900">
      <Hero />
      <Features />
      <Services />
      <About />
      <Team />
      <Newsletter />
      <Footer />
    </div>
  );
};

export default Index;
