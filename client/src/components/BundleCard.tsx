import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Wifi } from "lucide-react";

interface BundleCardProps {
  id: string;
  size: string;
  price: number;
  duration: string;
  provider: string;
  onSelect: (bundleId: string) => void;
}

export default function BundleCard({ id, size, price, duration, provider, onSelect }: BundleCardProps) {
  return (
    <Card className="overflow-hidden hover-elevate transition-all border-2 group" data-testid={`card-bundle-${id}`}>
      <div className="p-5 bg-gradient-to-br from-card to-muted/30">
        <div className="flex items-start justify-between mb-4">
          <div className="rounded-xl bg-primary/10 p-3">
            <Wifi className="h-6 w-6 text-primary" />
          </div>
          <div className="text-right">
            <p className="text-xs text-muted-foreground uppercase tracking-wide font-medium">{provider}</p>
          </div>
        </div>
        
        <div className="mb-4">
          <h3 className="text-3xl font-bold text-foreground mb-1">{size}</h3>
          <p className="text-sm text-muted-foreground">{duration}</p>
        </div>
        
        <div className="flex items-end justify-between mb-4">
          <div>
            <p className="text-xs text-muted-foreground uppercase tracking-wide">Price</p>
            <p className="text-2xl font-bold text-primary">GH₵ {price.toFixed(2)}</p>
          </div>
        </div>
        
        <Button 
          className="w-full" 
          variant="default"
          onClick={() => onSelect(id)}
          data-testid={`button-select-${id}`}
        >
          Select Bundle
        </Button>
      </div>
    </Card>
  );
}
