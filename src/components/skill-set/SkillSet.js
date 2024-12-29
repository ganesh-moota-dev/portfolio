import ICONS from "@/enums/Icons";

export default {
  name: "SkillSet",
  data: function () {
    return {
      ICONS: ICONS,
      searchText: "",
      programmingLanguages: {
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
        list: [
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
      },
      filteredProgramminglanguages: null,
      filteredFrontendSkills: null,
      filteredFrontendFrameworks: null,
      filteredBackendSkills: null,
      filteredDatabaseSkills: null,
      filteredOtherSkills: null,
    };
  },
  beforeMount() {
    try {
      this.resetFilteredList();
    } catch (error) {
      console.log(error);
    }
  },
  methods: {
    runSearchQuery() {
      try {
        if (this.searchText !== "") {
          this.updateFilteredList();
        } else {
          this.resetFilteredList();
        }
      } catch (error) {
        console.log(error);
      }
    },
    updateFilteredList() {
      try {
        this.filteredProgramminglanguages.list = this.getfilteredList(
          this.programmingLanguages
        );

        this.filteredFrontendSkills.list = this.getfilteredList(
          this.frontendSkills
        );

        this.filteredFrontendFrameworks.list = this.getfilteredList(
          this.frontendFrameworks
        );

        this.filteredBackendSkills.list = this.getfilteredList(
          this.backendSkills
        );

        this.filteredDatabaseSkills.list = this.getfilteredList(
          this.databaseSkills
        );

        this.filteredOtherSkills.list = this.getfilteredList(this.otherSkills);
      } catch (error) {
        console.log(error);
      }
    },
    resetFilteredList() {
      try {
        this.filteredProgramminglanguages = { ...this.programmingLanguages };
        this.filteredFrontendSkills = { ...this.frontendSkills };
        this.filteredFrontendFrameworks = { ...this.frontendFrameworks };
        this.filteredBackendSkills = { ...this.backendSkills };
        this.filteredDatabaseSkills = { ...this.databaseSkills };
        this.filteredOtherSkills = { ...this.otherSkills };
      } catch (error) {
        console.log(error);
      }
    },
    getfilteredList(skillList) {
      try {
        return skillList.list.filter((item) =>
          item.name.toLowerCase().includes(this.searchText.toLowerCase())
        );
      } catch (error) {
        console.log(error);
      }
    },
    isListNotEmpty(list) {
      try {
        return list.length !== 0;
      } catch (error) {
        console.log(error);
      }
    },
  },
};
