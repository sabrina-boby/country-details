import React, { use, useState } from "react";
import Country from "../country/Country";
import "./Countries.css";
const countries = ({ countriesPromise }) => {
  const [visitedCountries, setVisitedCountries] = useState([]);
  const [visitedFlag, setVisitedFlag] = useState([]);

  const countries = use(countriesPromise);
  // console.log("=> ", country);
  const handleVisitedCountries = (country) => {
    console.log("country visited..", country);
    const newVisitedCountries = [...visitedCountries, country];
    setVisitedCountries(newVisitedCountries);
  };
  const handleVisitedFlag = (flag) => {
    const newVisitedFlags = [...visitedFlag, flag];
    setVisitedFlag(newVisitedFlags);
  };

  return (
    <div>
      <p>Visited Countries: {visitedCountries.length}</p>
      <p>All Countries: {countries.length}</p>
      <div>
        {visitedFlag.map((flag) => (
          <img src={flag} alt="" />
        ))}
      </div>
      <ol>
        {visitedCountries.map((country) => (
          <li key={country.cca3}>{country.name.common}</li>
        ))}
      </ol>
      <div className="countries country">
        {countries.map((country) => (
          <Country
            key={country.cca3}
            country={country}
            handleVisitedCountries={handleVisitedCountries}
            handleVisitedFlag={handleVisitedFlag}
          ></Country>
        ))}
      </div>
    </div>
  );
};

export default countries;

// import React, { use } from "react";

// const Countries = ({ countriesPromise }) => {
//   const countries = use(countriesPromise);
//   console.log("=> ", countries);

//   return (
//     <div>
//       <h1>Countries List</h1>
//       <ul>
//         {countries.map((country) => (
//           <li key={country.cca3}>{country.name.common}</li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default Countries;
