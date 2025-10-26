import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { MessageCircle, Phone, Mail, HelpCircle } from "lucide-react";
import { Badge } from "@/components/ui/badge";

interface ContactSupportModalProps {
  open: boolean;
  onClose: () => void;
}

export default function ContactSupportModal({ open, onClose }: ContactSupportModalProps) {
  const whatsappNumber = "233543285034";
  const whatsappLink = `https://wa.me/${whatsappNumber}`;

  const handleChatNow = () => {
    window.open(whatsappLink, '_blank');
  };

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-cyan-500 via-blue-600 to-purple-700">
            <MessageCircle className="h-7 w-7 text-white" />
          </div>
          <DialogTitle className="text-center text-2xl">Contact Support</DialogTitle>
          <DialogDescription className="text-center text-base">
            Fast way to reach us - Ask questions & seek help here
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-4 py-4">
          <Card className="border-2 border-primary/20 bg-gradient-to-br from-primary/5 to-primary/10">
            <CardContent className="pt-6 space-y-4">
              <div className="text-center space-y-2">
                <Badge className="mb-2 bg-green-500/20 text-green-600 border-green-500/30">
                  Available 24/7
                </Badge>
                <p className="text-sm text-muted-foreground font-medium">
                  Fastest Response via WhatsApp
                </p>
              </div>

              <div className="flex items-center justify-center gap-2 p-4 bg-background/60 backdrop-blur-sm rounded-lg">
                <Phone className="h-5 w-5 text-primary" />
                <span className="text-lg font-semibold">0543 285 034</span>
              </div>

              <Button 
                className="w-full h-12 text-base font-semibold gap-2 bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700"
                onClick={handleChatNow}
                data-testid="button-chat-whatsapp"
              >
                <MessageCircle className="h-5 w-5" />
                Chat Now on WhatsApp
              </Button>
            </CardContent>
          </Card>

          <div className="space-y-3">
            <div className="flex items-start gap-3 p-3 rounded-lg bg-muted/30 hover-elevate">
              <div className="rounded-lg bg-primary/10 p-2 mt-0.5">
                <HelpCircle className="h-4 w-4 text-primary" />
              </div>
              <div className="flex-1">
                <h4 className="text-sm font-semibold mb-1">Quick Support</h4>
                <p className="text-xs text-muted-foreground">
                  Get instant answers to common questions via WhatsApp
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3 p-3 rounded-lg bg-muted/30 hover-elevate">
              <div className="rounded-lg bg-primary/10 p-2 mt-0.5">
                <Mail className="h-4 w-4 text-primary" />
              </div>
              <div className="flex-1">
                <h4 className="text-sm font-semibold mb-1">Technical Issues</h4>
                <p className="text-xs text-muted-foreground">
                  Report bugs or technical problems directly
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="flex gap-2 pt-2">
          <Button 
            variant="outline" 
            className="flex-1"
            onClick={onClose}
            data-testid="button-close-support"
          >
            Close
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
