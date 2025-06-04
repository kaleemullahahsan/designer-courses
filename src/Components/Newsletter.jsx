import bgImage from "../assets/images/newsletter-bg.png";
function Newsletter() {
  return (
    <>
      <div className={`md:px-15 p-5 flex justify-end items-end relative `} id="contact">
        <div className="max-w-160 md:mt-20 mt-0" data-aos="fade-up-left">
          <div className="text-center">
            <h3 className="text-3xl">Subscribe</h3>
            <span className="text-(--accent) text-4xl tracking-widest">to our newsletter</span>
            <p className="my-4 font-semibold">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Natus
              sit rem soluta quos dolor eum voluptates.
            </p>
          </div>
          <form action="" className="z-1 mb-10 relative mt-11 w-[100%] flex flex-col justify-center items-center gap-8 ">
            <input type="text" className="w-[100%] border-(--accent) border-2 outline-0 font-semibold p-5 uppercase" name="name" id="name" placeholder="Name" />
            <input type="email" className="w-[100%] border-(--accent) border-2  outline-0 font-semibold p-5 uppercase"  name="mail" id="mail" placeholder="Mail" />
            <textarea
              name="message"
              id="message"
              placeholder="Message"
              className="w-[100%] outline-0 border-(--accent) border-2 font-semibold p-5 uppercase"
              rows={5}
            ></textarea>
            <button className="pr-btn mt-2">Send Message</button>
          </form>
        </div>
        <div><img className="w-[50%] grayscale absolute left-0 bottom-0 z-10" src={`${bgImage}`} alt="" data-aos="zoom-in"/></div>
      </div>
    </>
  );
}

export default Newsletter;
