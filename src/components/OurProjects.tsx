import { ShoppingCart, Utensils, Briefcase, Tv, Globe, Laptop, Mail } from 'lucide-react';

const projects = [
  {
    id: 1,
    title: 'The Marketplace Project',
    icon: ShoppingCart,
    description: 'A location-based platform connecting people to nearby vendors and services.',
    image: '/Marketplace.jpeg',
  },
  {
    id: 2,
    title: 'Qua Food Project',
    icon: Utensils,
    description: 'Providing accessible food solutions, supply, and distribution services.',
    image: '/food project.jpeg',
  },
  {
    id: 3,
    title: 'Qua Business Project',
    icon: Briefcase,
    description: 'Supporting entrepreneurs with tools, partnerships, and growth systems.',
    image: '/business project.jpeg',
  },
  {
    id: 4,
    title: 'Qua Television Project',
    icon: Tv,
    description: 'A future African media platform for storytelling, information, and impact.',
    image: '/tv project.jpeg',
  },
  {
    id: 5,
    title: 'Excellent Africa Project',
    icon: Globe,
    description: 'A social impact initiative focused on development and empowerment.',
    image: '/excellent project.jpeg',
  },
  {
    id: 6,
    title: 'Qua Tech Project',
    icon: Laptop,
    description: 'Technology solutions powering innovation, digital services, and infrastructure.',
    image: '/tech project.jpeg',
  },
];

export default function OurProjects() {
  return (
    <section id="our project" className="py-20 bg-gradient-to-br from-slate-50 via-white to-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Our Projects
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Transforming industries and empowering communities across Africa through innovative initiatives
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => {
            const Icon = project.icon;
            return (
              <div
                key={project.id}
                className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden transform hover:-translate-y-2"
              >
                <div className="relative h-56 overflow-hidden bg-gradient-to-br from-blue-600 to-blue-800">
                  {project.image ? (
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center">
                      <Icon className="w-24 h-24 text-white/90" strokeWidth={1.5} />
                    </div>
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 flex items-center space-x-2">
                    <div className="bg-white/20 backdrop-blur-sm rounded-full p-2">
                      <Icon className="w-5 h-5 text-white" />
                    </div>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {project.description}
                  </p>
                  <a
                    href="mailto:industriesqua@gmail.com"
                    className="inline-flex items-center space-x-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-all duration-200 transform hover:scale-105 shadow-md hover:shadow-lg"
                  >
                    <Mail className="w-4 h-4" />
                    <span>Make Inquiry</span>
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
