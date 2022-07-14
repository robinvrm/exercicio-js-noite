//Pegamos o elemento do input cep
const cidade = document.querySelector('#city');
const cidade2 = document.querySelector('#city').value;

//Pegamos o elemento do input button buscar
const botao = document.querySelector('#buscar');


//função para verificar e alimentar os campos
const showData = function (result) {
    //     //o for in  para tratarmos o objeto, o for in pega o resultado (result) e insere na variável campo
    for (const campo in result) {
        //         //nesse if verifico dinamicamente se todos os campos da api eu utilizo nos inputs
        console.log(campo);
        if (document.querySelector('#' + campo)) {
            //             //Pegamos dinamicamente o elemento dos inputs e passamos o value dinamicamente, dizendo q o result é um arrayy e passando
            //             // a variável campo como posição 
            document.querySelector('#' + campo).value = result[campo]
        }
    }
}

//evento criado para realizar o envio da requisição 
// o (e) é a captura do evento
// botao.addEventListener('click', function(e) {
cidade.addEventListener('blur', function (e) {

    //crio o objeto com as propriedades do envio para o ajax
    const options = {
        method: 'GET',
        mode: 'cors',
        cache: 'default'

    }
    console.log(cidade2);
    //buscar - acessa a url de onde será acessado, nesse caso a api o viaCEPT
    //passa por parâmetro o cep em questão, e passa os parametros necessário, como por exemplo op CORS
    //serve pra dizer que está trabalahndo com servidores direrentes, como se fosse uma permissão de acesso
    fetch(`https://api.hgbrasil.com/weather?format=json-cors&key=677e680c&city_name=${cidade2}`, options)


        //quando utilizamos o fetch ele retorna uma promessa, ele é assincrono, então fazemos as verificações abaixo
        //então faça algo, nesse caso crio uma função onde pego o "response" a resposta, no formato json
        .then(function (response) {
            response.json()
                //o json tbem retorna um promessa, então precisamos verificar se deu certo
                //se der certo nesse caso retorna os dados p nós
                .then(function (data) {
                    showData(data.results);
                    console.log(data.results);
                })
        })

        //se der errado faz outra coisa
        .catch(function (e) {
            console.log('Error: ' + e.message);
        })

    // console.log(search);
})