import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./components/Home";
import UserDetails from "./components/UserDetails";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={darkMode ? "dark" : ""}>
      <div className="bg-gray-100 dark:bg-gray-800 min-h-screen text-gray-900 dark:text-gray-200">
        <Router>
          {/* Navbar Section */}
          <nav className="p-4 flex justify-between items-center bg-gray-200 dark:bg-gray-900">
            <Link
              to="/"
              className="text-2xl font-bold text-gray-800 dark:text-gray-100"
            >
              User Directory
            </Link>
            <button
              onClick={() => setDarkMode((prev) => !prev)}
              className="px-4 py-2 bg-gray-300 dark:bg-gray-700 rounded-lg text-gray-800 dark:text-gray-100"
            >
              Toggle {darkMode ? "Light" : "Dark"} Mode
            </button>
          </nav>

          {/* Routes Section */}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/user/:id" element={<UserDetails />} />
          </Routes>
        </Router>
      </div>
    </div>
  );
}

export default App;
