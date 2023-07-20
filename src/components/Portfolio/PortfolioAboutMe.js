import React, { Fragment } from "react";
import styles from "./PortfolioAboutMe.module.scss";

const PortfolioAboutMe = () => {
  return (
    <Fragment>
      <section className={styles["about-me_image"]} />
      <section className={styles["about-me_content"]}>
        <ul>
          <li>
            <label>Name</label>
            <p>Mikhail Batrakov</p>
          </li>
          <li>
            <label>Birthday</label>
            <p>Oct 02, 1997</p>
          </li>
          <li>
            <label>Email</label>
            <p>squirrelprogrammer@gmail.com</p>
          </li>
          <li>
            <label>Location</label>
            <p>Bishkek, Kyrgyzstan</p>
          </li>
        </ul>

        <p className={styles.para}>
          Lorem ipsum dolor sit amet, Lorem ipsum dolor sit amet, Lorem ipsum
          dolor sit amet, Lorem ipsum dolor sit amet.
        </p>
      </section>
    </Fragment>
  );
};

export default PortfolioAboutMe;