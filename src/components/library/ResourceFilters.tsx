import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Separator } from "@/components/ui/separator";
import { Checkbox } from "@/components/ui/checkbox";

export function ResourceFilters() {
  return (
    <Card className="h-fit">
      <CardHeader>
        <CardTitle>Filters</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="space-y-4">
          <Label>Resource Type</Label>
          <RadioGroup defaultValue="all">
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="all" id="all" />
              <Label htmlFor="all">All Resources</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="leaflets" id="leaflets" />
              <Label htmlFor="leaflets">Medication Leaflets</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="documents" id="documents" />
              <Label htmlFor="documents">Linked Documents</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="videos" id="videos" />
              <Label htmlFor="videos">Video Instructions</Label>
            </div>
          </RadioGroup>
        </div>

        <Separator />

        <div className="space-y-4">
          <Label>Language</Label>
          <div className="space-y-2">
            <div className="flex items-center space-x-2">
              <Checkbox id="en" />
              <Label htmlFor="en">English</Label>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox id="nl" />
              <Label htmlFor="nl">Dutch</Label>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox id="fr" />
              <Label htmlFor="fr">French</Label>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox id="de" />
              <Label htmlFor="de">German</Label>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}