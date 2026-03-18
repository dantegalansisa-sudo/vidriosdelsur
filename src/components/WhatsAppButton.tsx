import { WhatsAppIcon } from './Icons';
import { WHATSAPP_URL } from '../data/whatsapp';

export const WhatsAppButton = () => {
  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      className="whatsapp-float"
      aria-label="Contactar por WhatsApp"
    >
      <WhatsAppIcon size={28} color="white" />
    </a>
  );
};
