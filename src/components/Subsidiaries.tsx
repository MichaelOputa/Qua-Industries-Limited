import { Tv, MessageCircle, Cpu, Wheat, Building, Globe, Church, ShoppingBag, Film, Truck, Shirt, DollarSign, Zap, Heart, Home } from 'lucide-react';

export default function Subsidiaries() {
  const subsidiaries = [
    {
      icon: Tv,
      name: 'QuaTV',
      sector: 'Media & Entertainment',
      description: 'Media and entertainment technology platform',
    },
    {
      icon: MessageCircle,
      name: 'Quagram',
      sector: 'Technology',
      description: 'Social media platform for African communities',
    },
    {
      icon: Cpu,
      name: 'QuaTech',
      sector: 'Manufacturing',
      description: 'Hardware and electronics manufacturing',
    },
    {
      icon: Wheat,
      name: 'Qua Foods Ltd',
      sector: 'Agro-processing',
      description: 'Cassava-based food products and distribution',
    },
    {
      icon: Building,
      name: 'Qua Construction',
      sector: 'Infrastructure',
      description: 'Infrastructure development and real estate',
    },
    {
      icon: Globe,
      name: 'Excellent Africa',
      sector: 'Non-Profit',
      description: 'NGO for African advocacy and development',
    },
    {
      icon: Church,
      name: 'Methodist Church Nigeria TV',
      sector: 'Faith Media',
      description: 'Faith-based media and broadcasting',
    },
    {
      icon: Tv,
      name: 'AkwaCross TV',
      sector: 'Regional Media',
      description: 'Regional media platform and content',
    },
    {
      icon: ShoppingBag,
      name: 'Buy-O',
      sector: 'E-commerce',
      description: 'Marketplace and e-commerce platform',
    },
    {
      icon: Film,
      name: 'Qua Studios',
      sector: 'Content Production',
      description: 'Film and content production services',
    },
    {
      icon: Truck,
      name: 'Qua Logistics',
      sector: 'Transportation',
      description: 'Transport and delivery services network',
    },
    {
      icon: Shirt,
      name: 'Qua Apparels',
      sector: 'Fashion',
      description: 'Fashion and branded merchandise',
    },
    {
      icon: DollarSign,
      name: 'Qua Capital',
      sector: 'Finance',
      description: 'Investment arm and microfinance services',
    },
    {
      icon: Zap,
      name: 'Qua Energy',
      sector: 'Energy',
      description: 'Renewable and clean energy initiatives',
    },
    {
      icon: Heart,
      name: 'Qua Health',
      sector: 'Healthcare',
      description: 'Healthtech and wellness products',
    },
    {
      icon: Home,
      name: 'Qua State Estate',
      sector: 'Real Estate',
      description: 'Property and estate development',
    },
  ];

  return (
    <section id="subsidiaries" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Our Subsidiaries
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
          <p className="mt-6 text-xl text-gray-600 max-w-3xl mx-auto">
            A diversified portfolio of businesses solving real-world challenges across Africa
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {subsidiaries.map((company, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-white to-blue-50 rounded-xl p-6 border border-blue-100 hover:shadow-lg hover:border-blue-300 transition-all duration-300 group"
            >
              <div className="p-3 bg-blue-100 rounded-lg w-fit mb-4 group-hover:bg-blue-600 transition-colors duration-300">
                <company.icon className="h-6 w-6 text-blue-600 group-hover:text-white transition-colors duration-300" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                {company.name}
              </h3>
              <p className="text-sm text-blue-600 font-medium mb-3">
                {company.sector}
              </p>
              <p className="text-gray-600 text-sm leading-relaxed">
                {company.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
