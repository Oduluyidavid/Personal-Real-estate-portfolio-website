/* eslint-disable no-unused-vars */
import React from "react";
import linkedin from "../assets/icons-white/linkedin-white.png";
import twitter from "../assets/icons-white/twitter-ico.png";
import github from "../assets/icons-white/github-white.png";
import instagram from "../assets/icons-white/instagram.jpg";
import wattsapp from "../assets/icons-white/whatsapp.png";

const Footer = () => {
  return (
    <div className="bg-black md:h-96 px-7">
      <div className="max-w-7xl mx-auto py-20 flex-flex-col md:flex-row justify-between">
        {/*logo and description*/}
        <div className="md:w-2/5 my-3">
          <h4 className="text-white font-bold text-2xl tracking-wide">
            ZURIEL REAL ESTATE SERVICES LIMITED
          </h4>
          <p className="mt-5 text-sm leading-7 text-[#eee]">
            Real Estate focus on buying and selling of properties and three most
            important words in real estate are not location, but Price,
            Condition, Availability.
          </p>
        </div>

        {/*social-icons*/}
        <div className="my-3">
          <h4 className="text-white font-bold text-2xl tracking-wide">
            SOCIAL
          </h4>

          <div className="mt-5 flex gap-3">
            <a
              href="https://twitter.com/BankybennyD"
              target="blank"
              className="ml-1"
            >
              <img src={twitter} alt="" className="w-7 h-7" />
            </a>
            <a
              href="https://www.linkedin.com/public-profile/settings?trk=d_flagship3_profile_self_view_public_profile&lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base%3BzAnjqiSMTJ2JW%2FhyLyeLsw%3D%3D"
              target="blank"
              className="ml-1"
            >
              <img src={linkedin} alt="" className="w-7 h-7" />
            </a>
            <a
              href="https://www.instagram.com/davidadegokeoduluyi?igsh=MXAydzZubzJ2ZmNzeA%3D%3D&utm_source=qr"
              target="blank"
              className="ml-1"
            >
              <img src={instagram} alt="" className="w-6 h-7" />
            </a>
            <a
              href="https://github.com/Oduluyidavid"
              target="blank"
              className="ml-1"
            >
              <img src={github} alt="" className="w-7 h-7" />
            </a>
            <a
              href="https://wa.me/message/AOOQ35VVTML4D1"
              target="blank"
              className="ml-1"
            >
              <img src={wattsapp} alt="" className="w-7 h-7" />
            </a>
          </div>
        </div>
      </div>
      <hr className="text-slate-50 opacity-30 px-7" />

      <div>
        <p className="md:my-10 py-10 md:py-0 text-sm leading-7 text-[#eee] text-center">
          Copyright 2024. Made by DAVID ODULUYI, All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
