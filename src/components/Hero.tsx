import { ArrowRight, Building2, Target, TrendingUp, Users } from 'lucide-react';

export default function Hero() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const highlights = [
    { icon: Building2, label: 'Who We Are', id: 'about' },
    { icon: Target, label: 'Our Strategy', id: 'vision' },
    { icon: TrendingUp, label: 'Our Subsidiaries', id: 'subsidiaries' },
    { icon: Users, label: 'Our Impact', id: 'founder' },
  ];

  return (
    <section id="hero" className="pt-20 min-h-screen flex items-center relative overflow-hidden" style={{ backgroundImage: 'url(/background.jpeg)', backgroundSize: 'cover', backgroundPosition: 'center', backgroundAttachment: 'fixed' }}>
      <div className="absolute inset-0 bg-black/40 z-10"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-20">
        <div className="text-center space-y-8">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white tracking-tight">
            Qua Industries Limited
          </h1>

          <p className="text-2xl md:text-3xl text-blue-300 font-light italic">
            Designed for Impact
          </p>

          <p className="text-xl md:text-2xl text-gray-100 max-w-3xl mx-auto leading-relaxed">
            Building sustainable African businesses that solve real-world problems.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
            <button
              onClick={() => scrollToSection('subsidiaries')}
              className="px-8 py-4 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-all duration-200 flex items-center justify-center gap-2 shadow-lg hover:shadow-xl"
            >
              Explore Our Businesses
              <ArrowRight className="h-5 w-5" />
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="px-8 py-4 bg-white text-blue-600 border-2 border-blue-600 rounded-lg font-medium hover:bg-blue-50 transition-all duration-200"
            >
              Partner With Us
            </button>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-16">
            {highlights.map((item, index) => (
              <button
                key={index}
                onClick={() => scrollToSection(item.id)}
                className="p-6 bg-white/95 rounded-xl shadow-md hover:shadow-lg transition-all duration-200 group cursor-pointer hover:bg-white"
              >
                <item.icon className="h-8 w-8 text-blue-600 mx-auto mb-3 group-hover:scale-110 transition-transform duration-200" />
                <p className="text-gray-700 font-medium">{item.label}</p>
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
