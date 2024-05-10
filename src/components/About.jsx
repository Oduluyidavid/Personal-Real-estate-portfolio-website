/* eslint-disable no-unused-vars */
import React from "react";
import Headline from "../shared/Headline";
import skills from "../../public/skills.js";

// motion animation
import { motion } from "framer-motion";
// variants
import { fadeIn } from "../variants";





const About = () => {
  return (
    <div className="max-w-7xl mx-auto my-14 md:px-8 py-7" id="about">
      <Headline
        title={"ABOUT ME"}
        subtitle={
          "Here you will find more information about me,What I do,and my  current skills mostly in terms of programming asnd technology"
        }
      />

      {/* About content */}
      <div className="flex flex-col md:flex-row items-start justify-start">
        {/*left side */}
        <motion.div className="md:w-1/2 my-8"
         variants={fadeIn("right", 0.3)}
         initial="hidden"
         whileInView={"show"}
         viewport={{ once: false, amount: 0.7 }}
        >
          <h4 className="text-2xl font-bold mb-8">Get to know me!</h4>
          <div className="md:w-10/12 text-lg text-[#666] mb-8">
          <p className="mb-5">
            I'm a <strong>Frontend Web Developer</strong> building the Front end of Websites and
            Web Applications that leads to the success of all overall product.
            Check out some of my work in the <strong>Projects</strong> section.
          </p>
          <p className="mb-5">
            I also like sharing content related to the stuff that I have learned
            over the years in <strong>Web Development</strong> so it can help others of Dev
            Commmunity. Feel free to Connect or follow me on my <a href="https://www.linkedin.com/public-profile/settings?trk=d_flagship3_profile_self_view_public_profile&lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base%3BzAnjqiSMTJ2JW%2FhyLyeLsw%3D%3D" target="blank" className="text-secondary font-bold underline">Linkedin</a> where i
            post useful content related to Web Development and Programming.
          </p>
          <p className="mb-5">
            I'm open to <strong>Job</strong> opportunities where i can contribute, learn and grow
            if you have a good opportunity that matches my skills and experience
            then don't hesitate to <strong>contact</strong> me.
          </p>
          </div>
        </motion.div>
         
        </div>

        <div className="md:w-1/2 my-8"></div>

        {/*right side */}
        <motion.div className="md:w-1/2 my-8"
        variants={fadeIn("left", 0.5)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.5 }}
        >
            <h4 className="text-2xl font-bold mb-8">My Skills</h4>
            <div className="flex flex-wrap gap-3 md:w-10/12">
                {
                    skills.map( skills => <p key={skills.id} className="bg-slate-300 text-light py-2 px-4 rounded">{skills.title}</p>)
                }
            </div>
        </motion.div>
      </div>
  );
};

export default About;
