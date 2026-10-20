export const CLINIC_WHATSAPP_NUMBER = "917601026596";
export const DEFAULT_APPOINTMENT_MESSAGE =
  "Hello Dr. Hamid, I would like to book a physiotherapy consultation at your Manikonda clinic.";

/** Standard wa.me click-to-chat link (works on mobile apps and WhatsApp Web). */
export const whatsappUrl = (message: string = DEFAULT_APPOINTMENT_MESSAGE) =>
  `https://wa.me/${CLINIC_WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;

/** Opens WhatsApp in a new tab; falls back to same-tab navigation if popups are blocked. */
export const openWhatsApp = (message?: string) => {
  const url = whatsappUrl(message);
  const win = window.open(url, "_blank", "noopener,noreferrer");
  if (!win) window.location.href = url;
};
