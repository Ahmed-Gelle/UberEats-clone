import React from "react";
import styles from "./Footer.module.css";
import facebook from "../../assets/facebook.svg";
import instagram from "../../assets/instagram.svg";
import twitter from "../../assets/twitter.svg";
import Logo from "../../assets/footer-logo.svg";
import appstore from "../../assets/app-store.svg";
import playstore from "../../assets/play-store.png";

import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <div className={styles.Container}>
      <div className={styles.TopSection}>
        <div className={styles.ImageContainer}>
          <div className={styles.logo}>
            <img src={Logo} alt="logo" />
          </div>
          <div className={styles.download}>
            <img src={appstore} alt="appstore" />
            <img src={playstore} className={styles.playstore} alt="playstore" />
          </div>
        </div>
        <div className={styles.RowWrapper}>
          <div className={styles.firstRow}>
            <ul>
              <li>
                <Link to="/contact-us">Skaffa hjälp</Link>
              </li>
              <li>Lägg till din restaurang</li>
              <li>Registrera dig för att leverera</li>
              <li>Skapa ett företagskonto</li>
              <li>Spara pengar på din första beställning</li>
            </ul>
          </div>
          <div className={styles.SecondRow}>
            <ul>
              <li>
                <Link to="/contact-us">Restauranger nära mig</Link>
              </li>
              <li>Visa alla städer</li>
              <li>Visa alla länder</li>
              <li>Läs vår blogg</li>
              <li>Om Uber Eats</li>
            </ul>
          </div>
        </div>
      </div>
      <hr />
      <div className={styles.BottomSection}>
        <div className={styles.SocialMedia}>
          <div className={styles.socialIcon}>
            <img src={facebook} alt="facebook" />
          </div>
          <div className={styles.socialIcon}>
            <img src={twitter} alt="twitter" />
          </div>
          <div className={styles.socialIcon}>
            <img src={instagram} alt="instagram" />
          </div>
        </div>
        <div className={styles.listWrapper}>
          <ul className={styles.rowOne}>
            <li>Sekretesspolicy</li>
            <li>Villkor</li>
            <li>Priser</li>
            <li>Sälj inte min information (Kalifornien)</li>
          </ul>
          <ul className={styles.rowTwo}>
            <li>
              Denna webbplats skyddas av reCAPTCHA. Googles Sekretesspolicy och
              Tjänstevillkor tillämpas.
            </li>
            <li>&copy; 2022 Uber Technologies Inc.</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
