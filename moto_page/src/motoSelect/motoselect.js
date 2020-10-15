import React from "react";
import "./motoselect.scss";
import { motorSpec, languages } from "../data/data";

const MotoSelect = () => {
  return (
    <main>
      <div className="brandLogo"></div>
      <div className="motoDisplay"></div>
      <div className="details">
        <div className="generalInfo">
          <p>{languages[0].Displacement}</p>
          <p>{motorSpec[0].cc}</p>

          <p>{languages[0].Horse_Power}</p>
          <p>{motorSpec[0].hp}</p>

          <p>{languages[0].Torque}</p>
          <p>{motorSpec[0].nm}</p>

          <p>{languages[0].Dry_Weight}</p>
          <p>{motorSpec[0].weight}</p>

          <p>{languages[0].set_heigh}</p>
          <p>{motorSpec[0].seatHeight}</p>

          <p>{languages[0].safety}</p>
          <p>{motorSpec[0].brake}</p>
        </div>
        <div className="colorAvailable"></div>
        <p className="Detail__desc">{motorSpec[0].desc}</p>
      </div>
    </main>
  );
};

export default MotoSelect;
