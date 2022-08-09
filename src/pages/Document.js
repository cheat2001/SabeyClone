import React from 'react'
import styles from "../styles/Document.module.css";
import {useParams} from "react-router-dom";
function Document() {
  const {id} =useParams();
  let url=`https://picsum.photos/id/${id}/600/400`
  return (
    <div className={styles.Container}>
      <img src={url} alt="" />
      <h1>The New Information </h1>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nam non eligendi odio dignissimos! Corporis tenetur voluptate non consectetur pariatur distinctio quasi vel exercitationem, rem ipsam. Nam laudantium voluptatum tenetur hic.
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur assumenda maiores nulla architecto! Non at dignissimos obcaecati architecto sit cupiditate, aut, praesentium incidunt animi consequatur quisquam nostrum, corrupti aspernatur! Sint?
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Unde pariatur, mollitia aperiam vitae, dicta dolorum quidem iure nisi, sint eveniet neque. Cumque corporis, rem natus corrupti in perferendis vero provident.
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto fugit doloremque deserunt culpa repudiandae rerum corporis quasi possimus debitis et officia recusandae nobis eaque ducimus natus, magni delectus! Autem, dignissimos?
          Lorem ipsum dolor sit amet consectetur adipisicing elit. A nihil ullam, eaque eveniet at aliquid minus velit et laboriosam dolor odit soluta est commodi expedita. Nobis nemo aliquam ut dolore.
        </p>
    </div>
  )
}

export default Document