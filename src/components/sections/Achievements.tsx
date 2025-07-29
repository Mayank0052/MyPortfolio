import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Trophy, Heart, BookOpen, Target } from "lucide-react";

export function Achievements() {
  const achievements = [
    {
      title: "NIMCET 2023 - AIR 466",
      description: "Ranked 466 out of 25,000+ participants",
      icon: Trophy,
      category: "Academic"
    },
    {
      title: "Blood Donation Camp",
      description: "Organized at NIT Jamshedpur for community healthcare",
      icon: Heart,
      category: "Social Service"
    },
    {
      title: "Slum Schooling Volunteer",
      description: "Teaching underprivileged students at NIT Jamshedpur",
      icon: BookOpen,
      category: "Education"
    },
    {
      title: "325+ Problems Solved",
      description: "Across GeeksforGeeks, LeetCode, CodeChef platforms",
      icon: Target,
      category: "Technical"
    }
  ];

  const stats = [
    { label: "NIMCET Rank", value: "466", suffix: "out of 25K+" },
    { label: "Problems Solved", value: "325+", suffix: "across platforms" },
    { label: "Current GPA", value: "7.98", suffix: "out of 10.0" }
  ];

  return (
    <section id="achievements" className="py-16 bg-gradient-surface">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-4">
            My <span className="bg-gradient-primary bg-clip-text text-transparent">Achievements</span>
          </h2>
        </div>

        {/* Stats */}
        <div className="grid sm:grid-cols-3 gap-6 mb-12">
          {stats.map((stat, index) => (
            <Card key={index} className="shadow-portfolio-md text-center">
              <CardContent className="p-6">
                <div className="text-2xl font-bold text-primary mb-1">{stat.value}</div>
                <div className="text-xs text-muted-foreground">{stat.suffix}</div>
                <div className="text-sm font-semibold text-foreground mt-1">{stat.label}</div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Achievements Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {achievements.map((achievement, index) => (
            <Card key={index} className="shadow-portfolio-md hover:shadow-portfolio-lg transition-all duration-300">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="p-3 rounded-lg bg-primary/10">
                    <achievement.icon className="h-6 w-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <h3 className="font-semibold">{achievement.title}</h3>
                      <Badge variant="secondary" className="text-xs">
                        {achievement.category}
                      </Badge>
                    </div>
                    <p className="text-sm text-muted-foreground">{achievement.description}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}