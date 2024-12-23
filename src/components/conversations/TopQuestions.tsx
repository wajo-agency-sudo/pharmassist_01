import { Progress } from "@/components/ui/progress";

const mockTopQuestions = [
  {
    question: "What can I take for a cold?",
    percentage: 25,
    example: "Common remedies include decongestants and antihistamines",
  },
  {
    question: "When do you close?",
    percentage: 20,
    example: "Opening hours inquiry",
  },
  {
    question: "Do you have COVID tests?",
    percentage: 15,
    example: "Availability of rapid antigen tests",
  },
  {
    question: "Can I renew my prescription?",
    percentage: 12,
    example: "Prescription renewal process",
  },
  {
    question: "What's good for allergies?",
    percentage: 10,
    example: "Seasonal allergy relief options",
  },
];

export function TopQuestions() {
  return (
    <div className="space-y-4">
      {mockTopQuestions.map((item, index) => (
        <div key={index} className="space-y-2">
          <div className="flex justify-between text-sm">
            <span className="font-medium">{item.question}</span>
            <span className="text-muted-foreground">{item.percentage}%</span>
          </div>
          <Progress value={item.percentage} className="h-2" />
          <p className="text-xs text-muted-foreground">{item.example}</p>
        </div>
      ))}
    </div>
  );
}