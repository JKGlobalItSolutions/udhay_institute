import React from 'react';
import { Link } from 'react-router-dom';

const PoliceCoaching = () => {
  return (
    <div className="container py-4">

      {/* Breadcrumb */}
      <nav aria-label="breadcrumb" className="bg-light p-4 rounded mb-4 shadow-sm">
        <h2 className="text-dark mb-2">Police Exam Coaching</h2>
        <ol className="breadcrumb">
          <li className="breadcrumb-item">
            <Link to="/">Home</Link>
          </li>
          <li className="breadcrumb-item active" aria-current="page">
            Free Online Courses – Udhayanidhi Stalin Scheme
          </li>
        </ol>
      </nav>

      {/* Hero Section */}
      <div className="text-center mb-5">
        <h1 className="display-6 fw-bold mb-3">Police Exam Coaching</h1>
        <img src="/images/topper-banner.jpg" alt="Topper Banner" className="img-fluid rounded shadow" />
        <p className="text-muted mt-2">
          Prepare confidently for roles like Police Constable and Sub-Inspector under expert guidance.
        </p>
      </div>

      {/* Introduction */}
      <div className="mb-5">
        <p>
          At Udhay Institute, we are committed to preparing students for prestigious roles in Tamil Nadu's police services. Whether you're targeting the TNUSRB Constable exam or aspiring for the Sub-Inspector post, our institute provides structured learning, physical training, and psychological preparedness.
        </p>
        <p>
          Our expert-led modules are curated with updated syllabi in Tamil and English. Students get access to 100+ mock tests, physical drill sessions, group discussion training, and confidence-building workshops.
        </p>
      </div>

      {/* Physical Training Image */}
      <div className="text-center mb-5">
        <img
          src="/images/physical-training.jpg"
          alt="Physical Training"
          className="img-fluid rounded shadow"
          style={{ maxWidth: '800px' }}
        />
        <p className="text-muted mt-2">Real-time physical training under TNUSRB standards</p>
      </div>

      {/* Roles Covered */}
      <div className="mb-5">
        <h4 className="fw-bold mb-3">Roles Covered</h4>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">Police Constable (Grade II)</li>
          <li className="list-group-item">Jail Warder</li>
          <li className="list-group-item">Fireman</li>
          <li className="list-group-item">Sub-Inspector (Taluk, AR, TSP)</li>
          <li className="list-group-item">SI (Technical)</li>
        </ul>
      </div>

      {/* Educational Qualifications */}
      <div className="mb-5">
        <h4 className="fw-bold mb-3">Educational Qualifications</h4>
        <ul className="list-group list-group-flush">
          <li className="list-group-item"><strong>Constable:</strong> 10th pass (SSLC) from recognized board.</li>
          <li className="list-group-item"><strong>SI:</strong> Bachelor's degree in any stream from a recognized university.</li>
          <li className="list-group-item">Preference for NCC cadets, sports quota candidates & ex-servicemen.</li>
        </ul>
      </div>

      {/* Selection Procedure */}
      <div className="mb-5">
        <h4 className="fw-bold text-danger mb-3">Selection Procedure</h4>
        <ul className="list-group list-group-flush">
          <li className="list-group-item"><strong>Written Exam:</strong> GK, Psychology, Tamil Language Test</li>
          <li className="list-group-item"><strong>PMT & PET:</strong> Height, Chest, Running, Long Jump, etc.</li>
          <li className="list-group-item"><strong>Certificate Verification:</strong> Document scrutiny</li>
          <li className="list-group-item"><strong>Medical Check:</strong> Final medical fitness check</li>
        </ul>
        <p className="mt-3 text-muted">Weekly mock tests and physical evaluations are part of our regular coaching cycle.</p>
      </div>

      {/* Organizational Flowchart */}
      <div className="text-center my-5">
        <h4 className="fw-bold mb-3">TNUSRB Police Exam Process Flow</h4>
        <p className="text-muted mb-4">
          Here’s how the recruitment process works under TNUSRB:
        </p>
        <img
          src="/images/organization-chart.png"
          alt="TNUSRB Chart"
          className="img-fluid rounded shadow mb-4"
          style={{ maxWidth: '600px' }}
        />
        <div className="text-start mx-auto" style={{ maxWidth: '720px' }}>
          <ul className="list-group list-group-flush border rounded">
            <li className="list-group-item"><strong>Stage 1:</strong> Apply through official TNUSRB portal</li>
            <li className="list-group-item"><strong>Stage 2:</strong> Written exam covering GK, Psychology & Tamil</li>
            <li className="list-group-item"><strong>Stage 3:</strong> PMT & PET (height, running, jumps, etc.)</li>
            <li className="list-group-item"><strong>Stage 4:</strong> Certificate/document verification</li>
            <li className="list-group-item"><strong>Stage 5:</strong> Final medical test</li>
            <li className="list-group-item"><strong>Stage 6:</strong> Merit-based selection list announcement</li>
          </ul>
        </div>
      </div>

      {/* Motivation Banner */}
      <div className="bg-primary bg-opacity-10 p-5 rounded text-center shadow mb-5">
        <h3 className="fw-bold text-primary">"Serve with Pride, Enforce with Integrity"</h3>
        <p className="text-muted mt-2 mb-4">
          Join Udhay Institute today and transform into a proud police officer. With our expert coaching and real-world training, your dream is within reach.
        </p>
        <img
          src="/images/motivation-banner.jpg"
          alt="Motivation"
          className="img-fluid rounded shadow"
          style={{ maxWidth: '800px' }}
        />
        <p className="mt-3 fw-semibold text-success">🎯 First demo class is FREE – Book your slot now!</p>
      </div>

      {/* Testimonials */}
      <div className="text-center mb-4">
        <h3 className="fw-bold mb-4">What Our Students Say</h3>
        <div className="row g-4">
          <div className="col-md-6">
            <div className="card shadow-sm h-100 border-start border-4 border-primary">
              <div className="card-body">
                <p className="card-text text-muted">"Thanks to the Udhay team, I passed the TNUSRB exam in my first attempt. The physical sessions and mock tests were top-notch."</p>
                <h6 className="mt-3 text-primary">– Aravindh, Police Constable</h6>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="card shadow-sm h-100 border-start border-4 border-success">
              <div className="card-body">
                <p className="card-text text-muted">"Guidance in Tamil helped me a lot. The trainers are friendly and the material is very clear. Perfect for SI aspirants."</p>
                <h6 className="mt-3 text-success">– Muthulakshmi, SI Trainee</h6>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="card shadow-sm h-100 border-start border-4 border-warning">
              <div className="card-body">
                <p className="card-text text-muted">"Being a working professional, I found their weekend batches very useful. Highly recommended for serious aspirants."</p>
                <h6 className="mt-3 text-warning">– Rajesh, Weekend Batch</h6>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="card shadow-sm h-100 border-start border-4 border-danger">
              <div className="card-body">
                <p className="card-text text-muted">"From applying online to preparing for PET, Udhay Institute guided me in every step. Thank you!"</p>
                <h6 className="mt-3 text-danger">– Karthika, Selected SI</h6>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
};

export default PoliceCoaching;
