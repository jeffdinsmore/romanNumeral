// business logic
let output1 = outputOnes;
function ones(num) {
   if (num[3] === I) {
    output1.push("I");
  } else if  (splitNumber[3] === II) {
    outputOnes.push("II");
  }  else if  (splitNumber[3] === III) {
    outputOnes.push("III");
  } else if  (splitNumber[3] === IV) {
    outputOnes.push("IV");
  } else if (splitNumber[3] === V) {
    outputOnes.push("V");
  }  else if  (splitNumber[3] === VI) {
    outputOnes.push("VI");
  } else if  (splitNumber[3] === VII) {
    outputOnes.push("VII");
  } else if  (splitNumber[3] === VIII) {
    outputOnes.push("VIII");
  } else if  (splitNumber[3] === IX) {
    outputOnes.push("IX");
  }

}

function tens(num) {
  return num * 10;
}

function hundreds(num) {
  return num * 100;
}

function thousands(num) {
  return num * 1000;
}



$(document).ready(function() {
  $("#form").submit(function(event){

    const I = "1";
    const II = "2";
    const III = "3";
    const IV = "4";
    const V = "5";
    const VI = "6";
    const VII = "7";
    const VIII = "8";
    const IX = "9";
    const X = "10";
    const XX = "20";
    const XXX = "30";
    const XL = "40";
    const L = "50";
    const LX = "60";
    const LXX = "70";
    const LXXX = "80"
    const XC = "90";
    const C = "100";
    const CC = "200";
    const CCC = "300";
    const CD = "400";
    const D = "500";
    const DC = "600";
    const DCC = "700";
    const DCCC = "800";
    const CM = "900";
    const M = "1000";
    const MM = "2000";
    const MMM = "3000";

    const userInput = $("#input").val();
    let number = userInput.toString().padStart(4, "0");
    let splitNumber = number.split("");
    console.log(splitNumber);
    console.log(number);
    
    console.log(splitNumber[3]);
    
      let output;
      // 
      let outputOnes = [];
      
      if (number > 3999 || number.length > 4) {
        output = "Roman numerals do not go that high."
      } else if (splitNumber[3] === I) {
        outputOnes.push("I");
      } else if  (splitNumber[3] === II) {
        outputOnes.push("II");
      }  else if  (splitNumber[3] === III) {
        outputOnes.push("III");
      } else if  (splitNumber[3] === IV) {
        outputOnes.push("IV");
      } else if (splitNumber[3] === V) {
        outputOnes.push("V");
      }  else if  (splitNumber[3] === VI) {
        outputOnes.push("VI");
      } else if  (splitNumber[3] === VII) {
        outputOnes.push("VII");
      } else if  (splitNumber[3] === VIII) {
        outputOnes.push("VIII");
      } else if  (splitNumber[3] === IX) {
        outputOnes.push("IX");
      }
      
      
       else if (userInput === X) {
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
      
      
      
      
      else if (userInput.length = 2) {
        const userInput2 = userInput.split("");
        const output2 = []; 
        userInput.forEach(function() {
          if (userInput2[0] === I) {
            output2.push("I");
          } 
      });
    }
    
    console.log(outputOnes);
    $("#result").text(outputOnes);
    
    
    event.preventDefault();
  });
});
// });

// (userInput.length >= 4 && userInput[0] > 3)
// const numberInput = parseInt($("#input").val());