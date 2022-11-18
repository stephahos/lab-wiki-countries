import React, { useState } from 'react';
import countriesJSON from '../countries.json';
import { Link, Navbar } from 'react-router-dom';

function CountriesList({ alpha3Code }) {
  const [countries, setCountries] = useState(countriesJSON);

  return (
    <div>
      <p>function CountriesList</p>
      {countries.map((country) => {
        return (
          <li>
            <Link to={'/' + country.alpha3Code}>
              {country.name.common}
              <img src={country.image} />
            </Link>
          </li>
        );
      })}
    </div>
  );
}

export default CountriesList;
