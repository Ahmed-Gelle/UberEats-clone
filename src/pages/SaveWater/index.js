import React from "react";
import styles from "./index.module.css";
import box2 from "../../assets/box2.png";

export default function index() {
  return (
    <div className={styles.container}>
      <div className={styles.textContainer}>
        <h1 className={styles.h1}>Spara vatten</h1>
        <ul>
          <li>
            Medan nästan 70 % av jorden består av vatten, lider många delar av
            världen av brist på rent vatten. Att spara vatten är viktigt
            eftersom det håller vattnet rent och rent samtidigt som det skyddar
            miljön.
          </li>
          <li>
            Att spara på vattnet innebär att använda vår vattenförsörjning klokt
            och ta ansvar. Eftersom varje individ är beroende av vatten för sin
            försörjning, måste vi lära oss hur vi kan hålla vår begränsade
            tillgång på vatten rent och borta från föroreningar. Att hålla vår
            vattenförsörjning säker och ren kommer att skydda vattnet för
            kommande generationer.
          </li>
        </ul>
      </div>
      <div className={styles.image}>
        <img src={box2} />
      </div>
    </div>
  );
}
