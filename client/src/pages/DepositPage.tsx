import { useState, useEffect } from "react";
import { useLocation } from "wouter";
import Header from "@/components/Header";
import NetworkStatus from "@/components/NetworkStatus";
import WhatsAppButton from "@/components/WhatsAppButton";
import NoticeModal from "@/components/NoticeModal";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ArrowLeft, HelpCircle, History, CreditCard, Copy, CheckCircle2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { Separator } from "@/components/ui/separator";

export default function DepositPage() {
  const [, setLocation] = useLocation();
  const [amount, setAmount] = useState("");
  const [transactionId, setTransactionId] = useState("");
  const [showNoticeModal, setShowNoticeModal] = useState(false);
  const [copied, setCopied] = useState(false);
  const { toast } = useToast();

  const momoNumber = "0543285034";
  const momoName = "Alex Tarman Kolan (Feel Free Enterprise)";

  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const fee = amount ? (parseFloat(amount) * 0.03).toFixed(2) : "0.00";
  const total = amount ? (parseFloat(amount) + parseFloat(fee)).toFixed(2) : "0.00";

  const networks = [
    { name: 'MTN', status: 'available' as const },
    { name: 'Telecel', status: 'unavailable' as const },
    { name: 'AirtelTigo', status: 'unavailable' as const },
  ];

  const handlePaystackDeposit = () => {
    const amountValue = parseFloat(amount);
    
    if (!amount || amountValue <= 0) {
      toast({
        title: "Invalid Amount",
        description: "Please enter a valid deposit amount.",
        variant: "destructive",
      });
      return;
    }

    if (amountValue < 10) {
      toast({
        title: "Minimum Deposit Required",
        description: "Minimum deposit amount is GHS 10.00",
        variant: "destructive",
      });
      return;
    }

    console.log('Initiating Paystack payment for:', total);
    toast({
      title: "Redirecting to Payment",
      description: "You will be redirected to Paystack to complete your deposit.",
    });
  };

  const handleMomoVerify = () => {
    if (!transactionId.trim()) {
      toast({
        title: "Transaction ID Required",
        description: "Please enter your transaction ID to verify and claim funds.",
        variant: "destructive",
      });
      return;
    }

    console.log('Verifying transaction:', transactionId);
    toast({
      title: "Verifying Transaction",
      description: "Please wait while we verify your mobile money payment...",
    });
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(momoNumber);
    setCopied(true);
    toast({
      title: "Copied!",
      description: "Mobile money number copied to clipboard",
    });
    setTimeout(() => setCopied(false), 2000);
  };

  const handleHowToDeposit = () => {
    toast({
      title: "How to Deposit",
      description: "1. Send money to the number shown\n2. Get transaction ID from SMS\n3. Enter it here and verify",
    });
  };

  return (
    <div className="min-h-screen bg-background">
      <Header onNotificationClick={() => setShowNoticeModal(true)} />
      
      <main className="container px-4 py-6 max-w-2xl mx-auto space-y-6">
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
            <h1 className="text-2xl md:text-3xl font-bold">Add Funds</h1>
            <p className="text-sm text-muted-foreground mt-1">Top up your account balance</p>
          </div>
        </div>

        <Card className="border-2">
          <CardHeader className="space-y-1">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="rounded-xl bg-primary/10 p-2.5">
                  <CreditCard className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <CardTitle>Payment Method</CardTitle>
                  <CardDescription>Choose how you'd like to deposit</CardDescription>
                </div>
              </div>
              <Button variant="ghost" size="sm" className="gap-1 text-primary">
                <HelpCircle className="h-4 w-4" />
                Help
              </Button>
            </div>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="paystack" className="w-full">
              <TabsList className="grid w-full grid-cols-2 h-11">
                <TabsTrigger value="paystack" data-testid="tab-paystack" className="text-sm">
                  Paystack
                </TabsTrigger>
                <TabsTrigger value="mobile-money" data-testid="tab-mobile-money" className="text-sm">
                  <span className="flex items-center gap-2">
                    Mobile Money
                    <span className="text-xs bg-amber-500/20 text-amber-600 px-1.5 py-0.5 rounded">No Charge</span>
                  </span>
                </TabsTrigger>
              </TabsList>
              
              <TabsContent value="paystack" className="space-y-5 mt-6">
                <NetworkStatus networks={networks} lastUpdated="30s" />

                <div className="bg-amber-500/10 border-l-4 border-l-amber-500 rounded-lg p-4 flex items-start gap-3">
                  <HelpCircle className="h-5 w-5 text-amber-600 shrink-0 mt-0.5" />
                  <div>
                    <p className="text-sm font-medium text-amber-900 dark:text-amber-100">
                      Need assistance?{" "}
                      <button className="underline hover:no-underline font-semibold">
                        View deposit guide
                      </button>
                    </p>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="amount" className="text-sm font-medium">
                    Amount (GHS) - Minimum GHS 10.00
                  </Label>
                  <Input
                    id="amount"
                    type="number"
                    placeholder="Enter amount (min. 10.00)"
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                    min="10"
                    step="0.01"
                    className="h-12 text-base"
                    data-testid="input-amount"
                  />
                </div>

                {amount && parseFloat(amount) > 0 && (
                  <div className="space-y-3 p-4 bg-muted/30 border-2 rounded-lg">
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Amount:</span>
                      <span className="font-semibold">GHS {parseFloat(amount).toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Processing Fee (3%):</span>
                      <span className="font-semibold">GHS {fee}</span>
                    </div>
                    <Separator />
                    <div className="flex justify-between text-base font-bold">
                      <span>Total:</span>
                      <span className="text-primary text-lg">GHS {total}</span>
                    </div>
                  </div>
                )}

                <Button 
                  className="w-full h-12 text-base font-semibold" 
                  size="lg"
                  disabled={!amount || parseFloat(amount) < 10}
                  onClick={handlePaystackDeposit}
                  data-testid="button-deposit-now"
                >
                  Proceed to Payment
                </Button>

                <div className="rounded-lg bg-muted/30 p-3 space-y-1">
                  <p className="text-xs text-muted-foreground flex items-start gap-2">
                    <span className="mt-1 h-1 w-1 rounded-full bg-current shrink-0"></span>
                    <span>Minimum deposit: GHS 10.00</span>
                  </p>
                  <p className="text-xs text-muted-foreground flex items-start gap-2">
                    <span className="mt-1 h-1 w-1 rounded-full bg-current shrink-0"></span>
                    <span>3% processing fee applies to all deposits</span>
                  </p>
                  <p className="text-xs text-muted-foreground flex items-start gap-2">
                    <span className="mt-1 h-1 w-1 rounded-full bg-current shrink-0"></span>
                    <span>Payments processed securely via Paystack</span>
                  </p>
                </div>

                <Separator />

                <Button 
                  variant="outline" 
                  className="w-full gap-2 h-11"
                  onClick={() => console.log('View deposit history')}
                  data-testid="button-deposit-history"
                >
                  <History className="h-4 w-4" />
                  View Deposit History
                </Button>
              </TabsContent>

              <TabsContent value="mobile-money" className="space-y-5 mt-6">
                <div className="bg-red-500/10 border-l-4 border-l-red-500 rounded-lg p-4">
                  <div className="flex items-start gap-3">
                    <HelpCircle className="h-5 w-5 text-red-600 shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-semibold text-red-900 dark:text-red-100 mb-1">Minimum 100 GHS Required</h4>
                      <p className="text-sm text-red-900 dark:text-red-100">
                        Sending less than 100 GHS to this Mobile Money number will NOT be credited to your account. Please ensure you send at least 100 GHS for automatic credit.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-blue-500/10 border-2 border-blue-500/30 rounded-lg p-5 space-y-4">
                  <h3 className="font-semibold text-lg">Enter Transaction ID to Claim Funds</h3>
                  
                  <div className="space-y-2">
                    <Label htmlFor="transaction-id" className="text-sm font-medium">
                      Transaction ID
                    </Label>
                    <Input
                      id="transaction-id"
                      type="text"
                      placeholder="e.g., 67230465950"
                      value={transactionId}
                      onChange={(e) => setTransactionId(e.target.value)}
                      className="h-12 text-base font-mono"
                      data-testid="input-transaction-id"
                    />
                    <p className="text-xs text-muted-foreground">
                      Check your SMS from your network provider for the transaction ID
                    </p>
                  </div>

                  <Button 
                    className="w-full h-12 text-base font-semibold gap-2"
                    onClick={handleMomoVerify}
                    disabled={!transactionId.trim()}
                    data-testid="button-verify-claim"
                  >
                    <CheckCircle2 className="h-5 w-5" />
                    Verify & Claim
                  </Button>
                </div>

                <div className="bg-amber-500/10 border-2 border-amber-500/30 rounded-lg p-5 space-y-4">
                  <h3 className="font-semibold text-lg">Send Money To:</h3>
                  
                  <div className="space-y-3">
                    <div>
                      <p className="text-xs text-muted-foreground mb-2">Mobile Money Number</p>
                      <div className="flex items-center gap-2 p-4 bg-background/60 backdrop-blur-sm rounded-lg border-2">
                        <span className="text-2xl font-bold flex-1">{momoNumber}</span>
                        <Button
                          size="icon"
                          variant="ghost"
                          onClick={copyToClipboard}
                          data-testid="button-copy-number"
                        >
                          {copied ? (
                            <CheckCircle2 className="h-5 w-5 text-green-600" />
                          ) : (
                            <Copy className="h-5 w-5" />
                          )}
                        </Button>
                      </div>
                    </div>

                    <div>
                      <p className="text-xs text-muted-foreground mb-2">Recipient Name</p>
                      <div className="p-3 bg-background/60 backdrop-blur-sm rounded-lg border-2">
                        <p className="font-semibold">{momoName}</p>
                      </div>
                    </div>
                  </div>

                  <Button 
                    variant="outline"
                    className="w-full h-11 gap-2"
                    onClick={handleHowToDeposit}
                    data-testid="button-how-to-deposit"
                  >
                    <HelpCircle className="h-4 w-4" />
                    How to Deposit?
                  </Button>
                </div>

                <div className="rounded-lg bg-muted/30 p-4 space-y-2">
                  <h4 className="font-semibold text-sm mb-2">Tips:</h4>
                  <p className="text-xs text-muted-foreground flex items-start gap-2">
                    <span className="mt-1 h-1 w-1 rounded-full bg-current shrink-0"></span>
                    <span>Send any amount you want to deposit</span>
                  </p>
                  <p className="text-xs text-muted-foreground flex items-start gap-2">
                    <span className="mt-1 h-1 w-1 rounded-full bg-current shrink-0"></span>
                    <span>Funds are credited instantly after verification</span>
                  </p>
                  <p className="text-xs text-muted-foreground flex items-start gap-2">
                    <span className="mt-1 h-1 w-1 rounded-full bg-current shrink-0"></span>
                    <span>No extra charges - you pay exactly what you send</span>
                  </p>
                </div>
              </TabsContent>
            </Tabs>
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
