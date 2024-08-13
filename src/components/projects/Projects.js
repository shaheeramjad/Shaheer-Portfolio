import React from "react";
import Title from "../layouts/Title";
import {
  projectOne,
  projectTwo,
  projectThree,
  projectFour,
  projectFive,
  projectSix,
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
        <ProjectsCard
          title="HISABER"
          des=" My Client requested me to build a software according to his pharmacy requirements. I gather his requirements and start working on it. In result i build a software to manage his Distributors, Companies, Stock, Sales, Expenses, Ledger, Sales Reports, Custom Reports in PDF and many more successfully!"
          src={projectOne}
        />
        <ProjectsCard
          title="E-Medicine"
          des="My Client wants a software with website on which he can perform multi tasks like on software side he manage inventory and on website side he can sale it online. Its basically like an ecommerce store and also a software for managing it. Its also a new kind of development for me!"
          src={projectTwo}
        />
        <ProjectsCard
          title="I-Discuss Coding Forum"
          des=" My Client wants a website like Stack Overflow. On which users can ask questions about coding and others can answer them. I build a multipage project like Stack Overflow according to client requirements. My client was fully satisfied after seeing it!"
          src={projectThree}
        />
        <ProjectsCard
          title="London Restaurant"
          des=" I contribute in London Restaurant as a Front-End Developer. I creates its client side model for effective user interface. I build it with the help of HTML, CSS, React-Bootstrap. JavaScript and ReactJS!"
          src={projectFour}
        />
        <ProjectsCard
          title="Clone Myntra"
          des="I clone myntra for my initial practice in react js!"
          src={projectFive}
        />
        <ProjectsCard
          title="Personal Portfolio"
          des="Its my personal portfolio that you are watching!"
          src={projectSix}
        />
      </div>
    </section>
  );
};

export default Projects;
