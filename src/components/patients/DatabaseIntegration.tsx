import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Database, Link2, RefreshCw } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";

export function DatabaseIntegration() {
  const { toast } = useToast();

  const handleSync = () => {
    toast({
      title: "Sync initiated",
      description: "Patient data is being synchronized with connected databases.",
    });
  };

  const handleConnect = () => {
    toast({
      title: "Connect database",
      description: "Opening database connection wizard...",
    });
  };

  return (
    <Card className="bg-white">
      <CardHeader>
        <CardTitle className="text-lg font-semibold flex items-center gap-2">
          <Database className="h-5 w-5" />
          Database Integrations
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-4">
          <div className="flex items-center justify-between p-3 rounded-lg border">
            <div className="flex items-center gap-2">
              <Database className="h-4 w-4 text-green-500" />
              <span className="font-medium">Primary EHR System</span>
              <Badge variant="outline" className="ml-2">Connected</Badge>
            </div>
            <Button variant="outline" size="sm" onClick={handleSync}>
              <RefreshCw className="h-4 w-4 mr-2" />
              Sync
            </Button>
          </div>

          <div className="flex items-center justify-between p-3 rounded-lg border">
            <div className="flex items-center gap-2">
              <Database className="h-4 w-4 text-muted-foreground" />
              <span className="font-medium">Connect New Database</span>
            </div>
            <Button variant="outline" size="sm" onClick={handleConnect}>
              <Link2 className="h-4 w-4 mr-2" />
              Connect
            </Button>
          </div>
        </div>

        <div className="text-sm text-muted-foreground">
          Connect to external healthcare databases to sync patient records automatically.
        </div>
      </CardContent>
    </Card>
  );
}