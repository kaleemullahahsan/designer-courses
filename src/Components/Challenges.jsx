import leftImg from "../assets/images/online_2.png";
import rightImg from "../assets/images/online.png";
import centerImg from "../assets/images/oval_3.png";
import footerArrow from "../assets/images/arrow_3.png";
function Challenges() {
  return (
    <div className="py-40 container overflow-hidden">
      <div className="md:px-12 p-5 flex justify-between gap-5">
        <div
          className="before:top-52 before:left-0 uppercase font-semibold before:h-3 before:w-3 before:absolute relative before:bg-white"
          data-aos="fade-up"
        >
          <img src={`${leftImg}`} alt="" />
        </div>
        <div className="relative flex justify-center items-center w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] overflow-hidden pt-10">
          <svg
            viewBox="0 0 1000 600"
            className="absolute w-full h-full rotate-[20deg]"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              id="motionPath"
              d="M 460,100 a 440,115 0 1,1 -0.1,0"
              fill="none"
              stroke="white"
              strokeWidth="1"
              className="overflow-hidden"
            />

            <circle r="15" fill="#a855f7">
              <animateMotion dur="12s" repeatCount="indefinite" rotate="auto">
                <mpath href="#motionPath" />
              </animateMotion>
            </circle>

            <circle r="15" fill="#a855f7">
              <animateMotion
                dur="12s"
                begin="6s"
                repeatCount="indefinite"
                rotate="auto"
              >
                <mpath href="#motionPath" />
              </animateMotion>
            </circle>
          </svg>
          <h3
            className="lg:-mt-[192px] absolute z-10 flex flex-col items-center gap-2 text-white text-lg sm:text-2xl md:text-3xl font-bold"
            data-aos="fade-up"
          >
            <span className="-rotate-1">ACCEPT</span>
            <span className="-rotate-1 font-thin">NEW</span>
            <span className="-rotate-1">CHALLENGES</span>
          </h3>
        </div>

        <div
          className="before:-top-7 mt-7  before:left-0 uppercase font-semibold before:h-3 before:w-3 before:absolute relative before:bg-white"
          data-aos="fade-down"
        >
          <img src={`${rightImg}`} alt="" />
        </div>
      </div>
      <div className="mt-15 px-12 flex justify-between">
        <span
          className="md:text-3xl uppercase opacity-10 font-bold text-(--text-secondary)"
          data-aos="fade-right"
        >
          Explore
        </span>
        <a
          href="#testimonials"
          data-aos="fade-down"
          className="max-w-4 md:max-w-none"
        >
          <img src={`${footerArrow}`} alt="" />
        </a>
        <span
          className="md:text-3xl text-xl uppercase opacity-10 font-bold text-(--text-secondary)"
          data-aos="fade-left"
        >
          About
        </span>
      </div>
    </div>
  );
}

export default Challenges;
