import React, { useState } from "react";
import logo from "../assets/images/your_logo.png";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const openMenu = () => {
    setIsMenuOpen(true);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const [activeLink, setActiveLink] = useState("/");

  const links = [
    { href: "/", label: "Home" },
    { href: "#about", label: "About" },
    { href: "#courses", label: "Courses" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <>
      <header
        className="flex z-90 bg-(--background) fixed lg:relative top-0 left-0 justify-between container items-center md:py-10 md:px-12 p-5 w-[100%] gap-5"
        data-aos="fade-down"
      >
        <a href="/">
          <img src={`${logo}`} alt="" />
        </a>
        <nav
          id="menu"
          className={`fixed z-90  h-screen lg:h-auto lg:flex ${
            isMenuOpen ? "flex" : "hidden"
          } justify-center bg-(--background) w-[100%] top-0 left-0 lg:relative `}
        >
          <ul className="flex justify-center items-center gap-10 lg:gap-30 font-bold uppercase flex-col lg:flex-row">
            {links.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className={`nav-link ${
                    activeLink === link.href ? "active" : ""
                  }`}
                  onClick={() => setActiveLink(link.href)}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <div className="absolute top-5 right-5 lg:hidden" onClick={closeMenu}>
            <span class="material-symbols-outlined">close</span>
          </div>
        </nav>
        <div className="cta-btn text-nowrap flex justify-center items-center gap-5">
          <a
            href="#"
            className="rounded bg-white text-(--background) md:py-2 md:px-5 px-3 py-1 uppercase font-bold"
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
