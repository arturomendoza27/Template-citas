
export type SenderType = 'user' | 'assistant';

export interface Message {
  id: string;
  phone_number: string;
  message_content: string;
  sender: SenderType;
  received_at: string;
}

export type AppointmentStatus = 'pending' | 'confirmed' | 'cancelled';

export interface Appointment {
  id: string;
  phone_number: string;
  patient_name: string;
  appointment_date: string;
  appointment_type: string;
  status: AppointmentStatus;
  reminder_sent: boolean;
}

export interface ClinicSettings {
  id: number;
  clinic_name: string;
  clinic_address: string;
  clinic_phone: string;
  clinic_email: string;
  working_hours: string;
  services: string[];
  about_clinic: string;
  whatsapp_webhook_url: string;
  timezone: string;
}

export interface ChatPreview {
  phone_number: string;
  last_message: string;
  last_time: string;
  unread_count: number;
  patient_name?: string;
}
