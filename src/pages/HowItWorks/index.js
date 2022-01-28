import React from "react";
import styles from "./index.module.css";
import box1 from "../../assets/box1.png";

export default function index() {
  return (
    <div className={styles.container}>
      <div className={styles.textContainer}>
        <h1 className={styles.h1}>Hur fungerar det?</h1>
        <h4 className={styles.h4}>Gör så här:</h4>
        <ul>
          <li>
            Börja med att registrera din bil på vår app genom att fylla i märke,
            modell och registreringsnummer.
          </li>
          <li>
            Fyll sedan in vilken tid såväl som plats som du vill tvätta din bil
            och boka därefter en tvätt.
          </li>
          <li>
            Vi tar oss därefter till utvald position för att tvätta din bil för
            hand och använder oss endast av tre redskap. Dammsugare,
            mikrofiberduk och vår egna nano formula spray.
          </li>
          <li>
            Vi börjar med att applicera vår nano formula på utsidan av bilen
            såväl som på mikrofiberduken. Vi torkar sedan varsamt av bilen med
            mikrofiberduken för att inte orsaka någon skada på din bil. Därefter
            dammsuger vi och tvättar insidan av bilen det vill säga alla mattor,
            baklucka, fönster, ratten, säten, instrumentbräda och bilpanel.
          </li>
          <li>
            Din glädje och en ren bil är vår högsta prioritet. Boka en tid hos
            oss redan idag!
          </li>
        </ul>
      </div>
      <div className={styles.image}>
        <img src={box1} />
      </div>
    </div>
  );
}
