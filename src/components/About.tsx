import { motion } from 'motion/react';
import { Code2, Terminal, Cpu } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-24 md:py-32 relative overflow-hidden bg-black">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Fostering a <span className="text-gradient">Robust Coding Culture</span>
            </h2>
            <p className="text-lg text-gray-200 leading-relaxed mb-8">
              At Devkraft, we champion collaboration, experimentation, and deep learning. Our community is built for students who want to move from curiosity to craft through hands-on projects, peer mentorship, and high-impact hackathons.
            </p>
            <p className="text-lg text-gray-200 leading-relaxed">
              We replace fear with confidence by offering real-world guidance, coding sprints, and problem-solving labs. Together, we make software engineering a shared adventure, not a solo grind.
            </p>
          </motion.div>

          {/* Visual Element */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="aspect-square rounded-3xl overflow-hidden glass-card p-4 md:p-8 flex flex-col justify-center items-center relative z-10">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 opacity-50"></div>
              
              <div className="grid grid-cols-2 gap-2 md:gap-8 w-full h-full relative z-20">
                <motion.div 
                  whileHover={{ y: -10 }}
                  className="bg-black/50 rounded-full p-4 md:p-12 border border-white/5 flex flex-col items-center justify-center gap-2 md:gap-4 aspect-square"
                >
                  <Code2 size={24} className="text-primary md:size-12" />
                  <span className="font-medium text-gray-300 text-xs md:text-base text-center">Development</span>
                </motion.div>
                <motion.div 
                  whileHover={{ y: -10 }}
                  className="bg-black/50 rounded-full p-4 md:p-12 border border-white/5 flex flex-col items-center justify-center gap-2 md:gap-4 aspect-square"
                >
                  <Terminal size={24} className="text-secondary md:size-12" />
                  <span className="font-medium text-gray-300 text-xs md:text-base text-center">Programming</span>
                </motion.div>
                <motion.div 
                  whileHover={{ y: -10 }}
                  className="bg-black/50 rounded-full p-4 md:p-12 border border-white/5 flex flex-col items-center justify-center gap-2 md:gap-4 aspect-square"
                >
                  <Cpu size={24} className="text-amber-500 md:size-12" />
                  <span className="font-medium text-gray-300 text-xs md:text-base text-center">Innovation</span>
                </motion.div>
                <motion.div 
                  whileHover={{ y: -10 }}
                  className="bg-black/50 rounded-full p-4 md:p-12 border border-white/5 flex flex-col items-center justify-center gap-2 md:gap-4 aspect-square"
                >
                  <div className="text-xl md:text-4xl font-bold text-white">DK</div>
                  <span className="font-medium text-gray-300 text-xs md:text-base text-center">Community</span>
                </motion.div>
              </div>
            </div>
            
            {/* Decorative blurs */}
            <div className="absolute -top-10 -right-10 w-64 h-64 bg-primary/30 rounded-full blur-[80px] -z-10"></div>
            <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-secondary/30 rounded-full blur-[80px] -z-10"></div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
