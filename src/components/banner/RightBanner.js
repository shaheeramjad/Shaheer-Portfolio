import { bannerImg } from "../../assets/index";

const RightBanner = () => {
  return (
    <div className="w-full lgl:w-1/2 flex justify-center items-center relative">
      {/* Profile Image */}
      <img
        className="relative z-10 max-w-[280px] sm:max-w-[350px] md:max-w-[450px] lgl:max-w-[530px] rounded-lg object-cover"
        src={bannerImg}
        alt="Shaheer Amjad Full Stack Developer"
        loading="lazy"
      />

      {/* Gradient Background Shape */}
      <div
        className="absolute bottom-0 w-[280px] sm:w-[350px] md:w-[450px] lgl:w-[500px] 
                      h-[280px] sm:h-[350px] md:h-[450px] lgl:h-[500px]
                      bg-gradient-to-r from-[#1e2024] to-[#202327] 
                      shadow-shadowOne rounded-full blur-2xl opacity-70"
      ></div>
    </div>
  );
};

export default RightBanner;
