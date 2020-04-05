import React from 'react';
import errorman from '../assets/errorman.jpg';

export default function Error(props) {
  console.log(props.errorData);

  return (
    <div classNameNameName="container mx-auto" style={{ 'margin-top': '2em' }}>
      <div className="card">
        <img src={errorman} className="card-img-top" alt="error banner" />
        <div className="card-body">
          <h5 className="card-title font-weight-bold">
            Error Status: {props.errorData.status}
          </h5>
          <p className="card-text">
            Message:{' '}
            {props.errorData.data.message
              ? props.errorData.data.message
              : props.errorData.data}
          </p>
          <span>Sorry about that!</span>
        </div>
        <div className="card-body">
          <a href="/" className="card-link">
            Home
          </a>
        </div>
      </div>
    </div>
  );
}
