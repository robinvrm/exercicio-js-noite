# exercicio-js-noite
exercícios de javascript turma noite

 
>  ### - Exercício 02
>   * Em uma loja e CD ́s existem apenas quatro tipos de preços que estão associados a cores. 
>   Assim os CD que ficam na loja não são marcados por preços e sim por cores. 
>   Desenvolva o algoritmo que a partir da entrada da cor, mostre o preço no console. 
>   A loja está atualmente com a seguinte tabela de preços.

   COR   | VALOR EXEMPLO
--------- | ------
VERDE | R$ 10
AMARELO | R$ 12
VERMELHO | R$ 15
AZUL | R$ 25
 
 

   > ### - Exercício 03
   > * Verificar se um número inteiro é divisível por 3. Mostrar no console a mensagem se é divisível ou não.

> ### - Exercício 04
>    * Receba um número (de 1 a 12) e retorne o mês correspondente como uma string. 
>    Por exemplo, se a entrada for 2, deverá retornar “fevereiro”, pois este é o 2° mês. 

> ### - Exercício 05
>    * Fazer um algoritmo que receba o valor do salário mínimo e o valor do salário de uma pessoa. 
>    Calcular e imprimir quantos salários mínimos ela ganha.
>    Se a pessoa ganhar menos de 1 salário mínimo, retorar na tela "baixa renda"
>    Se a pessoa ganhar entre 1 salários mínimo e 5 salários mínimos, retorar na tela "classe média"
>    Se a pessoa ganhar mais de 5 salários mínimo, retorar na tela "classe alta"
>    base salário mínimo 1212.
>    Salário da pessoa irá ser dada pela variável

> ### - Exercício 03
   > * Verificar se um número inteiro é divisível por 3. Mostrar no console a mensagem se é divisível ou não.

Switch case

Exemplo:
* Mostrar a estação do ano, conforme mês escolhido.
~~~
 let mes = "Janeiro";

 switch (mes) {
     case "Janeiro":
     case "Fevereiro":
     case "Março":
         console.log("Verão!");
         break;
     case "Abril":
     case "Maio":
     case "Junho":
         console.log("Outono!");
         break;
     case "Julho":
     case "Agosto":
     case "Setembro":
         console.log("Inverno!");
         break;
     case "Outubro":
     case "Novembro":
     case "Dezembro":
         console.log("Primavera!");
 }
~~~


> ### - Exercício 01
>    *  exercício verificar o salário conforme o cargo
>    salário base = 2000;
>    se for gerente, ganha 10% a mais do salário base
>    se for supervisor, ganha 50% a mais do salário base
>    qualquer outro cargo, ganha o salário base
 * Exercício resolvido em sala de aula:

~~~
let cargo = "supervisor";
let salarioBase = 2000;
 switch (cargo) {
     case "gerente":
         salarioBase *= 1.10;
         break;
     case "supervisor":
         salarioBase *= 1.50;
         break;
     default:
         salarioBase = salarioBase;
         break;
 }
 console.log(salarioBase);
~~~

> ### - Exercício 02 -  calculadora
>  * faça um script que receba 2 números, e possa escolher umas das 4 operações básicas. Retorne o resultado da operação escolhida.

> ### - Exerecício 03 - IMC
>  * fazer o cálculo do IMC
>  02 - Calcular IMC
>
> IMC = peso / (altura * altura)

   IMC   | Resultado
--------- | ------
menor que 18,5 | abaixo do peso normal
18,5 - 24,9 | peso normal
25 - 29,9 | excesso de peso
30 - 34,9 | obesidade classe I
35 - 39,9 | obesidade classe II
maior ou igual a 35 | obesidade classe III

> ### Exercício 04
> 	* compras
>
> crie um script com a seguinte situação.
> uma variável com valor total da compra.
> tipos de pagamentos:
> pix, débito, crédito, parcelado no cartão, parcelado no carnê.
> se for pix, aplica-se um desconto de 10%;
> se for no débito, valor original;
> se for crédito em 1x, acréscimo de 5%;
> se for parcelado no cartão, acréscimo de 10% por parcela;
> se for parcelado no carnê, acréscimo de 20% por parcela;
> se a compra for feita em cartão, tanto em crédito ou em débito, 
> verificar se tem o valor disponível no cartão;
> o valor do cartão será dada por uma variável
> aparecer a forma de pagamento, em quantas vezes foi escolhido, 
> se for parcelado aparecer o valor total e valor de cada par

> ### Exercício 05 - Desafio
>
> Lista de filmes:
>
> Escreva um script que, de acordo com a opção escolhida, mostrará as opções para o usuário.
> As opções serão:


   Gênero   | Classificação Indicativa
--------- | ------
Ação | 14
Romance | 10
Comédia | 8
Animação | Livre
Suspense | 16
Terror | 18

 > Após ter sido escolhido a opção, terá que verificar a classificação indicativa do filme.
 > Se o usuário tiver o mínimo de idade para a classificação do genêro do filme, retorne no console "Bom Filme";
 > Caso a idade do usuário não ter o mínimo da classificação do genêro do filme, retorne no console "Esse título não é para sua Idade", e mostre os Gêneros que a idade > do usuário pode assistir.

# LOOP

01 - Escrever um algoritmo para mostrar os números ímpares entre 100 e 200.

02 - Desenvolver um algoritmo que efetue a soma de todos os números ímpares que são múltiplos de
três e que se encontram no conjunto dos números de 1 até 500.

03 - Escrever um algoritmo que leia um valor para uma variável N de 1 a 10 e calcule a tabuada de
N. Mostre a tabuada na forma: 0 x N = 0, 1 x N = 1N, 2 x N = 2N, ..., 10 x N = 10N

04 - Escrever um script que leia número de 0 a 999. Desses, fazer a soma apenas dos ímpares e mostrar na tela. Mostrar também o total de números ímpares e pares. E por fim,  fazer a média aritmética da soma dos números divisíveis por 3;

05 - Desenvolver um algoritmo que leia a altura(em cm) de 15 pessoas. Este programa deverá calcular e
mostrar : [array]
a. A menor altura do grupo;
b. A maior altura do grupo;

06 - Escrever um algoritmo que leia 10 números e conte quantos deles
estão nos seguintes intervalos: [0-25], [26-50], [51-75] e [76-100]. 
mostre na tela a quantidade de vezes que aparece cada intervalo.
[array]

07 - Faça um algoritmo que leia 6 valores positivos.
Calcule a quantidade de números pares e ímpares, a média de valores pares e a média geral dos
números lidos.[array]

08 - escreva um script que leia 15 números positivos, econtre o maior deles e o menos deles, e mostre na tela. [array]
