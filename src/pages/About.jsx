import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

// import homeimg from "../assets/images/banner/banner-1.jpg";
// import about from "../assets/images/about/about-page.jpg";

import home from "../assets/images/banner/our courses.jpg";

const About = () => {
  return (
    <>
      {/* Hero Section */}
      <motion.section
        className="d-flex align-items-center h-100"
        data-aos="fade-right"
      >
        <img
          src={home}
          alt="Free Bank Exam Coaching"
          className="img-fluid w-100"
          style={{ maxHeight: "130vh", objectFit: "cover" }}
        />
      </motion.section>

      {/* Introduction Section */}

      {/* <section className="py-5 bg-white">
        <div className="container d-flex flex-column flex-md-row align-items-center gap-5">
          <motion.div
            className="col-md-6"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <img
              src={about}
              alt="Our Journey"
              className="img-fluid rounded shadow"
            />
          </motion.div>
          <motion.div
            className="col-md-6"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="fw-bold text-uppercase mb-3">Our Journey</h3>
            <p>
              <strong>Udhay Welfare Institute</strong> was born from a vision to bridge the gap between education and employment.
              We proudly follow the mission set forth by Thiru. Udhayanidhi Stalin — to offer high-quality education to
              every aspiring youth, especially in rural and underprivileged areas of Tamil Nadu.
            </p>
            <p>
              Our platform offers 100% free online training in the fields of IT, communication, aptitude, and career
              readiness — helping students from all walks of life find their place in the professional world.
            </p>
          </motion.div>
        </div>
      </section> */}

      {/* <section className="d-flex align-items-center h-100" data-aos="fade-right">
        <img
          src={home}
          alt="Free Bank Exam Coaching"
          className="img-fluid w-100"
          style={{ maxHeight: '130vh', objectFit: 'cover' }}
        />
      </section> */}

      {/* Mission / Vision / Stats */}
      <section className="py-5 bg-light">
        <div className="container text-center">
          <motion.h3
            className="fw-bold text-uppercase mb-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            Our Mission & Impact
          </motion.h3>

          <div className="row g-4">
            {[
              {
                title: "Accessible Education",
                desc: "We provide top-tier training absolutely free, ensuring every student—regardless of background—has access to world-class learning.",
              },
              {
                title: "Skill-Oriented Learning",
                desc: "Courses are curated for real-world relevance, from IT and HR internships to soft skills and competitive exams.",
              },
              {
                title: "Placement Support",
                desc: "We don’t just teach — we place. With 10+ years of trainer experience and industry networks, our placement cell bridges education to employment.",
              },
            ].map((item, index) => (
              <motion.div
                className="col-md-4"
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2, duration: 0.6 }}
                viewport={{ once: true }}
              >
                <div className="bg-white p-4 rounded shadow h-100">
                  <h5 className="fw-bold text-danger">{item.title}</h5>
                  <p>{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Stats */}
          <div className="row text-center mt-5">
            {[
              { number: "100+", label: "Recruiting Companies" },
              { number: "10K+", label: "Students Trained" },
              { number: "40+", label: "Industry Experts" },
              { number: "95%", label: "Placement Rate" },
            ].map((stat, idx) => (
              <motion.div
                className="col-md-3"
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * idx, duration: 0.5 }}
                viewport={{ once: true }}
              >
                <h2 className="fw-bold text-danger">{stat.number}</h2>
                <p className="text-muted">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <motion.section
        className="bg-danger text-white py-5 text-center"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="container">
          <h3 className="fw-bold mb-3">
            Join the Udhayanidhi Stalin Free Learning Mission
          </h3>
          <p className="mb-4">
            Whether you're a student, graduate, or job seeker — we welcome you
            to enroll in our free courses and take a step toward a brighter
            future.
          </p>
          <Link to="/courses">
            <button className="btn btn-light px-4">
              Apply for Free Courses
            </button>
          </Link>
        </div>
      </motion.section>
    </>
  );
};

export default About;
