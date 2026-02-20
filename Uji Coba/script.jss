// ==========================================
// STIT Al-Anshar - JavaScript Interaktif
// Portal Akademik STIT Al-Anshar Tanjung Selor
// ==========================================

// ========== SISTEM LOGIN ==========
let isLoggedIn = false;
let currentUser = '';

function prosesLogin(e) {
    e.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const btnMasuk = document.getElementById('btnMasuk');
    
    // Loading
    if (btnMasuk) {
        btnMasuk.innerHTML = '<span class="spinner-border spinner-border-sm me-2"></span>Loading...';
        btnMasuk.disabled = true;
    }
    
    setTimeout(() => {
        if (username && password) {
            isLoggedIn = true;
            currentUser = username;
            
            // Update UI
            const loginBtn = document.getElementById('loginBtn');
            const userBtn = document.getElementById('userBtn');
            const userName = document.getElementById('userName');
            
            if (loginBtn) loginBtn.style.display = 'none';
            if (userBtn) {
                userBtn.style.display = 'block';
                if (userName) user username;
            }
            
            // SimName.textContent =pan ke localStorage
            localStorage.setItem('isLoggedIn', 'true');
            localcurrentUser', usernameStorage.setItem(');
            
            // Tutup modal
            const modalEl = document.querySelector('.modal.show');
            if (modalEl) {
                const modal = bootstrap.Modal.getInstance(modalEl);
                if (modal) modal.hide();
            }
            
            // Reset form
            document.getElementById('loginForm').reset();
            if (btnMasuk) {
                btnMasuk.innerHTML = '<i class="fas fa-sign-in-alt me-2"></i>Masuk Sistem';
                btnMasuk.disabled = false;
            }
            
            alert('Login berhasil! Selamat datang, ' + username);
        } else {
            alert('Username dan password salah!');
            if (btnMasuk) {
                btnMasuk.innerHTML = '<i class="fas fa-sign-in-alt me-2"></i>Masuk Sistem';
                btnMasuk.disabled = false;
            }
        }
    }, 1000);
}

// ========== CEK LOGIN SAAT LOAD ==========
window.onload = function() {
    if (localStorage.getItem('isLoggedIn') === 'true') {
        isLoggedIn = true;
        currentUser = localStorage.getItem('currentUser');
        
        const loginBtn = document.getElementById('loginBtn');
        const userBtn = document.getElementById('userBtn');
        const userName = document.getElementById('userName');
        
        if (loginBtn) loginBtn.style.display = 'none';
        if (userBtn) {
            userBtn.style.display = 'block';
            if (userName) userName.textContent = currentUser;
        }
    }
};

// ========== NAVIGASI HALAMAN ==========
function tampilkanHalaman(halaman) {
    // Semua halaman disembunyikan dulu
    const halamanBeranda = document.getElementById('halamanBeranda');
    const halamanKRS = document.getElementById('halamanKRS');
    const halamanNilai = document.getElementById('halamanNilai');
    const halamanUKT = document.getElementById('halamanUKT');
    const halamanPerpus = document.getElementById('halamanPerpus');
    const halamanWisuda = document.getElementById('halamanWisuda');
    const halamanSkripsi = document.getElementById('halamanSkripsi');
    const footer = document.querySelector('footer');
    
    if (halamanBeranda) halamanBeranda.style.display = 'none';
    if (halamanKRS) halamanKRS.style.display = 'none';
    if (halamanNilai) halamanNilai.style.display = 'none';
    if (halamanUKT) halamanUKT.style.display = 'none';
    if (halamanPerpus) halamanPerpus.style.display = 'none';
    if (halamanWisuda) halamanWisuda.style.display = 'none';
    if (halamanSkripsi) halamanSkripsi.style.display = 'none';
    if (footer) footer.style.display = 'none';
    
    // Tampilkan footer untuk halaman beranda
    if (halaman === 'beranda') {
        if (halamanBeranda) halamanBeranda.style.display = 'block';
        if (footer) footer.style.display = 'block';
    } else if (halaman === 'profil' || halaman === 'layanan' || halaman === 'berita' || halaman === 'data' || halaman === 'pendaftaran') {
        if (halamanBeranda) halamanBeranda.style.display = 'block';
        if (footer) footer.style.display = 'block';
        
        // Scroll ke section yang diinginkan
        setTimeout(() => {
            const section = document.getElementById(halaman);
            if (section) section.scrollIntoView({behavior: 'smooth'});
        }, 100);
    }
    
    window.scrollTo(0, 0);
}

