import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { AlertCircle, Info, Megaphone } from "lucide-react";
import { Separator } from "@/components/ui/separator";

interface NoticeModalProps {
  open: boolean;
  onClose: () => void;
}

export default function NoticeModal({ open, onClose }: NoticeModalProps) {
  // TODO: This will be fetched from backend later
  const notices = [
    {
      id: 1,
      type: 'important' as const,
      title: 'Service Maintenance Notice',
      message: 'Scheduled maintenance on Sunday, 3:00 AM - 5:00 AM. Some services may be temporarily unavailable.',
      date: 'Oct 25, 2025',
    },
    {
      id: 2,
      type: 'info' as const,
      title: 'New Features Available',
      message: 'Check out our new bulk purchase feature and enhanced transaction history.',
      date: 'Oct 24, 2025',
    },
  ];

  const getIcon = (type: string) => {
    switch (type) {
      case 'important':
        return <AlertCircle className="h-5 w-5 text-amber-600" />;
      case 'info':
        return <Info className="h-5 w-5 text-blue-600" />;
      default:
        return <Megaphone className="h-5 w-5 text-primary" />;
    }
  };

  const getBadgeVariant = (type: string) => {
    switch (type) {
      case 'important':
        return 'bg-amber-500/20 text-amber-600 border-amber-500/30';
      case 'info':
        return 'bg-blue-500/20 text-blue-600 border-blue-500/30';
      default:
        return 'default';
    }
  };

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-2xl max-h-[80vh] overflow-y-auto custom-scrollbar">
        <DialogHeader>
          <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
            <Megaphone className="h-6 w-6 text-primary" />
          </div>
          <DialogTitle className="text-center text-2xl">Important Notices</DialogTitle>
          <DialogDescription className="text-center">
            Stay updated with the latest announcements
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-4 py-4">
          {notices.map((notice, index) => (
            <div key={notice.id}>
              <div className="space-y-3">
                <div className="flex items-start justify-between gap-3">
                  <div className="flex items-start gap-3 flex-1">
                    <div className="rounded-lg bg-muted p-2 mt-1">
                      {getIcon(notice.type)}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <h3 className="font-semibold text-base">{notice.title}</h3>
                        <Badge variant="outline" className={getBadgeVariant(notice.type)}>
                          {notice.type}
                        </Badge>
                      </div>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {notice.message}
                      </p>
                      <p className="text-xs text-muted-foreground mt-2">
                        {notice.date}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              {index < notices.length - 1 && <Separator className="mt-4" />}
            </div>
          ))}
        </div>

        <div className="flex justify-end pt-4">
          <Button onClick={onClose} data-testid="button-close-notices">
            Got it
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
