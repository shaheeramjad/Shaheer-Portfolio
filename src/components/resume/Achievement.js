import React from "react";
import { motion } from "framer-motion";
import ResumeCard from "./ResumeCard";

const Achievement = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-full flex flex-col lgl:flex-row gap-10 lgl:gap-20"
    >
      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">
            2023 - Present
          </p>
          <h2 className="text-3xl md:text-4xl font-bold">Certificates</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Prompt Engineering"
            subTitle="Simpli Learn"
            result="Success"
            des="It helps me to introduce with AI and teach how can we use AI in efficient way!"
          />
          <ResumeCard
            title="Fundamentals of Web Development"
            subTitle="Udemy"
            result="Success"
            des="It is a certificate that prove my web development skills. It also helps me to understand the structure of a web application!"
          />
          <ResumeCard
            title="AWS Educate Intro to Cloud"
            subTitle="AWS Educate"
            result="Success"
            des="Its an incredible journey towards cloud computing teaches me how cloud computing works how can we deploy our projects on it!"
          />
        </div>
      </div>
      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          {/* <p className="text-sm text-designColor tracking-[4px]">2007 - 2010</p> */}
          {/* <h2 className="text-3xl md:text-4xl font-bold">Job Experience</h2> */}
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Google Soft Skills Program"
            subTitle="Expert Level"
            result="Success"
            des="It enhances my soft skills to use in my career for dealing with clients, giving trainings and talk in efficient manner !"
          />
          <ResumeCard
            title="Youth Leadership Program"
            subTitle="Qasim Ali Shah Foundation"
            result="Success"
            des="A significant certification on leadership skills that boost my skills. It teaches me how to lead in professional career, projects and in life!"
          />
          <ResumeCard
            title="React & Readux"
            subTitle="KG Coding by Prashant Sir"
            result="Success"
            des="React certification that provides me theoretical as well as practical knowledge about its working and usage in indutary!"
          />
        </div>
      </div>
    </motion.div>
  );
};

export default Achievement;
