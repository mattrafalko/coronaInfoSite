import React from 'react';
import howToHelpInfo from './HowToHelpInfo';
import movementsInfo from './MovementsInfo';

export default function HowToHelp() {
  const howToHelpCards = howToHelpInfo.map((item) => (
    <div className="card mt-4 mb-4 shadow">
      <img
        src={item.src}
        className="card-img-top"
        alt={`${item.title}_banner`}
      />
      <div className="card-body">
        <h5 className="card-title">{item.title}</h5>
        <p className="card-text">{item.desc}</p>
        <a href={item.link} className="btn btn-danger" target="_blank">
          {`Donate to ${item.title}`}
        </a>
      </div>
    </div>
  ));

  const movementCards = movementsInfo.map((item) => (
    <div className="card mt-4 shadow">
      <img
        src={item.src}
        className="card-img-top"
        alt={`${item.title}_${item.alt}`}
      />
      <div className="card-body">
        <h5 className="card-title">{item.title}</h5>
        <p className="card-text">{item.desc}</p>
        <a href={item.link} className="btn btn-danger" target="_blank">
          {`Donate to ${item.title}`}
        </a>
      </div>
    </div>
  ));

  return (
    <React.Fragment>
      <div className="jumbotron shadow-lg">
        <h1 className="display-4">How to Help</h1>
        <p className="lead">
          {' '}
          Everyone can help in some way. Check out the links below to see how
          you can help fight COVID-19.
        </p>
        <p>
          Local businesses are in need of help. Keep them in mind when wanting
          to make charitable donations.
        </p>
      </div>

      <h3 classNameName="mt-4">Charities</h3>
      {howToHelpCards}
      <h3 classNameName="mt-4">Movements</h3>
      {movementCards}
    </React.Fragment>
  );
}
