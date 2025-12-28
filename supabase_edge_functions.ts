
/**
 * ESTE ARCHIVO NO SE EJECUTA EN EL NAVEGADOR.
 * Es el código de ejemplo para las Edge Functions de Supabase (Deno).
 */

/* 
---------------------------------------------------------
A. twilio-webhook-whatsapp
---------------------------------------------------------
*/

/*
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2'
import { GoogleGenAI } from 'https://esm.sh/@google/genai'

Deno.serve(async (req) => {
  const formData = await req.formData()
  const body = formData.get('Body')
  const from = formData.get('From') // Ej: whatsapp:+34600000000
  
  const supabase = createClient(
    Deno.env.get('SUPABASE_URL')!,
    Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!
  )

  // 1. Guardar mensaje del usuario
  await supabase.from('messages').insert({
    phone_number: from,
    message_content: body,
    sender: 'user'
  })

  // 2. Obtener historial (Memory)
  const { data: history } = await supabase
    .from('messages')
    .filter('phone_number', 'eq', from)
    .order('received_at', { ascending: false })
    .limit(10)

  // 3. Obtener Settings y Timezone
  const { data: settings } = await supabase.from('clinic_settings').select('*').single()
  
  // 4. Configurar Gemini (Valeria / Erika)
  const ai = new GoogleGenAI({ apiKey: Deno.env.get('GEMINI_API_KEY')! })
  
  const systemPrompt = `
    Eres Erika, la asistente virtual de la clínica estética "${settings.clinic_name}".
    Tu objetivo es ayudar a los pacientes a agendar citas y resolver dudas.
    Horarios: ${settings.working_hours}.
    Servicios: ${settings.services.join(', ')}.
    Contexto Local: La hora actual en la clínica es ${new Date().toLocaleString('es-ES', { timeZone: settings.timezone })}.
    Instrucciones:
    - Sé amable y profesional.
    - Si el usuario quiere una cita, usa la herramienta check_availability.
    - Genera fechas en formato ISO 8601.
  `

  const response = await ai.models.generateContent({
    model: 'gemini-3-flash-preview',
    contents: [
        { role: 'system', parts: [{ text: systemPrompt }] },
        ...history.reverse().map(m => ({ 
            role: m.sender === 'user' ? 'user' : 'model', 
            parts: [{ text: m.message_content }] 
        })),
        { role: 'user', parts: [{ text: body }] }
    ]
    // ... config con tools (function calling) similar a appointments
  })

  const aiText = response.text
  
  // 5. Guardar respuesta de Erika
  await supabase.from('messages').insert({
    phone_number: from,
    message_content: aiText,
    sender: 'assistant'
  })

  // 6. Enviar vía Twilio (Request a Twilio API)
  // ... fetch a https://api.twilio.com/2010-04-01/Accounts/${SID}/Messages.json
  
  return new Response(null, { status: 200 })
})
*/

/* 
---------------------------------------------------------
B. send-reminders (Seguimiento Automático)
---------------------------------------------------------
*/

/*
Deno.serve(async (req) => {
  const supabase = createClient(...)
  
  const tomorrow = new Date()
  tomorrow.setDate(tomorrow.getDate() + 1)
  const tomorrowStr = tomorrow.toISOString().split('T')[0]

  const { data: appointments } = await supabase
    .from('appointments')
    .select('*')
    .eq('status', 'confirmed')
    .eq('reminder_sent', false)
    .ilike('appointment_date', `${tomorrowStr}%`)

  for (const app of appointments) {
    const msg = `Hola ${app.patient_name}, te recordamos tu cita de ${app.appointment_type} para mañana a las ${app.appointment_date.split(' ')[1]}. ¡Te esperamos!`
    
    // Enviar vía Twilio
    // const ok = await sendTwilio(app.phone_number, msg)
    
    if (ok) {
        await supabase.from('appointments').update({ reminder_sent: true }).eq('id', app.id)
    }
  }

  return new Response('Reminders processed', { status: 200 })
})
*/
