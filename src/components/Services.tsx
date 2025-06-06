
import { Button } from "@/components/ui/button";

export const Services = () => {
  const services = [
    {
      title: "Smart Contract Development",
      description: "Custom smart contracts built with security and efficiency in mind",
      price: "From $5,000",
      features: ["Solidity/Vyper", "Security Audits", "Gas Optimization", "Multi-chain Support"],
      emoji: "⚔️"
    },
    {
      title: "DApp Development",
      description: "Full-stack decentralized applications with intuitive user experiences",
      price: "From $8,000",
      features: ["React/Next.js", "Web3 Integration", "Wallet Connect", "IPFS Storage"],
      emoji: "🥷"
    },
    {
      title: "Blockchain Consulting",
      description: "Strategic guidance for your Web3 journey and tokenomics design",
      price: "From $2,000",
      features: ["Architecture Design", "Token Economics", "Governance Models", "Technical Strategy"],
      emoji: "🧠"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-black to-red-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="text-6xl mb-4">🚀</div>
          <h2 className="text-4xl font-bold text-white mb-4">Ninja Services</h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Choose your Web3 mission package for digital transformation
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="bg-gray-900/80 backdrop-blur-sm p-8 rounded-xl border border-red-500/30 hover:border-red-500 transition-all duration-300 hover:scale-105"
            >
              <div className="text-5xl mb-6 text-center">{service.emoji}</div>
              <h3 className="text-2xl font-bold text-white mb-4 text-center">{service.title}</h3>
              <p className="text-gray-400 mb-6 text-center">{service.description}</p>
              <div className="text-3xl font-bold text-red-500 mb-6 text-center">{service.price}</div>
              <ul className="space-y-3 mb-8">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="text-gray-300 flex items-center">
                    <span className="text-red-500 mr-2">✓</span>
                    {feature}
                  </li>
                ))}
              </ul>
              <Button className="w-full bg-red-600 hover:bg-red-700 text-white py-3 rounded-full">
                Deploy Mission
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
