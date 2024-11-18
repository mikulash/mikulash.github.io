import { Button } from "@/components/ui/button.tsx";
import { Switch } from "@/components/ui/switch.tsx";
import { useState } from "react";

const MySidebar = () => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleTheme = () => {
    document.documentElement.classList.toggle("dark");
    setDarkMode(!darkMode);
  };

  return (
    <aside className="fixed h-full w-64 bg-gray-200 dark:bg-gray-800 p-4 flex flex-col gap-6">
      {/* Theme Selector */}
      <div className="flex items-center justify-between">
        <label
          htmlFor="theme-switch"
          className="text-sm font-medium dark:text-white"
        >
          Dark Mode
        </label>
        <Switch
          id="theme-switch"
          checked={darkMode}
          onCheckedChange={toggleTheme}
          className="dark:checked:bg-gray-700"
        />
      </div>

      {/* Language Selector */}
      <div className="flex items-center gap-2">
        <Button variant="outline" size="sm">
          CZ
        </Button>
        <Button variant="outline" size="sm">
          EN
        </Button>
      </div>

      {/* Navigation Links */}
      <nav className="flex flex-col gap-4">
        <a href="#job" className="text-lg hover:underline dark:text-white">
          Job
        </a>
        <a
          href="#education"
          className="text-lg hover:underline dark:text-white"
        >
          Education
        </a>
        <a href="#projects" className="text-lg hover:underline dark:text-white">
          Projects
        </a>
        <a href="#contact" className="text-lg hover:underline dark:text-white">
          Contact
        </a>
      </nav>
    </aside>
  );
};

export default MySidebar;
