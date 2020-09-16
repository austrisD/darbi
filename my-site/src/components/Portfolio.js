import React, { useState, useEffect } from "react";
import ContentHeader from "./sharedCom";
import {
  FaMobileAlt,
  FaDesktop,
  FaTabletAlt,
  FaSass,
  FaBootstrap,
  FaWindowClose,
  FaGithub,
  FaLink,
  FaHtml5,
  FaCss3,
} from "react-icons/fa";
import { SiJekyll, SiJquery } from "react-icons/si";
import "../css/Portfolio.scss";

const ELEMENT_VIEW_BTN = (props) => {
  let [PrintScreen, setPrintScreen] = useState("none");

  let [DeviceFrame, setDeviceFrame] = useState("desktop__frame");
  let desktopElement = () => {
    return (
      <button
        title="Desktop view"
        onClick={() => {
          setDeviceFrame("desktop__frame");
          setPrintScreen(`desktop__BG__size ${props.desktop}`);
        }}
      >
        <FaDesktop />
      </button>
    );
  };

  let tabletElement = () => {
    return (
      <button
        title="Tablet view"
        onClick={() => {
          setDeviceFrame("tablet__frame");
          setPrintScreen(`tablet__BG__size ${props.tablet}`);
        }}
      >
        <FaTabletAlt />
      </button>
    );
  };

  let mobileElement = () => {
    return (
      <button
        title="Mobile view"
        onClick={() => {
          setDeviceFrame("mobile__frame");
          setPrintScreen(`mobile_BG_size ${props.mobile}`);
        }}
      >
        <FaMobileAlt />
      </button>
    );
  };

  return (
    <>
      <div className={`site__background ${PrintScreen}`}>
        <div className={`deviceFrame ${DeviceFrame}`}></div>
      </div>
      <div className="infoBTN">
        {props.desktop != null ? desktopElement() : ``}
        {props.tablet != null ? tabletElement() : ``}
        {props.mobile != null ? mobileElement() : ``}
      </div>
    </>
  );
};
/*interactive element in info window*/

const Portfolio = () => {
  const [ResourceType, setResourceType] = useState("");
  useEffect(() => {}, [ResourceType]);

  const element__info = (
    siteHeading,
    site__link,
    git__link,
    techUsed,
    desktopPrew,
    tabletPrew,
    mobilePrew
  ) => {
    return (
      <>
        <div
          className="element__overlay"
          onClick={() => {
            setResourceType("");
          }}
          /*close info window when clicked on overlay*/
        ></div>
        <div className="element__info__container">
          <div className="left__Content">
            <ELEMENT_VIEW_BTN
              desktop={desktopPrew}
              tablet={tabletPrew}
              mobile={mobilePrew}
            />
          </div>
          <div className="right__Content">
            <FaWindowClose
              className="closeBTN"
              onClick={() => {
                setResourceType("");
              }}
              /*closes info window when clicked on close btn*/
            />
            <h3>{siteHeading}</h3>

            <a href={git__link}>
              Check Code <FaGithub />
            </a>
            <ul>{techUsed}</ul>
            <a className="site" href={site__link}>
              Visit site
              <FaLink />
            </a>
          </div>
        </div>
      </>
    );
  };
  /** detail windows for portfolio description */

  const Portfolio__element = (
    siteHeading,
    site__link,
    git__link,
    className,
    techUsed,
    desktopPrew,
    tabletPrew,
    mobilePrew
  ) => {
    return (
      <div className={`Portfolio__element ` + className}>
        <button
          onClick={() => {
            // setPrintScreen(a, b, c);

            setResourceType(
              element__info(
                siteHeading,
                site__link,
                git__link,
                techUsed,
                desktopPrew,
                tabletPrew,
                mobilePrew
              )
            );
          }}
        >
          Details
        </button>
      </div>
    );
  };
  /**single element */

  return (
    <>
      <ContentHeader heading={"Portfolio"} />
      <div className="Portfolio_Container">
        {Portfolio__element(
          `Login page`,
          `https://austrisd.github.io/landing/`,
          "https://github.com/austrisD/darbi/tree/master/landing-Page",
          `login__page`,
          <>
            <li>
              <SiJekyll /> made with jekyll
            </li>
            <li>
              <FaSass /> SCSS
            </li>
          </>,
          "login__info__bgr",
          "signUP_tablet_prew",
          "signUP_mobile_prew"
        )}

        {Portfolio__element(
          `Landing page`,
          `https://austrisd.github.io/landing/landing`,
          "https://github.com/austrisD/darbi/tree/master/landing-Page",
          `landing__page`,
          <>
            <li>
              <SiJekyll /> made with jekyll
            </li>
            <li>
              <FaSass /> SCSS
            </li>
          </>,
          null,
          null,
          null
        )}

        {Portfolio__element(
          `Profile page`,
          `https://austrisd.github.io/landing/profile`,
          "https://github.com/austrisD/darbi/tree/master/landing-Page",
          `profile__page`,
          <>
            <li>
              <SiJekyll /> made with jekyll
            </li>
            <li>
              <FaSass /> SCSS
            </li>
          </>,
          null,
          null,
          null
        )}

        {Portfolio__element(
          `Webskola.lv`,
          `./portfolio_sites/My_1th-page/sale.html`,
          "https://github.com/austrisD/darbi/tree/master/My_1th-page",
          `webSkola__page`,
          <>
            <li>
              <FaHtml5 />
              Simple Html
            </li>
            <li>
              <FaCss3 />
              Simple CSS
            </li>
          </>,
          null,
          null,
          null
        )}

        {Portfolio__element(
          `ToDoList`,
          `https://austrisd.github.io/ToDoList/`,
          "https://github.com/austrisD/ToDoList",
          `ToDoList_page`,
          <>
            <li>
              <SiJquery /> used jquery
            </li>
            <li>
              <FaBootstrap />
              Bootstrap
            </li>
          </>,
          null,
          null,
          null
        )}
      </div>
      {ResourceType}
    </>
  );
};

export default Portfolio;
