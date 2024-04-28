type TSidebarLinks = {
  label: string;
  route: string;
  imgUrl: string;
};

export const sidebarLinks: TSidebarLinks[] = [
  {
    label: "Home",
    route: "/",
    imgUrl: "/icons/Home.svg",
  },

  {
    label: "Upcoming",
    route: "/upcoming",
    imgUrl: "/icons/upcoming.svg",
  },
  {
    label: "Previous",
    route: "/previous",
    imgUrl: "/icons/previous.svg",
  },
  {
    label: "Recordings",
    route: "/recordings",
    imgUrl: "/icons/Video.svg",
  },
  {
    label: "Personal Room",
    route: "/personal-room",
    imgUrl: "/icons/add-personal.svg",
  },
];
