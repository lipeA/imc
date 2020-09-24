// acessando o botão calcular
const calcular = document.getElementById('calcular');

function imc() {
// acessando os campos nome, altura, peso e resultado.
const nome = document.getElementById('nome').value;
const altura = document.getElementById('altura').value;
const peso = document.getElementById('peso').value;
const resultado = document.getElementById('result').value;


// esse primeiro if verifica se todos os campos estão preenchidos!
if (nome !== ' ' && peso!=='' && altura !=='' ) {
    alert('campos preenhidos')
    
} else {
    resultado.
}



}

//aqui vai escutar quando for clicado ira chamar a função imc
calcular.addEventListener('click',imc);