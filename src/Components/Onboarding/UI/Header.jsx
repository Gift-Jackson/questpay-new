import { Link, NavLink } from "react-router-dom";
import Brand from "../../Global/Brand";
import Theme from "../../Global/Theme";
import { useState } from "react";
import MobileNav from "./MobileNav";

const links = [
  {
    label: "Home",
    path: "",
  },
  {
    label: "Offers",
    path: "offers",
  },
  {
    label: "Contacts",
    path: "contact",
  },
];
const Header = () => {
  const [openTheme, setOpenTheme] = useState(false);
  const [openMenu, setOpenMenu] = useState(false);
  const toggleThemeMenu = () => {
    setOpenTheme((prev) => !prev);
  };
  const toggleMenu = () => {
    setOpenMenu((prev) => !prev);
  };
  return (
    <>
      <header className="border-b border-stroke">
        <nav className="main h-[80px] flex items-center justify-between ">
          <Brand />

          <div className=" space-x-8 flex">
            <ul className="border-r border-stroke pr-8 md:flex items-center gap-x-8 hidden ">
              {links.map((link, index) => (
                <li key={index}>
                  <NavLink
                    className={({ isActive }) =>
                      isActive
                        ? "text-primary font-semibold"
                        : "text-subtext font-medium hover:text-maintext"
                    }
                    to={link.path}
                  >
                    {link.label}
                  </NavLink>
                </li>
              ))}
            </ul>

            <div className="flex gap-x-4 items-center">
              <button
                onClick={toggleThemeMenu}
                className="outline h-[45px] w-[45px] flex items-center justify-center bg-secondary rounded-xl border-stroke border "
              >
                <span className="material-symbols-outlined text-primary">
                  colors
                </span>
              </button>

              <Link to="/login" className="hidden md:block">
                <button className="btn bg-primary px-8 border-0 hover:brightness-90 text-white outline-none hover:bg-primary duration-500">
                  <span className="text-inherit">Sign In</span>
                  <span className="material-symbols-outlined text-inherit">
                    arrow_forward
                  </span>
                </button>
              </Link>

              <div
                onClick={toggleMenu}
                className="h-[45px] w-[45px] flex md:hidden items-center justify-center cursor-default bg-mediumbg rounded-xl border-stroke border"
              >
                <span className="material-symbols-outlined text-inherit">
                  menu
                </span>
              </div>
            </div>
          </div>
        </nav>
      </header>
      {openTheme && <Theme toggleThemeMenu={toggleThemeMenu} />}
      <div className="md:hidden">
        {openMenu && <MobileNav links={links} toggleMenu={toggleMenu} />}
      </div>
    </>
  );
};

export default Header;
