import { MessageCircle, Package, TrendingUp, AlertTriangle, ArrowRight } from "lucide-react";
import { DashboardCard } from "@/components/DashboardCard";
import { Button } from "@/components/ui/button";
import { SalesTrendChart } from "@/components/SalesTrendChart";
import { StockAlerts } from "@/components/StockAlerts";
import { PendingInquiries } from "@/components/PendingInquiries";

const Index = () => {
  return (
    <div className="p-8 space-y-8">
      <div className="flex items-center gap-4">
        <img 
          src="/lovable-uploads/fcee0f55-0090-4be3-a7a2-81e7ca162465.png" 
          alt="PharmAssist Logo" 
          className="h-12 mix-blend-multiply"
        />
        <p className="text-muted-foreground">Welcome back! Here's your pharmacy's overview.</p>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <DashboardCard
          title="Pending Inquiries"
          value="8"
          icon={<MessageCircle className="h-4 w-4 text-destructive" />}
          description="3 urgent inquiries"
        />
        <DashboardCard
          title="Low Stock Items"
          value="12"
          icon={<Package className="h-4 w-4 text-warning" />}
          description="5 items critically low"
        />
        <DashboardCard
          title="Sales Growth"
          value="+15%"
          icon={<TrendingUp className="h-4 w-4 text-success" />}
          description="Compared to last month"
        />
        <DashboardCard
          title="Expiring Soon"
          value="6"
          icon={<AlertTriangle className="h-4 w-4 text-warning" />}
          description="Items expiring this week"
        />
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <div className="col-span-2">
          <div className="rounded-lg border bg-white p-6">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-semibold">Sales Trends</h2>
              <Button variant="outline" size="sm">
                View Details <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
            <SalesTrendChart />
          </div>
        </div>
        
        <div className="space-y-6">
          <div className="rounded-lg border bg-white p-6">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-semibold">Pending Inquiries</h2>
              <Button variant="outline" size="sm">
                View All <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
            <PendingInquiries />
          </div>

          <div className="rounded-lg border bg-white p-6">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-semibold">Stock Alerts</h2>
              <Button variant="outline" size="sm">
                Manage Stock <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
            <StockAlerts />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;