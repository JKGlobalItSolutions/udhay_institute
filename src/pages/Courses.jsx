import React, { useEffect, useState } from "react";
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



 const [showModal, setShowModal] = useState(false);
  const [selectedCourse, setSelectedCourse] = useState("");

 
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
 


 const handleApplyClick = (courseName) => {
    setSelectedCourse(courseName);
    setShowModal(true);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const form = e.target;

    const formData = {
      course: form.course.value,
      name: form.name.value,
      email: form.email.value,
      phone: form.phone.value,
    };

    emailjs
      .send(
        "your_service_id",     // ✅ Replace with your EmailJS Service ID
        "your_template_id",    // ✅ Replace with your Template ID
        formData,
        "your_public_key"      // ✅ Replace with your Public Key
      )
      .then(() => {
        alert(`Successfully applied for ${formData.course}`);
        setShowModal(false);
      })
      .catch((error) => {
        console.error("EmailJS Error:", error);
        alert("Failed to send the application. Please try again.");
      });
  };




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


      {/* Courses */}
      <section className="py-5">
        <div className="container">
          <div className="d-flex justify-content-between align-items-center mb-4">
            <h3 className="fw-bold text-dark" data-aos="fade-down">Popular Free Courses</h3>
            <Link to="/courses" className="btn btn-dark border-1" data-aos="fade-up" data-aos-delay="200">
              View All
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
                      onClick={() => handleApplyClick(course.title)}
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





  {/* Modal Form */}
{showModal && (
  <div
    className="modal show fade d-block"
    tabIndex="-1"
    role="dialog"
    style={{ backgroundColor: "rgba(0,0,0,0.5)" }}
  >
    <div className="modal-dialog modal-dialog-centered" role="document">
      <div className="modal-content">
        <form onSubmit={handleSubmit}>
          <div className="modal-header">
            <h5 className="modal-title">Apply for {selectedCourse}</h5>
            <button
              type="button"
              className="btn-close"
              onClick={() => setShowModal(false)}
            ></button>
          </div>
          <div className="modal-body">
            {/* Course Dropdown */}
            <div className="mb-3">
              <label className="form-label">Select Course</label>
              <select
                name="course"
                className="form-select"
                defaultValue={selectedCourse}
                required
              >
                <option value="">-- Select a course --</option>
                <option value="Placement and Training">Placement and Training</option>
                <option value="Coaching for Competitive Exams">Coaching for Competitive Exams</option>
                <option value="Computer and IT Training">Computer and IT Training</option>
                <option value="Spoken English">Spoken English</option>
                <option value="Career Guidance">Career Guidance</option>
                <option value="Typing & Office Tools">Typing & Office Tools</option>
                <option value="HR Internship/Training">HR Internship/Training</option>
                <option value="Industrial Visit Program">Industrial Visit Program</option>
                <option value="Workshops for Govt Exams">Workshops for Govt Exams</option>
              </select>
            </div>

            {/* Name */}
            <div className="mb-3">
              <label className="form-label">Name</label>
              <input
                type="text"
                name="name"
                required
                className="form-control"
              />
            </div>

            {/* Email */}
            <div className="mb-3">
              <label className="form-label">Email</label>
              <input
                type="email"
                name="email"
                required
                className="form-control"
              />
            </div>

            {/* Phone */}
            <div className="mb-3">
              <label className="form-label">Phone</label>
              <input
                type="tel"
                name="phone"
                required
                className="form-control"
              />
            </div>
          </div>

          {/* Footer */}
          <div className="modal-footer">
            <button type="submit" className="btn btn-success">
              Submit Application
            </button>
            <button
              type="button"
              className="btn btn-secondary"
              onClick={() => setShowModal(false)}
            >
              Close
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
)}

    </>
  );
};

export default Courses;
