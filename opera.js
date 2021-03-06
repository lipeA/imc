// acessando o botão calcular
const calcular = document.getElementById('calcular');

function imc() {
    // acessando os campos nome, altura, peso e resultado.
    const nome = document.getElementById('nome').value;
    const altura = document.getElementById('altura').value;
    const peso = document.getElementById('peso').value;
    const resultado = document.getElementById('result');


    // esse primeiro if verifica se todos os campos estão preenchidos!
    if (nome !== '' && peso !== '' && altura !== '') {

        const valorimc = (peso / (altura * altura)).toFixed(1);

          
        let classificacao = '';

        if (valorimc < 18.5) {
            classificacao = 'abaixo do peso.';
        } else if (valorimc < 25) {
            classificacao = 'com peso ideal. Parabéns!!!';
        } else if (valorimc < 30) {
            classificacao = 'levemente acima do peso.';
        } else if (valorimc < 35) {
            classificacao = 'com obesidade grau I.';
        } else if (valorimc < 40) {
            classificacao = 'com obesidade grau II';
        } else {
            classificacao = 'com obesidade grau III. Cuidado!!';
        }

        resultado.textContent =  `${nome} seu IMC é ${valorimc} e vc esta ${classificacao} `
        

    } else {
        resultado.textContent = 'Preencha todos os campos.!'
    }

}

//aqui vai escutar quando for clicado ira chamar a função imc
calcular.addEventListener('click', imc);