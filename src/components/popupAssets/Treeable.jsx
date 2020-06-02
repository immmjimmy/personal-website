import React from "react";
import { Container, Row, Col } from "react-bootstrap";

import Persona_Mark from "../../assets/Treeable/persona_mark.png";
import Persona_Rachel from "../../assets/Treeable/persona_rachel.png";

import Storyboard_1 from "../../assets/Treeable/storyboard1.png";
import Storyboard_2 from "../../assets/Treeable/storyboard2.png";

import LowPrototype1_1 from "../../assets/Treeable/lowprototype1_1.png";
import LowPrototype1_2 from "../../assets/Treeable/lowprototype1_2.png";
import LowPrototype1_3 from "../../assets/Treeable/lowprototype1_3.png";
import LowPrototype1_4 from "../../assets/Treeable/lowprototype1_4.png";
import LowPrototype1_5 from "../../assets/Treeable/lowprototype1_5.png";
import LowPrototype2_1 from "../../assets/Treeable/lowprototype2_1.png";
import LowPrototype2_2 from "../../assets/Treeable/lowprototype2_2.png";
import LowPrototype2_3 from "../../assets/Treeable/lowprototype2_3.png";

import MidPrototype_1 from "../../assets/Treeable/midprototype_1.png";
import MidPrototype_2 from "../../assets/Treeable/midprototype_2.png";
import MidPrototype_3 from "../../assets/Treeable/midprototype_3.png";
import MidPrototype_4 from "../../assets/Treeable/midprototype_4.png";
import MidPrototype_5 from "../../assets/Treeable/midprototype_5.png";

import FinalDesign_About_1 from "../../assets/Treeable/finaldesign_about_1.png";
import FinalDesign_About_2 from "../../assets/Treeable/finaldesign_about_2.png";
import FinalDesign_Discussion from "../../assets/Treeable/finaldesign_discussion.png";
import FinalDesign_Gallery from "../../assets/Treeable/finaldesign_gallery.png";
import FinalDesign_Help from "../../assets/Treeable/finaldesign_help.png";
import FinalDesign_Home_1 from "../../assets/Treeable/finaldesign_home_1.png";
import FinalDesign_Home_2 from "../../assets/Treeable/finaldesign_home_2.png";
import FinalDesign_Leaderboard from "../../assets/Treeable/finaldesign_leaderboard.png";
import FinalDesign_Profile from "../../assets/Treeable/finaldesign_profile.png";

const STORYBOARD_STYLE = {
  maxWidth: "100%",
  height: "auto",
  marginBottom: "10px",
  boxShadow: "0 7px 7px rgba(59, 43, 91, 0.7)",
};

const PERSONA_STYLE = {
  ...STORYBOARD_STYLE,
  borderRadius: "50%",
  maxWidth: "50%",
};

const PROTOTYPE_STYLE = {
  maxWidth: "100%",
  height: "auto",
  boxShadow: "0 7px 7px rgba(59, 43, 91, 0.7)",
};

const ROW_STYLE = {
  paddingBottom: "1rem",
};

const SECTION_STYLE = {
  paddingTop: "1.5rem",
};

