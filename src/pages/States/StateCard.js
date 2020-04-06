import React from 'react';
import stateNameAndLinks from '../../stateAndLinkmapper';

export default function StateCard(props) {
  const {
    positive,
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

  let valueNowRecovered = Math.floor(
    (recovered / (positive - recovered)) * 100
  );
  valueNowRecovered = isNaN(valueNowRecovered) ? 0 : valueNowRecovered;

  let valueNowDeaths = Math.floor((death / (positive - death)) * 100);
  valueNowDeaths = isNaN(valueNowDeaths) ? 0 : valueNowDeaths;

  let valueTestedPositive = Math.floor((positive / totalTestResults) * 100);
  valueTestedPositive = isNaN(valueTestedPositive) ? 0 : valueTestedPositive;

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
            className="progress-bar bg-danger"
            role="progressbar"
            style={{
              width: `${valueNowDeaths}%`,
            }}
            aria-valuenow={valueNowDeaths}
            aria-valuemin="0"
            aria-valuemax={valueTestedPositive}
          ></div>
          <div
            className="progress-bar bg-success "
            role="progressbar"
            style={{
              width: `${valueNowRecovered}%`,
            }}
            aria-valuenow={valueNowRecovered}
            aria-valuemin={valueNowDeaths}
            aria-valuemax={valueTestedPositive}
          ></div>

          <div
            className="progress-bar bg-warning"
            role="progressbar"
            style={{
              width: '100%',
            }}
            aria-valuenow={valueTestedPositive}
            aria-valuemin="0"
            aria-valuemax={valueTestedPositive}
          ></div>
        </div>

        <ul className="list-group list-group-flush">
          <li className="list-group-item">
            <i class="fas fa-viruses text-warning"></i> Total Confirmed:{' '}
            {positive}
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
            <i class="fas fa-vial"></i> Total Tested:{' '}
            {totalTestResults ?? 'N/A'}
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
