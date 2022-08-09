import React from 'react'
import styles from "../styles/NewFrame.module.css";
import {useNavigate} from "react-router-dom";
function NewFrame({img,title,tag}) {
    const navigate = useNavigate();
    console.log(tag);
  return (
    <div onClick={()=>navigate(tag)} className={styles.Container}>
        <img src={img} alt="" />
        <p className={styles.title}>{title}</p>
    </div>
  )
}

export default NewFrame