import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Spinner from '../../components/Spinner';
import CountryCard from '../Countries/CountryCard';

export default function Country(selectedCountry) {
  const [countryInfo, setCountryInfo] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get(
        `https://api.covid19api.com/live/country/${selectedCountry}/status/confirmed`
      )
      .then((res) => {
        setCountryInfo(res.data[0]);
        setLoading(false);
      })
      .catch((e) => console.log(e));
  }, []);

  console.log(countryInfo);

  const displayInfo = (
    <div>
      <h1>{countryInfo.Country}</h1>
    </div>
  );

  return <div>{loading ? <Spinner /> : displayInfo}</div>;
}
