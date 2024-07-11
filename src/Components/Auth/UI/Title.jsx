import PropTypes from "prop-types";
const Title = ({ title = "Title", subtitle = "Some cool subtitle..." }) => {
  return (
    <>
      <div className="my-4">
        <h1 className="text-2xl font-semibold">{title}</h1>
        <p className="text-subtext">{subtitle}</p>
      </div>
    </>
  );
};
Title.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
};

export default Title;
