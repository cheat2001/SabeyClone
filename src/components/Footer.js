import React from 'react'
import styles from "../styles/Footer.module.css";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCoffee} from "@fortawesome/free-solid-svg-icons";
import { faFacebookF,faTelegram,faTwitter,faInstagram,faLinkedin} from '@fortawesome/free-brands-svg-icons' 
function Footer() {
  return (
    <div className={styles.Container}>
      <div className={styles.LeftSide}>
        <h1>Sabay Digital</h1>
        <p>©រក្សាសិទ្ធិគ្រប់យ៉ាងដោយ Sabay ឆ្នាំ២០១៦</p>
        <p>គោលការណ៍ភាពឯកជន | Privacy Policy</p>
        <p>អាសយដ្ឋាន</p>
        <p>អគារលេខ ៣០៦ មហាវិថីព្រះមុន្នីវង្ស</p>
        <p>សង្កាត់បឹងរាំង ខណ្ឌដួនពេញ</p>
      </div>
      <div className={styles.MidSide}>
        <h1>អំពីយើង</h1>
        <p>Sabay Digital Corporation ជា​ក្រុមហ៊ុន​ព័ត៌មាន​ឌីជីថល និង​</p>
        <p>កម្សាន្ត​ឈាន​មុខ​គេ​នៅ​កម្ពុជា។ ព័ត៌មាន​បន្ថែម</p>
        <p>ផលិត​ផល​ និង​ សេវាកម្ម របស់ Sabay</p>
      </div>
      <div className={styles.RightSide}>
        <h1>ជួបគ្នានៅបណ្ដាញសង្គម</h1>
         <div className={styles.SocialBlock}>
         <a href=""><FontAwesomeIcon icon={faFacebookF} /></a>
         <a href="">
         <FontAwesomeIcon icon={faTelegram} />
         </a>
         <a href="">   <FontAwesomeIcon icon={faTwitter} /></a>
         <a href=""> <FontAwesomeIcon icon={faInstagram} /></a>
         <a href=""><FontAwesomeIcon icon={faLinkedin} /></a>
         </div>
         <p>ទំនាក់ទំនង</p>
         <p>info@sabay.com</p>
         <p>023 228 000</p>
      </div>
    </div>
  )
}

export default Footer