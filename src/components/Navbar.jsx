import React from "react";
import { MdOutlineShoppingBag } from "react-icons/md";

const Navbar = () => {
  return (
    <div className=" p-10  text-2xl font-medium  flex justify-between ">
      <h1>Menu</h1>
      <div className="nav-item flex gap-5">
        <a href="" className="flex 	">
          <MdOutlineShoppingBag className="align-middle" />
          Boutique
        </a>
        <a href="">Billetterie</a>
        <p>search box</p>
      </div>
    </div>
  );
};

export default Navbar;
