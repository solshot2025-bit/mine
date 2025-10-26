import { useState, useEffect } from "react";
import { useRoute, useLocation } from "wouter";
import Header from "@/components/Header";
import BundleCard from "@/components/BundleCard";
import PurchaseModal from "@/components/PurchaseModal";
import AlertBanner from "@/components/AlertBanner";
import WhatsAppButton from "@/components/WhatsAppButton";
import NoticeModal from "@/components/NoticeModal";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Info, RefreshCw } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

export default function ServicePage() {
  const [, params] = useRoute("/service/:provider");
  const [, setLocation] = useLocation();
  const [selectedBundle, setSelectedBundle] = useState<{ id: string; size: string; price: number } | null>(null);
  const [showNoticeModal, setShowNoticeModal] = useState(false);
  const { toast } = useToast();
  
  const provider = params?.provider || 'mtn';
  const providerName = provider.toUpperCase();

  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Bundle pricing based on provider
  const getBundles = () => {
    switch (provider.toLowerCase()) {
      case 'mtn':
        return [
          { id: '1', size: '1 GB', price: 5.5, duration: 'No-Expiry' },
          { id: '2', size: '2 GB', price: 10, duration: 'No-Expiry' },
          { id: '3', size: '3 GB', price: 14, duration: 'No-Expiry' },
          { id: '4', size: '4 GB', price: 20, duration: 'No-Expiry' },
          { id: '5', size: '5 GB', price: 22.5, duration: 'No-Expiry' },
          { id: '6', size: '6 GB', price: 28, duration: 'No-Expiry' },
          { id: '7', size: '8 GB', price: 35, duration: 'No-Expiry' },
          { id: '8', size: '10 GB', price: 44, duration: 'No-Expiry' },
          { id: '9', size: '15 GB', price: 63, duration: 'No-Expiry' },
          { id: '10', size: '20 GB', price: 83, duration: 'No-Expiry' },
          { id: '11', size: '25 GB', price: 103, duration: 'No-Expiry' },
          { id: '12', size: '30 GB', price: 124, duration: 'No-Expiry' },
          { id: '13', size: '40 GB', price: 163, duration: 'No-Expiry' },
          { id: '14', size: '50 GB', price: 203, duration: 'No-Expiry' },
        ];
      case 'telecel':
        return [
          { id: '1', size: '10 GB', price: 43, duration: 'No-Expiry' },
          { id: '2', size: '15 GB', price: 62, duration: 'No-Expiry' },
          { id: '3', size: '20 GB', price: 83, duration: 'No-Expiry' },
          { id: '4', size: '30 GB', price: 119, duration: 'No-Expiry' },
          { id: '5', size: '40 GB', price: 163, duration: 'No-Expiry' },
          { id: '6', size: '50 GB', price: 202, duration: 'No-Expiry' },
        ];
      case 'airteltigo':
        return [
          { id: '1', size: '1 GB', price: 4.5, duration: 'No-Expiry' },
          { id: '2', size: '2 GB', price: 9, duration: 'No-Expiry' },
          { id: '3', size: '3 GB', price: 13, duration: 'No-Expiry' },
          { id: '4', size: '5 GB', price: 23, duration: 'No-Expiry' },
          { id: '5', size: '8 GB', price: 34, duration: 'No-Expiry' },
          { id: '6', size: '10 GB', price: 43, duration: 'No-Expiry' },
          { id: '7', size: '15 GB', price: 60, duration: 'No-Expiry' },
          { id: '8', size: '20 GB', price: 79, duration: 'No-Expiry' },
        ];
      default:
        return [];
    }
  };

  const bundles = getBundles().map(bundle => ({
    ...bundle,
    provider: providerName
  }));

  const handleBundleSelect = (bundleId: string) => {
    const bundle = bundles.find(b => b.id === bundleId);
    if (bundle) {
      setSelectedBundle({ id: bundle.id, size: bundle.size, price: bundle.price });
    }
  };

  const handlePurchase = (phoneNumber: string) => {
    console.log('Purchase initiated:', { bundle: selectedBundle, phoneNumber });
    toast({
      title: "Order Placed Successfully",
      description: `${selectedBundle?.size} bundle for ${phoneNumber} is being processed.`,
    });
    setSelectedBundle(null);
  };

  return (
    <div className="min-h-screen bg-background">
      <Header onNotificationClick={() => setShowNoticeModal(true)} />
      
      <main className="container px-4 py-6 space-y-6 max-w-7xl mx-auto">
        <div className="flex items-center justify-between flex-wrap gap-4">
          <div className="flex items-center gap-4">
            <Button 
              variant="ghost" 
              size="icon"
              onClick={() => setLocation('/')}
              data-testid="button-back"
            >
              <ArrowLeft className="h-5 w-5" />
            </Button>
            <div>
              <h1 className="text-2xl md:text-3xl font-bold">{providerName} Data Bundles</h1>
              <div className="flex items-center gap-3 mt-2">
                <Badge variant="default" className="gap-1 bg-green-500/20 text-green-600 border-green-500/30">
                  In Stock
                </Badge>
                <Button variant="ghost" size="sm" className="h-7 gap-1 hover-elevate">
                  <RefreshCw className="h-3 w-3" />
                  <span className="text-xs text-muted-foreground">Updated 2 min ago</span>
                </Button>
              </div>
            </div>
          </div>
          
          <Button variant="outline" size="sm" className="gap-2">
            <Info className="h-4 w-4" />
            Service Info
          </Button>
        </div>

        <AlertBanner
          type="info"
          title="IMPORTANT POLICY"
          message="Social media advertising of our services is strictly prohibited and will result in account termination."
          details={["This policy is strictly enforced to maintain service quality and prevent abuse. No exceptions will be made."]}
        />

        <AlertBanner
          type="warning"
          title="Service Guidelines"
          message="Please read these important guidelines before placing your order"
          details={[
            "Turbonet and Broadband SIM cards are not eligible for this service",
            "Do not place multiple orders for the same number simultaneously - one will be rejected without refund",
            "Data delivery is not instant - some numbers receive data faster than others",
            "No refunds for wrong transactions or incorrect phone numbers",
            "Verify phone numbers carefully before purchase"
          ]}
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {bundles.map((bundle) => (
            <BundleCard
              key={bundle.id}
              id={bundle.id}
              size={bundle.size}
              price={bundle.price}
              duration={bundle.duration}
              provider={bundle.provider}
              onSelect={handleBundleSelect}
            />
          ))}
        </div>
      </main>

      {selectedBundle && (
        <PurchaseModal
          open={!!selectedBundle}
          onClose={() => setSelectedBundle(null)}
          bundleSize={selectedBundle.size}
          bundlePrice={selectedBundle.price}
          onPurchase={handlePurchase}
        />
      )}

      <WhatsAppButton />
      
      <NoticeModal 
        open={showNoticeModal} 
        onClose={() => setShowNoticeModal(false)} 
      />
    </div>
  );
}
