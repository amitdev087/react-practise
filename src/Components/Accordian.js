import React from "react";
import "./Accordian.css";

function Accordian(props) {
  return (
    <div className="accordian__section">
      <button className="accordian">
        <p className="accoridan__title">{props.title}</p>
      </button>
      <div className="accordian__content">
        <div className="accordian__text">
          dangerouslySetInnerHTML={{ __html: props.content }}
        </div>
      </div>
    </div>
  );
}

export default Accordian;
