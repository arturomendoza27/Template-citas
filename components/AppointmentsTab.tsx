
import React from 'react';
import { ICONS } from '../constants';
import { Appointment } from '../types';

const MOCK_APPOINTMENTS: Appointment[] = [
  { id: '1', phone_number: '+34 600 000 001', patient_name: 'Ana García', appointment_date: '2024-05-20 10:00', appointment_type: 'Limpieza Facial', status: 'confirmed', reminder_sent: true },
  { id: '2', phone_number: '+34 600 000 005', patient_name: 'Roberto Peña', appointment_date: '2024-05-20 12:30', appointment_type: 'Botox Preventivo', status: 'pending', reminder_sent: false },
  { id: '3', phone_number: '+34 600 000 009', patient_name: 'Julia Sanz', appointment_date: '2024-05-21 09:00', appointment_type: 'Rinomodelación', status: 'confirmed', reminder_sent: false },
];

const AppointmentsTab: React.FC = () => {
  return (
    <div className="p-6 md:p-8 h-full overflow-y-auto space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-2xl font-bold">Gestión de Agenda</h2>
          <p className="text-gray-500 text-sm">Próximas citas gestionadas por Erika</p>
        </div>
        <button className="bg-teal-600 hover:bg-teal-700 text-white px-4 py-2 rounded-xl flex items-center gap-2 font-medium shadow-sm transition-all">
          {ICONS.Add} Nueva Cita
        </button>
      </div>

      {/* Summary Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
        {[
          { label: 'Hoy', value: '8', icon: ICONS.Calendar, color: 'text-teal-600', bg: 'bg-teal-50' },
          { label: 'Pendientes', value: '3', icon: ICONS.Clock, color: 'text-yellow-600', bg: 'bg-yellow-50' },
          { label: 'Canceladas', value: '1', icon: ICONS.Cancel, color: 'text-red-600', bg: 'bg-red-50' }
        ].map((stat, i) => (
          <div key={i} className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex items-center gap-4">
            <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${stat.bg} ${stat.color}`}>
              {stat.icon}
            </div>
            <div>
              <p className="text-sm text-gray-500">{stat.label}</p>
              <p className="text-2xl font-bold">{stat.value}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Appointments List */}
      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="bg-gray-50 border-b border-gray-100">
                <th className="px-6 py-4 text-xs font-bold text-gray-400 uppercase tracking-wider">Paciente</th>
                <th className="px-6 py-4 text-xs font-bold text-gray-400 uppercase tracking-wider">Servicio</th>
                <th className="px-6 py-4 text-xs font-bold text-gray-400 uppercase tracking-wider">Fecha y Hora</th>
                <th className="px-6 py-4 text-xs font-bold text-gray-400 uppercase tracking-wider">Estado</th>
                <th className="px-6 py-4 text-xs font-bold text-gray-400 uppercase tracking-wider">Recordatorio</th>
                <th className="px-6 py-4 text-xs font-bold text-gray-400 uppercase tracking-wider text-right">Acciones</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {MOCK_APPOINTMENTS.map((app) => (
                <tr key={app.id} className="hover:bg-gray-50 transition-colors">
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 text-xs font-bold">
                        {app.patient_name[0]}
                      </div>
                      <div>
                        <p className="font-bold text-sm">{app.patient_name}</p>
                        <p className="text-xs text-gray-400">{app.phone_number}</p>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-600">{app.appointment_type}</td>
                  <td className="px-6 py-4 text-sm font-medium">{app.appointment_date}</td>
                  <td className="px-6 py-4">
                    <span className={`px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wide ${
                      app.status === 'confirmed' ? 'bg-green-100 text-green-700' : 'bg-yellow-100 text-yellow-700'
                    }`}>
                      {app.status === 'confirmed' ? 'Confirmada' : 'Pendiente'}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-1.5">
                      <div className={`w-2 h-2 rounded-full ${app.reminder_sent ? 'bg-green-500' : 'bg-gray-300'}`}></div>
                      <span className="text-xs text-gray-500">{app.reminder_sent ? 'Enviado' : 'Pendiente'}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-right">
                    <button className="text-gray-400 hover:text-teal-600 p-1">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"></path></svg>
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AppointmentsTab;
