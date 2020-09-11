import React from "react";
import ContentHeader from "./sharedCom";
import {
  FaMobileAlt,
  FaDesktop,
  FaTabletAlt,
  FaSass,
  FaBootstrap,
} from "react-icons/fa";
import { SiJekyll, SiJquery } from "react-icons/si";
import "../css/Portfolio.scss";

const Portfolio__element = (siteHeading, link, className, icons, desc) => {
  return (
    <div className="Portfolio__element">
      <h3>{siteHeading}</h3>
      <a href={link}>
        <div className={`Portfolio__preview ` + className}>
          <ul className="Portfolio__tech"> {icons}</ul>
        </div>
      </a>
      <p className="Portfolio__description">{desc}</p>
    </div>
  );
};

const Portfolio = () => {
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
            <li>
              <SiJekyll /> made with jekyll
            </li>
            <li>
              <FaSass /> SCSS
            </li>
          </>,
          `Consectetur est ut aute anim pariatur commodo excepteur fugiat
          nulla. Ipsum do nostrud esse consectetur cupida`
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
            <li>
              <SiJekyll /> made with jekyll
            </li>
            <li>
              <FaSass /> SCSS
            </li>
          </>,
          `Consectetur est ut aute anim pariatur commodo excepteur fugiat
          nulla. Ipsum`
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
            <li>
              <SiJekyll /> made with jekyll
            </li>
            <li>
              <FaSass /> SCSS
            </li>
          </>,
          `Consectetur est ut aute anim pariatur commodo excepteur fugiat
          `
        )}
        {Portfolio__element(
          `Webskola.lv`,
          `/portfolio_sites/My_1th-page/sale.html`,
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
          `My first wepPage i created`
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
            <li>
              <SiJquery /> used jquery
            </li>
            <li>
              <FaBootstrap />
              Bootstrap
            </li>
          </>,
          `Consectetur est ut aute anim pariatur commodo excepteur fugiat
        `
        )}
      </div>
    </>
  );
};

export default Portfolio;
