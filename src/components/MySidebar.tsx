import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { Briefcase, File, GraduationCap, Mail } from "lucide-react";
import { Label } from "@/components/ui/label.tsx";
import { Switch } from "@/components/ui/switch.tsx";
import { useTheme } from "@/lib/theme-provider.tsx";

export function MySidebar() {
  const { theme, setTheme } = useTheme();

  const handleThemeChange = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  const items = [
    {
      title: "Job",
      url: "#job",
      icon: Briefcase,
    },
    {
      title: "Education",
      url: "#education",
      icon: GraduationCap,
    },
    {
      title: "Projects",
      url: "#projects",
      icon: File,
    },
    {
      title: "Contact",
      url: "#contact",
      icon: Mail,
    },
  ];

  return (
    <Sidebar>
      <SidebarHeader className="gap-3.5 border-b p-4">
        <div className="flex w-full items-center justify-between">
          <Label className="flex items-center gap-2 text-sm">
            <span>Dark theme</span>
            <Switch className="shadow-none" onClick={handleThemeChange} />
          </Label>
        </div>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Navigation</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <a href={item.url}>
                      <item.icon />
                      <span>{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}

export default MySidebar;
