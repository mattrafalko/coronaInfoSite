import React from 'react';

export default function CountryCard(props) {
  const { TotalConfirmed, TotalDeaths, Country } = props.country;

  let { TotalRecovered } = props.country;

  if (Country === 'United States of America') {
    if (localStorage.getItem('usTotalRecovered')) {
      TotalRecovered = localStorage.getItem('usTotalRecovered');
    }
  }

  let valueNowRecovered = Math.floor((TotalRecovered / TotalConfirmed) * 100);
  valueNowRecovered = isNaN(valueNowRecovered) ? 0 : valueNowRecovered;

  let valueNowDeaths = Math.floor((TotalDeaths / TotalConfirmed) * 100);
  valueNowDeaths = isNaN(valueNowDeaths) ? 0 : valueNowDeaths;

  return (
    <div className="card mt-4 shadow" id={`${Country}`}>
      <div className="card-body">
        <h5 className="card-title">{Country}</h5>
        <div class="progress">
          <div
            className="progress-bar bg-success"
            role="progressbar"
            style={{
              width: `${valueNowRecovered}%`,
            }}
            aria-valuenow={valueNowRecovered}
            aria-valuemin="0"
            aria-valuemax={TotalConfirmed}
          ></div>
          <div
            className="progress-bar bg-danger"
            role="progressbar"
            style={{
              width: `${valueNowDeaths}%`,
            }}
            aria-valuenow={valueNowDeaths}
            aria-valuemin="0"
            aria-valuemax={TotalConfirmed}
          ></div>
          <div
            className="progress-bar bg-warning"
            role="progressbar"
            style={{
              width: '100%',
            }}
            aria-valuenow={Math.floor(
              ((TotalConfirmed - TotalDeaths - TotalRecovered) /
                TotalConfirmed) *
                100
            )}
            aria-valuemin="0"
            aria-valuemax={TotalConfirmed}
          ></div>
        </div>

        <ul className="list-group list-group-flush">
          <li className="list-group-item">
            <i class="fas fa-viruses text-warning"></i> Total Confirmed:{' '}
            {TotalConfirmed}
          </li>
          <li className="list-group-item">
            <i class="fas fa-virus-slash text-success"></i> Total Recovered:{' '}
            {TotalRecovered}
          </li>
          <li className="list-group-item">
            <i class="fas fa-skull-crossbones text-danger"></i> Total Deaths:{' '}
            {TotalDeaths}
          </li>
        </ul>
      </div>
    </div>
  );
}
