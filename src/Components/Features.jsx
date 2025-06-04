function Features() {
  return (
    <div className="shadow-[0px_0px_10px_10px_black] py-15 " data-aos="fade-up">
      <div className="flex justify-evenly items-center flex-col md:flex-row gap-15 md:gap-0">
        <div className="flex justify-center gap-3 items-center">
            <span className="font-semibold text-5xl before:content-['+'] before:text-4xl before:text-(--accent)">150</span>
            <div className="flex flex-col uppercase">
                <span>Happy</span>
                <span className="font-semibold">Students</span>
            </div>
        </div>
         <div className="flex justify-center gap-3 items-center">
            <span className="font-semibold text-5xl before:content-['+'] before:text-4xl before:text-(--accent)">50</span>
            <div className="flex flex-col uppercase">
                <span>Certified</span>
                <span className="font-semibold">Courses</span>
            </div>
        </div>
         <div className="flex justify-center gap-3 items-center">
            <span className="font-semibold text-5xl before:content-['+'] before:text-4xl before:text-(--accent)">1000</span>
            <div className="flex flex-col uppercase">
                <span>Award</span>
                <span className="font-semibold">Received</span>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Features
