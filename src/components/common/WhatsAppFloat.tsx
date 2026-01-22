import { MessageCircle } from "lucide-react";

const WHATSAPP_NUMBER = "923554196378";  // country code + number (no +, no spaces)
const WHATSAPP_MESSAGE = "Hello, I’d like to know more about your programs.";

const WhatsAppFloat = () => {
  return (
    <a
      href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
        WHATSAPP_MESSAGE
      )}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="
        fixed bottom-5 right-5 z-50
        flex items-center justify-center
        w-14 h-14 rounded-full
        bg-green-500 hover:bg-green-600
        shadow-lg hover:shadow-xl
        transition-all duration-300
        animate-bounce
      "
    >
      <MessageCircle className="w-7 h-7 text-white" />
    </a>
  );
};

export default WhatsAppFloat;
