import React from "react";

import logoMM from "/assets/bbualdo-logo-music.png";

import { Link } from "react-scroll";

const Header = () => {
  return (
    <header className="py-8">
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          <a href="#home">
            <img
              src={logoMM}
              alt="BBualdo Mix Mastering"
              className="xs:w-[150px] md:w-[250px]"
            />
          </a>
          <Link
            to="contact"
            activeClass="active"
            smooth={true}
            spy={true}
            className="btn_mm btn-sm cursor-pointer flex items-center md:text-[14px] xs:text-[12px] xs:whitespace-nowrap"
          >
            Work with me
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
