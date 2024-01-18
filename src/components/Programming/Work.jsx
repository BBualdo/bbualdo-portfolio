import React from "react";

import { motion } from "framer-motion";

import { fadeIn } from "../../variants";
import { programmingData } from "../../data/data";

const Work = () => {
  const portfolio = programmingData.map((project) => (
    <a
      key={project.key}
      href={project.href}
      target="_blank"
      className="group bg-black relative overflow-hidden border-2 border-white/50 rounded-xl"
    >
      {/* overlay */}
      <div className="group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300"></div>
      {/* img */}
      <img
        src={project.imageUrl}
        className="group-hover:scale-[125%] transition-all duration-500 mt-2 scale-[100%] md:translate-y-5"
      />
      {/* pretitle */}
      <div className="absolute -bottom-full xs:left-8 md:left-12 xs:group-hover:bottom-16 md:group-hover:bottom-24 transition-all duration-500 z-50">
        <span className="text-gradient xs:max-md:text-sm">
          {project.technologies}
        </span>
      </div>
      {/* title */}
      <div className="absolute -bottom-full xs:left-8 md:left-12 xs:group-hover:bottom-6 md:group-hover:bottom-14 transition-all duration-700 z-50">
        <span className="text-3xl text-white xs:max-md:text-xl">
          {project.name}
        </span>
      </div>
    </a>
  ));

  return (
    <section id="work" className="py-16 lg:section">
      <div className="container mx-auto">
        <div className="flex flex-col gap-y-10">
          <motion.div
            variants={fadeIn("right", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: true, amount: 0.3 }}
            className="flex-1 flex flex-col items-center gap-y-12 mb-10 lg:mb-0 text-center"
          >
            {/* text */}
            <div>
              <h2 className="h2 leading-tight text-accent">
                My Latest
                <br />
                Work.
              </h2>
              <p className="max-w-sm lg:max-w-xl mb-8 lg:mb-8">
                Here you can browse my latest projects. These are result of my
                hard work, everything I'll learn is translated into new project
                to practice new skills. Click the button and see rest of them.
                It's like the journey of my progress.
              </p>
              <a
                className="btn btn-sm py-4"
                href="https://github.com/BBualdo?tab=repositories"
                target="_blank"
              >
                View all projects
              </a>
            </div>
          </motion.div>
          <motion.div
            variants={fadeIn("left", 0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: true, amount: 0.3 }}
            className="flex-1 flex flex-col lg:grid-1 lg:grid lg:grid-cols-2 lg:grid-rows-2 gap-x-10 gap-y-10"
          >
            {portfolio}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Work;
