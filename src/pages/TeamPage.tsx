import { motion } from 'motion/react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Sidebar from '../components/Sidebar';

export default function TeamPage() {
  const teamSections = [
    {
      title: 'Executive Team',
      members: [
        {
          name: 'Shraddha Patil',
          role: 'President',
          image: '/Shraddha.jpg',
          description: 'Driving vision and strategy for DevKraft.',
        },
        {
          name: 'Anmol Ashok Kadam',
          role: 'Secretary',
          image: '/anmol.jpg',
          description: 'Communication and member engagement lead.',
        },
        {
          name: 'Ayush Auti',
          role: 'Treasurer',
          image: '/placeholder_profile.png',
          description: 'Managing funds and financial operations.',
        }
      ]
    },
    {
      title: 'Event Management',
      members: [
        {
          name: 'Omkar Chindarkar',
          role: 'Lead',
          image: '/omkar-event.jpg',
          description: 'Leads planning and execution of all events.',
        }
      ]
    },
    {
      title: 'Technical Team',
      members: [
        {
          name: 'Ramkrushna Waghchaure',
          role: 'Lead',
          image: '/placeholder_profile.png',
          description: 'Technical leadership and mentorship.',
        }
      ]
    },
    {
      title: 'Marketing Team',
      members: [
        {
          name: 'Aryaa Dhole',
          role: 'Lead',
          image: '/Aryaa Dhole_page-0001.jpg',
          description: 'Digital marketing and campaign strategy.',
        },
        {
          name: 'Yash Bahadure',
          role: 'Lead',
          image: '/placeholder_profile.png',
          description: 'Marketing analytics and outreach.',
        }
      ]
    },
    {
      title: 'Public relations team',
      members: [
        {
          name: 'Harsh Khilari',
          role: 'Lead',
          image: '/harsh-PR.jpg',
          description: 'Handles outreach and campus visibility.',
        }
      ]
    },
    {
      title: 'Production Team',
      members: [
        {
          name: 'Rushikesh Patil',
          role: 'Lead',
          image: '/rushi.JPG',
          description: 'Production operations and logistics.',
        },
        {
          name: 'Kartik',
          role: 'Lead',
          image: '/placeholder.png',
          description: 'Production support and coordination.',
        }
      ]
    },
    {
      title: 'Design Team',
      members: [
        {
          name: 'Shravan Patil',
          role: 'Lead',
          image: '/shravan.jpg',
          description: 'Design systems and visual identity.',
        }
      ]
    },
    {
      title: 'Database Team',
      members: [
        {
          name: 'Harshal Shahare',
          role: 'Lead',
          image: '/Harshal Shahare.png',
          description: 'Database design and query optimization.',
        }
      ]
    }
  ];

  return (
    <>
      <Navbar />
      <Sidebar />
      <main className="pt-16">
        <section className="py-24 md:py-32 relative bg-[#050505]">
          <div className="max-w-7xl mx-auto px-6 md:px-12">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className="text-center mb-20"
            >
              <h2 className="text-4xl md:text-6xl font-bold mb-6">
                Meet the <span className="text-gradient">Team</span>
              </h2>
              <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                Get to know the talented individuals driving Devkraft forward
              </p>
            </motion.div>

            {/* Committee Photo Section */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className="mb-24"
            >
              <div className="rounded-3xl overflow-hidden border border-white/10 group hover:border-primary/50 transition-all duration-300">
                <img 
                  src="/committee.jpeg" 
                  alt="The Founding Members" 
                  className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <p className="text-center mt-8 text-2xl md:text-3xl font-bold text-primary">
                The Founding Members
              </p>
            </motion.div>

            {teamSections.map((section, sectionIndex) => (
              <div key={section.title} className="mb-20">
                <motion.h3
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: sectionIndex * 0.2 }}
                  className="text-2xl md:text-3xl font-bold text-center mb-12 text-white"
                >
                  {section.title}
                </motion.h3>

                {section.members.length === 0 ? (
                  <div className="text-center py-10">
                    <p className="text-gray-400 text-lg">{section.title} members coming soon...</p>
                  </div>
                ) : (
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {section.members.map((member, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, scale: 0.92 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        className="glass-card p-8 rounded-3xl text-center border border-white/10 hover:border-primary/50 transition-all duration-300"
                      >
                        <div className="mb-6">
                          {member.image ? (
                            <img
                              src={member.image}
                              alt={member.name}
                              className="w-44 h-44 object-cover rounded-full mx-auto border-2 border-primary/30"
                              style={{ objectPosition: member.name === 'Rushikesh Patil' ? '50% 35%' : 'center' }}
                              loading="lazy"
                              onError={(e) => {
                                (e.currentTarget as HTMLImageElement).src = '/placeholder_profile.png';
                              }}
                            />
                          ) : (
                            <div className="w-44 h-44 mx-auto rounded-full bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center border-2 border-primary/30">
                              <span className="text-3xl font-bold text-primary">
                                {member.name?.charAt(0)?.toUpperCase() || '?'}
                              </span>
                            </div>
                          )}
                        </div>

                        <h4 className="text-xl font-bold text-white mb-2">{member.name || 'Name'}</h4>
                        <p className="text-primary font-medium mb-4">{member.role || 'Role'}</p>
                        <p className="text-gray-400 text-sm leading-relaxed">{member.description || 'Description coming soon...'}</p>

                        {member.socials && (
                          <div className="flex justify-center space-x-4 mt-6">
                            {member.socials.linkedin && (
                              <a href={member.socials.linkedin} target="_blank" rel="noopener noreferrer"
                                 className="text-gray-400 hover:text-primary transition-colors">
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                                </svg>
                              </a>
                            )}
                            {member.socials.github && (
                              <a href={member.socials.github} target="_blank" rel="noopener noreferrer"
                                 className="text-gray-400 hover:text-primary transition-colors">
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                                </svg>
                              </a>
                            )}
                          </div>
                        )}
                      </motion.div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
