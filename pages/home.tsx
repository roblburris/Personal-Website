import React from "react";
import Template from "../components/template";

const Home: React.FC = () => {
  return (
    <Template>
      <div>
        <h1>Welcome!</h1>
        <p>
          {" "}
          I'm Robert Burris, a current sophomore at the University of Washington
          studying Computer Science. Here you'll find a collection of my various
          projects, blog posts, a copy of my resume, and info on where to
          contact me! <br /> <br /> In the meantime, here's some info about me!
        </p>
        <ul>
          <li>
            {" "}
            <b>Current Work:</b> Undergraduate Researcher at the Wang Lab For
            Computational Biology in the Allen School of Computer Science and
            Engineering. At the moment, I'm currently applying statistics and
            machine learning to look at prostate cancer. {" "}
          </li>

          <li>
            {" "}
            <b>Current Coursework:</b> Foundations of Computing II (CSE 312),
            Systems Programming (CSE 333), Probability I (MATH 394), Introductory
            Linguistics (LING 200)
          </li>

          <li>
            <b> Ongoing Projects: </b> Designing a way to view bike rides logged
            on{" "}
            <a
              href="https://www.strava.com/athletes/22252948"
              style={{ color: "black" }}
            >
              Strava
            </a>{" "}
            on my website, building an IOT LED light control system, and online
            coursework in deep learning.
          </li>
        </ul>
      </div>
    </Template>
  );
}

export default Home;
