import React from "react";
import '../style/preloaderstyles.css';

const Preloader = () => {
  return (
    <>
    <div className="preloader-container">
      <div className="preloader"></div>
    </div>
    <div className="um"><h1>Please Wait till your Suggestions are Ready!!</h1></div>
    </>
  );
};

export default Preloader;