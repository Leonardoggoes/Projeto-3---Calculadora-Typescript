import './style.css';
const myButtons = document.querySelectorAll('.botao');
const botaoAc = document.querySelector('.botao-allclean');
const botaoC = document.querySelector('.botao-clean');
const botaoEqual = document.querySelector('.botao-equal');
let telaCalculadora = document.getElementById('tela-calculadora');
myButtons.forEach((button) => {
    button.addEventListener('click', handleClick);
});
botaoAc.addEventListener('click', cleanAll);
botaoC.addEventListener('click', clean);
botaoEqual.addEventListener('click', calcular);
function handleClick(event) {
    const valorBotao = event.target.textContent;
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
        const expressao = telaCalculadora.innerHTML.replace(/X/g, "*");
        telaCalculadora.textContent = eval(expressao);
    }
}
function verificarTamanhoMax() {
    if (telaCalculadora.innerHTML.length == 12) {
        console.log("cheio");
        return true;
    }
}
