import React from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import {
  FaGithub,
  FaLinkedinIn,
  FaReact,
  FaNodeJs,
  FaChartLine,
  FaBrain,
} from "react-icons/fa";
import {
  SiDotnet,
  SiJavascript,
  SiCplusplus,
  SiTypescript,
  SiTailwindcss,
  SiMicrosoftsqlserver,
  SiMongodb,
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
      "CS Enthusiast.",
    ],
    loop: true,
    typeSpeed: 15,
    deleteSpeed: 10,
    delaySpeed: 2000,
  });

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="w-full lgl:w-1/2 flex flex-col gap-20">
      <div className="flex flex-col gap-5">
        <h4 className=" text-lg font-normal">WELCOME TO MY WORLD</h4>

        {/* Interactive Demo Links */}
        <div className="flex flex-col sm:flex-row gap-4 mb-4">
          <div
            className="group cursor-pointer"
            onClick={() => scrollToSection("systemmonitor")}
          >
            <div className="flex items-center gap-3 p-4 bg-gradient-to-r from-[#1e2024] to-[#23272b] rounded-lg border border-zinc-800 hover:border-designColor transition-all duration-300 hover:shadow-lg hover:shadow-designColor/20">
              <div className="p-3 bg-designColor rounded-lg group-hover:scale-110 transition-transform duration-300">
                <FaChartLine className="text-black text-xl" />
              </div>
              <div>
                <h3 className="text-white font-semibold text-sm">
                  System Monitor
                </h3>
                <p className="text-gray-400 text-xs">
                  Real-time metrics & alerts
                </p>
              </div>
            </div>
          </div>

          <div
            className="group cursor-pointer"
            onClick={() => scrollToSection("algorithmvisualizer")}
          >
            <div className="flex items-center gap-3 p-4 bg-gradient-to-r from-[#1e2024] to-[#23272b] rounded-lg border border-zinc-800 hover:border-designColor transition-all duration-300 hover:shadow-lg hover:shadow-designColor/20">
              <div className="p-3 bg-designColor rounded-lg group-hover:scale-110 transition-transform duration-300">
                <FaBrain className="text-black text-xl" />
              </div>
              <div>
                <h3 className="text-white font-semibold text-sm">
                  Algorithm Visualizer
                </h3>
                <p className="text-gray-400 text-xs">
                  Interactive sorting & pathfinding
                </p>
              </div>
            </div>
          </div>
        </div>

        <h1 className="text-6xl font-bold text-white">
          Hi, I'm <span className="text-designColor capitalize">Shaheer</span>
        </h1>
        <h2 className="text-4xl font-bold text-white">
          a <span>{text}</span>
          <Cursor
            cursorBlinking="false"
            cursorStyle="|"
            cursorColor="#3DC3C2"
          />
        </h2>
        <p className="text-base font-bodyFont leading-6 tracking-wide">
          Hi, I’m Shaheer Amjad, a passionate Software Engineer with hands-on
          experience in building scalable, user friendly, and high performance
          web applications. With expertise in both front-end and back-end
          development, I specialize in turning complex problems into simple,
          elegant digital solutions.
          <br />
          <br />I thrive in remote, collaborative environments, bringing strong
          problem solving skills, clean coding practices, and a focus on
          delivering impactful results. My goal is to contribute to innovative
          teams by building software that not only works but creates real value
          for users
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
              <SiCplusplus />
            </span>
            <span className="bannerIcon">
              <SiJavascript />
            </span>
            <span className="bannerIcon">
              <SiTypescript />
            </span>
            <span className="bannerIcon">
              <FaReact />
            </span>
            <span className="bannerIcon">
              <FaNodeJs />
            </span>
            <span className="bannerIcon">
              <SiMongodb />
            </span>
            <span className="bannerIcon">
              <SiDotnet />
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
