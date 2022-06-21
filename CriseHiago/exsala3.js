var peso = 98;
var altura = 2;
var x;
x = peso / (altura * altura);

if (x <= 18.5) {
    console.log("abaixo do peso normal");
} else if (18.5<x && x<=24.9){
    console.log("peso normal");
} else if (24.9<x && x<29.9){
    console.log("sobrepeso");
} else if (29.9<x && x<=34.9){
    console.log("obesidade I");
}else if (34.9<x && x<39.9){
    console.log("obesidade II");
}else if (39.9<x){
    console.log("obesidade III");}


