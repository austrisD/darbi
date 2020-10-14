import React, { useState } from "react";
import "./factory.scss";
import { areaData } from "../common/data";
import { lv, eng, RU } from "../common/languages";
import { FaRegWindowClose } from "react-icons/fa";

let val;
switch (localStorage.getItem("language")) {
  case "lv":
    val = lv;
    break;
  case "eng":
    val = eng;
    break;
  case "RU":
    val = RU;
    break;
  default:
    val = lv;
}
let InfoView = (y, gridNr) => {
  return (
    <>
      <div className="infoBg">
        <div className="overlay">
          <div className="infoContainer">
            <div className="InfoHeader">
              <h3>
                {val.InfoZona}:{areaData[gridNr].name}
              </h3>
              <div className="back_btn" onClick={y} title={val.back}>
                <FaRegWindowClose />
              </div>
            </div>
            <div className="GridDetails">
              <div className="subInfo">
                <p>
                  {val.floor}:{areaData[gridNr].floor}
                </p>
                <p>
                  {areaData[gridNr].size}m<sup>2</sup>
                </p>
                <p>
                  {areaData[gridNr].available === true
                    ? val.available
                    : val.unavailable}
                </p>
                <p>
                  {areaData[gridNr].type === 1
                    ? val.warehouse
                    : areaData[gridNr].type === 2
                    ? val.office
                    : "other"}
                </p>
                <p>
                  {val.address}: {areaData[0].address}
                </p>
                <iframe
                  title="Address Location"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1328.0661451432984!2d24.20260765834909!3d56.93055845878266!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNTbCsDU1JzUwLjAiTiAyNMKwMTInMTMuMyJF!5e1!3m2!1slv!2slv!4v1601746336048!5m2!1slv!2slv"
                ></iframe>
              </div>
              <div className="infoGallery">
                <div className="photo"></div>
              </div>
            </div>
            <button className="ContactUS">{val.contactUs}</button>
          </div>
        </div>
      </div>
    </>
  );
};
const GridBlock = (nr, x) => {
  // val.InfoZona +
  return (
    <>
      <div onClick={x} className={`gridA${nr}`}>
        <p>{nr}</p>
      </div>
    </>
  );
};
let GridContainer = () => {
  let [ShowInfo, setShowInfo] = useState("");
  let y = () => {
    setShowInfo("");
  };
  return (
    <>
      <div className="GridContainer">
        {GridBlock(areaData[1].name, () => {
          setShowInfo(InfoView(y, 1));
        })}
        {GridBlock(areaData[2].name, () => {
          setShowInfo(InfoView(y, 2));
        })}
        {GridBlock(areaData[3].name, () => {
          setShowInfo(InfoView(y, 3));
        })}
        {GridBlock(areaData[4].name, () => {
          setShowInfo(InfoView(y, 4));
        })}
        {GridBlock(areaData[5].name, () => {
          setShowInfo(InfoView(y, 5));
        })}
        {GridBlock(areaData[6].name, () => {
          setShowInfo(InfoView(y, 6));
        })}
        {GridBlock(areaData[7].name, () => {
          setShowInfo(InfoView(y, 7));
        })}
        {GridBlock(areaData[8].name, () => {
          setShowInfo(InfoView(y, 8));
        })}
        {GridBlock(areaData[9].name, () => {
          setShowInfo(InfoView(y, 9));
        })}
        {GridBlock(areaData[10].name, () => {
          setShowInfo(InfoView(y, 10));
        })}
        {GridBlock(areaData[11].name, () => {
          setShowInfo(InfoView(y, 11));
        })}
        {GridBlock(areaData[12].name, () => {
          setShowInfo(InfoView(y, 12));
        })}
        {GridBlock(areaData[13].name, () => {
          setShowInfo(InfoView(y, 13));
        })}
        {GridBlock(areaData[14].name, () => {
          setShowInfo(InfoView(y, 14));
        })}
      </div>
      {ShowInfo}
    </>
  );
};
/** single grid block */
let FactoryBuilding = () => {
  return (
    <>
      <div className="factory">{<GridContainer />}</div>
    </>
  );
};
export default FactoryBuilding;
