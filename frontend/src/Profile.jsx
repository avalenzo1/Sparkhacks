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
      <div className="profileBody"></div>
      <div>
        {" "}
        <div className="profileContent">
          <div className="profileContent">
            <div className="posts-section">
              <h1 className="posts-title">Posts</h1>
              <div className="single-post">
                <h1 className="post-content">
                  Why is this so hard?
                  <span className="italics-content">- CS 301 - 2/08/2025</span>
                </h1>
                <p className="post-text">
                  Why is designing a new UI so complicated? We thought it was
                  easy but we were WRONG. Are we supposed to implement a
                  backend?
                </p>
                <p className="status-text">
                  Status: <span className="answered-text"> Not Answered</span>
                </p>
              </div>
              <div className="single-post">
                <h1 className="post-content">
                  Is this going to be on the exam?
                  <span className="italics-content">- CS 261 - 2/07/2025</span>
                </h1>
                <p className="post-text">
                  We were learning about DFA's but we have the exam coming up.
                  Will it cover DFA's or is that for the next exam?
                </p>
                <p className="status-text">
                  Status: <span className="answered-text"> Answered</span>
                </p>
              </div>
              <div className="user-section">
                <h1 className="name-text">John Deere</h1>
                <h2 className="school-text"> University of Illinois Chicago</h2>
                <h2 className="major-text"> Major: Computer Science</h2>
                <h2 className="major-text"> Undergraduate 2027</h2>
                <img src="/pfp.png" alt="User Image" className="user-image" />
              </div>
            </div>
          </div>
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
