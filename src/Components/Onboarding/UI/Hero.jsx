import AvatarGroup from "./AvatarGroup";
import CTA from "./CTA";

const Hero = () => {
  return (
    <>
      <div className="pt-[120px] md:mt-0 md:min-h-[450px] flex items-center justify-center">
        <div className="layout text-center">
          <span className="text-sm text-subtext bg-mediumbg px-4 py-2 rounded-full">
            Bill payment made easy 🎉
          </span>
          <h1 className="font-bold text-4xl md:text-5xl my-4">
            Unlock <span className="gradient-text">Unbeatable</span> Rates for
            Data, Airtime, Utility Bills, and{" "}
            <span className="gradient-text">Crypto...</span>
          </h1>
          <p className="text-subtext text-sm">
            Discover the convenience of{" "}
            <span className="text-primary">Questpay</span> today! Access
            incredibly affordable rates for purchasing data, airtime, paying
            utility bills and many more...
          </p>

          <AvatarGroup />
          <CTA />
        </div>
      </div>
    </>
  );
};

export default Hero;
