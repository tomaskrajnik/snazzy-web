import React from "react";
import { Form } from "react-bootstrap";

const Input = ({
  name,
  type,
  placeholder,
  label,
  onChange,
  additionalButton,
  error,
}) => {
  const inputStyle = {
    border: "1px solid #CFD6E4",
    height: "44px",
  };
  const labelStyle = {
    fontSize: "14px",
    display: "block",
  };
  const additionalBtnStyle = {
    backgroundColor: "transparent",
    fontSize: "14px",
    border: "none",
    marginLeft: "auto",
  };

  const handleClick = (e) => {
    e.preventDefault();
  };
  return (
    <Form.Group className="mt-4">
      <Form.Label style={labelStyle}>
        <div className="d-flex">
          {label}
          {additionalButton && (
            <button
              onClick={handleClick}
              className="ml-auto"
              style={additionalBtnStyle}
            >
              {additionalButton}
            </button>
          )}
        </div>
      </Form.Label>
      <Form.Control
        name={name}
        type={type}
        placeholder={placeholder}
        onChange={onChange}
        style={inputStyle}
      />
    </Form.Group>
  );
};

export default Input;