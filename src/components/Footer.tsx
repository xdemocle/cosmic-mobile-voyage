
import { Github, Twitter, Linkedin, Mail } from "lucide-react";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 border-t border-gray-800">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <span className="text-3xl">🚀</span>
              <h3 className="text-2xl font-bold text-white">Space Developer</h3>
            </div>
            <p className="text-gray-400 mb-6 max-w-md">
              Launching innovative web solutions into the digital cosmos. 
              Building the future, one stellar project at a time.
            </p>
            <div className="flex space-x-4">
              <Github className="h-6 w-6 text-gray-400 hover:text-cyan-400 cursor-pointer transition-colors" />
              <Twitter className="h-6 w-6 text-gray-400 hover:text-cyan-400 cursor-pointer transition-colors" />
              <Linkedin className="h-6 w-6 text-gray-400 hover:text-cyan-400 cursor-pointer transition-colors" />
              <Mail className="h-6 w-6 text-gray-400 hover:text-cyan-400 cursor-pointer transition-colors" />
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">🛸 Services</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors">Web Development</a></li>
              <li><a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors">Mobile Apps</a></li>
              <li><a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors">Cloud Solutions</a></li>
              <li><a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors">Consulting</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">🌌 Company</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors">About Mission</a></li>
              <li><a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors">Space Crew</a></li>
              <li><a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors">Career Launch</a></li>
              <li><a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors">Contact Control</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8 text-center">
          <p className="text-gray-400">
            © {currentYear} Space Developer. All rights reserved. 
            <span className="ml-2">🌟 Made with cosmic energy</span>
          </p>
        </div>
      </div>
    </footer>
  );
};
