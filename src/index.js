let lista = [];
let otteloszthato = [];

document.addEventListener('DOMContentLoaded', () => {
    for (let i = 0; i < 20; i++) {
        lista.push(Math.floor(Math.random() * 30) + 1)
    }
    for (let i = 0; i < lista.length; i++) {
        if (lista[i] % 5 == 0) {
            otteloszthato.push(lista[i])
            console.log(lista[i])
        }
    }
});