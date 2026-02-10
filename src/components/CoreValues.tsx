import { Shield, Lightbulb, Award, Heart, TrendingUp } from 'lucide-react';

export default function CoreValues() {
  const values = [
    {
      icon: Shield,
      title: 'Integrity',
      description: 'Honesty, transparency, accountability',
    },
    {
      icon: Lightbulb,
      title: 'Innovation',
      description: 'Forward-thinking ideas, practical solutions',
    },
    {
      icon: Award,
      title: 'Excellence',
      description: 'Quality, efficiency, continuous improvement',
    },
    {
      icon: Heart,
      title: 'Impact',
      description: 'Businesses that make meaningful difference',
    },
    {
      icon: TrendingUp,
      title: 'Growth',
      description: 'Long-term thinking, responsible scaling',
    },
  ];

  return (
    <section id="values" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Core Values
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
          <p className="mt-6 text-xl text-gray-600 max-w-3xl mx-auto">
            The principles that guide every decision we make
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {values.map((value, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-8 shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 group"
            >
              <div className="flex flex-col items-center text-center">
                <div className="p-4 bg-blue-50 rounded-full mb-6 group-hover:bg-blue-100 transition-colors duration-300">
                  <value.icon className="h-10 w-10 text-blue-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                  {value.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {value.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
