import React from 'react';
import errorman from '../assets/errorman.jpg';

export default function Error(props) {
  console.log(props.errorData);

  return (
    <div classNameNameName="container mx-auto" style={{ 'margin-top': '2em' }}>
      <div className="card shadow-lg">
        <img src={errorman} className="card-img-top" alt="error banner" />
        <div className="card-body">
          <h5 className="card-title font-weight-bold">
            Error Status: {props.errorData.status}
          </h5>
          <p className="card-text">
            <span className="font-weight-bold"> Message: </span>
            {props.errorData.data.message
              ? props.errorData.data.message
              : props.errorData.data}
          </p>
          <p className="text-secondary">Sorry about that!</p>
          <p className="text-secondary">
            Take this time to practice some self-care.
          </p>
          <p className="text-secondary"> You can always check back later.</p>
        </div>
        <div className="card-body">
          <a href="/" className="btn btn-danger btn-lg">
            Home
          </a>
        </div>
      </div>
    </div>
  );
}
