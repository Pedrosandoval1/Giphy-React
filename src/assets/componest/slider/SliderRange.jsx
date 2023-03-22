import React from "react";

const SliderRange = ({ Change }) => {
  return (
    <div>
      <input
        className="inputRange"
        type="range"
        min="0"
        max="50"
        step="1"
        onChange={Change}
      />
    </div>
  );
};

export default SliderRange;
