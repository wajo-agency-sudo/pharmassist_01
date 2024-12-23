import { ScrollArea } from "@/components/ui/scroll-area";
import { Progress } from "@/components/ui/progress";

const stockAlerts = [
  {
    id: 1,
    name: "Paracetamol 500mg",
    stock: 15,
    threshold: 50,
    status: "critical",
  },
  {
    id: 2,
    name: "Ibuprofen 200mg",
    stock: 25,
    threshold: 50,
    status: "low",
  },
  {
    id: 3,
    name: "Amoxicillin 250mg",
    stock: 10,
    threshold: 40,
    status: "critical",
  },
];

export function StockAlerts() {
  return (
    <ScrollArea className="h-[200px]">
      <div className="space-y-4">
        {stockAlerts.map((item) => (
          <div key={item.id} className="space-y-2">
            <div className="flex justify-between text-sm">
              <span className="font-medium">{item.name}</span>
              <span className={item.status === "critical" ? "text-destructive" : "text-warning"}>
                {item.stock} left
              </span>
            </div>
            <Progress
              value={(item.stock / item.threshold) * 100}
              className={item.status === "critical" ? "bg-destructive/20" : "bg-warning/20"}
            />
          </div>
        ))}
      </div>
    </ScrollArea>
  );
}