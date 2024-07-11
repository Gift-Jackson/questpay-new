import { Link, NavLink } from "react-router-dom";
import Modal from "../../Global/Modal";
import PropTypes from "prop-types";
const MobileNav = ({ links, toggleMenu }) => {
  return (
    <>
      <Modal title="Menu" closeModal={toggleMenu}>
        <div>
          <ul className="my-4 flex flex-col gap-y-2">
            {links.map((link, index) => (
              <li key={index}>
                <NavLink
                  to={link.path}
                  className={({ isActive }) =>
                    isActive
                      ? "text-primary p-2 rounded-lg font-semibold block w-full bg-mediumbg"
                      : "text-subtext p-2 rounded-lg block font-medium w-full hover:text-maintext hover:bg-mediumbg"
                  }
                >
                  {link.label}
                </NavLink>
              </li>
            ))}
          </ul>

          <Link to="/login">
            <button className="btn btn-primary px-8 mt-4">
              <span className="text-inherit">Sign In</span>
              <span className="material-symbols-outlined text-inherit">
                arrow_forward
              </span>
            </button>
          </Link>
        </div>
      </Modal>
    </>
  );
};
MobileNav.propTypes = {
    links: PropTypes.array,
    toggleMenu: PropTypes.func
};

export default MobileNav;
