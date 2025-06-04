import leftImg from "../assets/images/online_2.png";
import rightImg from "../assets/images/online.png";
import centerImg from "../assets/images/oval_3.png";
import footerArrow from "../assets/images/arrow_3.png";
function Challenges() {
  return (
    <div className="py-40 container" >
      <div className="md:px-12 p-5 flex justify-between gap-5">
        <div className="before:top-52 before:left-0 uppercase font-semibold before:h-3 before:w-3 before:absolute relative before:bg-white" data-aos="fade-up">
          <img src={`${leftImg}`} alt="" />
        </div>
        <div>
          <div className="max-w-70 md:max-w-none md:before:bottom-29  before:bottom-15 before:right-13  md:before:h-8 md:before:w-8 before:h-3 before:w-3 before:bg-(--accent) before:rounded-full before:absolute   relative flex justify-center items-center md:after:top-30 after:top-15 after:left-13 after:h-3 after:w-3 md:after:h-8 md:after:w-8 after:bg-(--accent) after:rounded-full after:absolute">
            <img src={`${centerImg}`} alt="" data-aos="fade-in"/>
            <h3 className="absolute flex flex-col items-center gap-5 text-2xl" data-aos="fade-up">
              <span className="-rotate-1 ">Accept</span>
              <span className="-rotate-1font-thin">New</span>
              <span className="-rotate-1">Challeneges</span>
            </h3>
          </div>
        </div>
        <div className="before:-top-7 before:left-0 uppercase font-semibold before:h-3 before:w-3 before:absolute relative before:bg-white" data-aos="fade-down">
          <img src={`${rightImg}`} alt="" />
        </div>
      </div>
      <div className="mt-15 px-12 flex justify-between">
        <span className="md:text-3xl uppercase opacity-10 font-bold text-(--text-secondary)" data-aos="fade-right">
          Explore
        </span>
        <a href="" data-aos="fade-down" className="max-w-4 md:max-w-none">
          <img src={`${footerArrow}`} alt="" />
        </a>
        <span className="md:text-3xl text-xl uppercase opacity-10 font-bold text-(--text-secondary)" data-aos="fade-left">
          About
        </span>
      </div>
    </div>
  );
}

export default Challenges;
