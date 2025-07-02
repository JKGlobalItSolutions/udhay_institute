import React from "react";
import { Link } from "react-router-dom";
import cmImage from "../assets/images/banner/udhay.jpg"; // Ensure correct path

const FullPagePopup = ({ show, onClose }) => {
  if (!show) return null;

  const today = new Date().toLocaleDateString("en-IN", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  return (
    <div
  className="position-fixed top-0 start-0 w-100 h-100 bg-dark bg-opacity-75 d-flex justify-content-center align-items-center"
  style={{ zIndex: 1050 }}
>
  <div
    className="bg-white p-3 p-md-4 rounded shadow-lg w-75 position-relative"
    style={{
      maxHeight: "90vh", // limits height
      overflowY: "auto",  // scroll if needed
    }}
  >
    <button
      className="btn-close position-absolute top-0 end-0 m-3"
      onClick={onClose}
    ></button>

    <div className="text-center">
      {/* Deputy CM Photo */}
      <img
        src={cmImage}
        alt="Honorable Deputy CM Udhayanidhi Stalin"
        className="rounded-circle shadow mb-2"
        style={{
          width: "100px",
          height: "100px",
          objectFit: "cover",
          border: "3px solid #0d6efd",
        }}
      />

      {/* Title & Date */}
      <h5 className="fw-bold text-primary mt-2 mb-1">
        Honorable Deputy Chief Minister Thiru. Udhayanidhi Stalin
      </h5>
      <p className="text-muted mb-1 small">
        Department of Youth Welfare & Sports Development, Tamil Nadu
      </p>
      <p className="text-secondary fst-italic mb-3 small">Announced on: {today}</p>

      {/* Main Heading */}
      <h4 className="mb-3">🎓 Free Online Skill Development Course</h4>

      {/* Main Body */}
      <p className="mb-3" style={{ fontSize: "1rem" }}>
        Launched under the guidance of the Honorable Deputy Chief Minister,
        this initiative empowers the youth of Tamil Nadu with accessible,
        high-quality skill training — absolutely free.
      </p>
{/* Features */}
<div
  className="mx-auto fw-medium text-center"
  style={{ maxWidth: "500px", lineHeight: "1.8", fontSize: "1rem" }}
>
  <div className="mb-2">🎯 Industry-relevant training modules</div>
  <div className="mb-2">🎥 Expert-led online sessions</div>
  <div className="mb-2">📜 Government-recognized certificate</div>
  <div className="mb-2">🆓 Free for all eligible Tamil Nadu youth</div>
</div>


      {/* CTA */}
      <Link
        to="/courses"
        className="btn btn-primary px-4 fw-semibold rounded-1"
        onClick={onClose}
      >
        Enroll Now
      </Link>
    </div>
  </div>
</div>

  );
};

export default FullPagePopup;
