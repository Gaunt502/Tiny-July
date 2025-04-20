"use strict";
/*
   New Perspectives on HTML5 and CSS3, 8th Edition
   Tutorial 9
   Review Assignment

   Event Timer
   Author: Daniel Dameus
   Date: 03/08/25  

*/
showClock() {
   const thisDay = new Date();
   const localDate = thisDay.toLocaleDateString();
   const localTime = thisDay.toLocaleTimeString();
   nextJuly4(thisDay);

   j4Date.setHours(21, 0, 0);

   const timeDifference = j4Date - thisDay;

   const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
   const hrs = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
   const mins = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
   const secs = Math.floor((timeDifference % (1000 * 60)) / 1000);
   
   //showClock()
   setInterval (showClock, 1000)
};

nextJuly4();