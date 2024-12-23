import { Card } from "@/components/ui/card";
import { TrendingUp, AlertTriangle } from "lucide-react";

const mockTrends = [
  {
    type: "trend",
    title: "Increasing Flu Inquiries",
    description: "20% increase in flu-related questions this week",
    icon: TrendingUp,
  },
  {
    type: "alert",
    title: "Prepare for Season",
    description: "Expected spike in allergy questions next week",
    icon: AlertTriangle,
  },
];

export function TrendsInsights() {
  return (
    <div className="space-y-4">
      {mockTrends.map((trend, index) => (
        <Card key={index} className="p-4">
          <div className="flex items-start space-x-4">
            <div className={`p-2 rounded-full ${
              trend.type === 'trend' ? 'bg-primary/10' : 'bg-warning/10'
            }`}>
              <trend.icon className={`h-4 w-4 ${
                trend.type === 'trend' ? 'text-primary' : 'text-warning'
              }`} />
            </div>
            <div>
              <h3 className="font-medium">{trend.title}</h3>
              <p className="text-sm text-muted-foreground">{trend.description}</p>
            </div>
          </div>
        </Card>
      ))}
    </div>
  );
}