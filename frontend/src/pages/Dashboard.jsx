import React from "react";
import homeIcon from "../imgs/home-icon.png";
import socialIcon from "../imgs/social-icon.png";
import searchIcon from "../imgs/search-icon.png";
import commentIcon from "../imgs/comment-icon.png";
import folderIcon from "../imgs/folder-icon.png";
import notificationIcon from "../imgs/notification-icon.png";
import piazzaLogo from "../imgs/piazza-white.png";
import pfp from "../imgs/pfp1.png";
import { Link } from "react-router";

const userName = "John Deere";
const icons1 = [homeIcon, socialIcon];
const icons2 = [commentIcon, notificationIcon];
const folders = [
  "Lecture-content",
  "Labs",
  "Homeworks",
  "Exams",
  "Logistics",
  "Other",
  "Zybooks",
  "Iclicker",
  "Quizzes",
];

const questions = [
  {
    question: "How does a hash table work?",
    folder: "Lecture-content",
    author: "Alan Turing",
    timeAgo: "3 weeks ago",
    views: Math.floor(Math.random() * 120) + 1,
    likes: Math.floor(Math.random() * 60) + 1,
    replies: Math.floor(Math.random() * 5),
  },
  {
    question: "What is the time complexity of binary search?",
    folder: "Labs",
    author: "Ada Lovelace",
    timeAgo: "2 weeks ago",
    views: Math.floor(Math.random() * 120) + 1,
    likes: Math.floor(Math.random() * 60) + 1,
    replies: Math.floor(Math.random() * 5),
  },
  {
    question: "Explain the difference between a stack and a queue.",
    folder: "Homeworks",
    author: "Grace Hopper",
    timeAgo: "1 week ago",
    views: Math.floor(Math.random() * 120) + 1,
    likes: Math.floor(Math.random() * 60) + 1,
    replies: Math.floor(Math.random() * 5),
  },
];

const upcomingEvents = [
  {
    month: "FEB",
    day: 21,
    eventName: "Quiz 1",
    eventLocation: "Gradescope",
    courseNumber: "301",
  },
  {
    month: "FEB",
    day: 25,
    eventName: "Homework 2",
    eventLocation: "Blackboard",
    courseNumber: "211",
  },
  {
    month: "MAR",
    day: 15,
    eventName: "Quiz 2",
    eventLocation: "Gradescope",
    courseNumber: "301",
  },
  {
    month: "APR",
    day: 2,
    eventName: "Final Exam",
    eventLocation: "Room 202",
    courseNumber: "111",
  },
  {
    month: "APR",
    day: 18,
    eventName: "Homework 4",
    eventLocation: "Blackboard",
    courseNumber: "277",
  },
  {
    month: "MAY",
    day: 3,
    eventName: "Quiz 3",
    eventLocation: "Gradescope",
    courseNumber: "261",
  },
];

function getRandomPostCount() {
  return Math.floor(Math.random() * (456 - 2 + 1)) + 2;
}

function Dashboard() {
  return (
    <>
      <header className="header-container">
        <div className="icons-container">
          {icons1.map((icon, index) => (
            <img key={index} src={icon} alt="" />
          ))}
        </div>

        <div className="search-bar">
          <input
            className="search-bar-input"
            type="text"
            placeholder="Type here to search a question"
          />
          <button className="search-bttn">
            <img src={searchIcon} alt="" />
          </button>
        </div>

        <div className="icons-container">
          {icons2.map((icon, index) => (
            <img key={index} src={icon} alt="" />
          ))}
        </div>

        <div className="user-container">
          <div className="pfp-container">
            <img src={pfp} alt="" />
          </div>
          <div className="user-name">
            <Link to="/profile">{userName}</Link>
          </div>
        </div>

        <div className="piazza-container">
          <img src={piazzaLogo} alt="" />
        </div>
      </header>

      <div className="grid-general">
        <div className="column-1">
          <div className="folders-container">
            <strong>Folders</strong>

            {folders.map((folder, index) => (
              <div key={index} className="folders-item">
                <img src={folderIcon} alt="" />
                <div className="folders-info">
                  <span className="folder-name">{folder}</span>
                  <span className="post-count">{` ${getRandomPostCount()} post(s)`}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="column-2">
          <div className="create-post-container">
            <div className="pfp-post">
              <img src={pfp} alt="" />
            </div>
            <input
              className="question-input"
              type="text"
              placeholder="Share that question that keeps you awake at night..."
            />
            <button className="create-post-bttn">Create Post</button>
          </div>

          <div className="most-relevant">Most Relevant Posts</div>

          {questions.map((q, index) => (
            <div key={index} className="question-container">
              <strong className="question-title">{q.question}</strong>
              <div className="folder-tag">{q.folder}</div>
              <div className="question-footer">
                <div className="pfp-question-container">
                  <img src={pfp} alt="" />
                </div>
                <div className="name-container-info">
                  <strong>{q.author}</strong>
                  <span>{q.timeAgo}</span>
                </div>
                <div className="question-stats">
                  <span className="stat">{`${q.views} views`}</span>
                  <span className="stat">{`${q.likes} likes`}</span>
                  <span className="stat">{`${q.replies} replies`}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="column-3">
          <div className="upcoming-container">
            <div className="title">Upcoming</div>

            {upcomingEvents.map((event, index) => (
              <div key={index} className="event-container">
                <div className="all-info">
                  <div className="date-container">
                    <div className="month-date">{event.month}</div>
                    <div className="day-date">{event.day}</div>
                  </div>
                  <div className="event-info">
                    <strong>{event.eventName}</strong>
                    <span>{event.eventLocation}</span>
                  </div>
                </div>
                <div className="event-tag-container">
                  <div className="event-tag">{event.courseNumber}</div>
                  <div className="event-tag">{event.eventName}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Dashboard;
