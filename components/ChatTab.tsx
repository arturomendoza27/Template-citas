
import React, { useState, useEffect, useRef } from 'react';
import { ICONS } from '../constants';
import { ChatPreview, Message } from '../types';

const MOCK_CHATS: ChatPreview[] = [
  { phone_number: '+34 600 000 001', last_message: '¿Tienen cita para hoy?', last_time: '10:30', unread_count: 2, patient_name: 'Ana García' },
  { phone_number: '+34 600 000 002', last_message: 'Gracias por la atención, Erika.', last_time: '09:15', unread_count: 0, patient_name: 'Carlos Ruiz' },
  { phone_number: '+34 600 000 003', last_message: 'Confirmado el Botox.', last_time: 'Ayer', unread_count: 0, patient_name: 'Lucía Méndez' },
];

const MOCK_MESSAGES: Message[] = [
  { id: '1', phone_number: '+34 600 000 001', message_content: 'Hola, me gustaría saber qué servicios ofrecen.', sender: 'user', received_at: '10:00' },
  { id: '2', phone_number: '+34 600 000 001', message_content: '¡Hola! Soy Erika, tu asistente de Valeria IA. Ofrecemos Limpieza Facial, Botox, Rinomodelación y más. ¿En qué puedo ayudarte?', sender: 'assistant', received_at: '10:01' },
  { id: '3', phone_number: '+34 600 000 001', message_content: '¿Tienen cita para hoy?', sender: 'user', received_at: '10:30' },
];

const ChatTab: React.FC = () => {
  const [selectedChat, setSelectedChat] = useState<ChatPreview | null>(MOCK_CHATS[0]);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [selectedChat]);

  return (
    <div className="flex h-full animate-in fade-in duration-300">
      {/* Chats List */}
      <div className="w-full md:w-80 lg:w-96 border-r border-gray-200 bg-white flex flex-col">
        <div className="p-4 border-b border-gray-100">
          <h2 className="text-lg font-bold">Conversaciones</h2>
          <div className="relative mt-2">
            <input 
              type="text" 
              placeholder="Buscar chat..." 
              className="w-full bg-gray-50 border-none rounded-xl py-2 pl-4 pr-10 text-sm focus:ring-2 focus:ring-teal-100 outline-none"
            />
          </div>
        </div>
        <div className="flex-1 overflow-y-auto">
          {MOCK_CHATS.map((chat) => (
            <button
              key={chat.phone_number}
              onClick={() => setSelectedChat(chat)}
              className={`w-full p-4 flex gap-3 border-b border-gray-50 transition-colors ${
                selectedChat?.phone_number === chat.phone_number ? 'bg-teal-50' : 'hover:bg-gray-50'
              }`}
            >
              <div className="w-12 h-12 rounded-full bg-teal-100 text-teal-600 flex items-center justify-center font-bold">
                {chat.patient_name ? chat.patient_name[0] : '#'}
              </div>
              <div className="flex-1 text-left">
                <div className="flex justify-between items-baseline">
                  <span className="font-bold text-gray-900 truncate max-w-[140px]">
                    {chat.patient_name || chat.phone_number}
                  </span>
                  <span className="text-xs text-gray-400">{chat.last_time}</span>
                </div>
                <div className="flex justify-between items-center mt-1">
                  <p className="text-sm text-gray-500 truncate max-w-[180px]">{chat.last_message}</p>
                  {chat.unread_count > 0 && (
                    <span className="bg-teal-500 text-white text-[10px] font-bold px-2 py-0.5 rounded-full">
                      {chat.unread_count}
                    </span>
                  )}
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Conversation Panel */}
      <div className="hidden md:flex flex-1 flex-col bg-[#f0f2f5]">
        {selectedChat ? (
          <>
            {/* Header */}
            <div className="p-4 bg-white border-b border-gray-200 flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-teal-100 text-teal-600 flex items-center justify-center font-bold">
                {selectedChat.patient_name ? selectedChat.patient_name[0] : '#'}
              </div>
              <div>
                <h3 className="font-bold">{selectedChat.patient_name || selectedChat.phone_number}</h3>
                <p className="text-xs text-teal-500">Activo ahora</p>
              </div>
            </div>

            {/* Messages Area */}
            <div className="flex-1 overflow-y-auto p-6 space-y-4">
              {MOCK_MESSAGES.map((msg) => (
                <div 
                  key={msg.id}
                  className={`flex ${msg.sender === 'user' ? 'justify-start' : 'justify-end'}`}
                >
                  <div 
                    className={`max-w-[70%] px-4 py-2 rounded-2xl shadow-sm text-sm ${
                      msg.sender === 'user' 
                        ? 'bg-white rounded-tl-none text-gray-800' 
                        : 'bg-teal-600 rounded-tr-none text-white'
                    }`}
                  >
                    <p>{msg.message_content}</p>
                    <div className={`text-[10px] mt-1 ${msg.sender === 'user' ? 'text-gray-400' : 'text-teal-100'}`}>
                      {msg.received_at}
                    </div>
                  </div>
                </div>
              ))}
              <div ref={messagesEndRef} />
            </div>

            {/* Input - Read Only for demo or manual intervention */}
            <div className="p-4 bg-white border-t border-gray-200">
              <div className="flex items-center gap-3 bg-gray-50 rounded-2xl px-4 py-2">
                <input 
                  type="text" 
                  placeholder="Escribe una respuesta (Intervención manual)..."
                  className="flex-1 bg-transparent border-none outline-none text-sm py-2"
                />
                <button className="text-teal-600">
                  <svg className="w-6 h-6 rotate-90" fill="currentColor" viewBox="0 0 24 24"><path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"/></svg>
                </button>
              </div>
            </div>
          </>
        ) : (
          <div className="flex-1 flex flex-col items-center justify-center text-gray-400">
            <div className="p-6 bg-gray-100 rounded-full mb-4">
              {ICONS.Messages}
            </div>
            <p>Selecciona una conversación para ver los mensajes</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ChatTab;
