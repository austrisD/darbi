import React from "react";

const ContentHeader = (props) => {
  return (
    <>
      <h2>{props.heading}</h2>
      <svg className="contentHeaderLine" height="5" width="100%">
        <line
          x1="0"
          y1="0"
          x2="100%"
          y2="0"
          stroke="#748ba5"
          strokeWidth="5px"
        />
      </svg>
    </>
  );
};

export default ContentHeader;
