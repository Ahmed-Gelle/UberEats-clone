import React, { useState, useRef, useEffect } from "react";
import styles from "./Hero.module.css";
import time from "../../assets/time.svg";
import arrowDown from "../../assets/arrow-down.svg";
import Modal from "styled-react-modal";
import Schedule from "../_misc/Modals/Schedule";
const StyledModal = Modal.styled`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #000;
`;
export default function Hero() {
  const [option, setOption] = useState("Leverar nu");
  const [toggle, setToggle] = useState(false);
  const inputElement = useRef(null);
  useEffect(() => {
    inputElement.current.onfocus = () => {
      window.scrollTo(0, 0);
      document.body.scrollTop = 0;
    };
  });
  return (
    <MenuToggleContext.Provider
      value={{
        menuOpen: toggle,
        toggleMenu: setToggle,
        options: option,
        setOptions: setOption,
      }}
    >
      <div style={{ display: toggle ? "inline" : "none" }}>
        <Schedule />
      </div>
      <section className={styles.wrapper}>
        <div className={styles.container}>
          <h1>Beställ biltvätt direkt till din dörr.</h1>
          <form className={styles.form}>
            <div className={styles.inputContainer} ref={inputElement}>
              <input
                type="text"
                placeholder="Ange leveransadress"
                className={styles.input}
              />
            </div>
            <div className={styles.options} onClick={() => setToggle(true)}>
              <div className={styles.optionsIcon1}>
                <img src={time} alt="time" />
              </div>
              <div className={styles.optionsTime}>{option}</div>
              <div className={styles.optionsIcon2}>
                <img src={arrowDown} alt="arrow down" />
              </div>
            </div>
            <button type="submit" className={styles.button}>
              Hitta mat
            </button>
          </form>
          <div className={styles.Text}>
            <p>
              <a href="/login">Logga in</a> för dina senaste adresser
            </p>
          </div>
        </div>
      </section>
    </MenuToggleContext.Provider>
  );
}

export const MenuToggleContext = React.createContext({
  menuOpen: false,
  toggleMenu: () => {},
  setOptions: () => {},
  options: false,
});
export function useMenuToggleContext() {
  return React.useContext(MenuToggleContext);
}
