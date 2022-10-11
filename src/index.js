let t = [];
let t5 = [];

document.addEventListener('DOMContentLoaded', () => {
    //1. Feladat
    for (let i = 0; i < 20; i++) {
        t.push(Math.floor(Math.random() * 30) + 1)
    }
    t5 = t.filter(e => e%5==0);
    console.log(t5);
    //2. Feladat
    document.getElementById("masodik").addEventListener('click', () => {
        t5 = t.filter(e => e%5==0);
        console.log(t5);
    });
    //3. Feladat
    document.getElementById("hozzaad").addEventListener('click', () => {
        t.push(parseInt(document.getElementById("number").value));
        console.log(t5);
    })
    //6. Feladat
    szazlabuMejelenites('szovegesID', labakbolSzazlabuk(t));
});

//4.Feladat
class Szazlabu{
    #labakSzama;
    constructor(labakszama){
        this.labakszama = labakszama;
    }
    toString(){
        let szoveg = " lábú százlábú";
        return this.labakszama + szoveg;
    }
    static labakbolSzazlabuk(t = []){
        return t.map(e => new Szazlabu);
    }
}

let szl = new Szazlabu(40);
console.log(szl.toString());

//5. Feladat
function labakbolSzazlabuk(t = []){
    return t.map(e => new Szazlabu(e));
}

//6. Feladat
function szazlabuMejelenites(id, t){
    t.forEach((e) => {
        let szuloElem = document.getElementById(id); 
        let listaElem = document.createElement('li');
        let listaElemText = document.createElement('p');
        listaElemText.textContent = e.toString();
        listaElem.appendChild(listaElemText);
        szuloElem.appendChild(listaElem); 
    });
}

