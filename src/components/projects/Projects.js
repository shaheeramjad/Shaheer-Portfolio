import React from "react";
import Title from "../layouts/Title";
import {
  projectOne,
  projectThree,
  projectSeven,
  project8,
  project9,
} from "../../assets/index";
import ProjectsCard from "./ProjectsCard";

const Projects = () => {
  return (
    <section
      id="projects"
      className="w-full py-20 border-b-[1px] border-b-black"
    >
      <div className="flex justify-center items-center text-center">
        <Title
          title="VISIT MY PORTFOLIO AND KEEP YOUR FEEDBACK"
          des="My Projects"
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-14">
        <ProjectsCard title="MV SHOPS" src={project9} projectId="mv-shops" />
        <ProjectsCard
          title="HISABER ACCOUNTS"
          src={projectSeven}
          projectId="hisaber-accounts"
        />
        <ProjectsCard
          title="HISABER PHARMACY"
          src={projectOne}
          projectId="hisaber-pharmacy"
        />
        <ProjectsCard
          title="I-Discuss Coding Forum"
          src={projectThree}
          projectId="i-discuss-coding-forum"
        />
        <ProjectsCard
          title="School Management System"
          src={project8}
          projectId="legacy-code"
        />
      </div>
    </section>
  );
};

export default Projects;
