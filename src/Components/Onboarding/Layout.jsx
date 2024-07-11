import Header from "./UI/Header";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <div className="bg-lightbg min-h-screen">
        <Header />
        <main className="main">
          <Outlet />
        </main>
      </div>
    </>
  );
};

export default Layout;
