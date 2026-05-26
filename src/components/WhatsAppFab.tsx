import { MessageCircle } from "lucide-react";
import { TSF_WHATSAPP } from "@/context/TravelBoxContext";

export function WhatsAppFab() {
  return (
    <a
      href={`https://wa.me/${TSF_WHATSAPP}?text=${encodeURIComponent("Hello TSF! I'd like to place a travel food order.")}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp to order"
      className="group fixed bottom-6 right-6 z-50 flex items-center gap-2 rounded-full bg-[#25D366] px-4 py-3 font-semibold text-white shadow-xl shadow-black/20 transition hover:scale-105"
    >
      <span className="absolute inset-0 -z-10 animate-ping rounded-full bg-[#25D366] opacity-30" />
      <MessageCircle className="h-5 w-5" />
      <span className="hidden text-sm sm:inline">Chat to Order</span>
    </a>
  );
}
