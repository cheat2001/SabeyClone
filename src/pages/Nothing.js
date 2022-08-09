import React from 'react'
import styles from "../styles/Nothing.module.css";
import gif404 from "../images/404.gif";
function Nothing() {
  return (
    <div className={styles.Container}>
        <img width={300} src={gif404} alt="" />
    </div>
  )
}

export default Nothing