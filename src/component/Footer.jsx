import React from "react";
import { Link } from "react-router-dom";
import {
  FaFacebookF,
  FaTwitter,
  FaGithub,
  FaInstagram,
  FaArrowUp,
} from "react-icons/fa";

import logo from "../assets/images/banner/udhay.jpg";
import adminpic from "../assets/images/banner/adminpic.jpg";
const Footer = () => {
  return (
    <footer className="bg-dark text-light pt-5 pb-4 position-relative">
      <div className="container">
        <div className="row">
          {/* Left: Logo & Info */}
          <div className="col-md-8 mb-4">
            <div className="d-flex align-items-start gap-4">
              <img
                src={logo}
                alt="logo"
                style={{
                  width: "150px",
                  borderRadius: "10%",
                  marginBottom: "10px",
                }}
              />
              <div>
                <h4 className="fw-bold text-light">Udhay Welfare Institute</h4>
                <p>
                  A Government-supported initiative in Tamil Nadu, committed to
                  offering free quality training in competitive exams, IT,
                  English, and professional skills. Empowering youth with
                  employment-ready skills.
                </p>
              </div>
            </div>

            <div className="mt-4">
              <div className="mb-3">
                <p className="fw-bold text-info mb-1">📞 Phone:</p>
                <p className="text-light mb-2" style={{ fontSize: "15px" }}>
                  +91 79044 09070
                </p>
              </div>

              <div className="mb-3">
                <p className="fw-bold text-info mb-1">📧 Email:</p>
                <p className="text-light mb-2" style={{ fontSize: "15px" }}>
                  contact@udhaywelfareinstitute.com
                </p>
              </div>

              <div>
                <p className="fw-bold text-info mb-1">📍 Address:</p>
                <p className="text-light mb-0" style={{ fontSize: "15px" }}>
                  Tiruvannamalai, Tamil Nadu 606604
                </p>
              </div>
            </div>
          </div>

          {/* Right: Founder Image and Quick Links */}
          <div className="col-md-4">
            <div className="mb-4 text-center">
              {/* Founder Image */}
              <img
                src={adminpic}
                alt="Founder"
                style={{
                  width: "180px",
                  height: "180px",
                  objectFit: "cover",
                  borderRadius: "50%",
                  border: "3px solid #17a2b8",
                  boxShadow: "0 4px 12px rgba(0, 0, 0, 0.3)",
                }}
              />

              {/* Founder Details */}
              <h6 className="mt-3 fw-bold text-light fs-5">
                Er. Vignesh Gopinath
              </h6>
              <p className="text-muted mb-0" style={{ fontSize: "14px" }}>
                Founder & Director
              </p>
              <p className="text-muted" style={{ fontSize: "14px" }}>
                DMK Youth Wing, Polur
              </p>

              {/* Divider */}
              <hr className="border-light my-4" />

              {/* Links Section */}
              <h5
                className="fw-bold text-uppercase text-info mb-3"
                style={{ letterSpacing: "1px" }}
              >
                Quick Links
              </h5>
              <ul className="list-unstyled">
                {[
                  { label: "About Us", to: "/about" },
                  { label: "Contact", to: "/contact" },
                  { label: "Free Courses", to: "/courses" },
                
                ].map((link, idx) => (
                  <li key={idx} className="mb-2">
                    <Link
                      to={link.to}
                      className="text-light text-decoration-none"
                      style={{ fontSize: "15.5px", fontWeight: 500 }}
                    >
                      🔹 {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Row */}
        <hr className="border-secondary" />
        <div className="d-flex justify-content-between align-items-center flex-wrap">
          <small className="mb-2">
            © 2025 Designed & Developed by{" "}
            <span className="text-info">Udhay Welfare Institute</span>
          </small>
          <div className="d-flex gap-3">
            <a href="#" className="text-warning">
              <FaFacebookF />
            </a>
            <a href="#" className="text-warning">
              <FaTwitter />
            </a>
            <a href="#" className="text-warning">
              <FaGithub />
            </a>
            <a href="#" className="text-warning">
              <FaInstagram />
            </a>
          </div>
        </div>
      </div>

      {/* Scroll to Top Button */}
      <button
        className="btn btn-danger position-fixed"
        style={{
          bottom: "20px",
          right: "20px",
          borderRadius: "50%",
          zIndex: 999,
        }}
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      >
        <FaArrowUp />
      </button>
    </footer>
  );
};

export default Footer;
