
import React from 'react';
import { ICONS } from '../constants';

interface LandingPageProps {
  onStart: () => void;
}

const LandingPage: React.FC<LandingPageProps> = ({ onStart }) => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Navigation */}
      <nav className="flex items-center justify-between px-6 py-4 md:px-12 border-b border-gray-100 bg-white sticky top-0 z-50">
        <div className="flex items-center gap-2">
          <div className="bg-teal-500 p-2 rounded-lg text-white">
            {ICONS.Sparkles}
          </div>
          <span className="text-xl font-bold tracking-tight">Valeria IA</span>
        </div>
        <button 
          onClick={onStart}
          className="bg-teal-600 hover:bg-teal-700 text-white px-6 py-2 rounded-full font-medium transition-all shadow-sm"
        >
          Iniciar Sesión
        </button>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-20 pb-32 overflow-hidden">
        <div className="absolute top-0 right-0 -z-10 w-1/2 h-full bg-gradient-to-l from-teal-50/50 to-transparent"></div>
        <div className="container mx-auto px-6 md:px-12 grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 animate-in fade-in slide-in-from-left duration-700">
            <h1 className="text-5xl md:text-6xl font-bold leading-tight text-gray-900">
              Transforma tu Clínica con <span className="text-teal-600">Inteligencia Artificial</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-lg leading-relaxed">
              Erika, tu nueva asistente virtual, gestiona citas por WhatsApp las 24/7. Mejora la experiencia de tus pacientes y optimiza tu agenda sin esfuerzo.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button 
                onClick={onStart}
                className="bg-teal-600 hover:bg-teal-700 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all shadow-lg hover:shadow-teal-200"
              >
                Comenzar ahora
              </button>
              <button className="bg-white border border-gray-200 hover:border-teal-500 px-8 py-4 rounded-xl font-semibold text-lg transition-all">
                Ver Demo
              </button>
            </div>
          </div>
          <div className="relative animate-in fade-in slide-in-from-right duration-700">
            <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl border-8 border-white">
              <img 
                src="https://picsum.photos/id/160/800/600" 
                alt="Clinic Interior" 
                className="w-full h-auto object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-xl z-20 border border-gray-100 max-w-xs">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-10 h-10 rounded-full bg-teal-100 flex items-center justify-center text-teal-600">
                  {ICONS.Check}
                </div>
                <div>
                  <p className="font-bold text-gray-900">Cita Agendada</p>
                  <p className="text-xs text-gray-500">Hace 2 minutos vía WhatsApp</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-6 md:px-12 text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">¿Por qué elegir Valeria IA?</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">Diseñada específicamente para el sector estético, Valeria entiende tus servicios y cuida a tus clientes.</p>
        </div>
        <div className="container mx-auto px-6 md:px-12 grid md:grid-cols-3 gap-8">
          {[
            { 
              title: "Atención 24/7", 
              desc: "No pierdas más citas fuera del horario comercial. Erika responde al instante siempre.",
              icon: ICONS.Clock
            },
            { 
              title: "Recordatorios Automáticos", 
              desc: "Reduce las ausencias enviando recordatorios amigables vía WhatsApp un día antes.",
              icon: ICONS.Calendar
            },
            { 
              title: "Fácil Integración", 
              desc: "Configura tu clínica en minutos y deja que la IA se encargue del resto.",
              icon: ICONS.Sparkles
            }
          ].map((benefit, i) => (
            <div key={i} className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <div className="w-12 h-12 rounded-xl bg-teal-50 text-teal-600 flex items-center justify-center mb-6">
                {benefit.icon}
              </div>
              <h3 className="text-xl font-bold mb-3">{benefit.title}</h3>
              <p className="text-gray-600 leading-relaxed">{benefit.desc}</p>
            </div>
          ))}
        </div>
      </section>
      
      {/* Footer */}
      <footer className="py-12 border-t border-gray-100 mt-auto">
        <div className="container mx-auto px-6 text-center text-gray-500">
          <p>© 2024 Valeria IA. El asistente estético definitivo.</p>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
