var tanggal = 1; // assign nilai variabel tanggal disini! (dengan angka antara 1 - 31)
var bulan = 1; // assign nilai variabel bulan disini! (dengan angka antara 1 - 12)
var tahun = 1900; // assign nilai variabel tahun disini! (dengan angka antara 1900 - 2200)
if (tanggal === undefined || tanggal < 1 || tanggal > 31) {
    console.log("Masukkan tanggal yang valid!");
} else if (tanggal !== undefined && tanggal >= 1 && tanggal <= 31 && (bulan === undefined || bulan < 1 || bulan > 12)) {
    console.log("Masukkan bulan yang valid!");
} else if (tanggal !== undefined && tanggal >= 1 && tanggal <= 31 && bulan !== undefined && bulan >= 1 && bulan <= 12 && (tahun === undefined || tahun < 1900 || tahun > 2200)) {
    console.log("Masukkan tahun yang valid!");
} else if (tanggal > 29 && bulan === 2) {
    console.log("Masukkan tanggal dan bulan yang valid! Bulan Februari hanya memiliki 28 hari atau 29 hari (pada tahun kabisat).");
} else if (tanggal > 30 && (bulan === 4 || bulan === 6 || bulan === 9 || bulan === 11)) {
    console.log("Masukkan tanggal dan bulan yang valid! Bulan April, Juni, September, dan November hanya memiliki 30 hari.");
} else {
    switch(bulan) {
        case 1:   { console.log(tanggal + " Januari " + tahun); break; }
        case 2:   { console.log(tanggal + " Februari " + tahun); break; }
        case 3:   { console.log(tanggal + " Maret " + tahun); break; }
        case 4:   { console.log(tanggal + " April " + tahun); break; }
        case 5:   { console.log(tanggal + " May " + tahun); break; }
        case 6:   { console.log(tanggal + " Juni " + tahun); break; }
        case 7:   { console.log(tanggal + " Juli " + tahun); break; }
        case 8:   { console.log(tanggal + " Agustus " + tahun); break; }
        case 9:   { console.log(tanggal + " September " + tahun); break; }
        case 10:   { console.log(tanggal + " Oktober " + tahun); break; }
        case 11:   { console.log(tanggal + " November " + tahun); break; }
        case 12:   { console.log(tanggal + " Desember " + tahun); break; }
        default:  { console.log("program error"); break;}
    }
}