import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const mockKeywords = [
  { text: "flu", size: 40 },
  { text: "prescription", size: 35 },
  { text: "covid", size: 30 },
  { text: "allergy", size: 28 },
  { text: "headache", size: 25 },
  { text: "vaccine", size: 22 },
  { text: "cold", size: 20 },
  { text: "vitamins", size: 18 },
  { text: "pain", size: 15 },
];

export function KeywordTrends() {
  return (
    <div className="space-y-4">
      <div className="flex justify-end">
        <Select defaultValue="week">
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Select time period" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="week">Last 7 days</SelectItem>
            <SelectItem value="month">Last 30 days</SelectItem>
            <SelectItem value="year">Last year</SelectItem>
          </SelectContent>
        </Select>
      </div>
      
      <div className="flex flex-wrap gap-2 p-4">
        {mockKeywords.map((keyword, index) => (
          <span
            key={index}
            className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary"
            style={{
              fontSize: `${keyword.size / 10}rem`,
            }}
          >
            {keyword.text}
          </span>
        ))}
      </div>
    </div>
  );
}