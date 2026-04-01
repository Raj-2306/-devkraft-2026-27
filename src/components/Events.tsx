import { motion } from 'motion/react';
import { ArrowRight, Code, Trophy, Cpu } from 'lucide-react';

export default function Events() {
  const events = [
    {
      id: "techfeud",
      title: "TechFeud",
      description: "Inspired by the popular game show \"Family Feud,\" our Tech Feud event is an exciting and interactive quiz competition that challenges participants' knowledge in areas such as technology, programming, and industry trends. With its unique blend of education and entertainment, Tech Feud offers a competitive yet enjoyable atmosphere where students can test their tech expertise while having fun.",
      image: "/techfeud.png",
      icon: <Trophy size={40} className="text-primary" />,
      color: "from-orange-500/20 to-orange-900/20",
      border: "group-hover:border-orange-500/50",
      link: "#"
    },
    {
      id: "devclash",
      title: "DevClash",
      description: "One of our flagship events, the 24-Hour City-Level DevClash Hackathon, brought together coding enthusiasts from across the city to build innovative solutions in a high-pressure environment. Participants tackled real-world challenges in domains like web development, AI/ML, and WEB3, demonstrating creativity and technical depth.",
      image: "/devclash.jpg",
      icon: <Code size={40} className="text-secondary" />,
      color: "from-amber-500/20 to-amber-900/20",
      border: "group-hover:border-amber-500/50",
      link: "https://devclashh-2026.vercel.app/"
    },
    {
      id: "devchef",
      title: "DevChef",
      description: "DevChef is Devkraft’s monthly coding contest, designed to challenge and enhance the coding skills of students across all levels. Each month, participants compete in algorithmic problem-solving, testing their knowledge in data structures, algorithms, and real-world coding challenges. Whether you're a beginner or a seasoned coder, DevChef provides an exciting platform to improve your skills and climb the leaderboard.",      image: "/devchef.png",      icon: <Cpu size={40} className="text-red-500" />,
      color: "from-red-500/20 to-red-900/20",
      border: "group-hover:border-red-500/50",
      link: "https://www.devchef.in/"
    }
  ];

  return (
    <section id="events" className="py-24 md:py-32 relative bg-black overflow-hidden">
      {/* Background Elements */}
      
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            Flagship <span className="text-gradient">Events</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Participate, compete, and win exciting prizes in our signature events designed for all skill levels.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {events.map((event, index) => (
            <motion.div
              key={event.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              whileHover={{ y: -15, scale: 1.02 }}
              className={`glass-card p-8 rounded-3xl relative overflow-hidden group border border-white/10 transition-all duration-500 ${event.border}`}
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${event.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
              
              <div className="relative z-10">
                <div className="mb-8 rounded-2xl overflow-hidden border border-white/5 group-hover:scale-110 transition-transform duration-500 flex items-center justify-center bg-black/30 h-48">
                  {(event.id === "devchef" || event.id === "techfeud") ? (
                    <img src={event.image} alt={event.title} className="w-4/5 h-4/5 object-contain" />
                  ) : (
                    <img src={event.image} alt={event.title} className="w-full h-full object-cover" />
                  )}
                </div>
                
                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-glow transition-all duration-300">
                  {event.title}
                </h3>
                
                <p className="text-gray-400 mb-8 leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
                  {event.description}
                </p>
                
                <a 
                  href={event.link} 
                  target={event.link !== "#" ? "_blank" : undefined}
                  rel={event.link !== "#" ? "noopener noreferrer" : undefined}
                  className="inline-flex items-center text-sm font-semibold text-white group/btn"
                >
                  Learn More 
                  <ArrowRight size={16} className="ml-2 group-hover/btn:translate-x-2 transition-transform duration-300 text-primary" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