const Treeable = () => {
  return (
    <div>
      <section>
        <h4>Project Overview</h4>
        <p>
          In recent years, climate change and the reduction of CO2 has become
          the focus of many politicians and climate scientists. Of course, the
          general population is not excluded from this conversation. When people
          are prompted to help reduce their contribution to the ever-rising
          pollution rate, they proactively engage in activities that assist in
          this movement.
        </p>
        <p>
          That being said, however, most people have no way of being held
          accountable aside from their own motivation or self-conscious.
        </p>
        <p>
          Because there are many different ways to be sustainable, we wanted to
          focus on one aspect that could be easily changed. Thus, we implemented
          a webapp that encourages users to recycle more often by creating a
          social platform that incentivizes recycling. I was in charge of
          developing the majority of the codebase and spearheaded the major app
          decisions.
        </p>
      </section>
      <section style={SECTION_STYLE}>
        <h4>Problem Statement</h4>
        <p>
          The majority of college students want to be more sustainable and
          proactive in improving the environment. They, however, lack an
          incentive which eventually drives them to return to old unsustainable
          habits.
        </p>
      </section>
      <section style={SECTION_STYLE}>
        <h4>User Research</h4>
        <p>
          For our user research, we observed and interviewed a number of college
          students. The students we interacted with were from different colleges
          and majors, which helped us get a general sense of the need at UCSD.
          We constructed our interview questions to determine how often a user
          recycles and how likely they would be to influence others to follow
          their actions.
        </p>
        <p>
          From our observations, we found that an alarming amount of people
          simply toss their plastic bottles in either the recycling or trash
          bin, depending on the one that was more convenient. After explicitly
          telling people to recycle, they would almost immediately change the
          bin they were going to toss their bottle in. From our interviews, we
          found that a lot of students wished to be sustainable but didn't
          really know how to get started. For others, they wished to share their
          knowledge but they had a hard time getting people to commit to the
          cause.
        </p>
      </section>
      <section style={SECTION_STYLE}>
        <h4>User Personas</h4>
        <Container fluid>
          <Row>
            <Col sm style={{ textAlign: "center" }}>
              <img
                src={Persona_Mark}
                style={PERSONA_STYLE}
                alt="Persona: Mark"
              />
              <p style={{ textAlign: "left" }}>
                Mark is a college student that would like to be environmentally
                conscious but doesn't know how to get started. He has tried
                asking his friends but they aren't of any help as they were
                never taught proper sustainable practices. Mark needs a way to
                connect with more involved members of the sustainable community
                to become familiar with the best eco-friendly practices.
              </p>
            </Col>
            <Col sm style={{ textAlign: "center" }}>
              <img
                src={Persona_Rachel}
                style={PERSONA_STYLE}
                alt="Persona: Rachel"
              />
              <p style={{ textAlign: "left" }}>
                Rachel is a high school student who is the president of her high
                school's environmental science club. Her general members tend to
                drop out from the club about a quarter of the way through the
                school year. Rachel needs a way to keep them motivated and
                incentivized to stay dedicated to the cause they signed up for.
              </p>
            </Col>
          </Row>
        </Container>
      </section>
      <section style={SECTION_STYLE}>
        <h4>Storyboards</h4>
        <p>
          Based on the findings of our user research, we came up with two
          different approaches to our problem statement and came up with the
          following storyboards.
        </p>
        <Container fluid>
          <Row>
            <Col sm>
              <img
                src={Storyboard_1}
                style={STORYBOARD_STYLE}
                alt="Storyboard 1"
              />
              <p>
                Social media approach: In this storyboard, we are focused on
                making recycling a game for people to participate in. Users
                would be able to sign up, log their daily recycling, and share
                it with the other members of their community. The highlight of
                this idea is that it has created an incentive for people to
                actively recycle, namely social clout. However, the problem with
                this idea is that users have to already have friends who would
                be willing to participate with them, limiting the number of new
                users.
              </p>
            </Col>
            <Col sm>
              <img
                src={Storyboard_2}
                style={STORYBOARD_STYLE}
                alt="Storyboard 2"
              />
              <p>
                Wiki / discussion based approach: In this storyboard, we focused
                on making the app a forum for people to discuss and learn about
                sustainability practices. Users would be able to peruse articles
                and posts that interest them and engage with the online
                community. We liked this idea because it allows people of all
                interest levels to become more informed and active. The major
                drawback, however, is the fact that the content has to be
                actively monitored to ensure that the information on the site is
                accurate and relevant to the environmental cause.
              </p>
            </Col>
          </Row>
        </Container>
      </section>
      <section style={SECTION_STYLE}>
        <h4>Low-Fidelity Prototypes</h4>
        <p>
          Based on our storyboards' approaches, we came up with the following
          prototypes. Both were tested and given feedback by three evaluators.
        </p>
        <Container fluid>
          <Row>
            <Col sm style={ROW_STYLE}>
              <img
                src={LowPrototype1_1}
                style={PROTOTYPE_STYLE}
                alt="Low Prototype 1_1"
              />
            </Col>
            <Col sm style={ROW_STYLE}>
              <img
                src={LowPrototype1_2}
                style={PROTOTYPE_STYLE}
                alt="Low Prototype 1_2"
              />
            </Col>
          </Row>
          <Row>
            <Col sm style={ROW_STYLE}>
              <img
                src={LowPrototype1_3}
                style={PROTOTYPE_STYLE}
                alt="Low Prototype 1_3"
              />
            </Col>
            <Col sm style={ROW_STYLE}>
              <img
                src={LowPrototype1_4}
                style={PROTOTYPE_STYLE}
                alt="Low Prototype 1_4"
              />
            </Col>
          </Row>
          <Row>
            <Col sm={3} />
            <Col sm={6} style={ROW_STYLE}>
              <img
                src={LowPrototype1_5}
                style={PROTOTYPE_STYLE}
                alt="Low Prototype 1_5"
              />
            </Col>
          </Row>
          <Row>
            <Col>
              <p>
                Social media approach: We wanted to strictly follow the
                motivation in the associated storyboard. Thus, it contains the
                bare minimum: a way to sign up, the public leaderboard, and an
                FAQ section for new users. Overall, the feedback for this
                prototype was well-received. The biggest thing for all three
                evaluators was the simplicity of the page- it was easy to
                navigate through the different sections. On the other hand, the
                biggest flaw was the lack of a prototype screen for the process
                of participating in the leaderboard as we had not worked out
                this interaction at the time of evaluation.
              </p>
            </Col>
          </Row>
          <Row>
            <Col sm style={ROW_STYLE}>
              <img
                src={LowPrototype2_1}
                style={PROTOTYPE_STYLE}
                alt="Low Prototype 2_1"
              />
            </Col>
            <Col sm style={ROW_STYLE}>
              <img
                src={LowPrototype2_2}
                style={PROTOTYPE_STYLE}
                alt="Low Prototype 2_2"
              />
            </Col>
          </Row>
          <Row>
            <Col sm={3} />
            <Col sm={6} style={ROW_STYLE}>
              <img
                src={LowPrototype2_3}
                style={PROTOTYPE_STYLE}
                alt="Low Prototype 2_3"
              />
            </Col>
          </Row>
          <Row>
            <Col sm>
              <p>
                Wiki / discussion based approach: Similar to the social media
                approach, we stuck to the motivation in the storyboard and
                focused on making the interface a forum. Here, users can click
                on different categories to view posts or articles on a subject.
                Our evaluators also highlighted on the simplicity of the page in
                their feedback as it was something that helped them stay engaged
                with the site. The common drawback that they pointed out,
                however, was the lack of a search / organize functionality that
                would help users sift through posts that weren't of interest to
                them.
              </p>
            </Col>
          </Row>
        </Container>
        <p>
          As a result, we came up with a hybrid prototype that took the popular
          features and functionality of both designs and incorporated them into
          a single design. Essentially, we added a discussion board for users
          that are participating in the recycling game to start discussions with
          one another. This would allow them to discuss recycling topics and
          their progress in the recycling leaderboards.
        </p>
      </section>
      <section style={SECTION_STYLE}>
        <h4>Mid-Fidelity Prototypes</h4>
        <p>
          These were our initial wireframes for the webapp. We decided on the
          pages in the dropdown menu as a result of the use cases from our
          storyboards.
        </p>
        <Container>
          <Row>
            <Col sm style={ROW_STYLE}>
              <img
                src={MidPrototype_1}
                style={PROTOTYPE_STYLE}
                alt="Mid Prototype 1"
              />
            </Col>
            <Col sm style={ROW_STYLE}>
              <img
                src={MidPrototype_2}
                style={PROTOTYPE_STYLE}
                alt="Mid Prototype 2"
              />
            </Col>
            <Col sm style={ROW_STYLE}>
              <img
                src={MidPrototype_3}
                style={PROTOTYPE_STYLE}
                alt="Mid Prototype 3"
              />
            </Col>
          </Row>
          <Row>
            <Col sm={2} />
            <Col sm={4} style={ROW_STYLE}>
              <img
                src={MidPrototype_4}
                style={PROTOTYPE_STYLE}
                alt="Mid Prototype 4"
              />
            </Col>
            <Col sm={4} style={ROW_STYLE}>
              <img
                src={MidPrototype_5}
                style={PROTOTYPE_STYLE}
                alt="Mid Prototype 5"
              />
            </Col>
          </Row>
        </Container>
      </section>
      <section style={SECTION_STYLE}>
        <h4>User Testing</h4>
        <p>
          We performed some user testing on early-mid stage implementations of
          our wireframes. During these tests, our facilitators presented our
          participants with a series of tasks that relied as little as possible
          on the participants' own understanding of modern web apps. We also had
          them "think out loud" to understand the process that a user would
          follow to accomplish some goal in mind.
        </p>
        <p>
          Overall, our participants were able to accomplish the tasks that we
          had designed with little to no difficulty because of the minimalist
          design approach; there isn't much that a user can do other than an
          intended task. One interesting observation was the difference between
          theory and practice. The back button was highly debated in discussions
          amongst peers and was concluded as a necessary. In our observations,
          however, all three participants simply swiped back a page without
          using the back button. As a result, we removed the back button.
        </p>
        <p>
          The most important takeaway from our testing, however, was the fact
          that a lot of the pages went unused or were found to be uninteresting
          by our participants. From their feedback, we realized that certain
          users would only use certain features of the website. We created a
          plan to allow users to customize their experience and are hoping to
          implement it in future version of our application.
        </p>
      </section>
      <section style={SECTION_STYLE}>
        <h4>Final Remarks and Sample Screens</h4>
        <p>
          Ultimately, we were able to fully implement the app to our liking. I
          learned that implementing a responsive mobile web app is hard. The
          approach we followed in the class wasn't the best but it still
          provided the basics of responsive web development that I still refer
          to occasionally. Although it deviated little more than we would've
          liked from the prototypes, the main ideas from testing remained. We
          presented the application to numerous people, varying from professors
          to industry professionals. For our first web project, we're pretty
          proud of the results!
        </p>
        <Container>
          <Row>
            <Col sm style={ROW_STYLE}>
              <img
                src={FinalDesign_About_1}
                style={PROTOTYPE_STYLE}
                alt="Final Design About 1"
              />
              <p style={{ textAlign: "center", marginTop: "10px" }}>
                <i>Splash Page</i>
              </p>
            </Col>
            <Col sm style={ROW_STYLE}>
              <img
                src={FinalDesign_About_2}
                style={PROTOTYPE_STYLE}
                alt="Final Design About 2"
              />
              <p style={{ textAlign: "center", marginTop: "10px" }}>
                <i>About Section</i>
              </p>
            </Col>
            <Col sm style={ROW_STYLE}>
              <img
                src={FinalDesign_Home_1}
                style={PROTOTYPE_STYLE}
                alt="Final Design Home 1"
              />
              <p style={{ textAlign: "center", marginTop: "10px" }}>
                <i>User Home Page</i>
              </p>
            </Col>
          </Row>
          <Row>
            <Col sm style={ROW_STYLE}>
              <img
                src={FinalDesign_Home_2}
                style={PROTOTYPE_STYLE}
                alt="Final Design Home 2"
              />
              <p style={{ textAlign: "center", marginTop: "10px" }}>
                <i>Upload Picture Screen</i>
              </p>
            </Col>
            <Col sm style={ROW_STYLE}>
              <img
                src={FinalDesign_Leaderboard}
                style={PROTOTYPE_STYLE}
                alt="Final Design Leaderboard"
              />
              <p style={{ textAlign: "center", marginTop: "10px" }}>
                <i>Leaderboard Page</i>
              </p>
            </Col>
            <Col sm style={ROW_STYLE}>
              <img
                src={FinalDesign_Gallery}
                style={PROTOTYPE_STYLE}
                alt="Final Design Gallery"
              />
              <p style={{ textAlign: "center", marginTop: "10px" }}>
                <i>Gallery Page</i>
              </p>
            </Col>
          </Row>
          <Row>
            <Col sm style={ROW_STYLE}>
              <img
                src={FinalDesign_Discussion}
                style={PROTOTYPE_STYLE}
                alt="Final Design Discussion"
              />
              <p style={{ textAlign: "center", marginTop: "10px" }}>
                <i>Discussion Page</i>
              </p>
            </Col>
            <Col sm style={ROW_STYLE}>
              <img
                src={FinalDesign_Profile}
                style={PROTOTYPE_STYLE}
                alt="Final Design Profile"
              />
              <p style={{ textAlign: "center", marginTop: "10px" }}>
                <i>Profile Page</i>
              </p>
            </Col>
            <Col sm style={ROW_STYLE}>
              <img
                src={FinalDesign_Help}
                style={PROTOTYPE_STYLE}
                alt="Final Design Help"
              />
              <p style={{ textAlign: "center", marginTop: "10px" }}>
                <i>Help Page</i>
              </p>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
};

export default Treeable;
