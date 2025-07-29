import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code, Globe, Database, Settings } from "lucide-react";

export function Skills() {
  const skillCategories = [
    {
      title: "Languages",
      icon: Code,
      skills: ["JavaScript", "Java", "C++"]
    },
    {
      title: "Frontend",
      icon: Globe,
      skills: ["React.js", "HTML/CSS", "Tailwind CSS"]
    },
    {
      title: "Backend",
      icon: Database,
      skills: ["Node.js", "MongoDB", "MySQL"]
    },
    {
      title: "Tools",
      icon: Settings,
      skills: ["Git", "VS Code", "Vercel"]
    }
  ];

  const codingStats = [
    { platform: "GeeksforGeeks", count: "140+", link: "https://www.geeksforgeeks.org/user/ms606i7op/" },
    { platform: "LeetCode", count: "85+", link: "https://leetcode.com/u/Mayank_Sharmaa/" },
    { platform: "CodeChef", count: "100+", link: "https://www.codechef.com/users/huge_owls_97" },
    { platform: "HackerRank", count: "3 Star", link: "#" },
  ];

  return (
    <section id="skills" className="py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-4">
            My <span className="bg-gradient-primary bg-clip-text text-transparent">Skills</span>
          </h2>
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {skillCategories.map((category, index) => (
            <Card key={index} className="shadow-portfolio-md hover:shadow-portfolio-lg transition-all duration-300">
              <CardContent className="p-6 text-center">
                <div className="mx-auto p-3 rounded-lg bg-primary/10 w-fit mb-4">
                  <category.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-semibold mb-3">{category.title}</h3>
                <div className="flex flex-wrap gap-1 justify-center">
                  {category.skills.map((skill, skillIndex) => (
                    <Badge key={skillIndex} variant="secondary" className="text-xs">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Coding Platforms */}
        <div className="text-center mb-8">
          <h3 className="text-2xl font-bold text-foreground mb-6">
            Coding <span className="bg-gradient-primary bg-clip-text text-transparent">Platforms</span>
          </h3>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {codingStats.map((stat, index) => (
            <Card key={index} className="shadow-portfolio-md hover:shadow-portfolio-lg transition-all duration-300">
              <CardContent className="p-4 text-center">
                <h4 className="font-semibold mb-2">{stat.platform}</h4>
                <Badge className="bg-primary text-primary-foreground mb-2">
                  {stat.count}
                </Badge>
                {stat.link !== "#" && (
                  <div>
                    <a
                      href={stat.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary hover:text-primary-glow transition-colors text-sm"
                    >
                      View Profile →
                    </a>
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}