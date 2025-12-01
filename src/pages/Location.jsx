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
        <option value="skopje">Skopje</option>
        <option value="berlin">Berlin</option>
      </select>
      <button id='searchLocation'>See Location</button>
      <span id='dots1'></span>
        <div style={{position: 'absolute', top: '18%', right: '25.6%'}} id='Paris'>
          <p>Paris</p>
        </div>
      <span id='dots2'></span>
        <div style={{position: 'absolute', top: '21%', right: '36.6%'}} id='NewYork'>
          <p>New York</p>
        </div>
      <span id='dots3'></span>
        <div style={{position: 'absolute', top: '30.9%', left: '44.6%'}} id='London'>
          <p>London</p>
        </div>
      <span id='dots4'></span>
        <div style={{position: 'absolute', top: '20.8%', left: '23.1%'}} id='Tokyo'>
          <p>Tokyo</p>
        </div>
      <span id='dots5'></span>
        <div style={{position: 'absolute', top: '40%', left: '31.1%'}} id='Sydney'>
          <p>Sydney</p>
        </div>
      <span id='dots6'></span>
        <div style={{position: 'absolute', top: '41%', right: '41.6%'}} id='Skopje'>
          <p>Skopje</p>
        </div>
      <span id='dots7'></span>
        <div style={{position: 'absolute', top: '45.7%', right: '18.6%'}} id='Berlin'>
          <p>Berlin</p>
        </div>
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