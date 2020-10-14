import React from "react";
import './assets/shared.scss';
import MotoSelect from "./motoSelect/motoselect";
import { AiOutlineMenu } from 'react-icons/ai';
import { FaGlobeEurope } from 'react-icons/fa';

const Header = ()=>{
  return(
    <header>
      <nav>< AiOutlineMenu/></nav>
      <div className="logoHome"><FaGlobeEurope/> INTERNATIONAL WEBSITE   |   MY DUCATI</div>
    </header>
  )
}

function App() {
  return(
  <>
  <Header />
    <MotoSelect />
    <footer></footer>
  </>
  ) 

}

export default App;
