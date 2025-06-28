import React from 'react';
import { Link } from 'react-router-dom';

const Computer_and_IT_Tranining = () => {
  return (
    <div className="container-fluid ">

     {/* Breadcrumb */}
<nav aria-label="breadcrumb " className="bg-light p-4 mt-5 rounded">
  <h2 className="text-dark">Computer and IT Training</h2>
  <ol className="breadcrumb bg-gry">
    <li className="breadcrumb-item">
      <Link to="/">Home</Link>
    </li>
    <li className="breadcrumb-item active" aria-current="page">
      Computer and IT Training
    </li>
  </ol>
</nav>


      {/* Main Content */}
      <div className="container maincontent py-4">
        <h3 className="pt-3 text-danger">Welcome to Udhay Institute: Your Gateway to Career Excellence</h3>
        <p>
          At <strong>Udhay Institute</strong>, we are committed to shaping the future of IT professionals through
          comprehensive training and placement programs. Our mission is to bridge the gap between academic learning
          and industry requirements, empowering individuals with the skills and knowledge needed to excel in today’s
          competitive job market.
        </p>

        <h4>Our Approach</h4>
        <p>
          We believe in a holistic approach that includes technical training as well as professional development.
          Our programs foster both hard and soft skills with real-world case studies and interactive sessions.
        </p>

        <h4>Training Programs</h4>
        <ol>
          <li>
            <h6>Technical Training:</h6>
            <ul>
              <li><strong>Programming Languages:</strong> Java, Python, C++, JavaScript</li>
              <li><strong>Web Development:</strong> HTML, CSS, React, Angular, Node.js</li>
              <li><strong>Database Management:</strong> SQL, MongoDB, Oracle</li>
              <li><strong>Cloud Computing:</strong> AWS, Azure, GCP</li>
              <li><strong>Cybersecurity:</strong> Ethical Hacking, Network Security</li>
              <li><strong>Data Science:</strong> Python, R, Machine Learning, TensorFlow</li>
            </ul>
          </li>

          <li>
            <h6>Professional Development:</h6>
            <ul>
              <li><strong>Communication Skills:</strong> Verbal & written proficiency</li>
              <li><strong>Leadership & Management:</strong> Team building, conflict resolution</li>
              <li><strong>Interview Preparation:</strong> Resume writing, mock interviews</li>
              <li><strong>Soft Skills:</strong> Time management, emotional intelligence</li>
            </ul>
          </li>
        </ol>

        <h4 className="pt-3">Placement Assistance</h4>
        <p>
          Our dedicated placement cell connects students with top IT companies through internships, drives,
          and alumni networks. We also offer resume review, career counseling, and 1-on-1 interview support.
        </p>

        <h6>Why Choose Udhay Institute?</h6>
        <ul>
          <li><strong>Industry-Relevant Curriculum:</strong> Designed with input from tech professionals</li>
          <li><strong>Experienced Faculty:</strong> Learn from seasoned IT experts</li>
          <li><strong>Modern Infrastructure:</strong> Labs, online portals, and real-time projects</li>
          <li><strong>Lifetime Access:</strong> Continue learning even after completing the course</li>
        </ul>

        <h4 className="pt-3">Join Us Today!</h4>
        <p>
          Whether you’re a fresher or a working professional, <strong>Udhay Institute</strong> has something for everyone.
          Take the first step toward a successful IT career with our free training under the guidance of
          <strong> Deputy CM Udhayanidhi Stalin’s visionary initiative</strong>.
        </p>
      </div>
    </div>
  );
};

export default Computer_and_IT_Tranining;
