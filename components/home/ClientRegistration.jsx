import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export default function ClientRegistration({ onSuccess }) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    birthday: '',
    email: ''
  });

  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isExisting, setIsExisting] = useState(false);

  useEffect(() => {
    // Tenta pré-preencher caso o visitante já tenha registrado neste dispositivo
    try {
      const lastPhone = localStorage.getItem('lastClientPhone');
      const clients = JSON.parse(localStorage.getItem('clients') || '[]');
      if (lastPhone && clients.length) {
        const found = clients.find(c => c.phone && c.phone.replace(/\D/g, '') === lastPhone.replace(/\D/g, ''));
        if (found) {
          setFormData({
            name: found.name || '',
            phone: found.phone || '',
            birthday: found.birthday || '',
            email: found.email || ''
          });
          setIsExisting(true);
        }
      }
    } catch (e) {
      // ignore
    }
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Validar dados
    if (!formData.name || !formData.phone || !formData.birthday) {
      setMessage('Por favor, preencha todos os campos obrigatórios');
      return;
    }

    // Buscar clientes existentes ou iniciar array vazio
    const existingClients = JSON.parse(localStorage.getItem('clients') || '[]');
    
    // Verifica se já existe cliente com mesmo telefone ou e-mail
    const normalize = (s) => (s || '').toString().replace(/\D/g, '');
    const existingIndex = existingClients.findIndex(c => (
      (c.phone && normalize(c.phone) === normalize(formData.phone)) ||
      (formData.email && c.email && c.email.toLowerCase() === (formData.email || '').toLowerCase())
    ));

    // Prepara objeto do cliente (atualiza id se existir)
    const clientObj = {
      id: existingIndex !== -1 ? existingClients[existingIndex].id : Date.now(),
      ...formData,
      registeredAt: existingIndex !== -1 ? existingClients[existingIndex].registeredAt : new Date().toISOString()
    };

    // Marca como "em andamento"
    setIsSubmitting(true);

    // Simula um pequeno delay para feedback visual
    setTimeout(() => {
      if (existingIndex !== -1) {
        // Atualiza cadastro existente
        existingClients[existingIndex] = clientObj;
        localStorage.setItem('clients', JSON.stringify(existingClients));

        // Registra atualização para admin (opcional)
        localStorage.setItem('updatedRegistrations', JSON.stringify([
          ...(JSON.parse(localStorage.getItem('updatedRegistrations') || '[]')),
          clientObj
        ]));
        setMessage('Cadastro atualizado com sucesso!');
      } else {
        // Novo cadastro
        const clients = [...existingClients, clientObj];
        localStorage.setItem('clients', JSON.stringify(clients));

        // Marcar como novo cadastro para o admin
        localStorage.setItem('newRegistrations', JSON.stringify([
          ...(JSON.parse(localStorage.getItem('newRegistrations') || '[]')),
          clientObj
        ]));
        setMessage('Cadastro realizado com sucesso!');
      }

      // Salva telefone do último visitante (para pré-preenchimento)
      try {
        if (clientObj.phone) localStorage.setItem('lastClientPhone', normalize(clientObj.phone));
      } catch (e) {}

      // Limpar formulário (apenas quando for novo cadastro)
      setFormData({ name: '', phone: '', birthday: '', email: '' });

      // Chama callback de sucesso após 1.2 segundos
      setTimeout(() => {
        if (onSuccess) onSuccess();
      }, 1200);
    }, 800);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-zinc-900/50 rounded-xl shadow-xl backdrop-blur-sm">
      <h3 className="text-2xl font-light mb-6 text-center">
        Cadastro de <span className="font-serif italic text-rose-300">Cliente</span>
      </h3>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-gray-300 mb-2" htmlFor="name">
            Nome completo *
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full px-4 py-2 rounded-lg bg-black/50 border border-rose-500/20 focus:border-rose-500 focus:ring-1 focus:ring-rose-500 text-white"
            required
          />
        </div>

        <div>
          <label className="block text-gray-300 mb-2" htmlFor="phone">
            WhatsApp *
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="(11) 98765-4321"
            className="w-full px-4 py-2 rounded-lg bg-black/50 border border-rose-500/20 focus:border-rose-500 focus:ring-1 focus:ring-rose-500 text-white"
            required
          />
        </div>

        <div>
          <label className="block text-gray-300 mb-2" htmlFor="birthday">
            Data de aniversário *
          </label>
          <input
            type="date"
            id="birthday"
            name="birthday"
            value={formData.birthday}
            onChange={handleChange}
            className="w-full px-4 py-2 rounded-lg bg-black/50 border border-rose-500/20 focus:border-rose-500 focus:ring-1 focus:ring-rose-500 text-white"
            required
          />
        </div>

        <div>
          <label className="block text-gray-300 mb-2" htmlFor="email">
            E-mail (opcional)
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-2 rounded-lg bg-black/50 border border-rose-500/20 focus:border-rose-500 focus:ring-1 focus:ring-rose-500 text-white"
          />
        </div>

        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-gradient-to-r from-rose-400 to-rose-500 hover:from-rose-500 hover:to-rose-600 text-white py-3 px-6 rounded-lg font-medium shadow-xl shadow-rose-500/20 disabled:opacity-60"
        >
          {isSubmitting ? (isExisting ? 'Atualizando...' : 'Enviando...') : (isExisting ? 'Atualizar cadastro' : 'Cadastrar')}
        </motion.button>

        {message && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className={`text-center p-3 rounded ${
              message.includes('sucesso') 
                ? 'bg-green-500/20 text-green-300'
                : 'bg-red-500/20 text-red-300'
            }`}
          >
            {message}
          </motion.div>
        )}
      </form>
    </div>
  );
}