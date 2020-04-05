import React, { useState, useEffect } from 'react';
import axios from 'axios';
import StateCard from './StateCard';
import Spinner from '../../components/Spinner';
import Error from '../../components/Error';

export default function States() {
  const [stateData, setStateData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  let numOrZero = (n) => (isNaN(n) ? 0 : n);

  useEffect(() => {
    setLoading(true);
    axios
      .get('https://covidtracking.com/api/states')
      .then((res) => {
        setStateData(res.data);
        setLoading(false);
      })
      .catch((e) => setError(e.response));
  }, []);

  const stateCards = stateData
    .sort((a, b) => b.totalTestResults - a.totalTestResults)
    .map((item, i) => <StateCard state={item} key={i} />);

  const updateUsTotalRecovered = () => {
    let newUsTotalRecovered = stateData.reduce(
      (a, b) => a + numOrZero(b.recovered),
      0
    );
    localStorage.setItem('usTotalRecovered', newUsTotalRecovered);
  };

  updateUsTotalRecovered();

  return (
    <div>
      {error ? (
        <Error errorData={error} />
      ) : (
        <React.Fragment>{loading ? <Spinner /> : stateCards}</React.Fragment>
      )}
    </div>
  );
}
