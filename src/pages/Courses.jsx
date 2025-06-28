import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import 'aos/dist/aos.css';
import AOS from 'aos';

const Courses = () => {
  // Initialize AOS animations
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const courses = [
    "Placement and Training",
    "Coaching for Competitive Exams",
    "Computer and IT Training",
    "Spoken English",
    "Career Guidance",
    "Technical Training: Typing, Etc.",
    "HR Internship/Training",
    "Industrial Visit Planning Program",
    "Workshop for Various Programs"
  ];

  return (
    <>
      {/* Hero Section */}
      <section
        className="text-dark d-flex align-items-center"
        style={{
          backgroundImage: "url('/assets/banner.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          minHeight: "300px",
        }}
        data-aos="fade-down"
      >
        <div className="container">
          <div className="col-md-8" data-aos="fade-up" data-aos-delay="200">
            <h2 className="display-6 fw-bold">Our Courses</h2>
            <p className="mt-3">
              Embarking on the journey towards a brighter future is a shared endeavor, one where collective
              efforts and visionary thinking pave the way for progress. At Udhay Institute, we are committed to
              this mission wholeheartedly — dedicated to igniting the flame of potential in every individual.
            </p>
          </div>
        </div>
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
            {courses.map((title, index) => (
              <div
                className="col-12 col-sm-6 col-lg-4"
                key={index}
                data-aos="fade-up"
                data-aos-delay={`${index * 100}`}
              >
                <div className="card border-0 shadow-sm h-100">
                  <img
                    src={`/assets/courses/course${index + 1}.jpg`}
                    alt={title}
                    className="card-img-top"
                    style={{ height: '220px', objectFit: 'cover' }}
                    onError={(e) => { e.target.src = "/assets/courses/default.jpg"; }}
                    data-aos="zoom-in"
                    data-aos-delay="300"
                  />
                  <div className="card-body d-flex flex-column" data-aos="fade-up" data-aos-delay="400">
                    <h5 className="fw-bold mb-3">{title}</h5>
                    <button
                      className="btn btn-danger mt-auto w-100"
                      data-aos="zoom-in"
                      data-aos-delay="500"
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
