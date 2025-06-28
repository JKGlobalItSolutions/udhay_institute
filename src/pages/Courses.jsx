import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const MotionLink = motion(Link);

const Courses = () => {
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
      <motion.section
        className="text-dark d-flex align-items-center"
        style={{
          backgroundImage: "url('/assets/banner.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          minHeight: "300px",
        }}
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="container">
          <div className="col-md-8">
            <h2 className="display-6 fw-bold">Our Courses</h2>
            <p className="mt-3">
              Embarking on the journey towards a brighter future is a shared endeavor, one where collective
              efforts and visionary thinking pave the way for progress. At Udhay Institute, we are committed to
              this mission wholeheartedly — dedicated to igniting the flame of potential in every individual.
            </p>
          </div>
        </div>
      </motion.section>

      {/* Courses List */}
      <motion.section
        className="py-5 bg-light"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <div className="container">
          <div className="d-flex justify-content-between align-items-center mb-4">
            <h3 className="fw-bold text-dark">Our Courses</h3>
            <MotionLink
              to="/"
              className="btn btn-outline-warning"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              Back to Home
            </MotionLink>
          </div>

          <div className="row g-4">
            {courses.map((title, index) => (
              <motion.div
                className="col-12 col-sm-6 col-lg-4"
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="card border-0 shadow-sm h-100">
                  <img
                    src={`/assets/courses/course${index + 1}.jpg`}
                    alt={title}
                    className="card-img-top"
                    style={{ height: '220px', objectFit: 'cover' }}
                    onError={(e) => { e.target.src = "/assets/courses/default.jpg"; }}
                  />
                  <div className="card-body d-flex flex-column">
                    <h5 className="fw-bold mb-3">{title}</h5>

                    <motion.button
                      className="btn btn-danger mt-auto w-100"
                      whileHover={{ scale: 1.03 }}
                      whileTap={{ scale: 0.95 }}
                      transition={{ type: "spring", stiffness: 250 }}
                    >
                      Apply Now
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>
    </>
  );
};

export default Courses;
