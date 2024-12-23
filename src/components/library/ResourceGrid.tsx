import { FileText, Video, File, Share2, Download, Printer } from "lucide-react";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

interface ResourceGridProps {
  type?: "leaflet" | "document" | "video";
}

export function ResourceGrid({ type }: ResourceGridProps) {
  // Mock data - replace with actual data in production
  const resources = [
    {
      id: 1,
      title: "Paracetamol Usage Guidelines",
      type: "leaflet",
      language: "English",
      isNew: true,
      preview: "Important information about dosage and side effects...",
    },
    {
      id: 2,
      title: "Inhaler Technique",
      type: "video",
      language: "Dutch",
      isNew: false,
      preview: "Step-by-step guide for proper inhaler usage...",
    },
    {
      id: 3,
      title: "Regulatory Guidelines 2024",
      type: "document",
      language: "English",
      isNew: true,
      preview: "Updated regulations for medication dispensing...",
    },
  ].filter((resource) => !type || resource.type === type);

  const getIcon = (resourceType: string) => {
    switch (resourceType) {
      case "leaflet":
        return <FileText className="h-6 w-6" />;
      case "video":
        return <Video className="h-6 w-6" />;
      default:
        return <File className="h-6 w-6" />;
    }
  };

  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {resources.map((resource) => (
        <Card key={resource.id} className="flex flex-col">
          <CardHeader>
            <div className="flex items-start justify-between">
              {getIcon(resource.type)}
              <div className="flex gap-2">
                {resource.isNew && (
                  <Badge variant="secondary" className="bg-green-100 text-green-800">
                    New
                  </Badge>
                )}
                <Badge variant="outline">{resource.language}</Badge>
              </div>
            </div>
            <CardTitle className="line-clamp-2">{resource.title}</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground line-clamp-3">
              {resource.preview}
            </p>
          </CardContent>
          <CardFooter className="mt-auto border-t pt-4">
            <div className="flex justify-between w-full">
              <Button variant="outline" size="icon">
                <Share2 className="h-4 w-4" />
              </Button>
              <Button variant="outline" size="icon">
                <Download className="h-4 w-4" />
              </Button>
              <Button variant="outline" size="icon">
                <Printer className="h-4 w-4" />
              </Button>
            </div>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
}