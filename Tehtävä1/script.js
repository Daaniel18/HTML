//tehtävä 2b//

const examScores = [67, 78, 45, 89, 94, 56, 72, 81, 63, 90];
const passingScore = 50;
let Passedcount = 0;

for (let i = 0; i < examScores.length; i++) {
    if (examScores[i] >= passingScore) {
    console.log(examScores[i] + " - Hyväksytty");
    Passedcount++;
    } else {
    console.log(examScores[i] + " - Hylätty");
    }
}
console.log("Hyväksyttyjen määrä: " + Passedcount);

//tehtävä 2c// 

const studentIds = ["STU001", "STU002", "STU003", "STU004", "STU005", "STU006", "STU007", "STU008", "STU009", "STU010"];

console.log("Opiskelijoiden ID:t ja tulokset");
for (let i = 0; i < studentIds.length; i++) {
    console.log(studentIds[i].toUpperCase() + ": " + examScores[i]);
}

let sum = 0;
for (let i = 0; i < examScores.length; i++) {
    sum += examScores[i];
}

const highest = Math.max(...examScores);
const lowest = Math.min(...examScores);
const average = sum / examScores.length;

console.log("statistiikka:");
console.log("Korkein pistemäärä: " + highest);
console.log("Alhaisin pistemäärä: " + lowest);
console.log("Keskiarvo: " + average);
