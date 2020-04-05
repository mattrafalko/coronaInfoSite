import React, { useState, useEffect } from 'react';
import axios from 'axios';
import CountryCard from './CountryCard';
import Spinner from '../../components/Spinner';
import Error from '../../components/Error';

export default function Home() {
  const [countryData, setCountryData] = useState([]);
  const [currentDate, setCurrentDate] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .get('https://api.covid19api.com/summary', {
        headers: { 'Access-Control-Allow-Origin': '*' },
      })
      .then((res) => {
        setCountryData([...res.data.Countries]);
        let date = new Date(res.data.Date).toString();
        setCurrentDate(date);
        setLoading(false);
      })
      .catch((e) => {
        setError(e.response);
      });
  }, []);

  const countryCards = countryData
    .sort((a, b) => b.TotalConfirmed - a.TotalConfirmed)
    .map((item, i) => <CountryCard country={item} key={i} />);

  const countriesDropDownList = countryData.map((country) => (
    <a class="dropdown-item" href={`#${country.Country}`}>
      {country.Country}
    </a>
  ));

  let countriesPageItems = (
    <React.Fragment>
      <div class="dropdown">
        <a
          class="btn btn-danger dropdown-toggle"
          href="#"
          role="button"
          id="dropdownMenuLink"
          data-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded="false"
        >
          Select a Country
        </a>

        <div
          class="dropdown-menu"
          style={{ marginTop: '5em' }}
          aria-labelledby="dropdownMenuLink"
        >
          {countriesDropDownList}
        </div>
      </div>
      <div>{countryCards}</div>
    </React.Fragment>
  );

  return (
    <div>
      {error ? (
        <Error errorData={error} />
      ) : (
        <React.Fragment>
          {loading ? (
            <Spinner />
          ) : (
            <React.Fragment>
              <h6 className="text-secondary">Refreshed on {currentDate}</h6>
              {countriesPageItems}
            </React.Fragment>
          )}
        </React.Fragment>
      )}
    </div>
  );
}
