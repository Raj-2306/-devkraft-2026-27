import { motion } from 'motion/react';
import { Linkedin, Instagram, Twitter } from 'lucide-react';

export default function Sidebar() {
  const socials = [
    { icon: <Linkedin size={20} />, href: "https://www.linkedin.com/company/dev-kraft/", label: "LinkedIn" },
    { icon: <Instagram size={20} />, href: "https://www.instagram.com/devkraft.dpu", label: "Instagram" },
    { icon: <Twitter size={20} />, href: "https://x.com/devkraftdpu", label: "X" },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8, delay: 1 }}
      className="fixed left-6 top-1/2 -translate-y-1/2 z-40 hidden lg:flex flex-col items-center gap-6"
    >
      <div className="w-px h-24 bg-gradient-to-b from-transparent to-white/20"></div>
      
      {socials.map((social, index) => (
        <motion.a
          key={index}
          href={social.href}
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.2, x: 5 }}
          className="text-gray-400 hover:text-primary transition-colors relative group"
          aria-label={social.label}
        >
          {social.icon}
          <span className="absolute left-full ml-4 opacity-0 group-hover:opacity-100 transition-opacity text-xs font-medium tracking-wider uppercase whitespace-nowrap bg-white/10 px-2 py-1 rounded backdrop-blur-md">
            {social.label}
          </span>
        </motion.a>
      ))}

      <div className="w-px h-24 bg-gradient-to-t from-transparent to-white/20"></div>
    </motion.div>
  );
}
