import { Button } from "@/components/ui/button";
import { Database, RefreshCw } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";

export function ThirdPartyIntegration() {
  const { toast } = useToast();

  const handleRefresh = () => {
    toast({
      title: "Stock data updated",
      description: "Latest stock information has been fetched from the third-party app.",
    });
  };

  return (
    <div className="space-y-4">
      <div className="flex items-center gap-2 text-success">
        <Database className="h-4 w-4" />
        <span>Connected to Third-Party App</span>
      </div>
      
      <div className="flex items-center gap-2">
        <Button onClick={handleRefresh} variant="outline" size="sm">
          <RefreshCw className="h-4 w-4 mr-2" />
          Refresh Stock Data
        </Button>
      </div>
    </div>
  );
}