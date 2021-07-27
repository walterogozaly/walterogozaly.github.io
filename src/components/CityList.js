import React from "react";
import cityjobs from "../pages/city-jobs";
import { Link } from "react-router-dom";

const CityList = () => {
  return (
    <>
      <h1>Cities</h1>
      <div className="city_list_outer_container">
        {cityjobs.map((city, key) => (
          <div className="city_list_item" key={key}>
            <Link to={`/city/${city.name}`}>
              <h3>{city.name_proper}</h3>
            </Link>
          </div>
        ))}
      </div>
    </>
  );
};

export default CityList;
