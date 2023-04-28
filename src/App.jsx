
import { Route ,Routes} from "react-router-dom";
import React from "react";
import './App.css';
// import Header from './component/Header1'
import Home from "./page/Home";
import About from "./page/About";
import Contact from "./page/Contact";
import Error from "./page/Error";
import Team from "./page/Team";
import Download_app from "./page/Download_app";

function App() {
  return (
    
    <>
    
     {/* <Header></Header> */}
     <Routes> 
      <Route exact path="/" element={<Home/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="*" element={<Error/>}/>
      <Route path ='/team' element={<Team/>}></Route>
      <Route path='/contact' element ={<Contact/>}></Route>
      <Route path ='/download' element={<Download_app/>}></Route>
      {/* <Route exact path='/' element ={<Home/>}></Route>
      <Route path ='/about'element={<About/>}></Route> */}
      </Routes>   
      
   </>
  );
}

export default App;
