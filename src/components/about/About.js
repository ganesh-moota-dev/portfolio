import ROUTES from "@/enums/Routes";
import ICONS from "@/enums/Icons";

export default {
  name: "About",
  data: function () {
    return {
      ICONS: ICONS,
      bioDescription:
        "I am Ganesh Moota, currently working as a Software Engineer with more than 1 year of expertise in Full Stack Web Technologies.",
    };
  },
  methods: {
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
