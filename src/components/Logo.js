import React from 'react'
import styles from "../styles/Logo.module.css";
import logo from "../images/logo.png"
function Logo() {
  return (
    <div className={styles.logo}>
        <img src={logo} alt="wow" />
    </div>
  )
}

export default Logo