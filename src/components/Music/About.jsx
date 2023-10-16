import React from "react";

import bbualdoMM from "../../assets/bbualdoMM.jpg";

import { useInView } from "react-intersection-observer";

import { motion } from "framer-motion";

import { fadeIn } from "../../variants";

import { Link } from "react-scroll";

const About = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
  });
  return (
    <section
      id="about"
      className="lg:mb-64 py-16 lg:section lg:mt-64"
      ref={ref}
    >
      <div className="container mx-auto">
        <div className="flex flex-col gap-y-10 lg:items-center lg:gap-x-20 lg:gap-y-0">
          {/* img */}
          <motion.div
            variants={fadeIn("right", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: true, amount: 0.3 }}
            className="bg-contain bg-no-repeat md:h-[640px] xs:h-[320px] mix-blend-lighten bg-top items-center"
          >
            <img
              src={bbualdoMM}
              alt="BBualdo in his den"
              className="w-full h-full"
            />
          </motion.div>
          {/* text */}
          <motion.div
            variants={fadeIn("left", 0.5)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: true, amount: 0.3 }}
            className="flex-1 lg:mt-16"
          >
            <h2 className="h2 xs:text-[24px] text-vice">About me.</h2>
            <h3 className="h3 mb-4 xs:text-[20px]">
              I'm Freelance Music Producer, Songwriter and Mix/Mastering
              Engineer.
            </h3>
            <p className="mb-6 xs:text-[16px]">
              My journey started from playing piano when I was 5yo. I played few
              years and... left it. I was into pop music on VIVA or 4FunTV, not
              some boring exercices. Then, when I was 13yo, I fell in love with
              HipHop/Rap music. I had 3 SD cards full of albums and singles.
              Then decision has been made: I want to make music again!
              <span className="text-vice font-bold">
                {" "}
                But this time on my own conditions.
              </span>{" "}
              And I do it to this day.
              <span className="text-vice font-bold">
                {" "}
                You can hear my conditions below and then show me yours.
              </span>
            </p>

            <div className="flex gap-x-8 items-center">
              <Link
                to="contact"
                activeClass="active"
                smooth={true}
                spy={true}
                className="btn_mm btn-lg cursor-pointer flex items-center"
              >
                Contact me
              </Link>
              <a href="#work" className="text-gradient_mm btn-link">
                My Portfolio
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
