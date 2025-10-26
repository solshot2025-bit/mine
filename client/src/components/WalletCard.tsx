import { Wallet, Package, Database, DollarSign } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

interface WalletCardProps {
  balance: number;
  ordersToday: number;
  gbSoldToday: number;
  revenueToday: number;
  onDeposit: () => void;
}

export default function WalletCard({ 
  balance, 
  ordersToday, 
  gbSoldToday, 
  revenueToday,
  onDeposit 
}: WalletCardProps) {
  return (
    <Card className="overflow-hidden border-2">
      <div className="bg-gradient-to-br from-cyan-500 via-blue-600 to-purple-700 p-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="flex flex-col items-center justify-center text-center">
            <div className="rounded-xl bg-white/20 backdrop-blur-sm p-3 mb-2">
              <Wallet className="h-6 w-6 text-white" />
            </div>
            <p className="text-xs font-medium text-white/90 uppercase tracking-wide">Balance</p>
            <p className="text-2xl md:text-3xl font-bold text-white" data-testid="text-balance">
              GH₵{balance.toFixed(2)}
            </p>
            <Button 
              size="sm" 
              className="mt-2 bg-white/90 hover:bg-white text-blue-600 font-semibold"
              onClick={onDeposit}
              data-testid="button-deposit"
            >
              Deposit
            </Button>
          </div>

          <div className="flex flex-col items-center justify-center text-center">
            <div className="rounded-xl bg-white/20 backdrop-blur-sm p-3 mb-2">
              <Package className="h-6 w-6 text-white" />
            </div>
            <p className="text-xs font-medium text-white/90 uppercase tracking-wide">Orders Today</p>
            <p className="text-2xl md:text-3xl font-bold text-white" data-testid="text-orders">
              {ordersToday}
            </p>
          </div>

          <div className="flex flex-col items-center justify-center text-center">
            <div className="rounded-xl bg-white/20 backdrop-blur-sm p-3 mb-2">
              <Database className="h-6 w-6 text-white" />
            </div>
            <p className="text-xs font-medium text-white/90 uppercase tracking-wide">GB Sold Today</p>
            <p className="text-2xl md:text-3xl font-bold text-white" data-testid="text-gb-sold">
              {gbSoldToday.toFixed(1)} GB
            </p>
          </div>

          <div className="flex flex-col items-center justify-center text-center">
            <div className="rounded-xl bg-white/20 backdrop-blur-sm p-3 mb-2">
              <DollarSign className="h-6 w-6 text-white" />
            </div>
            <p className="text-xs font-medium text-white/90 uppercase tracking-wide">Revenue Today</p>
            <p className="text-2xl md:text-3xl font-bold text-white" data-testid="text-revenue">
              GH₵{revenueToday.toFixed(2)}
            </p>
          </div>
        </div>
      </div>
    </Card>
  );
}
