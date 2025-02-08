import React from "react";
import "../styles/info.css";

function Info() {
  const resources = [
    {
      title: "Creating and Configuring Your Class",
      url: "https://youtu.be/sv83r-y9F3w?list=PLEOX0FOixqJ4gJEWOelsBJBQ1mD05ZUKC",
    },
    {
      title: "Announcing Piazza to students",
      url: "https://youtu.be/IwTPA8fJXTk?list=PLEOX0FOixqJ4gJEWOelsBJBQ1mD05ZUKC",
    },
    {
      title: "Posting your first note",
      url: "https://youtu.be/1a6ppFFqhnE?list=PLEOX0FOixqJ4gJEWOelsBJBQ1mD05ZUKC",
    },
    {
      title: "Organizational tips with folders",
      url: "https://youtu.be/5ROIg5PI20w?list=PLEOX0FOixqJ4gJEWOelsBJBQ1mD05ZUKC",
    },
    {
      title: "Piazza intro for students",
      url: "https://youtu.be/tqGummy1Be4?list=PLEOX0FOixqJ4gJEWOelsBJBQ1mD05ZUKC",
    },
  ];

  return (
    <>
      <div className="title">
        <strong>About us</strong>
      </div>

      <div className="piazza-info">
        <p>
          Piazza is designed to connect students, TAs, and professors so every
          student can get the help they need when they need it.
        </p>
        <p>
          Today, millions of students across thousands of campuses are using
          Piazza for their classes. It warms me to think I started something
          that is impacting the way students learn and the way instructors
          teach.
        </p>
        <p>
          I sincerely hope Piazza enhances your experience as a student, as a
          TA, and as a professor.
        </p>

        <div className="title">
          <strong>New to Piazza? Watch these videos to get started:</strong>
        </div>

        <div className="resources-container">
          {resources.map((resource, index) => (
            <div>
              <a
                className="resources-item"
                key={index}
                href={resource.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                {resource.title}
              </a>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Info;
