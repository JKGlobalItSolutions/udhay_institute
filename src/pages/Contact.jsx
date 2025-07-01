import React, { useRef, useState } from "react";
import emailjs from "emailjs-com";
import { motion } from "framer-motion";
import "bootstrap/dist/css/bootstrap.min.css";

import homeimg from "../assets/images/banner/Contact Us.jpg";
import adminpic from "../assets/images/banner/adminpic.jpg";



const Contact = () => {
  const form = useRef();
  const [success, setSuccess] = useState(null);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "your_service_id", // ✅ Replace this
        "your_template_id", // ✅ Replace this
        form.current,
        "your_public_key" // ✅ Replace this
      )
      .then(
        (result) => {
          setSuccess("Message sent successfully!");
          e.target.reset();
        },
        (error) => {
          setSuccess("Failed to send message. Please try again.");
        }
      );
  };

  return (
    <>
      {/* Hero Banner */}
      {/* <motion.section
        className="text-white d-flex align-items-center"
        style={{
          backgroundImage: "url('/assets/banner.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          minHeight: "250px",
        }}
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="container">
          <h2 className="fw-bold">Contact Us</h2>
          <p className="lead" style={{ maxWidth: "700px" }}>
            We’re here to help! Send us a message or contact us via WhatsApp.
          </p>
        </div>
      </motion.section> */}

      <section
        className="d-flex align-items-center h-100"
        data-aos="fade-right"
      >
        <img
          src={homeimg}
          alt="Free Bank Exam Coaching"
          className="img-fluid w-100"
          style={{ maxHeight: "130vh", objectFit: "cover" }}
        />
      </section>

      {/* Contact Form */}
      <motion.section
        className="py-5 bg-light"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="container">
          <div className="row g-5">
            {/* Form Section */}
            <motion.div
              className="col-md-7"
              initial={{ x: -50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h3 className="fw-bold mb-4">Get In Touch</h3>
              <form ref={form} onSubmit={sendEmail}>
                <div className="mb-3">
                  <input
                    type="text"
                    name="user_name"
                    className="form-control"
                    placeholder="Your Name"
                    required
                  />
                </div>
                <div className="mb-3">
                  <input
                    type="email"
                    name="user_email"
                    className="form-control"
                    placeholder="Your Email"
                    required
                  />
                </div>
                <div className="mb-3">
                  <input
                    type="text"
                    name="subject"
                    className="form-control"
                    placeholder="Subject"
                    required
                  />
                </div>
                <div className="mb-4">
                  <textarea
                    name="message"
                    className="form-control" 
                    rows="5"
                    placeholder="Your Message"
                    required
                  ></textarea>
                </div>
                <motion.button
                  type="submit"
                  className="btn btn-danger px-4"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Send Message
                </motion.button>
                {success && (
                  <motion.p
                    className="mt-3 text-success"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                  >
                    {success}
                  </motion.p>
                )}
              </form>
            </motion.div>

{/* Contact Details */}
<motion.div
  className="col-md-5"
  initial={{ x: 50, opacity: 0 }}
  whileInView={{ x: 0, opacity: 1 }}
  transition={{ duration: 0.6 }}
  viewport={{ once: true }}
>
  <h5 className="fw-bold mb-3">Need help?</h5>
  <p className="text-muted">
    Reach out anytime. We usually respond within 24–48 hours.
  </p>

  {/* Admin Info */}
  <div className="d-flex align-items-center gap-3 mb-4 mt-4">
    <img
      src={adminpic} // import adminpic from '../assets/img/admin.jpg' or adjust accordingly
      alt="Admin"
      style={{
        width: "200px",
        height: "200px",
        objectFit: "cover",
        borderRadius: "30%",
        border: "2px solid #ccc",
      }}
    />
    <div>
      <h6 className="mb-1 fw-bold">Er. Vignesh Gopinath</h6>
      <p className="mb-1 text-muted">Founder</p>
      <p className="mb-0 text-muted">Udhay Welfare Institute</p>
      <p className="mb-0 text-muted">DMK Youth Wing</p>
      <p className="mb-0 text-muted">Thiruvannamalai North, Polur</p>
    </div>
  </div>

  {/* Contact Details */}
  <div className="mt-3">
    <p>
      <strong>📞 Phone:</strong> +91 79044 09070
    </p>
    <p>
      <strong>📧 Email:</strong>{" "}
      <a
        href="mailto:contact@udhaywelfareinstitute.com"
        className="text-decoration-none text-dark"
      >
        contact@udhaywelfareinstitute.com
      </a>
    </p>
    <p>
      <strong>📍 Address:</strong>
      <br />
      Thiruvannamalai North,<br />
      Polur.
    </p>
    <a
      href="https://wa.me/917904409070"
      target="_blank"
      rel="noopener noreferrer"
      className="btn btn-success mt-3"
    >
      💬 Chat on WhatsApp
    </a>
  </div>
</motion.div>



          </div>
        </div>
      </motion.section>
    </>
  );
};

export default Contact;
