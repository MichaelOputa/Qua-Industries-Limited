import { Eye, Target } from 'lucide-react';

export function VisionMission() {
  return (
    <section id="vision" className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-white rounded-2xl shadow-xl p-8 md:p-10 hover:shadow-2xl transition-shadow duration-300">
              <div className="flex items-center gap-4 mb-6">
                <div className="inline-flex items-center justify-center w-14 h-14 bg-blue-100 text-blue-600 rounded-full">
                  <Eye className="w-7 h-7" />
                </div>
                <h2 className="text-3xl font-bold text-slate-900">Vision</h2>
              </div>

              <p className="text-lg text-slate-700 leading-relaxed">
                To build a diversified African enterprise that creates sustainable solutions, drives
                innovation, and improves everyday life across industries.
              </p>
            </div>

            <div className="bg-white rounded-2xl shadow-xl p-8 md:p-10 hover:shadow-2xl transition-shadow duration-300">
              <div className="flex items-center gap-4 mb-6">
                <div className="inline-flex items-center justify-center w-14 h-14 bg-blue-100 text-blue-600 rounded-full">
                  <Target className="w-7 h-7" />
                </div>
                <h2 className="text-3xl font-bold text-slate-900">Mission</h2>
              </div>

              <p className="text-lg text-slate-700 leading-relaxed">
                To identify real-world challenges and develop practical, scalable businesses across
                technology, food, real estate, media, and essential services, while creating long-term
                value for communities, partners, and stakeholders.
              </p>
            </div>
          </div>

          <div className="mt-16 bg-gradient-to-r from-blue-600 to-blue-800 rounded-2xl p-8 md:p-10 text-white shadow-xl">
            <h3 className="text-2xl font-bold mb-4">Brand Statement</h3>
            <p className="text-lg leading-relaxed">
              Qua Industries is a diversified company committed to building sustainable businesses that
              solve real-life problems through innovation, strategic thinking, and long-term value
              creation.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
