
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export const Newsletter = () => {
  return (
    <section className="py-20 bg-gray-800">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="text-6xl mb-6">📡</div>
          <h2 className="text-4xl font-bold text-white mb-6">Mission Control Updates</h2>
          <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
            Stay connected with the latest from our space missions. 
            Get exclusive updates, tips, and cosmic insights delivered to your inbox.
          </p>
          
          <div className="bg-gradient-to-r from-gray-700 to-gray-800 p-8 rounded-xl border border-gray-600 max-w-2xl mx-auto">
            <div className="flex flex-col sm:flex-row gap-4">
              <Input 
                type="email" 
                placeholder="Enter your space coordinates (email)"
                className="flex-1 bg-gray-900 border-gray-600 text-white placeholder-gray-400 focus:border-cyan-400"
              />
              <Button className="bg-cyan-500 hover:bg-cyan-600 text-white px-8 py-2 rounded-md whitespace-nowrap">
                Join Mission 🚀
              </Button>
            </div>
            <p className="text-sm text-gray-500 mt-4">
              No spam, just stellar content. Unsubscribe anytime.
            </p>
          </div>
          
          <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-2xl font-bold text-cyan-400">5K+</div>
              <div className="text-gray-400">Space Travelers</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-purple-400">Weekly</div>
              <div className="text-gray-400">Updates</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-green-400">100%</div>
              <div className="text-gray-400">Cosmic Content</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-yellow-400">0</div>
              <div className="text-gray-400">Spam Asteroids</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
