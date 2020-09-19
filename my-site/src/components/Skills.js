import React from "react";
import "../css/skills.scss";
import { RiChromeFill } from "react-icons/ri";
import {
  FaReact,
  FaHtml5,
  FaCss3,
  FaBootstrap,
  FaGithub,
  FaSass,
} from "react-icons/fa";
import { SiJekyll, SiJavascript, SiJquery, SiMysql } from "react-icons/si";
import ContentHeader from "./sharedCom";

const skill__Element = (title, Icon, ulList) => {
  return (
    <div className="skill__Element">
      <p>{title}</p>
      <div className="skill__inner__container">
        <Icon title="React" />
        <ul>{ulList}</ul>
      </div>
    </div>
  );
};

const Skills = () => {
  return (
    <>
      <ContentHeader heading={"skills"} />
      <div className="skill_Container">
        {skill__Element(
          "React",
          FaReact,
          <>
            <li>useState</li>
            <li>useEffect</li>
            <li>props</li>
            <li>Components</li>
            <li>ReactIcons</li>
          </>
        )}

        {skill__Element(
          "HTML5",
          FaHtml5,
          <>
            <li>Sematic tags</li>
            <li>HTML dom</li>
            <li>Basic SEO</li>
            <li>form</li>
            <li>Graphic</li>
            <li>Tables</li>
          </>
        )}

        {skill__Element(
          "Css3",
          FaCss3,
          <>
            <li>Media Queries</li>
            <li>FlexBox</li>
            <li>Grid</li>
            <li>Animation</li>
            <li>Advanced selectors</li>
            <li>
              <FaBootstrap />
              ootstrap
            </li>
            <li>
              <FaSass />
              Scss
            </li>
          </>
        )}

        {skill__Element(
          "Jekyll",
          SiJekyll,
          <>
            <li>modules</li>
            <li>themes</li>
            <li>plugins</li>
            <li>Liquid tags</li>
            <li>layouts</li>
          </>
        )}

        {skill__Element(
          "Javascript",
          SiJavascript,
          <>
            <li>Dom manipulation</li>
            <li>ECMAScript 5,6</li>
            <li>Json</li>
            <li>Functions, Objects, Array</li>
            <li>LocalStorage, sessions, cookie</li>
            <li>
              <SiJquery /> jQuery
            </li>
          </>
        )}

        {skill__Element(
          "mySQL",
          SiMysql,
          <>
            <li>Creating</li>
            <li>Selecting</li>
          </>
        )}

        {skill__Element(
          "chromeDev",
          RiChromeFill,
          <>
            <li>Debugging</li>
            <li>performance</li>
          </>
        )}

        {skill__Element(
          "Github",
          FaGithub,
          <>
            <li>crate rep</li>
            <li>push, fetch, clone</li>
            <li>github pages</li>
          </>
        )}
      </div>
    </>
  );
};

export default Skills;
