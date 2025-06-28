
import React, { useEffect } from "react";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "./app.css";


 import 'aos/dist/aos.css';
import AOS from 'aos';




// Components
import Header from "./component/Header";
import Footer from "./component/Footer";

// Pages
import Home from "./pages/Home";
import Courses from "./pages/Courses";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Computer_and_IT_Tranining from "./pages/Computer_and_IT_Tranining";
import Placement_and_Training from "./pages/Placement_and_Training";
import Career_Guidance from "./pages/Career_Guidance";
import HR_Internship_Training from "./pages/HR_Internship_Training";
import Spoken_English from './pages/Spoken_English';
import Technical_Training_Typriting from "./pages/Technical_Training_Typriting";
import Industrial_Visit_Planning_Program from "./pages/Industrial_Visit_Planning_Program";
import Workshop_for_various_programs from "./pages/Workshop_for_various_programs";


// Competitive Exam Pages
import TNPSC_Coaching from "./pages/Competitive-exam/TNPSC_Coaching";
import SSC_Coaching from "./pages/Competitive-exam/SSC_Coaching";
import BANK_Couching from "./pages/Competitive-exam/BANK_Couching";
import Railway_Couching from "./pages/Competitive-exam/Railway_Couching";
import PoliceCoaching from "./pages/Competitive-exam/PoliceCoaching";
import DefenceCoaching from "./pages/Competitive-exam/DefenceCoaching";
function App() {


  // Initialize AOS animations
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
  
  return (
    <Router>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route
          path="/Computer_and_IT_Tranining"
          element={<Computer_and_IT_Tranining />}
        />
        <Route
          path="/placement-training"
          element={<Placement_and_Training />}
        />
        <Route path="/Career_Guidance" element={<Career_Guidance />} />
        <Route path="/hr-internship" element={<HR_Internship_Training />} />
        <Route path="/spoken-english" element={<Spoken_English />} />
        <Route path="/Technical_Training_Typriting" element={<Technical_Training_Typriting />} />
        <Route path="/Industrial_Visit_Planning_Program" element={<Industrial_Visit_Planning_Program />} />
        <Route path="/Workshop_for_various_programs" element={<Workshop_for_various_programs />} />


        

       

        {/* Competitive Exam Routes */}
        <Route path="/TNPSC_Coaching" element={<TNPSC_Coaching />} />
        <Route path="/SSC_Coaching" element={<SSC_Coaching />} />
        <Route path="/BANK_Couching" element={<BANK_Couching />} />
        <Route path="/Railway_Couching" element={<Railway_Couching />} />
        <Route path="/PoliceCoaching" element={<PoliceCoaching/>} />
        <Route path="/DefenceCoaching" element={<DefenceCoaching/>} />




        
      </Routes>

      <Footer />
    </Router>
  );
}

export default App;






// import React, { useEffect } from "react";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import "bootstrap/dist/css/bootstrap.min.css";
// import "bootstrap/dist/js/bootstrap.bundle.min.js";
// import "./app.css";

// import 'aos/dist/aos.css';
// import AOS from 'aos';

// // Components
// import Header from "./component/Header";
// import Footer from "./component/Footer";

// // Pages
// import Home from "./pages/Home";
// import Courses from "./pages/Courses";
// import About from "./pages/About";
// import Contact from "./pages/Contact";
// import Computer_and_IT_Tranining from "./pages/Computer_and_IT_Tranining";
// import Placement_and_Training from "./pages/Placement_and_Training";
// import Career_Guidance from "./pages/Career_Guidance";
// import HR_Internship_Training from "./pages/HR_Internship_Training";
// import Spoken_English from './pages/Spoken_English';
// import Technical_Training_Typriting from "./pages/Technical_Training_Typriting";
// import Industrial_Visit_Planning_Program from "./pages/Industrial_Visit_Planning_Program";
// import Workshop_for_various_programs from "./pages/Workshop_for_various_programs";

// // Competitive Exam Pages
// import TNPSC_Coaching from "./pages/Competitive-exam/TNPSC_Coaching";
// import SSC_Coaching from "./pages/Competitive-exam/SSC_Coaching";
// import BANK_Couching from "./pages/Competitive-exam/BANK_Couching";
// import Railway_Couching from "./pages/Competitive-exam/Railway_Couching";

// function App() {
//   // Initialize AOS animations
//   useEffect(() => {
//     AOS.init({ duration: 1000 });
//   }, []);

//   return (
//     <Router>
//       <Header />

//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/courses" element={<Courses />} />
//         <Route path="/about" element={<About />} />
//         <Route path="/contact" element={<Contact />} />
//         <Route
//           path="/computer-and-it-training"
//           element={<Computer_and_IT_Tranining />}
//         />
//         <Route
//           path="/placement-training"
//           element={<Placement_and_Training />}
//         />
//         <Route path="/career-guidance" element={<Career_Guidance />} />
//         <Route path="/hr-internship" element={<HR_Internship_Training />} />
//         <Route path="/spoken-english" element={<Spoken_English />} />
//         <Route path="/technical-training-typing" element={<Technical_Training_Typriting />} />
//         <Route path="/industrial-visit" element={<Industrial_Visit_Planning_Program />} />
//         <Route path="/workshops" element={<Workshop_for_various_programs />} />

//         {/* Competitive Exam Routes */}
//         <Route path="/tnpsc-coaching" element={<TNPSC_Coaching />} />
//         <Route path="/ssc-coaching" element={<SSC_Coaching />} />
//         <Route path="/bank-coaching" element={<BANK_Couching />} />
//         <Route path="/railway-coaching" element={<Railway_Couching />} />
//       </Routes>

//       <Footer />
//     </Router>
//   );
// }

// export default App;
