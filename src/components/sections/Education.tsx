import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { GraduationCap, Calendar, MapPin } from "lucide-react";

export function Education() {
  const education = [
    {
      degree: "Masters of Computer Application",
      institution: "National Institute of Technology Jamshedpur",
      location: "Jamshedpur, Jharkhand",
      duration: "2024 - 2026",
      gpa: "7.98/10.0",
      status: "Ongoing"
    },
    {
      degree: "Bachelor of Science",
      institution: "Kanahiya Lal D.A.V P.G College Roorkee",
      location: "Roorkee, Uttarakhand",
      duration: "2019 - 2022",
      percentage: "68.8%",
      status: "Completed"
    }
  ];

  return (
    <section id="education" className="py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-4">
            My <span className="bg-gradient-primary bg-clip-text text-transparent">Education</span>
          </h2>
        </div>

        <div className="space-y-6">
          {education.map((edu, index) => (
            <Card key={index} className="shadow-portfolio-md hover:shadow-portfolio-lg transition-all duration-300">
              <CardHeader>
                <div className="flex items-start space-x-4">
                  <div className="p-3 rounded-lg bg-primary/10">
                    <GraduationCap className="h-6 w-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <CardTitle className="text-xl">{edu.degree}</CardTitle>
                      <Badge variant={edu.status === "Ongoing" ? "default" : "secondary"}>
                        {edu.status}
                      </Badge>
                    </div>
                    <h3 className="text-lg font-semibold text-primary mb-2">{edu.institution}</h3>
                    <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                      <div className="flex items-center space-x-1">
                        <MapPin className="h-3 w-3" />
                        <span>{edu.location}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Calendar className="h-3 w-3" />
                        <span>{edu.duration}</span>
                      </div>
                      <div className="font-medium">
                        {edu.gpa ? `GPA: ${edu.gpa}` : `Percentage: ${edu.percentage}`}
                      </div>
                    </div>
                  </div>
                </div>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}