import { motion } from 'motion/react';

export default function Vision() {
  return (
    <section className="py-24 relative bg-[#050505]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-4xl mx-auto relative"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Our <span className="text-gradient">Vision</span>
          </h2>
          <p className="text-xl md:text-2xl text-gray-100 font-medium leading-relaxed mb-10">
            Devkraft is a creative launchpad where bold ideas turn into clean, collaborative code. We imagine a future where every campus coder can iterate fast, learn together, and ship impact. We empower innovators to transform curiosity into real-world solutions through shared learning and hands-on creation.
          </p>
        </motion.div>

      </div>
    </section>
  );
}
