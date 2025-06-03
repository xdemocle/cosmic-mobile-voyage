
export const Team = () => {
  const team = [
    {
      name: "Alex Nova",
      role: "Mission Commander",
      emoji: "👨‍🚀",
      description: "Full-stack architect exploring new digital frontiers"
    },
    {
      name: "Luna Star",
      role: "Design Pilot",
      emoji: "👩‍🚀",
      description: "UX/UI specialist crafting beautiful user experiences"
    },
    {
      name: "Cosmos Chen",
      role: "Backend Navigator",
      emoji: "👨‍💻",
      description: "Backend engineer building scalable space-grade systems"
    },
    {
      name: "Stellar Kim",
      role: "Frontend Explorer",
      emoji: "👩‍💻",
      description: "Frontend developer creating interactive cosmic interfaces"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-blue-900 to-purple-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="text-6xl mb-4">👨‍🚀👩‍🚀</div>
          <h2 className="text-4xl font-bold text-white mb-4">Space Crew</h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Meet the astronauts behind your digital missions
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member, index) => (
            <div 
              key={index}
              className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-xl border border-gray-600 hover:border-cyan-400 transition-all duration-300 hover:scale-105 text-center"
            >
              <div className="text-6xl mb-4">{member.emoji}</div>
              <h3 className="text-xl font-bold text-white mb-2">{member.name}</h3>
              <div className="text-cyan-400 font-semibold mb-4">{member.role}</div>
              <p className="text-gray-400 text-sm">{member.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
