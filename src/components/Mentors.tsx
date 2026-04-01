import { motion } from 'motion/react';

export default function Mentors() {
  const mentors = [
    {
      id: 1,
      name: "Dr. Dheeraj Agarwal",
      role: "Mentor",
      image: "/DA.jpeg",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    },
    {
      id: 2,
      name: "Rahul Pandit",
      role: "Mentor",
      image: "/HP.jpeg",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    }
  ];

  return (
    <section className="py-24 relative bg-[#050505] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-16 text-center"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 inline-block">
            Our <span className="text-gradient">Mentors</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-xl mx-auto">
            Learn from industry experts who guide our community towards excellence.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {mentors.map((mentor, index) => (
            <motion.div
              key={mentor.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="glass-card rounded-3xl p-6 flex flex-col sm:flex-row gap-6 items-center sm:items-start group hover:border-primary/50 transition-colors duration-300"
            >
              <div className="w-32 h-32 sm:w-40 sm:h-40 shrink-0 rounded-2xl overflow-hidden relative">
                <div className="absolute inset-0 bg-primary/20 mix-blend-overlay z-10 group-hover:opacity-0 transition-opacity duration-300"></div>
                <img 
                  src={mentor.image} 
                  alt={mentor.name} 
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="flex flex-col justify-center h-full text-center sm:text-left">
                <h3 className="text-2xl font-bold text-white mb-1">{mentor.name}</h3>
                <p className="text-primary font-medium mb-4">{mentor.role}</p>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {mentor.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
