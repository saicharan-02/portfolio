import React from "react";
import styles from "../styles/about.module.css";
import SkillComponent from "./SkillComponent";

const About = () => {
  return (
    <div className={styles.about}>
      <div className={styles.heading}>
        <h1>ABOUT ME</h1>
        <p>
          Here you will find more information about me, what I do, and my
          current skills mostly in terms of programming and technology
        </p>
      </div>

      <div className={styles.flexContainer}>
        <div className={styles.knowMe}>
          <h1>Get to know me!</h1>
          <p>
            I'm a <strong>Frontend Web Developer</strong> building the Websites
            and Web Applications that leads to the success of the overall
            product.
          </p>

          <p>
            I'm open to Job opportunities where I can contribute, learn and
            grow. If you have a good opportunity that matches my skills and
            experience then don't hesitate to contact me.
          </p>
        </div>

        <div className={styles.skills}>
          <h1>Skills</h1>
          <SkillComponent />
        </div>
      </div>
    </div>
  );
};

export default About;
