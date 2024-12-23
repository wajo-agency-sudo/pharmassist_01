import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { SalesOverview } from "@/components/sales/SalesOverview";
import { SalesBreakdown } from "@/components/sales/SalesBreakdown";
import { ConversionFunnel } from "@/components/sales/ConversionFunnel";
import { ProductSales } from "@/components/sales/ProductSales";
import { ServiceSales } from "@/components/sales/ServiceSales";
import { SalesTrends } from "@/components/sales/SalesTrends";

export default function Sales() {
  return (
    <div className="flex flex-col gap-6 p-4 md:p-6">
      <h1 className="text-2xl font-bold">Sales Dashboard</h1>
      
      <div className="grid gap-6 md:grid-cols-2">
        <SalesOverview />
        <SalesBreakdown />
      </div>
      
      <div className="grid gap-6 md:grid-cols-2">
        <ConversionFunnel />
        <ProductSales />
      </div>
      
      <div className="grid gap-6 md:grid-cols-2">
        <ServiceSales />
        <SalesTrends />
      </div>
    </div>
  );
}