// ========== BUKA LAYANAN ==========
function bukaLayanan(layanan) {
    if (!isLoggedIn) {
        const modal = new bootstrap.Modal(document.getElementById('loginModal'));
        modal.show();
        alert('Silakan login terlebih dahulu untuk mengakses layanan!');
        return;
    }
    
    // Semua halaman disembunyikan
    const halamanBeranda = document.getElementById('halamanBeranda');
    const halamanKRS = document.getElementById('halamanKRS');
    const halamanNilai = document.getElementById('halamanNilai');
    const halamanUKT = document.getElementById('halamanUKT');
    const halamanPerpus = document.getElementById('halamanPerpus');
    const halamanWisuda = document.getElementById('halamanWisuda');
    const halamanSkripsi = document.getElementById('halamanSkripsi');
    const footer = document.querySelector('footer');
    
    if (halamanBeranda) halamanBeranda.style.display = 'none';
    if (halamanKRS) halamanKRS.style.display = 'none';
    if (halamanNilai) halamanNilai.style.display = 'none';
    if (halamanUKT) halamanUKT.style.display = 'none';
    if (halamanPerpus) halamanPerpus.style.display = 'none';
    if (halamanWisuda) halamanWisuda.style.display = 'none';
    if (halamanSkripsi) halamanSkripsi.style.display = 'none';
    if (footer) footer.style.display = 'none';
    
    // Isi data mahasiswa
    const user = currentUser || 'Mahasiswa';
    const nim = '2021.' + Math.floor(Math.random() * 9000);
    
    // Tampilkan halaman yang dipilih
    if (layanan === 'KRS') {
        if (halamanKRS) {
            halamanKRS.style.display = 'block';
            const krsNama = document.getElementById('krsNama');
            const krsNIM = document.getElementById('krsNIM');
            if (krsNama) krsNama.textContent = user;
            if (krsNIM) krsNIM.textContent = nim;
        }
    } else if (layanan === 'Nilai') {
        if (halamanNilai) {
            halamanNilai.style.display = 'block';
            const nilaiNama = document.getElementById('nilaiNama');
            const nilaiNIM = document.getElementById('nilaiNIM');
            if (nilaiNama) nilaiNama.textContent = user;
            if (nilaiNIM) nilaiNIM.textContent = nim;
        }
    } else if (layanan === 'UKT') {
        if (halamanUKT) {
            halamanUKT.style.display = 'block';
            const uktNama = document.getElementById('uktNama');
            const uktNIM = document.getElementById('uktNIM');
            if (uktNama) uktNama.textContent = user;
            if (uktNIM) uktNIM.textContent = nim;
        }
    } else if (layanan === 'Perpus') {
        if (halamanPerpus) halamanPerpus.style.display = 'block';
    } else if (layanan === 'Wisuda') {
        if (halamanWisuda) {
            halamanWisuda.style.display = 'block';
            const wisudaNama = document.getElementById('wisudaNama');
            const wisudaNIM = document.getElementById('wisudaNIM');
            if (wisudaNama) wisudaNama.value = user;
            if (wisudaNIM) wisudaNIM.value = nim;
        }
    } else if (layanan === 'Skripsi') {
        if (halamanSkripsi) {
            halamanSkripsi.style.display = 'block';
            const skripsiNama = document.getElementById('skripsiNama');
            const skripsiNIM = document.getElementById('skripsiNIM');
            if (skripsiNama) skripsiNama.value = user;
            if (skripsiNIM) skripsiNIM.value = nim;
        }
    }
    
    window.scrollTo(0, 0);
}

