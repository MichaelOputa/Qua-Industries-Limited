import {
  Tv,
  MessageSquare,
  Cpu,
  Wheat,
  Building,
  Heart,
  Church,
  Antenna,
  ShoppingCart,
  Film,
  Truck,
  Shirt,
  PiggyBank,
  Zap,
  Activity,
  Home,
} from 'lucide-react';

export function Subsidiaries() {
  const subsidiaries = [
    {
      name: 'QuaTV',
      description: 'Media & entertainment technology platform',
      icon: Tv,
      category: 'Media & Technology',
    },
    {
      name: 'Quagram',
      description: 'Social media platform for African communities',
      icon: MessageSquare,
      category: 'Technology',
    },
    {
      name: 'QuaTech',
      description: 'Hardware & electronics manufacturing',
      icon: Cpu,
      category: 'Technology',
    },
    {
      name: 'Qua Foods Ltd',
      description: 'Agro-processing and cassava-based foods',
      icon: Wheat,
      category: 'Food Systems',
    },
    {
      name: 'Qua Construction',
      description: 'Infrastructure & real estate development',
      icon: Building,
      category: 'Real Estate',
    },
    {
      name: 'Excellent Africa',
      description: 'NGO for African advocacy and development',
      icon: Heart,
      category: 'Social Impact',
    },
    {
      name: 'Methodist Church Nigeria TV',
      description: 'Faith-based media broadcasting',
      icon: Church,
      category: 'Media',
    },
    {
      name: 'AkwaCross TV',
      description: 'Regional media platform',
      icon: Antenna,
      category: 'Media',
    },
    {
      name: 'Buy-O',
      description: 'Marketplace & e-commerce platform',
      icon: ShoppingCart,
      category: 'Commerce',
    },
    {
      name: 'Qua Studios',
      description: 'Film and content production',
      icon: Film,
      category: 'Media',
    },
    {
      name: 'Qua Logistics',
      description: 'Transport and delivery services',
      icon: Truck,
      category: 'Logistics',
    },
    {
      name: 'Qua Apparels',
      description: 'Fashion & merchandise',
      icon: Shirt,
      category: 'Retail',
    },
    {
      name: 'Qua Capital',
      description: 'Investment arm & microfinance',
      icon: PiggyBank,
      category: 'Finance',
    },
    {
      name: 'Qua Energy',
      description: 'Renewable & clean energy initiatives',
      icon: Zap,
      category: 'Energy',
    },
    {
      name: 'Qua Health',
      description: 'Healthtech & wellness products',
      icon: Activity,
      category: 'Healthcare',
    },
    {
      name: 'Qua State Estate',
      description: 'Real estate development & management',
      icon: Home,
      category: 'Real Estate',
    },
  ];

  return (
    <section id="portfolio" className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="container mx-auto px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-6 text-slate-900">
            Our Portfolio
          </h2>

          <div className="h-1 w-24 bg-blue-600 mx-auto mb-8"></div>

          <p className="text-lg text-slate-600 text-center mb-16 max-w-3xl mx-auto">
            Qua Industries operates across diverse sectors, building practical solutions that drive
            sustainable growth and create lasting value for communities across Africa
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {subsidiaries.map((subsidiary) => {
              const Icon = subsidiary.icon;

              return (
                <div
                  key={subsidiary.name}
                  className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-slate-100"
                >
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-100 text-blue-600 rounded-lg mb-4">
                    <Icon className="w-6 h-6" />
                  </div>

                  <h3 className="text-lg font-bold mb-2 text-slate-900">{subsidiary.name}</h3>

                  <p className="text-sm text-slate-600 mb-3 leading-relaxed">
                    {subsidiary.description}
                  </p>

                  <span className="inline-block text-xs font-semibold px-3 py-1 bg-blue-50 text-blue-700 rounded-full">
                    {subsidiary.category}
                  </span>
                </div>
              );
            })}
          </div>

          <div className="mt-16 text-center">
            <p className="text-slate-600 text-lg">
              Each subsidiary operates independently while aligned with our core mission of creating
              sustainable, scalable businesses that improve everyday life across Africa.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
