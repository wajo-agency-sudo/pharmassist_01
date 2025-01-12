import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/AppSidebar";
import Index from "./pages/Index";
import Login from "./pages/Login";
import Conversations from "./pages/Conversations";
import Sales from "./pages/Sales";
import Stock from "./pages/Stock";
import UrgentActions from "./pages/UrgentActions";
import Patients from "./pages/Patients";
import Library from "./pages/Library";
import Legal from "./pages/Legal";
import Profile from "./pages/Profile";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route
            path="/login"
            element={<Login />}
          />
          <Route
            path="/*"
            element={
              <SidebarProvider>
                <div className="flex min-h-screen w-full">
                  <AppSidebar />
                  <main className="flex-1">
                    <SidebarTrigger className="m-4" />
                    <Routes>
                      <Route path="/" element={<Index />} />
                      <Route path="/conversations" element={<Conversations />} />
                      <Route path="/sales" element={<Sales />} />
                      <Route path="/stock" element={<Stock />} />
                      <Route path="/urgent" element={<UrgentActions />} />
                      <Route path="/patients" element={<Patients />} />
                      <Route path="/library" element={<Library />} />
                      <Route path="/legal" element={<Legal />} />
                      <Route path="/profile" element={<Profile />} />
                    </Routes>
                  </main>
                </div>
              </SidebarProvider>
            }
          />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;