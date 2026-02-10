import { Eye, Compass } from 'lucide-react';

export default function VisionMission() {
  return (
    <section id="vision" className="py-24 bg-gradient-to-br from-blue-900 to-blue-700 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Vision & Mission
          </h2>
          <div className="w-24 h-1 bg-white mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-10 border border-white/20 hover:bg-white/15 transition-all duration-300">
            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 bg-white/20 rounded-lg">
                <Eye className="h-8 w-8" />
              </div>
              <h3 className="text-3xl font-bold">Vision Statement</h3>
            </div>
            <p className="text-lg leading-relaxed text-blue-50">
              To build a diversified African enterprise that creates sustainable solutions, drives innovation, and improves everyday life across industries.
            </p>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-10 border border-white/20 hover:bg-white/15 transition-all duration-300">
            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 bg-white/20 rounded-lg">
                <Compass className="h-8 w-8" />
              </div>
              <h3 className="text-3xl font-bold">Mission Statement</h3>
            </div>
            <p className="text-lg leading-relaxed text-blue-50">
              To identify real-world challenges and develop practical, scalable businesses across technology, food, real estate, media, and essential services—while creating long-term value for communities, partners, and stakeholders.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
