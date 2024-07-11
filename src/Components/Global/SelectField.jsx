import PropTypes from "prop-types";

const SelectField = ({ label, name, id, onChange, value, options }) => {
  return (
    <div className="flex flex-col gap-1 w-full">
      <label htmlFor={id} className="text-sm font-semibold">
        {label}
      </label>
      <select
        name={name}
        id={id}
        value={value}
        onChange={onChange}
         className="w-full pl-4 h-[40px] font-medium bg-secondary rounded text-sm"
      >
        <option value="" disabled>{`Select ${label}`}</option>
        {options.map((option, index) => (
          <option key={index} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};

SelectField.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default SelectField;
