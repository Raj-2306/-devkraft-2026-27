import { motion } from 'motion/react';
import { ChevronDown } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#050505]">
      {/* Subtle Noise Background */}
      <div className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.65%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E")' }}></div>

      {/* Immersive Typography (Shed.design inspired) */}
      <div className="relative z-10 w-full px-4 flex flex-col items-center justify-center mt-12">
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="w-full text-center flex flex-col items-center"
        >
            <h1 className="hero-title">
            INNOVATE TOGETHER
          </h1>
          <p className="mt-6 text-xl md:text-3xl text-orange-400/90 font-bold tracking-wider uppercase">
            DevKraft community-driven experiences for ambitious builders
          </p>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="mt-12 text-lg md:text-xl text-gray-400 max-w-2xl text-center font-light tracking-wide"
        >
          Where Innovation Meets Execution.
        </motion.p>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-12 right-6 md:right-12 flex flex-col items-center gap-4 z-20"
      >
        <span className="text-xs text-gray-500 uppercase tracking-widest font-medium" style={{ writingMode: 'vertical-rl' }}>There's more</span>
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown className="text-primary" size={24} />
        </motion.div>
      </motion.div>
    </section>
  );
}
