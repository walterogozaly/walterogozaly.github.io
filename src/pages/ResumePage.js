import React from "react";

const ResumePage = () => {
  return (
    <div>
      <h1>
        <b>My resume</b>
      </h1>
      <h3>
        <a
          href="https://github.com/walterogozaly/walterogozaly.github.io/raw/main/Walter_Ogozaly_Resume.pdf"
          download="Walter_Ogozaly_Resume.pdf"
        >
          Download PDF
        </a>
      </h3>

      <iframe src="https://docs.google.com/document/d/e/2PACX-1vRq4S6XcGU8XEPOdy9J84n_i7RMlQ-PmzlUOq5vYEfYDNYPxwUBslG2o60dPb6v3O2rqZt4YufO59ic/pub?embedded=true"></iframe>
    </div>
  );
};

export default ResumePage;
