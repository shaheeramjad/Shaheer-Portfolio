import React from "react";
import { BsGithub } from "react-icons/bs";
import { FaGlobe } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const ProjectsCard = ({ title, des, src, projectId }) => {
  const navigate = useNavigate();
  const handleCaseStudy = () => {
    navigate(`/case-study/${projectId}`);
  };
  return (
    <div className="w-full p-4 xl:px-12 h-auto xl:py-10 rounded-lg shadow-shadowOne flex flex-col bg-gradient-to-r from-bodyColor to-[#202327] group hover:bg-gradient-to-b hover:from-gray-900 hover:gray-900 transition-colors duration-1000">
      <div className="w-full h-[80%] overflow-hidden rounded-lg">
        <img
          className="w-full h-60 object-cover group-hover:scale-110 duration-300 cursor-pointer"
          src={src}
          alt="src"
        />
      </div>
      <div className="w-full mt-5 flex flex-col  gap-6">
        <div>
          <div className="flex items-center justify-between">
            <h3 className="text-base uppercase text-designColor font-normal">
              {title}
            </h3>
            <div className="flex gap-2">
              <a
                href="https://github.com/shaheeramjad"
                target="_blank"
                rel="noreferrer"
                className="text-lg w-10 h-10 rounded-full bg-black inline-flex justify-center items-center text-gray-400 hover:text-designColor duration-300 cursor-pointer"
              >
                <BsGithub />
              </a>
            </div>
          </div>
          <button
            className="mt-3 px-4 py-2 bg-designColor text-black rounded hover:bg-opacity-80 transition"
            onClick={handleCaseStudy}
          >
            Click Here For Case Study
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProjectsCard;
