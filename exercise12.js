function konversiMenit(menit) {
    var jam = Math.floor(menit / 60);
    menit = menit - (jam * 60);
    var menitString = String(menit);
    if (menitString.length < 2) {
        menitString = "0" + menit;
    }
    return(jam + ":" + menitString);
}

console.log(konversiMenit(63));
console.log(konversiMenit(124));
console.log(konversiMenit(53));
console.log(konversiMenit(88));
console.log(konversiMenit(120));