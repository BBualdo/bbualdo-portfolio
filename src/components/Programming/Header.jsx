import React from "react";

import Logo from "../../assets/bbualdo-logo.svg";

import { Link } from "react-scroll";

const Header = () => {
  return (
    <header className="py-8">
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          <a href="#home">
            <img src={Logo} alt="bbualdo" className="w-[250px]" />
          </a>
          <Link
            to="contact"
            activeClass="active"
            smooth={true}
            spy={true}
            className="btn btn-sm cursor-pointer flex items-center md:text-[14px] xs:text-[12px] xs:whitespace-nowrap"
          >
            Work with me
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
