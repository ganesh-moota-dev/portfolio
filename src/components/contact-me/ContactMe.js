import ICONS from "@/enums/Icons";

export default {
  name: "ContactMe",
  data: function () {
    return {
      folderIconPath: ICONS.ubuntuFolderIcon,
      contacts: [
        {
          text: "LinkedIn",
          contactURL: "https://www.linkedin.com/in/ganesh-moota/",
        },
        {
          text: "GitHub",
          contactURL: "https://github.com/ganesh-moota",
        },
        {
          text: "G-Mail",
          contactURL:
            "https://mail.google.com/mail/?view=cm&fs=1&to=ganeshnm2000@gmail.com",
        },
        {
          text: "Twitter",
          contactURL: "https://twitter.com/Ganesh_Moota",
        },
      ],
    };
  },
  methods: {
    openContactLink(pageURL) {
      try {
        window.open(pageURL, "_newtab");
      } catch (error) {
        console.log(error);
      }
    },
  },
};
