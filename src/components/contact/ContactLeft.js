import React from "react";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import { bannerImg, contactImg } from "../../assets/index";

const ContactLeft = () => {
  return (
    <div className="w-full lgl:w-[35%] h-full bg-gradient-to-r from-[#1e2024] to-[#23272b] p-4 lgl:p-8 rounded-lg shadow-shadowOne flex flex-col gap-8 justify-center">
      <img
        className="w-full h-64 object-cover rounded-lg mb-2"
        src={bannerImg}
        alt="contactImg"
      />
      <div className="flex flex-col gap-4">
        <h3 className="text-3xl font-bold text-white">Shaheer Amjad</h3>
        <p className="text-lg font-normal text-gray-400">
          Software Engineer | Full Stack Developer
        </p>
        <p className="text-base text-gray-400 tracking-wide">
          An experienced full-stack web developer with 2+ years of experience
          creating beautiful and functional digital solutions.
        </p>
        <p className="text-base text-gray-400 flex items-center gap-2">
          Phone: <span className="text-lightText">+92 3213014010</span>
        </p>
        <p className="text-base text-gray-400 flex items-center gap-2">
          Email: <span className="text-lightText">stansari4500@gmail.com</span>
        </p>
      </div>
      <div className="flex flex-col gap-4">
        <h2 className="text-base uppercase font-titleFont mb-4">Find me in</h2>
        <div className="flex gap-4">
          <a
            href="https://github.com/shaheeramjad"
            target="_blank"
            rel="noreferrer"
            className="bannerIcon"
          >
            <FaGithub />
          </a>
          <a
            href="https://leetcode.com/u/dev_shaheer/"
            target="_blank"
            rel="noreferrer"
            className="bannerIcon"
          >
            <SiLeetcode />
          </a>
          <a
            href="https://www.linkedin.com/in/shaheer-amjad-software-engineer/"
            target="_blank"
            rel="noreferrer"
            className="bannerIcon"
          >
            <FaLinkedinIn />
          </a>
        </div>
      </div>
    </div>
  );
};

export default ContactLeft;
