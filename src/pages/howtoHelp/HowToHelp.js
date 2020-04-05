import React from 'react';

import YWCA from '../../assets/ywca.png';

export default function HowToHelp() {
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

      <div class="card mt-4 shadow">
        <img src={YWCA} class="card-img-top" alt="YWCA banner" />
        <div class="card-body">
          <h5 class="card-title">YWCA</h5>
          <p class="card-text">
            "YWCAs are on the frontlines serving more than 1,200 communities,
            providing services and resources for many of the most vulnerable
            children, women, and their families – this includes those
            experiencing domestic violence and/or homelessness, those facing job
            cut-backs, low wages, and housing loss, and those impacted by
            emergency school closures who lack affordable childcare options."
          </p>
          <a
            href="https://www.ywca.org/ywca-usa-covid-19-emergency-response-message/"
            class="btn btn-danger"
            target="_blank"
          >
            Donate to YWCA
          </a>
        </div>
      </div>

      <h3 className="mt-4">Movements</h3>

      <div class="card mt-4 mb-2 shadow">
        <img
          src="https://cms-assets.berniesanders.com/media/images/flag.width-600.jpg"
          class="card-img-top"
          alt="bernie banner"
        />
        <div class="card-body">
          <h5 class="card-title">Bernie Sanders Campaign</h5>
          <p class="card-text">
            "In terms of potential deaths and the impact on our economy, the
            crisis we face from coronavirus is on the scale of a major war, and
            we must act accordingly. We must begin thinking on a scale
            comparable to the threat, and make sure that we are protecting
            working people, low-income people, and the most vulnerable
            communities, not just giant corporations and Wall Street."
          </p>
          <a
            href="https://berniesanders.com/issues/emergency-response-coronavirus-pandemic/"
            class="btn btn-danger"
            target="_blank"
          >
            Donate to Bernie's COVID-19 campaign
          </a>
        </div>
      </div>
    </React.Fragment>
  );
}
