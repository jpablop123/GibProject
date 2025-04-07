import { StaticImageData } from "next/image";

import service_1 from "@/assets/img/services/services_img01.jpg"
import service_2 from "@/assets/img/services/services_img02.jpg"
import service_3 from "@/assets/img/services/services_img03.jpg"
import service_4 from "@/assets/img/services/services_img04.jpg"
import service_5 from "@/assets/img/services/services_img07.jpg"
import service_6 from "@/assets/img/services/services_img08.jpg"
import service_7 from "@/assets/img/services/services_img09.jpg"

interface DataType {
   id: number;
   page: string;
   img?: StaticImageData;
   icon: string;
   title: string;
   desc: string;
   list?: string[];
}

const service_data: DataType[] = [
// home_gib (para tu nueva home o landing)
{
   id: 1,
   page: "home_gib",
   icon: "flaticon-calculator",
   title: "Solicita tu cotización",
   desc: "Completa un formulario sencillo y recibe una cotización personalizada directamente en tu correo. Sin complicaciones.",
   list: ["Formulario dinámico", "Soporte vía WhatsApp", "Respuesta rápida en menos de 24h"],
},
{
   id: 2,
   page: "home_gib",
   icon: "flaticon-construction",
   title: "Página en construcción",
   desc: "Estamos trabajando para traerte una experiencia web completa. Muy pronto podrás gestionar tus envíos directamente desde la plataforma.",
   list: ["Seguimiento de paquetes", "Gestión de cuentas", "Historial de envíos"],
},
{
   id: 3,
   page: "home_gib",
   icon: "flaticon-box",
   title: "Miles de paquetes enviados",
   desc: "Gib Traders ha gestionado con éxito cientos de envíos internacionales desde y hacia Colombia, USA y más.",
   list: ["Envíos a +15 países", "Alianzas con FedEx , UPS y Globus Cargo", "Clientes felices garantizados"],
},
{
   id: 4,
   page: "home_gib",
   icon: "flaticon-worldwide",
   title: "Cobertura internacional",
   desc: "Exportamos e importamos desde Colombia hacia destinos clave en USA, México, Venezuela y más.",
   list: ["Logística puerta a puerta", "Consolidación", "Desaduanaje incluido"],
},

   // home_2
  // home_gib (para tu nueva home o landing)
{
   id: 1,
   page: "home_gib",
   icon: "flaticon-calculator",
   title: "Solicita tu cotización",
   desc: "Completa un formulario sencillo y recibe una cotización personalizada directamente en tu correo. Sin complicaciones.",
   list: ["Formulario dinámico", "Soporte vía WhatsApp", "Respuesta rápida en menos de 24h"],
},
{
   id: 2,
   page: "home_gib",
   icon: "flaticon-construction",
   title: "Página en construcción",
   desc: "Estamos trabajando para traerte una experiencia web completa. Muy pronto podrás gestionar tus envíos directamente desde la plataforma.",
   list: ["Seguimiento de paquetes", "Gestión de cuentas", "Historial de envíos"],
},
{
   id: 3,
   page: "home_gib",
   icon: "flaticon-box",
   title: "Miles de paquetes enviados",
   desc: "Gib Traders ha gestionado con éxito cientos de envíos internacionales desde y hacia Colombia, USA y más.",
   list: ["Envíos a +15 países", "Alianzas con FedEx , UPS y Globus Cargo", "Clientes felices garantizados"],
},
{
   id: 4,
   page: "home_gib",
   icon: "flaticon-worldwide",
   title: "Cobertura internacional",
   desc: "Exportamos e importamos desde Colombia hacia destinos clave en USA, México, Venezuela y más.",
   list: ["Logística puerta a puerta", "Consolidación", "Desaduanaje incluido"],
},


   // home_4
  // home_gib (para tu nueva home o landing)
{
   id: 1,
   page: "home_gib",
   icon: "flaticon-calculator",
   title: "Solicita tu cotización",
   desc: "Completa un formulario sencillo y recibe una cotización personalizada directamente en tu correo. Sin complicaciones.",
   list: ["Formulario dinámico", "Soporte vía WhatsApp", "Respuesta rápida en menos de 24h"],
},
{
   id: 2,
   page: "home_gib",
   icon: "flaticon-construction",
   title: "Página en construcción",
   desc: "Estamos trabajando para traerte una experiencia web completa. Muy pronto podrás gestionar tus envíos directamente desde la plataforma.",
   list: ["Seguimiento de paquetes", "Gestión de cuentas", "Historial de envíos"],
},
{
   id: 3,
   page: "home_gib",
   icon: "flaticon-box",
   title: "Miles de paquetes enviados",
   desc: "Gib Traders ha gestionado con éxito cientos de envíos internacionales desde y hacia Colombia, USA y más.",
   list: ["Envíos a +15 países", "Alianzas con FedEx , UPS y Globus Cargo", "Clientes felices garantizados"],
},
{
   id: 4,
   page: "home_gib",
   icon: "flaticon-worldwide",
   title: "Cobertura internacional",
   desc: "Exportamos e importamos desde Colombia hacia destinos clave en USA, México, Venezuela y más.",
   list: ["Logística puerta a puerta", "Consolidación", "Desaduanaje incluido"],
},


   // inner_page
  // home_gib (para tu nueva home o landing)
{
   id: 1,
   page: "home_gib",
   icon: "flaticon-calculator",
   title: "Solicita tu cotización",
   desc: "Completa un formulario sencillo y recibe una cotización personalizada directamente en tu correo. Sin complicaciones.",
   list: ["Formulario dinámico", "Soporte vía WhatsApp", "Respuesta rápida en menos de 24h"],
},
{
   id: 2,
   page: "home_gib",
   icon: "flaticon-construction",
   title: "Página en construcción",
   desc: "Estamos trabajando para traerte una experiencia web completa. Muy pronto podrás gestionar tus envíos directamente desde la plataforma.",
   list: ["Seguimiento de paquetes", "Gestión de cuentas", "Historial de envíos"],
},
{
   id: 3,
   page: "home_gib",
   icon: "flaticon-box",
   title: "Miles de paquetes enviados",
   desc: "Gib Traders ha gestionado con éxito cientos de envíos internacionales desde y hacia Colombia, USA y más.",
   list: ["Envíos a +15 países", "Alianzas con FedEx , UPS y Globus Cargo", "Clientes felices garantizados"],
},
{
   id: 4,
   page: "home_gib",
   icon: "flaticon-worldwide",
   title: "Cobertura internacional",
   desc: "Exportamos e importamos desde Colombia hacia destinos clave en USA, México, Venezuela y más.",
   list: ["Logística puerta a puerta", "Consolidación", "Desaduanaje incluido"],
},
,
   {
      id: 5,
      page: "inner_page",
      img: service_5,
      icon: "flaticon-delivery-cart",
      title: "Modern Storage",
      desc: "Road transpo arer tation criucial follw roley Logistins coordinated trans portatn the countries destination.",
   },
   {
      id: 6,
      page: "inner_page",
      img: service_6,
      icon: "flaticon-delivery-man",
      title: "House Shifting",
      desc: "Road transpo arer tation criucial follw roley Logistins coordinated trans portatn the countries destination.",
   },
];

export default service_data;