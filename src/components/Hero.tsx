
import { Button } from "@/components/ui/button";
import { ArrowRight, Rocket } from "lucide-react";

export const Hero = () => {
  return (
    <section className="min-h-screen bg-gradient-to-br from-gray-900 via-red-900 to-black flex items-center justify-center px-4 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-20">
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
            className="w-20 h-20 md:w-24 md:h-24"
          />
          <div className="text-6xl md:text-8xl">🚀</div>
        </div>
        
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 animate-fade-in">
          The <span className="text-red-500">Web3</span> Ninja
        </h1>
        
        <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl mx-auto animate-fade-in delay-200">
          Mastering the art of Web3 development. Stealthy smart contracts, 
          lightning-fast DApps, and blockchain solutions that cut through complexity.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in delay-400">
          <Button className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 text-lg rounded-full transition-all duration-300 hover:scale-105">
            <Rocket className="mr-2 h-5 w-5" />
            Start Mission
          </Button>
          <Button variant="outline" className="border-red-500 text-red-500 hover:bg-red-500 hover:text-white px-8 py-3 text-lg rounded-full transition-all duration-300">
            Explore Skills
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};
