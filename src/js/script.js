const botaoPlayPause = document.getElementById("play-pause");
const audio = document.getElementById("audio-capitulo");
const botaoProximoCapitulo = document.getElementById("proximo")
const botaoCapituloAnterior = document.getElementById("anterior");
const quantidadeCapitulos = 10;
const nomeCapitulo = document.getElementById("capitulo");
let taTocando = false;
let capitulo = 1;

function tocarFaixa() {
    audio.play();
    botaoPlayPause.classList.remove("bi-play-fill");
    botaoPlayPause.classList.add("bi-pause-fill");
    taTocando = true;
}

function pausarFaixa() {
    audio.pause();
    botaoPlayPause.classList.add("bi-play-fill");
    botaoPlayPause.classList.remove("bi-pause-fill");
    taTocando = false;
}

function tocarOuPausarFaixa() {
    if (taTocando === true) {
        pausarFaixa();
    } else {
        tocarFaixa();
    }
}

function proximoCapitulo() {
    if (capitulo < quantidadeCapitulos) {
        capitulo += 1;
    } else {
        capitulo = 1;
    }
    
    audio.src = "../src/books/dom-casmurro/" + capitulo + '.mp3'; //atualizado para o novo caminho do arquivo de áudio correspondente ao próximo capítulo
    nomeCapitulo.innerText = "Capítulo " + capitulo;
    tocarFaixa();
    taTocando = true;
}
    
   

function capituloAnterior() {
    if (capitulo === 1) {
        capitulo = quantidadeCapitulos; //se capitulo for = 1, entao ele está no ultimo capitulo e nao decrementa.
    } else {
        capitulo -= 1;
    }
    

    audio.src = "../src/books/dom-casmurro/" + capitulo + '.mp3';
    nomeCapitulo.innerText = "Capítulo " + capitulo;
    tocarFaixa();
}

botaoPlayPause.addEventListener("alert",tocarFaixa);
botaoPlayPause.addEventListener("click",tocarOuPausarFaixa);
botaoProximoCapitulo.addEventListener("click", proximoCapitulo)
botaoCapituloAnterior.addEventListener("click", capituloAnterior);
audio.addEventListener("ended", proximoCapitulo); //refere-se a um evento que é acionado quando o áudio chega ao fim, escute e se acontecer, execute a função proximoCapitulo