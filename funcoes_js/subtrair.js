

function subtrair(num1, num2) {
    return num1 - num2;


}

let n1 = 20;
let n2 = 5;

var retornofuncao = subtrair(n1, n2)
console.log(retornofuncao);

function calcular(opc) {

    let num1 = document.getElementById('num1').value;
    let num2 = document.getElementById('num2').value;
    let result;

    switch (opc) {
        case 'subtrair':
            result = subtrair(num1, num2)
            break;
    }
    document.getElementById('res').innerHTML = "O resultado é: " + result;
}

