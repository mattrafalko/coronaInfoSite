import React from 'react';
import stateNameAndLinks from '../../stateAndLinkmapper';

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

  let currentState = stateNameAndLinks.filter(
    (item) => item.state === state.toLowerCase()
  );

  let stateName, stateLink;
  if (currentState.length) {
    stateName = currentState[0].data.stateName;
    stateLink = currentState[0].data.stateLink;
  }

  let valueNowRecovered = Math.round((recovered / totalTestResults) * 100);
  valueNowRecovered = isNaN(valueNowRecovered) ? 0 : valueNowRecovered;

  let valueNowDeaths = Math.floor((death / totalTestResults) * 100);
  valueNowDeaths = isNaN(valueNowDeaths) ? 0 : valueNowDeaths;

  return (
    <div className="card mt-4 shadow" id={`${state}`}>
      <div className="card-body">
        <h5 className="card-title">
          <a href={stateLink ?? '#'} target="_blank" className="text-danger">
            {stateName ?? state}
          </a>
        </h5>
        <div class="progress ">
          <div
            className="progress-bar bg-success "
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
            <i class="fas fa-viruses text-warning"></i> Total Confirmed:{' '}
            {totalTestResults}
          </li>
          <li className="list-group-item">
            <i class="fas fa-virus-slash text-success"></i> Total Recovered:{' '}
            {recovered ?? 'N/A'}
          </li>

          <li className="list-group-item ">
            <i class="fas fa-skull-crossbones text-danger"></i> Total Deaths:{' '}
            {death ?? 'N/A'}
          </li>
          <li className="list-group-item text-secondary">
            <i class="fas fa-clinic-medical"></i> Total Hospitalized:{' '}
            {hospitalizedCumulative ?? 'N/A'}
          </li>
          <li className="list-group-item text-secondary">
            <i class="fas fa-procedures"></i> ICU Count:{' '}
            {inIcuCurrently ?? 'N/A'}
          </li>
          <li className="list-group-item text-secondary">
            <i class="fas fa-lungs-virus"></i> Currently on Ventilator:{' '}
            {onVentilatorCurrently ?? 'N/A'}
          </li>
        </ul>
      </div>
    </div>
  );
}
