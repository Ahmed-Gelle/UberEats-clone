import React from "react";
import styles from "./Map.module.css";
import mapImage from "../../assets/maps.png";

export default function Map() {
  return (
    <div className={styles.container}>
      <h2>Städer nära mig</h2>
      <div className={styles.mapWrapper}>
        <img src={mapImage} />
      </div>
    </div>
  );
}
