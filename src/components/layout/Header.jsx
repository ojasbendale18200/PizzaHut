import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <header className="flex items-center  justify-between">
      <Link className="text-primary font-semibold text-2xl" href={"/"}>
        PizzaHut
      </Link>
      <nav className="flex items-center gap-8 text-gray-500 font-semibold">
        <Link href={"/"}>Home</Link>
        <Link href={"/menu"}>Menu</Link>
        <Link href={"/#about"}>About</Link>
        <Link href={"/#contact"}>Contact</Link>
        <Link
          href={"/login"}
          className="bg-primary rounded-full text-white px-8 py-2"
        >
          Login
        </Link>
      </nav>
    </header>
  );
};

export default Header;
