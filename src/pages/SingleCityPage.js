import React from "react";
import cityjobs from "./city-jobs";

const SingleCityPage = ({ match }) => {
  const cityName = match.params.name;
  const cityData = cityjobs.find((city) => city.name === cityName);
  return (
    <div>
      <h1>{cityData.name_proper} Job Postings by Search Term</h1>

      <table>
        <tr>
          <th>Search Term</th>
          <th>Number of Postings (June 2021)</th>
        </tr>
        <tr>
          <td>Software Engineer</td>
          <td>{cityData.software_engineer}</td>
        </tr>
        <tr>
          <td>React</td>
          <td>{cityData.react}</td>
        </tr>
        <tr>
          <td>Data Analyst</td>
          <td>{cityData.data_analyst}</td>
        </tr>
        <tr>
          <td>Data Engineer</td>
          <td>{cityData.data_engineer}</td>
        </tr>
        <tr>
          <td>Consultant</td>
          <td>{cityData.consultant}</td>
        </tr>
        <tr>
          <td>Financial Analyst</td>
          <td>{cityData.financial_analyst}</td>
        </tr>
        <tr>
          <td>Developer</td>
          <td>{cityData.developer}</td>
        </tr>
        <tr>
          <td>Executive Director</td>
          <td>{cityData.executive_director}</td>
        </tr>
        <tr>
          <td>Tutor</td>
          <td>{cityData.tutor}</td>
        </tr>
      </table>
    </div>
  );
};

export default SingleCityPage;
