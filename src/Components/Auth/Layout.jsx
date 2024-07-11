import PropTypes from "prop-types";
import Header from "./UI/Header";

const Layout = ({ children }) => {
  return (
    <>
      <div className="bg-lightbg min-h-screen">
        <Header />
        <main className="container pb-8">{children}</main>
      </div>
    </>
  );
};
Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
