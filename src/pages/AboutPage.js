import React from "react";
import profilePhoto from "../assets/me.png";

const AboutPage = () => {
  return (
    <div>
      <h1>
        <b>About me</b>
      </h1>
      <img src={profilePhoto} className="image--cover" />
      <p>
        Master's graduate in Information Systems and Operations Management. I'm
        passionate about data and the internet, and optimistic about building a
        better future with them. Outside of work, I like biking, audiobooks, and
        walkable neighborhoods. Right now I'm working on analysis of open data
        sets, building web apps with React JS, and studying for the AWS Cloud
        Practitioner certification.
      </p>
      <p></p>
    </div>
  );
};

export default AboutPage;
