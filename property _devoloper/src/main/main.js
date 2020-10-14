import React, { useState } from "react";
import "./main.scss";
import { ImMenu } from "react-icons/im";

const Main = (props) => {
  let [ShowMenu, setShowMenu] = useState(false);

  return (
    <>
      <header>
        <nav className="navBar">
          <a href="_self" className="btn home">
            {props.main}
          </a>
          <ImMenu
            onClick={() => {
              setShowMenu(ShowMenu === false ? true : false);
            }}
          />
          <div
            className={`spitNav ${
              ShowMenu === true ? "MenuActive" : "MenuDeactivate"
            }`}
          >
            <div className="btn dropdown">
              {props.locations}
              <div className="dropdownContent">
                <button className="btn" onClick={props.funcLoc1}>
                  {props.address1}
                </button>
                <button className="btn" onClick={props.funcLoc2}>
                  {props.address2}
                </button>
                <button className="btn" onClick={props.funcLoc3}>
                  {props.address3}
                </button>
              </div>
            </div>
            <button className="btn navBTN">{props.info}</button>
            <button className="btn navBTN"> {props.gallery}</button>
            <button className="btn navBTN"> {props.contacts}</button>
            <div className="dropdown btn">
              {props.language}
              <div className="dropdownContent">{props.languageBtn}</div>
            </div>
          </div>
        </nav>
      </header>
      <main>{props.children}</main>
      <footer className="footer">
        <div className="footerContent">
          <p>{props.phone_nr}</p>
        </div>
      </footer>
    </>
  );
};

export default Main;
