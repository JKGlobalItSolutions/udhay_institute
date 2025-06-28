import React from 'react';

const RailwayCouching = () => {
  return (
    <div className="font-sans text-gray-800">
      {/* Hero Topper Section */}
      <div className="max-w-6xl mx-auto p-4">
        <h1 className="text-2xl font-bold mb-2 text-center">RRB Coaching Centre in Chennai</h1>
        <img src="/topper-banner.jpg" alt="Topper Banner" className="w-full rounded shadow" />
        <p className="mt-2 text-sm text-center">
          Employees work in various railway departments under the Ministry of Railways.
        </p>
      </div>

      {/* Inquiry Form */}
      <div className="bg-blue-50 p-6 my-6 max-w-4xl mx-auto shadow rounded">
        <h2 className="text-xl font-semibold mb-4">Get More Info</h2>
        <form className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input className="border p-2 rounded" type="text" placeholder="Enter Student Name*" />
          <input className="border p-2 rounded" type="text" placeholder="Enter Your Mobile Number*" />
          <input className="border p-2 rounded" type="text" placeholder="Enter Your Location*" />
          <input className="border p-2 rounded" type="email" placeholder="Enter Your Email Address*" />
          <button className="bg-blue-600 text-white py-2 rounded col-span-full">Get Free Enquiry</button>
        </form>
      </div>

      {/* Success Story Videos */}
      <div className="max-w-6xl mx-auto my-8 px-4">
        <h2 className="text-xl font-semibold mb-4">Success Stories</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <iframe className="w-full aspect-video" src="https://www.youtube.com/embed/example1" title="Video 1" />
          <iframe className="w-full aspect-video" src="https://www.youtube.com/embed/example2" title="Video 2" />
          <iframe className="w-full aspect-video" src="https://www.youtube.com/embed/example3" title="Video 3" />
        </div>
      </div>

      {/* Group Explanations */}
      <div className="max-w-5xl mx-auto px-4 py-6">
        <h3 className="text-lg font-bold mb-2">About Job Openings</h3>
        <p>Railway recruitment includes gazette and non-gazette postings:</p>

        <h4 className="mt-4 font-semibold">Group A</h4>
        <p>Recruited through Civil Service, Engineering Services, and Combined Medical Service Examinations.</p>

        <h4 className="mt-4 font-semibold">Group B</h4>
        <p>Section officers promoted internally from Group C.</p>

        <h4 className="mt-4 font-semibold">Group C</h4>
        <ul className="list-disc list-inside ml-4">
          <li>Clerks</li>
          <li>Station Master</li>
          <li>Ticket Collector</li>
          <li>Commercial Apprentice</li>
        </ul>

        <h4 className="mt-4 font-semibold">Group D</h4>
        <ul className="list-disc list-inside ml-4">
          <li>Trackman</li>
          <li>Helper</li>
          <li>Pointsman</li>
        </ul>
      </div>

      {/* Study Material Box */}
      <div className="max-w-3xl mx-auto bg-green-50 p-4 my-6 border-l-4 border-green-600 rounded shadow">
        <h3 className="font-bold text-green-700">Study Materials – Stock Available Now</h3>
        <p>Our materials are designed for beginners and advanced aspirants. Available in both Tamil and English.</p>
      </div>

      {/* Download App Section */}
      <div className="bg-gray-100 py-6 text-center">
        <h4 className="text-lg font-semibold">Download Our App</h4>
        <p className="text-sm mb-2">Available on Android & iOS</p>
        <div className="flex justify-center space-x-4 mt-2">
          <img src="/android-icon.png" alt="Android App" className="w-10" />
          <img src="/ios-icon.png" alt="iOS App" className="w-10" />
        </div>
      </div>

      {/* Qualifications Section */}
      <div className="max-w-5xl mx-auto px-4 py-6">
        <h4 className="font-bold mb-2">Educational Qualifications for Group C & D</h4>
        <ul className="list-disc list-inside ml-4">
          <li>Minimum 10th class pass or equivalent</li>
          <li>Group C – Graduate / Diploma</li>
        </ul>
      </div>

      {/* Selection Procedure */}
      <div className="max-w-5xl mx-auto px-4 py-6">
        <h4 className="font-bold mb-2 text-red-600">Selection Procedure</h4>
        <p>
          Exams include CBT (Computer Based Test), Physical Tests, and Interviews for certain posts. Group C exams are conducted by RRB boards.
        </p>
      </div>

      {/* Organization Chart */}
      <div className="max-w-6xl mx-auto px-4 py-6 text-center">
        <h4 className="text-lg font-bold mb-4">Organizational Chart</h4>
        <img src="/organization-chart.png" alt="Organizational Chart" className="mx-auto w-full max-w-md" />
      </div>

      {/* Footer */}
      <footer className="bg-black text-white py-4 text-center text-sm">
        <p>RRB Coaching Centre in Chennai © {new Date().getFullYear()}</p>
      </footer>
    </div>
  );
};

export default RailwayCouching;
