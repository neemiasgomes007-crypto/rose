import React from "react";
import { motion } from "framer-motion";
import { Phone, Instagram, Clock } from "lucide-react";

export default function ContactSection() {
  return (
    <section className="relative py-32 px-4 bg-black">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-light mb-6">
            Entre em <span className="font-serif italic text-rose-300">Contato</span>
          </h2>
          <p className="text-gray-400 text-xl">
            Estamos prontos para atendê-la
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="flex items-start gap-4 group">
              <div className="w-12 h-12 bg-gradient-to-br from-rose-400/20 to-rose-600/20 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                <Phone className="w-6 h-6 text-rose-300" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2 text-white">Telefone / WhatsApp</h3>
                <a
                  href="https://wa.me/5511944507732?text=Olá Rose, quero agendar uma sobrancelha"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-rose-300 transition-colors text-lg"
                >
                  (11) 9 4450-7732
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4 group">
              <div className="w-12 h-12 bg-gradient-to-br from-rose-400/20 to-rose-600/20 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                <Clock className="w-6 h-6 text-rose-300" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2 text-white">Horário de Atendimento</h3>
                <p className="text-gray-400 text-lg">Agendamento prévio</p>
                <p className="text-gray-500 text-sm mt-1">Entre em contato para verificar disponibilidade</p>
              </div>
            </div>

            <div className="flex items-start gap-4 group">
              <div className="w-12 h-12 bg-gradient-to-br from-rose-400/20 to-rose-600/20 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                <Instagram className="w-6 h-6 text-rose-300" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2 text-white">Redes Sociais</h3>
                <p className="text-gray-400 text-lg">Siga-nos no Instagram</p>
                <p className="text-gray-500 text-sm mt-1">@rosebeautystudio</p>
              </div>
            </div>
          </motion.div>

          {/* CTA Card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="bg-gradient-to-br from-rose-500/10 to-rose-600/5 border border-rose-500/20 rounded-3xl p-10 h-full flex flex-col justify-center">
              <div className="text-center space-y-6">
                <div className="w-20 h-20 bg-gradient-to-br from-rose-400 to-rose-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Phone className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-3xl font-light text-white mb-4">
                  Agende seu horário
                </h3>
                <p className="text-gray-300 text-lg leading-relaxed">
                  Entre em contato pelo WhatsApp e garanta sua vaga com os melhores profissionais
                </p>
                <button
                  onClick={() => window.open('https://wa.me/5511944507732?text=Olá Rose, quero agendar uma sobrancelha', '_blank')}
                  className="w-full bg-gradient-to-r from-rose-400 to-rose-500 hover:from-rose-500 hover:to-rose-600 text-white py-4 px-8 text-lg rounded-full shadow-xl shadow-rose-500/30 transition-all duration-300 hover:scale-105 mt-6"
                >
                  Falar no WhatsApp
                </button>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center mt-20 pt-12 border-t border-zinc-800"
        >
          <p className="text-gray-400 text-lg">
            Suporte?{" "}
            <a
              href="mailto:noemiadindol@gmail.com"
              className="text-rose-300 hover:text-rose-400 transition-colors underline underline-offset-4"
            >
              Fale Conosco aqui
            </a>
            {" "}ou pelo WhatsApp{" "}
            <a
              href="https://wa.me/5511944507732?text=Olá Rose, quero agendar uma sobrancelha"
              target="_blank"
              rel="noopener noreferrer"
              className="text-rose-300 hover:text-rose-400 transition-colors underline underline-offset-4"
            >
              (11) 9 4450-7732
            </a>
          </p>
        </motion.div>
      </div>
    </section>
  );
}
