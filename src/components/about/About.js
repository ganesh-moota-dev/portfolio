import ROUTES from "@/enums/Routes";
import ICONS from "@/enums/Icons";

export default {
  name: "About",
  data: function () {
    return {
      ICONS: ICONS,
      startDate: "2021-07-01",
      bioDescription:"",
    };
  },
  mounted() {
    this.bioDescription =
        `I am Ganesh Moota, currently working as a Software Engineer with ${this.getDifferenceFromToday(this.startDate)} of expertise in Full Stack development.`;
  },
  methods: {
    getDifferenceFromToday(dateString) {
      const givenDate = new Date(dateString);
      const today = new Date();

      let years = today.getFullYear() - givenDate.getFullYear();
      let months = today.getMonth() - givenDate.getMonth();

      if (months < 0) {
        years--;
        months += 12;
      }

      return months === 0
        ? `${years} years`
        : `${years} years and ${months} months`;
    },

    navigateToHome() {
      try {
        this.$router.push({
          name: ROUTES.HOME,
        });

        this.$globalEventBus.$emit("gotoHome");
      } catch (error) {
        console.log(error);
      }
    },
  },
};
