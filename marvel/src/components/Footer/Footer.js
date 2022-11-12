import React from "react";
import styles from "./Footer.module.css";
import marvelLogo from "../../img/marvelM3.png";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div
        className={`${styles.container} ${styles.grid} ${styles["grid--footer"]}`}
      >
        <div className={styles["logo-col"]}>
          <a href="#" className={styles["footer-logo"]}>
            <img
              className={styles["logo"]}
              alt="Marvel logo"
              src={marvelLogo}
            />
          </a>

          <ul className={styles["social-links"]}>
            <li>
              <a className={styles["footer-link"]} href="#">
                <ion-icon
                  className={styles["social-icon"]}
                  name="logo-instagram"
                ></ion-icon>
              </a>
            </li>
            <li>
              <a className={styles["footer-link"]} href="#">
                <ion-icon
                  className={styles["social-icon"]}
                  name="logo-facebook"
                ></ion-icon>
              </a>
            </li>
            <li>
              <a className={styles["footer-link"]} href="#">
                <ion-icon
                  className={styles["social-icon"]}
                  name="logo-twitter"
                ></ion-icon>
              </a>
            </li>
          </ul>

          <p className={styles.copyright}>
            Copyright &copy; 2026 by Marvel, Inc. All rights reserved.
          </p>
        </div>
        <nav className={styles["nav-col"]}>
          <p className={styles["footer-heading"]}>Account</p>
          <ul className={styles["footer-nav"]}>
            <li>
              <a className={styles["footer-link"]} href="#">
                Create account
              </a>
            </li>
            <li>
              <a className={styles["footer-link"]} href="#">
                Sign in
              </a>
            </li>
            <li>
              <a className={styles["footer-link"]} href="#">
                iOS app
              </a>
            </li>
            <li>
              <a className={styles["footer-link"]} href="#">
                Android app
              </a>
            </li>
          </ul>
        </nav>

        <nav className={styles["nav-col"]}>
          <p className={styles["footer-heading"]}>Company</p>
          <ul className={styles["footer-nav"]}>
            <li>
              <a className={styles["footer-link"]} href="#">
                About Marvel
              </a>
            </li>
            <li>
              <a className={styles["footer-link"]} href="#">
                For Business
              </a>
            </li>
            <li>
              <a className={styles["footer-link"]} href="#">
                Advertising
              </a>
            </li>
            <li>
              <a className={styles["footer-link"]} href="#">
                Disney+
              </a>
            </li>
          </ul>
        </nav>

        <nav className={styles["nav-col"]}>
          <p className={styles["footer-heading"]}>Resources</p>
          <ul className={styles["footer-nav"]}>
            <li>
              <a className={styles["footer-link"]} href="#">
                Marvel Insider{" "}
              </a>
            </li>
            <li>
              <a className={styles["footer-link"]} href="#">
                Marvel Unlimited
              </a>
            </li>
            <li>
              <a className={styles["footer-link"]} href="#">
                Privacy & terms
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
