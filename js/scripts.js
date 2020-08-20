$(document).ready(function() {
  $("#form").submit(function(event){
    const I = "1";
    const IV = "4";
    const V = "5";
    const IX = "9";
    const X = "10";
    const XL = "40";
    const L = "50";
    const XC = "90";
    const C = "100";
    const CD = "400";
    const D = "500";
    const CM = "900";
    const M = "1000";

    const userInput = $("#input").val();
    console.log(userInput);

    

    let output;
    if (userInput === I) {
      output = "I";
    } else if (userInput === V) {
      output = "V";
    } else if (userInput === X) {
      output = "X";
    } else if (userInput === L) {
      output = "L";
    } else if (userInput === C) {
      output = "C";
    } else if (userInput === D) {
      output = "D";
    } else if (userInput === M) {
      output = "M";
    } 
    console.log(output);
    $("#result").text(output);
    
    
    event.preventDefault();
  });
});