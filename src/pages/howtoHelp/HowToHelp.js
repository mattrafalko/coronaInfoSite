import React from 'react';
import howToHelpInfo from './HowToHelpInfo';
import movementsInfo from './MovementsInfo';

export default function HowToHelp() {
  const howToHelpCards = howToHelpInfo.map((item) => (
    <div class="card mt-4 shadow">
      <img
        src={item.src}
        class="card-img-top"
        alt={`${item.title}_${item.alt}`}
      />
      <div class="card-body">
        <h5 class="card-title">{item.title}</h5>
        <p class="card-text">{item.desc}</p>
        <a href={item.link} class="btn btn-danger" target="_blank">
          {`${item.btnText} ${item.title}`}
        </a>
      </div>
    </div>
  ));

  const movementCards = movementsInfo.map((item) => (
    <div class="card mt-4 shadow">
      <img
        src={item.src}
        class="card-img-top"
        alt={`${item.title}_${item.alt}`}
      />
      <div class="card-body">
        <h5 class="card-title">{item.title}</h5>
        <p class="card-text">{item.desc}</p>
        <a href={item.link} class="btn btn-danger" target="_blank">
          {`${item.btnText} ${item.title}`}
        </a>
      </div>
    </div>
  ));

  return (
    <React.Fragment>
      <div class="jumbotron shadow-lg">
        <h1 class="display-4">How to Help</h1>
        <p class="lead">
          {' '}
          Everyone can help in some way. Check out the links below to see how
          you can help fight COVID-19.
        </p>
        <p>
          Local businesses are in need of help. Keep them in mind when wanting
          to make charitable donations.
        </p>
      </div>

      <h3 className="mt-4">Charities</h3>
      {howToHelpCards}
      <h3 className="mt-4">Movements</h3>
      {movementCards}
    </React.Fragment>
  );
}
