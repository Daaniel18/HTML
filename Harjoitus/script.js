console.log("Terve script.js-tiedostosta!");

//Tietotyypit
const nimi = "Koodikerho"; //string: teksti/merkkijono
//nimi = "Saunaklubi"; // heittää voltin konsolissa

// const osallistuja = 12 // number: kokonais- ja desimaaliluku
// const onAvoinna = true; // boolean: true tai false 0 tai 1 

let seuraavaTapahtuma; // undefined
const peruttu = null; // tarkoituksella tyhjä arvo
const aiheet = ["HTML", "CSS", "JS"]; // array: taulukko / lista / kokoelma
const tapahtuma = {nimi: "Koodikerho", paikka: "Auditorio A"}; //objekti

// console.log(typeof nimi, typeof osallistuja, typeof onAvoinna);
console.log(aiheet[0], tapahtuma.paikka);
console.log(aiheet[-2]);
console.log("Heitetään vika alkio pois")
aiheet.pop();
console.log(aiheet[2]);
console.log(aiheet[1]);

let osallistujia = 12;
console.log(osallistujia);
osallistujia = 15;
console.log(osallistujia);

const tapahtumat = ["Aloitus"];
console.log(tapahtumat);
tapahtumat.push("Peli");
console.log(tapahtumat);

console.log(tapahtuma.paikka);
tapahtuma.paikka = "Auditoria B";
console.log(tapahtuma.paikka);

