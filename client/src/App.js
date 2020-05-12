import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Routes from "./routes/routes";

const App = () => {
  const [token, setToken] = useState(null);

  useEffect(() => {
    setToken(null);
  });

  return <Routes token={token} />;
};

export default App;
