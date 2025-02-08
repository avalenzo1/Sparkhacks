import React from "react";
import { Link } from "react-router-dom";
import "./styles/index.css";

function Profile() {
  const coursesActive = [
    { course: "CS301", semester: "Spring 2025", activeStatus: true },
    { course: "CS261", semester: "Spring 2025", activeStatus: true },
    { course: "IE 341", semester: "Spring 2025", activeStatus: true },
  ];
  const coursesPrevious = [
    { course: "CS 361", semester: "Fall 2024", activeStatus: false },
    { course: "CS 211", semester: "Fall 2024", activeStatus: false },
    { course: "CS 251", semester: "Fall 2024", activeStatus: false },
    { course: "CS 151", semester: "Spring 2023", activeStatus: false },
  ];
  const listActiveItems = coursesActive.map((course) => (
    <li key={course.course} className="courses">  
      {course.course} - {course.semester}
    </li>
  ));

  const listPreviousItems = coursesPrevious.map((course) => (
    <li key={course.course} className="courses">
      {course.course} - {course.semester}
    </li>
  ));
  return (
    <>
      <div className="profileHeader">
        <img src="/logo.png" className="profile-logo"></img>
        <nav className="profileNav">
          <ul className="profile-nav-list">
            <li className="profile-nav-item">
              <Link to="/" className="profile-nav-link">
                Home
              </Link>
            </li>
            <li className="profile-nav-item">
              <Link to="/courses" className="profile-nav-link">
                Courses
              </Link>
            </li>
            <li className="profile-nav-item">
              <Link to="/messages" className="profile-nav-link">
                Messages
              </Link>
            </li>
            <li className="profile-nav-item">
              <Link to="/logout" className="profile-nav-link">
                Log out
              </Link>
            </li>
          </ul>
        </nav>
      </div>
      <div className="profileBody">
        <div className="profileContent">
          <div></div>
          <div className="courses-section">
            <h1 className="courses-title">Courses</h1>
            <h2 className="courses-active-inactive">Active</h2>
            <ul>{listActiveItems}</ul>
            <h2 className="courses-active-inactive">Previous</h2>
            <ul>{listPreviousItems}</ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default Profile;
