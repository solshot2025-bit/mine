import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";

export default function WhatsAppButton() {
  const handleWhatsAppClick = () => {
    console.log('WhatsApp contact clicked');
  };

  return (
    <Button
      size="icon"
      className="fixed bottom-6 right-6 h-14 w-14 rounded-full bg-green-500 hover:bg-green-600 shadow-lg z-50"
      onClick={handleWhatsAppClick}
      data-testid="button-whatsapp"
    >
      <MessageCircle className="h-7 w-7 text-white" />
    </Button>
  );
}
