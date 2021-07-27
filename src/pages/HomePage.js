import React from "react";
import CityList from "../components/CityList";

const HomePage = () => {
  return (
    <>
      <h1>LinkedIn Job Postings in Major American Cities</h1>
      <h2>Compare the number of job postings by city and by keyword</h2>
      <input type="text" />
      <CityList />
    </>
  );
};

export default HomePage;
