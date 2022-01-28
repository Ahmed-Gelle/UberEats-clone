import React, { useState, useEffect } from "react";
import styles from "./Navbar.module.css";
import MenuIcon from "../../assets/menu-icon.svg";
import Menu from "../_misc/Modals/Menu";
import Logo from "../../assets/logo.svg";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [first, setfirst] = useState(false);
  const [sidebar, setSidebar] = useState(false);

  useEffect(() => {
    document.addEventListener("scroll", () => {
      if (window.scrollY <= 60) {
        setfirst(true);
      } else {
        setfirst(false);
      }
    });
  });

  return (
    <MenuToggleContext.Provider
      value={{
        menuOpen: sidebar,
        toggleMenu: setSidebar,
      }}
    >
      <div style={{ display: sidebar ? "inline" : "none" }}>
        <Menu />
      </div>
      <nav className={first ? styles.wrapper : styles.scroll}>
        <div className={styles.container}>
          <div className={styles.MenuAndLogo}>
            <div className={styles.Menu} onClick={() => setSidebar(true)}>
              <img src={MenuIcon} alt="Menu icon" />
            </div>
            <Link to="/">
              <div className={styles.Logo}>
                <img src={Logo} alt="Logo" />
              </div>
            </Link>
          </div>

          <Link to="/login">
            <button className={styles.button}>Logga in</button>
          </Link>
        </div>
      </nav>
    </MenuToggleContext.Provider>
  );
}
export const MenuToggleContext = React.createContext({
  menuOpen: false,
  toggleMenu: () => {},
});
export function useMenuToggleContext() {
  return React.useContext(MenuToggleContext);
}
