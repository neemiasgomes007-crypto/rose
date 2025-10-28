import React from "react";
import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import Particles from "@/components/home/Particles";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 py-20 overflow-hidden">
      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-black/95 to-black" />
      {/* Floating particles background */}
      <Particles count={48} />
      
      {/* Animated rose background */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 0.1, scale: 1 }}
        transition={{ duration: 2 }}
        className="absolute inset-0 flex items-center justify-center"
      >
        <div className="w-96 h-96 bg-gradient-radial from-rose-500/20 to-transparent rounded-full blur-3xl" />
      </motion.div>

      <div className="relative z-10 max-w-6xl mx-auto text-center">
        {/* Logo/Icon */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="mb-8"
        >
          <div className="inline-flex items-center justify-center w-32 h-32 mb-6">
            <svg viewBox="0 0 200 200" className="w-full h-full">
              <motion.path
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 2, ease: "easeInOut" }}
                d="M100 40 Q130 50 130 80 Q130 100 110 110 Q100 115 90 110 Q70 100 70 80 Q70 50 100 40 M90 75 Q95 70 100 70 Q105 70 110 75 M85 85 L95 90 M105 90 L115 85"
                fill="none"
                stroke="#D4A5A5"
                strokeWidth="2"
              />
            </svg>
          </div>
        </motion.div>

        {/* Main heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="space-y-4 mb-12"
        >
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-light tracking-wider">
            <span className="font-serif italic text-rose-300">Rose</span> SOMBRANCELHAS
          </h1>
        </motion.div>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed"
        >
          Design de sobrancelhas que valoriza sua beleza natural
          <br />
          <span className="text-rose-300">Técnica, experiência e dedicação</span>
        </motion.p>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.9 }}
        >
          <Button
            onClick={() => window.open('https://wa.me/5511944507732?text=Olá Rose, quero agendar uma sobrancelha', '_blank')}
            className="bg-gradient-to-r from-rose-400 to-rose-500 hover:from-rose-500 hover:to-rose-600 text-white px-12 py-6 text-lg rounded-full shadow-2xl shadow-rose-500/50 transition-all duration-300 hover:scale-105"
          >
            <Sparkles className="w-5 h-5 mr-2" />
            Agende seu horário
          </Button>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.2, repeat: Infinity, repeatType: "reverse" }}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        >
          <div className="w-6 h-10 border-2 border-rose-300/50 rounded-full flex items-start justify-center p-2">
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-1.5 h-1.5 bg-rose-300 rounded-full"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
