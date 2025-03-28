import React, { use, useState } from "react";
import "./Country.css";
const Country = ({ country, handleVisitedCountries,handleVisitedFlag }) => {
  const [isVisited, setVisited] = useState(false);
  const visited = () => {
    const storage = !isVisited;
    setVisited(storage);
    handleVisitedCountries(country);
  };

  return (
    <div className={`country ${isVisited ? "country-visited" : ""}`}>
      <p>name: {country.name.common}</p>
      <img src={country?.flags?.png} alt="" />
      <p>independent: {country.independent ? "Free" : "Not"}</p>
      <button onClick={visited}>{isVisited ? "visited" : "not"}</button>
      <button onClick={()=>handleVisitedFlag(country?.flags?.png)}>add visited flag</button>
    </div>
  );
};

export default Country;
