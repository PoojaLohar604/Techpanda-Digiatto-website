import React from "react";
import "./Servecard.css";

const Servecard = ({title,image}) => {
  return (
    <div className="serve-card">

      <img src={image} />

      <h5>{title}</h5>
      <p>
        Codiant build highly advanced and custom Healthcare & Life Sciences
        solutions for all sizes of healthcare organizations and biopharma
        companies.
      </p>
    </div>
  );
};

export default Servecard;
