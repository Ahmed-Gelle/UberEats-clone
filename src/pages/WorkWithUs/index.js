import React from "react";
import styles from "./index.module.css";
import box3 from "../../assets/box3.png";

export default function index() {
  return (
    <div className={styles.container}>
      <div className={styles.textContainer}>
        <h1 className={styles.h1}>Jobba hos oss</h1>
        <h4 className={styles.h4}>
          Har du ett intresse för bilar och är redo för nya utmaningar så är
          detta tjänsten för dig!
        </h4>
        <ul>
          {" "}
          Arbetsbeskrivning:
          <li>
            Vi söker bilvårdare som följer upp och ser till att följa
            fastställda rutiner och riktlinjer för att ta emot, hantera och
            utföra biltvätt runt om I Stockholm
          </li>
          <li>
            Vi söker dig som är stresstålig, flexibel, samarbetsvillig samt
            idérik. För att kunna utföra arbetet på bästa sätt så ser vi att du
            är bekväm att arbeta i ett högt tempo på egen hand.
          </li>
        </ul>
        <div>
          Är du intresserad? Mejla din ansökan till{" "}
          <a href="mailto:info@lessive.se">info@lessive.se</a>
        </div>
      </div>
      <div className={styles.image}>
        <img src={box3} />
      </div>
    </div>
  );
}
