import React from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";


const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark" style={{ backgroundColor: "#ff1212" }}>
      <div className="container">
        {/* Logo */}
        <Link className="navbar-brand d-flex align-items-center" to="/">
          <img
            src="/assets/logo.png"
            alt="Udhay Logo"
            style={{
              width: "60px",
              height: "60px",
              borderRadius: "50%",
              objectFit: "cover",
            }}
          />
        </Link>

        {/* Toggler for mobile */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarContent"
          aria-controls="navbarContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Nav links */}
        <div className="collapse navbar-collapse justify-content-end" id="navbarContent">
          
          <ul className="navbar-nav mb-2 mb-lg-0 gap-3">
            <li className="nav-item">
              <Link className="nav-link fw-bold text-white" to="/">HOME</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link fw-bold text-white" to="/courses">COURSES</Link>
            </li>

            {/* Pages with nested submenu */}
          <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle fw-bold text-white"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
              >
                PAGES
              </a>

              <ul className="dropdown-menu">

                {/* Nested Submenu */}
                <li className="dropdown-submenu position-relative">
                  <a className="dropdown-item dropdown-toggle" href="#">
                    Coaching for Competitive Exams
                  </a>
                  <ul className="dropdown-menu">
                    <li><Link className="dropdown-item" to="/TNPSC_Coaching">TNPSC</Link></li>
                    <li><Link className="dropdown-item" to="/SSC_Coaching">SSC</Link></li>
                    <li><Link className="dropdown-item" to="/BANK_Couching">BANK</Link></li>
                    <li><Link className="dropdown-item" to="/Railway_Couching">RAILWAYS</Link></li>
                    <li><Link className="dropdown-item" to="/PoliceCoaching">POLICE</Link></li>
                    <li><Link className="dropdown-item" to="/DefenceCoaching">ARMY, NAVY, AIRFORCE</Link></li>
                  </ul>
                </li>

                {/* Other Pages */}
                <li><Link className="dropdown-item" to="/Computer_and_IT_Tranining">Computer and IT Training</Link></li>
                <li><Link className="dropdown-item" to="/placement-training">Placement & Training</Link></li>
                <li><Link className="dropdown-item" to="/Career_Guidance">Career Guidance</Link></li>
                <li><Link className="dropdown-item" to="/hr-internship">HR Internship / Training</Link></li>
                <li><Link className="dropdown-item" to="/spoken-english">Spoken English</Link></li>
                <li><Link className="dropdown-item" to="/Technical_Training_Typriting">Technical Training</Link></li>
                <li><Link className="dropdown-item" to="/Industrial_Visit_Planning_Program">Industrial Visit Planning</Link></li>
                <li><Link className="dropdown-item" to="/Workshop_for_various_programs">Workshops</Link></li>
              </ul>
            </li>

            <li className="nav-item">
              <Link className="nav-link fw-bold text-white" to="/about">ABOUT</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link fw-bold text-white" to="/contact">CONTACT</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
