import React, { useState, useEffect } from "react";
import ContentHeader from "./sharedCom";
import {
  FaMobileAlt,
  FaDesktop,
  FaTabletAlt,
  FaSass,
  FaBootstrap,
  FaWindowClose,
} from "react-icons/fa";
import { SiJekyll, SiJquery } from "react-icons/si";
import "../css/Portfolio.scss";

// const Portfolio__element = (siteHeading, link, className, icons, desc) => {
//   return (
//     <div className="Portfolio__element">
//       <h3>{siteHeading}</h3>
//       <div className={`Portfolio__preview ` + className}>
//         <ul className="Portfolio__tech">
//           <p>Used tech</p>
//           {icons}
//         </ul>
//         <a href={link}>Visit</a>
//       </div>
//       <p className="Portfolio__description">{desc}</p>
//     </div>
//   );
// };

const Portfolio = () => {
  const [ResourceType, setResourceType] = useState("");
  useEffect(() => {}, [ResourceType]);

  const element__info = (
    siteHeading,
    site__link,
    supportView,
    techUsed,
    elementBGR
  ) => {
    return (
      <>
        <div
          className="element__overlay"
          onClick={() => {
            setResourceType("");
          }}
        ></div>
        <div className={"element__info__container " + elementBGR}>
          <FaWindowClose
            className="closeBTN"
            onClick={() => {
              setResourceType("");
            }}
          />
          <h3>{siteHeading}</h3>
          <ul>{techUsed}</ul>
          <ul>{supportView}</ul>
          <a className="site" href={site__link}>
            Visit site
          </a>
        </div>
      </>
    );
  };
  /** detail windows for portfolio description */

  function Portfolio__element(
    siteHeading,
    site__link,
    className,
    supportView,
    techUsed,
    elementBGR
  ) {
    return (
      <div className={`Portfolio__element ` + className}>
        <button
          onClick={() => {
            setResourceType(
              element__info(
                siteHeading,
                site__link,
                supportView,
                techUsed,
                elementBGR
              )
            );
          }}
        >
          Details
        </button>
      </div>
    );
  }
  /** element in portfolio sections */

  return (
    <>
      <ContentHeader heading={"Portfolio"} />
      <div className="Portfolio_Container">
        {Portfolio__element(
          `Login page`,
          `https://austrisd.github.io/landing/`,
          `login__page`,
          <>
            <li>
              <FaDesktop /> Desktop view
            </li>
            <li>
              <FaTabletAlt />
              Tablet view
            </li>
            <li>
              <FaMobileAlt /> Mobile view
            </li>
          </>,
          <>
            <li>
              <SiJekyll /> made with jekyll
            </li>
            <li>
              <FaSass /> SCSS
            </li>
          </>
          // `Consectetur est ut aute anim pariatur commodo excepteur fugiat
          // nulla. Ipsum do nostrud esse consectetur cupida`
        )}
        {Portfolio__element(
          `Landing page`,
          `https://austrisd.github.io/landing/landing`,
          `landing__page`,
          <>
            <li>
              <FaDesktop /> Desktop view
            </li>
            <li>
              <FaTabletAlt />
              Tablet view
            </li>
            <li>
              <FaMobileAlt /> Mobile view
            </li>
          </>,
          <>
            <li>
              <SiJekyll /> made with jekyll
            </li>
            <li>
              <FaSass /> SCSS
            </li>
          </>
          // `Consectetur est ut aute anim pariatur commodo excepteur fugiat
          // nulla. Ipsum`
        )}
        {Portfolio__element(
          `Profile page`,
          `https://austrisd.github.io/landing/profile`,
          `profile__page`,
          <>
            <li>
              <FaDesktop /> Desktop view
            </li>
            <li>
              <FaTabletAlt />
              Tablet view
            </li>
            <li>
              <FaMobileAlt /> Mobile view
            </li>
          </>,
          <>
            <li>
              <SiJekyll /> made with jekyll
            </li>
            <li>
              <FaSass /> SCSS
            </li>
          </>
          // `Consectetur est ut aute anim pariatur commodo excepteur fugiat
          // `
        )}
        {Portfolio__element(
          `Webskola.lv`,
          `./portfolio_sites/My_1th-page/sale.html`,
          `webSkola__page`,
          <>
            <li>
              <FaDesktop /> Desktop view
            </li>
            <li>
              <FaTabletAlt />
              Tablet view
            </li>
            <li>
              <FaMobileAlt /> Mobile view
            </li>
          </>,
          null
          // `My first wepPage i created`
        )}
        {Portfolio__element(
          `ToDoList`,
          `https://austrisd.github.io/ToDoList/`,
          `ToDoList_page`,
          <>
            <li>
              <FaDesktop /> Desktop view
            </li>
            <li>
              <FaTabletAlt />
              Tablet view
            </li>
            <li>
              <FaMobileAlt /> Mobile view
            </li>
          </>,
          <>
            <li>
              <SiJquery /> used jquery
            </li>
            <li>
              <FaBootstrap />
              Bootstrap
            </li>
          </>
          //   `Consectetur est ut aute anim pariatur commodo excepteur fugiat
          // `
        )}
      </div>
      {ResourceType}
    </>
  );
};

export default Portfolio;
