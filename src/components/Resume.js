import React from 'react';

import {
  Button,
  Card,
  Grid,
} from '@geist-ui/react';

import classes from './Resume.module.css';

const resume = {
  name: "NUTTAPHON",
  surname: "RODPHAKDEEKUL",
  nickName: "Nut",
  occupation: "Software Engineer",
  mobileNumber: "086-559-8306",
  email: "nuttaphonrod@gmail.com",
  educations: [
    {
      name: "Graduated from Math-Science Program Watkhemapirataram School",
      startYear: 2012,
      endYear: 2015,
    },
    {
      name: "Bachelor of Engineering Computer Engineering - King Mongkut’s University of Technology North Bangkok",
      startYear: 2015,
      endYear: 2019,
    },
  ],
  workExperiences: [
    {
      workPlace: "Softnix Technology Co.,Ltd.",
      occupation: "Internship",
      startDate: "2018/06",
      endDate: "2018/07",
      experiences: [
        "Implement web-scraping in PHP",
        "Develop Logger Notification App using React-Native as a team of 3 people",
      ],
    },
    {
      workPlace: "Sirisoft Company Limited",
      occupation: "Software Developer",
      startDate: "2019/06",
      endDate: "2020/04",
      experiences: [
        "Responsible in app development using framework Ionic , Angular",
        "Develop serverless services using node.js as backend and deploy to AWS",
      ],
    },
    {
      workPlace: "Kasikorn Business-Technology Group",
      occupation: "Software Engineer ",
      startDate: "2020/05",
      endDate: "2021/10",
      experiences: [
        "Develop microservices using Golang",
        "Develop batch program to import data to database using Java",
        "Implement and maintenance services in Java Springboot",
        "Collaborate in problem solving",
      ],
    },
  ],
};

const Resume = (props) => {
  return (
    <div className={classes.root}>
      <Button>RESUME</Button>
      <div className={classes.resume}>
        <Card hoverable>
          <Grid.Container gap={2} justify="center">
            <Grid xs={12} direction="column">
              <div className={classes.box}>
                <h2 style={{ textAlign: "left" }}>
                  {`${resume.name} ${resume.surname} (${resume.nickName})`}
                </h2>
                <h4 className={classes.sectionHeader}>{resume.occupation}</h4>
                <h4 className={classes.headerText}>Mobile</h4>
                <span className={classes.bodyText}>{resume.mobileNumber}</span>
                <h4 className={classes.headerText}>Email</h4>
                <span className={classes.bodyText}>{resume.email}</span>
              </div>
              <div className={classes.box}>
                <h4 className={classes.sectionHeader}>
                  EDUCATION
                  <div className={classes.iconWrapper}>🎓</div>
                </h4>
                <table style={{ borderSpacing: 10 }}>
                  {resume.educations.map((education, i) => (
                    <tr key={i}>
                      <td>
                        <h5
                          className={`${classes.headerText} ${classes.nowrap}`}
                        >
                          {education.startYear} - {education.endYear}
                        </h5>
                      </td>
                      <td style={{ textAlign: "left" }}>
                        <span className={classes.bodyText}>
                          {education.name}
                        </span>
                      </td>
                    </tr>
                  ))}
                </table>
              </div>
              <div className={classes.box}>
                <h4 className={classes.sectionHeader}>
                  SKILLS
                  <div className={classes.iconWrapper}>📚</div>
                </h4>
                <h4 className={`${classes.headerText}`}>Languages</h4>
                <table style={{ borderSpacing: 10 }}>
                  <tr>
                    <td>
                      <h5 className={`${classes.headerText} ${classes.nowrap}`}>
                        English
                      </h5>
                    </td>
                    <td
                      style={{
                        textAlign: "left",
                        display: "flex",
                        flexDirection: "column",
                      }}
                    >
                      <span className={classes.bodyText}>Listening: Good</span>
                      <span className={classes.bodyText}>Reading: Good</span>
                      <span className={classes.bodyText}>Speak: Poor</span>
                      <span className={classes.bodyText}>Writing: Poor</span>
                    </td>
                  </tr>
                </table>
                <h4 className={classes.headerText}>Programming Languages</h4>
                <span className={classes.bodyText}>
                  Go, Typescript, Javascript, Python, Java
                </span>
                <h4 className={classes.headerText}>Framework</h4>
                <span className={classes.bodyText}>Angular, Ionic, Echo</span>
                <h4 className={classes.headerText}>OS</h4>
                <span className={classes.bodyText}>Windows, Linux, MacOS</span>
                <h4 className={classes.headerText}>Program</h4>
                <span className={classes.bodyText}>
                  Word Processing, Excel, Powerpoint, Photo Editor, Video
                  Editing
                </span>
              </div>
            </Grid>
            <Grid xs={12}>
              <div className={classes.box}>
                <h4 className={classes.sectionHeader}>
                  WORK EXPERIENCE
                  <div className={classes.iconWrapper}>🚙</div>
                </h4>
                {resume.workExperiences.map((workExperience, i) => (
                  <div
                    key={i}
                    style={{ display: "flex", flexDirection: "column" }}
                  >
                    <h4 className={`${classes.headerText}`}>
                      {workExperience.occupation}
                    </h4>
                    <span className={classes.bodyText}>
                      {workExperience.startDate} - {workExperience.endDate}
                    </span>
                    <span className={classes.bodyTextCompany}>
                      {workExperience.workPlace}
                    </span>
                    <ul className={classes.listExperience}>
                      {workExperience.experiences.map((experience, i) => (
                        <li key={i} className={classes.experience}>
                          {experience}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </Grid>
          </Grid.Container>
        </Card>
      </div>
    </div>
  );
};

export default Resume;
