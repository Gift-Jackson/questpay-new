import PropTypes from "prop-types";
import { useContext } from "react";
import { ThemeContext } from "../../Context/ThemeProvider";
import Modal from "./Modal";

const Theme = ({ toggleThemeMenu }) => {
  const { darkMode, toggleDarkMode, selectTheme } = useContext(ThemeContext);
  const colors = [
    "mediumseagreen",
    "orange",
    "dodgerblue",
    "crimson",
    "hotpink",
    "mediumslateblue",
  ];
  const handleColorSelect = (color) => {
    selectTheme(color);
    toggleThemeMenu();
  };

  const closeModal = () => {
    toggleThemeMenu();
    toggleDarkMode();
  };

  return (
    <Modal title="Select Theme" closeModal={closeModal}>
      <div className="w-full mt-4">
        <div
          className="flex bg-secondary gap-1 h-10 p-[.2em] rounded-xl "
          onClick={closeModal}
        >
          <button
            className={`flex-1 text-primary rounded-lg flex items-center justify-center gap-2 ${
              darkMode && "bg-lightbg text-subtext"
            }`}
          >
            <span className="material-symbols-outlined font-semibold text-inherit text-base">
              light_mode
            </span>
            <span className="text-inherit font-medium text-sm">Light</span>
          </button>
          <button
            className={`flex-1 flex text-primary rounded-lg items-center justify-center gap-[.2em] ${
              !darkMode && "bg-lightbg text-subtext"
            }`}
          >
            <span className="material-symbols-outlined font-semibold text-inherit text-base">
              dark_mode
            </span>
            <span className="text-inherit text-sm font-medium">Dark</span>
          </button>
        </div>
        <div className="color-grid border-[1px] border-stroke p-4 rounded-xl mt-6">
          {colors.map((color) => (
            <div
              key={color}
              style={{ backgroundColor: color }}
              className={` h-[100px] rounded-full w-[100px] border-8 border-stroke mx-auto cursor-pointer`}
              onClick={() => handleColorSelect(color)}
            ></div>
          ))}
        </div>
      </div>
    </Modal>
  );
};

Theme.propTypes = {
  toggleThemeMenu: PropTypes.func,
};

export default Theme;
