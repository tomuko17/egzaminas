/* ------------------------------ TASK 3 -----------------------------------
Parašykite JS kodą, kuris leis vartotojui paspaudus ant mygtuko "Show users"
pamatyti vartotojus iš Github API (endpoint'as pateiktas žemiau).

Paspaudus mygtuką "Show users":
1. Pateikiamas informacijos atvaizdavimas <div id="output"></div> bloke
1.1. Infrmacija, kuri pateikiama: "login" ir "avatar_url" reikšmės (kortelėje)
2. Žinutė "Press "Show Users" button to see users" turi išnykti;
"
Pastaba: Informacija apie user'į (jo kortelė) bei turi turėti bent minimalų stilių;
-------------------------------------------------------------------------- */

const ENDPOINT = 'https://api.github.com/users';

document.querySelector("#btn").addEventListener('click',getData);

function getData(){
    fetch(ENDPOINT)
    .then((Response)=>Response.json())
       // return Response.text();
       // document.querySelector("h1").textContent = login 
   // })
    .then ((data)=>{
        //console.log(data);
        data.forEach((item) => {
        let myH=document.createElement("h4");
        myH.append(`${item.login}`);
        let myP=document.createElement("p");
        myP.append(`${item.avatar_url}`);
        document.querySelector("#output").append(myH, myP);
        
        });

        //document.querySelector("h1").textContent=(duomenys);
    })
    document.querySelector("#message").textContent= "";
    output.style.background ="cyan";
       // .catch((err)=>{
 //       console.log(err);
  //  });
    }
