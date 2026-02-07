import { MapPin, Mail, Phone } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 text-white py-16">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-12 mb-12">
            <div>
              <img
                src="/Qua industries limited.jpeg"
                alt="Qua Industries Limited"
                className="h-20 object-contain mb-6"
              />
              <p className="text-slate-400 leading-relaxed">
                Building sustainable solutions and driving innovation across Africa
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-6">Quick Links</h3>
              <ul className="space-y-3">
                <li>
                  <a
                    href="#about"
                    className="text-slate-400 hover:text-white transition-colors duration-200"
                  >
                    About Us
                  </a>
                </li>
                <li>
                  <a
                    href="#vision"
                    className="text-slate-400 hover:text-white transition-colors duration-200"
                  >
                    Vision & Mission
                  </a>
                </li>
                <li>
                  <a
                    href="#values"
                    className="text-slate-400 hover:text-white transition-colors duration-200"
                  >
                    Core Values
                  </a>
                </li>
                <li>
                  <a
                    href="#portfolio"
                    className="text-slate-400 hover:text-white transition-colors duration-200"
                  >
                    Our Portfolio
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-6">Contact</h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-blue-400 flex-shrink-0 mt-1" />
                  <span className="text-slate-400">Nigeria</span>
                </li>
                <li className="flex items-start gap-3">
                  <Mail className="w-5 h-5 text-blue-400 flex-shrink-0 mt-1" />
                  <a
                    href="mailto:info@quaindustries.com"
                    className="text-slate-400 hover:text-white transition-colors duration-200"
                  >
                    info@quaindustries.com
                  </a>
                </li>
                <li className="flex items-start gap-3">
                  <Phone className="w-5 h-5 text-blue-400 flex-shrink-0 mt-1" />
                  <span className="text-slate-400">+234 XXX XXX XXXX</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-slate-800 pt-8">
            <p className="text-center text-slate-400">
              {currentYear} Qua Industries Limited. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
