import loader from "../../assets/loader.svg";

const Loader = () => {
  return (
    <>
      <div className="min-h-screen flex items-center justify-center bg-lightbg">
        <div>
          <img src={loader} width={100} alt="Loader" />
        </div>
      </div>
    </>
  );
};

export default Loader;
