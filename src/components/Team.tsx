import { Linkedin, Mail } from 'lucide-react';

export function Team() {
  const teamMembers = [
    {
      name: 'Chukwu Okoro',
      role: 'Chief Executive Officer & Founder',
      bio: 'Visionary leader driving Qua Industries strategic direction and growth across African markets',
      email: 'chukwu@quaindustries.com',
    },
    {
      name: 'Amara Okafor',
      role: 'Chief Operating Officer',
      bio: 'Operations expert ensuring operational excellence and scalable processes across subsidiaries',
      email: 'amara@quaindustries.com',
    },
    {
      name: 'Tunde Adebayo',
      role: 'Chief Technology Officer',
      bio: 'Tech innovator leading digital transformation and technology infrastructure development',
      email: 'tunde@quaindustries.com',
    },
    {
      name: 'Ngozi Chimere',
      role: 'Chief Financial Officer',
      bio: 'Financial strategist managing group finances, investments, and corporate fundraising',
      email: 'ngozi@quaindustries.com',
    },
    {
      name: 'Adeyemi Ogunlade',
      role: 'Head of Business Development',
      bio: 'Strategic business development leader identifying and scaling new venture opportunities',
      email: 'adeyemi@quaindustries.com',
    },
    {
      name: 'Zainab Suleiman',
      role: 'Head of Sustainability & Impact',
      bio: 'Impact-driven professional ensuring sustainable growth and community value creation',
      email: 'zainab@quaindustries.com',
    },
  ];

  return (
    <section id="team" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-6 text-slate-900">
            Leadership Team
          </h2>

          <div className="h-1 w-24 bg-blue-600 mx-auto mb-8"></div>

          <p className="text-lg text-slate-600 text-center mb-16 max-w-3xl mx-auto">
            Experienced leaders committed to building sustainable businesses and creating lasting value
            across Africa
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member) => (
              <div
                key={member.name}
                className="bg-gradient-to-br from-slate-50 to-blue-50 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-slate-200"
              >
                <div className="w-20 h-20 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full mx-auto mb-6 flex items-center justify-center text-white text-2xl font-bold">
                  {member.name
                    .split(' ')
                    .map((n) => n[0])
                    .join('')}
                </div>

                <h3 className="text-xl font-bold text-slate-900 mb-1 text-center">{member.name}</h3>

                <p className="text-sm font-semibold text-blue-600 mb-4 text-center">{member.role}</p>

                <p className="text-slate-600 text-sm leading-relaxed mb-6 text-center">{member.bio}</p>

                <div className="flex items-center justify-center gap-3">
                  <a
                    href={`mailto:${member.email}`}
                    className="inline-flex items-center justify-center w-10 h-10 bg-blue-100 text-blue-600 rounded-full hover:bg-blue-600 hover:text-white transition-all duration-200"
                  >
                    <Mail className="w-5 h-5" />
                  </a>
                  <a
                    href="#"
                    className="inline-flex items-center justify-center w-10 h-10 bg-blue-100 text-blue-600 rounded-full hover:bg-blue-600 hover:text-white transition-all duration-200"
                  >
                    <Linkedin className="w-5 h-5" />
                  </a>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <p className="text-slate-600 text-lg">
              Our diverse team brings deep expertise across technology, operations, finance, and
              business development to drive Qua Industries forward.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
