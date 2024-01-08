import Image from "next/image";
import { default as Link, default as NextLink } from "next/link";
import React, { useState } from "react";
import { Icon } from "@iconify/react";

import { NavbarMenu } from "@/interface/NavbarMenu";

const Header = () => {
  const [menu, setMenu] = useState(false);
  const NavbarMenu: NavbarMenu[] = [
    {
      id: 1,
      menu: "About",
      linkURL: "/about",
    },
    {
      id: 1,
      menu: "Skills",
      linkURL: "/skill",
    },
    {
      id: 1,
      menu: "Projects",
      linkURL: "/projects",
    },
    {
      id: 1,
      menu: "Testimonials",
      linkURL: "/testimonial",
    },
  ];

  return (
    <div className="relative flex flex-col">
      <div className="navbar bg-white text-black">
        <div className="navbar-start sm:ml-16">
          {!menu ? (
            <div className="block lg:hidden mr-4" onClick={() => setMenu(true)}>
              {" "}
              <Icon icon="jam:menu" className="text-5xl" />{" "}
            </div>
          ) : (
            <div
              className="block lg:hidden ring-1 ring-black mr-4"
              onClick={() => setMenu(false)}
            >
              {" "}
              <Icon icon="pajamas:close-xs" className="text-5xl" />
            </div>
          )}
          <Link href={"/"} shallow={true} className="sm:ml-16 cursor-pointer">
            <Image
              src="/navinlogos.png"
              width={120}
              height={50}
              alt="Navin"
              className="h-12 w-auto"
            />
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 text-lg font-bold tracking-widest">
            {NavbarMenu.map((item) => (
              <li key={item.id}>
                <NextLink
                  href={item.linkURL}
                  className="hover:text-primary active:text-primary"
                  onClick={() => setMenu(false)}
                >
                  {item.menu}
                </NextLink>
              </li>
            ))}
          </ul>
        </div>
        <div className="navbar-end sm:mr-16">
          <a className="btn bg-transparent border-primary hover:bg-primary hover:text-white text-lg font-bold text-primary normal-case">
            Download CV
          </a>
        </div>
      </div>
      {menu && (
        <div className="absolute top-12 mt-4 w-full z-50 bg-white text-lg  font-bold">
          <ul className="menu menu-vertical px-1">
            {NavbarMenu.map((item) => (
              <li key={item.id}>
                <NextLink href={item.linkURL} onClick={() => setMenu(false)}>
                  {item.menu}
                </NextLink>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Header;
