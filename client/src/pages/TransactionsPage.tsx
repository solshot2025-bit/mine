import { useState, useEffect } from "react";
import { useLocation } from "wouter";
import Header from "@/components/Header";
import WhatsAppButton from "@/components/WhatsAppButton";
import NoticeModal from "@/components/NoticeModal";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, Download } from "lucide-react";

export default function TransactionsPage() {
  const [, setLocation] = useLocation();
  const [showNoticeModal, setShowNoticeModal] = useState(false);

  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const allTransactions = [
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
    {
      id: '4',
      phoneNumber: '0241234567',
      method: 'Data',
      network: 'MTN',
      data: '10 GB',
      amount: 42.0,
      status: 'success' as const,
      timestamp: new Date(Date.now() - 7200000),
    },
    {
      id: '5',
      phoneNumber: '0559876543',
      method: 'Data',
      network: 'Telecel',
      data: '3 GB',
      amount: 13.0,
      status: 'failed' as const,
      timestamp: new Date(Date.now() - 10800000),
    },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "success":
        return "bg-green-500/20 text-green-500 border-green-500/30";
      case "pending":
        return "bg-amber-500/20 text-amber-500 border-amber-500/30";
      case "failed":
        return "bg-red-500/20 text-red-500 border-red-500/30";
      default:
        return "bg-muted text-muted-foreground";
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Header onNotificationClick={() => setShowNoticeModal(true)} />
      
      <main className="container px-4 py-6 max-w-7xl mx-auto space-y-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Button 
              variant="ghost" 
              size="icon"
              onClick={() => setLocation('/')}
              data-testid="button-back"
            >
              <ArrowLeft className="h-5 w-5" />
            </Button>
            <h1 className="text-2xl md:text-3xl font-bold">All Transactions</h1>
          </div>
          
          <Button variant="outline" className="gap-2">
            <Download className="h-4 w-4" />
            Export
          </Button>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Transaction History</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b text-sm text-muted-foreground">
                    <th className="text-left pb-3 font-medium">PHONE #</th>
                    <th className="text-left pb-3 font-medium">METHOD</th>
                    <th className="text-left pb-3 font-medium">TIME</th>
                    <th className="text-left pb-3 font-medium">NETWORK</th>
                    <th className="text-left pb-3 font-medium">DATA</th>
                    <th className="text-right pb-3 font-medium">AMOUNT</th>
                    <th className="text-right pb-3 font-medium">STATUS</th>
                  </tr>
                </thead>
                <tbody>
                  {allTransactions.map((transaction) => (
                    <tr 
                      key={transaction.id} 
                      className="border-b last:border-0 hover-elevate"
                      data-testid={`row-transaction-${transaction.id}`}
                    >
                      <td className="py-4 text-sm font-medium">{transaction.phoneNumber}</td>
                      <td className="py-4 text-sm">{transaction.method}</td>
                      <td className="py-4 text-sm text-muted-foreground">
                        {transaction.timestamp.toLocaleString([], { 
                          month: 'short', 
                          day: 'numeric', 
                          hour: '2-digit', 
                          minute: '2-digit' 
                        })}
                      </td>
                      <td className="py-4 text-sm">{transaction.network}</td>
                      <td className="py-4 text-sm">{transaction.data}</td>
                      <td className="py-4 text-sm font-semibold text-right">
                        GH₵{transaction.amount.toFixed(2)}
                      </td>
                      <td className="py-4 text-right">
                        <Badge className={getStatusColor(transaction.status)} variant="outline">
                          {transaction.status}
                        </Badge>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>
      </main>

      <WhatsAppButton />
      
      <NoticeModal 
        open={showNoticeModal} 
        onClose={() => setShowNoticeModal(false)} 
      />
    </div>
  );
}
