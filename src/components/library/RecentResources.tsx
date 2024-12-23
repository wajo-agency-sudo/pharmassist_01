import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { FileText, Video, File } from "lucide-react";

export function RecentResources() {
  // Mock data - replace with actual data in production
  const recentResources = [
    {
      id: 1,
      title: "Paracetamol Usage Guidelines",
      type: "leaflet",
      accessedAt: "2 hours ago",
    },
    {
      id: 2,
      title: "Inhaler Technique Video",
      type: "video",
      accessedAt: "Yesterday",
    },
    {
      id: 3,
      title: "Medication Storage Guidelines",
      type: "document",
      accessedAt: "2 days ago",
    },
  ];

  const getIcon = (type: string) => {
    switch (type) {
      case "leaflet":
        return <FileText className="h-4 w-4" />;
      case "video":
        return <Video className="h-4 w-4" />;
      default:
        return <File className="h-4 w-4" />;
    }
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Recently Accessed</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-2">
          {recentResources.map((resource) => (
            <Button
              key={resource.id}
              variant="ghost"
              className="w-full justify-start gap-2 text-left"
            >
              {getIcon(resource.type)}
              <div className="flex-1">
                <div className="font-medium">{resource.title}</div>
                <div className="text-xs text-muted-foreground">{resource.accessedAt}</div>
              </div>
            </Button>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}