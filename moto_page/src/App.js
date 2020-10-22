import React from "react";
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

function App() {
  let mouseLoc = {
    mouseX: null,
    mouseY: null,
    screenX: null,
    screenY: null,
    setValues: (ev) => {
      mouseLoc.screenX = window.innerWidth;
      mouseLoc.screenY = window.innerHeight;
      mouseLoc.mouseX = ev.clientX;
      mouseLoc.mouseY = ev.clientY;
    },
    log: () => {
      console.log(`x:${mouseLoc.mouseX} Y:${mouseLoc.mouseY}`);
      console.log(`screenX:${mouseLoc.screenX} screenY:${mouseLoc.screenY}`);
    },
  };

  return (
    <div
      className="root"
      style={{
        backgroundImage: `radial-gradient(circle at 50% 40%, #00000000 30%, #000 50%),url(${Bg})`,
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
}

export default App;
