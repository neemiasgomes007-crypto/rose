import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Gift, Calendar, Search, Phone } from 'lucide-react';

export default function AdminPanel() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState('');
  const [clients, setClients] = useState([]);
  const [filter, setFilter] = useState('today'); // 'today', 'week', 'month', 'all'
  const [search, setSearch] = useState('');

  useEffect(() => {
    if (isAuthenticated) {
      loadClients();
    }
  }, [isAuthenticated]);

  const [newRegistrations, setNewRegistrations] = useState([]);
  const [updatedRegistrations, setUpdatedRegistrations] = useState([]);

  const loadClients = () => {
    const storedClients = JSON.parse(localStorage.getItem('clients') || '[]');
    const newRegs = JSON.parse(localStorage.getItem('newRegistrations') || '[]');
    const updatedRegs = JSON.parse(localStorage.getItem('updatedRegistrations') || '[]');
    setClients(storedClients);
    setNewRegistrations(newRegs);
    setUpdatedRegistrations(updatedRegs);
  };

  const handleLogin = (e) => {
    e.preventDefault();
    // Senha simples para demonstração - em produção usar backend seguro
    if (password === 'rose1234') {
      setIsAuthenticated(true);
    } else {
      alert('Senha incorreta');
    }
  };

  const formatPhone = (phone) => {
    // Formatar número de telefone se necessário
    return phone;
  };

  const isClientBirthday = (birthday) => {
    const today = new Date();
    const clientBirthday = new Date(birthday);
    
    if (filter === 'today') {
      // Compara só dia e mês, ignora o ano
      const todayDayMonth = `${today.getDate()}-${today.getMonth()}`;
      const birthdayDayMonth = `${clientBirthday.getDate()}-${clientBirthday.getMonth()}`;
      return todayDayMonth === birthdayDayMonth;
    }
    
    if (filter === 'week') {
      const nextWeek = new Date(today.getTime() + 7 * 24 * 60 * 60 * 1000);
      const clientDate = new Date(today.getFullYear(), clientBirthday.getMonth(), clientBirthday.getDate());
      return clientDate >= today && clientDate <= nextWeek;
    }
    
    if (filter === 'month') {
      return today.getMonth() === clientBirthday.getMonth();
    }
    
    return true; // 'all'
  };

  const filteredClients = clients
    .filter(client => isClientBirthday(client.birthday))
    .filter(client => 
      client.name.toLowerCase().includes(search.toLowerCase()) ||
      client.phone.includes(search)
    );

  if (!isAuthenticated) {
    return (
      <div className="max-w-md mx-auto p-6 bg-zinc-900/50 rounded-xl shadow-xl backdrop-blur-sm">
        <h3 className="text-2xl font-light mb-6 text-center">
          Painel <span className="font-serif italic text-rose-300">Admin</span>
        </h3>
        
        <form onSubmit={handleLogin} className="space-y-4">
          <div>
            <label className="block text-gray-300 mb-2">Senha</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-2 rounded-lg bg-black/50 border border-rose-500/20 focus:border-rose-500 focus:ring-1 focus:ring-rose-500 text-white"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-rose-400 to-rose-500 hover:from-rose-500 hover:to-rose-600 text-white py-3 px-6 rounded-lg font-medium"
          >
            Entrar
          </button>
        </form>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto p-6">
      <div className="bg-zinc-900/50 rounded-xl shadow-xl backdrop-blur-sm p-6">
        <h3 className="text-2xl font-light mb-6 flex items-center gap-2">
          <Gift className="text-rose-300" />
          <span>Aniversariantes</span>
        </h3>

        {newRegistrations.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-green-500/20 text-green-300 p-4 rounded-lg mb-6"
          >
            <h4 className="font-semibold mb-2">
              {newRegistrations.length} {newRegistrations.length === 1 ? 'novo cadastro' : 'novos cadastros'}!
            </h4>
            <div className="space-y-2">
              {newRegistrations.map((client, index) => (
                <div key={index} className="text-sm flex items-center gap-2 text-green-200">
                  <span className="font-medium">{client.name}</span>
                  <span className="text-green-300/60">•</span>
                  <span>{client.phone}</span>
                  <span className="text-green-300/60">•</span>
                  <span>
                    Aniversário: {new Date(client.birthday).toLocaleDateString('pt-BR', {
                      day: '2-digit',
                      month: 'long'
                    })}
                  </span>
                </div>
              ))}
            </div>
            <button
              onClick={() => {
                localStorage.removeItem('newRegistrations');
                setNewRegistrations([]);
              }}
              className="mt-3 text-sm underline hover:text-green-200"
            >
              Marcar como visto
            </button>
          </motion.div>
        )}

        {updatedRegistrations.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-yellow-500/10 text-yellow-200 p-4 rounded-lg mb-6"
          >
            <h4 className="font-semibold mb-2">
              {updatedRegistrations.length} {updatedRegistrations.length === 1 ? 'cadastro atualizado' : 'cadastros atualizados'}
            </h4>
            <div className="space-y-2 text-sm">
              {updatedRegistrations.map((client, index) => (
                <div key={index} className="flex items-center gap-2 text-yellow-200">
                  <span className="font-medium">{client.name}</span>
                  <span className="text-yellow-200/60">•</span>
                  <span>{client.phone}</span>
                  <span className="text-yellow-200/60">•</span>
                  <span>
                    Aniversário: {new Date(client.birthday).toLocaleDateString('pt-BR', { day: '2-digit', month: 'long' })}
                  </span>
                </div>
              ))}
            </div>
            <button
              onClick={() => {
                localStorage.removeItem('updatedRegistrations');
                setUpdatedRegistrations([]);
              }}
              className="mt-3 text-sm underline hover:text-yellow-200"
            >
              Marcar como visto
            </button>
          </motion.div>
        )}

        <div className="flex flex-wrap gap-4 mb-6">
          <div className="flex-1 min-w-[200px]">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Buscar cliente..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full pl-10 pr-4 py-2 rounded-lg bg-black/50 border border-rose-500/20 focus:border-rose-500 focus:ring-1 focus:ring-rose-500 text-white"
              />
            </div>
          </div>
          
          <select
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
            className="px-4 py-2 rounded-lg bg-black/50 border border-rose-500/20 focus:border-rose-500 focus:ring-1 focus:ring-rose-500 text-white"
          >
            <option value="today">Hoje</option>
            <option value="week">Próxima semana</option>
            <option value="month">Este mês</option>
            <option value="all">Todos</option>
          </select>
        </div>

        {/* Próximos aniversários */}
        <div className="mb-8 bg-rose-500/10 rounded-lg p-4 border border-rose-500/20">
          <h4 className="text-lg font-medium text-rose-300 mb-4 flex items-center gap-2">
            <Gift className="w-5 h-5" />
            Próximos Aniversários
          </h4>
          <div className="grid gap-3">
            {clients
              .filter(client => {
                const today = new Date();
                const birthday = new Date(client.birthday);
                const nextBirthday = new Date(today.getFullYear(), birthday.getMonth(), birthday.getDate());
                
                // Se o aniversário já passou este ano, considera para o próximo ano
                if (nextBirthday < today) {
                  nextBirthday.setFullYear(today.getFullYear() + 1);
                }
                
                // Mostra os próximos 30 dias
                const thirtyDaysFromNow = new Date(today.getTime() + (30 * 24 * 60 * 60 * 1000));
                return nextBirthday <= thirtyDaysFromNow && nextBirthday >= today;
              })
              .sort((a, b) => {
                const today = new Date();
                const getBirthday = (date) => {
                  const d = new Date(date);
                  const next = new Date(today.getFullYear(), d.getMonth(), d.getDate());
                  if (next < today) next.setFullYear(today.getFullYear() + 1);
                  return next;
                };
                return getBirthday(a.birthday) - getBirthday(b.birthday);
              })
              .slice(0, 5)
              .map(client => (
                <div key={client.id} className="flex items-center justify-between bg-black/20 p-3 rounded-lg">
                  <div>
                    <span className="font-medium text-rose-200">{client.name}</span>
                    <div className="text-sm text-gray-400 mt-1">
                      Aniversário: {new Date(client.birthday).toLocaleDateString('pt-BR', {
                        day: '2-digit',
                        month: 'long'
                      })}
                    </div>
                  </div>
                  <a
                    href={`https://wa.me/${client.phone.replace(/\D/g, '')}?text=Feliz aniversário! 🎉 Queremos desejar um dia muito especial.`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-green-600 hover:bg-green-700 text-white px-3 py-1.5 rounded-lg text-sm flex items-center gap-2 transition-colors"
                  >
                    Enviar mensagem
                  </a>
                </div>
              ))}
          </div>
          {clients.filter(c => {
            const bday = new Date(c.birthday);
            const today = new Date();
            return bday.getDate() === today.getDate() && bday.getMonth() === today.getMonth();
          }).length === 0 && (
            <p className="text-gray-400 text-sm text-center py-2">
              Nenhum aniversariante nos próximos 30 dias
            </p>
          )}
        </div>

        {/* Lista de clientes filtrada */}
        <div className="space-y-4">
          {filteredClients.map(client => (
            <motion.div
              key={client.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-black/30 p-4 rounded-lg border border-rose-500/10"
            >
              <div className="flex items-center justify-between flex-wrap gap-4">
                <div>
                  <h4 className="text-lg font-medium text-rose-300">{client.name}</h4>
                  <div className="flex items-center gap-4 mt-2 text-gray-400">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      {new Date(client.birthday).toLocaleDateString('pt-BR', {
                        day: '2-digit',
                        month: 'long'
                      })}
                    </span>
                    <span className="flex items-center gap-1">
                      <Phone className="w-4 h-4" />
                      {formatPhone(client.phone)}
                    </span>
                  </div>
                </div>
                
                <a
                  href={`https://wa.me/${client.phone.replace(/\D/g, '')}?text=Feliz aniversário! 🎉 Queremos desejar um dia muito especial.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg flex items-center gap-2 transition-colors"
                >
                  Enviar mensagem
                </a>
              </div>
            </motion.div>
          ))}

          {filteredClients.length === 0 && (
            <div className="text-center text-gray-400 py-8">
              Nenhum aniversariante encontrado para o período selecionado.
            </div>
          )}
        </div>
      </div>
    </div>
  );
}