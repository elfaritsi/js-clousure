// clousure adalah fungsi yang ada didalam fungsi
function Mahasiswa(nama, umur){
	return function prestasi(ip){
		return `Halo ${nama}, ip anda adalah ${ip}`;
	}
}

// yg ini untuk mengakses fungsi Mahasiswa
let siswa = new Mahasiswa("udin", 20);

//yg ini untuk mengakses fungsi prestasi
let siswi = siswa(4);