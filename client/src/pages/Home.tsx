import { useState, useEffect } from "react";
import { useLocation } from "wouter";
import Header from "@/components/Header";
import WalletCard from "@/components/WalletCard";
import ServiceCard from "@/components/ServiceCard";
import TransactionTable from "@/components/TransactionTable";
import DepositCard from "@/components/DepositCard";
import QuickActions from "@/components/QuickActions";
import WhatsAppButton from "@/components/WhatsAppButton";
import NoticeModal from "@/components/NoticeModal";
import { Smartphone, Signal, Phone, CheckCircle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

export default function Home() {
  const [, setLocation] = useLocation();
  const [showNoticeModal, setShowNoticeModal] = useState(false);
  const { toast } = useToast();
  
  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  // Show notice modal on first load
  useEffect(() => {
    const hasSeenNotice = sessionStorage.getItem('agentDealsNoticeShown');
    if (!hasSeenNotice) {
      setShowNoticeModal(true);
      sessionStorage.setItem('agentDealsNoticeShown', 'true');
    }
  }, []);

  const handleResultCheckers = () => {
    toast({
      title: "Coming Soon",
      description: "Result Checkers service will be available soon!",
    });
  };

  const mockTransactions = [
    {
      id: '1',
      phoneNumber: '0241234567',
      method: 'Data',
      network: 'MTN',
      data: '2 GB',
      amount: 9.0,
      status: 'success' as const,
      timestamp: new Date(),
    },
    {
      id: '2',
      phoneNumber: '0551234567',
      method: 'Data',
      network: 'Telecel',
      data: '5 GB',
      amount: 22.5,
      status: 'pending' as const,
      timestamp: new Date(Date.now() - 1800000),
    },
    {
      id: '3',
      phoneNumber: '0271234567',
      method: 'Data',
      network: 'AirtelTigo',
      data: '1 GB',
      amount: 4.5,
      status: 'success' as const,
      timestamp: new Date(Date.now() - 3600000),
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header onNotificationClick={() => setShowNoticeModal(true)} />
      
      <main className="container px-4 py-6 space-y-6 max-w-7xl mx-auto">
        <div className="bg-gradient-to-br from-cyan-500 via-blue-600 to-purple-700 rounded-2xl p-8 text-center border-2 border-primary/20 shadow-lg">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">
            Place New Order
          </h2>
          <p className="text-white/90 text-sm">Select a network to get started</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <ServiceCard
            name="MTN Data"
            icon={Smartphone}
            color="bg-gradient-to-br from-yellow-500 via-yellow-600 to-amber-600"
            onClick={() => setLocation('/service/mtn')}
          />
          <ServiceCard
            name="AirtelTigo Data"
            icon={Signal}
            color="bg-gradient-to-br from-red-500 via-red-600 to-rose-600"
            onClick={() => setLocation('/service/airteltigo')}
          />
          <ServiceCard
            name="Telecel Data"
            icon={Phone}
            color="bg-gradient-to-br from-blue-500 via-blue-600 to-indigo-600"
            onClick={() => setLocation('/service/telecel')}
          />
          <ServiceCard
            name="Result Checkers"
            icon={CheckCircle}
            color="bg-gradient-to-br from-emerald-500 via-green-600 to-teal-600"
            onClick={handleResultCheckers}
          />
        </div>

        <WalletCard
          balance={150.50}
          ordersToday={12}
          gbSoldToday={45.5}
          revenueToday={75.20}
          onDeposit={() => setLocation('/deposit')}
        />

        <DepositCard onDeposit={() => setLocation('/deposit')} />

        <TransactionTable
          transactions={mockTransactions}
          onViewAll={() => setLocation('/transactions')}
        />

        <QuickActions onActionClick={(action) => console.log('Quick action:', action)} />
      </main>

      <WhatsAppButton />
      
      <NoticeModal 
        open={showNoticeModal} 
        onClose={() => setShowNoticeModal(false)} 
      />
    </div>
  );
}
