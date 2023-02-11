//factorial del 10
//10=1*2*3*4*5*6*7*8*9*10 -> 3628800

let cont = 10;
let i = cont - 1;

while (cont){
    cont *= i
    
    if(i <= 1) break;

    i--;
    console.log(cont);
    
}