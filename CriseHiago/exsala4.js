var formapag = "pix";
var valortot = 1000;
var parcela;
var limitecartao=1500;
var numeroparcelas=5;

if(formapag ="pix"){
    x=valortot*0,9 
    console.log ("o valor pago foi de" + x + " por pix em 1 vez");
}else if(limitecartao>=valortot) {
switch (formapag)
{

case "debito":
console.log ("o valor pago foi de " + valortot + " por débito em 1 vez");
break;

case "credito1x":
 valortot *=1,05 
console.log ("o valor pago foi de" + valortot + " por crédito em 1 vez");
break;

case "credito":
limitecartao>=valortot
valortot *=1,1 
parcela= valortot/numeroparcelas

console.log ("o valor pago foi de" + valortot + " por crédito em"+numeroparcelas +
 "vezes e a parcela é de "+parcela);
break;

case "carne":
limitecartao>=valortot
valortot *=1,2 
parcela= valortot/numeroparcelas

console.log ("o valor pago foi de" + valortot + " por carne em"+numeroparcelas +
 "vezes e a parcela é de "+parcela);
break;
}} else {
console.log("o cartão não tem limite");
}