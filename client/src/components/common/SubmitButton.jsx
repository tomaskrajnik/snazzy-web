import React from "react";
import { Button } from "react-bootstrap";

const SubmitButton = ({ title }) => {
  const buttonStyle = {
    padding: "8px 16px",
    lineHeight: "28px",
    fontSize: "16px",
  };

  return (
    <Button style={buttonStyle} variant="primary" type="submit" block>
      {title}
    </Button>
  );
};

export default SubmitButton;
