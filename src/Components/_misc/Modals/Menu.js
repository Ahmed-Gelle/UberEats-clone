import React, { useEffect, useState } from "react";
import Modal from "styled-react-modal";
import { useMenuToggleContext } from "../../Navbar/Navbar";
import styles from "./Menu.module.css";
import { Link } from "react-router-dom";

const StyledModal = Modal.styled`
width: 20%;
height: 100%;
  display: flex;
  align-items: flex-start;
  position:absolute; 
  left: 0;
  transition: all 0.5rem ease-in-out;
  justify-content: flex-start;
  background-color: #fff;
  @media(max-width: 768px){
    width: 70%;
    height: 100%;
  }
`;
export default function Menu() {
  const { menuOpen, toggleMenu } = useMenuToggleContext();
  function close(e) {
    toggleMenu(false);
  }
  return (
    <StyledModal
      isOpen={menuOpen}
      onBackgroundClick={close}
      onEscapeKeydown={close}
    >
      <div className={styles.container}>
        <div className={styles.button}>
          <Link to="/login">Logga in</Link>
        </div>
        <div>
          <ul>
            <li>
              <Link to="#">Skappa ett företagkonto</Link>
            </li>
            <li>
              <Link to="#">Lägga till din resturang</Link>
            </li>
            <li>
              <Link to="#">Registrera dig för att leverera</Link>
            </li>
          </ul>
        </div>
      </div>
    </StyledModal>
  );
}
