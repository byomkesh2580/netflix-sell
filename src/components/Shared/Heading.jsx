import React from "react";

const Heading = ({ title, subtitle, center }) => {
  return (
    <div className="hero-content text-center mt-14">
      <div className={center ? "text-center" : "text-start"}>
        <div className="text-2xl font-bold">{title}</div>
        <div className="font-light text-neutral-500 mt-2">{subtitle}</div>
      </div>
    </div>
  );
};

export default Heading;
