
import { Button } from "@/components/ui/button";
import { ArrowRight, Rocket } from "lucide-react";

export const Hero = () => {
  return (
    <section className="min-h-screen bg-gradient-to-br from-brand-dark via-brand-secondary to-brand-accent flex items-center justify-center px-4 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 text-6xl animate-pulse">⭐</div>
        <div className="absolute top-40 right-20 text-4xl animate-pulse delay-700">🌟</div>
        <div className="absolute bottom-40 left-20 text-5xl animate-pulse delay-1000">✨</div>
        <div className="absolute bottom-20 right-10 text-3xl animate-pulse delay-500">💫</div>
      </div>
      
      <div className="text-center z-10 max-w-4xl mx-auto">
        <div className="mb-8 flex justify-center items-center gap-4">
          <img 
            src="/lovable-uploads/392349e6-533d-49a6-b65f-247bfb1b9320.png" 
            alt="The Web3 Ninja Logo" 
            className="w-32 h-32"
          />
        </div>
        
        <h1 className="text-4xl md:text-6xl font-bold text-brand-white mb-6 animate-fade-in font-josefin">
          The <span className="text-brand-primary">Web3</span> Ninja
        </h1>
        
        <p className="text-xl md:text-2xl text-brand-light mb-8 max-w-2xl mx-auto animate-fade-in delay-200 font-inter">
          Master of blockchain development, smart contracts, and decentralized applications. 
          Building the future of Web3 with precision and stealth.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in delay-400">
          <Button className="bg-brand-primary hover:bg-brand-primary/90 text-brand-white px-10 py-4 text-lg rounded-lg transition-all duration-300 hover:scale-105 h-14 font-semibold">
            <Rocket className="mr-2 h-6 w-6" />
            Start Your Project
          </Button>
          <Button variant="outline" className="border-2 border-brand-primary text-brand-primary hover:bg-brand-primary hover:text-brand-white px-10 py-4 text-lg rounded-lg transition-all duration-300 h-14 font-semibold">
            View Portfolio
            <ArrowRight className="ml-2 h-6 w-6" />
          </Button>
        </div>
      </div>
    </section>
  );
};
