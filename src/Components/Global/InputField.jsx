import PropTypes from "prop-types";
import { useState } from "react";

const InputField = ({
  label,
  type,
  placeholder,
  name,
  id,
  onChange,
  value,
  required,
}) => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const togglePasswordVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };

  return (
    <div className="flex flex-col gap-1 w-full mt-4">
      <label htmlFor={id} className="text-sm font-medium">
        {label}
        {required && <span className="text-red-500">*</span>}
      </label>
      <div className="relative">
        <input
          type={isPasswordVisible ? "text" : type}
          name={name}
          id={id}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          required={required}
          autoComplete="off"
          className="outline border-stroke border-[1px] w-full pl-4 h-[45px] font-medium bg-secondary text-sm rounded-xl"
        />
        {type === "password" && (
          <span
            onClick={togglePasswordVisibility}
            className="material-symbols-outlined absolute text-[1.2em] bg-mediumbg p-2 rounded-lg showpass"
          >
            {isPasswordVisible ? "visibility" : "visibility_off"}
          </span>
        )}
      </div>
    </div>
  );
};

InputField.propTypes = {
  type: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  name: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  value: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  required: PropTypes.bool,
};

export default InputField;
