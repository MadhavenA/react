import React from 'react';
import VideoSlider from './VideoSlider.js';
import HighlightedText from './HighlightedText.js';
import HomePage from './HomePage.js';

export default function Header(){
    return(
    <>
      <img className="logo-image"/>
      <h1 className="header">BUSINESS MINDER</h1>
      <div className="button-position">
          <button className="home-page-button">> About</button>&emsp;
          <button className="home-page-button">> ContactUs</button>&emsp;
          <button className="home-page-button">> +918754399890</button>&emsp;
          </div>
          <HomePage/>

    </>
    );
}