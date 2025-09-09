import React from "react";
import { AiFillAppstore } from "react-icons/ai";
import { FaLaptop, FaGlobe } from "react-icons/fa";
import { SiProgress, SiAntdesign } from "react-icons/si";
import Title from "../layouts/Title";
import Card from "./Card";

const Features = () => {
  return (
    <section
      id="features"
      className="w-full py-20 border-b-[1px] border-b-black"
    >
      <Title title="Features" des="What I Work On" />
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-20">
        <Card
          title="Problem Solving"
          des="I enjoy solving challenging problems by writing clean, efficient, and scalable code."
        />
        <Card
          title="Full-Stack Development"
          des="Building responsive, secure, and maintainable web applications using modern frameworks and technologies."
          icon={<AiFillAppstore />}
        />
        <Card
          title="Performance & Optimization"
          des="Improving application speed, database queries, and user experience by optimizing code and architecture."
          icon={<SiProgress />}
        />
        <Card
          title="Custom Software Solutions"
          des="Designing and developing tailored software that meets specific business needs and scales with growth."
          icon={<FaLaptop />}
        />
        <Card
          title="UI/UX Implementation"
          des="Translating designs into smooth and accessible interfaces, ensuring great user experiences."
          icon={<SiAntdesign />}
        />
        <Card
          title="Deployment & Hosting"
          des="Deploying applications on cloud platforms (AWS, Vercel, Render) and managing environments effectively."
          icon={<FaGlobe />}
        />
      </div>
    </section>
  );
};

export default Features;
