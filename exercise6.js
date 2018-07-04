console.log("Looping\n")


//1. Melakukan Looping Menggunakan While
console.log("1. Melakukan Looping Menggunakan While\n");
console.log("LOOPING PERTAMA");
var counter = 0;
while(counter < 20) {
    counter += 2;
    console.log(counter + " - I love coding");
}
console.log("LOOPING KEDUA");
while(counter > 0) {
    console.log(counter + " - I will become fullstack developer");
    counter -= 2;
}
console.log("\n\n");


//2. Melakukan Looping Menggunakan For
console.log("2. Melakukan Looping Menggunakan For\n");
console.log("LOOPING PERTAMA");
for(var counter2 = 1; counter2 <= 20; counter2++) {
    console.log(counter2 + " - I love coding");
}
console.log("LOOPING KEDUA");
for(; counter2 > 1; counter2--) {
    console.log((counter2-1) + " - I will become fullstack developer");
}
console.log("\n\n");


//3. Angka Ganjil dan Genap
console.log("3. Angka Ganjil dan Genap\n");

var counter3_1 = 0;
while (counter3_1 < 100) {
    counter3_1 ++;
    if(counter3_1 % 2 !== 0) {
        console.log("GANJIL");
    } else {
        console.log("GENAP");
    }
}

console.log("\n\n");

var counter3_2 = 1;
while (counter3_2 < 100) {
    if(counter3_2 % 3 === 0) {
        console.log(counter3_2 + " KELIPATAN 3");
    }
    counter3_2 += 2;
}

console.log("\n\n");

var counter3_2 = 1;
while (counter3_2 < 100) {
    if(counter3_2 % 6 === 0) {
        console.log(counter3_2 + " KELIPATAN 6");
    }
    counter3_2 += 5;
}

console.log("\n\n");

var counter3_2 = 1;
while (counter3_2 < 100) {
    if(counter3_2 % 10 === 0) {
        console.log(counter3_2 + " KELIPATAN 10");
    }
    counter3_2 += 9;
}