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
        Hi! I'm Walter. I'm a Master's graduate in Information Systems and
        Operations Management. I'm passionate about interpreting data and using
        new tools to do business better. Right now I'm working on an analysis of
        bike share data in Chicago, IL. I also like learning about web
        development (ReactJS) and I'm studying for the AWS Cloud Practitioner
        certification.
      </p>
      <p>
        Outside of work, I like biking, podcasts/audiobooks, and walkable
        neighborhoods.
      </p>
    </div>
  );
};

export default AboutPage;
