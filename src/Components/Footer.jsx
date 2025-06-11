function Footer() {
  return (
    <>
     
      <div className="bg-(--accent) pt-30 overflow-hidden" data-aos="fade-in">
        <div className="md:px-15 p-5 grid md:grid-cols-2 pb-10 overflow-hidden container gap-20 ">
          <div className="grid md:grid-cols-2 gap-10 overflow-hidden">
            <div data-aos="fade-right">
              <h3 className="active w-max capitalize text-2xl">About</h3>
              <ul className="mt-10 capitalize text-lg space-y-1">
                <li>
                  <a href="#">History</a>
                </li>
                <li>
                  <a href="#">Our Team</a>
                </li>
                <li>
                  <a href="#">Mission</a>
                </li>
                <li>
                  <a href="#">Terms & Condition</a>
                </li>
                <li>
                  <a href="#">Privacy Policy</a>
                </li>
              </ul>
            </div>
            <div data-aos="fade-right">
              <h3 className="active w-max capitalize text-2xl">What we do</h3>
              <ul className="mt-10 capitalize text-lg space-y-1">
                <li>
                  <a href="#">Newsand stories</a>
                </li>
                <li>
                  <a href="#">Pubilcations</a>
                </li>
                <li>
                  <a href="#">Take action</a>
                </li>
                <li>
                  <a href="#">Recommendation</a>
                </li>
                <li>
                  <a href="#">Help</a>
                </li>
              </ul>
            </div>
          </div>
          <div
            className="space-y-10 flex  mdjustify-end flex-col md:items-end"
            data-aos="fade-left"
          >
            <h2 className="capitalize text-2xl md:text-3xl md:text-end text-center">
              Sign up to receive
              <br></br>
              <span className="before:absolute before:border-1 before:border-white relative before:w-[30%] before:bottom-3 md:before:-left-20 before:-left-14">
                Our Newsletter
              </span>
            </h2>
            <div className="border-1 border-white text-center p-2 flex justify-center items-center">
              <input
                type="email"
                className=" outline-0 font-semibold md:p-4 p-2 uppercase"
                placeholder="Mail"
              />
              <button className="bg-white uppercase rounded cursor-pointer text-(--accent) p-3 md:px-8 md:py-4 font-semibold">
                Submit
              </button>
            </div>
            <div className="flex items-center md:gap-10 gap-3">
              <span className="md:text-xl text-lg">Follow us!</span>
              <a
                href="#"
                className="bg-white md:text-2xl text-(--accent) px-4 py-2 md:px-5 md:py-3 rounded-full"
              >
                <i class="fa-brands fa-facebook-f"></i>
              </a>
              <a
                href="#"
                className="bg-white md:text-2xl text-(--accent) px-3 py-2 md:px-4 md:py-3 rounded-full"
              >
                <i class="fa-brands fa-instagram"></i>
              </a>
              <a
                href="#"
                className="bg-white md:text-2xl text-(--accent) px-3 py-2 md:px-4 md:py-3 rounded-full"
              >
                <i class="fa-brands fa-youtube"></i>
              </a>
            </div>
          </div>
        </div>
        <div className="text-center py-4 px-15 text-sm  font-bold tracking-widest text-nowrap">
          <span className="bg-white p-4 px-8   rounded-t-lg shadow-2xl text-(--accent)">
            © 2025 Website By{" "}
            <a
              href="https://seraprogrammer.com/ahsan"
              className="uppercase hover:text-[#7325f3]"
            >
              Ahsan
            </a>
          </span>
        </div>
      </div>
    </>
  );
}

export default Footer;
