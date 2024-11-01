import React from "react";
import Container from "../container";
import { Link } from "react-router-dom";
import { PiVirus } from "react-icons/pi";

const Header = () => {
  return (
    <div className=" bg-blue-900 text-white border-b border-pink-700 ">
      <Container designs="flex justify-between items-center">
        <Link to="/" className="flex gap-3 items-center ">
          <PiVirus size={32} color="red" />
          <span className="font-semibold  text-xl">Covid-19</span>
        </Link>
        <nav className="flex gap-3">
          <a className="hover:text-pink-600 transition" href="#">
            Anasayfa
          </a>
          <a className="hover:text-pink-600 transition" href="#">
            Sonuçlarımız
          </a>
          <a className="max-md:hidden hover:text-pink-600 transition" href="#">
            Hakkımızda
          </a>
          <a className="max-md:hidden hover:text-pink-600 transition" href="#">
            İletişim
          </a>
        </nav>
      </Container>
    </div>
  );
};

export default Header;
