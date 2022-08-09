import React from 'react'
import Frame from '../components/Frame';
import styles from "../styles/Home.module.css";
import NewFrame from '../components/NewFrame';
function Home({}) {
  return (
    <div className={styles.Home}>
          <Frame title={"កម្សាន្ត​ >"} color={"rgb(236, 44, 163)"}>
          <NewFrame tag="entertain/1" img="https://picsum.photos/id/1/180/130" title={"lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do export"}/> 
          <NewFrame tag="entertain/12" img="https://picsum.photos/id/12/180/130" title={"lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do export"}/> 
          <NewFrame tag="entertain/23" img="https://picsum.photos/id/23/180/130" title={"lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do export"}/> 
          <NewFrame tag="entertain/34" img="https://picsum.photos/id/34/180/130" title={"lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do export"}/> 
          <NewFrame tag="entertain/55" img="https://picsum.photos/id/55/180/130" title={"lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do export"}/> 
          <NewFrame tag="entertain/76" img="https://picsum.photos/id/76/180/130" title={"lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do export"}/> 
          <NewFrame tag="entertain/17" img="https://picsum.photos/id/17/180/130" title={"lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do export"}/> 
          <NewFrame tag="entertain/88" img="https://picsum.photos/id/88/180/130" title={"lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do export"}/> 
         
          </Frame>




          <Frame title={"បច្ចេកវិទ្យា >"} color="#38C378">
          <NewFrame tag="tech/11" img="https://picsum.photos/id/11/180/130" title={"lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do export"}/> 
          <NewFrame tag="tech/121" img="https://picsum.photos/id/121/180/130" title={"lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do export"}/> 
          <NewFrame tag="tech/231" img="https://picsum.photos/id/231/180/130" title={"lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do export"}/> 
          <NewFrame tag="tech/341" img="https://picsum.photos/id/341/180/130" title={"lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do export"}/> 
          <NewFrame tag="tech/121" img="https://picsum.photos/id/155/180/130" title={"lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do export"}/> 
          <NewFrame tag="tech/176" img="https://picsum.photos/id/176/180/130" title={"lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do export"}/> 
          <NewFrame tag="tech/117" img="https://picsum.photos/id/117/180/130" title={"lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do export"}/> 
          <NewFrame tag="tech/121" img="https://picsum.photos/id/188/180/130" title={"lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do export"}/> 

          </Frame>


          <Frame title={"ជិវិតនិងសង្គម >"} color="#F9A62B">
          <NewFrame tag="life/151" img="https://picsum.photos/id/151/180/130" title={"lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do export"}/> 
          <NewFrame tag="life/61" img="https://picsum.photos/id/61/180/130" title={"lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do export"}/> 
          <NewFrame tag="life/19" img="https://picsum.photos/id/19/180/130" title={"lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do export"}/> 
          <NewFrame tag="life/19" img="https://picsum.photos/id/111/180/130" title={"lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do export"}/> 
          <NewFrame tag="life/222" img="https://picsum.photos/id/222/180/130" title={"lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do export"}/> 
          <NewFrame tag="life/161" img="https://picsum.photos/id/161/180/130" title={"lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do export"}/> 
          <NewFrame tag="life/152" img="https://picsum.photos/id/152/180/130" title={"lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do export"}/> 
          <NewFrame tag="life/521" img="https://picsum.photos/id/521/180/130" title={"lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do export"}/> 
          </Frame>



          <Frame title={"កីឡា >"} color="#4390F8">
          <NewFrame tag="sport/251" img="https://picsum.photos/id/251/180/130" title={"lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do export"}/> 
          <NewFrame tag="sport/271" img="https://picsum.photos/id/271/180/130" title={"lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do export"}/> 
          <NewFrame tag="sport/129" img="https://picsum.photos/id/129/180/130" title={"lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do export"}/> 
          <NewFrame tag="sport/131" img="https://picsum.photos/id/131/180/130" title={"lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do export"}/> 
          <NewFrame tag="sport/212" img="https://picsum.photos/id/212/180/130" title={"lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do export"}/> 
          <NewFrame tag="sport/271" img="https://picsum.photos/id/181/180/130" title={"lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do export"}/> 
          <NewFrame tag="sport/216" img="https://picsum.photos/id/216/180/130" title={"lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do export"}/> 
          <NewFrame tag="sport/271" img="https://picsum.photos/id/221/180/130" title={"lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do export"}/> 
          </Frame>
    </div>
  )
}

export default Home