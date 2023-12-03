import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";

import logoDev from "/assets/bbualdo-logo.svg";
import logoMM from "/assets/bbualdo-logo-music.png";
import { Link } from "react-router-dom";
import { useState } from "react";

const Home = () => {
  const [logo, setLogo] = useState("");

  const showLogo = (whichOne) => {
    setLogo(whichOne);
  };

  const hideLogo = () => {
    setLogo("");
  };

  return (
    <div className="bg-site bg-no-repeat bg-cover overflow-hidden min-h-[100vh]">
      <div className="flex items-center justify-center ">
        <img
          src={logoDev}
          alt="BBualdo Logo"
          className={`xs:w-[100px] sm:w-[200px] absolute transition-all duration-500 ${
            logo === "dev" ? "top-0" : "-top-full"
          }`}
        />
        <img
          src={logoMM}
          alt="BBualdo Logo"
          className={`xs:w-[100px] sm:w-[200px] absolute transition-all duration-500 ${
            logo === "mm" ? "top-0" : "-top-full"
          }`}
        />
      </div>
      <motion.h1
        variants={fadeIn("", 0.1)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: true, amount: 0 }}
        className="text-[32px] font-bold leading-[0.8] lg:text-[80px] text-center mb-10 mt-[200px]"
      >
        Choose your side
      </motion.h1>
      <div className="flex xs:flex-col sm:flex-row items-center justify-center gap-10 xs:p-5 sm:p-0">
        <Link
          to="/programming"
          className="w-full sm:w-[300px] lg:w-[500px] xs:h-[200px] sm:h-[500px]"
        >
          <motion.div
            variants={fadeIn("right", 0.1)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: true, amount: 0 }}
            onMouseEnter={() => showLogo("dev")}
            onMouseLeave={() => hideLogo()}
          >
            <div className="group bg-hacking xs:bg-[center_top_-8rem] sm:bg-center lg:bg-[center_top_-8rem] bg-no-repeat bg-cover w-full xs:h-[200px] sm:h-[500px] rounded-2xl hover:scale-[1.05] hover:shadow-2xl hover:shadow-pink-500 transition-all duration-300 cursor-pointer flex justify-center items-center relative overflow-hidden">
              <h1 className="font-primary font-bold text-[32px] text-white absolute -bottom-full group-hover:bottom-[50%] transition-all duration-500">
                Programming
              </h1>
            </div>
          </motion.div>
        </Link>
        <Link
          to="/music"
          className="w-full sm:w-[300px] lg:w-[500px] xs:h-[200px] sm:h-[500px]"
        >
          <motion.div
            variants={fadeIn("left", 0.1)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: true, amount: 0 }}
            onMouseEnter={() => showLogo("mm")}
            onMouseLeave={() => hideLogo()}
          >
            <div className="group bg-music bg-center bg-no-repeat bg-cover w-full xs:h-[200px] sm:h-[500px] rounded-2xl hover:scale-[1.05] hover:shadow-2xl hover:shadow-cyan-500 transition-all duration-300 cursor-pointer flex justify-center items-center relative overflow-hidden">
              <h1 className="font-primary font-bold text-[32px] text-white absolute -bottom-full group-hover:bottom-[50%] transition-all duration-500">
                Music
              </h1>
            </div>
          </motion.div>
        </Link>
      </div>
    </div>
  );
};

export default Home;
