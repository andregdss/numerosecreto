// let titulo = document.querySelector('h1');
// titulo.innerHTML = 'Jogo do Número Secreto';

// let paragrafo = document.querySelector('p');
// paragrafo.innerHTML = 'Escolha um número entre 1 e 10';


exibirInicio();
let listaDeNumerosSorteados = [];
let numeroLimite = 50;
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;

function exibirTextoNaTela (tag, texto) {      //função com parametro
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate: 1.2});
}

function exibirInicio() {
    exibirTextoNaTela('h1', 'Jogo do Numero Secreto');
    exibirTextoNaTela('p', 'Escolha um numero entre 1 e 50');
}

function gerarNumeroAleatorio () {
    let numeroEscolhido = parseInt(Math.random() * numeroLimite + 1);
    let quantidadeElementosLista = listaDeNumerosSorteados.length;
    if (quantidadeElementosLista == numeroLimite) {     //limpar a lista para que possa voltar a selecionar outros numeros 
        listaDeNumerosSorteados = [];
    }
    if (listaDeNumerosSorteados.includes(numeroEscolhido)) {   //comparando se o numero sorteado já existe na lista
        return gerarNumeroAleatorio();                         //se já existe, ele gera outro numero
    } else {
        listaDeNumerosSorteados.push(numeroEscolhido);  //se não existe, o 'push' inclui esse numero na lista e o retorna
        return numeroEscolhido;                         // 'push': insire e 'pop': remove
    }
}


function verificarChute() {
    let chute = document.querySelector('input').value;   //pega o value dentro do box do input
    //alert(chute == numeroSecreto);  //retorno é um booleano (true or false)
    if (chute == numeroSecreto) {
        exibirTextoNaTela('h1', 'Você acertou!!!');
        let qntdTentativas = tentativas > 1 ? 'tentativas' : 'tentativa';
        /*if (tentativas == 1) {
            qntdTentativas = 'tentativa.';
        } else {
            qntdTentativas = 'tentativas.';
        }*/
        let mensagemTentativa = `O numero secreto foi descoberto com ${tentativas} ${qntdTentativas}!`;
        exibirTextoNaTela('p', mensagemTentativa);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        if (chute > numeroSecreto) {
            exibirTextoNaTela('p', 'O número secreto é menor');
        } else {
            exibirTextoNaTela('p', 'O número secreto é maior');
        }
        exibirTextoNaTela('h1', 'Você errou :( Tente novamente!');
        tentativas++; 
        limparCampo();       
    }
}

function limparCampo() {
    chute = document.querySelector('input');
    chute.value = '';
}

function reiniciarJogo() {
    numeroSecreto = gerarNumeroAleatorio();
    limparCampo();
    tentativas = 1;
    exibirInicio();
    document.getElementById('reiniciar').setAttribute('disabled', true);
}

/*function saudacao() {
    alert('Olá mundo!')
}

saudacao();

function saudacaoNome(nome) {
    alert(`Olá ${nome}, seja bem vindo.`)
}

saudacaoNome('André');

function dobroNumero(numero) {
    return numero*2;
}

alert(dobroNumero(2));

function mediaTresValores(valor1, valor2, valor3) {
    let valor1 = parseInt(prompt('Valor 1:'))
    let valor2 = parseInt(prompt('Valor 2:'))
    let valor3 = parseInt(prompt('Valor 3:'))
    return (valor1+valor2+valor3)/3
}

alert(media(1,2,3));

function maiorDeles(num1, num2) {
    let num1 = parseInt(prompt('Numero 1: '))
    let num1 = parseInt(prompt('Numero 2: '))
    if (num1 > num2) {
        return num1
    } else {
        return num2
    }
}

alert(maiorDeles(15,9));

function quadrado(numero) {
    return numero * numero;
}

alert(quadrado(5));*/