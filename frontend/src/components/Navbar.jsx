import React, { useState } from "react";
import api from "../restApi.json";
import { Link } from "react-scroll";
import { GiHamburgerMenu } from "react-icons/gi";
const Navbar = () => {
  const [show, setShow] = useState(false);
  return (
    <>
      <nav>
        <div className="logo">RestroH</div>
        <div className={show ? "navLinks showmenu" : "navLinks"}>
          <div className="links">
            {api.data[0].navbarLinks.map((element) => (
              <Link
                to={element.link}
                spy={true}
                smooth={true}
                duration={500}
                key={element.id}
              >
                {element.title}
              </Link>
            ))}
          </div>
          <Link to="menu" className="menuBtn" spy={true} smooth={true} duration={500}>
            OUR MENU
          </Link>
        </div>
        <div className="hamburger" onClick={()=> setShow(!show)}>
                <GiHamburgerMenu/>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
