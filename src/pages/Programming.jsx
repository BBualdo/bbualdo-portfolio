import React from "react";
import Header from "../components/Programming/Header";
import Banner from "../components/Programming/Banner";
import About from "../components/Programming/About";
import Work from "../components/Programming/Work";
import Contact from "../components/Programming/Contact";
import Nav from "../components/Programming/Nav";

const Programming = () => {
  return (
    <div className="bg-site bg-no-repeat bg-cover overflow-hidden">
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
