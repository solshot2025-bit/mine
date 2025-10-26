import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { RefreshCw } from "lucide-react";
import { Button } from "@/components/ui/button";

interface NetworkStatusProps {
  networks: {
    name: string;
    status: "available" | "unavailable";
  }[];
  lastUpdated?: string;
}

export default function NetworkStatus({ networks, lastUpdated }: NetworkStatusProps) {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-3">
        <CardTitle className="text-base font-semibold flex items-center gap-2">
          Network Availability
        </CardTitle>
        <Button size="icon" variant="ghost" className="h-7 w-7">
          <RefreshCw className="h-4 w-4" />
        </Button>
      </CardHeader>
      <CardContent className="space-y-2">
        {networks.map((network) => (
          <div 
            key={network.name} 
            className="flex items-center justify-between py-2"
            data-testid={`network-${network.name.toLowerCase()}`}
          >
            <div className="flex items-center gap-2">
              <div className={`h-2 w-2 rounded-full ${
                network.status === "available" ? "bg-green-500" : "bg-red-500"
              }`} />
              <span className="text-sm font-medium">{network.name}</span>
            </div>
            <Badge 
              variant={network.status === "available" ? "default" : "destructive"}
              className="text-xs"
            >
              {network.status === "available" ? "Available" : "Out of Stock"}
            </Badge>
          </div>
        ))}
        {lastUpdated && (
          <p className="text-xs text-muted-foreground pt-2 border-t">
            Live status • Updates every {lastUpdated}
          </p>
        )}
      </CardContent>
    </Card>
  );
}
