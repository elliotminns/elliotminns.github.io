/*!
* Start Bootstrap - One Page Wonder v6.0.5 (https://startbootstrap.com/theme/one-page-wonder)
* Copyright 2013-2022 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-one-page-wonder/blob/master/LICENSE)
*/
// This file is intentionally blank
// Use this file to add JavaScript to your project

//Replace Text function		 
$(function () { 
    count = 0; 
    wordsArray = ["👋Salut👋", "👋¿Qué tal?👋", "👋Privet👋", "👋Ni hao👋", "👋Ciao👋", "👋Konnichiwa👋", "👋Guten Tag👋", "👋Goddag👋", "👋Yassou👋", "👋Namaste👋", "👋Shalom👋", "👋God dag👋"]; 
    setInterval(function () { 
      count++; 
      $("#word").fadeOut(500, function () { 
        $(this).text(wordsArray[count % wordsArray.length]).fadeIn(500); 
      }); 
    }, 2000); 
  }); 
  //End Replace Text function\\