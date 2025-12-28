
import React from 'react';
import { Sparkles, Calendar, MessageSquare, Settings, Users, CheckCircle2, Clock, XCircle, Plus } from 'lucide-react';

export const COLORS = {
  primary: '#F0FDFA', // Soft Teal
  success: '#22C55E', // Green Success
  white: '#FFFFFF',
  gray: {
    50: '#F9FAFB',
    100: '#F3F4F6',
    500: '#6B7280',
    900: '#111827',
  }
};

export const SERVICES_DEFAULT = [
  'Limpieza Facial Profunda',
  'Botox Preventivo',
  'Rinomodelación',
  'Depilación Láser',
  'Peeling Químico',
  'Hidratación de Labios'
];

export const ICONS = {
  Sparkles: <Sparkles className="w-5 h-5" />,
  Calendar: <Calendar className="w-5 h-5" />,
  Messages: <MessageSquare className="w-5 h-5" />,
  Settings: <Settings className="w-5 h-5" />,
  Users: <Users className="w-5 h-5" />,
  Check: <CheckCircle2 className="w-5 h-5" />,
  Clock: <Clock className="w-5 h-5" />,
  Cancel: <XCircle className="w-5 h-5" />,
  Add: <Plus className="w-5 h-5" />
};
