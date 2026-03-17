import { WhatsAppIcon } from './Icons';

export const WhatsAppButton = () => {
  return (
    <a
      href="https://wa.me/18294916977"
      target="_blank"
      rel="noopener noreferrer"
      className="whatsapp-float"
      aria-label="Contactar por WhatsApp"
    >
      <WhatsAppIcon size={28} color="white" />
    </a>
  );
};
