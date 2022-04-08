//pilih semua data didalam li
const videos = Array.from(document.querySelectorAll('[data-duration]'));

//pilih yang hanya javascript lanjutan
let jsLanjut = videos.filter(video => video.textContent.includes('Javascript'))

//ambil durationnya
//const jsDuration = jsLanjut.map(item => item.dataset.duration);
.map(item => item.dataset.duration)

//ubah durasi menjadi int, ubah menit menjadi detik
.map(part => {
    //04:10 => parsing menjadi array
    const waktu = part.split(":").map(part => parseFloat(part));
    return (waktu[0]*60)+waktu[1];
})

//jumlahkan semua detik
.reduce((total, detik) => total + detik);

//ubah jam menit dan detik
//675
var jam   = Math.floor(jsLanjut / 3600);
jsLanjut = jsLanjut - jam * 3600;
const menit = Math.floor(jsLanjut / 60);
const detik = jsLanjut - menit * 60;
var hasil =  jam+':'+menit+':'+detik;

//simpan di dom
var pDurasi = document.querySelector(".jumlahWaktu");
pDurasi.textContent = hasil;

var jVideo = document.querySelector(".jumlahVideo");
jVideo.textContent = videos.filter(video => video.textContent.includes('Javascript')).length;