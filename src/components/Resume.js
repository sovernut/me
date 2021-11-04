import React from 'react';

import { toPng } from 'html-to-image';
import jsPdf from 'jspdf';
import { useHistory } from 'react-router';

import {
  Button,
  Card,
  Grid,
} from '@geist-ui/react';
import Download from '@geist-ui/react-icons/download';

import { nutResume as resume } from '../constants/resume';
import classes from './Resume.module.css';

const Resume = (props) => {
  const history = useHistory();
  const goHome = () => {
    history.replace("/me");
  };


  const capture1 = () => {
    const domElement = document.getElementById("resume");
    toPng(domElement).then(function (dataUrl) {
      const pdf = new jsPdf();
      pdf.addImage(dataUrl, "JPEG", 5, 0);
      pdf.save(`resume.pdf`);
    });
  };

  return (
    <div className={classes.root}>
      <div className={classes.toolbar}>
        <Button onClick={goHome}>HOME</Button>
        <Button onClick={capture1} icon={<Download />}>
          PDF
        </Button>
      </div>

      <div className={classes.resume}>
        <Card hoverable>
          <Grid.Container gap={2} justify="center" id="resume">
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
                  <tbody>
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
                  </tbody>
                </table>
              </div>
              <div className={classes.box}>
                <h4 className={classes.sectionHeader}>
                  SKILLS
                  <div className={classes.iconWrapper}>📚</div>
                </h4>
                <h4 className={`${classes.headerText}`}>Languages</h4>
                <table style={{ borderSpacing: 10 }}>
                  <tbody>
                    <tr>
                      <td>
                        <h5
                          className={`${classes.headerText} ${classes.nowrap}`}
                        >
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
                        <span className={classes.bodyText}>
                          Listening: Good
                        </span>
                        <span className={classes.bodyText}>Reading: Good</span>
                        <span className={classes.bodyText}>Speak: Poor</span>
                        <span className={classes.bodyText}>Writing: Poor</span>
                      </td>
                    </tr>
                  </tbody>
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
