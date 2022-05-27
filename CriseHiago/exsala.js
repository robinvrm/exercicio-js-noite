var salariobase = 2000;
var cargo = "gerente";
var x;
var y;

switch (cargo)
{
    case "gerente":
    x = salariobase*1.1 ;
    console.log ("o salário é " + x);
    break;

    case "supervisor":
    y = salariobase *1.5;
    console.log ("o salário é " + y);
    break;

    case "outro cargo":
    console.log ("o salário é " + salariobase);
    break;
    
    default:


}