/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import menu_data from "@/data/MenuData";
import Link from "next/link";
import { usePathname } from "next/navigation";

const MobileMenu = () => {
   const currentRoute = usePathname();

   return (
      <ul className="navigation">
         {menu_data.map((menu) => (
            <li key={menu.id}>
               <Link 
                  href={menu.link}
                  className={currentRoute === menu.link ? "active" : ""}
               >
                  {menu.title}
               </Link>
            </li>
         ))}
      </ul>
   );
};

export default MobileMenu;
