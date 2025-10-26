import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";

interface Transaction {
  id: string;
  phoneNumber: string;
  method: string;
  network: string;
  data: string;
  amount: number;
  status: "success" | "pending" | "failed";
  timestamp: Date;
}

interface TransactionTableProps {
  transactions: Transaction[];
  onViewAll: () => void;
}

export default function TransactionTable({ transactions, onViewAll }: TransactionTableProps) {
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
    <Card>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-4">
        <CardTitle className="text-xl font-semibold">Recent Transactions</CardTitle>
        <Button 
          variant="ghost" 
          size="sm" 
          className="gap-1"
          onClick={onViewAll}
          data-testid="button-view-all"
        >
          View All
          <ArrowRight className="h-4 w-4" />
        </Button>
      </CardHeader>
      <CardContent>
        {transactions.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-muted-foreground" data-testid="text-no-transactions">No transactions today</p>
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b text-sm text-muted-foreground">
                  <th className="text-left pb-3 font-medium">PHONE #</th>
                  <th className="text-left pb-3 font-medium">METHOD</th>
                  <th className="text-left pb-3 font-medium hidden md:table-cell">TIME</th>
                  <th className="text-left pb-3 font-medium">NET</th>
                  <th className="text-left pb-3 font-medium hidden sm:table-cell">DATA</th>
                  <th className="text-right pb-3 font-medium">AMT</th>
                </tr>
              </thead>
              <tbody>
                {transactions.map((transaction) => (
                  <tr 
                    key={transaction.id} 
                    className="border-b last:border-0 hover-elevate"
                    data-testid={`row-transaction-${transaction.id}`}
                  >
                    <td className="py-3 text-sm font-medium">{transaction.phoneNumber}</td>
                    <td className="py-3 text-sm">{transaction.method}</td>
                    <td className="py-3 text-sm text-muted-foreground hidden md:table-cell">
                      {transaction.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                    </td>
                    <td className="py-3 text-sm">{transaction.network}</td>
                    <td className="py-3 text-sm hidden sm:table-cell">{transaction.data}</td>
                    <td className="py-3 text-sm font-semibold text-right">
                      <div className="flex items-center justify-end gap-2">
                        GH₵{transaction.amount.toFixed(2)}
                        <Badge className={getStatusColor(transaction.status)} variant="outline">
                          {transaction.status}
                        </Badge>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
