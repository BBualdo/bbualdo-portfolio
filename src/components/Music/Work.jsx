import React from "react";

import { motion } from "framer-motion";

import { fadeIn } from "../../variants";

const Work = () => {
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
              <h2 className="h2 leading-tight text-vice">
                My Latest
                <br />
                Work.
              </h2>
              <p className="max-w-sm lg:max-w-xl mb-8 lg:mb-8 md:text-[24px]">
                Here you can browse my best projects. Every song is like new
                story. Every song is treated personally, with the rule:{" "}
                <span className="text-vice font-bold">
                  Quality {">"} Quantity
                </span>
              </p>
              <a
                className="btn_mm btn-sm py-4"
                href="https://www.youtube.com/@4tunes444"
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
            {/* image */}
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/HoWisoh38iE?si=FkxiEfNLm6IPN_ig"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
              className="w-full rounded-xl hover:shadow-2xl hover:shadow-cyan-500 hover:scale-[1.05] transition-all duration-200"
            ></iframe>
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/mhuJwKGCUQg?si=k1upUyIs99ugn2BZ"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
              className="w-full rounded-xl hover:shadow-2xl hover:shadow-cyan-500 hover:scale-[1.05] transition-all duration-200"
            ></iframe>
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/hBzswFfslDc?si=LwhAb21tMreTTgiC"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
              className="w-full rounded-xl hover:shadow-2xl hover:shadow-cyan-500 hover:scale-[1.05] transition-all duration-200"
            ></iframe>
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/jTUTWzrDKac?si=faZWEVZ9A5dzGUsW"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
              className="w-full rounded-xl hover:shadow-2xl hover:shadow-cyan-500 hover:scale-[1.05] transition-all duration-200"
            ></iframe>
            {/* image */}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Work;
