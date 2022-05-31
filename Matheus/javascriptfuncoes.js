// // let verde = 10
// let amarelo = 12
// let vermelho = 15
// let azul = 25

// let cor = "verde"
// if (cor == "verde"){
//     console.log("não divisivel "+ verde);
// }

// let cor2 = "amarelo"
// if (cor2 == "amarelo"){
//     console.log("divisivel " + amarelo);
// }

// let cor3 = "vermelho"
// if (cor3 == "vermelho"){
//     console.log("divisivel " + vermelho);
// }

// let cor4 = "azul"
// if (cor4 == "azul"){
//     console.log("não divisivel " + azul);
// }




// let result = 0

// for (let i= 100; i <= 200; i++){
//     result = i % 2;

// if (result != 0){
//     console.log(i);
// }

// let array = []

// }

let array = [5, 10, 15, 7, 2, 3];
let countPar = 0;
let countImpar = 0;
let verifica = 0;
let somaPar = 0;
let somaImpar = 0;
let mediaPar = 0;
let mediaGeral = 0;

for (let index = 0; index < array.length; index++) {
    verifica = array[index] % 2;
    if (verifica == 0) {
        somaPar =  array[index] + somaPar;
        countPar = countPar + 1;
    } else {
        somaImpar = array[index] + somaImpar;
        countImpar++;
    }
}
mediaPar = somaPar / countPar;
mediaGeral = (somaPar+somaImpar)/(countPar+countImpar);

console.log(countImpar);



// let resultt = 0

// for (let i= 1; i <= 500; i++){
//     resultt = i % 2;

//     if (resultt != 0) {
//         console.log(i);
//     }
// }

