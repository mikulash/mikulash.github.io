import { Button } from "@/components/ui/button.tsx";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card.tsx";

const ProjectsSection = () => {
  return (
    <section id="projects" className="p-8">
      <h2 className="text-4xl font-bold mb-4">Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Card>
          <CardHeader>
            <CardTitle>Project 1</CardTitle>
          </CardHeader>
          <CardContent>
            <p>Description of project 1.</p>
            <Button asChild>
              <a
                href="https://github.com/yourproject1"
                target="_blank"
                rel="noopener noreferrer"
              >
                View Project
              </a>
            </Button>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Project 2</CardTitle>
          </CardHeader>
          <CardContent>
            <p>Description of project 2.</p>
            <Button asChild>
              <a
                href="https://github.com/yourproject2"
                target="_blank"
                rel="noopener noreferrer"
              >
                View Project
              </a>
            </Button>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default ProjectsSection;
