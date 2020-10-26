import React, { useEffect, useState } from "react";
import "./motoselect.scss";
import { motorSpec } from "../data/data";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

let displayColors = motorSpec[0].color.map((color) => {
  return (
    <div
      className="colorSquare"
      style={{ backgroundColor: color }}
      key={color}
    ></div>
  );
});
let act = 0;

const MotoSelect = () => {
  const [ChangeMoto, setChangeMoto] = useState(0);

  let swapMoto = (val) => {
    act = val === "+" ? act + 1 : act - 1;
    if (act > motorSpec.length - 1) act = 0;
    if (act < 0) act = motorSpec.length - 1;
    setChangeMoto(act);
  };

  return (
    <main>
      <div className="brandLogo"></div>
      <div
        className="motoDisplay"
        style={{ backgroundImage: `url(${motorSpec[ChangeMoto].photo})` }}
      >
        <FaChevronLeft
          className="hoverLeft"
          onClick={() => {
            swapMoto("-");
          }}
        />
        <FaChevronRight
          className="hoverRight"
          onClick={() => {
            swapMoto("+");
          }}
        />
      </div>
      <div className="details">
        <div className="generalInfo">
          <p>{"Displacement"}</p>
          <p>{motorSpec[ChangeMoto].cc} cc</p>

          <p>{"Horse Power"}</p>
          <p>
            {motorSpec[ChangeMoto].hp}hp (
            {Math.floor(motorSpec[ChangeMoto].hp * 0.7456)}
            kW)
          </p>

          <p>{"Torque"}</p>
          <p>
            {motorSpec[ChangeMoto].nm} Nm (
            {Math.floor(motorSpec[ChangeMoto].nm * 0.7375) + " Ib-ft"})
          </p>

          <p>{"Dry Weight"}</p>
          <p>
            {motorSpec[ChangeMoto].weight} Kg (
            {Math.floor(motorSpec[ChangeMoto].weight * 2.2046) + " Ib"})
          </p>

          <p>{"Seat Height"}</p>
          <p>
            {motorSpec[ChangeMoto].setHeight} mm (
            {Math.floor(motorSpec[ChangeMoto].setHeight * 0.03937) + " In"})
          </p>

          <p>{"safety"}</p>
          <p>{motorSpec[ChangeMoto].brake}</p>
        </div>
        <div className="rightContent">
          <div className="colorAvailable">{displayColors}</div>
          <div className="Detail__desc">
            <p>Fresh vibes.</p>
            <p>Sporty soul.</p>
          </div>
        </div>
      </div>
    </main>
  );
};

export default MotoSelect;
