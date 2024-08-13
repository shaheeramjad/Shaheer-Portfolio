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
      <Title title="Features" des="What I Do" />
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-20">
        <Card
          title="Business Stratagy"
          des="Boost a business by automating processes, creating custom software solutions, and enhancing user experiences."
        />
        <Card
          title="Web Development"
          des="Creating innovative solutions for best user experiences in form of web applications."
          icon={<AiFillAppstore />}
        />
        <Card
          title="SEO Optimisation"
          des="Optimize your websites according to SEO standards that helps you to reach more customers."
          icon={<SiProgress />}
        />
        <Card
          title="Custom Software"
          des="Creating custom softwares for your business to boost it and easy management."
          icon={<FaLaptop />}
        />
        <Card
          title="UI/UX Design"
          des="Having experience related user interface which helps to create seamless user experiences."
          icon={<SiAntdesign />}
        />
        <Card
          title="Hosting Websites"
          des="Help to host your projects on cloud or local servers to enhance their visibility and performance."
          icon={<FaGlobe />}
        />
      </div>
    </section>
  );
};

export default Features;
