import React from "react";
import "../css/Gallery.scss";
import ContentHeader from "./sharedCom";

const Gallery = () => {
  return (
    <>
      <ContentHeader heading={"gallery"} />
      <div className="photoContainer">
        <div className="photo at1"></div>
        <div className="photo"></div>
        <div className="photo"></div>
        <div className="photo"></div>
        <div className="photo"></div>
      </div>
    </>
  );
};

export default Gallery;
