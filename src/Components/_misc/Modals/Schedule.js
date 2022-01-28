import React, { useEffect, useState } from "react";
import Modal from "styled-react-modal";
import { useMenuToggleContext } from "../../Hero/Hero";
import styles from "./Schedule.module.css";

import CloseIcon from "../../../assets/close.svg";

const StyledModal = Modal.styled`
  width: 458px;
  height: 420px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #fff;
  @media(max-width: 768px){
    width: 100%;
    height: 100%;
  }
`;

export default function Schedule() {
  const { menuOpen, toggleMenu, options, setOptions } = useMenuToggleContext();
  const [value1, setvalue1] = useState("");
  const [value2, setvalue2] = useState("");
  var today = new Date();
  today.getHours();

  function GetDates(startDate, daysToAdd) {
    var aryDates = [];

    for (var i = 0; i <= daysToAdd; i++) {
      var currentDate = new Date();
      currentDate.setDate(startDate.getDate() + i);
      aryDates.push(
        i === 0
          ? "Idag, " +
              DayAsString(currentDate.getDay()) +
              ", " +
              currentDate.getDate() +
              " " +
              MonthAsString(currentDate.getMonth())
          : i === 1
          ? "Imorogon, " +
            DayAsString(currentDate.getDay()) +
            ", " +
            currentDate.getDate() +
            " " +
            MonthAsString(currentDate.getMonth())
          : DayAsString(currentDate.getDay()) +
            ", " +
            currentDate.getDate() +
            " " +
            MonthAsString(currentDate.getMonth())
      );
    }

    return aryDates;
  }

  function MonthAsString(monthIndex) {
    var d = new Date();
    var month = new Array();
    month[0] = "jan";
    month[1] = "feb";
    month[2] = "mar";
    month[3] = "apr";
    month[4] = "may";
    month[5] = "jun";
    month[6] = "jul";
    month[7] = "aug";
    month[8] = "sep";
    month[9] = "oct";
    month[10] = "nov";
    month[11] = "dec";

    return month[monthIndex];
  }

  function DayAsString(dayIndex) {
    var weekdays = new Array(7);
    weekdays[0] = "Sön";
    weekdays[1] = "Mon";
    weekdays[2] = "Tis";
    weekdays[3] = "Ons";
    weekdays[4] = "Tors";
    weekdays[5] = "Fre";
    weekdays[6] = "Lör";

    return weekdays[dayIndex];
  }

  var startDate = new Date();

  var aryDates = GetDates(startDate, 7);
  function close(e) {
    toggleMenu(false);
  }
  var x = 30; //minutes interval
  var times = []; // time array
  var tt = 0; // start time

  //loop to increment the time and push results in array
  for (var i = 0; tt < 24 * 60; i++) {
    var hh = Math.floor(tt / 60); // getting hours of day in 0-24 format
    var mm = tt % 60; // getting minutes of the hour in 0-55 format
    times[i] = ("0" + (hh % 24)).slice(-2) + ":" + ("0" + mm).slice(-2); // pushing data in array in [00:00 - 12:00 AM/PM format]
    tt = tt + x;
  }
  const output = [];
  for (var index = 0; index < times.length - 1; index++) {
    output.push(times[index] + "-" + times[index + 1]);
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    setOptions(value1 + " " + value2);
    close();
  };
  const secondbutton = (e) => {
    e.preventDefault();
    setOptions("Leverar nu");
    close();
  };
  return (
    <StyledModal
      isOpen={menuOpen}
      onBackgroundClick={close}
      onEscapeKeydown={close}
    >
      <div className={styles.container}>
        <div className={styles.close} onClick={close}>
          <img src={CloseIcon} />
        </div>
        <h3>Välj en tid</h3>
        <form className={styles.form} onSubmit={handleSubmit}>
          <select onChange={(e) => setvalue1(e.target.value)}>
            {aryDates.map((date) => (
              <option value={date} className="image-type">
                {date}
              </option>
            ))}
          </select>
          <select onChange={(e) => setvalue2(e.target.value)}>
            {output.map((date) => (
              <option value={date} className="image-type">
                {date}
              </option>
            ))}
          </select>
          <button type="submit" className={styles.primaryButton}>
            Schemalägg
          </button>
          <button
            type="button"
            className={styles.secondaryButton}
            onClick={secondbutton}
          >
            Leverara nu
          </button>
        </form>
      </div>
    </StyledModal>
  );
}
