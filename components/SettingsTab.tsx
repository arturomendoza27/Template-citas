
import React, { useState } from 'react';
import { SERVICES_DEFAULT } from '../constants';

const SettingsTab: React.FC = () => {
  const [services, setServices] = useState<string[]>(SERVICES_DEFAULT);
  const [newService, setNewService] = useState('');

  const addService = () => {
    if (newService && !services.includes(newService)) {
      setServices([...services, newService]);
      setNewService('');
    }
  };

  const removeService = (s: string) => {
    setServices(services.filter(item => item !== s));
  };

  return (
    <div className="p-6 md:p-8 h-full overflow-y-auto animate-in fade-in duration-500">
      <div className="max-w-4xl mx-auto space-y-8">
        <div>
          <h2 className="text-2xl font-bold">Configuración de la Clínica</h2>
          <p className="text-gray-500 text-sm">Personaliza el comportamiento de Erika y los datos de tu negocio</p>
        </div>

        <div className="bg-white rounded-3xl shadow-sm border border-gray-100 p-8 space-y-8">
          {/* Basic Info */}
          <section className="space-y-4">
            <h3 className="text-lg font-bold border-b border-gray-50 pb-2">Información Básica</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Nombre de la Clínica</label>
                <input type="text" defaultValue="Valeria Estética Avanzada" className="w-full px-4 py-2.5 rounded-xl border border-gray-200 focus:border-teal-500 focus:ring-2 focus:ring-teal-100 outline-none" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Teléfono WhatsApp</label>
                <input type="text" defaultValue="+34 600 000 000" className="w-full px-4 py-2.5 rounded-xl border border-gray-200 focus:border-teal-500 focus:ring-2 focus:ring-teal-100 outline-none" />
              </div>
              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-700 mb-1">Dirección Física</label>
                <input type="text" defaultValue="Calle de la Belleza 42, 28001 Madrid, España" className="w-full px-4 py-2.5 rounded-xl border border-gray-200 focus:border-teal-500 focus:ring-2 focus:ring-teal-100 outline-none" />
              </div>
            </div>
          </section>

          {/* Services */}
          <section className="space-y-4">
            <h3 className="text-lg font-bold border-b border-gray-50 pb-2">Servicios Ofrecidos</h3>
            <p className="text-sm text-gray-500">Erika usará esta lista para informar a los pacientes.</p>
            <div className="flex flex-wrap gap-2">
              {services.map((s, i) => (
                <div key={i} className="bg-teal-50 text-teal-700 px-3 py-1.5 rounded-full text-sm font-medium flex items-center gap-2">
                  {s}
                  <button onClick={() => removeService(s)} className="text-teal-400 hover:text-teal-600">×</button>
                </div>
              ))}
            </div>
            <div className="flex gap-2 max-w-md">
              <input 
                type="text" 
                value={newService}
                onChange={(e) => setNewService(e.target.value)}
                placeholder="Nuevo servicio..." 
                className="flex-1 px-4 py-2 rounded-xl border border-gray-200 focus:border-teal-500 outline-none text-sm" 
              />
              <button onClick={addService} className="bg-teal-600 text-white px-4 py-2 rounded-xl text-sm font-bold">Añadir</button>
            </div>
          </section>

          {/* Integration */}
          <section className="space-y-4">
            <h3 className="text-lg font-bold border-b border-gray-50 pb-2">Integración (Webhooks)</h3>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">URL de Webhook Twilio</label>
              <div className="flex gap-2">
                <input 
                  type="text" 
                  readOnly 
                  value="https://abcdef.supabase.co/functions/v1/twilio-webhook" 
                  className="flex-1 px-4 py-2.5 rounded-xl bg-gray-50 border border-gray-200 text-gray-400 text-sm font-mono" 
                />
                <button className="bg-gray-100 hover:bg-gray-200 px-4 py-2 rounded-xl text-sm font-bold transition-colors">Copiar</button>
              </div>
            </div>
          </section>

          <div className="pt-4 flex justify-end gap-3">
            <button className="px-6 py-2.5 rounded-xl font-bold text-gray-500 hover:bg-gray-100 transition-colors">Cancelar</button>
            <button className="px-8 py-2.5 rounded-xl font-bold bg-teal-600 text-white shadow-lg hover:shadow-teal-100 transition-all">Guardar Cambios</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SettingsTab;
