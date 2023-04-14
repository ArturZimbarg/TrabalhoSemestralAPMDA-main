console.log("calcular orcamento")

//Manipulando DOM
let inputLayout_JS = document.querySelector("#layout-sim_JS")
let inputLayoutNao_JS = document.querySelector("#layout-nao_JS")
let inputLayout = document.querySelector("#layout-sim")
let inputLayoutNao = document.querySelector("#layout-nao")
let inputPrazo = document.querySelector("#prazo")


inputJs.addEventListener("change", atualizarOrcamento)
inputLayout_JS.addEventListener("change", atualizarOrcamento)
inputLayoutNao_JS.addEventListener("change", atualizarOrcamento)
inputLayout.addEventListener("change", atualizarOrcamento)
inputLayoutNao.addEventListener("change", atualizarOrcamento)

function atualizarOrcamento(){
    let preco = inputQtde.value * 100;
    let js = inputJs.checked
    let layout = inputLayout.checked
    let prazo = inputPrazo.value

    let labelPrazo = document.querySelector("label[for=prazo]");
    labelPrazo.innerHTML = `Prazo (${prazo} semanas)` // template literals
    
    if(js) preco *= 1.1;
    if(layout) preco += qtde.value * 30
    let taxaDeUrgencia = 1 - prazo*.05
    preco *= 1 + taxaDeUrgencia

    document.querySelector("#preco").innerHTML = "R$ " + preco.toFixed(2)
}