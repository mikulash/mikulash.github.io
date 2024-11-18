import EducationSection from "./components/EducationSection";
import ProjectsSection from "./components/ProjectsSection";
import ContactSection from "./components/ContactSection";
import MySidebar from "@/components/MySidebar.tsx";
import JobSection from "@/components/JobsSection.tsx";
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar.tsx";
import React from "react";
import { ThemeProvider } from "@/lib/theme-provider.tsx";

const App = () => {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <SidebarProvider
        style={
          {
            "--sidebar-width": "350px",
          } as React.CSSProperties
        }
      >
        <MySidebar />
        <SidebarInset />
        <main>
          <SidebarTrigger className="-ml-1" />

          <header className="p-8">
            <h1 className="text-5xl font-bold">
              Hi, I'm <span className="text-blue-500">Your Name</span>
            </h1>
            <img
              src="your-picture.jpg"
              alt="Your Portrait"
              className="rounded-full w-32 h-32 mt-4"
            />
          </header>
          <JobSection />
          <EducationSection />
          <ProjectsSection />
          <ContactSection />
        </main>
      </SidebarProvider>
    </ThemeProvider>
  );
};

export default App;
