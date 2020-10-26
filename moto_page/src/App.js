import React, { useState } from "react";
import "./assets/main.scss";
import MotoSelect from "./motoSelect/motoselect";
import { AiOutlineMenu } from "react-icons/ai";
import { FaGlobeEurope } from "react-icons/fa";
import Bg from "./assets/carbonBG.jpg";

const Header = () => {
  return (
    <header>
      <nav>
        <AiOutlineMenu />
      </nav>
      <div className="logoHome">
        <FaGlobeEurope /> INTERNATIONAL WEBSITE | MY DUCATI
      </div>
    </header>
  );
};
let outValueX = 50, //min 40 max 60
  old_mouseX,
  old_mouseY;
let outValueY = 40; // min 35 max 45
const App = () => {
  let mouseLoc = {
    mouseX: null,
    mouseY: null,
    setValues: (ev) => {
      mouseLoc.mouseX = ev.pageX > old_mouseX ? "right" : "left";
      mouseLoc.mouseY = ev.pageY > old_mouseY ? "up" : "down";
      if (mouseLoc.mouseX === "right" && outValueX < 70) {
        outValueX = outValueX + 0.1;
      }
      if (mouseLoc.mouseX === "left" && outValueX > 30) {
        outValueX = outValueX - 0.1;
      }
      /*horizontal*/
      if (mouseLoc.mouseY === "up" && outValueY < 60) {
        outValueY = outValueY + 0.2;
      }
      if (mouseLoc.mouseY === "down" && outValueY > 20) {
        outValueY = outValueY - 0.2;
      }
      /*vertical*/
      old_mouseX = ev.pageX;
      old_mouseY = ev.pageY;
      setGradientX(outValueX);
      setGradientY(outValueY);
    },
    log: () => {
      console.log(`x:${outValueX} `);
      console.log(`outX: ${outValueY}`);
    },
  };
  //must optimize this !!!! its is lagy
  let [GradientX, setGradientX] = useState(50);
  let [GradientY, setGradientY] = useState(40);

  return (
    <div
      className="root"
      style={{
        backgroundImage: `radial-gradient(circle at ${GradientX}% ${GradientY}%, #00000000 20%, #000000d0 40%),url(${Bg})`,
      }}
      onMouseMove={(ev) => {
        mouseLoc.setValues(ev);
      }}
    >
      <Header />
      <MotoSelect />
      <footer></footer>
    </div>
  );
};

export default App;
