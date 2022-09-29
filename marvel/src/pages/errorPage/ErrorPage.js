import React from "react";
import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div>
      <h1>
        Error page, this url does not exist please go back{" "}
        <Link to="/">Home</Link>
      </h1>
    </div>
  );
};

export default ErrorPage;
