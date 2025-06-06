
export const Team = () => {
  const team = [
    {
      name: "Shadow Master",
      role: "Lead Blockchain Architect",
      emoji: "🥷",
      description: "Master of smart contracts and DeFi protocol design"
    },
    {
      name: "Code Samurai",
      role: "Frontend Ninja",
      emoji: "⚔️",
      description: "Crafting seamless Web3 user experiences"
    },
    {
      name: "Stealth Auditor",
      role: "Security Specialist",
      emoji: "🛡️",
      description: "Guardian of smart contract security and integrity"
    },
    {
      name: "Chain Walker",
      role: "Multi-chain Expert",
      emoji: "🌐",
      description: "Navigator of cross-chain protocols and bridges"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-red-900 to-black">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="text-6xl mb-4">🥷⚔️</div>
          <h2 className="text-4xl font-bold text-white mb-4">The Ninja Clan</h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Meet the elite warriors behind your Web3 transformation
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member, index) => (
            <div 
              key={index}
              className="bg-gray-900/70 backdrop-blur-sm p-6 rounded-xl border border-red-500/30 hover:border-red-500 transition-all duration-300 hover:scale-105 text-center"
            >
              <div className="text-6xl mb-4">{member.emoji}</div>
              <h3 className="text-xl font-bold text-white mb-2">{member.name}</h3>
              <div className="text-red-500 font-semibold mb-4">{member.role}</div>
              <p className="text-gray-400 text-sm">{member.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
