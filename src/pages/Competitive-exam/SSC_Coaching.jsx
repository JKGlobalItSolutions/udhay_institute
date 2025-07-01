import React from "react";
import { Link } from "react-router-dom";

import ssc from "./newimg/ssc.jpg";

const SSC_Coaching = () => {
  return (
    <div className="container-fluid ">
      <main>
        <div className="bread ">
          <nav
            aria-label="breadcrumb"
            style={{ marginTop: "0px" }}
            className="bg-gray p-4"
          >
            <h2 className="container">SSC Coaching Centre</h2>
            <ol className="breadcrumb container">
              <li className="breadcrumb-item">
                <Link to="/">Home</Link>
              </li>
              <li className="breadcrumb-item active" aria-current="page">
                SSC Coaching Centre
              </li>
            </ol>
          </nav>
        </div>

        <div id="wrapper">
          <div className="container   mt-4">
            <h3>
              <span style={{ color: "blue" }}>
                SSC Coaching Centres in Chennai
              </span>
            </h3>
            <p>
              We Shine Academy, Best among the{" "}
              <strong>SSC Coaching Centre in Chennai</strong> would like to take
              this opportunity to proudly announce about the exclusive{" "}
              <strong>SSC Coaching classes</strong> for the SSC CGL, CHSL and
              other relevant level exams by expert faculties that we are
              providing to the SSC Aspirants.
            </p>
            <p>
              Record-breaking results has been given by We Shine Academy; the
              best <strong>SSC Coaching Centre in Chennai</strong> in the
              Recruitment drive conducted PAN India for Combined Graduate Level
              (CGL) Examination held in 2015.
            </p>
            <h4>
              <span style={{ color: "red" }}>
                About Staff Selection Commission (SSC)
              </span>
            </h4>
            <p>
              Staff Selection Commission Recruitment (SSC) is the authorized
              organization under Government of India, which is responsible to
              recruit staffs for various posts in the various Ministries and
              Departments of Government of India and Subordinate Offices.
            </p>
            <p>
              SSC was founded 40 years ago on 4<sup>th</sup> November, 1975 and
              it was formerly known as Subordinate Service Commission till 26
              <sup>th</sup>
              September, 1977. The Headquarters is located in New Delhi with 7
              Regional Offices and 2 Sub-Regional Offices.
            </p>
            <h4 style={{ textAlign: "center" }}>
              <span
                style={{
                  textDecoration: "underline",
                  color: "#0000ff",
                  fontFamily: "Helvetica",
                }}
              >
                <strong>
                  Regional & Sub-Regional Offices of Staff Selection Commission
                </strong>
              </span>
            </h4>
            <p>
              For smooth conduct of exams throughout the country, the commission
              has a strong regional setup with centers across India.
            </p>
            <h2 className="text-center my-4">
              <span style={{ color: "#008000" }}>
                Staff Selection Commission - Organisation Chart
              </span>
            </h2>

            <div className="text-center">
              <a
                href="https://weshineacademy.com/wp-content/uploads/2016/03/final-chart.png"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  className="img-fluid w-75 align-content-center"
                  src={ssc}
                  alt="SSC Organisation Chart"
                />
              </a>
            </div>
            <p>
              <strong>
                The following posts are recruited only by Staff Selection
                Commission:
              </strong>
            </p>
            <table className="table table-bordered">
              <thead>
                <tr>
                  <th rowSpan="2">Examination</th>
                  <th colSpan="2">Eligibility</th>
                </tr>
                <tr>
                  <th>Education</th>
                  <th>Age</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Combined Graduate Level</td>
                  <td>
                    Bachelor's Degree (some specific qualifications required)
                  </td>
                  <td>18 to 27</td>
                </tr>
                <tr>
                  <td>Combined Higher Secondary Level</td>
                  <td>12th standard or equivalent</td>
                  <td>18 to 27</td>
                </tr>
                <tr>
                  <td>Junior Engineer</td>
                  <td>Diploma or Engineering Degree</td>
                  <td>18 to 27</td>
                </tr>
                <tr>
                  <td>Stenographer</td>
                  <td>12th standard or equivalent</td>
                  <td>18 to 27</td>
                </tr>
                <tr>
                  <td>SI & Constable</td>
                  <td>Bachelor's Degree (SI), 10th (Constable)</td>
                  <td>20 to 25 (SI), 18 to 23 (Constable)</td>
                </tr>
                <tr>
                  <td>Multi Tasking Staff</td>
                  <td>10th standard</td>
                  <td>18 to 25</td>
                </tr>
                <tr>
                  <td colSpan="3">
                    <strong>Age Relaxation:</strong> Minimum 5 years to Maximum
                    15 years as per government norms.
                  </td>
                </tr>
              </tbody>
            </table>
            <p>
              <strong>
                The Southern Region SSC office is in Chennai covering TN,
                Kerala, AP, Pondicherry & Lakshadweep.
              </strong>
            </p>
            <p>
              Our academy provides full preparation, including topic-wise,
              section-wise, and model exams. Notifications, materials, and
              papers are available on our site and social channels.
            </p>
            <p>
              We Shine Academy offers 220 tests broken down as:
              <table className="table table-bordered mt-3">
                <thead>
                  <tr>
                    <th>Test Type</th>
                    <th>No of Tests</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Topic Wise</td>
                    <td>118</td>
                  </tr>
                  <tr>
                    <td>Section Wise</td>
                    <td>46</td>
                  </tr>
                  <tr>
                    <td>Full Length</td>
                    <td>55</td>
                  </tr>
                </tbody>
              </table>
            </p>
            <div className="mt-3">
              <strong>Tags: </strong>
              <a href="https://weshineacademy.com/top-tnpsc-group-exam-coaching-centres-in-chennai/">
                TNPSC Coaching Centre in Chennai
              </a>
              ,{" "}
              <a href="https://weshineacademy.com/best-bank-exam-coaching-centre-in-chennai/">
                Bank Exam Coaching Centre in Chennai
              </a>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default SSC_Coaching;
