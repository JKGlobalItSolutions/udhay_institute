import React from 'react';
import { Link } from 'react-router-dom';

const HR_Internship_Training = () => {
  return (
    <main className="container-fluid mt-5">
      {/* Breadcrumb */}
      <div className="bread">
        <nav
          aria-label="breadcrumb"
          style={{ marginTop: '100px' }}
          className="bg-light p-4"
        >
          <h2 className="container">HR Internship & Training</h2>
          <ol className="breadcrumb container">
            <li className="breadcrumb-item"><Link to="/">Home</Link></li>
            <li className="breadcrumb-item active" aria-current="page">HR Internship & Training</li>
          </ol>
        </nav>
      </div>

      {/* Main Content */}
      <div className="container maincontent mt-4">
        <h3 className="pt-3">Welcome to Udhay  Institute: Your Premier Destination for HR and Intern Training</h3>
        <p>
          Welcome to Udhay  Institute, your trusted partner in HR and Intern Training. With a commitment to excellence and a passion for developing future HR leaders, we offer comprehensive training programs designed to equip individuals with the skills and knowledge needed to succeed in the dynamic field of human resources.
        </p>

        <h4>Our Mission</h4>
        <p>
          Our mission is to provide high-quality HR and Intern training that prepares individuals to tackle the challenges of the modern workplace with confidence. We foster a culture of continuous learning and professional development.
        </p>

        <h4>Training Programs:</h4>
        <div className="orderedlist p-2">
          <h5>Statutory & Legal Compliance</h5>
          <ul><li>Understand labor laws, employment regulations, and compliance standards.</li></ul>

          <h5>Compensation & Benefits</h5>
          <ul><li>Design and manage packages that attract and retain top talent.</li></ul>

          <h5>MS Excel - Lab Session</h5>
          <ul><li>Master spreadsheet and data analysis using Excel.</li></ul>

          <h5>Performance Management System</h5>
          <ul><li>Implement systems to enhance employee performance and align goals.</li></ul>

          <h5>Training and Development</h5>
          <ul><li>Design and evaluate impactful training programs.</li></ul>

          <h5>Organizational Development</h5>
          <ul><li>Drive innovation and sustainable growth through change strategies.</li></ul>

          <h5>HR Administration</h5>
          <ul><li>Master payroll, HRIS, employee documentation, and records.</li></ul>

          <h5>Recruitment and Selection</h5>
          <ul><li>Learn to hire efficiently—from sourcing to final selection.</li></ul>

          <h5>Personality Development</h5>
          <ul><li>Develop leadership, time management, and communication skills.</li></ul>
        </div>

        <h4 className="pt-3">Placement Assistance</h4>
        <p>
          We offer full placement support with job referrals, interview prep, and corporate connections.
        </p>

        <h6>Why Choose Udhay  Institute?</h6>
        <ul className="ps-3">
          <li><b>Expert Faculty:</b> Learn from professionals with real-world experience.</li>
          <li><b>Practical Learning:</b> Real scenarios and simulations.</li>
          <li><b>Career Support:</b> Resume building, mock interviews, and job referrals.</li>
          <li><b>Flexible Options:</b> Online, in-person, and blended modes.</li>
        </ul>

        <h4 className="pt-3">Get Started Today!</h4>
        <p>
          Ready to take your HR career to the next level? Contact Udhay  Institute now and begin your journey in HR with confidence and competence.
        </p>
      </div>
    </main>
  );
};

export default HR_Internship_Training;
