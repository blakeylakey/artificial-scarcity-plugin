import React from "react";

function Square(props) {
  const color_class = props.color_theme === "bnw" ? "as-bnw" : `as-color-${props.desc}`;
  return (
    <div className={`as-square-container mx-1 ${color_class}`}>
      <div className="as-square-value px-4 py-3">
        {props.value}
        <p className="as-square-desc">{props.desc}</p>
      </div>
    </div>
  );
}

export default Square;
