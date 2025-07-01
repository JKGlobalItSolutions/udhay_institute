import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebookF, FaTwitter, FaGithub, FaInstagram, FaArrowUp } from 'react-icons/fa';
 import logo from "../assets/images/logo.jpg";
const Footer = () => {
  return (
    <footer className="bg-dark text-light pt-5 pb-4 position-relative">
      <div className="container">
        <div className="row">

          {/* Left: Logo & Info */}
          <div className="col-md-8 mb-3">
            <img
              src={logo}
              alt='logo'
              style={{ width: '80px', borderRadius: '50%', marginBottom: '10px' }}
            />
            <p className="mt-3 mb-1">phone:</p>
            <p>
              Annai, Parvathi Nagar, opp. to Collector Office, Vengikkal,
              Tiruvannamalai, Tamil Nadu 606604
            </p>
            <p>Email: +91 84384 38413</p>
            <p>Address: contact@jkinstitute.com</p>
          </div>

          {/* Right: Links */}
          <div className="col-md-4">
            <h5 className="fw-bold">COMPANY</h5>
            <ul className="list-unstyled mt-3">
              <li>
                <Link to="/about" className="text-light text-decoration-none">About Us</Link>
              </li>
              <li>
                <Link to="/contact" className="text-light text-decoration-none">Contact</Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Row */}
        <hr className="border-secondary" />
        <div className="d-flex justify-content-between align-items-center">
          <small>Copyright © 2025, designed & developed by <span className="text-info">jkglobalitsolutions</span></small>
          <div className="d-flex gap-3">
            <a href="#" className="text-warning"><FaFacebookF /></a>
            <a href="#" className="text-warning"><FaTwitter /></a>
            <a href="#" className="text-warning"><FaGithub /></a>
            <a href="#" className="text-warning"><FaInstagram /></a>
          </div>
        </div>
      </div>

      {/* Scroll to Top Button */}
      <button
        className="btn btn-danger position-fixed"
        style={{
          bottom: '20px',
          right: '20px',
          borderRadius: '50%',
          zIndex: 999
        }}
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      >
        <FaArrowUp />
      </button>
    </footer>
  );
};

export default Footer;
