import React, { useState } from 'react';
import logo from "../assets/images/your_logo.png";

function Navbar() {

const [isMenuOpen, setIsMenuOpen] = useState(false);

  const openMenu = () => {
    setIsMenuOpen(true);
  };

    const closeMenu = () => {
    setIsMenuOpen(false);
  };
  return (
    <>
      <header
        className="flex justify-between container items-center py-10 px-12 w-[100%]"
        data-aos="fade-down"
      >
        <a href="#">
          <img src={`${logo}`} alt="" />
        </a>
        <nav
          id="menu"
          className={`absolute z-20  h-screen lg:h-auto lg:flex ${isMenuOpen ? 'flex' : 'hidden'} justify-center bg-(--background) w-[100%] top-0 left-0 lg:relative `}
        >
          <ul className="flex justify-center items-center gap-10 lg:gap-30 font-bold uppercase flex-col lg:flex-row">
            <li>
              <a href="#" className=" nav-link active">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="nav-link">
                About
              </a>
            </li>
            <li>
              <a href="#" className="nav-link">
                Courses
              </a>
            </li>
            <li>
              <a href="#" className="nav-link">
                Blog
              </a>
            </li>
          </ul>
          <div className="absolute top-5 right-5 lg:hidden" onClick={closeMenu}>
            <span class="material-symbols-outlined">close</span>
          </div>
        </nav>
        <div className="cta-btn text-nowrap flex justify-center items-center gap-5">
          <a
            href="#"
            className="rounded bg-white text-(--background) py-2 px-5 uppercase font-bold"
          >
            sign in
          </a>
          <div className="lg:hidden" onClick={openMenu}>
            <span class="material-symbols-outlined">menu</span>
          </div>
        </div>
      </header>
    </>
  );
}

export default Navbar;
