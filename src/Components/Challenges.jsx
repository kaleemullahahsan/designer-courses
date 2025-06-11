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
        <div className="flex justify-center">
          <svg width="1000" height="600" class="absolute rotate-20">
            <path
              d="
    M 460,100
    a 440,115 0 1,1 -0.1,0
  "
              fill="none"
              stroke="white"
            />
          </svg>

          <div className="relative w-[1000px] h-[600px] rotate-20">
            <div className="absolute w-8 h-8 bg-purple-400 rounded-full dot"></div>
            <div className="absolute w-8 h-8 bg-purple-400 rounded-full dot dot2"></div>
          </div>
          <h3
            className="absolute flex flex-col items-center gap-5 text-3xl mt-32"
            data-aos="fade-up"
          >
            <span className="-rotate-1 ">Accept</span>
            <span className="-rotate-1font-thin">New</span>
            <span className="-rotate-1">Challeneges</span>
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
