
import React, { useState } from 'react';
import { ICONS } from '../constants';
import ChatTab from './ChatTab';
import AppointmentsTab from './AppointmentsTab';
import SettingsTab from './SettingsTab';

interface DashboardProps {
  onLogout: () => void;
}

type Tab = 'messages' | 'appointments' | 'settings';

const Dashboard: React.FC<DashboardProps> = ({ onLogout }) => {
  const [activeTab, setActiveTab] = useState<Tab>('messages');

  return (
    <div className="flex h-screen bg-gray-50 overflow-hidden">
      {/* Sidebar - Desktop */}
      <aside className="hidden md:flex flex-col w-64 bg-white border-r border-gray-200">
        <div className="p-6 flex items-center gap-3 border-b border-gray-100">
          <div className="bg-teal-600 p-2 rounded-lg text-white">
            {ICONS.Sparkles}
          </div>
          <h1 className="font-bold text-xl tracking-tight">Valeria IA</h1>
        </div>
        
        <nav className="flex-1 p-4 space-y-2">
          {[
            { id: 'messages', label: 'Mensajes', icon: ICONS.Messages },
            { id: 'appointments', label: 'Citas', icon: ICONS.Calendar },
            { id: 'settings', label: 'Configuración', icon: ICONS.Settings }
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as Tab)}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl font-medium transition-all ${
                activeTab === tab.id 
                  ? 'bg-teal-50 text-teal-700' 
                  : 'text-gray-500 hover:bg-gray-50 hover:text-gray-700'
              }`}
            >
              {tab.icon}
              {tab.label}
            </button>
          ))}
        </nav>

        <div className="p-4 border-t border-gray-100">
          <button 
            onClick={onLogout}
            className="w-full text-left px-4 py-3 text-red-500 hover:bg-red-50 rounded-xl transition-all font-medium"
          >
            Cerrar Sesión
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col min-w-0">
        {/* Mobile Header */}
        <header className="md:hidden flex items-center justify-between p-4 bg-white border-b border-gray-200">
          <div className="flex items-center gap-2">
            <div className="bg-teal-600 p-1.5 rounded-md text-white">
              {ICONS.Sparkles}
            </div>
            <span className="font-bold">Valeria IA</span>
          </div>
          <div className="flex gap-2">
            <button onClick={() => setActiveTab('messages')} className={`p-2 rounded-lg ${activeTab === 'messages' ? 'bg-teal-50 text-teal-600' : 'text-gray-400'}`}>{ICONS.Messages}</button>
            <button onClick={() => setActiveTab('appointments')} className={`p-2 rounded-lg ${activeTab === 'appointments' ? 'bg-teal-50 text-teal-600' : 'text-gray-400'}`}>{ICONS.Calendar}</button>
            <button onClick={() => setActiveTab('settings')} className={`p-2 rounded-lg ${activeTab === 'settings' ? 'bg-teal-50 text-teal-600' : 'text-gray-400'}`}>{ICONS.Settings}</button>
          </div>
        </header>

        {/* Tab Content */}
        <div className="flex-1 relative overflow-hidden">
          {activeTab === 'messages' && <ChatTab />}
          {activeTab === 'appointments' && <AppointmentsTab />}
          {activeTab === 'settings' && <SettingsTab />}
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
