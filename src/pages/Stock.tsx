import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { StockOverview } from "@/components/stock/StockOverview";
import { StockValue } from "@/components/stock/StockValue";
import { AutofillStatus } from "@/components/stock/AutofillStatus";
import { ThirdPartyIntegration } from "@/components/stock/ThirdPartyIntegration";

const Stock = () => {
  return (
    <div className="container mx-auto p-6 space-y-6">
      <h1 className="text-3xl font-bold mb-6">Stock Management</h1>
      
      <div className="grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Stock Overview</CardTitle>
          </CardHeader>
          <CardContent>
            <StockOverview />
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Stock Value by Category</CardTitle>
          </CardHeader>
          <CardContent>
            <StockValue />
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Third-Party Integration</CardTitle>
          </CardHeader>
          <CardContent>
            <ThirdPartyIntegration />
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Autofill Status</CardTitle>
          </CardHeader>
          <CardContent>
            <AutofillStatus />
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Stock;