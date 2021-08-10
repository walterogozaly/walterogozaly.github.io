import React from "react";
import kaggle_logo from "../assets/kaggle_icon.png";
import twitter_logo from "../assets/twitter_icon.png";
import linkedin_logo from "../assets/linkedin_icon.png";

const ContactPage = () => {
  return (
    <div>
      <h1>
        <b>Contact me</b>
      </h1>

      <div className="contact-info">
        <div className="icon-links">
          <a
            href="https://www.linkedin.com/in/walterogozaly"
            className="icon-link"
          >
            <img src={linkedin_logo} />
          </a>
          <a href="https://twitter.com/WalterOgozaly" className="icon-link">
            <img src={twitter_logo} />
          </a>
          <a href="https://www.kaggle.com/walterogozaly" className="icon-link">
            <img src={kaggle_logo} />
          </a>
        </div>
        <p>
          <span className="emoji">📍</span>
          <i>currently:</i> Chicago, IL
        </p>
        <p>
          <span className="emoji">📱</span> (484) 767-9553
        </p>
        <p>
          <span className="emoji">📧</span> walter97ogozaly@gmail.com
        </p>
      </div>
    </div>
  );
};

export default ContactPage;
