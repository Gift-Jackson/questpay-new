import { Link } from "react-router-dom";
import InputField from "../../Global/InputField";
import Layout from "../Layout";
import Title from "../UI/Title";
import google_icon from "../../../assets/google_icon.svg"

const Login = () => {
  document.title = "Login | Questpay"
  const handleSubmit = (e) => {
    e.preventDefault();
  }
  return (
    <>
      <Layout>
        <Title title="Sign In" subtitle="Welcome back, let&apos;s sign you in..." />
        
        <form onSubmit={handleSubmit} className="flex flex-col">
          <InputField
            label="E-mail Address"
            type="email"
            id="email"
            name="email"
            placeholder="Enter e-mail address"
            required="true"
          />
          <InputField
            label="Password"
            type="password"
            id="password"
            name="password"
            placeholder="> 5 characters"
            required="true"
          />
          <p className="my-4"><Link className="text-primary text-sm">forgotten password?</Link></p>
          <button type="submit" className="bg-primary h-[42px] rounded-xl">Submit</button>
        </form>

        <p className="my-[1.5em] text-center text-sm text-subtext">- Or -</p>

        <button className="bg-mediumbg w-full h-[45px] rounded-xl flex justify-center items-center">
          <img src={google_icon} width={40} alt="google icon" />
          <span>Continue with Google</span>
        </button>

        <p className="mt-8 text-sm text-center">Create new account? <Link to="/register" className="text-primary text-sm font-bold">Sign Up</Link></p>
      </Layout>
    </>
  );
};

export default Login;
