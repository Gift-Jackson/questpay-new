import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <header className="main header">
        <nav className="flex items-center justify-between py-4">
          <Link to={-1}>
            <button className="outline py-2 px-4 flex items-center justify-center bg-mediumbg border-[1px] border-stroke rounded-xl text-subtext hover:text-primary">
              <span className="material-symbols-outlined text-sm text-inherit">
                arrow_back_ios
              </span>
              <span className="text-inherit text-sm">Back</span>
            </button>
          </Link>
        </nav>
      </header>
    </>
  );
};

export default Header;
