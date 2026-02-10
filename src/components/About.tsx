import { Shield, Lightbulb, DollarSign, Users, FileText } from 'lucide-react';

export default function About() {
  const responsibilities = [
    { icon: Target, label: 'Strategic Direction', description: 'Setting vision and long-term goals' },
    { icon: Shield, label: 'Branding & Reputation', description: 'Group identity and public image' },
    { icon: FileText, label: 'Group Finance & Legal', description: 'Financial oversight and governance' },
    { icon: DollarSign, label: 'Investment & Fundraising', description: 'Capital allocation and growth funding' },
    { icon: Users, label: 'Executive Leadership', description: 'CEO and Board governance' },
  ];

  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            About Qua Industries
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
        </div>

        <div className="max-w-4xl mx-auto space-y-6 text-lg text-gray-700 leading-relaxed mb-20">
          <p>
            Qua Industries is a diversified company focused on <strong>building, owning, and managing scalable businesses</strong> across multiple sectors, including <strong>technology, food, real estate, media, and essential services</strong>.
          </p>
          <p>
            Founded with a clear strategic vision, Qua Industries identifies <strong>everyday challenges</strong> and develops <strong>practical, sustainable solutions</strong> through well-structured business ventures. The company operates with a <strong>long-term growth mindset</strong>, prioritizing <strong>innovation, operational excellence, and responsible expansion</strong>.
          </p>
          <p>
            As a parent platform, Qua Industries provides <strong>direction, governance, and strategic support</strong> to its projects and subsidiaries, enabling each venture to grow independently while remaining aligned with the company's core values.
          </p>
          <p>
            Headquartered in <strong>Nigeria</strong>, Qua Industries is committed to creating <strong>local impact</strong> while building businesses designed to scale <strong>across Africa and beyond</strong>.
          </p>
        </div>

        <div className="mt-20">
          <h3 className="text-3xl font-bold text-gray-900 text-center mb-12">
            What Qua Industries Handles
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {responsibilities.map((item, index) => (
              <div
                key={index}
                className="p-8 bg-gradient-to-br from-blue-50 to-white rounded-xl border border-blue-100 hover:shadow-lg transition-all duration-300"
              >
                <item.icon className="h-12 w-12 text-blue-600 mb-4" />
                <h4 className="text-xl font-semibold text-gray-900 mb-2">
                  {item.label}
                </h4>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Target({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <circle cx="12" cy="12" r="10" strokeWidth="2" />
      <circle cx="12" cy="12" r="6" strokeWidth="2" />
      <circle cx="12" cy="12" r="2" strokeWidth="2" />
    </svg>
  );
}
