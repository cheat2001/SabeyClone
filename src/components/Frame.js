import React from 'react'
import styles from "../styles/Frame.module.css";
import NewFrame from './NewFrame';

function Frame({title,color,children}) {
  return (
    <div style={{border:`2px solid ${color}`}} className={styles.Container}>
        <h3 style={{backgroundColor:`${color}`}}>{title}</h3>
        {children}
    </div>
  )
}

export default Frame