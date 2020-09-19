import React from "react";
import "../css/aboutMe.scss";
import ContentHeader from "./sharedCom";

const AboutMe = () => {
  return (
    <>
      <ContentHeader heading={"About Me"} />
      <p>
        Young inspiring Front-end developer from Riga. I am a person who likes
        to find a simple solution for complex problems. In addition to that
        illustrating code logic in a simple eye-pleasing manner. Also, I don'
        let challenges/problems discourage me from my goal. As a result of
        experimenting with code, learning something new. Above all, enjoy
        working in a team with whom share ideas and discuss new ways to achieve
        results.
      </p>
    </>
  );
};

export default AboutMe;
