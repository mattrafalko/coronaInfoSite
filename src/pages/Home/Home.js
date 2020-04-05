import React from 'react';
import statue from '../../assets/statue.jpg';

export default function Home() {
  return (
    <div className="content jumbotron mt-4 ">
      <h1 className="display-4">COVID-19 </h1>
      <p className="lead">Easy Access to Statistics & Resrouces. </p>
      <hr className="my-4" />
      <p>
        COVID-19 is an infectious disease caused by severe acute respiratory
        syndrome coronavirus 2 (SARS-CoV-2). The disease was first identified in
        December 2019 in Wuhan, the capital of China's Hubei province, and has
        since spread globally, resulting in the ongoing 2019–20 coronavirus
        pandemic.
      </p>
      Common symptoms include:
      <ul>
        <li>fever</li>
        <li>cough</li>
        <li>shortness of breath</li>
      </ul>
      Other symptoms may include:
      <ul>
        <li>muscle pain</li>
        <li>diarrhea </li>
        <li>sore throat </li>
        <li>loss of smell</li>
        <li>abdominal pain </li>
      </ul>
      <p>
        While the majority of cases result in mild symptoms, some progress to
        viral pneumonia and multi-organ failure. As of 5 April 2020, more than
        1.2 million cases of have been reported in more than two hundred
        countries and territories, resulting in over 64,700 deaths. More than
        246,000 people have recovered.
      </p>
      <a
        className="btn btn-danger btn-lg"
        href="https://en.wikipedia.org/wiki/Coronavirus_disease_2019"
        target="_blank"
        role="button"
      >
        Learn more
      </a>
    </div>
  );
}
