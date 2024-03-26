import React, { useState } from "react";
import { MdOutlineShoppingBag } from "react-icons/md";
import { IoTicketOutline } from "react-icons/io5";
import { CiSearch } from "react-icons/ci";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdOutlineHotel } from "react-icons/md";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="relative">
      <div className="p-10 text-2xl text-white flex justify-between items-center font-medium">
        <button
          className="flex gap-2 items-center hover:text-slate-300"
          onClick={toggleMenu}
        >
          <GiHamburgerMenu />
          <span>Menu</span>
        </button>
        <div className="navItems flex gap-5">
          <a href="#" className="flex items-center hover:text-slate-300">
            <MdOutlineShoppingBag />
            <span>Boutique</span>
          </a>
          <a
            href="/billetterie"
            className="flex items-center hover:text-slate-300"
          >
            <IoTicketOutline />
            <span>Billetterie</span>
          </a>

          <a href="/hotels" className="flex items-center hover:text-slate-300">
            <MdOutlineHotel />
            <span>Hotels</span>
          </a>

          <button className="flex gap-2 border-2 border-white py-2 px-5 rounded-full items-center hover:text-slate-300">
            <span>Recherche</span>
            <CiSearch />
          </button>
        </div>
      </div>
      {/* Slide menu */}
      <div
        className={`${
          isMenuOpen ? "left-0" : "-left-full"
        } fixed top-0 h-full w-1/4 bg-gray-800 z-50 transition-left duration-300 ease-in-out`}
      >
        <div className="p-10 text-2xl text-white flex flex-col gap-5 items-start font-medium">
          <button
            className="absolute top-0 right-0 m-4 text-white hover:text-slate-300"
            onClick={toggleMenu}
          >
            X
          </button>
          <a href="/">Accueil</a>
          <a href="https://www.paris2024.org/fr/category/lecomite-fr-fr/">
            Le comité d’organisation
          </a>
          <a href="https://www.paris2024.org/fr/category/lesjeux-fr/">
            Les Jeux
          </a>
          <a href="https://www.paris2024.org/fr/category/nosengagements-fr-fr/">
            Nos engagements
          </a>
          <a href="https://www.paris2024.org/fr/category/participer-fr-fr/">
            Participer
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
