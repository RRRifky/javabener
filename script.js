function mulai() {
// alert(
//     "Isi Data dulu yaaa"
// )
const nama = prompt("Masukkan nama:");
const umur = prompt("Masukkan umur:");


if (umur >= 13) {
    
    const studio = prompt("Pilih studio (A, B, C):");

    
    if (studio === 'A' || studio === 'a') {
        alert(`Tiket untuk ${nama} , studio A, umur ${umur} `);
    } else if (studio === 'B' || studio === 'b') {
        alert("Tiket untuk " + nama + ", studio B, umur " + umur);
    } else if (studio === 'C' || studio === 'c') {
        alert("Tiket untuk " + nama + ", studio C, umur " + umur);
    } else {
        alert("Pilihan tidak valid");
    }
} else {
    
    alert("Anda tidak memenuhi syarat umur untuk masuk.");
}

}