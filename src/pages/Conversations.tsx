import { Card } from "@/components/ui/card";
import { ConversationVolume } from "@/components/conversations/ConversationVolume";
import { TopQuestions } from "@/components/conversations/TopQuestions";
import { KeywordTrends } from "@/components/conversations/KeywordTrends";
import { QuestionHandling } from "@/components/conversations/QuestionHandling";
import { AIEfficiency } from "@/components/conversations/AIEfficiency";
import { TrendsInsights } from "@/components/conversations/TrendsInsights";

const Conversations = () => {
  return (
    <div className="p-8 space-y-8">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Conversations</h1>
        <p className="text-muted-foreground">Track and analyze patient inquiries and AI performance</p>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <Card className="p-6">
          <h2 className="text-lg font-semibold mb-4">Conversation Volume</h2>
          <ConversationVolume />
        </Card>

        <Card className="p-6">
          <h2 className="text-lg font-semibold mb-4">Top Questions</h2>
          <TopQuestions />
        </Card>

        <Card className="p-6">
          <h2 className="text-lg font-semibold mb-4">Keyword Trends</h2>
          <KeywordTrends />
        </Card>

        <Card className="p-6">
          <h2 className="text-lg font-semibold mb-4">Question Handling</h2>
          <QuestionHandling />
        </Card>

        <Card className="p-6">
          <h2 className="text-lg font-semibold mb-4">AI Efficiency</h2>
          <AIEfficiency />
        </Card>

        <Card className="p-6">
          <h2 className="text-lg font-semibold mb-4">Trends & Insights</h2>
          <TrendsInsights />
        </Card>
      </div>
    </div>
  );
};

export default Conversations;