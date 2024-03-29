import React, { Fragment } from "react";
import styles from "./PortfolioAboutMe.module.scss";

const PortfolioAboutMe = () => {
  return (
    <Fragment>
      <section className={styles["about-me_image"]} />
      <section className={styles["about-me_content"]}>
        <div className={styles.backdrop} />
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
            <label>Location</label>
            <p>Bishkek, Kyrgyzstan</p>
          </li>
          <li className={styles.email}>
            <label>Email</label>
            <p>
              <a href="mailto:squirrelprogrammer@gmail.com">
                squirrelprogrammer@gmail.com
              </a>
            </p>
          </li>
          <li>
            <label>Telegram</label>
            <p>
              <a href="https://t.me/remmremmer">@remmremmer</a>
            </p>
          </li>
        </ul>
      </section>
    </Fragment>
  );
};

export default PortfolioAboutMe;
