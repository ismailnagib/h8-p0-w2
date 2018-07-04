var nama = "";
var peran = "";
if (nama === "" || nama === undefined) {
    console.log("Kamu harus memasukkan namamu!");
} else if (nama !== "" && (peran === "" || peran === undefined)) {
    console.log("Halo " + nama + ", pilih peranmu untuk memulai game!");
} else if (nama !== "" && (peran === "Ksatria" || peran === "ksatria")){
    console.log("Selamat datang di Dunia Proxytia, " + nama);
    console.log("Halo Ksatria " + nama + ", kamu dapat menyerang dengan senjatamu!");
} else if (nama !== "" && (peran === "Tabib" || peran === "tabib")){
    console.log("Selamat datang di Dunia Proxytia, " + nama);
    console.log("Halo Tabib " + nama + ", kamu akan membantu temanmu yang terluka.");
} else if (nama !== "" && (peran === "Penyihir" || peran === "penyihir")){
    console.log("Selamat datang di Dunia Proxytia, " + nama);
    console.log("Halo Penyihir " + nama + ", ciptakan keajaiban yang membantu kemenanganmu!");
} else if (nama !== "" && peran !== "" && peran !== "Ksatria" && peran !== "ksatria" && peran !== "Tabib" && peran !== "tabib" && peran !== "Penyihir" && peran !== "penyihir") {
    console.log("Halo " + nama + ", maaf, untuk saat ini peran yang tersedia adalah: Ksatria, Tabib, dan Penyihir. Terima kasih.")
} else {
    console.log("Maaf, game Proxytia saat ini sedang dalam proses perbaikan. Tolong kembali lagi dalam beberapa saat.");
}