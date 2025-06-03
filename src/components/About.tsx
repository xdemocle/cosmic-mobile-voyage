
export const About = () => {
  return (
    <section className="py-20 bg-gray-800">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="text-6xl mb-6">🛰️</div>
            <h2 className="text-4xl font-bold text-white mb-6">About the Mission</h2>
            <p className="text-lg text-gray-400 mb-6">
              We're a team of passionate developers exploring the digital cosmos, 
              creating innovative solutions that push the boundaries of what's possible. 
              Our mission is to transform ideas into stellar digital experiences.
            </p>
            <p className="text-lg text-gray-400 mb-8">
              With expertise spanning from frontend magic to backend architecture, 
              we navigate the complex universe of modern web development to deliver 
              solutions that are both beautiful and functional.
            </p>
            <div className="grid grid-cols-3 gap-8 text-center">
              <div>
                <div className="text-3xl font-bold text-cyan-400">150+</div>
                <div className="text-gray-400">Projects Launched</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-purple-400">5+</div>
                <div className="text-gray-400">Years Experience</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-green-400">99%</div>
                <div className="text-gray-400">Mission Success</div>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="bg-gradient-to-br from-purple-600/20 to-cyan-600/20 rounded-xl p-8 border border-gray-600">
              <div className="text-center text-8xl mb-6">🌌</div>
              <h3 className="text-2xl font-bold text-white mb-4 text-center">Our Universe</h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-gray-400">Frontend Development</span>
                  <span className="text-cyan-400">95% ⭐⭐⭐⭐⭐</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-400">Backend Systems</span>
                  <span className="text-purple-400">90% ⭐⭐⭐⭐⭐</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-400">Cloud Infrastructure</span>
                  <span className="text-green-400">85% ⭐⭐⭐⭐</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-400">Mobile Development</span>
                  <span className="text-yellow-400">88% ⭐⭐⭐⭐</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
