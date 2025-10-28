import React from "react";
import { motion } from "framer-motion";

export default function GallerySection() {
  const portfolioImages = [
    "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/user_68f227037a96d3aea61125e7/988e609b9_78e6078f-4648-4510-9ae2-6e4031d7391e.jpg",
    "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/user_68f227037a96d3aea61125e7/2fa59b8bb_c3c0664a-89d3-49fe-9655-7aff2d91e75c.jpg",
    "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/user_68f227037a96d3aea61125e7/d36450cd3_566bd798-f928-4653-9699-8e163ec016b0.jpg",
    "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/user_68f227037a96d3aea61125e7/02be32d80_e1495fd6-ae06-448b-83f2-d18709a526e2.jpg"
  ];

  return (
    <section className="relative py-32 px-4 bg-gradient-to-b from-black via-zinc-950 to-black">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-light mb-6">
            Nossos <span className="font-serif italic text-rose-300">Trabalhos</span>
          </h2>
          <p className="text-gray-400 text-xl max-w-3xl mx-auto">
            Transformações que realçam a beleza natural de cada cliente
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {portfolioImages.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative overflow-hidden rounded-2xl shadow-2xl"
            >
              <div className="relative aspect-[4/3] overflow-hidden bg-zinc-900">
                <img
                  src={image}
                  alt={`Trabalho ${index + 1}`}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <p className="text-gray-300 text-lg mb-8">
            Quer transformar suas sobrancelhas?
          </p>
          <button
            onClick={() => window.open('https://wa.me/5511944507732?text=Olá Rose, quero agendar uma sobrancelha', '_blank')}
            className="bg-gradient-to-r from-rose-400 to-rose-500 hover:from-rose-500 hover:to-rose-600 text-white px-10 py-4 text-lg rounded-full shadow-xl shadow-rose-500/30 transition-all duration-300 hover:scale-105"
          >
            Agende agora mesmo
          </button>
        </motion.div>
      </div>
    </section>
  );
}
