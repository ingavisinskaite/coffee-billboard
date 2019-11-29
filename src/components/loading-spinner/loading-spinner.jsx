import React from "react";
import "./loading-spinner.scss";

const LoadingSpinner = () => {
  return (
    <div className="app-loading">
      <svg className="spinner" viewBox="25 25 50 50">
        <circle
          className="path"
          cx="50"
          cy="50"
          r="15"
          fill="none"
          strokeWidth="2"
          strokeMiterlimit="10"
        />
      </svg>
    </div>
  );
};

export default LoadingSpinner;
