import React from "react";
import "./motoselect.scss";
import { motorSpec, languages } from "../data/data";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const MotoSelect = () => {
  let displayColors = motorSpec[0].color.map((color) => {
    return (
      <div
        className="colorSquare"
        style={{ backgroundColor: color }}
        key={color}
      ></div>
    );
  });
  console.log(motorSpec[0].setHeight);

  return (
    <main>
      <div className="brandLogo"></div>
      <div
        className="motoDisplay"
        style={{ backgroundImage: `url(${motorSpec[0].photo})` }}
      >
        <FaChevronLeft className="leftArrow" />
        <FaChevronRight className="rightArrow" />
      </div>
      <div className="details">
        <div className="generalInfo">
          <p>{"Displacement"}</p>
          <p>{motorSpec[0].cc} cc</p>

          <p>{"Horse Power"}</p>
          <p>
            {motorSpec[0].hp}hp ({Math.floor(motorSpec[0].hp * 0.7456)}kW)
          </p>

          <p>{"Torque"}</p>
          <p>
            {motorSpec[0].nm} Nm (
            {Math.floor(motorSpec[0].nm * 0.7375) + " Ib-ft"})
          </p>

          <p>{"Dry Weight"}</p>
          <p>
            {motorSpec[0].weight} Kg (
            {Math.floor(motorSpec[0].weight * 2.2046) + " Ib"})
          </p>

          <p>{"Seat Height"}</p>
          <p>
            {motorSpec[0].setHeight} mm (
            {Math.floor(motorSpec[0].setHeight * 0.03937) + " In"})
          </p>

          <p>{"safety"}</p>
          <p>{motorSpec[0].brake}</p>
        </div>
        <div className="rightContent">
          <div className="colorAvailable">{displayColors}</div>
          <p className="Detail__desc">
            <p>Fresh vibes.</p>
            <br />
            <p>Sporty soul.</p>
          </p>
        </div>
      </div>
    </main>
  );
};

export default MotoSelect;
