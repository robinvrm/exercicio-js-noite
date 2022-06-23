// function verificaridade(idade) {

//     let corpo = document.body
//     if (idade >= 18) {
//         console.log(idade)
        
//     }
    
function somar(num1, num2) {
    return num1 / num2;

}


let num1 = 8;
let num2 = 18;

function calcular(opc) {
    //   document.getElementById("_voltar").style.display = 'block';
     let num1 = document.getElementById('num1').value;
     let num2 = document.getElementById('num2').value;
     let result;

    switch (opc) {
        case 'Filmes':
            result = somar(num1, num2)
            break;
    
        default:
            break;
    }

    
      document.getElementById( 'res' ).innerHTML = "o resultado é=" + result;

}