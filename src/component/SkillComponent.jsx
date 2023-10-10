import React from "react";
import styles from "../styles/skillIcon.module.css";
import { FaHtml5, FaCss3, FaJs, FaReact, FaPython, FaGithub } from "react-icons/fa6";
import { TbBrandNextjs } from "react-icons/tb";

const SkillComponent = () => {
  return (
    <div className={styles.skillContainer}>
      <div className={styles.skillElement}>
        <FaHtml5 className={styles.skillIcon} />
        <h3 className={styles.skillText}>HTML</h3>
      </div>
      <div className={styles.skillElement}>
        <FaCss3 className={styles.skillIcon} />
        <h3 className={styles.skillText}>CSS</h3>
      </div>
      <div className={styles.skillElement}>
        <FaJs className={styles.skillIcon} />
        <h3 className={styles.skillText}>Java Script</h3>
      </div>
      <div className={styles.skillElement}>
        <FaReact className={styles.skillIcon} />
        <h3 className={styles.skillText}>ReactJs</h3>
      </div>
      <div className={styles.skillElement}>
        <TbBrandNextjs className={styles.skillIcon} />
        <h3 className={styles.skillText}>NextJs</h3>
      </div>
      <div className={styles.skillElement}>
        <FaPython className={styles.skillIcon} />
        <h3 className={styles.skillText}>Python</h3>
      </div>
      <div className={styles.skillElement}>
        <FaGithub className={styles.skillIcon} />
        <h3 className={styles.skillText}>Github</h3>
      </div>
    </div>
  );
};

export default SkillComponent;
