export default function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div className="col-span-1 md:col-span-2">
            <img
              src="/Qua industries limited logo.jpeg"
              alt="Qua Industries Limited"
              className="h-16 w-auto mb-4 bg-white p-2 rounded"
            />
            <p className="text-gray-400 mb-2 italic">Designed for Impact</p>
            <p className="text-gray-400 text-sm leading-relaxed">
              Building sustainable African businesses that solve real-world problems across technology, food, real estate, media, and essential services.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => scrollToSection('about')}
                  className="text-gray-400 hover:text-white transition-colors duration-200"
                >
                  About Us
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('vision')}
                  className="text-gray-400 hover:text-white transition-colors duration-200"
                >
                  Vision & Mission
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('values')}
                  className="text-gray-400 hover:text-white transition-colors duration-200"
                >
                  Core Values
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('subsidiaries')}
                  className="text-gray-400 hover:text-white transition-colors duration-200"
                >
                  Subsidiaries
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-lg mb-4">Contact</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>Headquarters: Nigeria</li>
              <li>Email: Industriesqua@gmail.com</li>
              <li>Phone: 07030199811 | 07019791950</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 mt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              &copy; {currentYear} Qua Industries Limited. All rights reserved.
            </p>
            <p className="text-gray-400 text-sm mt-2 md:mt-0">
              Building the future of African enterprise
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
