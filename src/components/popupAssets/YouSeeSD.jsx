import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";

import Persona_Samuel from "../../assets/YouSeeSD/persona_samuel.png";
import Persona_Chloe from "../../assets/YouSeeSD/persona_chloe.png";

import Create_Tour from "../../assets/YouSeeSD/CreateTour.png";
import Database_Schema from "../../assets/YouSeeSD/DatabaseSchema.png";
import Delete_Tour from "../../assets/YouSeeSD/DeleteTour.png";
import Load_Saved_Tour from "../../assets/YouSeeSD/LoadSavedTour.png";
import Risk_Matrix from "../../assets/YouSeeSD/RiskMatrix.png";
import Save_Tour from "../../assets/YouSeeSD/SaveTour.png";
import Start_Tour from "../../assets/YouSeeSD/StartTour.png";
import Test_Case from "../../assets/YouSeeSD/TestCaseSample.png";
import Use_Case_Diagram from "../../assets/YouSeeSD/UseCaseDiagram.png";

import Database_Schema_Full from "../../assets/YouSeeSD/database_schema.pdf";
import Requirements_Full from "../../assets/YouSeeSD/requirements.pdf";
import Test_Cases_Full from "../../assets/YouSeeSD/test_cases.pdf";
import Use_Cases_Full from "../../assets/YouSeeSD/use_cases.pdf";
import User_Stories_Full from "../../assets/YouSeeSD/user_stories.pdf";

const PERSONA_STYLE = {
  maxWidth: "50%",
  height: "auto",
  marginBottom: "10px",
  borderRadius: "50%",
  boxShadow: "0 7px 7px rgba(59, 43, 91, 0.7)",
};

const SECTION_STYLE = {
  paddingTop: "1.5rem",
};

const DIAGRAM_STYLE = {
  maxWidth: "100%",
  width: "100%",
  height: "auto",
  boxShadow: "0 7px 7px rgba(59, 43, 91, 0.7)",
};

const ROW_STYLE = {
  paddingBottom: "1rem",
};

