interface MenuItem {
   id: number;
   title: string;
   link: string;
   has_dropdown: boolean;
}

const menu_data: MenuItem[] = [
   {
      id: 1,
      has_dropdown: false,
      title: "Home",
      link: "/",
   },
   {
      id: 2,
      has_dropdown: false,
      title: "Cotiza",
      link: "/cotizar",
   },
   {
      id: 3,
      has_dropdown: false,
      title: "Pages",
      link: "/pages",
   },
   {
      id: 4,
      has_dropdown: false,
      title: "Blog",
      link: "/blog",
   },
   {
      id: 5,
      has_dropdown: false,
      title: "Contact",
      link: "/contact",
   },
   {
      id: 6,
      has_dropdown: false,
      title: "Idioma",
      link: "/language",
   },
];

export default menu_data;
