import React from "react";

import Avatar from "/assets/bbualdo-avatar.jpg";

import { FaYoutube, FaInstagram } from "react-icons/fa";

import { TypeAnimation } from "react-type-animation";

import { motion } from "framer-motion";

import { fadeIn } from "../../variants";

import { Link } from "react-scroll";

const Banner = () => {
  return (
    <section
      id="home"
      className="min-h-[85vh] lg:min-h-[78vh] flex items-center"
    >
      <div className="container mx-auto">
        <div className="flex flex-col gap-y-8 lg:flex-row lg:items-center lg:gap-x-12">
          {/* text */}
          <div className="flex-1 text-center font-secondary lg:text-left">
            <motion.h1
              variants={fadeIn("up", 0.3)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: true, amount: 0.7 }}
              className="text-[55px] font-bold leading-[0.8] lg:text-[110px]"
            >
              SEBASTIAN <span>OPOZDA</span>
            </motion.h1>
            <motion.div
              variants={fadeIn("up", 0.4)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: true, amount: 0.7 }}
              className="mb-6 xs:text-[26px] text-[36px] lg:text-[52px] font-secondary font-semibold uppercase leading-[1]"
            >
              <span className="text-white">I am a</span>
              <TypeAnimation
                sequence={[
                  " Musician",
                  2000,
                  " Producer",
                  2000,
                  "n Artist",
                  2000,
                ]}
                speed={200}
                className="text-vice"
                wrapper="span"
                repeat={Infinity}
              />
            </motion.div>
            <motion.p
              variants={fadeIn("up", 0.5)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: true, amount: 0.7 }}
              className="mb-8 max-w-lg mx-auto lg:mx-0"
            >
              Hi, I'm Sebastian. <br />
              You can hear me out there by the name
              <span className="text-vice font-bold text-xl"> BBualdo</span>.
              <br /> I'm glad you reached this page.
              <br /> <span className="h3 text-vice">Let's dive in!</span>
            </motion.p>
            <motion.div
              variants={fadeIn("up", 0.6)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: true, amount: 0.7 }}
              className="flex max-w-max gap-x-6 items-center mb-12 mx-auto lg:mx-0"
            >
              <Link
                to="contact"
                activeClass="active"
                smooth={true}
                spy={true}
                className="btn_mm btn-lg cursor-pointer flex items-center"
              >
                Contact me
              </Link>
              <Link
                to="work"
                activeClass="active"
                smooth={true}
                spy={true}
                className="cursor-pointer text-gradient_mm btn-link"
              >
                My Portfolio
              </Link>
            </motion.div>
            <motion.div
              variants={fadeIn("up", 0.7)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: true, amount: 0.7 }}
              className="flex text-[20px] gap-x-6 max-w-max mx-auto lg:mx-0"
            >
              <a
                className="cursor-pointer"
                href="https://www.youtube.com/@4tunes444"
                target="_blank"
              >
                <FaYoutube />
              </a>
              <a
                className="cursor-pointer"
                href="https://www.instagram.com/bbualdo_mix"
                target="_blank"
              >
                <FaInstagram />
              </a>
            </motion.div>
          </div>
          {/* image */}
          <motion.div
            variants={fadeIn("down", 0.5)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: true, amount: 0.5 }}
            className="hidden lg:flex flex-1 max-w-[320px] lg:max-w-[482px]"
          >
            <img
              src={Avatar}
              alt="Avatar"
              className="w-full h-[384px] xl:h-[482px] rounded-full border-4 border-vice hover:shadow-2xl hover:shadow-vice transition-shadow duration-200"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
