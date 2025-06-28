import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const MotionLink = motion(Link);

const Home = () => {
  const courses = [
    "Placement and Training",
    "Coaching for Competitive Exams",
    "Computer and IT Training",
    "Spoken English",
    "Career Guidance",
    "Technical Training: Typing & Office Tools",
    "HR Internship/Training",
    "Industrial Visit Planning Program",
    "Workshops for Govt Exams",
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
          minHeight: "90vh",
        }}
      >
        <div className="container py-5">
          <motion.div
            className="col-md-8"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            <h1 className="display-4 fw-bold mb-4">
              Empowering Youth with Free Education
            </h1>
            <p className="lead mb-4">
              A Government initiative inspired by Thiru. Udhayanidhi Stalin,
              offering 100% free online courses to every aspiring student in
              Tamil Nadu. Unlock your career path today.
            </p>

            <Link to="/courses" className="btn btn-lg btn-danger shadow px-4">
              Start Learning for Free
            </Link>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-5 bg-light">
        <div className="container">
          <div className="row align-items-center g-5">
            <motion.div
              className="col-md-6"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="fw-bold text-uppercase">About Udhay Institute</h2>
              <p className="mt-3">
                Udhay Institute is a visionary education platform backed by the
                Tamil Nadu Government. Our mission is to provide job-ready
                training in IT, English, soft skills, and technical fields
                completely free of cost.
              </p>
              <p>
                With expert mentors, smart infrastructure, and a
                placement-driven curriculum, we support students in reaching top
                companies and government careers.
              </p>
              <MotionLink
                to="/about" // replace with your target route
                className="btn btn-warning mt-2 px-4"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                Learn More
              </MotionLink>
            </motion.div>

            <motion.div
              className="col-md-6 text-center"
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
            >
              <img
                src="/assets/about-image.png"
                alt="About"
                className="img-fluid rounded shadow"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Courses Section */}
      <section className="py-5">
        <div className="container">
          <div className="d-flex justify-content-between align-items-center mb-4">
            <h3 className="fw-bold text-dark">Popular Free Courses</h3>
            <MotionLink
              to="/courses"
              className="btn btn-dark border-1"
              whileHover={{
                scale: 1.05,
                boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
              }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              View All
            </MotionLink>
          </div>
          <div className="row g-4">
            {courses.map((title, index) => (
              <motion.div
                className="col-md-4"
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="card h-100 border-0 shadow-sm hover-shadow">
                  <img
                    src={`/assets/courses/course${index + 1}.jpg`}
                    alt={title}
                    className="card-img-top"
                    style={{ height: "220px", objectFit: "cover" }}
                  />
                  <div className="card-body d-flex flex-column justify-content-between">
                    <h5 className="card-title fw-bold">{title}</h5>
                    <button className="btn btn-danger mt-3 w-100">
                      Apply Now
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Join Our Team */}
      <motion.section
        className="py-5 bg-danger text-white text-center"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      >
        <div className="container">
          <h3 className="fw-bold mb-3">Click the button to Join our Team</h3>
          <button className="btn btn-outline-light btn-lg">Join Now</button>
        </div>
      </motion.section>
    </>
  );
};

export default Home;
