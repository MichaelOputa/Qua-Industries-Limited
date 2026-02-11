import { Linkedin, Mail } from 'lucide-react';

export default function Team() {
  const teamMembers = [
    {
      name: 'Timfon Aqua',
      role: 'Founder & CEO',
      bio: 'Visionary entrepreneur dedicated to solving real-world challenges across Africa',
      email: 'timfon@quaindustries.com',
      linkedin: '#',
    },
    {
      name: 'Executive Leadership',
      role: 'Strategic Direction',
      bio: 'Experienced team driving innovation and growth across all subsidiaries',
      email: 'leadership@quaindustries.com',
      linkedin: '#',
    },
    {
      name: 'Operations Team',
      role: 'Execution Excellence',
      bio: 'Dedicated professionals ensuring operational efficiency and quality delivery',
      email: 'operations@quaindustries.com',
      linkedin: '#',
    },
    {
      name: 'Finance & Legal',
      role: 'Governance',
      bio: 'Expert team managing financial oversight and corporate governance',
      email: 'finance@quaindustries.com',
      linkedin: '#',
    },
    {
      name: 'Innovation Lab',
      role: 'Research & Development',
      bio: 'Forward-thinking minds exploring emerging opportunities and technologies',
      email: 'innovation@quaindustries.com',
      linkedin: '#',
    },
    {
      name: 'Business Development',
      role: 'Growth & Partnerships',
      bio: 'Building strategic partnerships and identifying investment opportunities',
      email: 'partnerships@quaindustries.com',
      linkedin: '#',
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
              <div className="h-32 bg-gradient-to-r from-blue-600 to-blue-700 group-hover:from-blue-700 group-hover:to-blue-800 transition-colors duration-300"></div>

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
            href="mailto:careers@quaindustries.com"
            className="inline-block px-8 py-4 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-all duration-200"
          >
            Explore Opportunities
          </a>
        </div>
      </div>
    </section>
  );
}
