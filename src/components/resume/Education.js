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
            result="3.21/4"
            des="The University of Education provides Computer Science graduates with a solid foundation in both theoretical and practical aspects of technology."
          />
          <ResumeCard
            title="Intermediate in Computer Science"
            subTitle="Superior Group of Colleges (2021 - 2023)"
            result="80%"
            des="Higher education is tertiary education leading to award of an academic degree. Higher education, also called post-secondary education."
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
    </motion.div>
  );
};

export default Education;
