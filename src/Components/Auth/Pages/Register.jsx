import { Link } from "react-router-dom";
import InputField from "../../Global/InputField";
import Layout from "../Layout";
import Title from "../UI/Title";
import google_icon from "../../../assets/google_icon.svg"

const Register = () => {
  document.title = "Register | Questpay"
  const handleSubmit = (e) => {
    e.preventDefault();
  }
  return (
    <>
      <Layout>
        <Title title="Sign Up" subtitle="Create an account with QuestPay..." />
        
        <form onSubmit={handleSubmit} className="flex flex-col">
          <InputField
            label="Fullname"
            type="text"
            id="name"
            name="name"
            placeholder="Enter your fullname"
            required="true"
          />
          <InputField
            label="E-mail Address"
            type="email"
            id="email"
            name="email"
            placeholder="Enter e-mail address"
            required="true"
          />
          <InputField
            label="Phone Number"
            type="number"
            id="phonenumber"
            name="phonenumber"
            placeholder="Enter your phonenumber"
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
          <button type="submit" className="bg-primary h-[42px] text-white rounded-xl mt-8">Submit</button>
        </form>

        <p className="my-[1.5em] text-center text-sm text-subtext">- Or -</p>

        <button className="bg-mediumbg w-full h-[45px] rounded-xl flex justify-center items-center">
          <img src={google_icon} width={40} alt="google icon" />
          <span>Sign Up with Google</span>
        </button>

        <p className="mt-8 text-sm text-center">Already have an account? <Link to="/login" className="text-primary text-sm font-bold">Login</Link></p>
      </Layout>
    </>
  );
};

export default Register;
