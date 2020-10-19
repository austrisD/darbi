import React from "react";
import Video from "../assets/video.mp4";
import "./SliderCss.scss";
import { BsInfoCircle } from "react-icons/bs";
import { FaMobileAlt, FaHandPointUp } from "react-icons/fa";

export const VideoContainer = () => {
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
/*************************************************/
export const SlideText = () => {
  return (
    <div className="sliderTextContainer">
      <span>lorem Buzzwords </span> loreDo you have a virally-distributed plan
      of action for managing emerging partnerships? Without data hygiene
      supervising, you will lack architectures. It is pushing the envelope At
      the end of the customer journey. Sprite introduced new capabilities
      represent a leap forward in the DXP space. We believe we know that if you
      drive micro-mega-cyber-virally then you may also disintermediation
      perfectly. We believe we know that it is better to exploit tirelessly. Our
      infinitely reconfigurable feature set is second to none, but our strategic
      angel investors and user-proof configuration is always considered a
      terrific achievement. Without macro-vertical CAE, you will lack research
      and development. Without niches, you will lack experiences. Without C2C,
      you will lack cross-media CAE. Our infinitely reconfigurable feature set
      is unparalleled, but our sexy raw bandwidth and easy configuration is
      always considered a terrific achievement. It may seem terrific, but it's
      100% realistic! What does the industry jargon 'C2B2B' really mean? A
      company that can synthesize courageously will (eventually) be able to
      transition easily. The capacity to enable perfectly leads to the capacity
      to harness without devaluing our power to deliver. Is it more important
      for something to be customer-directed? What does the term
      'infrastructures' really mean? Without development, you will lack
      affiliate-based compliance.
    </div>
  );
};
/*************************************************/
export const Selection = () => {
  return (
    <>
      <select className="selectStyle">
        <option style={{ display: "none" }}>Select option</option>
        <option value="">option: 1 </option>
        <option value="">option: 2 </option>
        <option value="">option: 3 </option>
        <option value="">option: 4 </option>
        <option value="">option: 5 </option>
      </select>

      {/* <div className="selectContent">{`content`}</div> */}
    </>
  );
};
/*************************************************/
export const CheckTask = () => {
  return (
    <>
      <details>
        <summary title="more info">
          Works with any Content
          <BsInfoCircle />
        </summary>
        <p>I added video, select options , random text and gallery </p>
      </details>
      <details>
        <summary title="more info">
          Swipe lefts, right to change content
          <FaHandPointUp />
        </summary>
        <p>
          Its works only in dev tools mode and on devices with touch screen. its
          accomplished by taking first touch location and compering that to
          finger realise location.
        </p>
      </details>
      <details>
        <summary title="more info">
          Works on all device's
          <FaMobileAlt />
        </summary>
        <p>Simple media queries</p>
      </details>
    </>
  );
};
/*************************************************/
export const PhotoGallery = () => {
  return (
    <div className="gallery ">
      <div className="jpg1"></div>
      <div className="jpg2"></div>
      <div className="jpg3"></div>
      <div className="jpg4"></div>
      <div className="jpg5"></div>
      <div className="jpg6"></div>
      <div className="jpg7"></div>
      <div className="jpg8"></div>
      <div className="jpg9"></div>
      <div className="jpg10"></div>
      <div className="jpg11"></div>
      <div className="jpg12"></div>
    </div>
  );
};
