import { useState } from "react";
import { Bell, LogOut } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useLocation } from "wouter";
import MobileMenuSheet from "@/components/MobileMenuSheet";
import ContactSupportModal from "@/components/ContactSupportModal";

interface HeaderProps {
  onNotificationClick?: () => void;
}

export default function Header({ onNotificationClick }: HeaderProps) {
  const [, setLocation] = useLocation();
  const [showContactSupport, setShowContactSupport] = useState(false);

  const handleLogout = () => {
    localStorage.removeItem('agentDealsAuth');
    setLocation('/auth');
  };

  const handleAboutUs = () => {
    // TODO: Implement About Us modal/page
    console.log('About Us clicked');
  };

  return (
    <>
      <header className="sticky top-0 z-50 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between px-4">
          <div className="flex items-center gap-4">
            <MobileMenuSheet 
              onContactSupport={() => setShowContactSupport(true)}
              onAboutUs={handleAboutUs}
            />
            <button 
              onClick={() => setLocation('/')}
              className="text-2xl font-bold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent hover:opacity-80 transition-opacity"
              data-testid="button-home-logo"
            >
              AGENT DEALS
            </button>
          </div>
          
          <div className="flex items-center gap-2">
            <Button 
              size="icon" 
              variant="ghost" 
              className="relative"
              onClick={onNotificationClick}
              data-testid="button-notifications"
            >
              <Bell className="h-5 w-5" />
              <Badge 
                className="absolute -top-1 -right-1 h-5 w-5 flex items-center justify-center p-0 text-xs"
                variant="destructive"
              >
                2
              </Badge>
            </Button>
            
            <Button 
              size="icon" 
              variant="ghost"
              onClick={handleLogout}
              data-testid="button-logout"
              title="Logout"
            >
              <LogOut className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </header>

      <ContactSupportModal 
        open={showContactSupport}
        onClose={() => setShowContactSupport(false)}
      />
    </>
  );
}
