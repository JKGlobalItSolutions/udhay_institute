import React from "react";
import { Link } from "react-router-dom";

import bankimg1 from "./newimg/bank.jpeg";
import bankimg2 from "./newimg/bank2.jpeg";



const BANK_Couching = () => {
  return (
    <div className="">
      {/* Breadcrumb */}
      <nav
        aria-label="breadcrumb container-fluid"
        className="bg-light p-4  rounded"
      >
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
          src={bankimg1}
          alt="Free Bank Coaching Banner"
          className="img-fluid rounded"
        />
      </div>

      {/* Coaching Content */}
      <section className="mb-5">
        <h3 className="fw-bold text-center mb-4">
          Free Bank Exam Coaching under Udhayanidhi Stalin Scheme
        </h3>
        <p className="p-3">
          As part of the Tamil Nadu Government’s digital empowerment initiative,
          free online coaching is provided for Bank Exams like IBPS Clerk, PO,
          SO, Manager, and more. This scheme, launched under the guidance of
          Hon’ble Minister Udhayanidhi Stalin, offers structured training, mock
          tests, and bilingual study materials to support deserving candidates.{" "}
          <br />
          <br />
          The program is designed to bridge the educational gap for students
          from rural and economically weaker sections, enabling them to compete
          confidently in national-level competitive exams. Participants benefit
          from expert faculty sessions, downloadable resources, previous year
          question analysis, and real-time progress tracking. <br />
          <br />
          Through this initiative, thousands of aspirants are gaining access to
          high-quality preparation tools from the comfort of their homes —
          ensuring equitable opportunities for all.
        </p>

        {/* Coaching Illustration Image */}
        <div className="text-center my-4">
          <img
             src={bankimg2}
            alt="IBPS Coaching Chennai"
            className="img-fluid rounded shadow w-50"
          />
        </div>

        {/* Aptitude Table */}
        <div className="table-responsive p-2">
          <table className="table table-bordered text-center mt-4">
            <thead className="table-dark">
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
                  Covers strategies to solve numerical problems under time
                  constraints. Practice-focused modules build confidence for
                  real exam scenarios. Includes topics like Simplification,
                  Number Series, Data Interpretation, Profit & Loss,
                  Time-Speed-Distance, and Mensuration with video solutions.
                </td>
                <td>
                  Language comprehension, vocabulary, grammar and analytical
                  English abilities are taught with practice tests and group
                  discussions. Focus on Reading Comprehension, Para Jumbles,
                  Sentence Correction, and Synonym-Antonym drills with bilingual
                  support.
                </td>
                <td>
                  Strengthen logical and analytical reasoning through puzzles,
                  coding-decoding, and statement analysis taught by experienced
                  trainers. Also includes seating arrangements, syllogisms,
                  input-output, direction sense, and blood relations.
                </td>
                <td>
                  Daily updates on current affairs, national & international
                  news, budget analysis, government schemes, and
                  economic/banking awareness. Integrated quizzes and monthly
                  PDFs ensure consistent awareness for all competitive exams.
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <p className="text-center fw-bold">“Nothing is Impossible”</p>

        {/* Features Image */}
        {/* <div className="text-center my-4">
          <img
            src="/img/features-coaching-chennai.jpg"
            alt="Bank Coaching Features"
            className="img-fluid rounded"
          />
        </div> */}
        {/* Features */}
        <div className="my-4 ps-3">
          <h4 className="fw-bold mb-3">Key Features of the Program</h4>
          <ul className="list-unstyled ps-3">
            <li className="mb-2">
              ✅ Government-backed free training under experienced faculty.
            </li>
            <li className="mb-2">
              ✅ Latest study materials (English & Tamil) prepared by subject
              experts.
            </li>
            <li className="mb-2">
              ✅ Regular practice tests, mock exams, and real-time performance
              tracking.
            </li>
            <li className="mb-2">
              ✅ Flexible learning schedule with recorded and live sessions.
            </li>
            <li className="mb-2">
              ✅ Dedicated mentor support and one-on-one doubt-clearing
              sessions.
            </li>
            <li className="mb-2">
              ✅ Bilingual content delivery ensuring accessibility for all
              learners.
            </li>
            <li className="mb-2">
              ✅ Mobile-friendly platform with anytime, anywhere access.
            </li>
            <li className="mb-2">
              ✅ Certificate of completion and exam readiness support.
            </li>
          </ul>
        </div>

     <div className="alert alert-success my-4">
  <h5 className="text-center">Enroll in Our Free Online Courses</h5>
  <p className="text-center">
    Learn from anywhere, anytime — 100% free for eligible students.
  </p>
  <p>
    Our courses are designed based on SCERT curriculum and curated by top educators. 
    Available in video, PDF, and interactive formats for seamless online learning.
  </p>
  <p>📞 Helpline: +91 8939144344</p>
  <p>
    🎓 Ready to start learning? 👉 <a href="#">Enroll Now</a>
  </p>
</div>



        <div className="p-4">
          <h4 className="fw-bold mt-1">
            Empowering Youth Through Free Coaching
          </h4>
          <p className="mt-3">
            The scheme ensures that every student receives structured
            preparation tailored to their learning style. By blending academic
            rigor with practical learning strategies, the program prepares
            aspirants to confidently face competitive exams.
          </p>
          <p className="mt-2">
            Students can access both online and offline resources, ensuring
            uninterrupted learning even in low-connectivity areas. The inclusion
            of daily current affairs, weekly quizzes, and monthly revision plans
            helps maintain consistent progress.
          </p>
          <p className="mt-2">
            With multilingual content (English & Tamil), experienced mentors,
            and a learner-centric approach, this initiative is empowering both
            rural and urban youth — creating pathways to employment, education,
            and lifelong success.
          </p>
        </div>

        {/* Visual Content */}
        {/* <div className="text-center my-4">
          <img
            src="/img/online-bank-coaching-class.jpg"
            alt="Online Bank Coaching Class"
            className="img-fluid rounded shadow"
          />
        </div> */}

        
<div className="p-4 bg-light rounded shadow-sm">
  <h4 className="fw-bold mt-4">Join Free Online Bank Coaching</h4>
  <p className="mt-3">
    Enroll in our <strong>free online coaching classes</strong> for Bank Exams, designed to help you
    succeed in IBPS, SBI, RBI, and other government sector exams. Classes are completely flexible
    and can be accessed from the comfort of your home, whether via mobile or desktop.
  </p>
  <p className="mt-2">
    The program includes live sessions, mock tests, downloadable bilingual study materials,
    and dedicated mentor support to guide your learning journey. Regular performance tracking
    ensures you stay exam-ready at every stage.
  </p>
  <p className="mt-2">
    This initiative is proudly brought to you under the
    <strong> Udhayanidhi Stalin Youth Skill Development Scheme</strong>, aimed at empowering
    students from all backgrounds with equal learning opportunities and career advancement.
  </p>
</div>

      </section>
    </div>
  );
};

export default BANK_Couching;
