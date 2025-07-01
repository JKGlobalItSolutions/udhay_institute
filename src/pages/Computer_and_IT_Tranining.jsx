import React from 'react';
import { Link } from 'react-router-dom';

import homeimg from "../assets/images/banner/ser 1.jpg";

import approach from "../assets/images/banner/Approach.jpg";  
import Technical from "../assets/images/banner/Technical.jpg";  
import questrionmark from "../assets/images/banner/questrionmark.jpg";  





const Computer_and_IT_Tranining = () => {
  return (
    <div className="container-fluid ">

     {/* Breadcrumb */}
<nav aria-label="breadcrumb container-fluid " className="bg-light p-4  rounded">
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

      {/* 
      <div className="container maincontent py-4">
        <h3 className="pt-3 text-danger">Welcome toUdhay Welfare Institute: Your Gateway to Career Excellence</h3>
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

        <h6>Why ChooseUdhay Welfare Institute?</h6>
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
      </div> */}


<main>

  {/* <div className="bread">
    <nav
      aria-label="breadcrumb"
      style={{ marginTop: "100px" }}
      className="bg-gray p-4"
    >
      <h2 className="container">Computer and IT Training</h2>
      <ol className="breadcrumb container">
        <li className="breadcrumb-item">
          <a href="../index.html">Home</a>
        </li>
        <li className="breadcrumb-item active" aria-current="page">
          Computer and IT Training
        </li>
      </ol>
    </nav>
  </div> */}

  {/* Banner Image */}
  <div className="container my-4">
    <img
      src={homeimg}
      alt="Computer and IT Training"
      className="img-fluid rounded shadow-sm w-100"
      style={{ maxHeight: "400px", objectFit: "cover" }}
    />
  </div>

  {/* Main Content */}
  <div className="container">
    <div className="maincontent">
      <h3 className="pt-4">Welcome to Udhay Welfare Institute: Your Gateway to Career Excellence</h3>
      <p>
       At Udhay Welfare Institute, we are committed to shaping the future of IT professionals through comprehensive training and placement programs. Our mission is to bridge the gap between academic learning and industry requirements, empowering individuals with the skills and knowledge needed to excel in today’s competitive job market. With a legacy of excellence and a relentless pursuit of innovation, we strive to be the catalysts for your success in the dynamic field of Information Technology.
      </p>

      {/* Our Approach */}
      <div className="row align-items-center my-5">
        <div className="col-md-6">
          <img
            src={approach}
            alt="Our Approach"
            className="img-fluid rounded"
          />
        </div>
        <div className="col-md-6">
          <h4>Our Approach</h4>
          <p>
           At Udhay Welfare Institute, we believe in a holistic approach to training that encompasses both technical expertise and professional development. Our programs are designed to not only impart technical skills but also cultivate essential soft skills such as communication, teamwork, and problem-solving. Through hands-on projects, real-world case studies, and interactive sessions, we ensure that our students are equipped with the practical knowledge and confidence to thrive in any professional environment.
          </p>
        </div>
      </div>

   {/* Training Programs */}
<h4 className="pt-5 pb-2">Training Programs</h4>
<ol className="ps-3">
  {/* Technical Training */}
  <li className="mb-4">
    <h6 className="mb-3">Technical Training:</h6>
    <ul className="ps-4">
      <li className="mb-2"><b>Programming Languages:</b> Java, Python, C++, JavaScript, and more</li>
      <li className="mb-2"><b>Web Development:</b> HTML, CSS, React, Angular, Node.js</li>
      <li className="mb-2"><b>Database Management:</b> SQL, NoSQL, MongoDB, Oracle</li>
      <li className="mb-2"><b>Cloud Computing:</b> AWS, Azure, Google Cloud Platform</li>
      <li className="mb-2"><b>Cybersecurity:</b> Ethical Hacking, Network Security, Cryptography</li>
      <li className="mb-2"><b>Data Science & Machine Learning:</b> Python, R, TensorFlow, Pandas</li>
    </ul>
  </li>

  {/* Professional Development */}
  <li className="mb-4">
    <h6 className="mb-3">Professional Development:</h6>
    <ul className="ps-4">
      <li className="mb-2"><b>Communication Skills:</b> Effective verbal and written communication</li>
      <li className="mb-2"><b>Leadership & Management:</b> Team building, conflict resolution, project management</li>
      <li className="mb-2"><b>Interview Preparation:</b> Mock interviews, resume building, networking tips</li>
      <li className="mb-2"><b>Soft Skills:</b> Time management, critical thinking, emotional intelligence</li>
    </ul>
  </li>
</ol>


      {/* Image Between Sections */}
      <div className="text-center my-4">
        <img
          src={Technical}
          alt="Technical Training"
          className="img-fluid rounded shadow"
          style={{ maxWidth: "500px" }}
        />
      </div>

     {/* Placement */}
<h4 className="pt-5 pb-2">Placement Assistance</h4>
<p>
  Our dedicated placement cell works closely with top-tier IT companies to facilitate campus placements,
  internships, and recruitment drives. We partner with both startups and MNCs to ensure our students gain access
  to a diverse range of job opportunities in the tech sector.
</p>
<p className="mt-2">
  The support extends beyond just job searching — we offer personalized career counseling, one-on-one resume reviews,
  mock interview sessions, and workshops on LinkedIn optimization and job portals. Our goal is to build your confidence
  and make you industry-ready from day one.
</p>
<p className="mt-2">
  Alumni referrals and industry connects further strengthen your placement possibilities, helping you transition
  smoothly from training to employment.
</p>


   {/* Why Choose Us */}
<div className="row align-items-center my-5">
  {/* Image Section */}
  <div className="col-md-6 mb-4 mb-md-0">
    <img
      src={questrionmark}
      alt="Why ChooseUdhay Welfare Institute"
      className="img-fluid rounded shadow-sm w-75"
    />
  </div>

  {/* Content Section */}
  <div className="col-md-6">
    <h4 className="fw-bold mb-4">Why Choose Udhay Welfare Institute?</h4>
    <ul className="ps-3">
      <li className="mb-3">
        <b>Industry-Relevant Curriculum:</b> Designed with insights from top tech firms to align with current and future job market needs.
      </li>
      <li className="mb-3">
        <b>Experienced Faculty:</b> Learn from seasoned professionals with real-world experience and mentoring skills.
      </li>
      <li className="mb-3">
        <b>Modern Infrastructure:</b> Equipped labs, cloud-based learning tools, and high-speed internet for seamless learning.
      </li>
      <li className="mb-3">
        <b>Lifetime Access:</b> Alumni get continuous access to updated learning materials, recorded sessions, and career guidance.
      </li>
    </ul>
  </div>
</div>


  {/* Final CTA */}
<div className="text-center bg-light rounded p-4 my-5 shadow-sm">
  <h4 className="fw-bold mb-3">Join Us Today!</h4>
  <p className="mb-3">
    Embark on a transformative journey toward a rewarding career in Information Technology with <strong>Udhay Institute</strong>.
    Whether you're a fresh graduate aiming to kickstart your career or a working professional looking to upskill,
    our industry-aligned programs are crafted to help you succeed.
  </p>
  <p className="mb-4">
    Reach out to our admissions team today and take your first confident step toward a brighter future.
    LetUdhay Welfare Institute be your trusted partner in growth and success.
  </p>
  <a href="/contact" className="btn btn-danger px-4 py-2">
    Contact Admissions
  </a>
</div>

    </div>
  </div>
</main>


    </div>
  );
};

export default Computer_and_IT_Tranining;
