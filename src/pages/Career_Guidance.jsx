import React from 'react';
import { Link } from 'react-router-dom';

import homeimg from "../assets/images/banner/ser 3.jpg";

const Career_Guidance = () => {
  return (
    <main className="container-fluid ">
      {/* Breadcrumb */}
      <div className="bread">
        <nav
          aria-label="breadcrumb"
          style={{ marginTop: "0px" }}
          className="bg-light p-4 rounded"
        >
          <h2 className="container">Career Guidance</h2>
          <ol className="breadcrumb container">
            <li className="breadcrumb-item">
              <Link to="/">Home</Link>
            </li>
            <li className="breadcrumb-item active" aria-current="page">
              Career Guidance
            </li>
          </ol>
        </nav>
      </div>




       {/* Banner Image */}
        <div className="container-fluid my-4">
          <img
            src={homeimg}
            alt="Computer and IT Training"
            className="img-fluid rounded shadow-sm w-100"
            style={{ maxHeight: "400px", objectFit: "cover" }}
          />
        </div>

      {/* Content */}
      <div className=" container maincontent mt-4">
        <h3 className="pt-3 text-primary">
          Empower Your Career Journey with Udhay Welfare Institute's Premier Placement and Training Services
        </h3>
        <p>
          Welcome to Udhay Welfare Institute, where your career aspirations take flight and your professional dreams find a home.
          With a steadfast commitment to excellence and a passion for nurturing talent, we are your trusted partner in
          navigating the intricate pathways of career advancement through our comprehensive placement and training services.
        </p>

        <h4>About Udhay Welfare Institute:</h4>
        <p>
          Udhay Welfare Institute stands as a beacon of hope and guidance in the realm of career advancement. With a rich legacy of
          empowering individuals to achieve their professional goals, we have earned a reputation for excellence and
          reliability. Founded on the principles of integrity, innovation, and inclusivity, Udhay Welfare Institute is dedicated to
          fostering a culture of growth, learning, and success.
        </p>

        <h4>Placement Services:</h4>
        <p>
          Our placement services serve as a conduit between talent and opportunity, connecting skilled individuals with
          rewarding career paths across a myriad of industries. Whether you're a recent graduate or an experienced professional,
          Udhay Welfare Institute is your companion in navigating the competitive landscape of the job market.
        </p>

        <h4>Training Programs:</h4>
        <p>
          Our training programs are designed to equip individuals with the knowledge, competencies, and confidence required to
          excel. From technical proficiencies to soft skills, we cater to learners of all backgrounds.
        </p>
<h4 className="pt-5 pb-2">Key Features of Our Training Programs:</h4>
<ul className="list-unstyled ps-3 mb-4">
  <li className="mb-2"><b>Customized Curriculum:</b> Tailored to meet unique needs and career goals.</li>
  <li className="mb-2"><b>Expert Guidance:</b> Delivered by seasoned professionals and industry experts.</li>
  <li className="mb-2"><b>Interactive Learning:</b> Engaging sessions that encourage collaboration and creativity.</li>
  <li className="mb-2"><b>Real-World Application:</b> Focused on practical, real-life workplace challenges.</li>
  <li className="mb-2"><b>Lifetime Support:</b> Ongoing mentorship and career support beyond training.</li>
</ul>

<h6 className="pt-4 pb-2">Why ChooseUdhay Welfare Institute?</h6>
<ul className="list-unstyled ps-3">
  <li className="mb-2"><b>Proven Track Record:</b> Decades of successful alumni and training outcomes.</li>
  <li className="mb-2"><b>Holistic Approach:</b> Personal and professional growth combined.</li>
  <li className="mb-2"><b>Industry Recognition:</b> Trusted by top employers and professionals.</li>
  <li className="mb-2"><b>Global Perspective:</b> Training for success in a globally connected world.</li>
  <li className="mb-2"><b>Community Engagement:</b> A learning environment rooted in support and inclusion.</li>
</ul>


        <h4 className="pt-3">Embark on Your Journey to Success with Udhay Welfare Institute:</h4>
        <p>
          Ready to transform your career? Join thousands of aspirants who have unlocked their true potential with Udhay Welfare Institute.
          Contact us today to enroll and take your first step toward career excellence.
        </p>

        <h4 className="pt-3">Conclusion:</h4>
        <p>
          Udhay Welfare Institute isn’t just a training center—it’s a hub for career transformation. With unmatched mentorship, resources,
          and opportunities, we empower you to achieve your full potential. Let your success story begin here.
        </p>
      </div>
    </main>
  );
};

export default Career_Guidance;
