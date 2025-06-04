import allCourses from "../Apis/Courses";
function Courses() {
  return (
    <div className="md:px-12 p-5 overflow-hidden">
      <div className="container">
        <div className="text-header flex justify-between">
          <h2 data-aos="fade-right">
            <span className="md:text-6xl text-3xl">Find</span>
            <span className="text-(--text-secondary) ml-2">Your Course</span>
          </h2>
          <span className="before:top-1 before:-left-7 uppercase before:h-3 before:w-3 before:absolute relative before:bg-white text-md" data-aos="zoom-in">
            Edition <br></br>
            <span className="md:text-2xl font-bold">2025</span>
          </span>
        </div>
        <div className="courses md:mt-20 mt-10 grid md:grid-cols-4 gap-10">
         {allCourses.map((course) => (
        <div
          key={course.id}
          className="hover:border-(--accent) transition-all duration-300 p-12 flex justify-center gap-10 text-center flex-col items-center border-2 border-white"
        data-aos="zoom-in-up"
        >
          <h3 className="relative text-2xl after:content-[''] after:absolute after:-bottom-5 after:left-1/2 after:translate-x-[-50%] after:h-1 after:w-[70%] after:border-t-2 after:border-(--accent)">
            {course.title.split(" ")[0]}{" "}
            <span className="text-[--accent]">{course.title.split(" ")[1]}</span>
          </h3>

          <p className="font-semibold">{course.description}</p>

          <a href={course.link} className="pr-btn">
            read more
          </a>
        </div>
      ))}
        </div>
      </div>
    </div>
  );
}

export default Courses;
