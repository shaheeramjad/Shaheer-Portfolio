import React from "react";
import { motion } from "framer-motion";
import ResumeCard from "./ResumeCard";

const Experience = () => {
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
          <h2 className="text-3xl md:text-4xl font-bold">Job Experience</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Associate Software Engineer"
            subTitle="Maima Soft - (Apr 2024 - Present)"
            result="Lahore, Pakistan"
            des={`• Spearheaded full-stack development of enterprise applications using React, .NET Core, and MS SQL Server, boosting client operational efficiency by 30%. <br />
         • Optimized Entity Framework Core queries in ASP.NET Core, reducing API response times by 40%. <br />
         • Delivered core business features including Distributor, Company, Stock, Sales, Expense, Ledger, and Custom Reporting modules. <br />
         • Built a reusable PDF reporting tool with React-to-PDF, cutting generation time from 10 minutes to 30 seconds for 10k+ records. <br />`}
          />

          <ResumeCard
            title="Intern Software Engineer"
            subTitle="Maima Soft - (Jan 2024 - Mar 2024)"
            result="Lahore, Pakistan"
            des={`• Delivered 4 production-ready modules using React and ASP.NET Core, achieving 100% on-time delivery. <br />
         • Improved UI/UX consistency by modernizing legacy codebases with Bootstrap 5, raising user satisfaction scores by 20%. <br />
         • Resolved 15+ high-priority bugs, strengthening system stability and earning recognition from senior engineers.`}
          />
        </div>
      </div>
      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">
            2024 - Present
          </p>
          <h2 className="text-3xl md:text-4xl font-bold">
            Community / Trainer Experience
          </h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Technical Trainer / Mentor"
            subTitle="Dev Weekends"
            result="Lahore"
            des="Help my mates and juniors to enhance their problem solving skills as well as development skills."
          />
        </div>
      </div>
    </motion.div>
  );
};

export default Experience;
