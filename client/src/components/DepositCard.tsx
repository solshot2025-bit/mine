import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { AlertCircle, Coins } from "lucide-react";

interface DepositCardProps {
  onDeposit: () => void;
}

export default function DepositCard({ onDeposit }: DepositCardProps) {
  return (
    <Card className="border-l-4 border-l-primary">
      <CardContent className="p-6">
        <div className="flex items-start gap-4">
          <div className="rounded-full bg-primary/10 p-3">
            <Coins className="h-6 w-6 text-primary" />
          </div>
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-1">
              <AlertCircle className="h-4 w-4 text-primary" />
              <h3 className="font-semibold">Add Funds to Your Account</h3>
            </div>
            <p className="text-sm text-muted-foreground mb-3">
              Need more credits? Deposit money into your account.
            </p>
            <Button 
              onClick={onDeposit}
              data-testid="button-deposit-now"
            >
              Deposit Now
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
