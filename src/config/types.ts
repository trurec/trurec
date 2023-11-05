export type IMenu = {
  icon: string;
  title: string;
  route: string;
  submenus: ISubmenu[];
};

export type ISubmenu = {
  title: string;
  route: string;
};
