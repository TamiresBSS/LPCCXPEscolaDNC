const dia = document.getElementById('dia')
const hora = document.getElementById('hora')
const minuto = document.getElementById('minuto')
const segundo = document.getElementById('segundo')

const lancamento = "14 mar 2024"

function countdown() {
    const dataLanc = new Date(lancamento)
    const hoje = new Date()

    const segTotal = (dataLanc - hoje)/1000;
    // resultado convertido para segundos totais

    const fDias = Math.floor(segTotal / 60 / 60 / 24);
    const fHoras = Math.floor(segTotal / 60 / 60) % 24;
    const fMinutos = Math.floor(segTotal / 60) % 60;
    const fSegundos = Math.floor(segTotal) % 60;

    dia.innerHTML = `${formatoTempo(fDias)}D`
    hora.innerHTML = `${formatoTempo(fHoras)}H`
    minuto.innerHTML = `${formatoTempo(fMinutos)}M`
    segundo.innerHTML = `${formatoTempo(fSegundos)}S`
}

function formatoTempo(tempo) {
    return tempo < 10? `0${tempo}` : tempo;
}

countdown();
setInterval(countdown, 1000)