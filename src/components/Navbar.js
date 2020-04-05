import React from 'react';

export default function Navbar() {
  return (
    <React.Fragment>
      <nav className="navbar navbar-light bg-danger fixed-top shadow-sm">
        <div className="mx-auto container" style={{ 'max-width': '50em' }}>
          <a
            className="navbar-brand text-white font-weight-bold text-monospace"
            href="/"
          >
            <h6>COVID-19 Resource Center</h6>
          </a>
          <button
            className="navbar-toggler border-white"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="text-white font-weight-light">
              Menu <i className="fas fa-virus text-white"></i>
            </span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item active">
                <a className="nav-link text-white" href="/">
                  Home <span className="sr-only">(current)</span>
                </a>
              </li>
              <li className="nav-item active">
                <a className="nav-link text-white" href="/countries">
                  Countries <span className="sr-only">(current)</span>
                </a>
              </li>
              <li className="nav-item active">
                <a className="nav-link text-white" href="/states">
                  US States <span className="sr-only">(current)</span>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-white" href="/howtohelp">
                  How to Help
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-white" href="/resources">
                  Resources
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-white" href="/about">
                  About
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </React.Fragment>
  );
}
