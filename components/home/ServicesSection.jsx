import React from "react";
import { motion } from "framer-motion";

export default function ServicesSection() {
  const benefits = [
    {
      image: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/user_68f227037a96d3aea61125e7/5b44289e4_e34b8f2f-63c4-4dfe-b6ba-0769cfaf8687.jpg",
      text: "Vantagens de fazer sua sobrancelha na Rose Sombrancelhas",
    },
    {
      image: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/user_68f227037a96d3aea61125e7/de41d05a8_6fa61662-a49e-4278-8a74-ba594aaeab82.jpg",
      text: "Preservamos a sua beleza e individualidade",
    },
    {
      image: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/user_68f227037a96d3aea61125e7/d9c96ec59_e4052240-da5d-4c40-b7b0-cbdd13a66320.jpg",
      text: "Conforto e delicadeza em cada toque para cuidado e experiência relaxante",
    },
    {
      image: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/user_68f227037a96d3aea61125e7/b5bf313a3_992c4943-80ff-4073-9367-73f58d20c470.jpg",
      text: "Experiência e técnica garantem o melhor design",
    },
    {
      image: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/user_68f227037a96d3aea61125e7/121da5490_6cd40e3d-44cd-4098-b22e-e79649fc3186.jpg",
      text: "Produtos de alta qualidade para cuidado e resultados duradouros",
    },
  ];

  return (
    <section className="relative py-32 px-4 bg-black">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-light mb-6">
            Por que escolher a <span className="font-serif italic text-rose-300">Rose Sombrancelhas</span>?
          </h2>
          <p className="text-gray-400 text-xl max-w-3xl mx-auto">
            Cada detalhe pensado para oferecer a melhor experiência em design de sobrancelhas
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative overflow-hidden rounded-2xl aspect-square"
            >
              <img
                src={benefit.image}
                alt={benefit.text}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-300" />
              <div className="absolute inset-0 flex items-end p-6">
                <p className="text-white text-lg font-light leading-relaxed">
                  {benefit.text}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
