import React from "react";

import "./Roadmap.css";

const Roadmap = () => {
  return (
    <div className="roadmap">
      <div className="roadmap__backend">
        <p className="roadmap__time roadmap__time_type_colored">1 неделя</p>
        <p className="roadmap__title">Back-end</p>
      </div>
      <div className="roadmap__frontend">
        <p className="roadmap__time">4 недели</p>
        <p className="roadmap__title">Front-end</p>
      </div>
    </div>
  );
};

export default Roadmap;
