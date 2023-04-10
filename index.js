var myButtons = document.querySelectorAll('.botao');
var botaoAc = document.querySelector('.botao-allclean');
var botaoC = document.querySelector('.botao-clean');
var botaoEqual = document.querySelector('.botao-equal');
var telaCalculadora = document.getElementById('tela-calculadora');
myButtons.forEach(function (button) {
    button.addEventListener('click', handleClick);
});
botaoAc.addEventListener('click', cleanAll);
botaoC.addEventListener('click', clean);
botaoEqual.addEventListener('click', calcular);
function handleClick(event) {
    var valorBotao = event.target.textContent;
    verificarTamanhoMax();
    telaCalculadora.textContent += valorBotao;
}
function cleanAll(event) {
    telaCalculadora.textContent = "";
}
function clean(event) {
    telaCalculadora.textContent = telaCalculadora.innerHTML.substring(0, telaCalculadora.innerHTML.length - 1);
}
function calcular() {
    if (telaCalculadora.innerHTML != "") {
        var expressao = telaCalculadora.innerHTML.replace(/X/g, "*");
        telaCalculadora.textContent = eval(expressao);
    }
}
function verificarTamanhoMax() {
    if (telaCalculadora.innerHTML.length == 12) {
        console.log("cheio");
        return true;
    }
}
