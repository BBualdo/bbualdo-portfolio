import React from "react";

import { Link } from "react-router-dom";

import { BiArrowBack } from "react-icons/bi";
import Header from "../components/Music/Header";
import Banner from "../components/Music/Banner";
import About from "../components/Music/About";
import Nav from "../components/Programming/Nav";
import Work from "../components/Music/Work";
import Contact from "../components/Music/Contact";

const Music = () => {
  return (
    <div className="bg-site bg-no-repeat bg-cover overflow-hidden">
      <div className="container mx-auto">
        <Link to="..">
          <button className="btn_mm p-4 text-[24px] mt-6">
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

export default Music;
