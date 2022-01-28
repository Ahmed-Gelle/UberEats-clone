import React from "react";
import styles from "./HowitWorks.module.css";
import { Link } from "react-router-dom";
import box1 from "../../assets/invite-to.svg";
import box2 from "../../assets/add-resturant.svg";
import box3 from "../../assets/work-with-us.svg";

export default function HowItWorks() {
  return (
    <div className={styles.container}>
      <h2>Hur fungerar det?</h2>
      <div className={styles.BoxContainer}>
        <div className={styles.Box}>
          <div className={styles.image}>
            <img src={box1} alt="how-it-works" />
          </div>
          <div className={styles.boxHead}>Erbjud mat till dina medarbetare</div>
          <div className={styles.boxText}>Skapa ett konto</div>
        </div>
        <div className={styles.Box}>
          <div className={styles.image}>
            <img src={box2} alt="save-water" />
          </div>
          <div className={styles.boxHead}>Din restaurang, levererad</div>
          <div className={styles.boxText}>Lägg till din restaurang</div>
        </div>
        <div className={styles.Box}>
          <div className={styles.image}>
            <img src={box3} alt="work-with-us" />
          </div>
          <div className={styles.boxHead}>Leverera med Uber Eats</div>
          <div className={styles.boxText}>Registrera dig för att leverera</div>
        </div>
      </div>
    </div>
  );
}
