import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import 'aos/dist/aos.css';
import AOS from 'aos';

import homeimg from "../assets/images/banner/our courses.jpg";

// course img

import placementImg from "../assets/img/placement and training.jpg";
import competitiveImg from "../assets/img/competative exams.jpeg";

import itTrainingImg from "../assets/img/computer and it training.webp";
import spokenImg from "../assets/img/spoken english.jpeg";

import careerImg from "../assets/img/currier guidence.jpg";
import typingToolsImg from "../assets/img/typewritting.jpeg";

import hrTrainingImg from "../assets/img/hr internship.jpeg";
import industrialVisitImg from "../assets/img/industrial visit program1.jpg";

import govtExamImg from "../assets/img/workshops.jpeg";



const Courses = () => {
  // Initialize AOS animations
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

 
 const courses = [
   { title: "Placement and Training", img: placementImg },
   { title: "Coaching for Competitive Exams", img: competitiveImg },
   { title: "Computer and IT Training", img: itTrainingImg },
   { title: "Spoken English", img: spokenImg },
   { title: "Career Guidance", img: careerImg },
   { title: "Technical Training: Typing & Office Tools", img: typingToolsImg },
   { title: "HR Internship/Training", img: hrTrainingImg },
   { title: "Industrial Visit Planning Program", img: industrialVisitImg },
   { title: "Workshops for Govt Exams", img: govtExamImg },
 ];
 

  return (
    <>
      {/* Hero Section */}
   <section className="d-flex align-items-center h-100" data-aos="fade-right">
  <img
    src={homeimg}
    alt="Free Bank Exam Coaching"
    className="img-fluid w-100"
    style={{ maxHeight: '130vh', objectFit: 'cover' }}
  />
</section>


      {/* Courses List */}
      <section
        className="py-5 bg-light"
        data-aos="fade-up"
      >
        <div className="container">
          <div className="d-flex justify-content-between align-items-center mb-4">
            <h3 className="fw-bold text-dark" data-aos="fade-down">Our Courses</h3>
            <Link
              to="/"
              className="btn btn-outline-warning"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              Back to Home
            </Link>
          </div>

          <div className="row g-4">
           {courses.map((course, index) => (
              <div
                className="col-md-4"
                key={index}
                data-aos="fade-up"
                data-aos-delay={`${100 * index}`}
              >
                <div className="card h-100 border-0 shadow-sm hover-shadow">
                  <img
                    src={course.img}
                    alt={course.title}
                    className="card-img-top"
                    style={{ height: "220px", objectFit: "cover" }}
                  />
                  <div className="card-body d-flex flex-column justify-content-between">
                    <h5 className="card-title fw-bold">{course.title}</h5>
                    <button
                      className="btn btn-danger mt-3 w-100"
                      data-aos="zoom-in"
                      data-aos-delay="200"
                    >
                      Apply Now
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Courses;
