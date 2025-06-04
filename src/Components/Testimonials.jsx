import star from "../assets/images/star_1.png";
import allTestimonials from "../Apis/Testimonials";

function Testimonials() {
  return (
    <>
      <div className="md:px-12 p-5" id="testimonials">
        <div className="my-35 container">
          <div className="text-center" data-aos="fade-in">
            <span className="text-5xl uppercase font-bold">What</span>
            <br></br>
            <span className="text-xl text-(--accent)">users think.</span>
          </div>
          <div className="grid md:grid-cols-3 gap-15 mt-15">
            {allTestimonials.map((course) => (
              <div
                key={course.id}
                className="flex flex-col justify-center items-center text-center gap-6 px-5"
              data-aos="flip-left"
              >
                <div className="border-3  border-(--accent) rounded-full overflow-hidden">
                  <img src={`${course.image}`} alt="" className="grayscale" />
                </div>
                <h4 className="text-(--text-secondary)">{course.name}</h4>
                <div className="rating flex items-center gap-2">
                  <div>
                    <img src={`${star}`} alt="" />
                  </div>
                  <div>
                    <img src={`${star}`} alt="" />
                  </div>
                  <div>
                    <img src={`${star}`} alt="" />
                  </div>
                  <div>
                    <img src={`${star}`} alt="" />
                  </div>
                  <div>
                    <img src={`${star}`} alt="" className="grayscale" />
                  </div>
                </div>
                <p className="font-semibold relative ">
                  <span className="text-4xl mr-2 text-(--accent)">❝</span> Lorem
                  {course.description}
                  <span className="text-4xl ml-2 absolute md:right-22 right-8 -bottom-6 text-(--accent)">
                    ❞
                  </span>
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Testimonials;
