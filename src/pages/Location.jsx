import React from 'react';
import LocationImg from '../assetss/loc.png';
import { LiaAwardSolid } from "react-icons/lia";
import { PiUsers } from "react-icons/pi";
import { BsShop } from "react-icons/bs";


function Location() {
  return (
    <div id='locationCtn'>
      <h1 style={{margin: '20px auto'}}>We're global to privilege you</h1>
      <select id='locationSelect'>
        <option value="newyork">New York</option>
        <option value="london">London</option>
        <option value="paris">Paris</option>
        <option value="tokyo">Tokyo</option>
        <option value="sydney">Sydney</option>
      </select>
      <button id='searchLocation'>See Location</button>
      <span id='dots1'>
        <div id='Paris'>
          <p>Paris</p>
        </div>
      </span>
      <span id='dots2'></span>
      <span id='dots3'></span>
      <span id='dots4'></span>
      <span id='dots5'></span>
      <span id='dots6'></span>
      <span id='dots7'></span>
      <img src={LocationImg} alt="Location" id='locationImg'/>
      <div id='locationInf'>
        <div className="box1">
          <LiaAwardSolid size={50} color='black'/>
          <h2>+2M</h2>
          <p>AWARDS</p>
        </div>
        <div className="box2">
          <PiUsers size={50} color='black'/>
          <h2>+10M</h2>
          <p>COSTUMERS</p>
        </div>
        <div className="box3">
          <BsShop size={50} color='black'/>
          <h2>+11M</h2>
          <p>STORE</p>
        </div>
      </div>
    </div>
  );
}
 
export default Location;