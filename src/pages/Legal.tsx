import { useState } from "react";
import { Search, ExternalLink, Shield, AlertTriangle, Bell, Info, FileText } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

const Legal = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const legalUpdates = [
    {
      id: 1,
      title: "New Law: Pharmacists Vaccination Authorization",
      description: "Pharmacists are now authorized to administer vaccinations under specific conditions.",
      date: "2024-02-15",
      isNew: true,
      link: "https://health.gov/vaccination-guidelines",
      category: "Pharmacist Rights"
    },
    {
      id: 2,
      title: "Medication X Restrictions Update",
      description: "New health regulations have imposed restrictions on Medication X dispensing.",
      date: "2024-02-10",
      isNew: true,
      link: "https://health.gov/medication-x-guidelines",
      category: "Medication Regulations"
    }
  ];

  const externalResources = [
    {
      id: 1,
      title: "GDPR Compliance Guidelines",
      description: "Official guidelines for handling patient data under GDPR",
      icon: Shield,
      link: "https://gdpr.eu/healthcare"
    },
    {
      id: 2,
      title: "Professional Guidelines",
      description: "Best practices and legal requirements for pharmacists",
      icon: FileText,
      link: "https://pharmacist-guidelines.org"
    },
    {
      id: 3,
      title: "Medication Regulations Database",
      description: "Latest updates on medication approvals and restrictions",
      icon: Info,
      link: "https://medication-regulations.org"
    }
  ];

  const filteredUpdates = legalUpdates.filter(update =>
    update.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    update.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="container mx-auto p-4 space-y-6">
      {/* Alert Bar for Critical Updates */}
      <Alert variant="destructive" className="mb-6">
        <AlertTriangle className="h-4 w-4" />
        <AlertTitle>Important Legal Update</AlertTitle>
        <AlertDescription>
          New vaccination authorization laws are now in effect. Please review the updated guidelines.
        </AlertDescription>
      </Alert>

      {/* Profile Section with Avatar */}
      <div className="flex items-center gap-4 mb-6">
        <Avatar className="h-12 w-12">
          <AvatarImage src="/lovable-uploads/b821831b-15e8-4418-baae-aae80d51cbdf.png" alt="Legal advisor" data-component="AvatarImage" />
          <AvatarFallback>LA</AvatarFallback>
        </Avatar>
        <div>
          <h3 className="font-semibold">Legal Advisor</h3>
          <p className="text-sm text-muted-foreground">Available for consultation</p>
        </div>
      </div>

      {/* Search and Filter Section */}
      <div className="flex items-center space-x-4 mb-6">
        <div className="relative flex-1">
          <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search legal updates..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-8"
          />
        </div>
      </div>

      {/* Main Content */}
      <div className="grid gap-6 md:grid-cols-[2fr_1fr]">
        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Bell className="h-5 w-5" />
                Recent Legal Updates
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {filteredUpdates.map((update) => (
                <Card key={update.id}>
                  <CardContent className="pt-6">
                    <div className="flex items-start justify-between">
                      <div className="space-y-2">
                        <div className="flex items-center gap-2">
                          <h3 className="font-semibold">{update.title}</h3>
                          {update.isNew && (
                            <Badge variant="secondary" className="bg-green-100 text-green-800">
                              New
                            </Badge>
                          )}
                        </div>
                        <p className="text-sm text-muted-foreground">{update.description}</p>
                        <div className="flex items-center gap-2">
                          <Badge variant="outline">{update.category}</Badge>
                          <span className="text-sm text-muted-foreground">{update.date}</span>
                        </div>
                      </div>
                      <a
                        href={update.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1 text-sm text-blue-600 hover:text-blue-800"
                      >
                        View Details
                        <ExternalLink className="h-4 w-4" />
                      </a>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </CardContent>
          </Card>
        </div>
        
        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <ExternalLink className="h-5 w-5" />
                External Resources
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {externalResources.map((resource) => (
                <a
                  key={resource.id}
                  href={resource.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block p-4 rounded-lg border hover:bg-accent transition-colors"
                >
                  <div className="flex items-start gap-3">
                    <resource.icon className="h-5 w-5 mt-1" />
                    <div>
                      <h3 className="font-medium">{resource.title}</h3>
                      <p className="text-sm text-muted-foreground">{resource.description}</p>
                    </div>
                  </div>
                </a>
              ))}
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Need Legal Assistance?</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-4">
                Contact our legal team for clarification on any regulatory matters.
              </p>
              <a
                href="mailto:legal@pharmassist.com"
                className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-800"
              >
                Contact Legal Team
                <ExternalLink className="h-4 w-4" />
              </a>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Legal;
