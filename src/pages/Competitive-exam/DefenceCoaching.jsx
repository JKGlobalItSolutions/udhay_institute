import React from 'react';
import { Link } from 'react-router-dom';
import defence from "./newimg/defence.jpg";
import defence1 from "./newimg/defence1.webp";
import defence2 from "./newimg/defence2.jpg";


const DefenceCoaching = () => {
  return (
    <div className="container py-4">

      {/* Breadcrumb */}
      <nav aria-label="breadcrumb" className="bg-light p-4 rounded mb-4 shadow-sm">
        <h2 className="text-dark mb-2">Army, Navy & Air Force Exam Coaching</h2>
        <ol className="breadcrumb">
          <li className="breadcrumb-item"><Link to="/">Home</Link></li>
          <li className="breadcrumb-item active" aria-current="page">
            Free Defence Coaching – Udhayanidhi Stalin Scheme
          </li>
        </ol>
      </nav>

      {/* Hero Section */}
      <div className="text-center mb-5">
        <h1 className="display-6 fw-bold mb-3">Join the Forces, Serve the Nation</h1>
        <img src={defence} alt="Defence Banner" className="img-fluid rounded shadow" />
        <p className="text-muted mt-2">Crack Army, Navy, and Air Force exams with expert-led coaching at Udhay Welfare Institute.</p>
      </div>

      {/* Introduction */}
      <div className="mb-5">
        <p>
          Udhay Welfare Institute provides comprehensive coaching for Indian Army (GD/Tech/Clerk), Navy (SSR, MR), and Air Force (Group X & Y) exams. We empower aspirants with the right physical training, academic prep, and interview readiness.
        </p>
        <p>
          Courses are offered in Tamil and English, and include mock tests, NDA/CDS crash courses, SSB interview prep, and personalized mentoring.
        </p>
      </div>

      {/* Physical Training Image */}
      <div className="text-center mb-5">
        <img
          src={defence1}
          alt="Defence Physical Training"
          className="img-fluid rounded shadow w-50"
         
        />
        <p className="text-muted mt-2">Train like a soldier — fitness routines tailored to Army/Navy/Air Force selection standards</p>
      </div>

      {/* Roles Covered */}
      <div className="mb-5">
        <h4 className="fw-bold mb-3">Roles Covered</h4>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">Indian Army – Soldier GD, Technical, Clerk, Tradesman</li>
          <li className="list-group-item">Indian Navy – SSR, AA, MR, Navy Trades</li>
          <li className="list-group-item">Indian Air Force – Group X & Group Y</li>
          <li className="list-group-item">NDA & CDS – Officer Entry (UPSC)</li>
          <li className="list-group-item">SSB Interview Preparation</li>
        </ul>
      </div>

      {/* Educational Qualifications */}
      <div className="mb-5">
        <h4 className="fw-bold mb-3">Educational Qualifications</h4>
        <ul className="list-group list-group-flush">
          <li className="list-group-item"><strong>Army Soldier GD:</strong> 10th pass with 45% aggregate</li>
          <li className="list-group-item"><strong>Navy SSR/AA:</strong> 12th pass with Physics & Math</li>
          <li className="list-group-item"><strong>Air Force (X/Y Group):</strong> 10+2 with Science or relevant stream</li>
          <li className="list-group-item"><strong>NDA/CDS:</strong> 12th pass or Graduation from a recognized board/university</li>
        </ul>
      </div>

      {/* Selection Procedure */}
      <div className="mb-5">
        <h4 className="fw-bold text-danger mb-3">Selection Procedure</h4>
        <ul className="list-group list-group-flush">
          <li className="list-group-item"><strong>Written Exam:</strong> Subject-wise paper depending on the entry (Maths, Physics, English, GK)</li>
          <li className="list-group-item"><strong>Physical Fitness Test (PFT):</strong> Running, Push-ups, Pull-ups, Sit-ups</li>
          <li className="list-group-item"><strong>Medical Test:</strong> Eyesight, BMI, Health check</li>
          <li className="list-group-item"><strong>Interview (for Officers):</strong> SSB interview process</li>
        </ul>
        <p className="mt-3 text-muted">We prepare you for all stages — academic, fitness, and interviews with real-time simulations.</p>
      </div>

      {/* Organizational Flowchart */}
      <div className="text-center my-5">
        <h4 className="fw-bold mb-3">Defence Recruitment Process Flow</h4>
        <p className="text-muted mb-4">Step-by-step selection process followed by Army, Navy & Air Force boards:</p>
        <img
          src={defence2}
          alt="Defence Flowchart"
          className="img-fluid rounded shadow mb-4"
          style={{ maxWidth: '600px' }}
        />
        <div className="text-start mx-auto" style={{ maxWidth: '720px' }}>
          <ul className="list-group list-group-flush border rounded">
            <li className="list-group-item"><strong>Stage 1:</strong> Online Application / Rally Registration</li>
            <li className="list-group-item"><strong>Stage 2:</strong> Written Exam (based on role)</li>
            <li className="list-group-item"><strong>Stage 3:</strong> Physical Fitness & Medical Test</li>
            <li className="list-group-item"><strong>Stage 4:</strong> Merit List & Joining Letter</li>
            <li className="list-group-item"><strong>Stage 5:</strong> SSB Interview (Officer Entry)</li>
          </ul>
        </div>
      </div>

      {/* Motivation Banner */}
      <div className="bg-primary bg-opacity-10 p-5 rounded text-center shadow mb-5">
        <h3 className="fw-bold text-primary">"Touch the Sky with Glory – Serve the Nation with Honour"</h3>
        <p className="text-muted mt-2 mb-4">
          Udhay Welfare Institute turns your dream into duty. Our all-in-one training model empowers every defence aspirant to rise above competition.
        </p>
        
        <p className="mt-3 fw-semibold text-success">🇮🇳 Join now — Limited seats in Defence Coaching 2025 batch!</p>
      </div>

      {/* Testimonials */}
      <div className="text-center mb-4">
        <h3 className="fw-bold mb-4">Student Testimonials</h3>
        <div className="row g-4">
          <div className="col-md-6">
            <div className="card shadow-sm h-100 border-start border-4 border-primary">
              <div className="card-body">
                <p className="card-text text-muted">"I cleared Air Force Group Y exam thanks to the daily drills and updated materials. Great trainers and great motivation!"</p>
                <h6 className="mt-3 text-primary">– Hari, Air Force</h6>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="card shadow-sm h-100 border-start border-4 border-success">
              <div className="card-body">
                <p className="card-text text-muted">"Udhay sir’s SSB coaching was amazing. The mock interviews helped me stay calm and clear CDS selection."</p>
                <h6 className="mt-3 text-success">– Priya, CDS Entry</h6>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="card shadow-sm h-100 border-start border-4 border-warning">
              <div className="card-body">
                <p className="card-text text-muted">"With their daily running schedule and push-up goals, I cracked the Indian Army rally with ease!"</p>
                <h6 className="mt-3 text-warning">– Suresh, Soldier GD</h6>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="card shadow-sm h-100 border-start border-4 border-danger">
              <div className="card-body">
                <p className="card-text text-muted">"Coaching in Tamil and English helped me understand concepts easily. Highly recommended for Navy SSR aspirants."</p>
                <h6 className="mt-3 text-danger">– Nithya, Indian Navy</h6>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
};

export default DefenceCoaching;
