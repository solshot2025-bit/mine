import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Menu, MessageCircle, Info } from "lucide-react";
import { Separator } from "@/components/ui/separator";

interface MobileMenuSheetProps {
  onContactSupport: () => void;
  onAboutUs: () => void;
}

export default function MobileMenuSheet({ onContactSupport, onAboutUs }: MobileMenuSheetProps) {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button 
          size="icon" 
          variant="ghost"
          data-testid="button-menu"
          className="md:hidden"
        >
          <Menu className="h-5 w-5" />
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="w-72">
        <SheetHeader>
          <SheetTitle className="text-left text-xl bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
            AGENT DEALS
          </SheetTitle>
        </SheetHeader>
        <div className="mt-6 space-y-2">
          <Button
            variant="ghost"
            className="w-full justify-start gap-3 h-12"
            onClick={onContactSupport}
            data-testid="button-contact-support"
          >
            <MessageCircle className="h-5 w-5" />
            <span className="font-medium">Contact Support</span>
          </Button>
          
          <Button
            variant="ghost"
            className="w-full justify-start gap-3 h-12"
            onClick={onAboutUs}
            data-testid="button-about-us"
          >
            <Info className="h-5 w-5" />
            <span className="font-medium">About Us</span>
          </Button>
        </div>
        
        <Separator className="my-6" />
        
        <div className="text-xs text-muted-foreground text-center">
          <p>AGENT DEALS</p>
          <p className="mt-1">Version 1.0.0</p>
        </div>
      </SheetContent>
    </Sheet>
  );
}
