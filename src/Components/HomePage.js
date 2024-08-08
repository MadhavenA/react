import React from 'react';
import VideoSlider from './VideoSlider.js';
import HighlightedText from './HighlightedText.js';

export default function HomePage(){
    return(
    <>
      <div className="main-buttons">
            <button className="another-home-page-button">Home</button>&emsp;
            <div class="dropdown">
              <button class="dropbtn">Service</button>
              <div class="dropdown-content">
              <a href="#">User Experience Assessment</a>
              <a href="#">Sales Assessment</a>
              <a href="#">Workflow Automation</a>
              <a href="#">Marketing Automation</a>
              <a href="#">Premium Press Releases</a>
              <a href="#">Web Design</a>
              <a href="#">Web Development</a>
              <a href="#">Buy Us Dinner</a>
              </div>
            </div>&emsp;
              <div class="dropdown">
                          <button class="dropbtn">Projects</button>
                          <div class="dropdown-content project-dropdown">
                          <a href="#">Asthma Symptoms</a>
                          <a href="#">Auction Advertising</a>
                          <a href="#">Auction Alerts</a>
                          <a href="#">Automotive Parts Database</a>
                          <a href="#">Coupon Marketing Service</a>
                          <a href="#">Dealership Complaints</a>
                          <a href="#">eCommerce Solution</a>
                          <a href="#">Embed eBay Listings</a>
                          <a href="#">Geo Redirection Service</a>
                          <a href="#">Green Trails Database</a>
                          <a href="#">Industrial Auctions</a>
                          <a href="#">Lead Management</a>
                          <a href="#">Masturbation Survey</a>
                          <a href="#">Mortgage Assessment</a>
                          <a href="#">Mortgage Calculator</a>
                          <a href="#">Music Data Management</a>
                          <a href="#">Prayer Network</a>
                          <a href="#">Secure Information Portal</a>
                          <a href="#">SERP Monitor</a>
                          <a href="#">US Government Grants</a>
                          <a href="#">Whohou Marketplace</a>
                          <a href="#">XRP Black Box Trading</a>
                          <a href="#">Youtube Repeat Script</a>
                          <a href="#">ZIP Code Database</a>
                          </div>
                        </div>&emsp;
            <button className="another-home-page-button">AboutUs</button>&emsp;
            <button className="another-home-page-button">ContactUs</button>&emsp;
      </div>
      <div>
         <img className="slider-background"></img>
         <VideoSlider/>

         </div>
         <HighlightedText/>
         </>
    );
}