const YouSeeSD = () => {
  return (
    <div>
      <section>
        <h4>Project Overview</h4>
        <p>
          With the increasing use of technology in enhancing one's experience in
          the modern world, we wanted to take a jab at an often overlooked
          deciding factor for prospective students. Campus tours are incredibly
          helpful for students. They provide a preview of the environment and
          campus life that they would get to experience if committed to the
          university.
        </p>
        <p>
          <b>The problem:</b> Not all prospective students, however, have the
          means or time to attend a campus tour. Most tours are held during
          typical work hours (9-5) on weekdays; times where interested parties
          may be busy with other obligations. Furthermore, many tours during
          "convenient" or "popular" times are often fully booked because of a
          person's typical availability.
        </p>
        <p>
          To address this, we created an Android application that allows a user
          to create their own tour, customizing it to their needs. This project
          was completed following the Agile approach to software development. I
          played the role of a senior system analyst, overlooking the artifacts
          that we needed to complete and a part of the coding.
        </p>
      </section>
      <section style={SECTION_STYLE}>
        <h4>User Personas</h4>
        <a href={User_Stories_Full} target="_blank" rel="noopener noreferrer">
          <Button variant="info">View all user stories</Button>
        </a>
        <Container fluid style={{ marginTop: "1rem" }}>
          <Row>
            <Col sm style={{ textAlign: "center" }}>
              <img
                src={Persona_Samuel}
                style={PERSONA_STYLE}
                alt="Persona: Samuel"
              />
              <p style={{ textAlign: "left" }}>
                Samuel is a prospective student who is deciding between UCSD and
                UCSB. He doesn't have a lot of free time on his hands and can
                only tour the two campuses at specific times. He needs a way to
                tour the campus at his own discretion to circumvent the tours'
                schedule.
              </p>
            </Col>
            <Col sm style={{ textAlign: "center" }}>
              <img
                src={Persona_Chloe}
                style={PERSONA_STYLE}
                alt="Persona: Chloe"
              />
              <p style={{ textAlign: "left" }}>
                Chloe is an incoming first year student and is unfamiliar with
                the campus. Her friends are too busy to tour the campus with
                her. She needs a way to learn where the various hotspots and
                classrooms are located so she can get around quickly and easily.
              </p>
            </Col>
          </Row>
        </Container>
      </section>
      <section style={SECTION_STYLE}>
        <h4>Use Cases</h4>
        <a href={Use_Cases_Full} target="_blank" rel="noopener noreferrer">
          <Button variant="info">View all use cases</Button>
        </a>
        <p style={{ marginTop: "1rem" }}>
          For this project, we came up with 15 use cases that detail the steps
          that a user should be able to follow to interact with our app. Note
          that some use cases are not implemented. The use cases are summarized
          as follows.
        </p>
        <h5>User Setup</h5>
        <ul>
          <li>
            Allows user to authorize the device registration to use the app
          </li>
          <li>Allows user to authorize the app to use current location data</li>
        </ul>
        <h5>Pre-Tour</h5>
        <ul>
          <li>
            Allows user to generate a tour based on the themes they desire
          </li>
          <li>
            Allows user to start a tour from one of the tours on their home
            screen
          </li>
          <li>Allows user to delete a tour on their home screen</li>
        </ul>
        <h5>On-Tour</h5>
        <ul>
          <li>Allows user to skip a tour location during a tour</li>
          <li>Allows user to mark a tour location as visited during a tour</li>
          <li>Allows user to read more about current location on a tour</li>
          <li>Allows user to end an active tour, regardless of progress</li>
        </ul>
        <h5>User Interaction and Feedback</h5>
        <ul>
          <li>
            Allows user to convert temperature units from Fahrenheit to Celsius
          </li>
        </ul>
        <p>
          Here is a diagram of the workflow for the use cases. The user starts
          on the left side. After registering their device, the user is able to
          use the application. The application's features are boxed with a
          dotted outline in the middle. Priorities were created by determining
          the tasks that were most essential for the core of our app - that is,
          a user should be able to tour the campus in their own free and spare
          time. For features where this could not be distinguished, we took a
          vote amongst the group.
        </p>
        <img
          src={Use_Case_Diagram}
          style={DIAGRAM_STYLE}
          alt="Use Case Diagram"
        />
      </section>
      <section style={SECTION_STYLE}>
        <h4>Requirements</h4>
        <a href={Requirements_Full} target="_blank" rel="noopener noreferrer">
          <Button variant="info">View all requirements</Button>
        </a>
        <p style={{ marginTop: "1rem" }}>
          Following the overall categories for each use case, we designed the
          following requirements that our system should allow the user to
          perform. These are the features that were implemented in the final
          project. To view all of the features, click the button above.
        </p>
        <h5>Allow Access</h5>
        <ul>
          <li>The system shall allow the user to register their device.</li>
          <li>
            The system shall allow the user to enable location services for the
            application.
          </li>
        </ul>
        <h5>Pre-Tour</h5>
        <ul>
          <li>
            The system shall allow the user to generate a tour based on their
            selected themes.
          </li>
          <li>The system shall allow the user to begin a tour they select.</li>
          <li>The system shall allow the user to delete a saved tour.</li>
        </ul>
        <h5>On-Tour</h5>
        <ul>
          <li>
            The system shall allow the user to skip unwanted locations on their
            tour.
          </li>
          <li>
            The system shall allow the user to leave a location and proceed onto
            the next location on their tour.
          </li>
          <li>
            The system shall allow the user to view information about a location
            on their tour.
          </li>
          <li>The system shall allow the user to end a tour.</li>
        </ul>
        <h5>User Interaction and Feedback</h5>
        <ul>
          <li>
            The system shall allow the user to switch the units of measure for
            the temperature from Celsius to Fahrenheit and vice versa.
          </li>
        </ul>
      </section>
      <section style={SECTION_STYLE}>
        <h4>Database Schema</h4>
        <a
          href={Database_Schema_Full}
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button variant="info">View detailed database schema</Button>
        </a>
        <p style={{ marginTop: "1rem" }}>
          The majority of our application is completed on the backend. As a
          result, we decided to create the following database schema with each
          user being the top level accessor. We stored our data on Firebase
          using their API for Android applications.
        </p>
        <img
          src={Database_Schema}
          style={DIAGRAM_STYLE}
          alt="Database Schema Diagram"
        />
      </section>
      <section style={SECTION_STYLE}>
        <h4>Test Cases</h4>
        <a href={Test_Cases_Full} target="_blank" rel="noopener noreferrer">
          <Button variant="info">View all test cases</Button>
        </a>
        <p style={{ marginTop: "1rem" }}>
          For every use case, we wrote an accompanying test case that would
          verify whether or not the use case was satisfied. Additionally, we
          wrote acceptance tests that verify whether or not a user story was
          satisfied. Each test had specific details on what the tester should do
          to ensure that there was a single deterministic test flow between
          different testers.
        </p>
        <p>
          An example of a test case's workflow looks like this. Acceptance tests
          had similar workflows but the main difference is the artifact that
          they verify along with less details.
        </p>
        <img src={Test_Case} style={DIAGRAM_STYLE} alt="Test Case Sample" />
      </section>
      <section style={SECTION_STYLE}>
        <h4>Risk Matrix</h4>
        <p>
          Throughout the entire process, we occasionally had issues with the
          project and the team. These risks were logged and recorded on a weekly
          basis. We found it helpful to keep track of these risks as it helped
          us prioritize what should be completed by the end of any given week.
          Additionally, it was especially important for our project since our
          team consisted of 10 people - a size that most of us were not
          acquainted with.
        </p>
        <p>
          Our risk matrix looked like this. For every risk, it details the
          author of the risk, the person on the team that is accountable for
          resolving the risk, a priority level with respect to all of the other
          tasks that had to be completed, the risk's description, the resolution
          status, and what we plan to do to mitigate this risk while it has not
          been resolved.
        </p>
        <img src={Risk_Matrix} style={DIAGRAM_STYLE} alt="Risk Matrix" />
      </section>
      <section style={SECTION_STYLE}>
        <h4>Final Remarks and Sample Screens</h4>
        <p>
          Overall, we were satisfied with the final product that we created.
          There were some features that turned out to be more lackluster than
          others, such as our custom navigation routing, but given the
          constraints of the project, this was acceptable to our standards. One
          thing I learned is that although a lot of time was spent on
          documentation that could have been reprioritized for the
          implementation of the project, I felt that because we had clear
          requirements and specifications of what had to be done, it helped out
          with the development process. This was also my first time working with
          a large group while following Agile - I picked up effective habits and
          skills that I can and have applied to my involvement in industry.
        </p>
        <p>
          This is a video that demonstrates the main features of the app,
          includes a small introduction from the team behind the project, and
          summarizes the technical details by highlighting the major team
          decisions.
        </p>
        <iframe
          title="Video Demo"
          width="560"
          height="315"
          src="https://www.youtube.com/embed/-mWoTZbod6c"
          frameborder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        />
        <Container style={{ marginTop: "1rem" }}>
          <Row>
            <Col sm style={ROW_STYLE}>
              <img src={Create_Tour} style={DIAGRAM_STYLE} alt="Create Tour" />
              <p style={{ textAlign: "center", marginTop: "10px" }}>
                <i>Creating a Tour</i>
              </p>
            </Col>
            <Col sm style={ROW_STYLE}>
              <img src={Start_Tour} style={DIAGRAM_STYLE} alt="Start a Tour" />
              <p style={{ textAlign: "center", marginTop: "10px" }}>
                <i>Starting a Tour</i>
              </p>
            </Col>
            <Col sm style={ROW_STYLE}>
              <img src={Save_Tour} style={DIAGRAM_STYLE} alt="Save a Tour" />
              <p style={{ textAlign: "center", marginTop: "10px" }}>
                <i>Saving a Tour</i>
              </p>
            </Col>
          </Row>
          <Row>
            <Col sm={{ span: 4, offset: 2 }} style={ROW_STYLE}>
              <img src={Delete_Tour} style={DIAGRAM_STYLE} alt="Delete Tour" />
              <p style={{ textAlign: "center", marginTop: "10px" }}>
                <i>Deleting a Tour</i>
              </p>
            </Col>
            <Col sm={4} style={ROW_STYLE}>
              <img
                src={Load_Saved_Tour}
                style={DIAGRAM_STYLE}
                alt="Load Saved Tour"
              />
              <p style={{ textAlign: "center", marginTop: "10px" }}>
                <i>Loading a Tour</i>
              </p>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
};

export default YouSeeSD;
