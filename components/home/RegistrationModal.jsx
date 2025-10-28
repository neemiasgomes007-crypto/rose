import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import ClientRegistration from './ClientRegistration';

export default function RegistrationModal() {
  const [isOpen, setIsOpen] = useState(false); // abre só quando necessário
  const [showQuickButton, setShowQuickButton] = useState(false);

  useEffect(() => {
    // Não mostra automaticamente se já houver um cadastro no dispositivo
    const lastPhone = localStorage.getItem('lastClientPhone');
    const hasSeenModal = localStorage.getItem('hasSeenRegistrationModal');

    if (lastPhone) {
      // Usuário já cadastrou anteriormente neste dispositivo: não abrir modal automaticamente
      setShowQuickButton(true);
      setIsOpen(false);
    } else if (!hasSeenModal) {
      // Mostra modal pela primeira vez
      const timer = setTimeout(() => {
        setIsOpen(true);
        localStorage.setItem('hasSeenRegistrationModal', 'true');
      }, 1500);
      return () => clearTimeout(timer);
    }
  }, []);

  if (!isOpen) return null;
  return (
    <>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[9999] flex items-center justify-center p-4 bg-black/90"
            onClick={(e) => {
              if (e.target === e.currentTarget) setIsOpen(false);
            }}
          >
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              className="relative w-full max-w-xl bg-zinc-900/95 rounded-2xl shadow-2xl border border-rose-500/20"
            >
              {/* Botão fechar */}
              <button
                onClick={() => setIsOpen(false)}
                className="absolute right-4 top-4 p-2 text-gray-400 hover:text-white transition-colors"
              >
                <X className="w-6 h-6" />
              </button>

              <div className="p-6">
                <div className="text-center mb-6">
                  <h2 className="text-3xl font-light">
                    Bem-vinda à <span className="font-serif italic text-rose-300">Rose Sombrancelhas</span>
                  </h2>
                  <p className="text-gray-400 mt-2">
                    Cadastre-se para receber novidades e uma surpresa especial no seu aniversário!
                  </p>
                </div>

                <ClientRegistration onSuccess={() => setIsOpen(false)} />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {showQuickButton && (
        <div className="fixed bottom-6 right-6 z-50">
          <button
            onClick={() => setIsOpen(true)}
            className="flex items-center gap-3 bg-rose-500 hover:bg-rose-600 text-white px-4 py-3 rounded-full shadow-lg"
          >
            Atualizar cadastro
          </button>
        </div>
      )}
    </>
  );
}