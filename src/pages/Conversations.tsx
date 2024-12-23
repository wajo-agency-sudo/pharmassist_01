import { ConversationList } from "@/components/ConversationList";
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
        <p className="text-muted-foreground">
          Manage and respond to patient inquiries
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {/* Left Column */}
        <div className="space-y-6">
          <div>
            <h2 className="text-2xl font-semibold mb-4">Recent Conversations</h2>
            <ConversationList />
          </div>
          <div>
            <h2 className="text-2xl font-semibold mb-4">AI Impact</h2>
            <AIEfficiency />
          </div>
        </div>

        {/* Right Column */}
        <div className="space-y-6">
          <div>
            <h2 className="text-2xl font-semibold mb-4">Conversation Volume</h2>
            <ConversationVolume />
          </div>
          <div>
            <h2 className="text-2xl font-semibold mb-4">Question Handling</h2>
            <QuestionHandling />
          </div>
        </div>
      </div>

      {/* Full Width Section */}
      <div className="grid gap-6 md:grid-cols-3">
        <div>
          <h2 className="text-2xl font-semibold mb-4">Top Questions</h2>
          <TopQuestions />
        </div>
        <div>
          <h2 className="text-2xl font-semibold mb-4">Keyword Trends</h2>
          <KeywordTrends />
        </div>
        <div>
          <h2 className="text-2xl font-semibold mb-4">Trends & Insights</h2>
          <TrendsInsights />
        </div>
      </div>
    </div>
  );
};

export default Conversations;