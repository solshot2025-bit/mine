import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { AlertTriangle, CheckCircle2 } from "lucide-react";
import { Separator } from "@/components/ui/separator";

interface PurchaseModalProps {
  open: boolean;
  onClose: () => void;
  bundleSize: string;
  bundlePrice: number;
  onPurchase: (phoneNumber: string) => void;
}

export default function PurchaseModal({ 
  open, 
  onClose, 
  bundleSize, 
  bundlePrice,
  onPurchase 
}: PurchaseModalProps) {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [showNotice, setShowNotice] = useState(false);

  const handlePurchaseClick = () => {
    if (phoneNumber.length === 10) {
      setShowNotice(true);
    }
  };

  const handleConfirm = () => {
    onPurchase(phoneNumber);
    setShowNotice(false);
    setPhoneNumber("");
    onClose();
  };

  if (showNotice) {
    return (
      <Dialog open={open} onOpenChange={onClose}>
        <DialogContent className="sm:max-w-lg">
          <DialogHeader>
            <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-amber-500/10">
              <AlertTriangle className="h-6 w-6 text-amber-600" />
            </div>
            <DialogTitle className="text-center text-xl">Service Notice</DialogTitle>
            <DialogDescription className="text-center">
              Please read carefully before proceeding
            </DialogDescription>
          </DialogHeader>

          <div className="space-y-4">
            <div className="rounded-lg bg-muted p-4 space-y-3 text-sm">
              <div className="flex items-start gap-2">
                <div className="mt-0.5 h-1.5 w-1.5 rounded-full bg-primary shrink-0"></div>
                <p>This is <strong>not an instant service</strong>. Data delivery times vary between customers.</p>
              </div>
              <div className="flex items-start gap-2">
                <div className="mt-0.5 h-1.5 w-1.5 rounded-full bg-primary shrink-0"></div>
                <p>We are working diligently to process all orders, but there may be delays.</p>
              </div>
              <div className="flex items-start gap-2">
                <div className="mt-0.5 h-1.5 w-1.5 rounded-full bg-primary shrink-0"></div>
                <p>If you need immediate data for urgent matters, please dial <strong>*138#</strong> on your MTN line instead.</p>
              </div>
              <div className="flex items-start gap-2">
                <div className="mt-0.5 h-1.5 w-1.5 rounded-full bg-primary shrink-0"></div>
                <p>Once ordered, please be patient as we process your request.</p>
              </div>
            </div>

            <div className="rounded-lg border-2 border-primary/20 bg-primary/5 p-4">
              <p className="text-sm text-center">
                We value your business and are committed to delivering quality service. Thank you for your understanding and patience.
              </p>
            </div>

            <Separator />

            <div className="flex gap-3">
              <Button 
                variant="outline" 
                className="flex-1"
                onClick={() => setShowNotice(false)}
                data-testid="button-cancel"
              >
                Go Back
              </Button>
              <Button 
                variant="default" 
                className="flex-1"
                onClick={handleConfirm}
                data-testid="button-confirm"
              >
                I Understand
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    );
  }

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
            <CheckCircle2 className="h-6 w-6 text-primary" />
          </div>
          <DialogTitle className="text-center">Purchase Data Bundle</DialogTitle>
          <DialogDescription className="text-center">
            Complete the form below to proceed
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-5">
          <div className="rounded-lg border-2 bg-muted/30 p-4 space-y-2">
            <div className="flex justify-between items-center">
              <span className="text-sm font-medium text-muted-foreground">Bundle Size</span>
              <span className="text-lg font-bold">{bundleSize}</span>
            </div>
            <Separator />
            <div className="flex justify-between items-center">
              <span className="text-sm font-medium text-muted-foreground">Price</span>
              <span className="text-xl font-bold text-primary">GH₵ {bundlePrice.toFixed(2)}</span>
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="phone" className="text-sm font-medium">
              Phone Number
            </Label>
            <Input 
              id="phone"
              type="tel"
              placeholder="0XXXXXXXXX"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value.replace(/\D/g, '').slice(0, 10))}
              maxLength={10}
              className="h-12 text-base"
              data-testid="input-phone"
            />
            <p className="text-xs text-muted-foreground">
              Must start with 0 and be 10 digits long
            </p>
          </div>

          <Button 
            className="w-full h-11" 
            onClick={handlePurchaseClick}
            disabled={phoneNumber.length !== 10}
            data-testid="button-purchase"
          >
            Continue to Purchase
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
