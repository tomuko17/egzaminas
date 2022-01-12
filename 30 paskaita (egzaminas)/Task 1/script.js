/* ------------------------------ TASK 1 ----------------------------
Parašykite JS kodą, kuris leis vartotojui įvesti svorį kilogramais ir
pamatyti jo pateikto svorio kovertavimą į:
1. Svarus (lb) | Formulė: lb = kg * 2.2046
2. Gramus (g) | Formulė: g = kg / 0.0010000
3. Uncijos (oz) | Formul4: oz = kg * 35.274

Pastaba: atvaizdavimas turi būti matomas pateikus formą ir pateikiamas
<div id="output"></div> viduje, bei turi turėti bent minimalų stilių;
------------------------------------------------------------------- */

document.querySelector("form").addEventListener("submit",(e)=>{
e.preventDefault();
 
    let Kg = document.querySelector("input").value;
        console.log(Kg);
    let svarai = Kg*2.2046;
    console.log(svarai.toFixed(2));
    let gramai = Kg*1000;
    console.log(gramai);
    let uncijos = Kg*35.274;
    console.log(uncijos.toFixed(2));
    document.querySelector("#output").textContent= ("Svoris svarai - "+svarai.toFixed(2) +" lb");
    document.querySelector("#output").textContent= ("Svoris gramais - "+gramai +" g");
  //  document.querySelector("#output").textContent= ("Svoris uncijomis - "+uncijos.toFixed(2) +" oz") ;


});

