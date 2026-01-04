
import { Code, Zap, Shield, Globe } from "lucide-react";

export const Features = () => {
  const features = [
    {
      icon: Code,
      title: "Smart Contracts",
      description: "Secure and efficient blockchain contracts with ninja-level precision",
      emoji: "⚔️"
    },
    {
      icon: Zap,
      title: "DApp Development",
      description: "Lightning-fast decentralized applications that users love",
      emoji: "⚡"
    },
    {
      icon: Shield,
      title: "Security Audits",
      description: "Ninja-grade security analysis to protect your digital assets",
      emoji: "🛡️"
    },
    {
      icon: Globe,
      title: "Web3 Integration",
      description: "Seamless Web3 integration across multiple blockchain networks",
      emoji: "🌐"
    }
  ];

  return (
    <section className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="text-6xl mb-4">🥷</div>
          <h2 className="text-4xl font-bold text-white mb-4">Ninja Skills</h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Advanced Web3 capabilities honed through years of blockchain mastery
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="bg-gradient-to-br from-gray-800 to-black p-6 rounded-xl border border-red-500/20 hover:border-red-500 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-red-500/20"
            >
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
