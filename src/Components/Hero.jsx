import React from "react";
import beginners from "../assets/images/beginners_3.png";
import bannerImg from "../assets/images/banner-img.png";
function Hero() {
  return (
    <>
      <section className="md:px-12 p-5 min-h-[100vh] overflow-hidden flex items-center container">
        <div className="w-[100%]">
          <div className="grid lg:grid-cols-3 w-[100%] gap-15 mt-10">
            <div className="flex-col">
              <h2 className="hero-head" data-aos="fade-right">
                UI
              </h2>
              <div className="flex items-center justify-between w-[100%] mt-15">
                <img src={`${beginners}`} alt="" data-aos="fade-up" />
                <span
                  className="before:top-1 before:-left-7 uppercase font-semibold before:h-3 before:w-3 before:absolute relative before:bg-white "
                  data-aos="fade-down"
                >
                  Become a <br></br> pro-designer
                </span>
              </div>
            </div>
            <div
              className="overflow-hidden  after:overflow-hidden after:relative h-110 flex justify-center items-center after:h-80 after:w-80 after:bg-(--accent) after:rounded-full"
              data-aos="fade-in"
            >
              <img
                src={`${bannerImg}`}
                className="grayscale z-10 md:h-160  absolute h-[100%]"
                alt=""
                data-aos="fade-up"
              />
            </div>
            <div className="flex justify-center flex-col items-center relative">
              <div
                className="hidden absolute top-0 -right-13 py-5 pl-5 pr-20 border-1 border-white border-r-0 lg:flex flex-col font-bold uppercase"
                data-aos="fade-left"
              >
                <span>Edition</span>
                <span className="text-3xl">2025</span>
              </div>
              <div data-aos="fade-up" className="mb-15 lg:mb-0">
                <h3 className="text-xl">Start guide for beginner designers</h3>
                <p className="py-3 text-lg mb-5">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit
                  ipsa iste magnam, asperiores assumenda debitis.
                </p>
                <a href="#" className="pr-btn md:px-8 md:py-3 px-4 py-2 text-nowrap">
                  Let's Start
                </a>
                <a
                  href="#"
                  className="md:px-8 md:py-3 px-4 py-2 rounded capitalize font-semibold text-sm text-nowrap"
                >
                  Read more
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Hero;
