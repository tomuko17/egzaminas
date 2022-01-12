/* ------------------------------ TASK 4 -----------------------------------
Parašykite JS kodą, vartotjui atėjus į tinkaį kreipsis į cars.json failą
ir iš atvaizduos visus automobilių gamintojus ir pagamintus modelius. 
Kiekvienas gamintojas turės savo atvaizdavimo "kortelę", kurioje bus 
nurodomas gamintojas ir jo pagaminti modeliai.


Pastaba: Informacija apie automobilį (brand) (jo kortelė) bei turi turėti 
bent minimalų stilių;
-------------------------------------------------------------------------- */

const ENDPOINT = 'cars.json';

fetch(ENDPOINT)
    .then((resp)=> {
        return resp.json()
    })

    .then((data)=>{
        data.forEach((item) => {
            let myH=document.createElement("h2");
            let myData=`${item.brand}:   ${item.models}. ` ;
            myH.append(myData)
            document.querySelector("#output").append(myH); 
            
            
        });
        
    })
    .catch((err)=>console.log(err));
