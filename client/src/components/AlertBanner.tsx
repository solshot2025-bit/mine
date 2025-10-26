import { AlertTriangle, Info, X } from "lucide-react";
import { Button } from "@/components/ui/button";

interface AlertBannerProps {
  type: "warning" | "info" | "notice";
  title: string;
  message: string;
  details?: string[];
  onDismiss?: () => void;
}

export default function AlertBanner({ type, title, message, details, onDismiss }: AlertBannerProps) {
  const getColors = () => {
    switch (type) {
      case "warning":
        return "bg-red-500/10 border-l-4 border-l-red-500 text-red-600 dark:text-red-400";
      case "info":
        return "bg-purple-500/10 border-l-4 border-l-purple-500 text-purple-600 dark:text-purple-400";
      case "notice":
        return "bg-blue-500/10 border-l-4 border-l-blue-500 text-blue-600 dark:text-blue-400";
      default:
        return "bg-muted border-l-4 border-l-border text-foreground";
    }
  };

  const Icon = type === "warning" ? AlertTriangle : Info;

  return (
    <div className={`border rounded-lg p-4 ${getColors()}`}>
      <div className="flex items-start justify-between gap-3">
        <div className="flex items-start gap-3 flex-1">
          <Icon className="h-5 w-5 mt-0.5 shrink-0" />
          <div className="flex-1">
            <h3 className="font-semibold mb-1">{title}</h3>
            <p className="text-sm opacity-90 mb-2">{message}</p>
            {details && details.length > 0 && (
              <ul className="text-sm opacity-80 space-y-1.5 mt-3">
                {details.map((detail, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <span className="mt-1.5 h-1 w-1 rounded-full bg-current shrink-0"></span>
                    <span>{detail}</span>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
        {onDismiss && (
          <Button 
            size="icon" 
            variant="ghost" 
            className="h-6 w-6 shrink-0"
            onClick={onDismiss}
            data-testid="button-dismiss"
          >
            <X className="h-4 w-4" />
          </Button>
        )}
      </div>
    </div>
  );
}
