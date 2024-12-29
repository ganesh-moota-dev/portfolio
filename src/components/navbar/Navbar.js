import ROUTES from "@/enums/Routes";
import ICONS from "@/enums/Icons";

export default {
  name: "Navbar",
  data: function () {
    return {
      navItems: [
        {
          iconPath: ICONS.chromeIcon,
          tooltipText: "Home",
          navLinkName: ROUTES.HOME,
          isActive: false,
        },
        {
          iconPath: ICONS.terminalIcon,
          tooltipText: "About Me",
          navLinkName: ROUTES.ABOUT,
          isActive: false,
        },
        // {
        //   iconPath: ICONS.vsCodeIcon,
        //   tooltipText: "Text here",
        //   navLinkName: ROUTES.HOME,
        //   isActive: false,
        // },
      ],
      lastNavItem: {
        tooltipText: "My Skill Set",
        navLinkName: ROUTES.SKILLS,
        isActive: false,
      },
      currentRoute: ROUTES.HOME,
    };
  },
  mounted() {
    this.updateNavLinkStatus(this.$route.name);
    this.$globalEventBus.$on("gotoHome", () => {
      this.updateNavLinkStatus(ROUTES.HOME);
    });
  },
  methods: {
    navigateTo({ navLinkName, isActive }) {
      try {
        if (this.$route.name !== navLinkName) {
          this.$router.push({
            name: navLinkName,
          });
          this.updateNavLinkStatus(navLinkName);
        } else {
          if (isActive && navLinkName !== ROUTES.HOME) {
            this.$router.push({
              name: ROUTES.HOME,
            });
            this.updateNavLinkStatus(ROUTES.HOME);
          }
        }
      } catch (error) {
        console.log(error);
      }
    },
    updateNavLinkStatus(navLinkName) {
      try {
        this.navItems = this.navItems.map((navItem) => {
          if (navItem.navLinkName == navLinkName) {
            return { ...navItem, isActive: true };
          } else {
            return { ...navItem, isActive: false };
          }
        });

        this.lastNavItem =
          this.lastNavItem.navLinkName === navLinkName
            ? { ...this.lastNavItem, isActive: true }
            : { ...this.lastNavItem, isActive: false };
      } catch (error) {
        console.log(error);
      }
    },
  },
};
