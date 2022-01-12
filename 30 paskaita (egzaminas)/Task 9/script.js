/* ------------------------------ TASK 9 ---------------------------------------------------------------
Sukurkite konstruktoriaus funkciją "Movie" (naudokte ES6), kuri sukuria objektus 3 savybėm ir 1 metodu:

Savybės:
title, director, budget
Metodas: 
wasExpensive() - jeigu filmo budget bus didesnę nei 100 000 000 mln USD, tada gražins true, kiru atveju false 
------------------------------------------------------------------------------------------------------ */

function Movie(title, director, budget) {
    this.title = title;
    this.director = director;
    this.budget= budget;
}

let j=new Movie("titanic", "direc", 1000003);
console.log(j);
pinigai = function() {
    return this.budget;
  };
  console.log(this.budget);
  console.log(pinigai);




    if(this.budget>100000000){
        console.log ("true")
    
    } else{
        console.log("false")
}
    