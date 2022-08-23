import React from "react";
import NavItem from "./NavItem";

const links = [
  {
    label: "Home",
    to: "/",
  },
  {
    label: "Products",
    to: "/products",
  },
  {
    label: "Task Manager",
    to: "/tas-manager",
  },
  {
    label: "Abour",
    to: "/about",
  },
  {
    label: "Contact",
    to: "/contact",
  },
];

function Navbar() {
  return (
    <nav className="flex justify-between mx-w-7xl py-5 mx-auto shadow-md">
      <h3 className="font-bold">GATE FOUNDATION GHANA</h3>
      <ul className="flex gap-5">
        {links.map((link, index) => (
          <NavItem key={index} label={link.label} to={link.to} />
        ))}
      </ul>
    </nav>
  );
}
export default Navbar;
