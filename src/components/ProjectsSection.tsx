import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const ProjectsSection = () => {
  return (
    <section id="projects" className="p-8">
      <h2 className="text-4xl font-bold mb-4">Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Project 1 */}
        <Card>
          <CardHeader>
            <CardTitle>ARRIVA Ticket Purchasing System</CardTitle>
          </CardHeader>
          <CardContent>
            <p>
              Developed a comprehensive ticket purchasing system for ARRIVA CZ,
              allowing customers and external partners to buy tickets
              seamlessly. Integrated React, TypeScript, and .NET for frontend
              and backend.
            </p>
            <Button asChild>
              <a
                href="https://github.com/mikulash/arriva-system"
                target="_blank"
                rel="noopener noreferrer"
              >
                View Project
              </a>
            </Button>
          </CardContent>
        </Card>

        {/* Project 2 */}
        <Card>
          <CardHeader>
            <CardTitle>CaptureLab Integration System</CardTitle>
          </CardHeader>
          <CardContent>
            <p>
              Contributed to an automation tool for capturing highlights in
              livestreams. Implemented backend systems and frontend dashboards
              for analyzing stream data using .NET and React.
            </p>
            <Button asChild>
              <a
                href="https://github.com/mikulash/capturelab"
                target="_blank"
                rel="noopener noreferrer"
              >
                View Project
              </a>
            </Button>
          </CardContent>
        </Card>

        {/* Project 3 */}
        <Card>
          <CardHeader>
            <CardTitle>Influencer Campaign Platform</CardTitle>
          </CardHeader>
          <CardContent>
            <p>
              Built a platform to run influencer campaigns on Twitch. Designed a
              system to track social media performance metrics and create
              campaign analytics reports.
            </p>
            <Button asChild>
              <a
                href="https://github.com/mikulash/influencer-campaign"
                target="_blank"
                rel="noopener noreferrer"
              >
                View Project
              </a>
            </Button>
          </CardContent>
        </Card>

        {/* Project 4 */}
        <Card>
          <CardHeader>
            <CardTitle>University Web Applications</CardTitle>
          </CardHeader>
          <CardContent>
            <p>
              Created single-page web applications and modular websites for
              Masaryk University using React, PHP, and JavaScript. Improved
              internal workflows and simplified web publishing processes.
            </p>
            <Button asChild>
              <a
                href="https://github.com/mikulash/university-webapps"
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
