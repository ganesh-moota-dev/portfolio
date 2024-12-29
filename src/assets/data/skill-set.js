import ICONS from "@/enums/Icons";

export const skills = {
  programming: {
    title: "Programming Languages",
    list: [
      { name: "C", iconPath: ICONS.c },
      { name: "C++", iconPath: ICONS.cpp },
      { name: "Java", iconPath: ICONS.java },
      { name: "Python", iconPath: ICONS.python },
      { name: "JavaScript", iconPath: ICONS.javascript },
      { name: "C#", iconPath: ICONS.csharp },
    ],
  },
  webDevelopment: {
    title: "Web Development",
    list: [
      { name: "HTML", iconPath: ICONS.html5 },
      { name: "CSS", iconPath: ICONS.css3 },
      { name: "JavaScript", iconPath: ICONS.javascript },
      { name: "React.js", iconPath: ICONS.reactJs },
      { name: "Vue.js", iconPath: ICONS.vueJs },
      { name: "Node.js", iconPath: ICONS.nodejs },
      { name: ".NET", iconPath: ICONS.dotnet },
    ],
  },
  databases: {
    title: "Databases",
    list: [
      { name: "MongoDB", iconPath: ICONS.mongodb },
      { name: "MariaDB", iconPath: ICONS.mariadb },
    ],
  },
  devops: {
    title: "DevOps & CI/CD",
    list: [
      { name: "Git", iconPath: ICONS.git },
      { name: "Docker", iconPath: ICONS.docker },
      { name: "Jenkins", iconPath: ICONS.jenkins },
      { name: "K6", iconPath: ICONS.K6 },
      { name: "Grafana", iconPath: ICONS.Grafana },
    ],
  },
  cloudComputing: {
    title: "Cloud Computing",
    list: [
      { name: "Amazon S3", iconPath: ICONS.s3 },
      { name: "Amazon EC2", iconPath: ICONS.ec2 },
      { name: "AWS Lambda", iconPath: ICONS.lambda },
    ],
  },
  toolsAndPlatforms: {
    title: "Tools & Platforms",
    list: [
      { name: "VS Code", iconPath: ICONS.vscode },
      { name: "MySQL Workbench", iconPath: ICONS.mysqlWorkbench },
    ],
  },
};
