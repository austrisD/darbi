import React from "react";
import Video from "../assets/video.mp4";
import "./SliderCss.scss";

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
      <span style={{ fontWeight: "bold" }}>lorem Buzzwords </span> loreDo you
      have a virally-distributed plan of action for managing emerging
      partnerships? Without data hygiene supervising, you will lack
      architectures. It is pushing the envelope At the end of the customer
      journey. Sprite introduced new capabilities represent a leap forward in
      the DXP space. We believe we know that if you drive
      micro-mega-cyber-virally then you may also disintermediation perfectly. We
      believe we know that it is better to exploit tirelessly. Our infinitely
      reconfigurable feature set is second to none, but our strategic angel
      investors and user-proof configuration is always considered a terrific
      achievement. Without macro-vertical CAE, you will lack research and
      development. Without niches, you will lack experiences. Without C2C, you
      will lack cross-media CAE. Our infinitely reconfigurable feature set is
      unparalleled, but our sexy raw bandwidth and easy configuration is always
      considered a terrific achievement. It may seem terrific, but it's 100%
      realistic! What does the industry jargon 'C2B2B' really mean? A company
      that can synthesize courageously will (eventually) be able to transition
      easily. The capacity to enable perfectly leads to the capacity to harness
      without devaluing our power to deliver. Is it more important for something
      to be customer-directed? What does the term 'infrastructures' really mean?
      Without development, you will lack affiliate-based compliance.
    </div>
  );
};
/*************************************************/
export const Selection = () => {
  return (
    <>
      <select>
        <option style={{ display: "none" }} value="">
          select you content
        </option>
        <option value="">select 1</option>
        <option value="">select 2</option>
        <option value="">select 3</option>
        <option value="">select 4</option>
        <option value="">select 5</option>
      </select>
      <div className="selectContent">{`content`}</div>
    </>
  );
};
/*************************************************/
export const CheckTask = () => {
  return (
    <>
      <details>
        <summary title="more info">Works with any html content</summary>
        <p>
          loreImagine a combination of VOIP and Flash. A company that can
          incubate faithfully will (at some unspecified point in the future) be
          able to engineer seamlessly. Without efficient, transparent bloatware,
        </p>
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
