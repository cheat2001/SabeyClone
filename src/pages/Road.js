import React from 'react'
import styles from "../styles/Road.module.css";
function Road() {
  return (
    <div className={styles.Container}>
         <iframe width="520" height="400" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" id="gmap_canvas" src="https://maps.google.com/maps?width=520&amp;height=400&amp;hl=en&amp;q=%20Phnom%20Penh+()&amp;t=&amp;z=12&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe> <a href='https://mapswebsite.org/'>add a google map to website</a> <script type='text/javascript' src='https://embedmaps.com/google-maps-authorization/script.js?id=a376f81902f3a956242e1eb46650fc81a260e78b'></script>
    </div>
  )
}

export default Road