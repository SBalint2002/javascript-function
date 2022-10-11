let t = [];
let t5 = [];

document.addEventListener('DOMContentLoaded', () => {
    for (let i = 0; i < 20; i++) {
        t.push(Math.floor(Math.random() * 30) + 1)
    }
    t5 = t.filter(e => e%5==0);
    console.log(t5);
    document.getElementById("masodik").addEventListener('click', () => {
        t5 = t.filter(e => e%5==0);
        console.log(t5);
    });
});