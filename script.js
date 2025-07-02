let numeroSelecionado = "";
let operacaoSelecionada = "";
let numeroAnterior = "";
document.getElementById("display").value = "0";
document.getElementsByClassName("numeral").addEventListener('click',darkMode(target));

function exibirNumeros(numero) {
    numeroSelecionado += numero;
    if(operacaoSelecionada == ""){
        document.getElementById("display").value = eval(String(operacaoSelecionada + numeroSelecionado));
    } else {
        document.getElementById("display").value = eval(new String( numeroAnterior + operacaoSelecionada + numeroSelecionado));
    }
}

function exibirOperacoes(operacao) {
    if (numeroSelecionado === "") {
        return;
    }

    operacaoSelecionada = operacao;
    numeroAnterior = numeroSelecionado;
    numeroSelecionado = "";
    document.getElementById("display").value = eval(new String(numeroAnterior + operacaoSelecionada));
}

function calculadora() {
    let resultado = 0.00;
    let valorSelecionado = parseFloat(numeroSelecionado);
    let valorAnterior = parseFloat(numeroAnterior);


    if (valorAnterior === "" || valorSelecionado === "") {
        return;
    }

    if (operacaoSelecionada === "+") {
        resultado = valorAnterior + valorSelecionado;
    } else if (operacaoSelecionada === "-") {
        resultado = valorAnterior - valorSelecionado;
    } else if (operacaoSelecionada === "*") {
        resultado = valorAnterior * valorSelecionado;
    } else if (operacaoSelecionada === "/") {
        resultado = valorAnterior / valorSelecionado;
    } else {
        return;
    }

    numeroSelecionado = resultado.toString();
    operacaoSelecionada = "";
    numeroAnterior = "";
    document.getElementById("display").value = numeroSelecionado;
}


function limparCalculadora() {
    numeroSelecionado = "";
    operacaoSelecionada = "";
    numeroAnterior = "";
    document.getElementById("display").value = "0";
}