console.log("Looping - Asterisk\n");


//1. Menyusun Barisan Bintang
console.log("1. Menyusun Barisan Bintang\n");
var rows1 = 5; //input the number of rows
while (rows1 > 0) {
    console.log("*");
    rows1 --;
}
console.log("\n\n");


//2. Menyusun Barisan Bintang Dengan Nested Looping
console.log("2. Menyusun Barisan Bintang Dengan Nested Looping\n");
var rows2 = 5; //input number of rows
var starCount = rows2;
var star = "";
for (; rows2 > 0; rows2--) {
    for (; starCount > 0; starCount--) {
        star = star + "*";
    }
    console.log(star);
}
console.log("\n\n");


//3. Menyusun Barisan Tangga Bintang Dengan Nested Looping
console.log("3. Menyusun Barisan Tangga Bintang Dengan Nested Looping\n");
var rows3 = 5; //input number of rows
var rowPlusOne = rows3 + 1;
for (; rows3 > 0; rows3--) {
    var star2 = "";
    for (starCount2 = rowPlusOne - rows3; starCount2 > 0; starCount2--) {
        star2 = star2 + "*";
    }
    console.log(star2);
}