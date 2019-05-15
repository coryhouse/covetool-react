import React from "react";
import PropTypes from "prop-types";

const TextInput = ({
  id,
  label,
  name,
  value,
  onChange,
  error,
  placeholder
}) => {
  return (
    <div>
      {label && (
        <>
          <label htmlFor={id}>{label}</label> <br />
        </>
      )}

      <input
        type="text"
        id={id}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
      />
      {error && <div style={{ color: "red" }}>{error}</div>}
    </div>
  );
};

TextInput.propTypes = {
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  onChange: PropTypes.func.isRequired,
  error: PropTypes.string,
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  placeholder: PropTypes.string
};

export default TextInput;
