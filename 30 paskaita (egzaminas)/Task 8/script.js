/* ------------------------------ TASK 8 --------------------------------------------
Sukurkite konstruktoriaus funkciją "Calculator" (naudokite ES5), kuri sukuria objektus 
su 3 metodais:
sum() - priima du skaičius ir grąžina jų sumą.
subtraction() - priima du skaičius ir grąžina jų skirtumą.
multiplication() - priima du skaičius ir grąžina jų daugybos rezultatą;
division() - priima du skaičius ir grąžina jų dalybos rezultatą;
------------------------------------------------------------------------------------ */


    function skaic(a, b, op) {
        this.a = a;
        this.b = b;
        this.op = op;
    }

    let j=new skaic(2, 2, "sum");
    console.log(j);
    console.log(j.this.op);
    //console.log(Object.values(skaic));
    //console.log(op);

    
    
        switch (this.op) {
          case "sum":
            console.log( this.a + this.b);
        //   case "sub":
        //     return this.a - this.b;
        //   case "mul":
        //     return this.a * this.b;
        //   case "div":
        //     return this.a / this.b;
          default:
            console.log( "Error! No operation selected.");
        }
    


