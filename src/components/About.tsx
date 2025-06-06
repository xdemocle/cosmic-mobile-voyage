
export const About = () => {
  return (
    <section className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="text-6xl mb-6">🥷</div>
            <h2 className="text-4xl font-bold text-white mb-6">About The Ninja</h2>
            <p className="text-lg text-gray-400 mb-6">
              The Web3 Ninja operates in the shadows of the blockchain, 
              crafting digital solutions with stealth, precision, and unmatched expertise. 
              Our mission is to transform the decentralized web landscape.
            </p>
            <p className="text-lg text-gray-400 mb-8">
              With deep knowledge of smart contracts, DeFi protocols, and cutting-edge 
              blockchain technologies, we navigate the complex Web3 ecosystem to deliver 
              solutions that are both innovative and battle-tested.
            </p>
            <div className="grid grid-cols-3 gap-8 text-center">
              <div>
                <div className="text-3xl font-bold text-red-500">100+</div>
                <div className="text-gray-400">Smart Contracts</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-red-500">50+</div>
                <div className="text-gray-400">DApps Built</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-red-500">0</div>
                <div className="text-gray-400">Security Breaches</div>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="bg-gradient-to-br from-red-600/20 to-black/40 rounded-xl p-8 border border-red-500/30">
              <div className="text-center text-8xl mb-6">⚔️</div>
              <h3 className="text-2xl font-bold text-white mb-4 text-center">Ninja Arsenal</h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-gray-400">Solidity Mastery</span>
                  <span className="text-red-500">Legendary ⭐⭐⭐⭐⭐</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-400">DeFi Protocols</span>
                  <span className="text-red-500">Expert ⭐⭐⭐⭐⭐</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-400">Security Audits</span>
                  <span className="text-red-500">Master ⭐⭐⭐⭐⭐</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-400">Gas Optimization</span>
                  <span className="text-red-500">Ninja ⭐⭐⭐⭐⭐</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
