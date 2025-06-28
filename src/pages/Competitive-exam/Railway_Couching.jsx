import React from 'react';
import { Link } from 'react-router-dom';

const RailwayCouching = () => {
  return (
    <div className="font-sans text-gray-800">


  {/* Breadcrumb */}
      <nav aria-label="breadcrumb container-fluid" className="bg-light p-4  rounded">
        <h2 className="text-dark">RRB Exam  Coaching</h2>
        <ol className="breadcrumb bg-gry">
          <li className="breadcrumb-item">
            <Link to="/">Home</Link>
          </li>
          <li className="breadcrumb-item active" aria-current="page">
            Free Online Courses – Udhayanidhi Stalin Scheme
          </li>
        </ol>
      </nav>




      {/* Hero Topper Section */}
      <div className="max-w-6xl mx-auto p-4">
        <h1 className="text-2xl font-bold mb-2 text-center">RRB Exam Coaching </h1>
        <img src="/topper-banner.jpg" alt="Topper Banner" className="w-full rounded shadow" />
        <p className="mt-2 text-sm text-center">
          Employees work in various railway departments under the Ministry of Railways.
        </p>
      </div>

      {/* Main Content Section */}
      <div className="max-w-5xl mx-auto px-4 py-6 space-y-4">
        <p>
          We  Udhay Institute is one of the most trusted RRB coaching centres in Chennai, known for its unique training methodology and exceptional student success rate. Our focus is to provide result-oriented coaching for railway exams with precise strategies and practice-based learning.
        </p>
        <p>
          Students get access to comprehensive study materials, regular mock tests, personalized mentorship, and performance tracking. Our training program includes 91 topic tests, 55 section-wise tests, and 127 full-length mock exams to enhance speed and accuracy.
        </p>
        <p>
          At We  Udhay Institute, we follow an approach that balances theoretical knowledge with practical exposure. Our faculty includes experienced mentors from the railway domain who ensure that every concept is simplified for better understanding.
        </p>
        <p>
          We cater to job roles such as Clerks, Station Masters, Ticket Collectors, Commercial Apprentices, Trackmen, and more under Group C and D categories. We also prepare students for aptitude and psychological tests as part of the recruitment process.
        </p>
        <p>
          If you are from Anna Nagar or surrounding areas, visit our RRB Coaching Centre branch for a personalized consultation. Join We  Udhay InstituteAcademy today and give your railway career a head start.
        </p>
      </div>

     {/* Group Explanations */}
      <div className="max-w-5xl mx-auto px-4 py-6">
        <h3 className="text-lg font-bold mb-2">About Job Openings</h3>
        <p>Railway recruitment includes gazette and non-gazette postings. These are classified into Group A, B, C, and D. Each group covers different roles, responsibilities, and selection processes:</p>

        <h4 className="mt-4 font-semibold">Group A</h4>
        <p>
          Group A positions are the highest-level gazetted posts in Indian Railways. These officers are recruited by the UPSC through competitive examinations such as:
        </p>
        <ul className="list-disc list-inside ml-4">
          <li>Civil Services Examination – for Indian Railway Traffic Service (IRTS), Indian Railway Accounts Service (IRAS), Indian Railway Personnel Service (IRPS)</li>
          <li>Engineering Services Examination – for Indian Railway Service of Engineers (IRSE), Signal Engineers (IRSSE), Mechanical Engineers (IRSME), Electrical Engineers (IRSEE)</li>
          <li>Combined Medical Services Examination – for Indian Railway Medical Services</li>
        </ul>
        <p>These positions hold top administrative responsibilities including planning, finance, engineering, and operations.</p>

        <h4 className="mt-4 font-semibold">Group B</h4>
        <p>
          Group B posts are not directly recruited. They are filled through promotions from Group C employees based on seniority, departmental exams, and performance. These include section officers, junior engineers with higher responsibility, and administrative roles.
        </p>

        <h4 className="mt-4 font-semibold">Group C</h4>
        <p>
          Group C posts form the backbone of railway operations and are the most commonly targeted by aspirants. Recruitment is done by RRBs through national and regional examinations. Roles include:
        </p>
        <ul className="list-disc list-inside ml-4">
          <li>Clerks – responsible for administrative and documentation tasks</li>
          <li>Station Master – in charge of train operations and station management</li>
          <li>Ticket Collector – manages ticket verification and revenue assurance</li>
          <li>Commercial Apprentice – works in goods and passenger services, trained in various departments</li>
          <li>Traffic Apprentice – supervises train movement and scheduling</li>
          <li>Goods Guard – monitors train wagons and ensures safety in goods transport</li>
        </ul>

        <h4 className="mt-4 font-semibold">Group D</h4>
        <p>
          Group D posts are essential for field-level operations and support services. They are recruited by Railway Recruitment Cells (RRCs). Roles include:
        </p>
        <ul className="list-disc list-inside ml-4 ">
          <li>Trackman – maintains railway tracks and ensures safety</li>   <br />
          <li>Helper – supports technical staff in maintenance of rolling stock and engines</li>  <br />
          <li>Pointsman – controls railway switches and signals</li>  <br />
          <li>Hospital Attendant – supports medical staff in railway hospitals</li>  <br />
          <li>Gateman – operates railway crossings for safety and access control</li>
        </ul>   <br />
        <p>
          Group D is the entry point to railway employment, offering scope for internal promotions over time with consistent performance.
        </p>
      </div>
     

     
{/* Qualifications Section */}
<div className="max-w-5xl mx-auto px-4 py-6">
  <h4 className="font-bold mb-2">Educational Qualifications for Group C & D</h4>
  <ul className="list-disc list-inside ml-4 space-y-2">
    <li>
      <strong>Minimum Qualification:</strong> Candidates must have passed at least the 10th standard (SSLC/Matric) or possess an equivalent qualification from a recognized board.
    </li>
      <br />
    <li>
      <strong>Group C Posts:</strong> Typically require a Graduate Degree or Diploma in any discipline from a UGC/AICTE-recognized institution. Some technical roles may also require specialized certifications.
    </li>
    <br />
    <li>
      <strong>Group D Posts:</strong> Require a Matriculation certificate or completion of an ITI course (Industrial Training Institute) certified by NCVT (National Council for Vocational Training) or SCVT (State Council for Vocational Training).
    </li>
      <br />
    <li>
      <strong>Additional Certifications:</strong> For posts like technician or fitter, trade-specific certifications or apprenticeships may be required or preferred.
    </li>
      <br />
    <li>
      <strong>Language Proficiency:</strong> Basic reading and writing skills in the local/regional language may be needed for specific roles.
    </li>
  </ul>
</div>

{/* Selection Procedure */}
<div className="max-w-5xl mx-auto px-4 py-6">
  <h4 className="font-bold mb-2 text-red-600">Selection Procedure</h4>
  <p>
    The selection process varies by post but generally includes the following stages: Computer-Based Test (CBT), Physical Efficiency Test (PET), Skill Test (Typing/Stenography), Document Verification, and Medical Examination.
  </p>
  <p className="mt-2">
    <strong>CBT:</strong> This is the primary written exam covering topics such as General Awareness, Arithmetic, Reasoning, and Technical Subjects (for technical posts).
  </p>
  <p className="mt-2">
    <strong>Physical Tests:</strong> Required for posts like Track Maintainer and Assistant Pointsman under Group D. Tests include running, lifting, and other endurance checks.
  </p>
  <p className="mt-2">
    <strong>Skill Tests:</strong> For roles like typist, stenographer, or junior clerk, typing speed and shorthand proficiency are assessed.
  </p>
  <p className="mt-2">
    <strong>Aptitude and Psycho Tests:</strong> Specific to posts like Assistant Station Master (ASM) and Assistant Loco Pilot (ALP). These evaluate mental alertness, memory, spatial visualization, and decision-making under pressure.
  </p>
  <p className="mt-2">
    <strong>Interviews:</strong> May be conducted for high-ranking or sensitive posts under Group C.
  </p>
  <p className="mt-2">
    Our training programs include mock tests, physical test coaching, aptitude drills, and personalized mentoring for each selection stage to improve your success chances.
  </p>
</div>


      {/* Organization Chart */}
      <div className="max-w-6xl mx-auto px-4 py-6 text-center">
        <h4 className="text-lg font-bold mb-4">Railway Recruitment Exam Format</h4>
        <img src="/organization-chart.png" alt="Organizational Chart" className="mx-auto w-full max-w-md" />
      </div>

      
    </div>
  );
};

export default RailwayCouching;
