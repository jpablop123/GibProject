interface DataType {
   id: number;
   icon: string;
   number: string;
   title: string;
   desc: JSX.Element;
   shape: string;
}

const work_data: DataType[] = [
   {
      id: 1,
      number: "01",
      icon: "flaticon-support",
      title: "Cotiza tu envío",
       desc: "Solicita una cotización personalizada completando nuestro formulario o contactando a nuestro equipo.",
      shape: "/assets/img/images/work_shape01.svg",
   },
   {
      id: 2,
      number: "02",
      icon: "flaticon-global-distribution",
      title: "Realiza el pago",
      desc: "Recibe el resumen de costos y realiza el pago de forma segura por nuestros canales autorizados.",
      shape: "/assets/img/images/work_shape02.svg",
   },
   {
      id: 3,
      number: "03",
      icon: "flaticon-package",
      title: "Envía tu paquete",
      desc: "Entrega el paquete en nuestra bodega o agenda la recogida. Nosotros lo preparamos para el despacho.",
      shape: "/assets/img/images/work_shape01.svg",
   },
   {
      id: 4,
      number: "04",
      icon: "flaticon-parcel",
      title: "Recíbelo en destino",
      desc: "Tu paquete llegará al país de destino de forma segura y dentro del tiempo estimado.",
      shape: "/assets/img/images/work_shape01.svg",
   },
];

export default work_data;