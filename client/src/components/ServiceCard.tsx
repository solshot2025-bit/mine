import { Card } from "@/components/ui/card";
import { LucideIcon } from "lucide-react";
import { ArrowRight } from "lucide-react";

interface ServiceCardProps {
  name: string;
  icon: LucideIcon;
  color: string;
  onClick: () => void;
}

export default function ServiceCard({ name, icon: Icon, color, onClick }: ServiceCardProps) {
  return (
    <Card 
      className="cursor-pointer hover-elevate active-elevate-2 transition-all overflow-hidden group border-2"
      onClick={onClick}
      data-testid={`card-service-${name.toLowerCase()}`}
    >
      <div className={`p-6 flex flex-col items-start justify-between min-h-[180px] ${color}`}>
        <div className="w-full flex items-center justify-between mb-4">
          <div className="rounded-2xl bg-white/20 backdrop-blur-sm p-4">
            <Icon className="h-8 w-8 text-white" />
          </div>
          <ArrowRight className="h-5 w-5 text-white/70 group-hover:text-white group-hover:translate-x-1 transition-all" />
        </div>
        <div>
          <h3 className="text-xl font-bold text-white mb-1">{name}</h3>
          <p className="text-sm text-white/80">Browse available bundles</p>
        </div>
      </div>
    </Card>
  );
}
