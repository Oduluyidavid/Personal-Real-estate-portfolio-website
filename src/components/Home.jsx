/* eslint-disable no-unused-vars */
import React from "react";
import Linkedin from "../assets/socials/linkedin.svg";
import Twitter from "../assets/socials/twitter.svg";
import Whatsapp from "../assets/socials/whatsapp.svg";
import Instagram from "../assets/socials/instagram.svg";

import { TypeAnimation } from "react-type-animation";
// motion animation
import { motion } from "framer-motion";
// variants
import { fadeIn } from "../variants";

const Home = () => {
  return (
    <div className=" hero h-screen flex items-center justify-center" id="home">
      <motion.div
        className="text-center md:w-1/2"
        variants={fadeIn("up", 0.3)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.7 }}
      >
        <h1 className="text-primary text-5xl font-extrabold tracking-wider mb-8">
          Zuriel, Real Estate Services Limited
        </h1>
        <TypeAnimation
          sequence={[
            // Same substring at the start will only be typed out once, initially
            "Find your sanctuary in the heart of the city",
            1000, // wait 1s before replacing "Mice" with "Hamsters"
            "Invest in your future with the real estate",
            1000,
            "Open doors to the new possiblities",
            1000,
            "Discover the perfect place to call home",
            1000,
          ]}
          wrapper="span"
          speed={50}
          style={{ fontSize: "2em", display: "inline-block" }}
          repeat={Infinity}
          className="font-semibold text-transparent leading-10 bg-clip-text bg-gradient-to-tr from-purple-400 to-pink-600"
        />
        <p className="text-light text-xl my-8">
          Realtor works with clients to help them buy,sell or rent real estate.
          A realtor interact with the roles and duties include interfacing with
          clients acting as a go between for buyers and sellers and performing
          administrative, research and marketing tasks.
        </p>
      </motion.div>

      {/*hero social*/}
      <div className="bg-white w-20 rounded py-1 px-1 absolute left-0 top-48 hidden md:block">
        <div className="py-1">
          <a
            href=""
            className="p-3 hover:bg-slate-400 block rounded transition-all duration-500"
          >
            <img src={Linkedin} alt="" className="w-10 h-10" />
          </a>
        </div>
        <div className="py-1">
          <a
            href=""
            className="p-3 hover:bg-slate-400 block rounded transition-all duration-500"
          >
            <img src={Twitter} alt="" className="w-10 h-10" />
          </a>
        </div>
        <div className="py-1">
          <a
            href=""
            className="p-3 hover:bg-slate-400 block rounded transition-all duration-500"
          >
            <img src={Whatsapp} alt="" className="w-10 h-10" />
          </a>
        </div>
        <div className="py-1">
          <a
            href=""
            className="p-3 hover:bg-slate-400 block rounded transition-all duration-500"
          >
            <img src={Instagram} alt="" className="w-10 h-10" />
          </a>
        </div>
        
      </div>
    </div>
  );
};

export default Home;
