
import { Button } from "@/components/ui/button";
import { ArrowRight, Rocket } from "lucide-react";

export const Hero = () => {
  return (
    <section className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 flex items-center justify-center px-4 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-10 text-6xl animate-pulse">⭐</div>
        <div className="absolute top-40 right-20 text-4xl animate-pulse delay-700">🌟</div>
        <div className="absolute bottom-40 left-20 text-5xl animate-pulse delay-1000">✨</div>
        <div className="absolute bottom-20 right-10 text-3xl animate-pulse delay-500">💫</div>
      </div>
      
      <div className="text-center z-10 max-w-4xl mx-auto">
        <div className="mb-8 text-8xl animate-bounce">🚀</div>
        
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 animate-fade-in">
          The <span className="text-cyan-400">Space</span> Developer
        </h1>
        
        <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl mx-auto animate-fade-in delay-200">
          Launching innovative web solutions into the digital cosmos. 
          Building the future, one line of code at a time.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in delay-400">
          <Button className="bg-cyan-500 hover:bg-cyan-600 text-white px-8 py-3 text-lg rounded-full transition-all duration-300 hover:scale-105">
            <Rocket className="mr-2 h-5 w-5" />
            Launch Project
          </Button>
          <Button variant="outline" className="border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-gray-900 px-8 py-3 text-lg rounded-full transition-all duration-300">
            Explore Mission
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};
