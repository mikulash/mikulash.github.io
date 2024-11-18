import EducationSection from "./components/EducationSection";
import ProjectsSection from "./components/ProjectsSection";
import ContactSection from "./components/ContactSection";
import MySidebar from "@/components/MySidebar.tsx";
import JobSection from "@/components/JobsSection.tsx";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar.tsx";
import { ThemeProvider } from "@/lib/theme-provider.tsx";

const App = () => {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <SidebarProvider>
        {" "}
        <MySidebar />
        <main className="ml-64 flex-1 overflow-y-auto">
          <SidebarTrigger />

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
