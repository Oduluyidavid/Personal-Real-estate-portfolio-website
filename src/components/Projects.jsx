/* eslint-disable no-unused-vars */
import React from "react";
import Headline from "../shared/Headline.jsx";
import projects from "../../public/projects.js";

// motion animation
import { motion } from "framer-motion";
// variants
import { fadeIn } from "../variants.js";



const Projects = () => {
  return (
    <div className="max-w-7xl mx-auto md:py-8 px-7" id="house">
        <Headline title={'PROJECTS'} subtitle={'Here you will find some of my personal projects that I created with each project containing it own case study'}/>


        <div>
            {
              projects.map((project, index) => <div key={projects.id}>
                    <motion.div className="projects items-center my-20"
                    variants={fadeIn("left", 0.3)}
                    initial="hidden"
                    whileInView={"show"}
                    viewport={{ once:true, amount: 0.3}}
                    >
                        <div style={{position: "relative"}}>
                          <img src={project.image } alt="" />
                          <button className="btn py-3 px-7 mr-1" style={{position: "absolute", bottom: "20px"}} onClick={() => {window.open(projects.link, "blank")}}>project link</button>
                        </div>
                        <div className="md:w-10/12 text-center md:text-left px-2">
                            <h4 className="text-2xl font-bold mb-6">{project.name}</h4>
                            <p className="text-lg text-[#666] leading-6 mb-6">{project.description}</p>
                            <button className="btn py-3 px-7">Case Study</button>
                        </div>
                    </motion.div>
                </div>)

            }
        </div>

    </div>
   
    
  );
};

export default Projects;
