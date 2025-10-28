import React from "react";
import { motion } from "framer-motion";
import { Award, Heart, Sparkles } from "lucide-react";

export default function AboutSection() {
  const features = [
    {
      icon: Award,
      title: "Experiência e Técnica",
      description: "Design garantido pelo melhor profissional",
    },
    {
      icon: Heart,
      title: "Conforto e Delicadeza",
      description: "Cada toque com cuidado e experiência relaxante",
    },
    {
      icon: Sparkles,
      title: "Produtos Premium",
      description: "Alta qualidade para cuidado e resultados duradouros",
    },
  ];

  return (
    <section className="relative py-32 px-4 bg-gradient-to-b from-black via-zinc-950 to-black">
      <div className="max-w-6xl mx-auto">
        {/* Professional photo */}
        <div className="grid md:grid-cols-2 gap-16 items-center mb-20">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative overflow-hidden rounded-2xl shadow-2xl">
              <img
                src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/user_68f227037a96d3aea61125e7/d2dcde7d8_2a6a746c-8533-4c81-923d-082b4c2eb91e.jpg"
                alt="Profissional Rose Sombrancelhas"
                className="w-full h-auto"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h2 className="text-4xl md:text-5xl font-light mb-6">
              Sobre a <span className="font-serif italic text-rose-300">Rose Sombrancelhas</span>
            </h2>
            <p className="text-gray-300 text-lg leading-relaxed">
              Na Rose Sombrancelhas, acreditamos que cada sobrancelha conta uma história única. 
              Nossa missão é realçar sua beleza natural através de técnicas avançadas e um olhar 
              cuidadoso para cada detalhe.
            </p>
            <p className="text-gray-300 text-lg leading-relaxed">
              Com anos de experiência e dedicação, oferecemos um serviço personalizado que 
              preserva sua individualidade enquanto realça seu melhor.
            </p>
          </motion.div>
        </div>

        {/* Features grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="relative group"
            >
              <div className="bg-gradient-to-br from-zinc-900 to-black border border-rose-500/20 rounded-2xl p-8 hover:border-rose-500/40 transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-br from-rose-400/20 to-rose-600/20 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <feature.icon className="w-8 h-8 text-rose-300" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-white">{feature.title}</h3>
                <p className="text-gray-400 leading-relaxed">{feature.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
