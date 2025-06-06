
import { Github, Twitter, Linkedin, Mail } from "lucide-react";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black border-t border-red-500/30">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <img 
                src="/lovable-uploads/392349e6-533d-49a6-b65f-247bfb1b9320.png" 
                alt="The Web3 Ninja Logo" 
                className="w-8 h-8"
              />
              <h3 className="text-2xl font-bold text-white">The Web3 Ninja</h3>
            </div>
            <p className="text-gray-400 mb-6 max-w-md">
              Mastering the art of Web3 development. 
              Building the future of decentralized applications with ninja precision.
            </p>
            <div className="flex space-x-4">
              <Github className="h-6 w-6 text-gray-400 hover:text-red-500 cursor-pointer transition-colors" />
              <Twitter className="h-6 w-6 text-gray-400 hover:text-red-500 cursor-pointer transition-colors" />
              <Linkedin className="h-6 w-6 text-gray-400 hover:text-red-500 cursor-pointer transition-colors" />
              <Mail className="h-6 w-6 text-gray-400 hover:text-red-500 cursor-pointer transition-colors" />
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">🥷 Services</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-red-500 transition-colors">Smart Contracts</a></li>
              <li><a href="#" className="text-gray-400 hover:text-red-500 transition-colors">DApp Development</a></li>
              <li><a href="#" className="text-gray-400 hover:text-red-500 transition-colors">Security Audits</a></li>
              <li><a href="#" className="text-gray-400 hover:text-red-500 transition-colors">Consulting</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">⚔️ Clan</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-red-500 transition-colors">About The Ninja</a></li>
              <li><a href="#" className="text-gray-400 hover:text-red-500 transition-colors">Our Team</a></li>
              <li><a href="#" className="text-gray-400 hover:text-red-500 transition-colors">Join Us</a></li>
              <li><a href="#" className="text-gray-400 hover:text-red-500 transition-colors">Contact</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-red-500/30 mt-12 pt-8 text-center">
          <p className="text-gray-400">
            © {currentYear} The Web3 Ninja. All rights reserved. 
            <span className="ml-2">🥷 Built with ninja precision</span>
          </p>
        </div>
      </div>
    </footer>
  );
};
