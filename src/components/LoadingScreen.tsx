import { motion } from 'motion/react';
import { useEffect, useState } from 'react';

export default function LoadingScreen({ onComplete }: { onComplete: () => void }) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(onComplete, 500); // Wait a bit before hiding
          return 100;
        }
        return prev + Math.floor(Math.random() * 10) + 5;
      });
    }, 100);

    return () => clearInterval(timer);
  }, [onComplete]);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, y: -50 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className="fixed inset-0 z-[100] bg-black flex flex-col items-center justify-center"
    >
      <div className="relative flex flex-col items-center">
        <motion.div
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.5, 1, 0.5],
          }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="mb-8"
        >
          <img src="/devkraft1.png" alt="Logo" className="h-24 md:h-32 w-auto" />
        </motion.div>

        <div className="w-64 h-1 bg-white/10 rounded-full overflow-hidden relative">
          <motion.div
            className="absolute top-0 left-0 h-full bg-gradient-to-r from-primary to-secondary"
            initial={{ width: "0%" }}
            animate={{ width: `${progress}%` }}
            transition={{ ease: "linear" }}
          />
        </div>

        <div className="mt-4 text-sm font-mono text-gray-500">
          {Math.min(progress, 100)}%
        </div>
      </div>
    </motion.div>
  );
}
