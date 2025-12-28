
import React, { useState } from 'react';
import { ICONS } from '../constants';

interface AuthPageProps {
  onLogin: () => void;
  onBack: () => void;
}

const AuthPage: React.FC<AuthPageProps> = ({ onLogin, onBack }) => {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div className="min-h-screen flex items-center justify-center bg-teal-soft/30 px-6">
      <div className="max-w-md w-full animate-in fade-in zoom-in duration-300">
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center p-3 bg-teal-600 rounded-2xl text-white mb-4 shadow-lg">
            {ICONS.Sparkles}
          </div>
          <h2 className="text-3xl font-bold">Valeria IA</h2>
          <p className="text-gray-500 mt-2">Accede a tu panel de control</p>
        </div>

        <div className="bg-white p-8 rounded-3xl shadow-xl border border-gray-100">
          <form onSubmit={(e) => { e.preventDefault(); onLogin(); }} className="space-y-5">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Email Corporativo</label>
              <input 
                type="email" 
                required
                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-teal-500 focus:ring-2 focus:ring-teal-100 outline-none transition-all"
                placeholder="hola@tuclinica.com"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Contraseña</label>
              <input 
                type="password" 
                required
                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-teal-500 focus:ring-2 focus:ring-teal-100 outline-none transition-all"
                placeholder="••••••••"
              />
            </div>
            
            <button 
              type="submit"
              className="w-full bg-teal-600 hover:bg-teal-700 text-white font-bold py-3 px-4 rounded-xl shadow-lg transition-all"
            >
              {isLogin ? 'Iniciar Sesión' : 'Registrar Clínica'}
            </button>
          </form>

          <div className="mt-8 pt-6 border-t border-gray-100 text-center">
            <button 
              onClick={() => setIsLogin(!isLogin)}
              className="text-teal-600 font-medium hover:underline"
            >
              {isLogin ? '¿No tienes cuenta? Regístrate' : '¿Ya tienes cuenta? Inicia Sesión'}
            </button>
          </div>
        </div>
        
        <button 
          onClick={onBack}
          className="w-full mt-6 text-gray-500 hover:text-gray-700 font-medium transition-colors"
        >
          Volver a Inicio
        </button>
      </div>
    </div>
  );
};

export default AuthPage;
