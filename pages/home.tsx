import React from "react";
import Template from "../components/template";
import styles from "./styles.module.css";

const Home: React.FC = () => {
  return (
    <Template>
      <div>
        <h1>Welcome!</h1>
        <p>
          {" "}
          I'm Robert Burris, a current junior at the University of Washington
          studying Computer Science with a minor in Mathematics. Here you'll find a collection of my various
          projects, blog posts, a copy of my resume, and info on where to
          contact me! <br /> <br /> In the meantime, here's some info about me!
        </p>
        <ul>
          <li>
            {" "}
            <b>Current Coursework:</b> Software Design and Implementation (CSE 331), Operating Systems (CSE 451), 
            Distributed Systems (CSE 452), Introduction to Computer Communication Networks (CSE 461)
          </li>
          <li>
            {" "}
            <b>Ongoing Projects:</b>

            <ul>
              <li> Protobowl inspired Jeopardy online quizbowl </li>
            </ul>
          </li>
          <li>
            {" "}
            <b>What I'm Currently Reading:</b>
            <ul>
              <li> <i> Option Volatility and Pricing </i> by Sheldon Natenberg</li>
              {/* <li> <i> Distributed Systems: Principles and Paradigms</i> by Andrew Tanenbaum and Maarten Van Steen </li> */}
            </ul>
          </li>
          <li>
            {" "}
            <b>What I'm Listening to:</b> 
            <div className={styles.PlaylistContainer}>
              <iframe className={styles.Playlist1} src="https://open.spotify.com/embed/playlist/4bGk7UQsva7p8gdrHHPId3?utm_source=generator" width="100%" height="380" 
                frameBorder="0" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"></iframe>
              <iframe className={styles.Playlist2} src="https://open.spotify.com/embed/playlist/7sUjG5pKkjcreLNgfNB1ek?utm_source=generator" width="100%" height="380"
                frameBorder="0" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"></iframe>
            </div>
            
          
          </li>
        </ul>
      </div>
    </Template>
  );
}

export default Home;
