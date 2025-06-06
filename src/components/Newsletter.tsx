
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export const Newsletter = () => {
  return (
    <section className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="text-6xl mb-6">📡</div>
          <h2 className="text-4xl font-bold text-white mb-6">Ninja Intelligence Network</h2>
          <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
            Stay ahead of the Web3 curve. Get exclusive insights, 
            blockchain intelligence, and ninja techniques delivered to your inbox.
          </p>
          
          <div className="bg-gradient-to-r from-gray-800 to-black p-8 rounded-xl border border-red-500/30 max-w-2xl mx-auto">
            <div className="flex flex-col sm:flex-row gap-4">
              <Input 
                type="email" 
                placeholder="Enter your secure communication channel (email)"
                className="flex-1 bg-gray-900 border-red-500/50 text-white placeholder-gray-400 focus:border-red-500"
              />
              <Button className="bg-red-600 hover:bg-red-700 text-white px-8 py-2 rounded-md whitespace-nowrap">
                Join The Clan 🥷
              </Button>
            </div>
            <p className="text-sm text-gray-500 mt-4">
              No spam, only ninja intelligence. Vanish anytime.
            </p>
          </div>
          
          <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-2xl font-bold text-red-500">2K+</div>
              <div className="text-gray-400">Ninja Network</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-red-500">Weekly</div>
              <div className="text-gray-400">Intel Drops</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-red-500">100%</div>
              <div className="text-gray-400">Web3 Content</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-red-500">0</div>
              <div className="text-gray-400">Spam Attacks</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
