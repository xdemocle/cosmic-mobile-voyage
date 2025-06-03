
import { Button } from "@/components/ui/button";

export const Services = () => {
  const services = [
    {
      title: "Web Development",
      description: "Full-stack development with modern frameworks and technologies",
      price: "From $2,999",
      features: ["React/Next.js", "Node.js Backend", "Database Design", "API Integration"],
      emoji: "🌐"
    },
    {
      title: "Mobile Apps",
      description: "Native and cross-platform mobile applications",
      price: "From $4,999",
      features: ["iOS & Android", "React Native", "App Store Deploy", "Push Notifications"],
      emoji: "📱"
    },
    {
      title: "Cloud Solutions",
      description: "Scalable cloud infrastructure and deployment",
      price: "From $1,999",
      features: ["AWS/Azure", "Auto-scaling", "CI/CD Pipeline", "Monitoring"],
      emoji: "☁️"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-900 to-blue-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="text-6xl mb-4">🚀</div>
          <h2 className="text-4xl font-bold text-white mb-4">Launch Services</h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Choose your mission package for digital success
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="bg-gray-800/50 backdrop-blur-sm p-8 rounded-xl border border-gray-600 hover:border-purple-400 transition-all duration-300 hover:scale-105"
            >
              <div className="text-5xl mb-6 text-center">{service.emoji}</div>
              <h3 className="text-2xl font-bold text-white mb-4 text-center">{service.title}</h3>
              <p className="text-gray-400 mb-6 text-center">{service.description}</p>
              <div className="text-3xl font-bold text-cyan-400 mb-6 text-center">{service.price}</div>
              <ul className="space-y-3 mb-8">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="text-gray-300 flex items-center">
                    <span className="text-green-400 mr-2">✓</span>
                    {feature}
                  </li>
                ))}
              </ul>
              <Button className="w-full bg-purple-600 hover:bg-purple-700 text-white py-3 rounded-full">
                Start Mission
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
