import React, { useState } from "react";
import ReactDOM from "react-dom";
import "normalize.css";
import "./css/index.scss";
import { BsChevronDoubleLeft, BsChevronDoubleRight } from "react-icons/bs";
import { GrRadialSelected } from "react-icons/gr";
import Selection from "./slider/slide_component";
import PhotoGallery from "./slider/slide_Photo";
import SlideText from "./slider/Slide_text";
import CheckTask from "./slider/checkTask";
import Video from "./assets/video.mp4";

const VideoContainer = () => {
  return (
    <div
      style={{
        width: "100%",
        overflow: "hidden",
      }}
    >
      <video autoPlay loop>
        <source src={Video} type="video/mp4" />
      </video>
    </div>
  );
};
let act = 0;
const App = () => {
  const sliderArray = [
    Selection,
    CheckTask,
    PhotoGallery,
    SlideText,
    "AUSTRIS",
    VideoContainer,
  ];
  const [ChangeActive, setChangeActive] = useState(sliderArray[3]);
  let displayDot = sliderArray.map((val) => (
    <GrRadialSelected
      key={Math.random() * 100}
      onClick={() => {
        setChangeActive(val);
      }}
    />
  ));
  let ChangeActiveContent = (a) => {
    /*swipeHandle func is depended on this function */
    if (a === "+") act = act + 1;
    if (a === "+" && act > sliderArray.length - 1) act = 0;
    /*if right slider btn is prest*/
    if (a === "-") act = act - 1;
    if (a === "-" && act < 0) act = sliderArray.length - 1;
    /*if left slider btn is prest*/
    setChangeActive(sliderArray[act]);
  };

  let swipeHandle = {
    SwipeStart: null,
    SwipeEnd: null,
    SwipeLength: null,
    swipeMethod: (eventType) => {
      if (eventType === "end") {
        swipeHandle.SwipeLength = Math.abs(
          swipeHandle.SwipeStart - swipeHandle.SwipeEnd
        );
      }
      if (swipeHandle.SwipeLength > 200) {
        if (swipeHandle.SwipeStart > swipeHandle.SwipeEnd) {
          ChangeActiveContent(`+`);
        } else {
          ChangeActiveContent(`-`);
        }
      }
    },
    SwipeLog: () => {
      console.log(
        `start ${swipeHandle.SwipeStart} end: ${swipeHandle.SwipeEnd} length: ${swipeHandle.SwipeLength}`
      );
    },
  };
  return (
    <>
      <header>Slider made using array</header>
      <main>
        <div
          className="sliderContainer"
          onTouchStart={(ev) => {
            swipeHandle.SwipeStart = ev.touches[0].clientX;
          }}
          onTouchEnd={(ev) => {
            swipeHandle.SwipeEnd = ev.changedTouches[0].clientX;
            swipeHandle.swipeMethod("end");
          }}
        >
          <div
            className="leftBtn btn"
            onClick={() => {
              ChangeActiveContent(`-`);
            }}
          >
            <BsChevronDoubleLeft />
          </div>
          <div className="sliderContent">{ChangeActive}</div>
          <div
            className="rightBtn btn"
            onClick={() => {
              ChangeActiveContent(`+`);
            }}
          >
            <BsChevronDoubleRight />
          </div>
          {/*********Slider Buttons******/}
          <div className="slideSelection">{displayDot}</div>
        </div>
      </main>
      <footer>made by Austris Daugulis &copy;</footer>
    </>
  );
};
ReactDOM.render(<App />, document.getElementById("root"));
