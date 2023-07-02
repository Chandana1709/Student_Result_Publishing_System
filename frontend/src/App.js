import React, { useState } from 'react';
import Login from './components/Login';
import Sidebar from './components/Sidebar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Department from './pages/Department';
import AddDepartment from './pages/AddDepartment';
import Subject from './pages/Subject';
import AddSubject from './pages/AddSubject';
import Home from './pages/Home';
// import { Subject, AddSubject, ViewSubject } from './pages/Subject';
import Logout from './pages/Logout';
import Result from './pages/Result';
import StudentResults from './pages/StudentResults';
const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Add isLoggedIn state

  return (
    <div className="App">
      <Router>
        {isLoggedIn && <Sidebar />} {/* Render Sidebar if isLoggedIn is true */}
        <Routes>
          <Route path="/" element={isLoggedIn ? <Sidebar /> : <Login setIsLoggedIn={setIsLoggedIn} />} />
          <Route path="/sidebar" element={<Sidebar />} />
          <Route path="/home" element={<><Sidebar/><Home /></>} />
          <Route path="/department" element={<><Sidebar/><Department /></>} />
          <Route path="/department/add_department" element={<><Sidebar/><AddDepartment /></>} />
          <Route path="/logout" element={<Logout setIsLoggedIn={setIsLoggedIn} />} />
          <Route path="/subject" element={<><Sidebar/><Subject /></>} />
          <Route path="/subject/add_subject" element={<><Sidebar/><AddSubject /></>} />
          <Route path="/result" element={<><Sidebar/><Result /></>} />
          <Route path="/student-results" element={<StudentResults />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
