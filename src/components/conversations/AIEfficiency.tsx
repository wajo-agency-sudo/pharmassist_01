import { Card } from "@/components/ui/card";
import { Clock, Brain, Zap } from "lucide-react";

export function AIEfficiency() {
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card className="p-4 flex items-center space-x-4">
          <Clock className="h-8 w-8 text-primary" />
          <div>
            <p className="text-sm text-muted-foreground">Time Saved</p>
            <p className="text-2xl font-bold">48hrs</p>
          </div>
        </Card>
        
        <Card className="p-4 flex items-center space-x-4">
          <Brain className="h-8 w-8 text-primary" />
          <div>
            <p className="text-sm text-muted-foreground">AI Handled</p>
            <p className="text-2xl font-bold">75%</p>
          </div>
        </Card>
        
        <Card className="p-4 flex items-center space-x-4">
          <Zap className="h-8 w-8 text-primary" />
          <div>
            <p className="text-sm text-muted-foreground">Response Time</p>
            <p className="text-2xl font-bold">2min</p>
          </div>
        </Card>
      </div>

      <div className="bg-muted p-4 rounded-lg">
        <h3 className="font-medium mb-2">AI Impact Overview</h3>
        <p className="text-sm text-muted-foreground">
          AI automation has reduced average response time from 15 minutes to 2 minutes, 
          handling 75% of routine inquiries automatically. This results in significant time 
          savings for pharmacists, allowing focus on complex cases.
        </p>
      </div>
    </div>
  );
}