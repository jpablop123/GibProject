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
     title: "Inicio",
     link: "/",
   },
   {
     id: 2,
     has_dropdown: false,
     title: "Cotizar",
     link: "/#cotizar",
   },
   {
     id: 3,
     has_dropdown: false,
     title: "Contacto",
     link: "/#cotizar",
   },
   {
      id: 4,
      has_dropdown: false,
      title: "Casillero",
      link: "/casillero",
    },
    {
      id: 5,
      has_dropdown: false,
      title: "Registrate",
      link: "/registrate",
    },


 ];
 
 export default menu_data;
 