// ========== TUTUP LAYANAN ==========
function tutupLayanan() {
    const halamanKRS = document.getElementById('halamanKRS');
    const halamanNilai = document.getElementById('halamanNilai');
    const halamanUKT = document.getElementById('halamanUKT');
    const halamanPerpus = document.getElementById('halamanPerpus');
    const halamanWisuda = document.getElementById('halamanWisuda');
    const halamanSkripsi = document.getElementById('halamanSkripsi');
    const halamanBeranda = document.getElementById('halamanBeranda');
    const footer = document.querySelector('footer');
    
    if (halamanKRS) halamanKRS.style.display = 'none';
    if (halamanNilai) halamanNilai.style.display = 'none';
    if (halamanUKT) halamanUKT.style.display = 'none';
    if (halamanPerpus) halamanPerpus.style.display = 'none';
    if (halamanWisuda) halamanWisuda.style.display = 'none';
    if (halamanSkripsi) halamanSkripsi.style.display = 'none';
    if (halamanBeranda) halamanBeranda.style.display = 'block';
    if (footer) footer.style.display = 'block';
    
    window.scrollTo(0, 0);
}

// ========== FUNGSI KRS ==========
function toggleAllKRS() {
    const selectAll = document.getElementById('selectAllKRS');
    const checkboxes = document.querySelectorAll('.krs-check');
    checkboxes.forEach(cb => cb.checked = selectAll.checked);
    hitungTotalSKS();
}

function hitungTotalSKS() {
    const checkboxes = document.querySelectorAll('.krs-check:checked');
    let total = 0;
    checkboxes.forEach(cb => total += parseInt(cb.value));
    const totalEl = document.getElementById('totalSKS');
    if (totalEl) totalEl.textContent = total;
}

function simpanKRS() {
    const totalEl = document.getElementById('totalSKS');
    const total = totalEl ? totalEl.textContent : '0';
    alert('KRS berhasil disimpan! Total SKS: ' + total);
}

function cetakKRS() {
    window.print();
}

// ========== FUNGSI PEMBAYARAN UKT ==========
function simpanPembayaran(e) {
    if (e) e.preventDefault();
    alert('Pembayaran berhasil diverifikasi! Tagihan akan dikonfirmasi oleh admin dalam 1x24 jam.');
}

// ========== FUNGSI WISUDA ==========
function daftarWisuda(e) {
    if (e) e.preventDefault();
    alert('Pendaftaran wisuda berhasil! Silakan tunggu konfirmasi dari pihak kampus.');
}

// ========== FUNGSI SKRIPSI ==========
function ajukanSkripsi(e) {
    if (e) e.preventDefault();
    alert('Judul skripsi berhasil diajukan! Menunggu persetujuan dosen pembimbing.');
}

// ========== SMOOTH SCROLL ==========
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href !== '#') {
            e.preventDefault();
            const target = document.querySelector(href);
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        }
    });
});

// ========== EFEK NAVBAR SAAT DISCROLL ==========
const navbar = document.querySelector('.navbar');
if (navbar) {
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            navbar.style.padding = "8px 0";
            navbar.style.boxShadow = "0 4px 10px rgba(0,0,0,0.2)";
        } else {
            navbar.style.padding = "12px 0";
            navbar.style.boxShadow = "0 2px 4px rgba(0,0,0,0.1)";
        }
    });
}

// ========== INISIALISASI CHECKBOX KRS ==========
document.addEventListener('DOMContentLoaded', function() {
    // Add event listeners untuk checkbox KRS
    const checkboxes = document.querySelectorAll('.krs-check');
    checkboxes.forEach(cb => {
        cb.addEventListener('change', hitungTotalSKS);
    });
    
    // Hitung total SKS awal
    hitungTotalSKS();
});
