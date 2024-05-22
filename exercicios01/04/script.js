let valor1 = document.querySelector("#valor1");
let valor2 = document.querySelector("#valor2");
let valor3 = document.querySelector("#valor3");
let resAritmetica = document.querySelector("#resAritmetica");
let resPonderada = document.querySelector("#resPonderada");
let resSomaMedias = document.querySelector("#resSomaMedias");
let resMediasDasMedias = document.querySelector("#resMediasDasMedias");
let btCalcular = document.querySelector("#btCalcular");
let darkLightModeBtn = document.querySelector(".darkLightModeBtn");
let darkLightModeImg = document.getElementById("darkLightModeImg");
let container = document.getElementById("container");

function mediaAritmetica() {
    let res = (Number(valor1.value) + Number(valor2.value) + Number(valor3.value)) / 3;
    resAritmetica.textContent = res.toFixed(2);

    return res;
}
function mediaPonderada() {
    let res = ((Number(valor1.value) * 3) + (Number(valor2.value) * 2) + (Number(valor3.value) * 5)) / 10;
    resPonderada.textContent = res.toFixed(2);

    return res;
}
function somarMedias() {
    let res = mediaAritmetica() + mediaPonderada();
    resSomaMedias.textContent = res.toFixed(2);

    return res;
}
function mediaDasMedia() {
    let res = (mediaAritmetica() + mediaPonderada() + somarMedias()) / 3;
    resMediasDasMedias.textContent = res.toFixed(2);
}

function verificaSeTemLetras() {

    let temLetra = true;

    if (isNaN(String(valor1.value)) || isNaN(String(valor2.value)) || isNaN(String(valor3.value))) {
        alert("Por favor insira apenas números!")
    }
    else {
        temLetra = false
    }
    return temLetra;
}
btCalcular.addEventListener('click', () => {
    if (!verificaSeTemLetras()) {
        mediaDasMedia();
    }
})
document.addEventListener('keydown', (evento) => {

    const keyName = evento.key;
    if (keyName == 'Enter') {
        if (!verificaSeTemLetras()) {
            mediaDasMedia();
        }
    }

})
darkLightModeBtn.addEventListener('click', () => {

    if (darkLightModeImg.getAttribute('src') == 'images/light_mode_48dp.png') {
        darkLightModeImg.setAttribute('src', 'images/dark_mode_48dp.png');
        document.body.style.backgroundImage = "url('images/pexels-francesco-ungaro-1525041.jpg')"
        container.style.color = "greenyellow"
    }
    else {
        darkLightModeImg.setAttribute('src', 'images/light_mode_48dp.png');
        document.body.style.backgroundImage = "url('images/pexels-eberhardgross-1421903.jpg')"
        container.style.color = "rgb(47, 172, 255)"
    }
})