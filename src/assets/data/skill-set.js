import ICONS from "@/enums/Icons";

export const skills = {
  "programmingLanguages": {
    title: "Programming Languages",
    list: [
      { name: "c", iconPath: ICONS.c },
      { name: "cpp", iconPath: ICONS.cpp },
      { name: "python", iconPath: ICONS.python },
      { name: "java", iconPath: ICONS.java },
      { name: "javascript", iconPath: ICONS.javascript },
      { name: "typescript", iconPath: ICONS.typescript },
      { name: "c#", iconPath: ICONS.csharp },
      { name: "dart", iconPath: ICONS.dart },
    ],
  },
  frontendSkills: {
    title: "Frontend Skills",
    "list": [
      { name: "html", iconPath: ICONS.html5 },
      { name: "css", iconPath: ICONS.css3 },
      { name: "bootstrap", iconPath: ICONS.bootstrap },
      { name: "js", iconPath: ICONS.javascript },
    ],
  },
  frontendFrameworks: {
    title: "Frontend Frameworks/ Libraries",
    list: [
      { name: "ReactJs", iconPath: ICONS.reactJs },
      { name: "AngularJs", iconPath: ICONS.angularJs },
      { name: "VueJs", iconPath: ICONS.vueJs },
    ],
  },
  backendSkills: {
    title: "Backend Skills",
    list: [
      { name: "NodeJs", iconPath: ICONS.nodejs },
      { name: ".Net", iconPath: ICONS.dotnet },
    ],
  },
  databaseSkills: {
    title: "Database Skills",
    list: [
      { name: "MongoDb", iconPath: ICONS.mongodb },
      { name: "MariaDb", iconPath: ICONS.mariadb },
    ],
  },
  otherSkills: {
    title: "Other Skills",
    list: [
      { name: "Git", iconPath: ICONS.git },
      { name: "GitHub", iconPath: ICONS.github },
      { name: "AWS", iconPath: ICONS.aws },
    ],
  }
}