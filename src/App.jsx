import React from "react";
import { Router, Route } from "react-router";

import About from "./components/About";
import Banner from "./components/Banner";
import Contact from "./components/Contact";
import Header from "./components/Header";
import Nav from "./components/Nav";
import Work from "./components/Work";

import { motion } from "framer-motion";
import { fadeIn } from "./variants";

import Logo from "./assets/bbualdo-logo.svg";

const App = () => (
  <div className="bg-site bg-no-repeat bg-cover overflow-hidden h-[100vh]">
    <motion.div
      variants={fadeIn("down", 0.1)}
      initial="hidden"
      whileInView={"show"}
      viewport={{ once: true, amount: 0 }}
      className="flex items-center justify-center"
    >
      <img
        src={Logo}
        alt="BBualdo Logo"
        className="xs:w-[100px] sm:w-[200px]"
      />
    </motion.div>
    <motion.h1
      variants={fadeIn("", 0.1)}
      initial="hidden"
      whileInView={"show"}
      viewport={{ once: true, amount: 0 }}
      className="text-[32px] font-bold leading-[0.8] lg:text-[80px] text-center mb-10"
    >
      Choose your side
    </motion.h1>
    <div className="flex xs:flex-col sm:flex-row items-center justify-center gap-10 xs:p-5 sm:p-0">
      <motion.div
        variants={fadeIn("right", 0.1)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: true, amount: 0 }}
        className="w-full sm:w-[300px] lg:w-[500px] xs:h-[200px] sm:h-[500px]"
      >
        <div className="group bg-hacking xs:bg-[center_top_-8rem] sm:bg-center lg:bg-[center_top_-8rem] bg-no-repeat bg-cover w-full xs:h-[200px] sm:h-[500px] rounded-2xl hover:scale-[1.05] hover:shadow-2xl hover:shadow-pink-500 transition-all duration-300 cursor-pointer flex justify-center items-center relative overflow-hidden">
          <h1 className="font-primary font-bold text-[32px] text-white absolute -bottom-full group-hover:bottom-[50%] transition-all duration-500">
            Programming
          </h1>
        </div>
      </motion.div>
      <motion.div
        variants={fadeIn("left", 0.1)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: true, amount: 0 }}
        className="w-full sm:w-[300px] lg:w-[500px] xs:h-[200px] sm:h-[500px]"
      >
        <div className="group bg-music bg-center bg-no-repeat bg-cover w-full xs:h-[200px] sm:h-[500px] rounded-2xl hover:scale-[1.05] hover:shadow-2xl hover:shadow-cyan-500 transition-all duration-300 cursor-pointer flex justify-center items-center relative overflow-hidden">
          <h1 className="font-primary font-bold text-[32px] text-white absolute -bottom-full group-hover:bottom-[50%] transition-all duration-500">
            Music
          </h1>
        </div>
      </motion.div>
    </div>
  </div>
);

export default App;
