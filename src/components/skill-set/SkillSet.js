import ICONS from "@/enums/Icons";
import { skills } from "@/assets/data/skill-set.js";
import cloneDeep from "lodash/cloneDeep";

export default {
  name: "SkillSet",
  data: function () {
    return {
      ICONS: ICONS,
      searchText: "",
      skills: skills,
      filteredSkills: {},
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
      if (this.searchText !== "") {
        this.updateFilteredList();
      } else {
        this.resetFilteredList();
      }
    },

    updateFilteredList() {
      for (let key in this.skills) {
        this.filteredSkills[key].list = this.getfilteredList(
          this.skills[key].list
        );
      }
    },

    resetFilteredList() {
      this.filteredSkills = cloneDeep(this.skills);
    },

    getfilteredList(skillList) {
      return skillList.filter((item) =>
        item.name.toLowerCase().includes(this.searchText.toLowerCase())
      );
    },

    isListNotEmpty(list) {
      return list.length !== 0;
    },
  },
};
