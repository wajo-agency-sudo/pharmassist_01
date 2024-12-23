import { MessageCircle, Users, TrendingUp, Clock } from "lucide-react";
import { DashboardCard } from "@/components/DashboardCard";
import { ConversationList } from "@/components/ConversationList";
import { MetricsChart } from "@/components/MetricsChart";

const Index = () => {
  return (
    <div className="p-8">
      <div className="space-y-8">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">PharmAssist Dashboard</h1>
          <p className="text-muted-foreground">Welcome back! Here's your pharmacy's overview.</p>
        </div>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          <DashboardCard
            title="Active Conversations"
            value="12"
            icon={<MessageCircle className="h-4 w-4 text-primary" />}
            description="3 unread messages"
          />
          <DashboardCard
            title="Total Patients"
            value="1,234"
            icon={<Users className="h-4 w-4 text-primary" />}
            description="+12 this week"
          />
          <DashboardCard
            title="Conversion Rate"
            value="68%"
            icon={<TrendingUp className="h-4 w-4 text-success" />}
            description="+2.5% from last week"
          />
          <DashboardCard
            title="Avg. Response Time"
            value="4.2m"
            icon={<Clock className="h-4 w-4 text-primary" />}
            description="Within target range"
          />
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          <div className="rounded-lg border bg-card p-6">
            <h2 className="text-lg font-semibold mb-4">Weekly Conversations</h2>
            <MetricsChart />
          </div>
          <div className="rounded-lg border bg-card p-6">
            <h2 className="text-lg font-semibold mb-4">Recent Conversations</h2>
            <ConversationList />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;