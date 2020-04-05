import React from 'react';
import resourcesInfo from './ResourcesInfo';

export default function Resources() {
  const resourceInfoCards = resourcesInfo.map((item) => (
    <div class="card mt-4 mb-2 shadow">
      <img src={item.src} class="card-img-top" alt={`${item.title}_banner`} />
      <div class="card-body">
        <h5 class="card-title">{item.title}</h5>
        <a href={item.link} class="btn btn-danger" target="_blank">
          {item.btnText}
        </a>
      </div>
    </div>
  ));

  return (
    <React.Fragment>
      <div class="jumbotron shadow-lg">
        <div class="container">
          <h1 class="display-4">COVID-19 Resources</h1>
          <p class="lead">Resources to help you through the pandemic.</p>
        </div>
      </div>
      {resourceInfoCards}
    </React.Fragment>
  );
}
