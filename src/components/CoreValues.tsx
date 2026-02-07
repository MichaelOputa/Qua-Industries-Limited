import { Shield, Lightbulb, Award, Heart, TrendingUp } from 'lucide-react';

export function CoreValues() {
  const values = [
    {
      icon: Shield,
      title: 'Integrity',
      description: 'We operate with honesty, transparency, and accountability.',
      color: 'blue',
    },
    {
      icon: Lightbulb,
      title: 'Innovation',
      description: 'We embrace forward-thinking ideas and practical solutions.',
      color: 'amber',
    },
    {
      icon: Award,
      title: 'Excellence',
      description: 'We pursue quality, efficiency, and continuous improvement.',
      color: 'emerald',
    },
    {
      icon: Heart,
      title: 'Impact',
      description: 'We build businesses that make a meaningful difference.',
      color: 'rose',
    },
    {
      icon: TrendingUp,
      title: 'Growth',
      description: 'We think long-term and scale responsibly.',
      color: 'cyan',
    },
  ];

  const colorClasses: Record<string, { bg: string; text: string; hover: string }> = {
    blue: { bg: 'bg-blue-100', text: 'text-blue-600', hover: 'hover:bg-blue-50' },
    amber: { bg: 'bg-amber-100', text: 'text-amber-600', hover: 'hover:bg-amber-50' },
    emerald: { bg: 'bg-emerald-100', text: 'text-emerald-600', hover: 'hover:bg-emerald-50' },
    rose: { bg: 'bg-rose-100', text: 'text-rose-600', hover: 'hover:bg-rose-50' },
    cyan: { bg: 'bg-cyan-100', text: 'text-cyan-600', hover: 'hover:bg-cyan-50' },
  };

  return (
    <section id="values" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-6 text-slate-900">
            Core Values
          </h2>

          <div className="h-1 w-24 bg-blue-600 mx-auto mb-12"></div>

          <p className="text-lg text-slate-600 text-center mb-16 max-w-2xl mx-auto">
            Our values guide every decision we make and every business we build
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value) => {
              const Icon = value.icon;
              const colors = colorClasses[value.color];

              return (
                <div
                  key={value.title}
                  className={`p-8 rounded-xl border-2 border-slate-100 ${colors.hover} transition-all duration-300 hover:shadow-lg hover:-translate-y-1`}
                >
                  <div
                    className={`inline-flex items-center justify-center w-14 h-14 ${colors.bg} ${colors.text} rounded-full mb-4`}
                  >
                    <Icon className="w-7 h-7" />
                  </div>

                  <h3 className="text-2xl font-bold mb-3 text-slate-900">{value.title}</h3>

                  <p className="text-slate-600 leading-relaxed">{value.description}</p>
                </div>
              );
            })}
          </div>

          <div className="mt-16 bg-slate-50 rounded-2xl p-8 md:p-10">
            <h3 className="text-2xl font-bold mb-4 text-slate-900">Brand Voice</h3>
            <div className="grid md:grid-cols-3 gap-6 text-slate-700">
              <div>
                <span className="font-semibold text-slate-900">Tone:</span> Confident, clear, and
                measured
              </div>
              <div>
                <span className="font-semibold text-slate-900">Style:</span> Professional, simple, and
                forward-looking
              </div>
              <div>
                <span className="font-semibold text-slate-900">Personality:</span> Visionary, calm, and
                trustworthy
              </div>
            </div>
            <p className="mt-6 text-slate-600 italic">
              Qua Industries speaks with clarity and purpose—never loud, never vague.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
