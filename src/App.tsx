import EducationSection from "./components/EducationSection";
import ProjectsSection from "./components/ProjectsSection";
import ContactSection from "./components/ContactSection";
import MySidebar from "@/components/MySidebar.tsx";
import JobSection from "@/components/JobsSection.tsx";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar.tsx";
import React from "react";
import { ThemeProvider } from "@/lib/theme-provider.tsx";
import Intro from "@/components/intro.tsx";

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
          <header className="p-8">
            <Intro />
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
