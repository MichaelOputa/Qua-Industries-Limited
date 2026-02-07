import { Building2, Globe, TrendingUp } from 'lucide-react';

export function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-6 text-slate-900">
            About Qua Industries
          </h2>

          <div className="h-1 w-24 bg-blue-600 mx-auto mb-12"></div>

          <p className="text-lg text-slate-700 leading-relaxed mb-8 text-center">
            Qua Industries is a diversified company focused on building, owning, and managing scalable
            businesses across multiple sectors, including technology, food, real estate, media, and
            essential services.
          </p>

          <p className="text-lg text-slate-700 leading-relaxed mb-8">
            Founded with a clear strategic vision, Qua Industries identifies everyday challenges and
            develops practical, sustainable solutions through well-structured business ventures. The
            company operates with a long-term growth mindset, prioritizing innovation, operational
            excellence, and responsible expansion.
          </p>

          <p className="text-lg text-slate-700 leading-relaxed mb-12">
            As a parent platform, Qua Industries provides direction, governance, and strategic support
            to its projects and future subsidiaries, enabling each venture to grow independently while
            remaining aligned with the company's core values and objectives.
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6 rounded-xl bg-slate-50 hover:bg-slate-100 transition-colors duration-300">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 text-blue-600 rounded-full mb-4">
                <Building2 className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-slate-900">Strategic Focus</h3>
              <p className="text-slate-600">
                Building sustainable businesses that solve real-world problems
              </p>
            </div>

            <div className="text-center p-6 rounded-xl bg-slate-50 hover:bg-slate-100 transition-colors duration-300">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 text-blue-600 rounded-full mb-4">
                <Globe className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-slate-900">African Impact</h3>
              <p className="text-slate-600">
                Headquartered in Nigeria, scaling across Africa and beyond
              </p>
            </div>

            <div className="text-center p-6 rounded-xl bg-slate-50 hover:bg-slate-100 transition-colors duration-300">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 text-blue-600 rounded-full mb-4">
                <TrendingUp className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-slate-900">Long-term Growth</h3>
              <p className="text-slate-600">
                Disciplined, phased expansion with sustainable cashflows
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
