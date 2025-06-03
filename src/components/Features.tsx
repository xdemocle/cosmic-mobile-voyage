
import { Code, Zap, Shield, Globe } from "lucide-react";

export const Features = () => {
  const features = [
    {
      icon: Code,
      title: "Modern Development",
      description: "Cutting-edge technologies and frameworks for stellar performance",
      emoji: "💻"
    },
    {
      icon: Zap,
      title: "Lightning Fast",
      description: "Optimized for speed and performance across all devices",
      emoji: "⚡"
    },
    {
      icon: Shield,
      title: "Secure & Reliable",
      description: "Enterprise-grade security with 99.9% uptime guarantee",
      emoji: "🛡️"
    },
    {
      icon: Globe,
      title: "Global Reach",
      description: "CDN-powered delivery for worldwide accessibility",
      emoji: "🌍"
    }
  ];

  return (
    <section className="py-20 bg-gray-800">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="text-6xl mb-4">🛸</div>
          <h2 className="text-4xl font-bold text-white mb-4">Mission Features</h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Advanced capabilities designed for the modern digital frontier
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="bg-gradient-to-br from-gray-700 to-gray-800 p-6 rounded-xl border border-gray-600 hover:border-cyan-400 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-cyan-400/20"
            >
              <div className="text-4xl mb-4">{feature.emoji}</div>
              <feature.icon className="h-8 w-8 text-cyan-400 mb-4" />
              <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
              <p className="text-gray-400">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
