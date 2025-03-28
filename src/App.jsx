import { Suspense } from "react";
import "./App.css";
import Countries from "./components/countries/countries";
function App() {
  const countriesPromise = fetch(
    "https://restcountries.com/v3.1/all"
  ).then((response) => response.json());
  return (
    <>
      <Suspense fallback={<p>Loading...</p>}>
        <Countries countriesPromise={countriesPromise}></Countries>
      </Suspense>
    </>
  );
}
export default App;

// import { Suspense } from "react";
// import "./App.css";
// import Countries from "./components/countries/countries";

// function App() {
//   const countriesPromise = fetch("https://restcountries.com/v3.1/all").then(res => res.json());

//   return (
//     <>
//       <Suspense fallback={<p>Loading...</p>}>
//         <Countries countriesPromise={countriesPromise} />
//       </Suspense>
//     </>
//   );
// }

// export default App;
