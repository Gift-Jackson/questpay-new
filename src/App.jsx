import { Route, Routes } from "react-router-dom";
import { lazy, Suspense} from "react";
import Loader from "./Components/Global/Loader";
import Layout from "./Components/Onboarding/Layout";

const Login = lazy(() => import("./Components/Auth/Pages/Login"));
const Register = lazy(() => import("./Components/Auth/Pages/Register"));
const Home = lazy(() => import("./Components/Onboarding/Pages/Home"));

const App = () => {

 

  return (
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route element={<Layout />}>
            <Route path="/" element={<Home />} />
          </Route>
        </Routes>
      </Suspense>
  );
};

export default App;
