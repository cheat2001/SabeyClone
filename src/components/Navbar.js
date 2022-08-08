import React from 'react'
import styles from "../styles/Navbar.module.css";
import {Link} from "react-router-dom";
import {useState} from "react";
function Navbar() {
  const [state,setState]=useState(false);
  const toggleMode={
    height:"550px",
    transition:"0.5s",
    flexDirection:"column",
  }
  const showText={
    opacity:"1",
    pointerEvents: "all",
    color:"blue",
  }
  function eventHandler(){
    console.log(state);
    
    setState(pre=>!pre)
  }
  return (
    <nav className={styles.Navbar} style={state?toggleMode:{    transition:"0.5s"}}>
       <div className={styles.NavBarLink}>
       <Link styles={{color:"red"}}  className={`${styles.Link} ${styles.Home}`} to='/'>ទំព័រដើម</Link>
      <Link className={styles.Link} to='/entertain'>កម្សាន្ត</Link>
      <Link className={styles.Link} to='/tech'>បច្ចេកវិទ្យា</Link>
      <Link className={styles.Link} to='/life'>ជិវិតនិងសង្គម</Link>
      <Link className={styles.Link} to='/sport'>កីឡា</Link>
      <Link className={styles.Link} to='/road'>ផ្លូវទៅស្រុក</Link>
      <Link className={styles.Link} to='nothing'>---</Link>
       </div>
      <div  className={`${styles.Toggle}`} onClick={()=>eventHandler()}>
        <div className={`${styles.Line} ${styles.Line1}`}></div>
        <div className={`${styles.Line} ${styles.Line2}`}></div>
        <div className={`${styles.Line} ${styles.Line3}`}></div>
      </div>
    </nav>
  )
}

export default Navbar