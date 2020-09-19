import React, { useState, useEffect } from "react";
import "./css/app.scss";
import {
  ImFacebook2,
  ImLinkedin,
  ImYoutube,
  ImInstagram,
} from "react-icons/im";
import Skills from "./components/Skills";
import AboutMe from "./components/AboutMe";
import Portfolio from "./components/Portfolio";
import Code from "./components/Code";
import Gallery from "./components/Gallery";
import { BsChevronDoubleLeft } from "react-icons/bs";

const App = () => {
  const [ResourceType, setResourceType] = useState(AboutMe);
  useEffect(() => {}, [ResourceType]);
  /*change man sections content if btn on navbar is prest */

  let [status, setStatus] = useState(`containerShow`);
  let [BtnStyle, setBtnStyle] = useState("");
  const hideSidebar = () => {
    if (status === `containerShow` && window.innerWidth <= 1200) {
      setStatus((status = `containerHide`));
      setBtnStyle((BtnStyle = { transform: "rotate(180deg)" }));
    } else {
      setStatus((status = `containerShow`));
      setBtnStyle((BtnStyle = { transform: "rotate(0deg)" }));
    }
  };
  /** navbar sliding function */

  return (
    <>
      <aside className={`aside__Container ${status}`}>
        <button className="aside__hide__btn" onClick={hideSidebar}>
          <BsChevronDoubleLeft style={BtnStyle} />
        </button>
        <div className="aside__Avatar"></div>
        <h1>AUSTRIS DAUGULIS</h1>
        <p className="aside__jobTitle">Front-end Developer</p>
        <svg height="5" width="200">
          <line
            x1="0"
            y1="0"
            x2="200"
            y2="0"
            stroke="#748ba5"
            strokeWidth="5px"
          />
        </svg>
        <nav>
          <button
            // className={(Active = true ? `inActive` : `Active`)}
            onClick={() => {
              setResourceType(AboutMe);
              hideSidebar();
            }}
          >
            ABOUT ME
          </button>
          <button
            onClick={() => {
              setResourceType(Skills);
              hideSidebar();
            }}
          >
            SKILLS
          </button>
          <button
            onClick={() => {
              setResourceType(<Portfolio />);
              hideSidebar();
            }}
          >
            PORTFOLIO
          </button>
          <button
            onClick={() => {
              setResourceType(Gallery);
              hideSidebar();
            }}
          >
            GALLERY
          </button>
          <button
            onClick={() => {
              setResourceType(Code);
              hideSidebar();
            }}
          >
            CODE CHALLENGES
          </button>
        </nav>
        <footer>
          <div className="contacts__links">
            <a
              href="https://www.facebook.com/austris.daugulis"
              title="Facebook"
              className="links facebook"
            >
              <ImFacebook2 />
            </a>
            <a
              href="https://www.instagram.com/austrisd/"
              title="Instagram"
              className="links instagram"
            >
              <ImInstagram />
            </a>
            <a
              href="https://www.linkedin.com/in/austris-daugulis-2646181b1/"
              className="links linkIN"
              title="LinkedIN"
            >
              <ImLinkedin />
            </a>
            <a
              href="https://www.youtube.com/channel/UCgUW3hOunZHvcIhq2E5kWUA?view_as=subscriber"
              className="links youTube"
              title="youTube"
            >
              <ImYoutube />
            </a>
          </div>
          Made by Austris Daugulis
          <br /> 2020&copy;
        </footer>
      </aside>
      <main
        onClick={(event) => {
          if (event.clientX === 0) hideSidebar();
        }}
        className="main__Container"
      >
        {ResourceType}
      </main>
    </>
  );
};

export default App;
