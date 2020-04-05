import React from 'react';

export default function StateCard(props) {
  const {
    totalTestResults,
    death,
    recovered,
    state,
    onVentilatorCurrently,
    inIcuCurrently,
    hospitalizedCumulative,
  } = props.state;

  let valueNowRecovered = Math.round((recovered / totalTestResults) * 100);
  valueNowRecovered = isNaN(valueNowRecovered) ? 0 : valueNowRecovered;

  let valueNowDeaths = Math.floor((death / totalTestResults) * 100);
  valueNowDeaths = isNaN(valueNowDeaths) ? 0 : valueNowDeaths;

  return (
    <div className="card mt-4" id={`#${state}`}>
      <div className="card-body">
        <h5 className="card-title">{state}</h5>
        <div class="progress">
          <div
            className="progress-bar bg-success"
            role="progressbar"
            style={{
              width: `${valueNowRecovered}%`,
            }}
            aria-valuenow={valueNowRecovered}
            aria-valuemin="0"
            aria-valuemax={totalTestResults}
          ></div>
          <div
            className="progress-bar bg-danger"
            role="progressbar"
            style={{
              width: `${valueNowDeaths}%`,
            }}
            aria-valuenow={valueNowDeaths}
            aria-valuemin={valueNowRecovered}
            aria-valuemax={totalTestResults}
          ></div>
          <div
            className="progress-bar bg-warning"
            role="progressbar"
            style={{
              width: '100%',
            }}
            aria-valuenow={Math.floor(
              ((totalTestResults - death - recovered) / totalTestResults) * 100
            )}
            aria-valuemin="0"
            aria-valuemax={totalTestResults}
          ></div>
        </div>

        <ul className="list-group list-group-flush">
          <li className="list-group-item">
            Total Confirmed: {totalTestResults}
          </li>
          <li className="list-group-item">
            Total Recovered: {recovered ?? 'N/A'}
          </li>

          <li className="list-group-item">Total Deaths: {death ?? 'N/A'}</li>
          <li className="list-group-item">
            Total Hospitalized: {hospitalizedCumulative ?? 'N/A'}
          </li>
          <li className="list-group-item">
            ICU Count: {inIcuCurrently ?? 'N/A'}
          </li>
          <li className="list-group-item">
            Currently on Ventilator: {onVentilatorCurrently ?? 'N/A'}
          </li>
        </ul>
      </div>
    </div>
  );
}
