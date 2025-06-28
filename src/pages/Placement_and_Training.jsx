import React from 'react';
import { Link } from 'react-router-dom';

const Placement_and_Training = () => {
  return (
    <main className="container-fluid mt-5">
      {/* Breadcrumb Navigation */}
      <nav aria-label="breadcrumb" className="bg-light p-4 rounded">
        <h2 className="text-primary">Placement and Training</h2>
        <ol className="breadcrumb">
          <li className="breadcrumb-item">
            <Link to="/">Home</Link>
          </li>
          <li className="breadcrumb-item active" aria-current="page">
            Placement and Training
          </li>
        </ol>
      </nav>

      {/* Main Content */}
      <div className="container  maincontent py-4">
        <h3 className="pt-3 text-danger">
          Welcome to Udhay Institute: Your Gateway to Career Excellence
        </h3>
        <p>
          At <strong>Udhay Institute</strong>, we are committed to nurturing talent,
          empowering individuals, and shaping future leaders. Our goal is to bridge
          the gap between potential and opportunity through comprehensive training,
          coaching, and placement programs.
        </p>

        <h4>Our Mission</h4>
        <p>
          To equip learners with relevant knowledge, skills, and confidence to
          succeed in competitive exams and secure employment through personalized
          guidance, expert training, and placement support.
        </p>

        <h4>Our Services</h4>
        <ul className="ps-3">
          <li className="mb-2">
            <strong>Competitive Coaching:</strong> Tailored programs for government
            jobs, entrance tests, and skill certifications.
          </li>
          <li className="mb-2">
            <strong>Placement Support:</strong> Resume building, interview training,
            networking, and job referrals via our placement cell.
          </li>
          <li className="mb-2">
            <strong>Training Programs:</strong> Soft skills, technical skills,
            communication, leadership, and industry-readiness workshops.
          </li>
        </ul>

        <h4>Why Choose Udhay Institute?</h4>
        <ul className="ps-3">
          <li>Expert Trainers with real-world industry experience</li>
          <li>Customized learning plans for each student</li>
          <li>Strong network with companies across Tamil Nadu</li>
          <li>Trusted by thousands with a proven record of results</li>
        </ul>

        <h4 className="pt-3">Our Commitment to Excellence</h4>
        <p>
          Excellence at <strong>Udhay Institute</strong> isn’t optional — it’s
          our foundation. Whether you're a fresh graduate or a job-seeker, our
          programs are built to support, mentor, and guide you every step of
          the way.
        </p>

        <h4>Get Started Today!</h4>
        <p>
          Ready to transform your future? Contact us to join our training,
          placement, or coaching programs. Let’s build your success story
          together.
        </p>
        <p className="mb-5">
          <strong>Unlock your potential. Learn. Get Trained. Get Placed. Only at Udhay Institute.</strong>
        </p>
      </div>
    </main>
  );
};

export default Placement_and_Training;
