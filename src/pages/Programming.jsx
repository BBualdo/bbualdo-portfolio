import React from "react";
import Header from "../components/Programming/Header";
import Banner from "../components/Programming/Banner";
import About from "../components/Programming/About";
import Work from "../components/Programming/Work";
import Contact from "../components/Programming/Contact";
import Nav from "../components/Programming/Nav";

import { BiArrowBack } from "react-icons/bi";
import { Link } from "react-router-dom";

const Programming = () => {
  return (
    <div className="bg-site bg-no-repeat bg-cover overflow-hidden">
      <div className="container mx-auto">
        <Link to="..">
          <button className="btn p-4 text-[24px] mt-6">
            <BiArrowBack />
          </button>
        </Link>
      </div>
      <Header />
      <Banner />
      <About />
      <Work />
      <Contact />
      <Nav />
    </div>
  );
};

export default Programming;
