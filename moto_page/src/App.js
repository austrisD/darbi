import React, { useState } from "react";
import "./assets/shared.scss";
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
      if (mouseLoc.mouseX === "right" && outValueX < 60) {
        outValueX = outValueX + 0.1;
      }
      if (mouseLoc.mouseX === "left" && outValueX > 40) {
        outValueX = outValueX - 0.1;
      }
      /*horizontal*/
      if (mouseLoc.mouseY === "up" && outValueY < 45) {
        outValueY = outValueY + 0.1;
      }
      if (mouseLoc.mouseY === "down" && outValueY > 35) {
        outValueY = outValueY - 0.1;
      }
      /*vertical*/
      old_mouseX = ev.pageX;
      old_mouseY = ev.pageY;
      setGradientX(outValueX);
      setGradientY(outValueY);
    },
    log: () => {
      console.log(`x:${mouseLoc.mouseX} `);
      console.log(`outX: ${mouseLoc.outValueX}`);
      // console.log(`outY: ${mouseLoc.outValueY} Y:${mouseLoc.mouseY}`);
    },
  };
  let [GradientX, setGradientX] = useState(50);
  let [GradientY, setGradientY] = useState(40);

  return (
    <div
      className="root"
      style={{
        backgroundImage: `radial-gradient(circle at ${GradientX}% ${GradientY}%, #00000000 30%, #000000d0 40%),url(${Bg})`,
      }}
      onMouseMove={(ev) => {
        mouseLoc.setValues(ev);
      }}
      onClick={() => {
        mouseLoc.log();
      }}
    >
      <Header />
      <MotoSelect />
      <footer></footer>
    </div>
  );
};

export default App;
