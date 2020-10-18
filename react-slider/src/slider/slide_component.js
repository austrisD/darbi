import React from "react";

const Selection = () => {
  return (
    <>
      <select>
        <option style={{ display: "none" }} value="">
          select you content
        </option>
        <option value="">select 1</option>
        <option value="">select 2</option>
        <option value="">select 3</option>
        <option value="">select 4</option>
        <option value="">select 5</option>
      </select>
      <div className="selectContent">{`content`}</div>
    </>
  );
};

export default Selection;
