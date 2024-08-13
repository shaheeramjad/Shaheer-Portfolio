import React from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import { FaGithub, FaLinkedinIn, FaReact } from "react-icons/fa";
import {
  SiDotnet,
  SiJavascript,
  SiCplusplus,
  SiTypescript,
  SiTailwindcss,
  SiMicrosoftsqlserver,
  SiFigma,
  SiBootstrap,
  SiLeetcode,
} from "react-icons/si";

const LeftBanner = () => {
  const [text] = useTypewriter({
    words: [
      "Software Engineer.",
      "Full Stack Developer.",
      "Problem Solver.",
      "UI/UX Designer.",
    ],
    loop: true,
    typeSpeed: 15,
    deleteSpeed: 10,
    delaySpeed: 2000,
  });
  return (
    <div className="w-full lgl:w-1/2 flex flex-col gap-20">
      <div className="flex flex-col gap-5">
        <h4 className=" text-lg font-normal">WELCOME TO MY WORLD</h4>
        <h1 className="text-6xl font-bold text-white">
          Hi, I'm <span className="text-designColor capitalize">Shaheer</span>
        </h1>
        <h2 className="text-4xl font-bold text-white">
          a <span>{text}</span>
          <Cursor
            cursorBlinking="false"
            cursorStyle="|"
            cursorColor="#03fb6e"
          />
        </h2>
        <p className="text-base font-bodyFont leading-6 tracking-wide">
          👋 Greetings! I’m Shaheer Amjad, an experienced full-stack web
          developer with 1.5+ years of experience creating beautiful and
          functional digital solutions. I specialize in front-end and back-end
          development, creating simple, functional and user-friendly websites
          and web applications and softwares.
        </p>
      </div>
      <div className="flex flex-col xl:flex-row gap-6 lgl:gap-0 justify-between">
        <div>
          <h2 className="text-base uppercase font-titleFont mb-4">
            Find me in
          </h2>
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
        <div>
          <h2 className="text-base uppercase font-titleFont mb-4">
            BEST SKILL ON
          </h2>
          <div className="grid grid-cols-3 gap-4">
            <span className="bannerIcon">
              <FaReact />
            </span>
            <span className="bannerIcon">
              <SiDotnet />
            </span>
            <span className="bannerIcon">
              <SiCplusplus />
            </span>
            <span className="bannerIcon">
              <SiJavascript />
            </span>
            <span className="bannerIcon">
              <SiTypescript />
            </span>
            <span className="bannerIcon">
              <SiTailwindcss />
            </span>
            <span className="bannerIcon">
              <SiBootstrap />
            </span>

            <span className="bannerIcon">
              <SiMicrosoftsqlserver />
            </span>
            <span className="bannerIcon">
              <SiFigma />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeftBanner;
