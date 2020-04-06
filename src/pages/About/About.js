import React from 'react';

export default function About() {
  return (
    <div class="jumbotron shadow-lg">
      <h1 class="display-4">About this.</h1>
      <p class="lead">A simple to use resource center.</p>
      <hr class="my-4" />
      <p>
        This website is still under construction. Please submit feedback and
        feature requests to:{' '}
        <a
          href="mailto:mattrafalko@gmail.com?Subject=COVID-19%20Site"
          className="text-danger"
        >
          {' '}
          mattrafalko@gmail.com
        </a>
      </p>
      <p>
        Check out the code here on{' '}
        <a
          href="https://github.com/mattrafalko/coronaInfoSite"
          target="_blank"
          className="text-danger"
        >
          github
        </a>
        .
      </p>
      <span>Data Sources:</span>
      <ul>
        <li>
          Countries Page:{' '}
          <a href="https://covid19api.com/" target="_blank">
            COVID19api.com
          </a>
        </li>
        <li>
          States Page:{' '}
          <a href="https://covidtracking.com/" target="_blank">
            COVIDTracking.com
          </a>
        </li>
      </ul>
    </div>
  );
}
