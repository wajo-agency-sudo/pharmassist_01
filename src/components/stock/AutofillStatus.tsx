import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { useToast } from "@/components/ui/use-toast";
import { useState } from "react";

export function AutofillStatus() {
  const [isEnabled, setIsEnabled] = useState(true);
  const { toast } = useToast();

  const handleToggle = (checked: boolean) => {
    setIsEnabled(checked);
    toast({
      title: checked ? "Autofill enabled" : "Autofill disabled",
      description: checked
        ? "Stock will be automatically replenished when low"
        : "Automatic stock replenishment has been disabled",
    });
  };

  return (
    <div className="space-y-4">
      <div className="flex items-center space-x-2">
        <Switch
          id="autofill"
          checked={isEnabled}
          onCheckedChange={handleToggle}
        />
        <Label htmlFor="autofill">Automatic Stock Replenishment</Label>
      </div>
      
      {isEnabled && (
        <p className="text-sm text-muted-foreground">
          Autofill is currently active. Low stock items will be automatically reordered.
        </p>
      )}
    </div>
  );
}