"use strict";

// live click calls to actions

document.querySelectorAll('.numBTN').forEach(item => {
    item.addEventListener('click', e => {

        Controller.inputNum(e);

    })
  });
  
  document.querySelector("#clearBTN").addEventListener("click", () => {

    Controller.clearResults();

  });


  document.querySelector("#additionBTN").addEventListener("click", () => {

    Controller.clickAddNum();

  });

  
  
  document.querySelector("#equalsBTN").addEventListener("click", () => {

    Controller.calcResults();

  });
  
  document.querySelector("#subtractionBTN").addEventListener("click", () => {

    Controller.checkSubNum();

  });

  document.querySelector("#multiplicationBTN").addEventListener("click", () => {

    Controller.checkMultiNum();

  });

  document.querySelector("#divionBTN").addEventListener("click", () => {

    Controller.checkDivNum();

  });

  document.querySelector("#decimalBTN").addEventListener("click", () => {

    Controller.checkDecimal();

  });

// key events


document.addEventListener('keydown', (e) => 
{

    switch(e.code) {
        case "Digit0":

             Controller.keyActive("#zeroBTN");
             Controller.findNumBTN(`${(e.code).substr(5)}`);

        break;
        case "Digit1":
            Controller.keyActive("#oneBTN");
            Controller.findNumBTN(`${(e.code).substr(5)}`);
        break;
        case "Digit2":
            Controller.keyActive("#twoBTN");
            Controller.findNumBTN(`${(e.code).substr(5)}`);
        break;
        case "Digit3":
            Controller.keyActive("#threeBTN");
            Controller.findNumBTN(`${(e.code).substr(5)}`);
        break;
        case "Digit4":
            Controller.keyActive("#fourBTN");
            Controller.findNumBTN(`${(e.code).substr(5)}`);
        break;
        case "Digit5":
            Controller.keyActive("#fiveBTN");
            Controller.findNumBTN(`${(e.code).substr(5)}`);
        break;
        case "Digit6":
            Controller.keyActive("#sixBTN");
            Controller.findNumBTN(`${(e.code).substr(5)}`);
        break;
        case "Digit7":
            Controller.keyActive("#sevenBTN");
            Controller.findNumBTN(`${(e.code).substr(5)}`);
        break;
        case "Digit8":
            Controller.keyActive("#eightBTN");
            Controller.findNumBTN(`${(e.code).substr(5)}`);
        break;
        case "Digit9":
            Controller.keyActive("#nineBTN");
            Controller.findNumBTN(`${(e.code).substr(5)}`);
        break;
        case "KeyC":
            Controller.keyActive("#clearBTN");
            Controller.clearResults();
        break;
        case "Backspace":
            Controller.delOneResult();
        break;
        case "Period":
            Controller.keyActive("#decimalBTN");
            Controller.checkDecimal();
        break;
        case "Minus":
            // Controller.checkSubNum();
        break;
        case "Plus":
       //     Controller.clickAddNum();
        break;
        case "Slash":
       //     Controller.checkDivNum();
        break;
        case "Times":
           //  Controller.checkMultiNum();
        break;
        case "Equal":
            Controller.keyActive("#equalsBTN");
            Controller.calcResults();
        break;
        case "Return":
            Controller.keyActive("#equalsBTN");
            Controller.calcResults();
        break;
        default:
            break;
    }
}

);

