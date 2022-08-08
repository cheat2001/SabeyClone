import React from 'react'
import styles from "../styles/Navbar.module.css";
import {NavLink} from "react-router-dom";
import {useState} from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faHome} from "@fortawesome/free-solid-svg-icons";
function Navbar() {
  const navLinkStyle = ({ isActive }) => {
    return {
      backgroundColor: isActive ? "#c0112c" : "#FA1939",
      color: isActive ? "white" : "rgba(255, 255, 255, 0.733)",
    };
  };
  const [state,setState]=useState(false);
  const toggleMode={
    height:"550px",
    transition:"0.5s",
    flexDirection:"column",
    justifyContent:"center",
    alignItems:"center",
  }
  const navStyle={
    opacity:"1",
    pointerEvents:"all",
    
  }
  React.useEffect(() => {
    function handleResize() {
    setState(false);
}
    window.addEventListener('resize', handleResize)
  })
  function eventHandler(){
    console.log(state);
    
    setState(pre=>!pre)
  }
  return (
    <nav className={styles.Navbar} style={state?toggleMode:{    transition:"0.5s"}}>
       <div style={state?navStyle:{}} className={styles.NavBarLink}>
       <NavLink  style={navLinkStyle}
       className={`${styles.Link} ${styles.Home}`} to='/'><FontAwesomeIcon icon={faHome}></FontAwesomeIcon></NavLink>
      <NavLink style={navLinkStyle} className={styles.Link} to='/entertain'>កម្សាន្ត</NavLink>
      <NavLink  style={navLinkStyle} className={styles.Link} to='/tech'>បច្ចេកវិទ្យា</NavLink>
      <NavLink  style={navLinkStyle} className={styles.Link} to='/life'>ជិវិតនិងសង្គម</NavLink>
      <NavLink  style={navLinkStyle} className={styles.Link} to='/sport'>កីឡា</NavLink>
      <NavLink  style={navLinkStyle} className={styles.Link} to='/road'>ផ្លូវទៅស្រុក</NavLink>
      <NavLink  style={navLinkStyle} className={styles.Link} to='nothing'>---</NavLink>
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