import React from 'react';
import { Link } from 'react-router-dom';

const BANK_Couching = () => {
  return (
    <div className="my-5">
      {/* Breadcrumb */}
      <nav aria-label="breadcrumb container-fluid" className="bg-light p-4  rounded">
        <h2 className="text-dark">Bank Exam Coaching Centre</h2>
        <ol className="breadcrumb bg-gry">
          <li className="breadcrumb-item">
            <Link to="/">Home</Link>
          </li>
          <li className="breadcrumb-item active" aria-current="page">
            Free Online Courses – Udhayanidhi Stalin Scheme
          </li>
        </ol>
      </nav>

      {/* Banner */}
      <div className="text-center my-5">
        <img
          src="/img/bank-training-banner.png"
          alt="Free Bank Coaching Banner"
          className="img-fluid rounded"
        />
      </div>

      {/* Coaching Content */}
      <section className="mb-5">
        <h3 className="fw-bold text-center mb-4">
          Free Bank Exam Coaching under Udhayanidhi Stalin Scheme
        </h3>
        <p>
          As part of the Tamil Nadu Government’s digital empowerment initiative, free online coaching is provided
          for Bank Exams like IBPS Clerk, PO, SO, Manager, and more. This scheme, launched under the guidance of
          Hon’ble Minister Udhayanidhi Stalin, offers structured training, mock tests, and bilingual study
          materials to support deserving candidates.
        </p>

        {/* Coaching Illustration Image */}
        <div className="text-center my-4">
          <img
            src="/img/ibps-coaching-in-chennai.jpg"
            alt="IBPS Coaching Chennai"
            className="img-fluid rounded shadow"
          />
        </div>

        {/* Aptitude Table */}
        <div className="table-responsive">
          <table className="table table-bordered text-center mt-4">
            <thead>
              <tr>
                <th>QUANTITATIVE APTITUDE</th>
                <th>VERBAL ABILITY</th>
                <th>REASONING ABILITY</th>
                <th>AWARENESS</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  Covers strategies to solve numerical problems under time constraints. Practice-focused modules
                  build confidence for real exam scenarios.
                </td>
                <td>
                  Language comprehension, vocabulary, grammar and analytical English abilities are taught with
                  practice tests and group discussions.
                </td>
                <td>
                  Strengthen logical and analytical reasoning through puzzles, coding-decoding, and statement
                  analysis taught by experienced trainers.
                </td>
                <td>
                  Current affairs, economic and banking awareness, and general knowledge updates are shared daily
                  to enhance awareness.
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <p className="text-center fw-bold">“Nothing is Impossible”</p>

        {/* Features Image */}
        <div className="text-center my-4">
          <img
            src="/img/features-coaching-chennai.jpg"
            alt="Bank Coaching Features"
            className="img-fluid rounded"
          />
        </div>

        {/* Features */}
        <ul>
          <li>Government-backed free training under experienced faculty.</li>
          <li>Latest study materials (English & Tamil) prepared by experts.</li>
          <li>Regular practice tests and performance tracking.</li>
          <li>Flexible learning schedule with recorded sessions.</li>
          <li>Dedicated mentor support and doubt-clearing sessions.</li>
        </ul>

        <div className="alert alert-success my-4">
          <h5 className="text-center">Free Study Materials Available</h5>
          <p className="text-center">Hurry! Limited stock for eligible students.</p>
          <p>
            These materials are based on SCERT and expert compilations and are available in both hardcopy and
            softcopy formats.
          </p>
          <p>📞 Helpline: +91 8939144344</p>
          <p>
            📥 Want to enroll now? 👉 <a href="#">Click Here</a>
          </p>
        </div>

        <h4 className="fw-bold mt-5">Empowering Youth Through Free Coaching</h4>
        <p>
          The scheme ensures every student receives structured preparation tailored to their learning style.
          Online and offline access, current affairs updates, and multilingual content make this training ideal
          for rural and urban youth alike.
        </p>

        {/* Visual Content */}
        <div className="text-center my-4">
          <img
            src="/img/online-bank-coaching-class.jpg"
            alt="Online Bank Coaching Class"
            className="img-fluid rounded shadow"
          />
        </div>

        <h4 className="fw-bold mt-4">Join Free Online Bank Coaching</h4>
        <p>
          Enroll in our <strong>free online coaching classes</strong> for Bank Exams. Classes are flexible and
          accessible from home. Mock tests, doubt support, and downloadable materials make this an ideal choice
          for competitive exam aspirants. Brought to you under the <strong>Udhayanidhi Stalin Youth Skill
          Development Scheme</strong>.
        </p>
      </section>
    </div>
  );
};

export default BANK_Couching;
