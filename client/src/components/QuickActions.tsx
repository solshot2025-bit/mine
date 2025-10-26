import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  ShoppingCart, 
  BarChart3, 
  Database, 
  CreditCard, 
  History, 
  FileText, 
  Store,
  Package
} from "lucide-react";

interface QuickActionsProps {
  onActionClick: (action: string) => void;
}

export default function QuickActions({ onActionClick }: QuickActionsProps) {
  const actions = [
    { id: 'new-order', label: 'New Order', icon: ShoppingCart, color: 'bg-yellow-500/10 hover:bg-yellow-500/20 text-yellow-600' },
    { id: 'reports', label: 'Reports', icon: BarChart3, color: 'bg-blue-500/10 hover:bg-blue-500/20 text-blue-600' },
    { id: 'data', label: 'Data', icon: Database, color: 'bg-green-500/10 hover:bg-green-500/20 text-green-600' },
    { id: 'credit', label: 'Credit', icon: CreditCard, color: 'bg-orange-500/10 hover:bg-orange-500/20 text-orange-600' },
    { id: 'trans', label: 'Trans', icon: History, color: 'bg-purple-500/10 hover:bg-purple-500/20 text-purple-600' },
    { id: 'report', label: 'Report', icon: FileText, color: 'bg-pink-500/10 hover:bg-pink-500/20 text-pink-600' },
    { id: 'store', label: 'Store', icon: Store, color: 'bg-cyan-500/10 hover:bg-cyan-500/20 text-cyan-600' },
    { id: 'bulk', label: 'Bulk', icon: Package, color: 'bg-red-500/10 hover:bg-red-500/20 text-red-600' },
  ];

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-xl font-semibold">Quick Actions</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-4 sm:grid-cols-4 md:grid-cols-8 gap-3">
          {actions.map((action) => {
            const Icon = action.icon;
            return (
              <Button
                key={action.id}
                variant="ghost"
                className={`h-auto flex-col gap-2 p-4 ${action.color}`}
                onClick={() => onActionClick(action.id)}
                data-testid={`button-action-${action.id}`}
              >
                <Icon className="h-6 w-6" />
                <span className="text-xs font-medium">{action.label}</span>
              </Button>
            );
          })}
        </div>
      </CardContent>
    </Card>
  );
}
