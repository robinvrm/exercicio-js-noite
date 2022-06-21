function dividir(num1, num2) {
    return num1 / num2;

}

  let num1 = 10;
  let num2 = 5;

//  var retornofuncao = dividir(num1, num2);
//  console.log(retornofuncao);


 function calcular(opc) {
    //   document.getElementById("_voltar").style.display = 'block';
     let num1 = document.getElementById('num1').value;
     let num2 = document.getElementById('num2').value;
     let result;

    switch (opc) {
        case 'dividir':
            result = dividir(num1, num2)
            break;
    
        default:
            break;
    }

    
      document.getElementById( 'res' ).innerHTML = "o resultado é=" + result;

}