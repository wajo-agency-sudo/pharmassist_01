import { Home, MessageSquare, DollarSign, Package, AlertOctagon, Users, BookOpen, FileText, HeadsetIcon, Settings, User } from "lucide-react";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Link, useLocation } from "react-router-dom";

const items = [
  {
    title: "Home",
    url: "/",
    icon: Home,
  },
  {
    title: "Conversations",
    url: "/conversations",
    icon: MessageSquare,
  },
  {
    title: "Sales",
    url: "/sales",
    icon: DollarSign,
  },
  {
    title: "Stock Management",
    url: "/stock",
    icon: Package,
  },
  {
    title: "Urgent Actions",
    url: "/urgent",
    icon: AlertOctagon,
  },
  {
    title: "Patients",
    url: "/patients",
    icon: Users,
  },
  {
    title: "Library",
    url: "/library",
    icon: BookOpen,
  },
  {
    title: "Legal",
    url: "/legal",
    icon: FileText,
  },
];

const bottomItems = [
  {
    title: "Support",
    url: "/support",
    icon: HeadsetIcon,
  },
  {
    title: "Settings",
    url: "/settings",
    icon: Settings,
  },
];

export function AppSidebar() {
  const location = useLocation();

  return (
    <Sidebar>
      <SidebarContent>
        <div className="p-4 flex items-center">
          <img 
            src="/lovable-uploads/4c532493-f06a-4b62-acad-e54d32beb49e.png" 
            alt="PharmAssist Logo" 
            className="h-8 mix-blend-multiply"
          />
        </div>
        <SidebarGroup>
          <SidebarGroupLabel>PharmAssist</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton 
                    asChild
                    className={location.pathname === item.url ? "bg-[#d9f7ea] text-primary" : ""}
                  >
                    <Link to={item.url}>
                      <item.icon className="h-4 w-4" />
                      <span>{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        <div className="mt-auto">
          <SidebarGroup>
            <SidebarGroupContent>
              <SidebarMenu>
                {bottomItems.map((item) => (
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton 
                      asChild
                      className={location.pathname === item.url ? "bg-[#d9f7ea] text-primary" : ""}
                    >
                      <Link to={item.url}>
                        <item.icon className="h-4 w-4" />
                        <span>{item.title}</span>
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>

          <div className="p-4 border-t">
            <Link to="/profile" className="flex items-center gap-3">
              <Avatar className="h-8 w-8">
                <AvatarImage src="/placeholder.svg" />
                <AvatarFallback>
                  <User className="h-4 w-4" />
                </AvatarFallback>
              </Avatar>
              <div className="flex flex-col">
                <span className="text-sm font-medium">Profile</span>
                <span className="text-xs text-muted-foreground">profile@email.com</span>
              </div>
            </Link>
          </div>
        </div>
      </SidebarContent>
    </Sidebar>
  );
}