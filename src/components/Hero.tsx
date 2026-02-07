import { ChevronDown } from 'lucide-react';

export function Hero() {
  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 text-white overflow-hidden pt-20">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMtOS45NDEgMC0xOCA4LjA1OS0xOCAxOHM4LjA1OSAxOCAxOCAxOCAxOC04LjA1OSAxOC0xOC04LjA1OS0xOC0xOC0xOHptMCAzMmMtNy43MzIgMC0xNC02LjI2OC0xNC0xNHM2LjI2OC0xNCAxNC0xNCAxNCA2LjI2OCAxNCAxNC02LjI2OCAxNC0xNCAxNHoiIGZpbGw9IiNmZmYiIG9wYWNpdHk9IjAuMDIiLz48L2c+PC9zdmc+')] opacity-20"></div>

      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="mb-8 animate-fade-in">
          <img
            src="/Qua industries limited.jpeg"
            alt="Qua Industries Limited"
            className="mx-auto h-32 md:h-40 object-contain"
          />
        </div>

        <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-slide-up">
          Qua Industries Limited
        </h1>

        <p className="text-xl md:text-2xl text-blue-100 mb-4 max-w-3xl mx-auto animate-slide-up-delay-1">
          Building Sustainable Solutions Across Africa
        </p>

        <p className="text-lg md:text-xl text-blue-200 mb-12 max-w-4xl mx-auto leading-relaxed animate-slide-up-delay-2">
          A diversified African enterprise creating practical, scalable businesses across technology,
          food systems, real estate, media, and essential services
        </p>

        <button
          onClick={scrollToAbout}
          className="group inline-flex items-center gap-2 bg-white text-blue-900 px-8 py-4 rounded-full text-lg font-semibold hover:bg-blue-50 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 animate-slide-up-delay-3"
        >
          Explore Our Vision
          <ChevronDown className="w-5 h-5 group-hover:translate-y-1 transition-transform" />
        </button>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <ChevronDown className="w-8 h-8 text-white opacity-50" />
      </div>
    </section>
  );
}
