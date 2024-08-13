import React from "react";
import { motion } from "framer-motion";
import ResumeCard from "./ResumeCard";

const Education = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-full flex flex-col lgl:flex-row gap-10 lgl:gap-20"
    >
      {/* part one */}
      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">
            2019 - Present
          </p>
          <h2 className="text-3xl md:text-4xl font-bold">Education Quality</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="BSc in Computer Science"
            subTitle="University of Education, Lahore (2023 - 2027)"
            result="3.10/4"
            des="The University of Education provides Computer Science graduates with a solid foundation in both theoretical and practical aspects of technology."
          />
          <ResumeCard
            title="Intermediate in Computer Science"
            subTitle="Superior College Pattoki (2021 - 2023)"
            result="80%"
            des="Higher education is tertiary education leading to award of an academic degree. Higher education, also called post-secondary education."
          />
          <ResumeCard
            title="Secondary School Education"
            subTitle="GES Chunian (2019 - 2021)"
            result="98.8%"
            des="Secondary education or post-primary education covers two phases on the International Standard Classification of Education scale."
          />
        </div>
      </div>
      {/* part Two */}

      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">
            2022 - Present
          </p>
          <h2 className="text-3xl md:text-4xl font-bold">Job Experience</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Developer"
            subTitle="Maima Soft - (2023 - Present)"
            result="Lahore, Pakistan"
            des="Promoting from intern to developer in just less than 1 year Its a proof of my skills. As a developer i helps customers to solve their problems and put imaginations into code."
          />
          <ResumeCard
            title="Freelancer"
            subTitle="Fiverr, Upwork, etc - (2023 - Present)"
            result="Remote"
            des="Freelancing helps us to craft seamless user experiences from scratch on the behalf of ourself it also a mirror of our expertise."
          />
          <ResumeCard
            title="Intern Developer"
            subTitle="Maima Soft - (2022 - 2023)"
            result="Lahore, Pakistan"
            des="As an intern i worked on various projects with lead software engineers it helps me to gain hands on experience with industry experts."
          />
        </div>
      </div>
    </motion.div>
  );
};

export default Education;
