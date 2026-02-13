import { useState } from 'react';
import { Linkedin, Mail } from 'lucide-react';
import ImageModal from './ImageModal';

export default function Team() {
  const [selectedImage, setSelectedImage] = useState<{ src: string; alt: string } | null>(null);
  const teamMembers = [
    {
      name: 'Timfon Aqua',
      role: 'Founder & CEO',
      bio: 'Visionary entrepreneur dedicated to solving real-world challenges across Africa',
      email: 'timfon@quaindustries.com',
      linkedin: '#',
      image: '/Timfon.jpeg',
    },
    {
      name: 'Michael Oputa',
      role: 'Engineering Leadership',
      bio: 'Experienced leader driving technical excellence and innovation across our ventures',
      email: 'michaeloputa823@gmail.com',
      linkedin: 'https://ng.linkedin.com/in/michael-oputa-7310a3280',
      image: '/Tech.jpeg',
    },
    {
      name: 'Operations Team',
      role: 'Execution Excellence',
      bio: 'Dedicated professionals ensuring operational efficiency and quality delivery',
      email: 'operations@quaindustries.com',
      linkedin: '#',
      image: 'https://images.pexels.com/photos/3769021/pexels-photo-3769021.jpeg?auto=compress&cs=tinysrgb&w=600',
    },
    {
      name: 'Finance & Legal',
      role: 'Governance',
      bio: 'Expert team managing financial oversight and corporate governance',
      email: 'finance@quaindustries.com',
      linkedin: '#',
      image: 'https://images.pexels.com/photos/3962286/pexels-photo-3962286.jpeg?auto=compress&cs=tinysrgb&w=600',
    },
    {
      name: 'Innovation Lab',
      role: 'Research & Development',
      bio: 'Forward-thinking minds exploring emerging opportunities and technologies',
      email: 'innovation@quaindustries.com',
      linkedin: '#',
      image: 'https://images.pexels.com/photos/3771127/pexels-photo-3771127.jpeg?auto=compress&cs=tinysrgb&w=600',
    },
    {
      name: 'Business Development',
      role: 'Growth & Partnerships',
      bio: 'Building strategic partnerships and identifying investment opportunities',
      email: 'partnerships@quaindustries.com',
      linkedin: '#',
      image: 'https://images.pexels.com/photos/2173507/pexels-photo-2173507.jpeg?auto=compress&cs=tinysrgb&w=600',
    },
  ];

  return (
    <section id="team" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Our Team
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
          <p className="mt-6 text-xl text-gray-600 max-w-3xl mx-auto">
            Talented professionals united by a shared vision to build sustainable impact across Africa
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden group"
            >
              <div className="relative h-64 overflow-hidden bg-gray-200 cursor-pointer" onClick={() => setSelectedImage({ src: member.image, alt: member.name })}>
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>

              <div className="px-6 py-8">
                <div className="mb-4">
                  <h3 className="text-2xl font-bold text-gray-900 mb-1">
                    {member.name}
                  </h3>
                  <p className="text-blue-600 font-semibold text-sm">
                    {member.role}
                  </p>
                </div>

                <p className="text-gray-600 text-sm leading-relaxed mb-6">
                  {member.bio}
                </p>

                <div className="flex items-center gap-3">
                  <a
                    href={`mailto:${member.email}`}
                    className="p-2 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors duration-200"
                    aria-label="Email"
                  >
                    <Mail className="h-5 w-5 text-blue-600" />
                  </a>
                  <a
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors duration-200"
                    aria-label="LinkedIn"
                  >
                    <Linkedin className="h-5 w-5 text-blue-600" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-white rounded-2xl shadow-lg p-10 md:p-12 max-w-4xl mx-auto">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Join Our Team
          </h3>
          <p className="text-gray-600 text-lg leading-relaxed mb-6">
            We're always looking for talented individuals passionate about building meaningful businesses across Africa. If you share our vision and want to make an impact, we'd love to hear from you.
          </p>
          <a
            href="mailto:Industriesqua@gmail.com"
            className="inline-block px-8 py-4 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-all duration-200"
          >
            Explore Opportunities
          </a>
        </div>

        <ImageModal
          isOpen={!!selectedImage}
          src={selectedImage?.src || ''}
          alt={selectedImage?.alt || ''}
          onClose={() => setSelectedImage(null)}
        />
      </div>
    </section>
  );
}
