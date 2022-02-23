
var elForm  = document.querySelector(".form");
var elInput  =  document.querySelector(".form__input");
var elSelect  = document.querySelector(".form__select");
var elResult  = document.querySelector(".form__result");
var elCurrency  = document.querySelector(".form__currency");
var dollor = elInput*10900;
elForm.addEventListener("submit", function(event){
  event.preventDefault();
  
  var elInputVal = elInput.value;
  var elSelectVal = elSelect.value;
  var currency = elInputVal * elSelectVal
  
  elResult.textContent=(currency)
  
  if(elInputVal>0){
    elResult.textContent=(currency);
    console.log(elResult);
  }
  else{
    elResult.textContent="minus not possible"
  }
});

