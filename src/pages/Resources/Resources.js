import React from 'react';
import Apple from '../../assets/appleCovid.jpeg';
export default function Resources() {
  return (
    <React.Fragment>
      <div class="jumbotron jumbotron-fluid">
        <div class="container">
          <h1 class="display-4">COVID-19 Resources</h1>
          <p class="lead">Resources to help you through the pandemic.</p>
        </div>
      </div>
      <div class="card mt-4 mb-2">
        <img src={Apple} class="card-img-top" alt="apple" />
        <div class="card-body">
          <h5 class="card-title">Apple's COVID-19 Screening Tool</h5>
          <a
            href="https://www.apple.com/covid19/"
            class="btn btn-danger"
            target="_blank"
          >
            COVID-19 Screening Tool
          </a>
        </div>
      </div>
      <div class="card mt-4 mb-2">
        <img
          src="https://www.pngkit.com/png/detail/939-9398948_apa-logo-american-psychological-association-american-psychology-association.png"
          class="card-img-top"
          alt="CDC logo"
        />
        <div class="card-body">
          <h5 class="card-title">
            American Psychological Association Social Distancing Guidelines
          </h5>
          <a
            href="https://www.apa.org/practice/programs/dmhi/research-information/social-distancing"
            class="btn btn-danger"
            target="_blank"
          >
            APA's Website
          </a>
        </div>
      </div>
      <div class="card mt-4 mb-2">
        <img
          src="https://media.graytvinc.com/images/810*455/Coronavirus+job+cuts.jpg"
          class="card-img-top"
          alt="CDC logo"
        />
        <div class="card-body">
          <h5 class="card-title">Unemployment Assistance</h5>
          <a
            href="https://www.usa.gov/unemployment"
            class="btn btn-danger"
            target="_blank"
          >
            USA.gov Unemployment Website
          </a>
        </div>
      </div>
      <div class="card mt-4 mb-2">
        <img
          src="https://ivfminnesota.com/wp-content/uploads/2018/08/cdc-logo-2.jpg"
          class="card-img-top"
          alt="CDC logo"
        />
        <div class="card-body">
          <h5 class="card-title">
            State & Territorial Health Department Websites
          </h5>
          <a
            href="https://www.cdc.gov/publichealthgateway/healthdirectories/healthdepartments.html"
            class="btn btn-danger"
            target="_blank"
          >
            CDC's Website
          </a>
        </div>
      </div>
    </React.Fragment>
  );
}
