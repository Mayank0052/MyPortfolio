import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MapPin, User, Trophy, Calendar } from "lucide-react";

export function About() {
  const info = [
    { icon: User, label: "Name", value: "Mayank Sharma" },
    { icon: MapPin, label: "Location", value: "Jamshedpur, Jharkhand" },
    { icon: Trophy, label: "GPA", value: "7.98/10.0" },
    { icon: Calendar, label: "Languages", value: "English, Hindi" },
  ];

  return (
    <section id="about" className="py-16 bg-gradient-surface">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-4">
            About <span className="bg-gradient-primary bg-clip-text text-transparent">Me</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Personal Info */}
          <Card className="shadow-portfolio-md">
            <CardContent className="p-6">
              <div className="grid grid-cols-2 gap-4">
                {info.map((item, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <div className="p-2 rounded-lg bg-primary/10">
                      <item.icon className="h-4 w-4 text-primary" />
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground">{item.label}</p>
                      <p className="font-medium text-foreground text-sm">{item.value}</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Description */}
          <Card className="shadow-portfolio-md">
            <CardContent className="p-6">
              <div className="space-y-4 text-muted-foreground">
                <p>
                  MCA student at NIT Jamshedpur with a passion for full-stack development 
                  and problem-solving. Experienced in MERN stack technologies.
                </p>
                <p>
                  Active in competitive programming with 325+ problems solved across 
                  platforms. Committed to community service through education and 
                  healthcare initiatives.
                </p>
                <div className="flex flex-wrap gap-2 mt-4">
                  <Badge variant="secondary">MERN Stack</Badge>
                  <Badge variant="secondary">Problem Solver</Badge>
                  <Badge variant="secondary">Community Leader</Badge>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}