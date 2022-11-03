import { BsFillMoonFill, BsSunFill } from "react-icons/bs";
import { GiHamburgerMenu } from "react-icons/gi";
import { FiChevronDown } from "react-icons/fi";
import { BiSearch } from "react-icons/bi";
import { FaRegNewspaper } from "react-icons/fa";
import "./Header.css";
import { ThemeStateContext } from "../../contexts/contextProvider";
import { useState } from "react";

const Header = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const { currentTheme, setTheme } = ThemeStateContext();
  const changedVal = currentTheme === "light" ? "dark" : "light";

  return (
    <nav className="">
      <div className="container d-flex align-items-center justify-content-between py-2">
        <div className="d-flex align-items-center justify-content-between w-100">
          <div className="big__header d-flex align-items-center ">
            <FaRegNewspaper size={30} />
            <a>NewsBlog</a>
          </div>
          <div className="d-flex nav__search common__border align-items-center justify-content-center gap-2">
            <div>
              <BiSearch />
            </div>
            <input type="search" placeholder="Discover news Article and more" />
          </div>
          <ul
            className={` gap-3 p-2 navbar__nav d-flex`}
          >
            <li>Home</li>
            <li
              onClick={() => {
                setShowDropdown(!showDropdown);
              }}
            >
              More <FiChevronDown />
              <div className={`dropdown__menu common__border ${
              showDropdown ? "d-block" : "d-none"
            }`}>
                <a href="#">Beauty</a>
                <a href="#">Fashion & Style</a>
              </div>
            </li>
            <li>Contact</li>
          </ul>
        </div>
        <div
          onClick={() => {
            setTheme(changedVal);
          }}
        >
          <div className="default__icon">
            {currentTheme === "light" ? <BsFillMoonFill /> : <BsSunFill />}
          </div>
          <div className="default__icon d-block d-md-none ">
            <GiHamburgerMenu />
          </div>
        </div>
      </div>
    </nav>
  );
};
export default Header;
