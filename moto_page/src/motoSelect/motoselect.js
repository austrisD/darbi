import React from "react";
import "./motoselect.scss";
import { motorSpec, languages } from "../data/data";

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

  return (
    <main>
      <div className="brandLogo"></div>
      <div className="motoDisplay">
        <img src={require("../assets/Ducati_monster_797.png")} alt="" />
      </div>
      <div className="details">
        <div className="generalInfo">
          <p>{"Displacement"}</p>
          <p>{motorSpec[0].cc} cc</p>

          <p>{"Horse Power"}</p>
          <p>{motorSpec[0].hp}hp</p>

          <p>{"Torque"}</p>
          <p>{motorSpec[0].nm} Nm</p>

          <p>{"Dry Weight"}</p>
          <p>{motorSpec[0].weight} Kg</p>

          <p>{"Seat Height"}</p>
          <p>{motorSpec[0].seatHeight} mm</p>

          <p>{"safety"}</p>
          <p>{motorSpec[0].brake}</p>
        </div>
        <div className="colorAvailable">{displayColors}</div>
        <p className="Detail__desc">
          {"Fresh vibes."}
          <br />
          {" Sporty soul."}
        </p>
      </div>
    </main>
  );
};

export default MotoSelect;
