import React from 'react'
import Logo from './components/Logo'
import Navbar from './components/Navbar';
import "./style.css";
import {Route,Routes} from "react-router-dom";
import Home from "./pages/Home";
import Entertain from "./pages/Entertain";
import Tech from "./pages/Tech";
import Life from "./pages/Life";
import Sport from "./pages/Sport";
import Road from "./pages/Road";
import Nothing from "./pages/Nothing";
import Footer from './components/Footer';
import Document from './pages/Document';
function App() {
  return (
    <div className="App">
       <Logo/>
       <Navbar/>
       <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/entertain" element={<Entertain/>}/>
        <Route path="/entertain/:id" element={<Document/>}/>
        <Route path="/entertain/entertain/:id" element={<Document/>}/>
        <Route path="/tech" element={<Tech/>}/>
        <Route path="/tech/:id" element={<Document/>}/>
        <Route path="/tech/tech/:id" element={<Document/>}/>
        <Route path="/life" element={<Life/>}/>
        <Route path="/life/:id" element={<Document/>}/>
        <Route path="/life/life/:id" element={<Document/>}/>
        <Route path="/sport" element={<Sport/>}/>
        <Route path="/sport/:id" element={<Document/>}/>
        <Route path="/sport/sport/:id" element={<Document/>}/>
        <Route path="/road" element={<Road/>}/>
        <Route path="*" element={<Nothing/>}/>
       </Routes>
       <Footer/>
    </div>
  )
}

export default App