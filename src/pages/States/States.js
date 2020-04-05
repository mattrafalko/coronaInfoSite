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

  const stateDropDownList = stateData.map((state) => (
    <a class="dropdown-item" href={`#${state.state}`}>
      {state.state}
    </a>
  ));

  let statesPageItems = (
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
          Select a State
        </a>

        <div
          class="dropdown-menu overflow-auto"
          style={{ maxHeight: '15em', maxWidth: '20em' }}
          aria-labelledby="dropdownMenuLink"
        >
          {stateDropDownList}
        </div>
      </div>
      <div>{stateCards}</div>
    </React.Fragment>
  );

  updateUsTotalRecovered();

  return (
    <div className="mt-3">
      {error ? (
        <Error errorData={error} />
      ) : (
        <React.Fragment>
          {loading ? <Spinner /> : statesPageItems}
        </React.Fragment>
      )}
    </div>
  );
}
