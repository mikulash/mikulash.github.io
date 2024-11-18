import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

export default function PersonalPage() {
  return (
    <div className="container mx-auto p-4">
      {/* Profile Header */}
      <Card className="mb-6">
        <CardHeader>
          <div className="flex items-center">
            <Avatar className="mr-4" />
            <div>
              <CardTitle>Mikulas Heinz</CardTitle>
              <p className="text-sm text-gray-500">
                Full Stack Developer | React, TypeScript, .NET, Python
              </p>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <p>
            <strong>Contact:</strong>
            <br />
            Email:{" "}
            <a href="mailto:heinz.mikulas@gmail.com">heinz.mikulas@gmail.com</a>
            <br />
            LinkedIn:{" "}
            <a
              href="https://www.linkedin.com/in/mikulas-heinz/"
              target="_blank"
            >
              linkedin.com/in/mikulas-heinz
            </a>
            <br />
            GitHub:{" "}
            <a href="https://github.com/mikulash" target="_blank">
              github.com/mikulash
            </a>
          </p>
        </CardContent>
      </Card>

      <Separator />

      {/* Work Experience */}
      <section className="mb-6">
        <h2 className="text-xl font-bold mb-4">Work Experience</h2>
        <Card className="mb-4">
          <CardHeader>
            <CardTitle>Full Stack Developer</CardTitle>
            <p className="text-sm text-gray-500">
              Arriva CZ | 10/2022 - 05/2024
            </p>
          </CardHeader>
          <CardContent>
            <p>
              - Collaborated on the frontend of an e-shop for ticket sales using
              React, TypeScript, and Tailwind CSS.
              <br />
              - Designed and implemented a .NET API and managed the ticket
              purchasing flow.
              <br />- Created scripts for data analysis and code generation
              using Python and EJS.
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Web Application Developer</CardTitle>
            <p className="text-sm text-gray-500">
              Masaryk University | 2020 - 2022
            </p>
          </CardHeader>
          <CardContent>
            <p>
              - Developed single-page web apps using React.
              <br />- Built modular static websites with PHP and JavaScript.
            </p>
          </CardContent>
        </Card>
      </section>

      <Separator />

      {/* Education */}
      <section className="mb-6">
        <h2 className="text-xl font-bold mb-4">Education</h2>
        <Card className="mb-4">
          <CardHeader>
            <CardTitle>Bachelor's Degree in Information Technology</CardTitle>
            <p className="text-sm text-gray-500">
              Brno University of Technology | 2019 - 2022
            </p>
          </CardHeader>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Master's in Software Engineering</CardTitle>
            <p className="text-sm text-gray-500">
              Masaryk University | 2023 - Present
            </p>
          </CardHeader>
        </Card>
      </section>

      <Separator />

      {/* Skills */}
      <section>
        <h2 className="text-xl font-bold mb-4">Skills</h2>
        <div className="flex flex-wrap gap-2">
          {[
            "React",
            "TypeScript",
            ".NET",
            "Flutter",
            "C#",
            "SQL",
            "Python",
          ].map((skill) => (
            <Badge key={skill}>{skill}</Badge>
          ))}
        </div>
      </section>
    </div>
  );
}
