const PHONE = '18293293115';

const DEFAULT_MSG = `Hola 👋, visité su página web y me interesa solicitar una cotización. ¿Me pueden ayudar?

📍 Vengo de: www.vidriosdelsur.com`;

export const WHATSAPP_URL = `https://wa.me/${PHONE}?text=${encodeURIComponent(DEFAULT_MSG)}`;

export function whatsappWithService(serviceName: string): string {
  const msg = `Hola 👋, visité su página web y me interesa el servicio de *${serviceName}*. ¿Me pueden dar más información y una cotización?

📍 Vengo de: www.vidriosdelsur.com`;
  return `https://wa.me/${PHONE}?text=${encodeURIComponent(msg)}`;
}

export function whatsappWithForm(data: {
  nombre: string;
  telefono: string;
  servicio: string;
  descripcion: string;
  medidas: string;
}): string {
  const msg = `Hola 👋, vengo de la página web y quiero solicitar una cotización:

👤 *Nombre:* ${data.nombre}
📞 *Teléfono:* ${data.telefono}
🔧 *Servicio:* ${data.servicio}
📝 *Descripción:* ${data.descripcion}
📐 *Medidas:* ${data.medidas || 'No especificadas'}

📍 Vengo de: www.vidriosdelsur.com`;
  return `https://wa.me/${PHONE}?text=${encodeURIComponent(msg)}`;
}
