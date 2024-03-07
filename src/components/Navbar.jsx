import React from "react";
import { MdOutlineShoppingBag } from "react-icons/md";
import { IoTicketOutline } from "react-icons/io5";
import { CiSearch } from "react-icons/ci";
import { GiHamburgerMenu } from "react-icons/gi";

const Navbar = () => {
  return (
    <div className="p-10 text-2xl text-white flex justify-between items-center   font-medium ">
      <button className="flex gap-2 items-center hover:text-slate-300 ">
        <GiHamburgerMenu />
        <p className="">Menu</p>
      </button>
      <div className="navItems flex gap-5">
        <a href="" className="flex items-center hover:text-slate-300">
          <MdOutlineShoppingBag />
          <a href="/boutique">Boutique</a>
        </a>
        <a href="" className="flex items-center hover:text-slate-300">
          <IoTicketOutline />
          <a href="/billetterie">Billetterie</a>
        </a>
        <button className="flex gap-2 border-2 border-white py-2 px-5 rounded-full items-center hover:text-slate-300">
          <p>Recherche</p>
          <CiSearch />
        </button>
      </div>
    </div>
  );
};

export default Navbar;
